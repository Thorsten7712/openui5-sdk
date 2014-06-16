jQuery.sap.declare("sap.m.sample.Text.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.Text.Component", {

	metadata : {
		rootView : "sap.m.sample.Text.V",
		config : {
			sample : {
				files : [
					"V.view.xml"
				],
				description : "With the Text control you can embed longer paragraphs of text into your application that need text wrapping."
			}
		}
	}
});