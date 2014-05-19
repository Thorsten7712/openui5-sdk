sap.ui.controller("sap.m.sample.InputAssisted.C", {

	onInit: function () {
		// set explored app's demo model on this sample
		var oModel = new sap.ui.model.json.JSONModel("resource/products.json");
		this.getView().setModel(oModel);
	},

	handleValueHelp : function (oController) {
		// create value help dialog
		if (!this._valueHelpDialog) {
			this._valueHelpDialog = sap.ui.xmlfragment(
				"sap.m.sample.InputAssisted.Dialog",
				this
			);
			this.getView().addDependent(this._valueHelpDialog);
		}

		// open value help dialog
		this._valueHelpDialog.open();
	},

	_handleValueHelpSearch : function (evt) {
		var sValue = evt.getParameter("value");
		var oFilter = new sap.ui.model.Filter(
			"Name",
			sap.ui.model.FilterOperator.Contains, sValue
		);
		evt.getSource().getBinding("items").filter([oFilter]);
	},

	_handleValueHelpClose : function (evt) {
		var oSelectedItem = evt.getParameter("selectedItem");
		if (oSelectedItem) {
			var productInput = this.getView().byId("productInput");
			productInput.setValue(oSelectedItem.getTitle());
		}
		evt.getSource().getBinding("items").filter([]);
	}
});