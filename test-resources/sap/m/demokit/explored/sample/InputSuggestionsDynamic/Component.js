jQuery.sap.declare("sap.m.sample.InputSuggestionsDynamic.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.InputSuggestionsDynamic.Component", {

	metadata : {
		rootView : "sap.m.sample.InputSuggestionsDynamic.V",
		config : {
			sample : {
				files : [
					"V.view.xml",
					"C.controller.js"
				],
				description : "With the Input control's suggest event, you can handle the suggestionItems yourself dynamically. This is useful when you have a server-side source of possible entries, and want to retrieve a specific subset by setting a filter on the aggregation binding with the model."
			}
		}
	}
});