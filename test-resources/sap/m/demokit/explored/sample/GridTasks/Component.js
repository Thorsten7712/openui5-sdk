jQuery.sap.declare("sap.m.sample.GridTasks.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.GridTasks.Component", {

	metadata : {
		rootView : "sap.m.sample.GridTasks.Grid",
		config : {
			sample : {
				files : [
					"Grid.view.xml"
				],
				description : "Using the Grid control, with appropriate values for the Large/Medium/Small span settings, you can set some elements to be fixed (like the Active, Inactive and Failed titles here) and some to flow."
			}
		}
	}
});