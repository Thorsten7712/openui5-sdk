jQuery.sap.declare("sap.m.sample.StandardListItemTitle.Component");

sap.ui.core.UIComponent.extend("sap.m.sample.StandardListItemTitle.Component", {

	metadata : {
		rootView : "sap.m.sample.StandardListItemTitle.List",
		config : {
			sample : {
				files : [
					"List.view.xml",
					"List.controller.js"
				],
				description : "By default the title size adapts to the available space and gets bigger if the description is empty. List items with and without descriptions results in titles with different sizes. In this cases it is better to switch the size adaption off."
			}
		}
	}
});