jQuery.sap.declare("sap.m.sample.UrlHelper.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.UrlHelper.Component", {

	metadata : {
		rootView : "sap.m.sample.UrlHelper.List",
		config : {
			sample : {
				files : [
					"List.view.xml",
					"List.controller.js"
				],
				description : "The URL Helper can be used to easily trigger a phone\'s native apps like Email, Telephone and SMS. It can be used with any UI control but typically an active Display List Item is chosen."
			}
		}
	}
});