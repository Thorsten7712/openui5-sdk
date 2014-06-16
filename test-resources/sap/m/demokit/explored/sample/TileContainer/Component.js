jQuery.sap.declare("sap.m.sample.TileContainer.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.TileContainer.Component", {

	metadata : {
		rootView : "sap.m.sample.TileContainer.Page",
		config : {
			sample : {
				stretch : true,
				files : [
					"Page.view.xml",
					"Page.controller.js",
					"data.json"
				],
				description : "Tiles: a modern UI design pattern for overview & navigation."
			}
		}
	}
});