jQuery.sap.declare("sap.m.sample.InputAssisted.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.InputAssisted.Component", {

	metadata : {
		rootView : "sap.m.sample.InputAssisted.V",
		config : {
			sample : {
				files : [
					"V.view.xml",
					"C.controller.js",
					"Dialog.fragment.xml"
				],
				description : "Assisted input is available via suggestions - shown as you type - and a value help dialog."
			}
		}
	}
});