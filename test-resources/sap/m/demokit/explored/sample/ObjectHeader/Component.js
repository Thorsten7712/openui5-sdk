jQuery.sap.declare("sap.m.sample.ObjectHeader.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.ObjectHeader.Component", {

	metadata : {
		rootView : "sap.m.sample.ObjectHeader.V",
		config : {
			sample : {
				files : [
					"V.view.xml",
					"C.controller.js"
				],
				description : "This is a Object Header which displays the basic information about objects similar to the Object List Item. Besides a title and number you can show multiple attributes (on the left) and statuses (on the right)."
			}
		}
	}
});