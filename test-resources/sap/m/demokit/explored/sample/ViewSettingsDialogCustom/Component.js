jQuery.sap.declare("sap.m.sample.ViewSettingsDialogCustom.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.ViewSettingsDialogCustom.Component", {

	metadata : {
		rootView : "sap.m.sample.ViewSettingsDialogCustom.V",
		config : {
			sample : {
				files : [
					"V.view.xml",
					"C.controller.js",
					"Dialog.fragment.xml"
				],
				description : "You can have custom filters in your View Settings Dialog, as shown in this example here."
			}
		}
	}
});