jQuery.sap.declare("sap.m.sample.ActionListItem.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.ActionListItem.Component", {

	metadata : {
		rootView : "sap.m.sample.ActionListItem.List",
		config : {
			sample : {
				files : [
					"List.view.xml"
				],
				description : "Use the Action List Item to trigger an action directly from a list"
			}
		}
	}
});