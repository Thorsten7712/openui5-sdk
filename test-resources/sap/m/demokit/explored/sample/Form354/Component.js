jQuery.sap.declare("sap.m.sample.Form354.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.Form354.Component", {

	metadata : {
		rootView : "sap.m.sample.Form354.Page",
		includes : [ "Form354/style.css" ],
		config : {
			sample : {
				stretch : true,
				files : [
					"Page.view.xml",
					"Page.controller.js",
					"Change.fragment.xml",
					"Display.fragment.xml",
					"style.css"
				],
				description : "With a form you can easily layout (a) lists of properties (b) input fields. The form automatically adapts to the screen size. Even though the form is not part of sap.m it can and shall be used for building mobile user interfaces. This is an example of a single-column 3:5:4 layout (label:input:emptyspace) using the Form control"
			}
		}
	}
});