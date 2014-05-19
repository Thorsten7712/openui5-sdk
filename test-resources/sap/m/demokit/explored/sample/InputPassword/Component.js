jQuery.sap.declare("sap.m.sample.InputPassword.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.InputPassword.Component", {

	metadata : {
		rootView : "sap.m.sample.InputPassword.V",
		config : {
			sample : {
				files : [
					"V.view.xml"
				],
				description : "To make sure the password is not shown as clear text you set the 'type' of an input control to 'Password'."
			}
		}
	}
});