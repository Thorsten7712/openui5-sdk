/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP SE or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/*global Promise *///declare unusual global vars for JSLint/SAPUI5 validation

/**
 * ResourceBundle-based DataBinding
 *
 * @namespace
 * @name sap.ui.model.resource
 * @public
 */

// Provides the resource bundle based model implementation
sap.ui.define(['jquery.sap.global', 'sap/ui/model/Model', './ResourcePropertyBinding'],
	function(jQuery, Model, ResourcePropertyBinding) {
	"use strict";


	/**
	 * Constructor for a new ResourceModel.
	 *
	 * @class Model implementation for resource bundles
	 *
	 * @extends sap.ui.model.Model
	 *
	 * @author SAP SE
	 * @version 1.24.2
	 *
	 * @param {object} oData parameters used to initialize the ResourceModel; at least either bundleUrl or bundleName must be set on this object; if both are set, bundleName wins
	 * @param {string} [oData.bundleUrl] the URL to the base .properties file of a bundle (.properties file without any locale information, e.g. "mybundle.properties")
	 * @param {string} [oData.bundleName] the UI5 module name of the .properties file; this name will be resolved to a path like the paths of normal UI5 modules and ".properties" will then be appended (e.g. a name like "myBundle" can be given)
	 * @param {string} [oData.bundleLocale] an optional locale; when not given, the default is the active locale from the UI5 configuration
	 * @param {boolean} [oData.async=false] whether the language bundle should be loaded asynchronously
	 * @constructor
	 * @public
	 * @name sap.ui.model.resource.ResourceModel
	 */
	var ResourceModel = Model.extend("sap.ui.model.resource.ResourceModel", /** @lends sap.ui.model.resource.ResourceModel.prototype */ {
	
		constructor : function(oData) {
			Model.apply(this, arguments);
			
			this.bAsync = !!(oData && oData.async);
		
			this.sDefaultBindingMode = this.bAsync ? sap.ui.model.BindingMode.OneWay : sap.ui.model.BindingMode.OneTime;
			this.mSupportedBindingModes = {
				"OneWay" : true,
				"TwoWay" : false,
				"OneTime" : true
			};
			
			if(this.bAsync && this.sDefaultBindingMode == sap.ui.model.BindingMode.OneTime){
				jQuery.sap.log.warning("Using binding mode OneTime for asynchronous ResourceModel is not supported!");
			}
	
			this.oData = oData;
			
			// load resource bundle
			_load(this, true);
		},
	
		metadata : {
			publicMethods : [ "getResourceBundle" ]
		}
	
	});
	
	/**
	 * Creates a new subclass of class sap.ui.model.resource.ResourceModel with name <code>sClassName</code> 
	 * and enriches it with the information contained in <code>oClassInfo</code>.
	 * 
	 * For a detailed description of <code>oClassInfo</code> or <code>FNMetaImpl</code> 
	 * see {@link sap.ui.base.Object.extend Object.extend}.
	 *   
	 * @param {string} sClassName name of the class to be created
	 * @param {object} [oClassInfo] object literal with informations about the class  
	 * @param {function} [FNMetaImpl] alternative constructor for a metadata object
	 * @return {function} the created class / constructor function
	 * @public
	 * @static
	 * @name sap.ui.model.resource.ResourceModel.extend
	 * @function
	 */
	
	/**
	 * Returns the resource bundle
	 *
	 * @param {object} oData
	 * @return loaded resource bundle or Promise in async case
	 * @private
	 * @name sap.ui.model.resource.ResourceModel#loadResourceBundle
	 * @function
	 */
	ResourceModel.prototype.loadResourceBundle = function(oData) {
		var oConfiguration = sap.ui.getCore().getConfiguration(),
			oRb, sUrl, sLocale, bIncludeInfo;
		sLocale = oData.bundleLocale;
		if (!sLocale) {
			sLocale = oConfiguration.getLanguage();
		}
		bIncludeInfo = oConfiguration.getOriginInfo();
		sUrl = _getUrl(oData.bundleUrl, oData.bundleName);
	    oRb = jQuery.sap.resources({url: sUrl, locale: sLocale, includeInfo: bIncludeInfo, async: !!oData.async});
	    return oRb;
	};
	
	/**
	 * Enhances the resource model with a custom resource bundle. The resource model
	 * can be enhanced with multiple resource bundles. The last enhanced resource
	 * bundle wins against the previous ones and the original ones. This function
	 * can be called several times.
	 *
	 * @param {object} oData parameters used to initialize the ResourceModel; at least either bundleUrl or bundleName must be set on this object; if both are set, bundleName wins
	 * @param {string} [oData.bundleUrl] the URL to the base .properties file of a bundle (.properties file without any locale information, e.g. "mybundle.properties")
	 * @param {string} [oData.bundleName] the UI5 module name of the .properties file; this name will be resolved to a path like the paths of normal UI5 modules and ".properties" will then be appended (e.g. a name like "myBundle" can be given)
	 * @param {string} [oData.bundleLocale] an optional locale; when not given, the default is the active locale from the UI5 configuration
	 * @return Promise in async case (async ResourceModel) which is resolved when the the enhancement is finished
	 * @since 1.16.1
	 * @protected
	 * @name sap.ui.model.resource.ResourceModel#enhance
	 * @function
	 */
	ResourceModel.prototype.enhance = function(oData) {
		var that = this,
			fResolve,
			oPromise = this.bAsync ? new Promise(function(resolve){
				fResolve = resolve;
			}) : null;
		
		function doEnhance(){
			oData.async = that.bAsync;
			var bundle = that.loadResourceBundle(oData);
			if(bundle instanceof Promise){
				bundle.then(function(customBundle){
					that._oResourceBundle._enhance(customBundle);
					fResolve(true);
				}, function(){
					fResolve(true);
				});
			}else if(bundle) {
				that._oResourceBundle._enhance(bundle);
			}
		}
		
		if(this._oPromise){
			Promise.resolve(this._oPromise).then(doEnhance);
		}else{
			doEnhance();
		}
		return oPromise;
	};
	
	/**
	 * @see sap.ui.model.Model.prototype.bindProperty
	 *
	 * @name sap.ui.model.resource.ResourceModel#bindProperty
	 * @function
	 */
	ResourceModel.prototype.bindProperty = function(sPath) {
		var oBinding = new ResourcePropertyBinding(this, sPath);
		return oBinding;
	};
	
	/**
	 * Returns the value for the property with the given <code>sPropertyName</code>
	 *
	 * @param {string} sPath the path to the property
	 * @type any
	 * @return the value of the property
	 * @public
	 * @name sap.ui.model.resource.ResourceModel#getProperty
	 * @function
	 */
	ResourceModel.prototype.getProperty = function(sPath) {
		return this._oResourceBundle ? this._oResourceBundle.getText(sPath) : null;
	};
	
	/**
	 * Returns the resource bundle of this model
	 *
	 * @return loaded resource bundle or ECMA Script 6 Promise in asynchronous case
	 * @public
	 * @name sap.ui.model.resource.ResourceModel#getResourceBundle
	 * @function
	 */
	ResourceModel.prototype.getResourceBundle = function() {
		if(!this.bAsync){
			return this._oResourceBundle;
		}else{
			var p = this._oPromise;
			if(p){
				return new Promise(function(resolve, reject){
					function _resolve(oBundle){
						resolve(oBundle);
					}
					p.then(_resolve, _resolve);
				});
			}else{
				return Promise.resolve(this._oResourceBundle);
			}
		}
	};
	
	ResourceModel.prototype._handleLocalizationChange = function() {
		_load(this, false);
	};
	
	
	function _load(oModel, bThrowError){
		var oData = oModel.oData;
		
		if (oData && (oData.bundleUrl || oData.bundleName)) {
			var res = oModel.loadResourceBundle(oData);
			if(res instanceof Promise){
				var oEventParam = {url: _getUrl(oData.bundleUrl, oData.bundleName), async: true};
				oModel.fireRequestSent(oEventParam);
				oModel._oPromise = res;
				oModel._oPromise.then(function(oBundle){
					oModel._oResourceBundle = oBundle;
					delete oModel._oPromise;
					oModel.checkUpdate(true);
					oModel.fireRequestCompleted(oEventParam);
				});
			}else{
				oModel._oResourceBundle = res;
			}
		} else if(bThrowError) {
			throw new Error("Neither bundleUrl nor bundleName are given. One of these is mandatory.");
		}
	};
	
	function _getUrl(bundleUrl, bundleName){
		var sUrl = bundleUrl;
		if(bundleName) {
			sUrl = jQuery.sap.getModulePath(bundleName, '.properties');
		}
		return sUrl;
	};
	

	return ResourceModel;

}, /* bExport= */ true);
