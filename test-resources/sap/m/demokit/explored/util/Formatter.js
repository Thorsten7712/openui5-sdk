jQuery.sap.declare("util.Formatter");

util.Formatter = {

	navIcon : function (type) {
		return ("DIR" === type) ? "sap-icon://folder-full" : "sap-icon://paper-plane";
	},

	navListItemType : function (type) {
		return ("DIR" === type) ? "Active" : ((sap.ui.Device.system.phone) ? "Active" : "Inactive");
	}
};