jQuery.sap.declare("sap.m.sample.PullToRefresh.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.PullToRefresh.Component", {

	metadata : {
		rootView : "sap.m.sample.PullToRefresh.Page",
		config : {
			sample : {
				stretch : true,
				files : [
					"Page.view.xml",
					"Page.controller.js"
				],
				description : "With the Pull to Refresh you can trigger an update operation by swiping the current page down on touch devices. On other devices the Pull To Refresh is visible all the time and the user clicks it like a button."
			}
		}
	}
});