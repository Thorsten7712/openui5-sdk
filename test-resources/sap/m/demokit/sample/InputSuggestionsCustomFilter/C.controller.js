sap.ui.controller("sap.m.sample.InputSuggestionsCustomFilter.C", {

	onInit: function(oEvent) {
		
		// set explored app's demo model on this sample
		var oModel = new sap.ui.model.json.JSONModel("test-resources/sap/ui/demokit/explored/products.json");
		this.getView().setModel(oModel);

		this.byId("productInput").setFilterFunction(function(sTerm, oItem) {
			// A case-insensitive 'string contains' style filter
			return oItem.getText().match(new RegExp(sTerm, "i"));
		});
	}
});