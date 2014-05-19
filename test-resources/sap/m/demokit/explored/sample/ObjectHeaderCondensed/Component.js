jQuery.sap.declare("sap.m.sample.ObjectHeaderCondensed.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.ObjectHeaderCondensed.Component", {

	metadata : {
		rootView : "sap.m.sample.ObjectHeaderCondensed.V",
		config : {
			sample : {
				files : [
					"V.view.xml",
					"C.controller.js"
				],
				description : "The Object Header is shown in condensed mode with title, number, number unit and one attribute."
			}
		}
	}
});