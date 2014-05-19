sap.ui.controller("sap.m.sample.ObjectListItem.List", {

	onInit: function () {
		// set explored app's demo model on this sample
		var oModel = new sap.ui.model.json.JSONModel("resource/products.json");
		this.getView().setModel(oModel);
	},

	onListItemPress: function (evt) {
		jQuery.sap.require("sap.m.MessageToast");
		sap.m.MessageToast.show("Pressed : " + evt.getSource().getTitle());
	}
});