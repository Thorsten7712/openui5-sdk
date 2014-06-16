/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.demokit.DemokitApp");jQuery.sap.require("sap.ui.demokit.library");jQuery.sap.require("sap.ui.demokit.TagCloud");jQuery.sap.require("sap.ui.demokit.Tag");jQuery.sap.require("sap.ui.ux3.Shell");jQuery.sap.require("sap.ui.ux3.NavigationItem");jQuery.sap.require("sap.ui.commons.DropdownBox");jQuery.sap.require("sap.ui.commons.layout.AbsoluteLayout");jQuery.sap.require("sap.ui.core.ListItem");jQuery.sap.require("sap.ui.commons.Splitter");jQuery.sap.require("sap.ui.core.search.OpenSearchProvider");jQuery.sap.require("sap.ui.commons.Label");
sap.ui.demokit.DemokitApp=function(t,v,T){var a=this;function b(p){return p.split('/').slice(0,-1).join('/')+'/'}var B=window.location.href;if(B.indexOf('#')>=0){B=B.slice(0,B.indexOf('#'))}this.sBaseUrl=b(B);this.sBasePathname=b(window.location.pathname);this._iPendingCalls=0;this._mBestMatchingPage={};this._aTopLevelNavItems=[];this._aThemes=T||["sap_bluecrystal","sap_goldreflection","sap_hcb"];this._sTheme=this._aThemes[0];this._sCurrentContent=null;this._mAliases={};this._bIgnoreIFrameOnLoad=false;this._sTitleStr=t;this._sVersionStr=v;this._sSelectedWorkSetItem=null;sap.ui.demokit.DemokitApp.getInstance=jQuery.sap.getter(this);jQuery(window).bind('hashchange',function(){var h=window.location.hash;jQuery.sap.log.debug("hashchange occured, current='"+oDemokit._sCurrentContent+"', new='"+h+"'");if(h&&h!="#"+a._sCurrentContent){jQuery.sap.log.info("navigate to "+h);a.navigateTo(h,true)}})};
sap.ui.demokit.DemokitApp.getInstance=function(){var t=jQuery.sap.getObject("top.sap.ui.demokit.DemokitApp");if(t&&t!=sap.ui.demokit.DemokitApp){return t.getInstance()}};
sap.ui.demokit.DemokitApp.prototype.calcRelativeUrl=function(u){return u.indexOf(this.sBaseUrl)==0?u.substring(this.sBaseUrl.length):null};
sap.ui.demokit.DemokitApp.prototype.registerPageForType=function(u,c){this._mBestMatchingPage[c[0]]=u};
sap.ui.demokit.DemokitApp.prototype.findPageForType=function(t){return this._mBestMatchingPage[t]||"docs/api/symbols/"+t+".html"};
sap.ui.demokit.DemokitApp.prototype._addPendingCall=function(){this._iPendingCalls++};
sap.ui.demokit.DemokitApp.prototype._removePendingCall=function(){this._iPendingCalls--};
sap.ui.demokit.DemokitApp.prototype.addIndex=function(i,s){s=s||{};var t=this;var T={id:"mi-"+i,text:s.caption||i,visible:(typeof s.visible==="boolean")?s.visible:true,themable:s.themable||false};this._aTopLevelNavItems.push(T);this._createWorksetItem(T);if(s.index){if(s.extend){s.extend(s.index,function(d){t._setIndexData(i,d)})}else{t._setIndexData(i,s.index)}}else if(s.url){this._loadIndexFromUrl(i,s.url,s.transformer,s.extend)}};
sap.ui.demokit.DemokitApp.prototype._loadIndexFromUrl=function(i,u,t,E){var a=this;jQuery.ajax({url:u,dataType:u.slice(-4)==".xml"?"xml":"json",error:function(x,s,e){a._removePendingCall();jQuery.sap.log.error("failed to load index '"+i+"' from '"+u+"': "+s+", "+e);var T=a._findIndexById(i);if(T){T.navItem.setVisible(false)}},success:function(d,s,x){var I=t?t.call(this,d):d;if(E){E(I,function(d){a._removePendingCall();a._setIndexData(i,d)})}else{a._removePendingCall();a._setIndexData(i,I)}}});this._addPendingCall()};
sap.ui.demokit.DemokitApp.prototype._setIndexData=function(I,o){var t=this;var T=this._findIndexById(I);if(T){T.ref=o.ref;T.links=o;var n=0;function p(N){n++;if(N.ref&&N.controls){var c=jQuery.isArray(N.controls)?N.controls:N.controls.split(/,/);t.registerPageForType(N.ref,c)}if(N.alias&&N.ref){var a=N.alias.split(",");for(var i=0;i<a.length;i++){t._mAliases[a[i]]=N.ref}}if(N.links){for(var i=0;i<N.links.length;i++){p(N.links[i])}}};p(o);T._iTreeSize=n;this._createNavigationTree(T);T.navItem.setEnabled(!!T._oTree);T.navItem.setHref(o.ref)}};
sap.ui.demokit.DemokitApp.prototype._findIndexById=function(I){for(var i=0;i<this._aTopLevelNavItems.length;i++){var t=this._aTopLevelNavItems[i];if(t.id==="mi-"+I){return t}}};
sap.ui.demokit.DemokitApp.prototype.getInitialPage=function(d,s){var i=d,h=window.location.hash,m=jQuery.sap.getUriParameters().get("optimized-module-set");function a(u){return/^([a-zA-Z0-9-_]+\/)*[a-zA-Z0-9-_.]+\.html(#.*)?$/.test(u)}if(h){h=h.indexOf("#")===0?h.substring(1):h;if(a(h)){i=h}}if(s&&m){i="customize.html?data="+m}return i};
sap.ui.demokit.DemokitApp.prototype.getPagesForCategory=function(c){var t=this._findIndexById("controls");if(!t||!t.links){return sap.ui.demokit.DemokitApp.RETRY_LATER}var p=c.split('/');var o=t.links;for(var i=0;i<p.length;i++){var P=p[i];for(var j=0;j<o.links.length;j++){if(P==o.links[j].text){break}}if(j==o.links.length){return[]}o=o.links[j]}return o.links||[]};
sap.ui.demokit.DemokitApp.RETRY_LATER=-2;
sap.ui.demokit.DemokitApp.prototype.findIndexForPage=function(u){function f(n,u){if(u&&n.ref&&u.indexOf(n.ref)===0){return true}if(n.links){for(var i=0;i<n.links.length;i++){if(f(n.links[i],u)){return true}}}return false}for(var i=0;i<this._aTopLevelNavItems.length;i++){if(this._aTopLevelNavItems[i].links&&f(this._aTopLevelNavItems[i].links,u)){return i}}if(this._aTopLevelNavItems.length===0||this._iPendingCalls>0){return sap.ui.demokit.DemokitApp.RETRY_LATER}else{jQuery.sap.log.error("could not find "+u+" in nav tree");return-1}};
sap.ui.demokit.DemokitApp.DEFAULT_TLN_ITEM=0;
sap.ui.demokit.DemokitApp.prototype._createNavigationTree=function(t){var a=this;var n=0;function s(e){a.navigateTo(e.getSource()._ref_)}function b(o,l,L){for(var i=0;i<l.length;i++){var N=new sap.ui.commons.TreeNode({text:l[i].text,tooltip:l[i].tooltip,expanded:L<4,selectable:!!l[i].ref,icon:l[i].ico||null,selected:s});N._ref_=l[i].ref;o.addNode(N);n++;if(l[i].links&&l[i].links.length>0){b(N,l[i].links,L+1)}}};if(t._oTree)return;var T=new sap.ui.commons.Tree(t.id+"-index",{showHeader:true,width:"100%",height:"100%",showHorizontalScrollbar:true});T.addStyleClass("sapUiTreeWithHeader");b(T,t.links.links,0);t._oTree=T;t._iTreeSize=n};
sap.ui.demokit.DemokitApp.prototype._createWorksetItem=function(t){var n=t.navItem=new sap.ui.ux3.NavigationItem({key:t.id,text:t.text,href:"#"+t.ref,visible:t.visible,enabled:false});n._itemData_=t;if(this._oShell){this._oShell.addWorksetItem(n)}};
sap.ui.demokit.DemokitApp.prototype.createUI=function(s,I){var S;var t=this;var a="theme/img/themeswitch_";var T=sap.ui.demokit.DemokitApp.THEMES;this._oThemeSwitch=new sap.ui.commons.DropdownBox({change:[this._handleThemeChanged,this],items:jQuery.map(this._aThemes,function(f){return new sap.ui.core.ListItem({text:T[f],key:f})}),value:T[this._sTheme]});this._oThemeSwitchPopup=new sap.ui.ux3.ToolPopup({title:"Select a theme",icon:a+"regular.png",iconHover:a+"hover.png",iconSelected:a+"selected.png",content:[this._oThemeSwitch],initialFocus:this._oThemeSwitch});var c=new sap.ui.core.HTML("content",{content:"<iframe id=\"content\" name=\"content\" src=\"about:blank\" frameborder=\"0\" onload=\"sap.ui.demokit.DemokitApp.getInstance().onContentLoaded();\"></iframe>"});var o=this._oSidePanelLayout=new sap.ui.commons.layout.AbsoluteLayout();sap.ui.Device.os.name==sap.ui.Device.os.OS.IOS?S=true:S=false;var b=this._oShell=new sap.ui.ux3.Shell({appTitle:this._sTitleStr,showLogoutButton:false,showFeederTool:false,applyContentPadding:false,showSearchTool:s,fullHeightContent:true,toolPopups:[this._oThemeSwitchPopup],search:function(E){t.navigateTo("search.html?q="+encodeURIComponent(E.getParameter("text")));t._oShell._getSearchTool().close()},worksetItemSelected:function(E){var n=E.getParameter("item");if(n.getEnabled()){t.navigateTo(n._itemData_.ref)}else{E.preventDefault()}},content:[new sap.ui.commons.Splitter("demokitSplitter",{width:"100%",height:"100%",splitterPosition:"0%",splitterBarVisible:false,firstPaneContent:[o],secondPaneContent:[c],showScrollBars:S})],headerItems:[new sap.ui.commons.Label("version",{text:this._sVersionStr})]});this._oShell.addStyleClass("sapDkShell");if(s){var d=b.getSearchField();d.setEnableListSuggest(true);d.setShowListExpander(false);d.setVisibleItemCount(5);d.setSearchProvider(new sap.ui.core.search.OpenSearchProvider({suggestType:"json",suggestUrl:"suggest?q={searchTerms}"}));jQuery.ajax({url:"keywords?kind=tags&max=50",dataType:"json",success:function(f,g,x){if(f&&f[0]&&f[0].success&&f[0].keywords&&f[0].keywords.length){e(f[0].keywords);d.setWidth("80%")}}});function e(k){var f=new sap.ui.demokit.TagCloud({minFontSize:15,maxFontSize:30,press:function(E){var g=sap.ui.getCore().byId(E.getParameter("tagId")).getText();b.fireSearch({text:g})}}).addStyleClass("grTagCloud");for(var i=0;i<k.length;i++){f.addTag(new sap.ui.demokit.Tag({text:k[i].tag,weight:k[i].score}))}b._getSearchTool&&b._getSearchTool().addContent(f)}}jQuery.each(this._aTopLevelNavItems,function(i,f){b.addWorksetItem(f.navItem)});this.navigateTo(I);jQuery(function(){jQuery("body").append("<div id=\"logo\"><img id=\"logoico\"><img id=\"logotxt\"></div>");jQuery("#logoico").attr("src","resources/sap/ui/core/mimes/logo/icotxt_white_220x72_blue.png").addClass("sapUiImg")})};
sap.ui.demokit.DemokitApp.prototype.placeAt=function(i){this._oShell.placeAt(i)};
sap.ui.demokit.DemokitApp.prototype.onContentLoaded=function(e){var c=jQuery("#content")[0].contentWindow;var i=this.calcRelativeUrl(c.location.href);if(i&&!this._bIgnoreIFrameOnLoad){this.navigateTo(i,true,true);window.location.replace("#"+i)}this._applyTheme();this._bIgnoreIFrameOnLoad=false;jQuery(c).bind("hashchange",function(){var i=this.calcRelativeUrl(c.location.href);if(i&&!this._bIgnoreIFrameOnLoad){this.navigateTo(i,true,true);window.location.hash=i}this._bIgnoreIFrameOnLoad=false})};
sap.ui.demokit.DemokitApp.prototype.navigateTo=function(n,s,S){var t=this;var p=n.indexOf("#")===0?n.substring(1):n;var r=this._mAliases[p];if(r&&p!=r){S=false;p=r}if(this._sCurrentContent==p){return}var c=jQuery("#content")[0];var C=c&&c.contentWindow;var a=this.findIndexForPage(p);if(!C||a===sap.ui.demokit.DemokitApp.RETRY_LATER){setTimeout(function(){t.navigateTo(p,s,S)},200);return}var N=a>=0?this._aTopLevelNavItems[a]:null;var o=this._oShell;var b=sap.ui.getCore().byId("demokitSplitter");if(N&&N._iTreeSize<=1){if(b.getSplitterBarVisible()){var O=b.getSplitterPosition();if(O!=="0%"){b._oldPos=O;b.setSplitterPosition("0%")}b.setSplitterBarVisible(false)}}else{if(!b.getSplitterBarVisible()){var O=b._oldPos||"20%";b.setSplitterPosition(O);b.setSplitterBarVisible(true)}}this._sCurrentContent=p;function f(p,P,k){if(P){if(k&&P.getSelectedNode&&P.getSelectedNode()){P.getSelectedNode().setIsSelected(false)}var l=P.getNodes();for(var i=0;i<l.length;i++){if(l[i]._ref_&&l[i]._ref_.indexOf(p)>=0){l[i].setIsSelected(true);var m=P;while(m instanceof sap.ui.commons.TreeNode){m.expand();m=m.getParent()}return l[i]}else{var q=f(p,l[i],false);if(q)return q}}}return null}var d=null;var e=N&&N.navItem;if(e&&this._sSelectedWorkSetItem!=e.getId()){e.setVisible(true);o.setSelectedWorksetItem(e);this._oSidePanelLayout.removeAllContent();if(N._oTree){this._oSidePanelLayout.addContent(N._oTree)}d=f(p,N._oTree,true);if(N.themable){if(o.getToolPopups().length==0){o.addToolPopup(this._oThemeSwitchPopup)}}else{o.removeAllToolPopups()}}else{d=f(p,this._oSidePanelLayout.getContent()[0],true);if(!d&&p.indexOf("#")>0){var g=p.substr(0,p.indexOf("#")-1);d=f(g,this._oSidePanelLayout.getContent()[0])}}sap.ui.getCore().applyChanges();this._sSelectedWorkSetItem=o.getSelectedWorksetItem();if(!s){window.location.hash=p}if(!S){bIgnoreIFrameOnLoad=true;var h=p&&p.match(/\/sap\/me?\//);var j=p&&p.indexOf("sap/m/demokit")!==-1;var F=(h&&!j)?"?sap-ui-xx-fakeOS=ios":"";C.location.replace((p.indexOf("/")==0?"":this.sBasePathname)+p+F)}};
sap.ui.demokit.DemokitApp.THEMES={"sap_bluecrystal":"Blue Crystal","sap_goldreflection":"Gold Reflection","sap_hcb":"High Contrast Black"};
sap.ui.demokit.DemokitApp.prototype._handleThemeChanged=function(e){var n=e.getParameter("newValue");for(var x in sap.ui.demokit.DemokitApp.THEMES){if(sap.ui.demokit.DemokitApp.THEMES[x]==n){this._sTheme=x;this._applyTheme();e.getSource().getParent().close();break}}};
sap.ui.demokit.DemokitApp.prototype._applyTheme=function(){var c=jQuery("#content")[0].contentWindow;var I=this.calcRelativeUrl(c.location.href);var t=I?this.findIndexForPage(I):-1;if(I&&t>=0&&this._aTopLevelNavItems[t].themable&&c&&c.sap&&c.sap.ui&&c.sap.ui.getCore){var a=I.match(/\/sap\/me?\//);var s=c.sap.ui.demokit&&c.sap.ui.demokit._supportedThemes?c.sap.ui.demokit._supportedThemes:a?["sap_bluecrystal"]:this._aThemes;var b=this._oThemeSwitch.getItems();for(var i=0;i<b.length;i++){b[i].setEnabled(jQuery.inArray(b[i].getKey(),s)>=0)}if(jQuery.inArray(this._sTheme,s)<0){this._sTheme=s[0];this._oThemeSwitch.setValue(sap.ui.demokit.DemokitApp.THEMES[this._sTheme])}c.sap.ui.getCore().applyTheme(this._sTheme)}};
(function(){function r(l,L){if(l.ref&&l.resolve==="lib"){l.ref=L+l.ref}if(l.links){for(var i=0;i<l.links.length;i++){r(l.links[i],L)}}}function m(n,N){if(n.key!=N.key||!N.links||N.links.length==0){return}if(!n.links){n.links=N.links;return}function a(o,k){for(var i=0;i<o.links.length;i++){if(o.links[i].key===k){return o.links[i]}}return null}var s;for(var i=0;i<N.links.length;i++){s=N.links[i];if(!s.key){n.links.push(s)}else{var o=a(n,s.key);if(o){m(o,s)}else{n.links.push(s)}}}}function f(i,c,l,d){for(var j=0;j<l.length;j++){var D=d[l[j]];if(D&&D.docu){r(D.docu,D.libraryUrl);m(i,D.docu)}}c(i)}sap.ui.demokit.DemokitApp.addReleaseNotesToDevGuide=function(I,u,t,l){if(!u){u="docs/guide/relnotes/ReleaseNotes.html"}if(!t){t="Release Notes"}if(!l){l=1}function a(n){if(n&&n.links&&n.links.length>0){return n.links[0]}return null}var o=I;for(var i=0;i<l;i++){o=a(o)}if(o&&o.links){o.links.push({ref:u,text:t,alias:"docs/guide/ReleaseNotes.html"})}return I};sap.ui.demokit.DemokitApp.extendDevGuide=function(I,c){jQuery.sap.require("sap.ui.core.util.LibraryInfo");var l=new sap.ui.core.util.LibraryInfo();var u="discovery/all_libs";jQuery.ajax({url:u,dataType:"json",error:function(x,s,e){jQuery.sap.log.error("failed to load library list from '"+u+"': "+s+", "+e);c(I)},success:function(d,s,x){var a=d["all_libs"];if(!a){jQuery.sap.log.error("failed to load library list from '"+u+"': "+s+", Data: "+a);c(I);return}var b=0,e=a.length,D={},L=[],g;for(var i=0;i<e;i++){g=a[i].entry.replace(/\//g,".");L.push(g);l._getDocuIndex(g,function(E){D[E.library]=E;b++;if(b==e){f(I,c,L,D)}})}}})}})();
