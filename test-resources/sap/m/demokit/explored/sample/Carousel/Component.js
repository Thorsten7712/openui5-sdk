jQuery.sap.declare("sap.m.sample.Carousel.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.Carousel.Component", {

	metadata : {
		rootView : "sap.m.sample.Carousel.Carousel",
		config : {
			sample : {
				stretch : true,
				files : [
					"Carousel.view.xml",
					"Carousel.controller.js"
				],
				description : "With the Carousel a user can browse through multi-page content by swiping left or right."
			}
		}
	}
});