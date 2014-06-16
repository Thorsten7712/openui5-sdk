jQuery.sap.declare("sap.m.sample.ListFooter.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.ListFooter.Component", {

	metadata : {
		rootView : "sap.m.sample.ListFooter.List",
		config : {
			sample : {
				files : [
					"List.view.xml",
					"List.controller.js"
				],
				description : "With the 'footerText' property you can set a message that is shown at the very end of the list."
			}
		}
	}
});