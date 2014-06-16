jQuery.sap.declare("sap.m.sample.SelectDialog.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.SelectDialog.Component", {

	metadata : {
		rootView : "sap.m.sample.SelectDialog.V",
		config : {
			sample : {
				files : [
					"V.view.xml",
					"C.controller.js",
					"Dialog.fragment.xml"
				],
				description : "The Select Dialog allows the user to search for and pick an item from a possibly long option list. Basically it is a convenience function to quickly assemble a Dialog, a Search Field and a List with Standard List Items. You can have single select or multi select mode. The dialog can remember the selections previously set on the dialog."
			}
		}
	}
});