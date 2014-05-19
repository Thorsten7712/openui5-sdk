jQuery.sap.declare("sap.m.sample.TableSelectDialog.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.TableSelectDialog.Component", {

	metadata : {
		rootView : "sap.m.sample.TableSelectDialog.V",
		config : {
			sample : {
				files : [
					"V.view.xml",
					"C.controller.js",
					"Dialog.fragment.xml",
					"Formatter.js"
				],
				description : "Similar to the Select Dialog, the Table Select Dialog presents selectable items in a table-based dialog, with filter functions. You can have single select or multi select mode. The dialog can remember the selections previously set on the dialog."
			}
		}
	}
});