jQuery.sap.declare("sap.ui.core.sample.Html.Component");

sap.ui.core.UIComponent.extend("sap.ui.core.sample.Html.Component", {

	metadata : {
		rootView : "sap.ui.core.sample.Html.Html",
		config : {
			sample : {
				stretch : true,
				files : [
					"Html.view.xml"
				],
				description : "With the HTML controls you can easily embed any kind of HTML content into your UI5 mobile application."
			}
		}
	}
});