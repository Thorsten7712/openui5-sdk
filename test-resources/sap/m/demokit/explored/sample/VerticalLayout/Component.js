jQuery.sap.declare("sap.m.sample.VerticalLayout.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.VerticalLayout.Component", {

	metadata : {
		rootView : "sap.m.sample.VerticalLayout.V",
		config : {
			sample : {
				files : [
					"V.view.xml",
					"C.controller.js"
				],
				description : "The Vertical Layout control is a simple way to align multiple controls vertically. If you want more sophisticated layout options, consider Grid or Flex Box based layouts."
			}
		}
	}
});