jQuery.sap.declare("sap.m.sample.InputChecked.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.InputChecked.Component", {

	metadata : {
		rootView : "sap.m.sample.InputChecked.V",
		config : {
			sample : {
				files : [
					"V.view.xml",
					"C.controller.js"
				],
				description : "Input checks are handled via the validation of the data binding. In this example there are two inputs that are validated (a) while the user types and (b) when the user continues the process. If the built-in validation types are not sufficient you can create your own, like the email type in this example."
			}
		}
	}
});