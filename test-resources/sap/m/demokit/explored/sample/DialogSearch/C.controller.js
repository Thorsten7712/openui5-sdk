sap.ui.controller("sap.m.sample.DialogSearch.C", {

	onInit: function () {
		// set explored app's demo model on this sample
		var oModel = new sap.ui.model.json.JSONModel("resource/products.json");
		this.getView().setModel(oModel);
	},

	onOpenDialog: function (oEvent) {
		if (! this._oDialog) {
			this._oDialog = sap.ui.xmlfragment("sap.m.sample.DialogSearch.Dialog", this);
			this.getView().addDependent(this._oDialog);
		}

		this._oDialog.bindElement("/ProductCollection/0");
		this._oDialog.open();
	},

	onCloseDialog: function (oEvent) {
		oEvent.getSource().getParent().close();
	}
});
