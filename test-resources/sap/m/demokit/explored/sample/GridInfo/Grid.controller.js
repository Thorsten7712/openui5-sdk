sap.ui.controller("sap.m.sample.GridInfo.Grid", {

	onInit: function () {
		// set explored app's demo model on this sample
		var oModel = new sap.ui.model.json.JSONModel("resource/persons.json");
		this.getView().setModel(oModel);
	}
});