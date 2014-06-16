jQuery.sap.declare("sap.m.sample.ProgressIndicator.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.ProgressIndicator.Component", {

	metadata : {
		rootView : "sap.m.sample.ProgressIndicator.V",
		config : {
			sample : {
				files : [
					"V.view.xml"
				],
				description : "Shows the progress of a process in a graphical way. To indicate the progress, the inside of the ProgressIndicator is filled with a color."
			}
		}
	}
});