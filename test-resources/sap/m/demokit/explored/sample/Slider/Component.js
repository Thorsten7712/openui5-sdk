jQuery.sap.declare("sap.m.sample.Slider.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.Slider.Component", {

	metadata : {
		rootView : "sap.m.sample.Slider.V",
		config : {
			sample : {
				files : [
					"V.view.xml"
				],
				description : "With the Slider a user can choose a value from a numerical range."
			}
		}
	}
});