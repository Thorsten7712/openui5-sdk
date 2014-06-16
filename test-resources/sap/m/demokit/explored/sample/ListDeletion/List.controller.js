sap.ui.controller("sap.m.sample.ListDeletion.List", {

	onInit : function (evt) {
		// set explored app's demo model on this sample
		var oModel = new sap.ui.model.json.JSONModel("resource/products.json");
		this.getView().setModel(oModel);
	},

	handleDelete: function(evt) {
		evt.getSource().removeItem(evt.getParameter("listItem"));
	}

});