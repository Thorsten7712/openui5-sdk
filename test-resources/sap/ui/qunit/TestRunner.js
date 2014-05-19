(function(window, undefined) {

	/*
	 * Simulate the JSUnit Testsuite to collect the available
	 * test pages per Suite
	 */
	window.jsUnitTestSuite = function() {};
	window.jsUnitTestSuite.prototype.getTestPages = function() {
		return this.aPages;
	};
	window.jsUnitTestSuite.prototype.addTestPage = function(sTestPage) {
		this.aPages = this.aPages || [];
		this.aPages.push(sTestPage);
	};

	/**
	 * Utility class to find test pages and check them for being
	 * a testsuite or a QUnit testpage - also it returns the coverage
	 * results.
	 */
	window.sap = window.sap || {};
	window.sap.ui = window.sap.ui || {};
	window.sap.ui.qunit = window.sap.ui.qunit || {};
	window.sap.ui.qunit.TestRunner = {
		
		checkTestPage: function(sTestPage) {
			
			var oDeferred = jQuery.Deferred();
			
			if (window.console && typeof window.console.log === "function") {
				window.console.log("QUnit: checking test page: " + sTestPage);
			}
			
			// make the test pages server absolute!
			if (sTestPage && sTestPage.slice(0, 1) !== "/") {
				var contextPath = "/" + window.location.pathname.split("/")[1];
				sTestPage = contextPath + "/" + sTestPage;
			}
			
			// check for an existing test page and check for test suite or page
			var that = this;
			jQuery.get(sTestPage).done(function(sData) {
				if (/function\s*suite\s*\(\s*\)\s*{/g.test(sData)) {
					var $frame = jQuery("<iframe>");
					$frame.css("display", "none");
					$frame.one("load", function() {
						that.findTestPages(this).done(function(aTestPages) {
							oDeferred.resolve(aTestPages);
						});
						jQuery(this).remove();
					});
					$frame.attr("src", sTestPage);
					$frame.appendTo(document.body);
				} else {
					oDeferred.resolve([sTestPage]);
				}
			}).fail(function() {
				if (window.console && typeof window.console.error === "function") {
					window.console.error("QUnit: invalid test page: " + sTestPage);
				}
				oDeferred.resolve([]);
			});
			
			return oDeferred.promise();
			
		},
		
		findTestPages: function(oIFrame) {
			
			var oDeferred = jQuery.Deferred();
			try {
				
				var oSuite = oIFrame.contentWindow.suite();
				var aPages = oSuite.getTestPages() || [];
				
				var aTestPagePromises = [];
				for (var i = 0, l = aPages.length; i < l; i++) {
					var sTestPage = aPages[i];
					aTestPagePromises.push(this.checkTestPage(sTestPage));
				}
				
				if (aTestPagePromises.length > 0) {
					jQuery.when.apply(jQuery, aTestPagePromises).then(function() {
						var aTestPages = [];
						var aArgs = Array.prototype.slice.apply(arguments);
						for (var i = 0, l = aArgs.length; i < l; i++) {
							aTestPages = aTestPages.concat(aArgs[i]);
						}
						oDeferred.resolve(aTestPages);
					});
				} else {
					oDeferred.resolve([]);
				}
				
			} catch (ex) {
				if (window.console && typeof window.console.error === "function") {
					window.console.error("QUnit: error in test page: " + sTestPage + ":\n" + ex);
				}
				oDeferred.resolve([]);
			}
			return oDeferred.promise();
			
		},
		
		runTests: function(aTestPages, bInternal) {
			
			if (!bInternal) {
				this._bStopped = false;
			}
			
			// TODO: stop testing
			
			var sTestPage = aTestPages[0];
			aTestPages = aTestPages.slice(1);
			
			var oDeferred = jQuery.Deferred();
			
			var that = this;
			this.runTest(sTestPage, true).then(function(oResult) {
				return that.runTests(aTestPages, true);
			});
			
			return oDeferred.promise();
			
		},
		
		runTest: function(sTestPage, bInternal) {
			
			if (!bInternal) {
				this._bStopped = false;
			}
			
			var oDeferred = jQuery.Deferred();
			
			if (this._bStopped) {
				
				oDeferred.reject();
				
			} else {
				
				var $frame = jQuery("<iframe>").css({
					height: "400px",
					width: "100%"
				});
				
				$frame.attr("src", sTestPage);
				$frame.appendTo(document.body);
				
				var tBegin = new Date();
				var fnCheckSuccess = function() {
					var doc = $frame[0].contentWindow.document;
					var oResult =doc.getElementById("qunit-testresult");
					if (oResult && jQuery(oResult).text().indexOf("completed") >= 0) {
						var $results = jQuery(doc).find("ol#qunit-tests > li");
						// TODO: evaluate test result and do reporting
						$frame.remove();
						oDeferred.resolve();
					}
					if (new Date() - tBegin < 300000) {
						setTimeout(fnCheckSuccess, 100);
					} else {
						$frame.remove();
						oDeferred.resolve();
						// TODO: error handling
					}
				};
				
				fnCheckSuccess();
				
			}
			
			return oDeferred.promise();
			
		},
		
		stopTests: function() {
			this._bStopped = true;
		},
		
		hasCoverage: function() {
			return !!window._$jscoverage;
		},
		
		getCoverage: function() {
			return window._$jscoverage;
		}
		
	};

})(window);
