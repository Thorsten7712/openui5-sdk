jQuery.sap.declare("sap.m.sample.FacetFilterSimple.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.FacetFilterSimple.Component", {

	metadata : {
		rootView : "sap.m.sample.FacetFilterSimple.FacetFilter",
		dependencies : {
			components : [
				"sap.m.sample.Table"
			]
		},
		config : {
			sample : {
				files : [
					"FacetFilter.view.xml",
					"FacetFilter.controller.js"
				],
				description : "With the Facet Filter you can offer multiple filters ('facets') to assist the user in narrowing down the data in, say, a table. With this default 'Simple' type, each filter is displayed in a row for selection."
			}
		}
	}
});