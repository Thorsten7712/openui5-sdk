/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP SE or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/core/format/DateFormat','sap/ui/model/FilterType','sap/ui/model/ListBinding','./ODataUtils','./CountMode','./Filter'],function(q,D,F,L,O,C,a){"use strict";var b=L.extend("sap.ui.model.odata.ODataListBinding",{constructor:function(m,p,c,s,f,P){L.apply(this,arguments);this.sFilterParams=null;this.sSortParams=null;this.sRangeParams=null;this.sCustomParams=this.oModel.createCustomParams(this.mParameters);this.iStartIndex=0;this.bPendingChange=false;this.aKeys=[];this.bInitial=true;this.sCountMode=(P&&P.countMode)||this.oModel.sDefaultCountMode;this.bRefresh=false;this.bNeedsUpdate=false;this.bDataAvailable=false;this.bIgnoreSuspend=false;if(!this.oModel.getServiceMetadata()){var t=this,d=function(e){t.bInitial=false;t._initSortersFilters();t.oModel.detachMetadataLoaded(d)};this.oModel.attachMetadataLoaded(this,d)}else{this.bInitial=false;this._initSortersFilters()}var r=this.oModel._getObject(this.sPath,this.oContext);this.aExpandRefs=r;if(q.isArray(r)&&!s&&!f){this.aKeys=r;this.iLength=r.length;this.bLengthFinal=true;this.bDataAvailable=true}else if(r===null&&this.oModel.resolve(this.sPath,this.oContext)){this.aKeys=[];this.iLength=0;this.bLengthFinal=true;this.bDataAvailable=true}else{if(this.oModel.getServiceMetadata()){this.resetData()}}}});b.prototype.getContexts=function(s,l,t){if(this.bInitial){return[]}this.iLastLength=l;this.iLastStartIndex=s;this.iLastThreshold=t;if(!s){s=0}if(!l){l=this.oModel.iSizeLimit;if(this.bLengthFinal&&this.iLength<l){l=this.iLength}}if(!t){t=0}var c=true,d=this._getContexts(s,l),o={},S;S=this.calculateSection(s,l,t,d);c=d.length!=l&&!(this.bLengthFinal&&d.length>=this.iLength-s);if(this.oModel.getServiceMetadata()){if(!this.bPendingRequest&&S.length>0&&(c||l<S.length)){this.loadData(S.startIndex,S.length);d.dataRequested=true}}if(this.bRefresh){if(this.bLengthFinal&&this.iLength==0){this.loadData(S.startIndex,S.length,true);d.dataRequested=true}this.bRefresh=false}else{for(var i=0;i<d.length;i++){o[d[i].getPath()]=d[i].getObject()}if(this.bUseExtendedChangeDetection){if(this.aLastContexts&&s<this.iLastEndIndex){var e=this;var f=q.sap.arrayDiff(this.aLastContexts,d,function(g,n){return q.sap.equal(g&&e.oLastContextData&&e.oLastContextData[g.getPath()],n&&o&&o[n.getPath()])});d.diff=f}}this.iLastEndIndex=s+l;this.aLastContexts=d.slice(0);this.oLastContextData=q.extend(true,{},o)}return d};b.prototype._getContexts=function(s,l){var c=[],o,k;if(!s){s=0}if(!l){l=this.oModel.iSizeLimit;if(this.bLengthFinal&&this.iLength<l){l=this.iLength}}for(var i=s;i<s+l;i++){k=this.aKeys[i];if(!k){break}o=this.oModel.getContext('/'+k);c.push(o)}return c};b.prototype.calculateSection=function(s,l,t,c){var d=false,S,e,p,P,r,o={},k;e=s;S=0;for(var i=s;i>=Math.max(s-t,0);i--){k=this.aKeys[i];if(!k){P=i+1;break}}for(var j=s+l;j<s+l+t;j++){k=this.aKeys[j];if(!k){p=j;break}}r=s-P;if(P&&s>t&&r<t){if(c.length!=l){e=s-t}else{e=P-t}S=t}if(e==s){e+=c.length}if(c.length!=l){S+=l-c.length}r=p-s-l;if(r==0){S+=t}if(p&&r<t&&r>0){if(e>s){e=p;S+=t}}if(this.bLengthFinal&&this.iLength<(S+e)){S=this.iLength-e}o.startIndex=e;o.length=S;return o};b.prototype.setContext=function(c){if(this.oContext!=c){this.oContext=c;if(this.isRelative()){this._initSortersFilters();if(!this.bInitial){var r=this.oModel._getObject(this.sPath,this.oContext);this.aExpandRefs=r;if(q.isArray(r)&&!this.aSorters.length>0&&!this.aFilters.length>0){this.aKeys=r;this.iLength=r.length;this.bLengthFinal=true;this._fireChange()}else if(r===null&&this.oModel.resolve(this.sPath,this.oContext)){this.aKeys=[];this.iLength=0;this.bLengthFinal=true;this._fireChange()}else{this.refresh()}}}}};b.prototype.getDownloadUrl=function(f){var p=[],P;if(f){p.push("$format="+encodeURIComponent(f))}if(this.sSortParams){p.push(this.sSortParams)}if(this.sFilterParams){p.push(this.sFilterParams)}if(this.sCustomParams){p.push(this.sCustomParams)}P=this.oModel.resolve(this.sPath,this.oContext);if(P){return this.oModel._createRequestUrl(P,null,p)}};b.prototype.loadData=function(s,l,p){var t=this,I=false;if(s||l){this.sRangeParams="$skip="+s+"&$top="+l;this.iStartIndex=s}else{s=this.iStartIndex}var P=[];if(this.sRangeParams){P.push(this.sRangeParams)}if(this.sSortParams){P.push(this.sSortParams)}if(this.sFilterParams){P.push(this.sFilterParams)}if(this.sCustomParams){P.push(this.sCustomParams)}if(!this.bLengthFinal&&(this.sCountMode==C.Inline||this.sCountMode==C.Both)){P.push("$inlinecount=allpages");I=true}function S(f){q.each(f.results,function(i,g){t.aKeys[s+i]=t.oModel._getKey(g)});if(I&&f.__count){t.iLength=parseInt(f.__count,10);t.bLengthFinal=true}if(t.iLength<s+f.results.length){t.iLength=s+f.results.length;t.bLengthFinal=false}if(f.results.length<l||l===undefined){t.iLength=s+f.results.length;t.bLengthFinal=true}if(s==0&&f.results.length==0){t.iLength=0;t.bLengthFinal=true}t.oRequestHandle=null;t.bPendingRequest=false;t.bNeedsUpdate=true;t.bIgnoreSuspend=true}function c(f){t.fireDataReceived({data:f})}function e(E,A){t.oRequestHandle=null;t.bPendingRequest=false;if(!A){t.aKeys=[];t.iLength=0;t.bLengthFinal=true;t.bDataAvailable=true;t._fireChange({reason:sap.ui.model.ChangeReason.Change})}t.fireDataReceived()}function u(h){t.oRequestHandle=h}var d=this.sPath,o=this.oContext;if(this.isRelative()){d=this.oModel.resolve(d,o)}if(d){if(p){var U=this.oModel._createRequestUrl(d,null,P);this.fireDataRequested();this.oModel.fireRequestSent({url:U,method:"GET",async:true});setTimeout(function(){t.bNeedsUpdate=true;t.checkUpdate();t.oModel.fireRequestCompleted({url:U,method:"GET",async:true,success:true});t.fireDataReceived()},0)}else{this.bPendingRequest=true;this.fireDataRequested();this.oModel._loadData(d,P,S,e,false,u,c)}}};b.prototype.getLength=function(){if(this.bLengthFinal){return this.iLength}else{var A=this.iLastThreshold||this.iLastLength||10;return this.iLength+A}};b.prototype.isLengthFinal=function(){return this.bLengthFinal};b.prototype._getLength=function(){var t=this;var p=[];if(this.sFilterParams){p.push(this.sFilterParams)}if(this.mParameters&&this.mParameters.custom){var c={custom:{}};q.each(this.mParameters.custom,function(s,v){c.custom[s]=v});p.push(this.oModel.createCustomParams(c))}function _(o){t.iLength=parseInt(o,10);t.bLengthFinal=true}function d(e){var E="Request for $count failed: "+e.message;if(e.response){E+=", "+e.response.statusCode+", "+e.response.statusText+", "+e.response.body}q.sap.log.warning(E)}var P=this.oModel.resolve(this.sPath,this.oContext);if(P){var u=this.oModel._createRequestUrl(P+"/$count",null,p);var r=this.oModel._createRequest(u,"GET",false);r.headers["Accept"]="text/plain, */*;q=0.5";this.oModel._request(r,_,d,undefined,undefined,this.oModel.getServiceMetadata())}};b.prototype.refresh=function(f,c,e){var d=false;if(!f){if(e){var r=this.oModel.resolve(this.sPath,this.oContext);var E=this.oModel.oMetadata._getEntityTypeByPath(r);if(E&&(E.entityType in e)){d=true}}if(c&&!d){q.each(this.aKeys,function(i,k){if(k in c){d=true;return false}})}if(!c&&!e){d=true}}if(f||d){this.abortPendingRequest();this.resetData();this._fireRefresh({reason:sap.ui.model.ChangeReason.Refresh})}};b.prototype._fireRefresh=function(A){if(this.oModel.resolve(this.sPath,this.oContext)){this.bRefresh=true;this.fireEvent("refresh",A)}};b.prototype.initialize=function(){if(this.oModel.oMetadata.isLoaded()){if(this.bDataAvailable){this._fireChange({reason:sap.ui.model.ChangeReason.Change})}else{this._fireRefresh({reason:sap.ui.model.ChangeReason.Refresh})}}};b.prototype.checkUpdate=function(f,c){var d=this.sChangeReason?this.sChangeReason:sap.ui.model.ChangeReason.Change,e=false,l,o,t=this,r,R;if(this.bSuspended&&!this.bIgnoreSuspend)return;if(!f&&!this.bNeedsUpdate){r=this.oModel._getObject(this.sPath,this.oContext);R=q.isArray(r)&&!q.sap.equal(r,this.aExpandRefs);this.aExpandRefs=r;if(R){if(this.aSorters.length>0||this.aFilters.length>0){this.refresh();return}else{this.aKeys=r;this.iLength=r.length;this.bLengthFinal=true;e=true}}else if(c){q.each(this.aKeys,function(i,k){if(k in c){e=true;return false}})}else{e=true}if(e&&this.aLastContexts){e=false;var g=this._getContexts(this.iLastStartIndex,this.iLastLength,this.iLastThreshold);if(this.aLastContexts.length!=g.length){e=true}else{q.each(this.aLastContexts,function(i,h){l=t.oLastContextData[h.getPath()];o=g[i].getObject();if(!q.sap.equal(l,o,3,true)){e=true;return false}})}}}if(f||e||this.bNeedsUpdate){this.bNeedsUpdate=false;this._fireChange({reason:d})}this.sChangeReason=undefined;this.bIgnoreSuspend=false};b.prototype.resetData=function(){this.aKeys=[];this.iLength=0;this.bLengthFinal=false;this.sChangeReason=undefined;this.bDataAvailable=false;if(this.oModel.isCountSupported()&&(this.sCountMode==C.Request||this.sCountMode==C.Both)){this._getLength()}};b.prototype.abortPendingRequest=function(){if(this.oRequestHandle){this.oRequestHandle.abort();this.oRequestHandle=null;this.bPendingRequest=false}};b.prototype.sort=function(s){if(s instanceof sap.ui.model.Sorter){s=[s]}this.aSorters=s;this.createSortParams(s);this.abortPendingRequest();this.aKeys=[];if(!this.bInitial){if(this.oRequestHandle){this.oRequestHandle.abort();this.oRequestHandle=null;this.bPendingRequest=false}this.sChangeReason=sap.ui.model.ChangeReason.Sort;this._fireRefresh({reason:this.sChangeReason});this._fireSort({sorter:s})}return this};b.prototype.createSortParams=function(s){this.sSortParams=O.createSortParams(s)};b.prototype.filter=function(f,s){if(!f){f=[]}if(f instanceof sap.ui.model.Filter){f=[f]}if(s==F.Application){this.aApplicationFilters=f}else{this.aFilters=f}if(!f||!q.isArray(f)||f.length==0){this.aFilters=[]}if(!this.aApplicationFilters||!q.isArray(this.aApplicationFilters)||this.aApplicationFilters.length===0){this.aApplicationFilters=[]}this.createFilterParams(this.aFilters,this.aApplicationFilters);this.abortPendingRequest();this.resetData();if(!this.bInitial){if(this.oRequestHandle){this.oRequestHandle.abort();this.oRequestHandle=null;this.bPendingRequest=false}this.sChangeReason=sap.ui.model.ChangeReason.Filter;this._fireRefresh({reason:this.sChangeReason});if(s==F.Application){this._fireFilter({filters:this.aApplicationFilters})}else{this._fireFilter({filters:this.aFilters})}}return this};b.prototype.createFilterParams=function(c,A){var f,s=O._createFilterParams(c,this.oModel.oMetadata,this.oEntityType),d=O._createFilterParams(A,this.oModel.oMetadata,this.oEntityType);if(s){f=s}if(d){if(s){f="("+f+")"+"%20and%20"+"("+d+")"}else{f=d}}if(f){this.sFilterParams="$filter="+f}else{this.sFilterParams=undefined}};b.prototype._initSortersFilters=function(){var r=this.oModel.resolve(this.sPath,this.oContext);if(!r){return}this.oEntityType=this._getEntityType();this.createSortParams(this.aSorters);this.createFilterParams(this.aFilters.concat(this.aApplicationFilters))};b.prototype._getEntityType=function(){var r=this.oModel.resolve(this.sPath,this.oContext);if(r){var e=this.oModel.oMetadata._getEntityTypeByPath(r);return e}return undefined};b.prototype.resume=function(){this.bIgnoreSuspend=false;L.prototype.resume.apply(this,arguments)};return b},true);
