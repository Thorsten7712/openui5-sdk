jQuery.sap.declare("sap.m.sample.RatingIndicator.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.RatingIndicator.Component", {

	metadata : {
		rootView : "sap.m.sample.RatingIndicator.V",
		config : {
			sample : {
				files : [
					"V.view.xml"
				],
				description : "A Rating Indicator can be used to both indicate and/or rate content."
			}
		}
	}
});