jQuery.sap.declare("sap.m.sample.GridTiles.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.GridTiles.Component", {

	metadata : {
		rootView : "sap.m.sample.GridTiles.Grid",
		config : {
			sample : {
				files : [
					"Grid.view.xml",
					"Grid.controller.js",
					"Formatter.js"
				],
				description : "There is a lot of flexibility with the Grid control's content; here we are using Object List Items to represent products, with some being third/half-width, and others being half/full-width, depending on the available screen size."
			}
		}
	}
});