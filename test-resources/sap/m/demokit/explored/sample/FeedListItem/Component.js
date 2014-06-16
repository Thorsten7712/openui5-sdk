jQuery.sap.declare("sap.m.sample.FeedListItem.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.FeedListItem.Component", {

	metadata : {
		rootView : "sap.m.sample.FeedListItem.List",
		config : {
			sample : {
				files : [
					"List.view.xml"
				],
				description : "The Feed List Item provides a standard UI for 'feeds' where multiple users publish information on regular basis on a certain topic."
			}
		}
	}
});