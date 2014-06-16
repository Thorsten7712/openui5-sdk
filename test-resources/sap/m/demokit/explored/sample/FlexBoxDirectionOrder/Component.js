jQuery.sap.declare("sap.m.sample.FlexBoxDirectionOrder.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.FlexBoxDirectionOrder.Component", {

	metadata : {
		rootView : "sap.m.sample.FlexBoxDirectionOrder.V",
		config : {
			sample : {
				files : [
					"V.view.xml"
				],
				description : "You can influence the direction and order of elements in horizontal and vertical Flex Box controls with the direction property."
			}
		}
	}
});