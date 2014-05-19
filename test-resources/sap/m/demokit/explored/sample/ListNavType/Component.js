jQuery.sap.declare("sap.m.sample.ListNavType.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.ListNavType.Component", {

	metadata : {
		rootView : "sap.m.sample.ListNavType.List",
		config : {
			sample : {
				files : [
					"List.view.xml",
					"List.controller.js"
				],
				description : "If only a subset of the list items are navigable you should indicate those by setting their 'type' to 'Navigation'. This displays an navigation arrow. Do not show arrows if all items are navigable. This achieved by setting the 'type' to 'Active'."
			}
		}
	}
});