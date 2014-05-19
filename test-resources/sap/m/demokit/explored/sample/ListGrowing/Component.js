jQuery.sap.declare("sap.m.sample.ListGrowing.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.ListGrowing.Component", {

	metadata : {
		rootView : "sap.m.sample.ListGrowing.List",
		config : {
			sample : {
				files : [
					"List.view.xml",
					"List.controller.js"
				],
				description : "The Growing feature helps if your content is too big to be loaded/shown at once. It paginates the content into smaller chunks - aka pages - which are loaded/shown one after another. Random access to pages (e.g jumping to the end) is not possible. Depending on the model the content is loaded on demand (OData) or shown on demand (JSON)."
			}
		}
	}
});