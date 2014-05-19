/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.commons.RowRepeaterRenderer");jQuery.sap.require("sap.ui.commons.Paginator");jQuery.sap.require("sap.ui.commons.Toolbar");jQuery.sap.require("sap.ui.commons.Button");sap.ui.commons.RowRepeaterRenderer={};
sap.ui.commons.RowRepeaterRenderer.render=function(r,c){if(!c.getVisible()){return}r.write("<div");r.writeControlData(c);r.addClass("sapUiRrDesign"+c.getDesign());r.writeClasses();r.write(">");if(c.getDesign()!==sap.ui.commons.RowRepeaterDesign.BareShell){this.renderHeader(r,c)}this.renderBody(r,c);if(c.getDesign()!==sap.ui.commons.RowRepeaterDesign.BareShell){this.renderFooter(r,c)}r.write("</div>")};
sap.ui.commons.RowRepeaterRenderer.renderHeader=function(r,c){this.renderPrimaryToolbar(r,c);if(c.getSorters().length>1&&c.isBound()){this.renderSecondaryToolbar(r,c)}};
sap.ui.commons.RowRepeaterRenderer.renderPrimaryToolbar=function(r,c){r.write("<div");r.addClass("sapUiRrPtb");r.writeClasses();r.write(">");if(c.getTitle()!==null){this.renderTitle(r,c)}this.renderFilterToolbar(r,c);this.renderController(r,c);r.write("</div>")};
sap.ui.commons.RowRepeaterRenderer.renderTitle=function(r,c){var t=c.getTitle();var T=t.getTooltip_AsString();if(t.getIcon()){r.write("<div");r.addClass("sapUiRrLogo");r.writeClasses();if(T!==undefined){r.writeAttributeEscaped("title",T)}r.write(">");if(t.getIcon()){r.write("<img");r.writeAttributeEscaped("src",t.getIcon());r.write("/>")}r.write("</div>")}if(t.getText()){r.write("<div");r.addClass("sapUiRrTitle");r.writeClasses();r.writeAttribute("role","heading");r.write(">");r.writeEscaped(t.getText());r.write("</div>")}};
sap.ui.commons.RowRepeaterRenderer.renderFilterToolbar=function(r,c){var f=c.getFilters();if(f.length>0){r.write("<div");r.addClass("sapUiRrFilters");r.writeClasses();r.write(">");if(f.length>1&&c.isBound()){r.renderControl(c.getAggregation("filterToolbar"))}r.write("</div>")}};
sap.ui.commons.RowRepeaterRenderer.renderController=function(r,c){if(!c.bPagingMode){r.write("<div");r.addClass("sapUiRrCtrl");r.writeClasses();r.write(">");r.renderControl(c.getAggregation("headerShowMoreButton"));r.write("</div>")}};
sap.ui.commons.RowRepeaterRenderer.renderSecondaryToolbar=function(r,c){var s=c.getSorters();r.write("<div");r.addClass("sapUiRrStb");r.writeClasses();r.write(">");r.write("<div");r.addClass("sapUiRrSortBy");r.writeClasses();r.write(">");r.writeEscaped(c.oResourceBundle.getText("SORT_BY")+":");r.write("</div>");r.write("<div");r.addClass("sapUiRrSorters");r.writeClasses();r.write(">");r.renderControl(c.getAggregation("sorterToolbar"));r.write("</div>");r.write("</div>")};
sap.ui.commons.RowRepeaterRenderer.renderBody=function(r,c){var i=c.getId();var s=c.getShowMoreSteps();var C=c.getCurrentPage();var n=c.getNumberOfRows();var S=(C-1)*n;var R=c.getRows();var a=c._getRowCount();var m=a-S;var b=c._getRowCount()>n?n:m;var l=Math.ceil(a/n);var d;b=Math.min(b,m);if(s>0){S=0}r.write("<div");r.writeAttribute("id",i+"-body");r.addClass("sapUiRrBody");r.writeClasses();r.write(">");r.write("<ul");r.writeAttribute("id",i+"-page_"+C);r.addClass("sapUiRrPage");r.writeClasses();r.write(">");if(R.length===0||l<C){r.write("<li");r.addClass("sapUiRrNoData");r.writeClasses();r.write(">");var N=c.getNoData();if(N){r.renderControl(N)}else{r.writeEscaped(c.oResourceBundle.getText("NO_DATA"))}r.write("</li>")}else{var e;if(c.getFixedRowHeight()!==""){e="height:"+c.getFixedRowHeight()+";overflow:hidden;"}if(c.getBinding("rows")){S=c._bSecondPage?n:0}for(d=S;d<S+b;d++){r.write("<li");r.writeAttribute("id",i+"-row_"+d);if(e){r.writeAttribute("style",e)}r.addClass("sapUiRrRow");r.writeClasses();r.write(">");r.renderControl(R[d]);r.write("</li>")}}r.write("</ul>");r.write("</div>")};
sap.ui.commons.RowRepeaterRenderer.renderFooter=function(r,c){r.write("<div");r.addClass("sapUiRrFtr");r.writeClasses();r.write(">");if(c.bPagingMode){r.renderControl(c.getAggregation("footerPager"))}else{r.renderControl(c.getAggregation("footerShowMoreButton"))}r.write("</div>")};
