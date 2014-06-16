jQuery.sap.declare("sap.m.sample.ObjectHeaderTitleSel.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.ObjectHeaderTitleSel.Component", {

	metadata : {
		rootView : "sap.m.sample.ObjectHeaderTitleSel.V",
		config : {
			sample : {
				files : [
					"V.view.xml",
					"C.controller.js",
					"Popover.fragment.xml"
				],
				description : "This is a Object Header with a title selection. This can be used to switch between variants of the business object being shown."
			}
		}
	}
});