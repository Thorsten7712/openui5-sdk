jQuery.sap.declare("sap.m.sample.IconTabBar.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.IconTabBar.Component", {

	metadata : {
		rootView : "sap.m.sample.IconTabBar.IconTabBar",
		dependencies : {
			components : [
				"sap.m.sample.Table"
			]
		},
		config : {
			sample : {
				files : [
					"IconTabBar.view.xml",
					"IconTabBar.controller.js"
				],
				description : "In this example the Icon Tab Bar is used to apply filters on the same content and show a quick preview of how many items can be expected for each view."
			}
		}
	}
});