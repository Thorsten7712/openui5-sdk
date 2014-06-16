jQuery.sap.declare("sap.m.sample.ObjectHeaderFavFlag.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.ObjectHeaderFavFlag.Component", {

	metadata : {
		rootView : "sap.m.sample.ObjectHeaderFavFlag.Page",
		config : {
			sample : {
				stretch : true,
				files : [
					"Page.view.xml",
					"Page.controller.js"
				],
				description : "The Object Header can indicate wether the object is a favorite, or has been flagged for further action. Changing these states is done elsewhere."
			}
		}
	}
});