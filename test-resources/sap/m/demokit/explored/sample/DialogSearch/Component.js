jQuery.sap.declare("sap.m.sample.DialogSearch.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.DialogSearch.Component", {

	metadata : {
		rootView : "sap.m.sample.DialogSearch.V",
		config : {
			sample : {
				files : [
					"V.view.xml",
					"C.controller.js",
					"Dialog.fragment.xml"
				],
				description : "When using a Search Field in a Dialog it is best to put it to the dialog's sub header to have it visible all the time."
			}
		}
	}
});