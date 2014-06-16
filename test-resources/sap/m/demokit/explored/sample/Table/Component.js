jQuery.sap.declare("sap.m.sample.Table.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.Table.Component", {

	metadata : {
		publicMethods : [
			"getTable"
		],
		config : {
			sample : {
				files : [
					"Table.view.xml",
					"Table.controller.js",
					"Formatter.js"
				],
				description : "The Table shares many features with the List and, in addition, introduces columns. The table is fully responsive and can hide columns or shown them in-place if the screen space is not sufficient."
			}
		}
	},
	
	getTable : function () {
		return this._rootView.getContent()[0];
	}
});

sap.m.sample.Table.Component.prototype.createContent = function () {
	this._rootView = sap.ui.xmlview({ viewName : "sap.m.sample.Table.Table" });
	return this._rootView;
};