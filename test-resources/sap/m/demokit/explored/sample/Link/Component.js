jQuery.sap.declare("sap.m.sample.Link.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.Link.Component", {

	metadata : {
		rootView : "sap.m.sample.Link.LinkGroup",
		config : {
			sample : {
				files : [
					"LinkGroup.view.xml",
					"LinkGroup.controller.js"
				],
				description : "Here are some links. Typically links are used in user interfaces to trigger navigation to related content inside or outside of the current application."
			}
		}
	}
});