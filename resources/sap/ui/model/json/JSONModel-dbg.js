/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP SE or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/**
 * JSON-based DataBinding
 *
 * @namespace
 * @name sap.ui.model.json
 * @public
 */

// Provides the JSON object based model implementation
sap.ui.define(['jquery.sap.global', 'sap/ui/model/ClientModel', './JSONListBinding', './JSONPropertyBinding', './JSONTreeBinding'],
	function(jQuery, ClientModel, JSONListBinding, JSONPropertyBinding, JSONTreeBinding) {
	"use strict";


	/**
	 * Constructor for a new JSONModel.
	 *
	 * @class
	 * Model implementation for JSON format
	 *
	 * @extends sap.ui.model.Model
	 *
	 * @author SAP SE
	 * @version 1.24.2
	 *
	 * @param {object} oData either the URL where to load the JSON from or a JS object
	 * @constructor
	 * @public
	 * @name sap.ui.model.json.JSONModel
	 */
	var JSONModel = ClientModel.extend("sap.ui.model.json.JSONModel", /** @lends sap.ui.model.json.JSONModel.prototype */ {
		
		constructor : function(oData) {
			ClientModel.apply(this, arguments);
			
			if (oData && typeof oData == "object"){
				this.setData(oData);
			}
		},
	
		metadata : {
			publicMethods : ["setJSON", "getJSON"]
		}
	
	});
	
	/**
	 * Creates a new subclass of class sap.ui.model.json.JSONModel with name <code>sClassName</code> 
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
	 * @name sap.ui.model.json.JSONModel.extend
	 * @function
	 */
	
	/**
	 * Sets the JSON encoded data to the model.
	 *
	 * @param {object} oData the data to set on the model
	 * @param {boolean} [bMerge=false] whether to merge the data instead of replacing it
	 *
	 * @public
	 * @name sap.ui.model.json.JSONModel#setData
	 * @function
	 */
	JSONModel.prototype.setData = function(oData, bMerge){
		if (bMerge) {
			// do a deep copy
			this.oData = jQuery.extend(true, {}, this.oData, oData);
		} else {
			this.oData = oData;
		}
		this.checkUpdate();
	};
	
	/**
	 * Sets the JSON encoded string data to the model.
	 *
	 * @param {string} sJSONText the string data to set on the model
	 * @param {boolean} [bMerge=false] whether to merge the data instead of replacing it
	 *
	 * @public
	 * @name sap.ui.model.json.JSONModel#setJSON
	 * @function
	 */
	JSONModel.prototype.setJSON = function(sJSONText, bMerge){
		var oJSONData;
		try {
			oJSONData = jQuery.parseJSON(sJSONText);
			this.setData(oJSONData, bMerge);
		} catch (e) {
			jQuery.sap.log.fatal("The following problem occurred: JSON parse Error: " + e);
			this.fireParseError({url : "", errorCode : -1,
				reason : "", srcText : e, line : -1, linepos : -1, filepos : -1});
		}
	};
	
	/**
	 * Serializes the current JSON data of the model into a string.
	 * Note: May not work in Internet Explorer 8 because of lacking JSON support (works only if IE 8 mode is enabled)
	 *
	 * @return the JSON data serialized as string
	 * @public
	 * @name sap.ui.model.json.JSONModel#getJSON
	 * @function
	 */
	JSONModel.prototype.getJSON = function(){
		return JSON.stringify(this.oData);
	};
	
	/**
	 * Load JSON-encoded data from the server using a GET HTTP request and store the resulting JSON data in the model.
	 * Note: Due to browser security restrictions, most "Ajax" requests are subject to the same origin policy,
	 * the request can not successfully retrieve data from a different domain, subdomain, or protocol.
	 *
	 * @param {string} sURL A string containing the URL to which the request is sent.
	 * @param {object | string} [oParameters] A map or string that is sent to the server with the request.
	 * Data that is sent to the server is appended to the URL as a query string.
	 * If the value of the data parameter is an object (map), it is converted to a string and
	 * url-encoded before it is appended to the URL.
	 * @param {boolean} [bAsync=true] By default, all requests are sent asynchronous
	 * (i.e. this is set to true by default). If you need synchronous requests, set this option to false.
	 * Cross-domain requests do not support synchronous operation. Note that synchronous requests may
	 * temporarily lock the browser, disabling any actions while the request is active.
	 * @param {string} [sType=GET] The type of request to make ("POST" or "GET"), default is "GET".
	 * Note: Other HTTP request methods, such as PUT and DELETE, can also be used here, but
	 * they are not supported by all browsers.
	 * @param {boolean} [bMerge=false] whether the data should be merged instead of replaced
	 * @param {string} [bCache=false] force no caching if false. Default is false
	 * @param {object} [mHeaders] An object of additional header key/value pairs to send along with the request
	 *
	 * @public
	 * @name sap.ui.model.json.JSONModel#loadData
	 * @function
	 */
	JSONModel.prototype.loadData = function(sURL, oParameters, bAsync, sType, bMerge, bCache, mHeaders){
		var that = this; 
	
		bAsync = (bAsync !== false);
		sType = sType || "GET";
		bCache = bCache === undefined ? this.bCache : bCache;
	
		this.fireRequestSent({url : sURL, type : sType, async : bAsync, headers: mHeaders, 
			info : "cache="+bCache+";bMerge=" + bMerge, infoObject: {cache : bCache, merge : bMerge}});
		this._ajax({
		  url: sURL,
		  async: bAsync,
		  dataType: 'json',
		  cache: bCache,
		  data: oParameters,
		  headers: mHeaders,
		  type: sType,
		  success: function(oData) {
			if (!oData) {
				jQuery.sap.log.fatal("The following problem occurred: No data was retrieved by service: " + sURL);
			}
			that.setData(oData, bMerge);
			that.fireRequestCompleted({url : sURL, type : sType, async : bAsync, headers: mHeaders, 
				info : "cache="+bCache+";bMerge=" + bMerge, infoObject: {cache : bCache, merge : bMerge}, success: true});
		  },
		  error: function(XMLHttpRequest, textStatus, errorThrown){
	        var oError = { message : textStatus, statusCode : XMLHttpRequest.status, statusText : XMLHttpRequest.statusText, responseText : XMLHttpRequest.responseText};
			jQuery.sap.log.fatal("The following problem occurred: " + textStatus, XMLHttpRequest.responseText + ","
						+ XMLHttpRequest.status + "," + XMLHttpRequest.statusText);
	
			that.fireRequestCompleted({url : sURL, type : sType, async : bAsync, headers: mHeaders,
				info : "cache="+bCache+";bMerge=" + bMerge, infoObject: {cache : bCache, merge : bMerge}, success: false, errorobject: oError});
			that.fireRequestFailed(oError);
		  }
		});
	};
	
	/**
	 * @see sap.ui.model.Model.prototype.bindProperty
	 *
	 * @name sap.ui.model.json.JSONModel#bindProperty
	 * @function
	 */
	JSONModel.prototype.bindProperty = function(sPath, oContext, mParameters) {
		var oBinding = new JSONPropertyBinding(this, sPath, oContext, mParameters);
		return oBinding;
	};
	
	/**
	 * @see sap.ui.model.Model.prototype.bindList
	 *
	 * @name sap.ui.model.json.JSONModel#bindList
	 * @function
	 */
	JSONModel.prototype.bindList = function(sPath, oContext, aSorters, aFilters, mParameters) {
		var oBinding = new JSONListBinding(this, sPath, oContext, aSorters, aFilters, mParameters);
		return oBinding;
	};
	
	/**
	 * @see sap.ui.model.Model.prototype.bindTree
	 *
	 * @param {object}
	 *         [mParameters=null] additional model specific parameters (optional)
	 *         If the mParameter <code>arrayNames</code> is specified with an array of string names this names will be checked against the tree data structure
	 *         and the found data in this array is included in the tree but only if also the parent array is included.
	 *         If this parameter is not specified then all found arrays in the data structure are bound.
	 *         If the tree data structure doesn't contain an array you don't have to specify this parameter.
	 *         
	 * @name sap.ui.model.json.JSONModel#bindTree
	 * @function
	 */
	JSONModel.prototype.bindTree = function(sPath, oContext, aFilters, mParameters) {
		var oBinding = new JSONTreeBinding(this, sPath, oContext, aFilters, mParameters);
		return oBinding;
	};
	
	/**
	 * Sets a new value for the given property <code>sPropertyName</code> in the model.
	 * If the model value changed all interested parties are informed.
	 *
	 * @param {string}  sPath path of the property to set
	 * @param {any}     oValue value to set the property to
	 * @param {object} [oContext=null] the context which will be used to set the property
	 * @public
	 * @name sap.ui.model.json.JSONModel#setProperty
	 * @function
	 */
	JSONModel.prototype.setProperty = function(sPath, oValue, oContext) {
		var sObjectPath = sPath.substring(0, sPath.lastIndexOf("/")),
			sProperty = sPath.substr(sPath.lastIndexOf("/")+1);
		
		// check if path / context is valid
		if (!this.resolve(sPath, oContext)) {
			return;
		}
		
		if (!sObjectPath && !oContext) {
			oContext = this.oData;
		}
	
		var oObject = this._getObject(sObjectPath, oContext);
		if (oObject) {
			oObject[sProperty] = oValue;
			this.checkUpdate();
		}
	};
	
	/**
	* Returns the value for the property with the given <code>sPropertyName</code>
	*
	* @param {string} sPath the path to the property
	* @param {object} [oContext=null] the context which will be used to retrieve the property
	* @type any
	* @return the value of the property
	* @public
	* @name sap.ui.model.json.JSONModel#getProperty
	* @function
	*/
	JSONModel.prototype.getProperty = function(sPath, oContext) {
		return this._getObject(sPath, oContext);
	
	};
	
	/**
	 * @param {string} sPath
	 * @param {object} [oContext]
	 * @returns {any} the node of the specified path/context
	 * @name sap.ui.model.json.JSONModel#_getObject
	 * @function
	 */
	JSONModel.prototype._getObject = function (sPath, oContext) {
		var oNode = this.isLegacySyntax() ? this.oData : null;
		if (oContext instanceof sap.ui.model.Context){
			oNode = this._getObject(oContext.getPath());
		}
		else if (oContext){
			oNode = oContext;
		}
		if (!sPath) {
			return oNode;
		}
		var aParts = sPath.split("/"),
			iIndex = 0;
		if (!aParts[0]) {
			// absolute path starting with slash
			oNode = this.oData;
			iIndex++;
		}
		while(oNode && aParts[iIndex]) {
			oNode = oNode[aParts[iIndex]];
			iIndex++;
		}
		return oNode;
	};
	
	JSONModel.prototype.isList = function(sPath, oContext) {
		var sAbsolutePath = this.resolve(sPath, oContext);
		return jQuery.isArray(this._getObject(sAbsolutePath));
	};
	

	return JSONModel;

}, /* bExport= */ true);
