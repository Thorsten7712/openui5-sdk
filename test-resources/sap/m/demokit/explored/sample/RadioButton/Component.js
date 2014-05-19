jQuery.sap.declare("sap.m.sample.RadioButton.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.RadioButton.Component", {

	metadata : {
		rootView : "sap.m.sample.RadioButton.V",
		config : {
			sample : {
				files : [
					"V.view.xml"
				],
				description : "Typically the Radio Button is used by other controls. E.g. the List uses it for the single selection. But you can also use the Radio Buttons control directly, to allow selection of exactly one of multiple options."
			}
		}
	}
});