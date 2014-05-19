jQuery.sap.declare("sap.m.sample.MessageToast.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.MessageToast.Component", {

	metadata : {
		rootView : "sap.m.sample.MessageToast.V",
		config : {
			sample : {
				files : [
					"V.view.xml",
					"C.controller.js"
				],
				description : "The Message Toast displays the message text as an overlay to the current screen. It closes automatically after some time without requiring further user interaction."
			}
		}
	}
});