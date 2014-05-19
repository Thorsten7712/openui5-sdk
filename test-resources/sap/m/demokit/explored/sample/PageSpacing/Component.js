jQuery.sap.declare("sap.m.sample.PageSpacing.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.PageSpacing.Component", {

	metadata : {
		rootView : "sap.m.sample.PageSpacing.Page",
		config : {
			sample : {
				stretch : true,
				files : [
					"Page.view.xml"
				],
				description : "This page shows a standard setup for showing the details of an object based on: Object Header, Icon Tab Bar, Form, List, Table and Panel. By applying the CSS class 'sapUiFioriObjectPage' you arrange all the controls with a standard spacing."
			}
		}
	}
});