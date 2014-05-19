jQuery.sap.declare("sap.m.sample.Panel.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.Panel.Component", {

	metadata : {
		rootView : "sap.m.sample.Panel.Panel",
		config : {
			sample : {
				files : [
					"Panel.view.xml"
				],
				description : "Panels are helpful to group custom content. They can be decorated with header and info toolbars."
			}
		}
	}
});