jQuery.sap.declare("sap.m.sample.IconTabBarMulti.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.IconTabBarMulti.Component", {

	metadata : {
		rootView : "sap.m.sample.IconTabBarMulti.IconTabBar",
		config : {
			sample : {
				files : [
					"IconTabBar.view.xml"
				],
				description : "In this example the Icon Tab Bar is used to organize different content objects with only one being visible at a time."
			}
		}
	}
});