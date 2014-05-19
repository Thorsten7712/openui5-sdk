sap.ui.controller("sap.m.sample.Popover.C", {

	onInit : function (evt) {
		// set explored app's demo model on this sample
		var oModel = new sap.ui.model.json.JSONModel("resource/products.json");
		this.getView().setModel(oModel);
	},

	onExit : function () {
		if (this._oPopover) {
			this._oPopover.destroy();
		}
	},

	handlePopoverPress: function (oEvent) {
		if (! this._oPopover) {
			this._oPopover = sap.ui.xmlfragment("sap.m.sample.Popover.Popover", this);
		}
		this._oPopover.setModel(this.getView().getModel());
		this._oPopover.bindElement("/ProductCollection/0");
		this._oPopover.openBy(oEvent.getSource());
	},

	handleEmailPress: function (oEvent) {
		this._oPopover.close();
		jQuery.sap.require("sap.m.MessageToast");
		sap.m.MessageToast.show("E-Mail has been sent");
	}
});
