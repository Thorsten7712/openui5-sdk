jQuery.sap.declare("sap.m.sample.ScrollContainer.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.ScrollContainer.Component", {

	metadata : {
		rootView : "sap.m.sample.ScrollContainer.ScrollContainer",
		config : {
			sample : {
				stretch : true,
				files : [
					"ScrollContainer.view.xml",
					"ScrollContainer.controller.js"
				],
				description : "The Scroll Container is a control that can display arbitrary content within a limited screen area and provides touch scrolling to make all content accessible."
			}
		}
	}
});