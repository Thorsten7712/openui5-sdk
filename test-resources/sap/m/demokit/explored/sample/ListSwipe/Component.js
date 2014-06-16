jQuery.sap.declare("sap.m.sample.ListSwipe.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.ListSwipe.Component", {

	metadata : {
		rootView : "sap.m.sample.ListSwipe.List",
		config : {
			sample : {
				files : [
					"List.view.xml",
					"List.controller.js"
				],
				description : "With a swipe gesture you can show additional content for an item without having to navigate to a detail page. This feature is only available for touch devices."
			}
		}
	}
});