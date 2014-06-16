jQuery.sap.declare("sap.m.sample.BusyIndicator.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.BusyIndicator.Component", {

	metadata : {
		rootView : "sap.m.sample.BusyIndicator.V",
		config : {
			sample : {
				stretch : true,
				files : [
					"V.view.xml"
				],
				description : "The Busy Indicator signals that some operation is going on and that the user must wait. It does not block the current UI screen so other operations could be triggered in parallel."
			}
		}
	}
});