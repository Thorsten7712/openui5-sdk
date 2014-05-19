jQuery.sap.declare("sap.m.sample.ListSelectionSearch.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.ListSelectionSearch.Component", {

	metadata : {
		rootView : "sap.m.sample.ListSelectionSearch.List",
		config : {
			sample : {
				stretch : true,
				files : [
					"List.view.xml",
					"List.controller.js"
				],
				description : "When searching a list with multi selection the previously selected items will stay selected. This is managed by the list control for you."
			}
		}
	}
});