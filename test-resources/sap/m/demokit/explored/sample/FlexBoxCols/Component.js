jQuery.sap.declare("sap.m.sample.FlexBoxCols.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.FlexBoxCols.Component", {

	metadata : {
		rootView : "sap.m.sample.FlexBoxCols.V",
		includes : [ "FlexBoxCols/style.css" ],
		config : {
			sample : {
				files : [
					"V.view.xml",
					"style.css"
				],
				description : "You can create balanced areas with Flex Box, such as these columns with equal height regardless of content."
			}
		}
	}
});