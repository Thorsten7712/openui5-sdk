jQuery.sap.declare("sap.m.sample.TableBreadcrumb.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.TableBreadcrumb.Component", {

	metadata : {
		rootView :  "sap.m.sample.TableBreadcrumb.Page",
		includes : [ "TableBreadcrumb/style.css" ],
		config : {
			sample : {
				stretch : true,
				files : [
					"style.css",
					"Page.view.xml",
					"Page.controller.js",
					"Formatter.js",
					"Row.fragment.xml"
				],
				description : "With an InfoToolbar and some crumb logic you can navigate simple hierarchies with a breadcrumb table approach."
			}
		}
	}
});