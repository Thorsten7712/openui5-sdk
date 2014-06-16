jQuery.sap.declare("sap.m.sample.ListCounter.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.ListCounter.Component", {

	metadata : {
		rootView : "sap.m.sample.ListCounter.List",
		config : {
			sample : {
				files : [
					"List.view.xml",
					"List.controller.js"
				],
				description : "The counter of an item quickly shows how many detail entries are related, without having to navigate to the detail page."
			}
		}
	}
});