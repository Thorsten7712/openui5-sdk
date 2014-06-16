sap.ui.controller("sap.m.sample.FormToolbar.Panel", {

	onInit: function (oEvent) {

		// set explored app's demo model on this sample
		var oModel = new sap.ui.model.json.JSONModel("resource/supplier.json");
		this.getView().setModel(oModel);

		this.getView().bindElement("/SupplierCollection/0");
	}
});
