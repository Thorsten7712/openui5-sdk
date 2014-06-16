jQuery.sap.declare("sap.m.sample.Switch.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.Switch.Component", {

	metadata : {
		rootView : "sap.m.sample.Switch.V",
		config : {
			sample : {
				files : [
					"V.view.xml"
				],
				description : "\"Some say it is only a switch, I say it is one of the most stylish controls in the universe of mobile UI controls.\" (unknown developer)"
			}
		}
	}
});