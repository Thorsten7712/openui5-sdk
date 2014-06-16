jQuery.sap.declare("sap.m.sample.ObjectListItem.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.ObjectListItem.Component", {

	metadata : {
		rootView : "sap.m.sample.ObjectListItem.List",
		config : {
			sample : {
				files : [
					"List.view.xml",
					"List.controller.js"
				],
				description : "The Object List Item has many possibilities to provide a quick overview for an object within a list."
			}
		}
	}
});