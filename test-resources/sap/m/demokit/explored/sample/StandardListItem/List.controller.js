sap.ui.controller("sap.m.sample.StandardListItem.List", {

	onInit : function (evt) {

		// set explored app's demo model on this sample
		var oModel = new sap.ui.model.json.JSONModel("resource/products.json");
		this.getView().setModel(oModel);

		this.getView().byId("ShortProductList").bindElement("/ProductCollection/0");
	}
});