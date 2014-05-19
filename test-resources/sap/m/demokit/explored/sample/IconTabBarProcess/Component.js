jQuery.sap.declare("sap.m.sample.IconTabBarProcess.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.IconTabBarProcess.Component", {

	metadata : {
		rootView : "sap.m.sample.IconTabBarProcess.IconTabBar",
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
				description : "In this example the Icon Tab Bar is used to apply filters on the same content along a business process."
			}
		}
	}
});