jQuery.sap.declare("sap.m.sample.BusyDialogLight.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.BusyDialogLight.Component", {

	metadata : {
		rootView : "sap.m.sample.BusyDialogLight.V",
		config : {
			sample : {
				stretch : true,
				files : [
					"V.view.xml",
					"C.controller.js",
					"BusyDialog.fragment.xml"
				],
				description : "This is a 'light' version of the standard Busy Dialog; it also blocks the user interface until the currently running operation has been finished. It has no UI components, so you must close it programmatically when appropriate."
			}
		}
	}
});