jQuery.sap.declare("sap.m.sample.ListLoading.JSONModelPatch");

// NOTE TO DEVELOPERS: You do not need to reproduce this following section
// and its use in monkeypatching elsewhere.
// It is just so we can simulate a delay from the fictional back end, giving
// us some context to show delayed loading sequences.

// Copy of sap.ui.model.json.JSONModel.loadData
// with changes to introduce simulation of a backend delay

sap.m.sample.ListLoading.JSONModelPatch = {

	fnLoadDataPatched : function(sURL, oParameters, bAsync, sType, bMerge, bCache, mHeaders){
		var that = this;
		if (bAsync !== false) {
			bAsync = true;
		}
		if (!sType)	{
			sType = "GET";
		}
		if (bCache === undefined) {
			bCache = this.bCache;
		}

		this.fireRequestSent({url : sURL, type : sType, async : bAsync, headers: mHeaders, info : "cache="+bCache+";bMerge=" + bMerge});
		window.setTimeout(function() {    // <------ MONKEYPATCH LINE INSERTED
		jQuery.ajax({
			url: sURL,
			async: bAsync,
			dataType: 'json',
			cache: bCache,
			data: oParameters,
			headers: mHeaders,
			type: sType,
			success: function(oData) {
			if (!oData) {
					jQuery.sap.log.fatal("The following problem occurred: No data was retrieved by service: " + sURL);
				}
				that.setData(oData, bMerge);
				that.fireRequestCompleted({url : sURL, type : sType, async : bAsync, headers: mHeaders, info : "cache=false;bMerge=" + bMerge, success: true});
			},
			error: function(XMLHttpRequest, textStatus, errorThrown){
				var oError = { message : textStatus, statusCode : XMLHttpRequest.status, statusText : XMLHttpRequest.statusText, responseText : XMLHttpRequest.responseText};
				jQuery.sap.log.fatal("The following problem occurred: " + textStatus, XMLHttpRequest.responseText + ","
							+ XMLHttpRequest.status + "," + XMLHttpRequest.statusText);

				thatquestCompleted({url : sURL, type : sType, async : bAsync, headers: mHeaders, info : "cache=false;bMerge=" + bMerge, success: false, errorobject: oError});
				that.fireRequestFailed(oError);
			}
		})
		}, 3000);    // <------ MONKEYPATCH LINE INSERTED
	}

};