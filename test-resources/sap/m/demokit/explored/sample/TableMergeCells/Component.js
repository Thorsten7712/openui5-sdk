jQuery.sap.declare("sap.m.sample.TableMergeCells.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.TableMergeCells.Component", {

	metadata : {
		rootView : "sap.m.sample.TableMergeCells.Table",
		config : {
			sample : {
				files : [
					"Table.view.xml",
					"Table.controller.js",
					"Formatter.js"
				],
				description : "With column duplicate merging, you can improve the display of repeated data. See the effect of mergeDuplicates on the Supplier column, space permitting."
			}
		}
	}
});