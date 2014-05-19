jQuery.sap.declare("sap.m.sample.NavContainer.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.NavContainer.Component", {

	metadata : {
		rootView : "sap.m.sample.NavContainer.V",
		includes : [ "NavContainer/style.css" ],
		config : {
			sample : {
				files : [
					"V.view.xml",
					"C.controller.js",
					"style.css"
				],
				description : "The Nav Container stacks multiple pages and offers an API to switch between them with some animation. Typically application developers would use the App control which inherits from NavContainer."
			}
		}
	}
});