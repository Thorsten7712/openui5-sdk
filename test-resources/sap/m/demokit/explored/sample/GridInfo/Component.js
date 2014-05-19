jQuery.sap.declare("sap.m.sample.GridInfo.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.GridInfo.Component", {

	metadata : {
		rootView : "sap.m.sample.GridInfo.Grid",
		config : {
			sample : {
				files : [
					"Grid.view.xml",
					"Grid.controller.js"
				],
				description : "You can use the Grid control to make responsive table-free layouts; here we are using a default indent and span, and specifying the Small settings such that the image and text will stack on a small display."
			}
		}
	}
});