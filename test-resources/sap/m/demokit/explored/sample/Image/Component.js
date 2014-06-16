jQuery.sap.declare("sap.m.sample.Image.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.Image.Component", {

	metadata : {
		rootView : "sap.m.sample.Image.ImageGroup",
		config : {
			sample : {
				files : [
					"ImageGroup.view.xml",
					"ImageGroup.controller.js"
				],
				description : "Images are faster than words and attract people's attention. Images can also have an active state like the last image in this example."
			}
		}
	}
});