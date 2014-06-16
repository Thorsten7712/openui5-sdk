jQuery.sap.declare("sap.m.sample.InputSuggestionsOpenSearch.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.InputSuggestionsOpenSearch.Component", {

	metadata : {
		rootView : "sap.m.sample.InputSuggestionsOpenSearch.V",
		config : {
			sample : {
				files : [
					"V.view.xml",
					"C.controller.js",
					"MockServer.js"
				],
				description : "If you need to use an Open Search Provider (OSP) to supply possible values, you can do this with the Input control's suggest event, and build the suggestionItems dynamically according to the results of the Open Search call."
			}
		}
	}
});