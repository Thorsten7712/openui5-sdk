jQuery.sap.declare("sap.m.sample.BarResponsiveCss.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.BarResponsiveCss.Component", {

	metadata : {
		rootView : "sap.m.sample.BarResponsiveCss.Page",
		config : {
			sample : {
				stretch : true,
				files : [
					"Page.view.xml",
					"Page.controller.js",
					"ActionSheet.fragment.xml"
				],
				description : "Depending on the screen size, Buttons will move in an action sheet or will be displayed in a Bar."
			}
		}
	}
});