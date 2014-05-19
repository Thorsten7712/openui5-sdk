jQuery.sap.declare("sap.m.sample.ListGrouping.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.ListGrouping.Component", {

	metadata : {
		rootView : "sap.m.sample.ListGrouping.List",
		config : {
			sample : {
				files : [
					"List.view.xml",
					"List.controller.js"
				],
				description : "Grouping your items makes it easier for the user to browse and find the desired content"
			}
		}
	}
});