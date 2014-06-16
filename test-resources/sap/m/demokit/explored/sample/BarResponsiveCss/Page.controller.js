sap.ui.controller("sap.m.sample.BarResponsiveCss.Page", {
	onOpen: function (oEvent) {
		var oButton = oEvent.oSource;

		if (!this._actionSheet) {
			this._actionSheet = sap.ui.xmlfragment("sap.m.sample.BarResponsiveCss.ActionSheet", this);
			this.getView().addDependent(this._actionSheet);
		}

		//delay because addDependent will do a async rerendering and the actionSheet will immediately close without it.
		jQuery.sap.delayedCall(0, this, function () {
			this._actionSheet.openBy(oButton);
		});
	},

	onPress: function (oEvent) {
		sap.m.MessageToast.show(oEvent.oSource.getText());
	}
});