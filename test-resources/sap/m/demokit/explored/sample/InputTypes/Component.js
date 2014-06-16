jQuery.sap.declare("sap.m.sample.InputTypes.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.InputTypes.Component", {

	metadata : {
		rootView : "sap.m.sample.InputTypes.V",
		config : {
			sample : {
				files : [
					"V.view.xml"
				],
				description : "On touch devices the 'type' of the input controls the keyboard layout. On keyboard devices this setting has no effect."
			}
		}
	}
});