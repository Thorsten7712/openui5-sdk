jQuery.sap.declare("sap.m.sample.CheckBox.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.CheckBox.Component", {

	metadata : {
		rootView : "sap.m.sample.CheckBox.CheckBoxGroup",
		config : {
			sample : {
				files : [
					"CheckBoxGroup.view.xml"
				],
				description : "Checkboxes allow users to select a subset of options. If you want to offer an off/on setting you should use the Switch control instead."
			}
		}
	}
});