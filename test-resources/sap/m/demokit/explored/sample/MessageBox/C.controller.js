jQuery.sap.require("sap.m.MessageBox");

sap.ui.controller("sap.m.sample.MessageBox.C", {

	handleConfirmationMessageBoxPress: function(oEvent) {
		sap.m.MessageBox.show(
			"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.",
			"sap-icon://hint",
			"Really Do This?",
			[sap.m.MessageBox.Action.OK, sap.m.MessageBox.Action.CANCEL ]
		);
	},

	handleAlertMessageBoxPress: function(oEvent) {
		sap.m.MessageBox.alert(
			"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod."
		);
	}
});
