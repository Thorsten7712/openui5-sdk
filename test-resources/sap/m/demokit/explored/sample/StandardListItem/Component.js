jQuery.sap.declare("sap.m.sample.StandardListItem.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.StandardListItem.Component", {

	metadata : {
		rootView : "sap.m.sample.StandardListItem.List",
		config : {
			sample : {
				files : [
					"List.view.xml",
					"List.controller.js"
				],
				description : "This list item offers a standardized user interface for list content. Use any combination of title, description, info and icon."
			}
		}
	}
});