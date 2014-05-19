jQuery.sap.declare("sap.m.sample.TablePerso.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.TablePerso.Component", {

	metadata : {
		rootView : "sap.m.sample.TablePerso.Table",
		config : {
			sample : {
				files : [
					"Table.view.xml",
					"Table.controller.js",
					"DemoPersoService.js",
					"Formatter.js"
				],
				description : "The Table Perso Dialog is a simple dialog to be used for allowing the user to set table personalizations, specifically column visibility and order. Use the Table Perso Controller in conjunction with a persistence service based on the abstract Table Perso Provider to have changes made and persisted."
			}
		}
	}
});