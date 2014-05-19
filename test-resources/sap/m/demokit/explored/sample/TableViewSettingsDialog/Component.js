jQuery.sap.declare("sap.m.sample.TableViewSettingsDialog.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.TableViewSettingsDialog.Component", {

	metadata : {
		rootView : "sap.m.sample.TableViewSettingsDialog.V",
		config : {
			sample : {
				files : [
					"V.view.xml",
					"C.controller.js",
					"Dialog.fragment.xml",
					"Formatter.js"
				],
				description : "The View Settings Dialog is standard UI pattern for specifying sorting, grouping and filtering. For a table it should be triggered by a button in the table header with the 'drop-down-list' icon. The active filter should be shown with the table's info bar."
			}
		}
	}
});