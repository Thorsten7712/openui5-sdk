jQuery.sap.declare("sap.m.sample.FlexBoxNested.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.FlexBoxNested.Component", {

	metadata : {
		rootView : "sap.m.sample.FlexBoxNested.V",
		includes : [ "FlexBoxNested/style.css" ],
		config : {
			sample : {
				files : [
					"V.view.xml",
					"style.css"
				],
				description : "Flex Boxes can be nested. Remember also that HBox and VBox are 'convenience' controls based on the Flex Box control."
			}
		}
	}
});