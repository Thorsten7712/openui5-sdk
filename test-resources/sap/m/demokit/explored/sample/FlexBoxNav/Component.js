jQuery.sap.declare("sap.m.sample.FlexBoxNav.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.FlexBoxNav.Component", {

	metadata : {
		rootView : "sap.m.sample.FlexBoxNav.V",
		includes : [ "FlexBoxNav/style.css" ],
		config : {
			sample : {
				files : [
					"V.view.xml",
					"style.css"
				],
				description : "Here is an example of how you can use navigation items as unordered list items in a Flex Box."
			}
		}
	}
});