jQuery.sap.declare("sap.m.sample.Dialog.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.Dialog.Component", {

	metadata : {
		rootView : "sap.m.sample.Dialog.V",
		config : {
			sample : {
				files : [
					"V.view.xml",
					"C.controller.js",
					"MsgDialog.fragment.xml",
					"StdDialog.fragment.xml"
				],
				description : "Typically a Dialog prompts the user for decisions or additional information required by the application. The content of a dialog is fully customizable. If you want to highlight important information you should use the special type of 'Message Dialog'."
			}
		}
	}
});