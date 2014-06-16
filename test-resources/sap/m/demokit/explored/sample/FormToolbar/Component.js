jQuery.sap.declare("sap.m.sample.FormToolbar.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.FormToolbar.Component", {

	metadata : {
		rootView : "sap.m.sample.FormToolbar.Panel",
		config : {
			sample : {
				files : [
					"Panel.view.xml",
					"Panel.controller.js"
				],
				description : "Unfortunately the form control has no toolbar. As remedy you can put the form inside a Panel that carries the toolbar."
			}
		}
	}
});