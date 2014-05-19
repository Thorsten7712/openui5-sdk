jQuery.sap.declare("sap.m.sample.TextArea.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.TextArea.Component", {

	metadata : {
		rootView : "sap.m.sample.TextArea.V",
		config : {
			sample : {
				files : [
					"V.view.xml"
				],
				description : "The Text Area allows to enter multi-line text and automatically breaks to a new line for overflow text. If the text gets too big to be displayed at once the user can scroll up and down."
			}
		}
	}
});