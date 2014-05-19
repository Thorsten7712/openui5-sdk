jQuery.sap.declare("sap.m.sample.ResponsivePopover.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.ResponsivePopover.Component", {

	metadata : {
		rootView : "sap.m.sample.ResponsivePopover.V",
		config : {
			sample : {
				files : [
					"V.view.xml",
					"C.controller.js",
					"Popover.fragment.xml"
				],
				description : "The Responsive Popover is an abstraction of Popover and Dialog. On the phone a Dialog will be shown. On tablet and desktop a Popover is shown."
			}
		}
	}
});