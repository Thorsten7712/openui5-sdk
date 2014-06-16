jQuery.sap.declare("sap.m.sample.ListNoData.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.ListNoData.Component", {

	metadata : {
		rootView : "sap.m.sample.ListNoData.List",
		config : {
			sample : {
				files : [
					"List.view.xml",
					"List.controller.js"
				],
				description : "If the list is empty it indicates this state by displaying a message text."
			}
		}
	}
});