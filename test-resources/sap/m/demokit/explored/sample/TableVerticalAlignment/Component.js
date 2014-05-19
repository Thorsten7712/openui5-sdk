jQuery.sap.declare("sap.m.sample.TableVerticalAlignment.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.TableVerticalAlignment.Component", {

	metadata : {
		rootView : "sap.m.sample.TableVerticalAlignment.Table",
		config : {
			sample : {
				files : [
					"Table.view.xml",
					"Table.controller.js",
					"Formatter.js"
				],
				description : "This is a good example of how to vertically align different elements within a Table's ColumnListItem row template."
			}
		}
	}
});