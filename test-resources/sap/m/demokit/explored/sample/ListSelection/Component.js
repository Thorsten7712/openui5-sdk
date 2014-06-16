jQuery.sap.declare("sap.m.sample.ListSelection.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.ListSelection.Component", {

	metadata : {
		rootView : "sap.m.sample.ListSelection.List",
		config : {
			sample : {
				files : [
					"List.view.xml",
					"List.controller.js"
				],
				description : "'Single selection' forces the user to choose exactly one out of many items. With the 'multi' selection the user can pick multiple items at the same time. This is helpful for e.g. batch processing. With 'includeItem' the selection is also changed when pressing the item."
			}
		}
	}
});