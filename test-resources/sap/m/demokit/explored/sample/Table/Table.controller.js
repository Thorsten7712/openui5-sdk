jQuery.sap.require("sap.m.sample.Table.Formatter");

sap.ui.controller("sap.m.sample.Table.Table", {

	onInit: function () {
		// set explored app's demo model on this sample
		var oModel = new sap.ui.model.json.JSONModel("resource/products.json");
		this.getView().setModel(oModel);
	}
});