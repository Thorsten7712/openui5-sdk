sap.ui.controller("sap.m.sample.BusyDialogLight.C", {
	handlePress: function (oEvent) {
		if (!this._dialog) {
			this._dialog = sap.ui.xmlfragment("sap.m.sample.BusyDialogLight.BusyDialog", this);
			this.getView().addDependent(this._dialog);
		}

		this._dialog.open();

		jQuery.sap.delayedCall(3000, this, function () {
			this._dialog.close();
		});
	}
});
