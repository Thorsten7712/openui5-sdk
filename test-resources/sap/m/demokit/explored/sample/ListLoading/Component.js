jQuery.sap.declare("sap.m.sample.ListLoading.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.ListLoading.Component", {

	metadata : {
		rootView : "sap.m.sample.ListLoading.List",
		config : {
			sample : {
				files : [
					"List.view.xml",
					"List.controller.js",
					"JSONModelPatch.js"
				],
				description : "You can make use of the List's NoDataText property to inform your users that data is being loaded"
			}
		}
	}
});