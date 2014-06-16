jQuery.sap.declare("sap.m.sample.RefreshResponsive.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.RefreshResponsive.Component", {

	metadata : {
		rootView : "sap.m.sample.RefreshResponsive.Page",
		config : {
			sample : {
				stretch : true,
				files : [
					"Page.view.xml",
					"Page.controller.js"
				],
				description : "An 'Responsive Refresh' can be achieved by the combination of a Search Field's refresh button and a Pull To Refresh, both of which appear depending on whether the device is touch-enabled. A growing stream of backend data is simulated here."
			}
		}
	}
});