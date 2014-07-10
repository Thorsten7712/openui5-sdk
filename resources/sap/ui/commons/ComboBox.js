/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.commons.ComboBox");jQuery.sap.require("sap.ui.commons.library");jQuery.sap.require("sap.ui.commons.TextField");sap.ui.commons.TextField.extend("sap.ui.commons.ComboBox",{metadata:{interfaces:["sap.ui.commons.ToolbarItem"],library:"sap.ui.commons",properties:{"maxPopupItems":{type:"int",group:"Behavior",defaultValue:10},"displaySecondaryValues":{type:"boolean",group:"Misc",defaultValue:false},"selectedKey":{type:"string",group:"Data",defaultValue:null},"selectedItemId":{type:"string",group:"Data",defaultValue:null}},defaultAggregation:"items",aggregations:{"items":{type:"sap.ui.core.ListItem",multiple:true,singularName:"item",bindable:"bindable"},"myListBox":{type:"sap.ui.commons.ListBox",multiple:false,visibility:"hidden"}},associations:{"listBox":{type:"sap.ui.commons.ListBox",multiple:false}}}});jQuery.sap.require("jquery.sap.strings");jQuery.sap.require("sap.ui.core.Popup");
sap.ui.commons.ComboBox.prototype.init=function(){sap.ui.commons.TextField.prototype.init.apply(this,arguments);this._iClosedUpDownIdx=-1;this._sCloseId=null;this.setAccessibleRole(sap.ui.core.AccessibleRole.Combobox);if(sap.ui.Device.browser.mobile){this.mobile=true}};
sap.ui.commons.ComboBox.prototype.exit=function(){if(this._oListBox){this._oListBoxDelegate&&this._oListBox.removeDelegate(this._oListBoxDelegate);if(this.getAggregation("myListBox")){this.destroyAggregation("myListBox",true)}else{this._oListBox.destroy()}this._oListBox=null}else if(this.getListBox()){var l=sap.ui.getCore().byId(this.getListBox());if(l){l.detachEvent("itemsChanged",this._handleItemsChanged,this);l.detachEvent("itemInvalidated",this._handleItemInvalidated,this)}}this._sWantedSelectedKey=undefined;this._sWantedSelectedItemId=undefined;if(this._sHandleItemsChanged){jQuery.sap.clearDelayedCall(this._sHandleItemsChanged);this._sHandleItemsChanged=null}};
sap.ui.commons.ComboBox.prototype.onclick=function(e){if(this.getEnabled&&this.getEnabled()&&this.getEditable()&&e.target===this.getF4ButtonDomRef()){if(this.oPopup&&this.oPopup.isOpen()){this._close()}else if(!this._F4ForClose){this._open()}this.focus()}this._F4ForClose=false};
sap.ui.commons.ComboBox.prototype.onmousedown=function(e){var f=this.getF4ButtonDomRef();if(e.target!==f||!this.getEnabled()||!this.getEditable()){if(this.oPopup&&this.oPopup.isOpen()){e.stopPropagation()}return}else if(e.target==f&&jQuery(this.getFocusDomRef()).data("sap.INItem")){e.stopPropagation();this.focus()}if(this.oPopup&&this.oPopup.isOpen()){this._F4ForClose=true}else{this._F4ForOpen=true}};
sap.ui.commons.ComboBox.prototype.onsapshow=function(e){if(this.mobile){return}if(this.oPopup&&this.oPopup.isOpen()){this._close()}else{this._open()}e.preventDefault();e.stopImmediatePropagation()};
sap.ui.commons.ComboBox.prototype.onsapnextmodifiers=function(e){sap.ui.commons.TextField.prototype.onsapnextmodifiers.apply(this,arguments);if(e.keyCode==jQuery.sap.KeyCodes.ARROW_DOWN&&e.altKey){this.onsapshow(e);e.stopPropagation()}};
sap.ui.commons.ComboBox.prototype.onsaphide=function(e){if(this.mobile){return}this._close();e.stopPropagation()};
sap.ui.commons.ComboBox.prototype.onsapescape=function(e){if(this.oPopup&&this.oPopup.isOpen()){this._close();e.stopPropagation()}sap.ui.commons.TextField.prototype.onsapescape.apply(this,arguments);var i=this.getSelectedItemId();if(i){var I=sap.ui.getCore().byId(i);this._iClosedUpDownIdx=this.indexOfItem(I);var l=this._getListBox();l.setSelectedIndex(this._iClosedUpDownIdx);jQuery(this.getInputDomRef()).attr("aria-posinset",this._iClosedUpDownIdx+1)}else{jQuery(this.getInputDomRef()).removeAttr("aria-posinset");this._iClosedUpDownIdx=-1}};
sap.ui.commons.ComboBox.prototype.onsapenter=function(e){this._close();this._checkChange(e)};
sap.ui.commons.ComboBox.prototype.onsapfocusleave=function(e){var l=this._getListBox();if(e.relatedControlId&&jQuery.sap.containsOrEquals(l.getFocusDomRef(),sap.ui.getCore().byId(e.relatedControlId).getFocusDomRef())){this.focus()}else{sap.ui.commons.TextField.prototype.onsapfocusleave.apply(this,arguments)}};
sap.ui.commons.ComboBox.prototype._checkChange=function(e,I){var o=this.getInputDomRef();if(!o){return}var n=jQuery(o).val(),O=this.getValue();if(!this._F4ForOpen&&(this.getEditable()&&this.getEnabled())){var a=this.getItems(),b=null,t,k,s,c;var L=this._getListBox();if(O!=n){this.setValue(n,true);for(var i=0,l=a.length;i<l;i++){t=a[i].getText();if(t===n){if(i==this._iClosedUpDownIdx){b=a[i];k=b.getKey();s=b.getId();c=i;break}else if(!c){b=a[i];k=b.getKey();s=b.getId();c=i}}}this.setProperty("selectedKey",k,true);this.setProperty("selectedItemId",s,true);if(s){this._iClosedUpDownIdx=c}else{this._iClosedUpDownIdx=-1}if(this.mobile){if(!s){this._addDummyOption(n)}else{this._removeDummyOption();this.getDomRef("select").selectedIndex=c}}}else{var d=this.getSelectedItemId();var N;c=this._iClosedUpDownIdx;if(c>=0){b=a[c];if(b.getText()==n){N=b.getId()}}if(N&&N!=d){this.setSelectedItemId(N,true)}else{return}}this.fireChange({newValue:n,selectedItem:b})}};
sap.ui.commons.ComboBox.prototype.onkeypress=function(e){if(e.target.id==this.getId()+"-select"){return}if(!this.getEnabled()||!this.getEditable()){return}if(this._sTypeAhead){jQuery.sap.clearDelayedCall(this._sTypeAhead)}var k=jQuery.sap.KeyCodes;if(sap.ui.commons.ComboBox._isHotKey(e)||e.keyCode===k.F4&&e.which===0){return}var K=e.which||e.keyCode;if(K!==k.DELETE&&K!==k.BACKSPACE&&K!==k.ESCAPE){this._sTypeAhead=jQuery.sap.delayedCall(200,this,"_doTypeAhead")}else{sap.ui.commons.TextField.prototype.onkeypress.apply(this,arguments);if(K!==k.ESCAPE){jQuery(this.getInputDomRef()).removeAttr("aria-posinset")}}};
sap.ui.commons.ComboBox.prototype.onsapup=function(e){if(e.target.id==this.getId()+"-select"){return}if(!this.getEnabled()||!this.getEditable()){return}if(jQuery(this.getFocusDomRef()).data("sap.InNavArea")){return}var l=this._getListBox(),I=l.getItems(),d=this.getInputDomRef(),v=jQuery(d).val();var i=this._prepareUpDown(I,v);i=this._updateIdx(I,d,i-1,i);e.preventDefault();e.stopPropagation()};
sap.ui.commons.ComboBox.prototype.onsapdown=function(e){if(e.target.id==this.getId()+"-select"){return}if(!this.getEnabled()||!this.getEditable()){return}if(jQuery(this.getFocusDomRef()).data("sap.InNavArea")){return}var l=this._getListBox(),I=l.getItems(),d=this.getInputDomRef(),v=jQuery(d).val();var i=this._prepareUpDown(I,v);i=this._updateIdx(I,d,i+1,i);e.preventDefault();e.stopPropagation()};
sap.ui.commons.ComboBox.prototype.onsaphome=function(e){sap.ui.commons.TextField.prototype.onsaphome.apply(this,arguments);if(e.target.id==this.getId()+"-select"){return}if(!this.getEditable()||!this.getEnabled()||!this.oPopup||!this.oPopup.isOpen()){return}var l=this._getListBox(),I=l.getItems(),d=this.getInputDomRef();var i=this._updateIdx(I,d,0);e.preventDefault();e.stopPropagation()};
sap.ui.commons.ComboBox.prototype.onsapend=function(e){sap.ui.commons.TextField.prototype.onsapend.apply(this,arguments);if(e.target.id==this.getId()+"-select"){return}if(!this.getEditable()||!this.getEnabled()||!this.oPopup||!this.oPopup.isOpen()){return}var l=this._getListBox(),I=l.getItems(),d=this.getInputDomRef();var i=I.length-1;i=this._updateIdx(I,d,i);e.preventDefault();e.stopPropagation()};
sap.ui.commons.ComboBox.prototype._doTypeAhead=function(){this._sTypeAhead=null;this._sWantedSelectedKey=undefined;this._sWantedSelectedItemId=undefined;var L=this._getListBox(),I=L.getItems(),o,t,r=jQuery(this.getInputDomRef()),v=r.val(),s=jQuery.sap.startsWithIgnoreCase;this._sTypedChars=v;var f=false;var i=0;for(var l=I.length;i<l;i++){o=I[i];t=""+o.getText();if(s(t,v)&&o.getEnabled()){r.attr("aria-posinset",i+1);r.val(t);this._doSelect(v.length,t.length);L.setSelectedIndex(i);L.scrollToIndex(i,true);f=true;if(this.mobile){this._removeDummyOption();this.getDomRef("select").selectedIndex=i}return}}L.clearSelection();L.scrollToIndex(i,true);if(!f){r.removeAttr("aria-posinset");if(this.mobile){this._addDummyOption(v)}}};
sap.ui.commons.ComboBox.prototype._prepareUpDown=function(I,v){var t;if(this._iClosedUpDownIdx>=0&&I[this._iClosedUpDownIdx]&&I[this._iClosedUpDownIdx].getText()!==v){this._iClosedUpDownIdx=-1}if(this._iClosedUpDownIdx===-1){for(var i=0,l=I.length;i<l;i++){t=I[i].getText();if(t===v){this._iClosedUpDownIdx=i;break}}}return this._iClosedUpDownIdx};
sap.ui.commons.ComboBox.prototype._updateIdx=function(I,d,n,c){var l=I.length,f=n===0&&c===undefined,L=n===l-1&&c===undefined,D=c!==undefined&&c<n||f,i=(n<0?0:(n<l?n:l-1)),r=jQuery(d);var o,v=false;do{n=D?i++:i--;o=I[n];v=o&&o.getEnabled()&&!(o instanceof sap.ui.core.SeparatorItem)&&o.getId()!==this.getId()+"_shi"}while(!v&&i<l&&i>=0);if(v){var t=o.getText();var p=n+1;if(this._determinePosinset){p=this._determinePosinset(I,n)}r.attr("aria-posinset",p);r.val(t);this._doSelect();var a=this._getListBox();a.setSelectedIndex(n);a.scrollToIndex(n,true)}else{n=c}this._iClosedUpDownIdx=n;return n};
sap.ui.commons.ComboBox.prototype._doSelect=function(s,e){var d=this.getInputDomRef();if(d){var r=jQuery(d);d.focus();r.selectText(s?s:0,e?e:r.val().length)}return this};
sap.ui.commons.ComboBox.prototype.getF4ButtonDomRef=function(){return this.getDomRef("icon")};
sap.ui.commons.ComboBox.prototype._getPrivateListBox=function(){if(this._oListBox){return this._oListBox}this._oListBox=new sap.ui.commons.ListBox(this.getId()+"-lb",{allowMultiSelect:false});this.setAggregation("myListBox",this._oListBox,true);this._oListBox.attachEvent("itemsChanged",this._handleItemsChanged,this);this._oListBox.attachEvent("itemInvalidated",this._handleItemInvalidated,this);if(this.getDomRef()){this.$().attr("aria-owns",this.getId()+"-input "+this._oListBox.getId())}return this._oListBox};
sap.ui.commons.ComboBox.prototype._getExistingListBox=function(){var l=this.getListBox(),L;if(l){L=sap.ui.getCore().getControl(l)}else if(this._oListBox){L=this._getPrivateListBox()}return L};
sap.ui.commons.ComboBox.prototype._getListBox=function(u){var l=this._getExistingListBox();if(!l){l=this._getPrivateListBox()}if(u){l.setAllowMultiSelect(false);l.setDisplaySecondaryValues(this.getDisplaySecondaryValues());var d=this.getDomRef();if(d){l.setMinWidth(jQuery(d).rect().width+"px")}}return l};
sap.ui.commons.ComboBox.prototype._open=function(d){if(this.mobile){return}if(d===undefined){d=-1}if(!this.getEditable()||!this.getEnabled()){return}if(!this.oPopup){this.oPopup=new sap.ui.core.Popup()}this._F4ForOpen=false;var l=this._getListBox(!this.oPopup.isOpen());var p=this.oPopup;this._prepareOpen(l);if(!this._oListBoxDelegate){this._oListBoxDelegate={oCombo:this,onclick:function(E){var i=jQuery(E.target).closest("li").attr("id");if(i){var E=new sap.ui.base.Event("_internalSelect",this.oCombo,{selectedId:i});this.oCombo._handleSelect(E)}}}}l.addDelegate(this._oListBoxDelegate);p.setContent(l);p.setAutoClose(true);p.setAutoCloseAreas([this.getDomRef()]);p.setDurations(0,0);p.setInitialFocusId(this.getId()+'-input');var s=this._rerenderListBox(l);if(s){return}p.attachOpened(this._handleOpened,this);var e=sap.ui.core.Popup.Dock;p.open(d,e.BeginTop,e.BeginBottom,this,null,null,true);jQuery(l.getFocusDomRef()).attr("tabIndex","-1");jQuery(this.getDomRef()).attr("aria-expanded",true)};
sap.ui.commons.ComboBox.prototype._rerenderListBox=function(l){sap.ui.getCore().applyChanges();return false};
sap.ui.commons.ComboBox.prototype._prepareOpen=function(L){var r=jQuery(this.getInputDomRef()),v=r.val(),n,I=L.getItems(),t,s=jQuery.sap.startsWithIgnoreCase,e=v==="",S=this.getSelectedItemId(),o;var i=0;var a=-1;for(var l=I.length;i<l;i++){o=I[i];if(!o.getEnabled()){continue}t=""+o.getText();if(e||s(t,v)){if(t==v&&i==this._iClosedUpDownIdx){a=i;n=t;break}else if(this._iClosedUpDownIdx<0&&t==v&&o.getId()==S){a=i;n=t;break}else if(a<0){a=i;n=t}}}if(a>=0){this._iClosedUpDownIdx=a;r.attr("aria-posinset",a+1);r.val(n);this._doSelect();this._fireLiveChange()}var b=L.getItems().length;var m=this.getMaxPopupItems();L.setVisibleItems(m<b?m:-1);L.setSelectedIndex(a)};
sap.ui.commons.ComboBox.prototype._handleOpened=function(){this.oPopup.detachOpened(this._handleOpened,this);var l=this._getListBox();l.scrollToIndex(this._iClosedUpDownIdx,true);l.attachSelect(this._handleSelect,this);this.oPopup.attachClosed(this._handleClosed,this);if(!!sap.ui.Device.browser.internet_explorer){jQuery.sap.delayedCall(0,this,function(){jQuery(this.getInputDomRef()).focus()})}if(jQuery(this.getFocusDomRef()).data("sap.InNavArea")){jQuery(this.getFocusDomRef()).data("sap.InNavArea",false)}};
sap.ui.commons.ComboBox.prototype._close=function(e){if(this.oPopup){this.oPopup.close(0)}};
sap.ui.commons.ComboBox.prototype._handleClosed=function(){this.oPopup.detachClosed(this._handleClosed,this);var l=this._getListBox();l.removeDelegate(this._oListBoxDelegate);l.detachSelect(this._handleSelect,this);jQuery(this.getDomRef()).attr("aria-expanded",false);if(this._cleanupClose){this._cleanupClose(l)}};
sap.ui.commons.ComboBox.prototype._handleSelect=function(c){var s=c.getParameter("selectedIndex"),S=c.getParameter("selectedId"),i=c.getParameter("selectedItem");if(!i&&S){i=sap.ui.getCore().byId(S);if(i.getParent()!==this._getListBox(false)){i=null}s=jQuery.inArray(i,this._getListBox().getItems())}if(i&&i.getEnabled()){var n=i.getText();this._iClosedUpDownIdx=s;this._close();jQuery(this.getInputDomRef()).attr("aria-posinset",this._getListBox().getSelectedIndex()+1);var o=this.getValue();var O=this.getSelectedKey();var N=i.getKey();var a=this.getSelectedItemId();var b=i.getId();this._sTypedChars=n;this._sWantedSelectedKey=undefined;this._sWantedSelectedItemId=undefined;if(o!=n||O!=N||a!=b){this.setValue(n,true);this.setProperty("selectedKey",N,true);this.setProperty("selectedItemId",b,true);this.fireChange({newValue:n,selectedItem:i})}else if(n!=jQuery(this.getInputDomRef()).val()){jQuery(this.getInputDomRef()).val(n)}}this._doSelect();return i};
sap.ui.commons.ComboBox.prototype.getItems=function(){var l=this._getExistingListBox();return l?l.getItems():[]};
sap.ui.commons.ComboBox.prototype.insertItem=function(i,I){i=this.validateAggregation("items",i,true);this._getListBox().insertItem(i,I);return this};
sap.ui.commons.ComboBox.prototype.addItem=function(i){i=this.validateAggregation("items",i,true);this._getListBox().addItem(i);return this};
sap.ui.commons.ComboBox.prototype.removeItem=function(e){return this._getListBox().removeItem(e)};
sap.ui.commons.ComboBox.prototype.removeAllItems=function(){var l=this._getExistingListBox();return l?l.removeAllItems():[]};
sap.ui.commons.ComboBox.prototype.indexOfItem=function(i){return this._getListBox().indexOfItem(i)};
sap.ui.commons.ComboBox.prototype.destroyItems=function(){var l=this._getExistingListBox();if(l){this._getListBox().destroyItems()}return this};
sap.ui.commons.ComboBox.prototype.updateItems=function(){this.bNoItemCheck=true;this.updateAggregation("items");this.bNoItemCheck=undefined;if(!this._sHandleItemsChanged){this._sHandleItemsChanged=jQuery.sap.delayedCall(0,this,"_handleItemsChanged",[null,true])}};
sap.ui.commons.ComboBox.prototype.setListBox=function(l){var o=sap.ui.getCore().byId(this.getListBox());if(o){o.detachEvent("itemsChanged",this._handleItemsChanged,this);o.detachEvent("itemInvalidated",this._handleItemInvalidated,this);if(this._bListBoxDependentSet){this.removeDependent(o);this._bListBoxDependentSet=false}}if(this._oListBox&&l){this._oListBox.detachEvent("itemsChanged",this._handleItemsChanged,this);this._oListBox.detachEvent("itemInvalidated",this._handleItemInvalidated,this);if(this.getAggregation("myListBox")){this.destroyAggregation("myListBox",true)}else{this._oListBox.destroy()}this._oListBox=null}this.setAssociation("listBox",l);var L=typeof l==="string"?sap.ui.getCore().byId(l):l;if(L&&L.attachEvent){L.attachEvent("itemsChanged",this._handleItemsChanged,this);L.attachEvent("itemInvalidated",this._handleItemInvalidated,this)}if(L&&!L.getParent()){this.addDependent(L);this._bListBoxDependentSet=true}if(this.getDomRef()&&L){this.$().attr("aria-owns",this.getId()+"-input "+L.getId())}return this};
sap.ui.commons.ComboBox.prototype._handleItemsChanged=function(e,d){if(this.bNoItemCheck){return}if(d){this._sHandleItemsChanged=null}var I=[];if(this._getExistingListBox()){I=this._getListBox().getItems()}var s=this.getSelectedKey();var S=this.getSelectedItemId();var n,N,a;var v=this.getValue();var b=-1;var f=false;var F=false;var c=false;this._iClosedUpDownIdx=-1;var B=!!this.getBinding("value");var g=!!this.getBinding("selectedKey");if(B&&g){B=false}for(var i=0;i<I.length;i++){var o=I[i];if((this._sWantedSelectedKey||this._sWantedSelectedItemId)&&(o.getKey()==this._sWantedSelectedKey||o.getId()==this._sWantedSelectedItemId)&&o.getEnabled()){n=o.getKey();N=o.getId();a=o.getText();b=i;this._sWantedSelectedKey=undefined;this._sWantedSelectedItemId=undefined;break}else if(s&&o.getKey()==s&&o.getEnabled()&&!(c&&B)){f=true;n=s;N=o.getId();a=o.getText();b=i;if(a==v&&N==S&&!this._sWantedSelectedKey&&!this._sWantedSelectedItemId){break}if(g&&!this._sWantedSelectedKey&&!this._sWantedSelectedItemId){break}}else if(S&&o.getId()==S&&o.getEnabled()&&!f&&!(c&&B)){F=true;n=o.getKey();N=S;a=o.getText();b=i}else if(o.getText()==v&&o.getEnabled()&&!(f&&!B)&&!(F&&!B)&&!c){c=true;n=o.getKey();N=o.getId();a=v;b=i;if(B&&!this._sWantedSelectedKey&&!this._sWantedSelectedItemId){break}}}this._iClosedUpDownIdx=b;if(v!=a&&b>=0){this.setProperty("value",a,true);jQuery(this.getInputDomRef()).val(a)}this.setProperty("selectedKey",n,true);this.setProperty("selectedItemId",N,true);var D=this.getDomRef();if(D){jQuery(this.getInputDomRef()).attr("aria-setsize",I.length);if(N){jQuery(this.getInputDomRef()).attr("aria-posinset",b+1)}else{jQuery(this.getInputDomRef()).removeAttr("aria-posinset")}if(this.mobile){var h=this.getDomRef("select");while(h.length>0){h.remove(0)}for(var i=0;i<I.length;i++){var o=I[i];var O=document.createElement("option");O.text=o.getText();O.id=this.getId()+"-"+o.getId();if(!o.getEnabled()){O.disabled="disabled"}h.add(O,null)}h.selectedIndex=b}}};
sap.ui.commons.ComboBox.prototype._handleItemInvalidated=function(e){var i=e.getParameter("item");if(i.getId()==this.getSelectedItemId()){if(i.getKey()!=this.getSelectedKey()){this.setProperty("selectedKey",i.getKey(),true)}if(i.getText()!=this.getValue()){sap.ui.commons.TextField.prototype.setValue.apply(this,[i.getText()])}}if(!this._sHandleItemsChanged){this._handleItemsChanged(e)}};
sap.ui.commons.ComboBox.prototype.getFocusInfo=function(){return{id:this.getId(),sTypedChars:this._sTypedChars}};
sap.ui.commons.ComboBox.prototype.applyFocusInfo=function(f){var i=jQuery(this.getInputDomRef());i.val(f.sTypedChars);if(!this.getSelectedItemId()||sap.ui.getCore().byId(this.getSelectedItemId()).getText()!=f.sTypedChars){this._doTypeAhead()}this.focus();return this};
sap.ui.commons.ComboBox.prototype.onAfterRendering=function(e){var l=this.getListBox();if(l){var L=sap.ui.getCore().getControl(l);if(L.getDomRef()){L.$().appendTo(sap.ui.getCore().getStaticAreaRef())}}if(this.mobile){var t=this;this.$("select").bind("change",function(){var n=t.$("select").val();var a=t.getItems();var E=true;var o=0;var O=t.getValue();for(var i=0;i<a.length;i++){if(a[i].getText()==n){E=a[i].getEnabled()}if(a[i].getText()==O){o=i}}if(E){t.setValue(n);t.fireChange({newValue:n,selectedItem:sap.ui.getCore().byId(t.getSelectedItemId())})}else{t.getDomRef("select").selectedIndex=o}});if(this.getSelectedItemId()){for(var i=0;i<this.getItems().length;i++){var I=this.getItems()[i];if(this.getSelectedItemId()==I.getId()){this.getDomRef("select").selectedIndex=i;break}}}else{this._addDummyOption(this.getValue())}}};
sap.ui.commons.ComboBox._isHotKey=function(e){if(e.altKey||e.ctrlKey||e.metaKey){return true}var k=e.keyCode||e.which,a=jQuery.sap.KeyCodes;switch(k){case a.ENTER:case a.SHIFT:case a.TAB:case a.ALT:case a.CONTROL:return true;case a.END:case a.HOME:case a.ARROW_LEFT:case a.ARROW_UP:case a.ARROW_RIGHT:case a.ARROW_DOWN:case a.F1:case a.F2:case a.F3:case a.F4:case a.F5:case a.F6:case a.F7:case a.F8:case a.F9:case a.F10:case a.F11:case a.F12:if(e.type=="keypress"){return e.which===0}else{return true}default:return false}};
sap.ui.commons.ComboBox.prototype.setSelectedKey=function(s){if(this.getSelectedKey()==s){return this}if(!s&&this._isSetEmptySelectedKeyAllowed()){return this}var I=this.getItems();var n=true;var S;var a;for(var i=0;i<I.length;i++){if(I[i].getKey()==s&&I[i].getEnabled()){var o=I[i];S=o.getId();var v=o.getText();this.setValue(v,true);this._sTypedChars=v;a=i;n=false;break}}if(!n){this.setProperty("selectedKey",s,true);this.setProperty("selectedItemId",S,true);var d=this.getDomRef();if(d){jQuery(this.getInputDomRef()).attr("aria-posinset",a+1);if(this.mobile){this._removeDummyOption();this.getDomRef("select").selectedIndex=a}}this._sWantedSelectedKey=undefined;this._iClosedUpDownIdx=a}else{this._sWantedSelectedKey=s;this._iClosedUpDownIdx=-1}this._sWantedSelectedItemId=undefined;return this};
sap.ui.commons.ComboBox.prototype._isSetEmptySelectedKeyAllowed=function(){this.setProperty("selectedKey","",true);this.setProperty("selectedItemId","",true);this.setValue("",true);return true};
sap.ui.commons.ComboBox.prototype.setSelectedItemId=function(s){if(this.getSelectedItemId()==s){return this}if(!s&&this._isSetEmptySelectedKeyAllowed()){return this}var I=this.getItems();var n=true;var k;var a;for(var i=0;i<I.length;i++){if(I[i].getId()==s&&I[i].getEnabled()){var S=I[i];k=S.getKey();var v=S.getText();this.setValue(v,true);this._sTypedChars=v;a=i;n=false;break}}if(!n){this.setProperty("selectedItemId",s,true);this.setProperty("selectedKey",k,true);var d=this.getDomRef();if(d){jQuery(this.getInputDomRef()).attr("aria-posinset",a+1);if(this.mobile){this._removeDummyOption();this.getDomRef("select").selectedIndex=a}}this._sWantedSelectedItemId=undefined;this._iClosedUpDownIdx=a}else{this._sWantedSelectedItemId=s;this._iClosedUpDownIdx=-1}this._sWantedSelectedKey=undefined;return this};
sap.ui.commons.ComboBox.prototype.setValue=function(v,n){if(!n){var I=this.getItems();var k;var s;var a;this._iClosedUpDownIdx=-1;for(var i=0;i<I.length;i++){if(I[i].getText()==v&&I[i].getEnabled()){var S=I[i];s=S.getId();k=S.getKey();a=i;this._iClosedUpDownIdx=a;break}}this.setProperty("selectedKey",k,true);this.setProperty("selectedItemId",s,true);var d=this.getDomRef();if(d){if(s){jQuery(this.getInputDomRef()).attr("aria-posinset",a+1)}else{jQuery(this.getInputDomRef()).removeAttr("aria-posinset")}if(this.mobile){if(!s){this._addDummyOption(v)}else{this._removeDummyOption();this.getDomRef("select").selectedIndex=a}}}}sap.ui.commons.TextField.prototype.setValue.apply(this,[v]);this._sTypedChars=this.getValue();this._sWantedSelectedKey=undefined;this._sWantedSelectedItemId=undefined;return this};
sap.ui.commons.ComboBox.prototype.invalidate=function(o){if(!o||!(o instanceof sap.ui.commons.ListBox)||o!=this._getListBox()){sap.ui.core.Control.prototype.invalidate.apply(this,arguments)}else{if(this.getUIArea()&&o.getDomRef()){this.getUIArea().addInvalidatedControl(o)}}};
sap.ui.commons.ComboBox.prototype.clone=function(i){var c=sap.ui.core.Control.prototype.clone.apply(this,arguments),l=this.getAggregation("myListBox"),L;if(l&&!c._oListBox){l.detachEvent("itemsChanged",this._handleItemsChanged,this);l.detachEvent("itemInvalidated",this._handleItemInvalidated,this);L=l.clone(i);L.attachEvent("itemsChanged",c._handleItemsChanged,c);L.attachEvent("itemInvalidated",c._handleItemInvalidated,c);c.setAggregation("myListBox",L,true);c._oListBox=L;l.attachEvent("itemsChanged",this._handleItemsChanged,this);l.attachEvent("itemInvalidated",this._handleItemInvalidated,this)}return c};
sap.ui.commons.ComboBox.prototype._addDummyOption=function(v){var o=this.getDomRef("dummyOption");if(!o){var i=this.getItems();o=document.createElement("option");o.text=v;o.id=this.getId()+"-dummyOption";if(i.length>0){this.getDomRef("select").add(o,jQuery.sap.domById(this.getId()+"-"+i[0].getId()))}else{this.getDomRef("select").add(o,null)}}else{o.text=v}this.getDomRef("select").selectedIndex=0};
sap.ui.commons.ComboBox.prototype._removeDummyOption=function(){var o=this.getDomRef("dummyOption");if(o){this.getDomRef("select").remove(0)}};
sap.ui.commons.ComboBox.prototype.getFocusDomRef=function(){if(this.mobile){return this.getDomRef("select")||null}else{return this.getDomRef("input")||null}};
