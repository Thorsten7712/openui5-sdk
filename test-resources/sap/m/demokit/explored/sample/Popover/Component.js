jQuery.sap.declare("sap.m.sample.Popover.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.Popover.Component", {

	metadata : {
		rootView : "sap.m.sample.Popover.V",
		config : {
			sample : {
				files : [
					"V.view.xml",
					"C.controller.js",
					"Popover.fragment.xml"
				],
				description : "The Popover controls allows to show contextual information without leaving the current page. Press somewhere outside the popover to close it."
			}
		}
	}
});