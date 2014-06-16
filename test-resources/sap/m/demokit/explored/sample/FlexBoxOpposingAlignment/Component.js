jQuery.sap.declare("sap.m.sample.FlexBoxOpposingAlignment.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.FlexBoxOpposingAlignment.Component", {

	metadata : {
		rootView : "sap.m.sample.FlexBoxOpposingAlignment.V",
		config : {
			sample : {
				files : [
					"V.view.xml"
				],
				description : "In this Flex Box the items are aligned at opposing ends of the container with justifyContent set to 'SpaceBetween'."
			}
		}
	}
});