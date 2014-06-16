jQuery.sap.declare("sap.m.sample.Select.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.Select.Component", {

	metadata : {
		rootView : "sap.m.sample.Select.Page",
		config : {
			sample : {
				stretch : true,
				files : [
					"Page.view.xml",
					"Page.controller.js"
				],
				description : "Choose one out of multiple options with the Select control. Use the control in the header, footer or main content section of the page. Note the different display options."
			}
		}
	}
});