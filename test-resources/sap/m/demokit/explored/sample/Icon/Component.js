jQuery.sap.declare("sap.ui.core.sample.Icon.Component");

sap.ui.core.UIComponent.extend("sap.ui.core.sample.Icon.Component", {

	metadata : {
		rootView : "sap.ui.core.sample.Icon.IconGroup",
		includes : [ "Icon/style.css" ],
		config : {
			sample : {
				files : [
					"style.css",
					"IconGroup.controller.js",
					"IconGroup.view.xml"
				],
				description : "Built with an embedded font, icons scale well, and can be altered with CSS. They can also fire a press event. See the Icon Explorer for more icons."
			}
		}
	}
});