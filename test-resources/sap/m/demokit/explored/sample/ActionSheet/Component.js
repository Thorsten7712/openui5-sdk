jQuery.sap.declare("sap.m.sample.ActionSheet.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.ActionSheet.Component", {

	metadata : {
		rootView : "sap.m.sample.ActionSheet.V",
		config : {
			sample : {
				files : [
					"V.view.xml",
					"C.controller.js",
					"ActionSheet.fragment.xml"
				],
				description : "Action Sheet provides an easier way of showing a list of actions and allowing the user to select one. Title and cancel buttons can be shown or hidden. Without an icon the entry will still be aligned (see the last action in the list)."
			}
		}
	}
});