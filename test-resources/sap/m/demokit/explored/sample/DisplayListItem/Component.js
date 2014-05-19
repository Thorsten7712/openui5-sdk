jQuery.sap.declare("sap.m.sample.DisplayListItem.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.DisplayListItem.Component", {

	metadata : {
		rootView : "sap.m.sample.DisplayListItem.List",
		config : {
			sample : {
				files : [
					"List.view.xml",
					"List.controller.js"
				],
				description : "Use the Display List Item for showing name/value pairs."
			}
		}
	}
});