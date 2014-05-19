jQuery.sap.declare("sap.m.sample.ObjectHeaderTitleActive.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.ObjectHeaderTitleActive.Component", {

	metadata : {
		rootView : "sap.m.sample.ObjectHeaderTitleActive.V",
		config : {
			sample : {
				files : [
					"V.view.xml",
					"C.controller.js",
					"Popover.fragment.xml"
				],
				description : "The Object Header's title can be active to trigger further actions like showing additional information in a Popover."
			}
		}
	}
});