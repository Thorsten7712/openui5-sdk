jQuery.sap.declare("sap.m.sample.Button.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.Button.Component", {

	metadata : {
		rootView : "sap.m.sample.Button.Page",
		config : {
			sample : {
				stretch : true,
				files : [
					"Page.view.xml",
					"Page.controller.js"
				],
				description : "Buttons trigger user actions and come in a variety of shapes and colors. Placing a button on a page header or footer changes its appearance."
			}
		}
	}
});