jQuery.sap.declare("sap.m.sample.MessageBox.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.MessageBox.Component", {

	metadata : {
		rootView : "sap.m.sample.MessageBox.V",
		config : {
			sample : {
				files : [
					"V.view.xml",
					"C.controller.js"
				],
				description : "MessageBox is an easier way of showing a message type dialog. You only need to provide the message that you want to show to the user."
			}
		}
	}
});