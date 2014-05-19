jQuery.sap.declare("sap.m.sample.FlexBoxSizeAdjustments.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.FlexBoxSizeAdjustments.Component", {

	metadata : {
		rootView : "sap.m.sample.FlexBoxSizeAdjustments.V",
		config : {
			sample : {
				files : [
					"V.view.xml"
				],
				description : "Automatic size adjustments can be achieved for Flex Items with the use of Flex Item Data settings on the contained controls."
			}
		}
	}
});