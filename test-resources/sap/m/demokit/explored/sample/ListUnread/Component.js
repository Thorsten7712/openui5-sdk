jQuery.sap.declare("sap.m.sample.ListUnread.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.ListUnread.Component", {

	metadata : {
		rootView : "sap.m.sample.ListUnread.List",
		config : {
			sample : {
				files : [
					"List.view.xml",
					"List.controller.js",
					"Formatter.js"
				],
				description : "With the Unread Indicator you can highlight new items making it easier for the user to discover them."
			}
		}
	}
});