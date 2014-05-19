jQuery.sap.declare("sap.m.sample.ObjectHeaderImage.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.ObjectHeaderImage.Component", {

	metadata : {
		rootView : "sap.m.sample.ObjectHeaderImage.V",
		config : {
			sample : {
				files : [
					"V.view.xml",
					"C.controller.js"
				],
				description : "An Object Header will also make space for an image if one is specified, via a URL for the 'icon' property."
			}
		}
	}
});