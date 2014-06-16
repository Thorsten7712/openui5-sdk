jQuery.sap.declare("sap.m.sample.ListToolbar.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.ListToolbar.Component", {

	metadata : {
		rootView : "sap.m.sample.ListToolbar.List",
		config : {
			sample : {
				files : [
					"List.view.xml",
					"List.controller.js"
				],
				description : "The 'headerText' property is an easy but limited way of setting the list header. If you need more flexibility you should assemble your own header or info toolbar that can also contain buttons."
			}
		}
	}
});