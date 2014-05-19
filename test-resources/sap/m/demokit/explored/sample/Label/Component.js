jQuery.sap.declare("sap.m.sample.Label.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.Label.Component", {

	metadata : {
		rootView : "sap.m.sample.Label.LabelGroup",
		config : {
			sample : {
				files : [
					"LabelGroup.view.xml"
				],
				description : "Labels are helpful when you need to describe some other UI control."
			}
		}
	}
});