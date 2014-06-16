jQuery.sap.declare("sap.m.sample.CustomListItem.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.CustomListItem.Component", {

	metadata : {
		rootView : "sap.m.sample.CustomListItem.List",
		includes : [ "CustomListItem/style.css" ],
		config : {
			sample : {
				files : [
					"style.css",
					"List.view.xml"
				],
				description : "With the Custom List Item you can add any kind of content to lists."
			}
		}
	}
});