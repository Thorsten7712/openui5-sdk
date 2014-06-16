jQuery.sap.declare("sap.m.sample.InputListItem.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.InputListItem.Component", {

	metadata : {
		rootView : "sap.m.sample.InputListItem.List",
		config : {
			sample : {
				files : [
					"List.view.xml"
				],
				description : "Use the Input List Item on phones to build form like user interfaces."
			}
		}
	}
});