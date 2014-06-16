jQuery.sap.declare("sap.m.sample.FlexBox.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.FlexBox.Component", {

	metadata : {
		rootView : "sap.m.sample.FlexBox.V",
		config : {
			sample : {
				files : [
					"V.view.xml",
					"C.controller.js"
				],
				description : "The Flex Box implements a CSS Flexible Box Layout which gives control over the way that box items automatically adjust their dimensions to different viewports."
			}
		}
	}
});