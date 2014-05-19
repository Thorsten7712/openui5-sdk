jQuery.sap.declare("sap.m.sample.Page.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.Page.Component", {

	metadata : {
		rootView : "sap.m.sample.Page.Page",
		config : {
			sample : {
				stretch : true,
				files : [
					"Page.view.xml"
				],
				description : "Each screen of a mobile application is typically represented by a 'Page' consisting of a header, a scrollable content area and optionally a footer. The standard header offers a navigation button and a title. Alternatively you can provide a customer header."
			}
		}
	}
});