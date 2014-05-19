jQuery.sap.declare("sap.m.sample.IconTabBarNoIcons.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.IconTabBarNoIcons.Component", {

	metadata : {
		rootView : "sap.m.sample.IconTabBarNoIcons.IconTabBar",
		config : {
			sample : {
				files : [
					"IconTabBar.view.xml"
				],
				description : "This is similar to the 'Icon Tab Bar - Multi' example but has no icons. Instead, the text is highlighted on selection."
			}
		}
	}
});