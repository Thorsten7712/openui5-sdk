jQuery.sap.declare("sap.m.sample.ViewSettingsDialog.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.ViewSettingsDialog.Component", {

	metadata : {
		rootView : "sap.m.sample.ViewSettingsDialog.V",
		config : {
			sample : {
				files : [
					"V.view.xml",
					"C.controller.js",
					"Dialog.fragment.xml"
				],
				description : "The View Settings Dialog is a standard UI pattern for specifying sorting, grouping and filtering."
			}
		}
	}
});