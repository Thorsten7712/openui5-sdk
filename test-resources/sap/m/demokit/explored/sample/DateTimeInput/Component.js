jQuery.sap.declare("sap.m.sample.DateTimeInput.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.DateTimeInput.Component", {

	metadata : {
		rootView : "sap.m.sample.DateTimeInput.DateTimeInputGroup",
		config : {
			sample : {
				files : [
					"DateTimeInputGroup.view.xml"
				],
				description : "The Date & Time Input is an extension of the Input control and is dedicated to Date and Time."
			}
		}
	}
});