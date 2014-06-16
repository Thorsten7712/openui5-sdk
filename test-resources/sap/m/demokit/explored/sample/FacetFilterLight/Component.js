jQuery.sap.declare("sap.m.sample.FacetFilterLight.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.FacetFilterLight.Component", {

	metadata : {
		rootView : "sap.m.sample.FacetFilterLight.FacetFilter",
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
				description : "This is a 'Light' version of the Facet Filter. It is for small displays where only a selectable summary bar is shown, and a dialog is shown for setting the facet values."
			}
		}
	}
});