sap.ui.controller("sap.m.sample.PageSpacing.Page", {

	onInit : function (evt) {

		// set explored app's demo model on this sample
		var oModel = new sap.ui.model.json.JSONModel("resource/products.json");
		this.getView().setModel(oModel);

		this.getView().byId("idPage").bindElement("/ProductCollection/0");
	}
});