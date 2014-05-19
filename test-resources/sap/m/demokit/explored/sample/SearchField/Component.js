jQuery.sap.declare("sap.m.sample.SearchField.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.SearchField.Component", {

	metadata : {
		rootView : "sap.m.sample.SearchField.Page",
		config : {
			sample : {
				stretch : true,
				files : [
					"Page.view.xml"
				],
				description : "Use the Search Field to let the user enter a search string and trigger the search process."
			}
		}
	}
});