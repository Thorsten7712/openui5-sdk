jQuery.sap.declare("sap.m.sample.SegmentedButton.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.SegmentedButton.Component", {

	metadata : {
		rootView : "sap.m.sample.SegmentedButton.Page",
		config : {
			sample : {
				stretch : true,
				files : [
					"Page.view.xml"
				],
				description : "The Segmented Button allows the user to pick one out of many options for displaying the content of the current page. It is a UI pattern from iOS, now also available for other platforms. Putting the Segmented Button to a Bar control on non-iOS platforms will result in something very close to a tab."
			}
		}
	}
});