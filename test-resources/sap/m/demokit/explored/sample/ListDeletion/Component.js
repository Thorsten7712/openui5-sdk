jQuery.sap.declare("sap.m.sample.ListDeletion.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.ListDeletion.Component", {

	metadata : {
		rootView : "sap.m.sample.ListDeletion.List",
		config : {
			sample : {
				files : [
					"List.view.xml",
					"List.controller.js"
				],
				description : "Setting 'Delete' mode on a List means you can trigger the deletion of single items with a single press. The application has to decide if an additional confirmation is required."
			}
		}
	}
});