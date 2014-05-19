jQuery.sap.require("sap.m.sample.ListLoading.JSONModelPatch");

sap.ui.controller("sap.m.sample.ListLoading.List", {

	refreshDataFromBackend: function(oEvent) {

		this.oProductModel.setData({});
		this.oProductModel.loadData("resource/products.json");
	},

	onInit: function(oEvent) {

		this.oProductModel = new sap.ui.model.json.JSONModel();
		this.getView().setModel(this.oProductModel, "productmodel");

		// Replace the loadData function with modified one with an enforced delay
		// NOTE TO DEVELOPERS: You don't need to do this.
		this.oProductModel.loadData = sap.m.sample.ListLoading.JSONModelPatch.fnLoadDataPatched;

		// Use the model's events to give the user feedback during loading

		// Request sent
		this.oProductModel.attachRequestSent(jQuery.proxy(function(oEvent) {

			// Save the List's original NoDataText and set it to "Loading..."
			var oList = this.getView().byId("idProducts");
			this.sNoDataText = oList.getNoDataText();
			oList.setNoDataText("Loading...");

		}, this));

		// Request completed
		this.oProductModel.attachRequestCompleted(jQuery.proxy(function(oEvent) {

			// Restore the NoDataText
			this.getView().byId("idProducts").setNoDataText(this.sNoDataText);

		}, this));

		// Now go and request the data
		this.refreshDataFromBackend();
	}
});