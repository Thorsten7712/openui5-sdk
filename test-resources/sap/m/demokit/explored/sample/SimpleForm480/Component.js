jQuery.sap.declare("sap.m.sample.SimpleForm480.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.SimpleForm480.Component", {

	metadata : {
		rootView : "sap.m.sample.SimpleForm480.Page",
		config : {
			sample : {
				stretch : true,
				files : [
					"Page.view.xml",
					"Page.controller.js",
					"Change.fragment.xml",
					"Display.fragment.xml"
				],
				description : "With a form you can easily layout (a) lists of properties (b) input fields. The form automatically adapts to the screen size. Even though the form is not part of sap.m it can and shall be used for building mobile user interfaces. This is an example of a dual-column 4:8:0 layout (label:input:emptyspace) using the SimpleForm control"
			}
		}
	}
});