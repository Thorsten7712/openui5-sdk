jQuery.sap.declare("sap.m.sample.InputSuggestionsCustomFilter.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.InputSuggestionsCustomFilter.Component", {

	metadata : {
		rootView : "sap.m.sample.InputSuggestionsCustomFilter.V",
		config : {
			sample : {
				files : [
					"V.view.xml",
					"C.controller.js"
				],
				description : "The default filtering for the suggestionItems aggregation uses a 'begins with' style operator. You can override this with your own custom filter function using the Input control's setFilterFunction method."
			}
		}
	}
});