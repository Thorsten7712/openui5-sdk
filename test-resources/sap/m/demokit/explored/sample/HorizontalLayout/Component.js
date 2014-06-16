jQuery.sap.declare("sap.m.sample.HorizontalLayout.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.HorizontalLayout.Component", {

	metadata : {
		rootView : "sap.m.sample.HorizontalLayout.V",
		config : {
			sample : {
				files : [
					"V.view.xml",
					"C.controller.js"
				],
				description : "The Horizontal Layout control is a simple way to align multiple controls horizontally. By default the contained controls are not wrapped. If you want more sophisticated layout options, consider Grid or Flex Box based layouts."
			}
		}
	}
});