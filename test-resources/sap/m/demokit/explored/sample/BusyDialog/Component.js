jQuery.sap.declare("sap.m.sample.BusyDialog.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.BusyDialog.Component", {

	metadata : {
		rootView : "sap.m.sample.BusyDialog.V",
		config : {
			sample : {
				stretch : true,
				files : [
					"V.view.xml",
					"C.controller.js",
					"BusyDialog.fragment.xml"
				],
				description : "A Busy Dialog blocks the user interface until the currently running operation has been finished. No other activities can be started in parallel."
			}
		}
	}
});