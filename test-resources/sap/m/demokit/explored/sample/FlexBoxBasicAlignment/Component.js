jQuery.sap.declare("sap.m.sample.FlexBoxBasicAlignment.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.FlexBoxBasicAlignment.Component", {

	metadata : {
		rootView : "sap.m.sample.FlexBoxBasicAlignment.V",
		config : {
			sample : {
				files : [
					"V.view.xml"
				],
				description : "Flex Box items can be placed in different areas using the justifyContent and alignItem properties."
			}
		}
	}
});