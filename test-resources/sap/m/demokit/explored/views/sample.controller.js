sap.ui.controller("views.sample", {

	onInit : function () {
		this.router = sap.ui.core.UIComponent.getRouterFor(this);
		this.router.attachRoutePatternMatched(this._handleRouteMatched, this);
	},

	_handleRouteMatched : function (evt) {

		if (evt.getParameter("name") !== "sample") {
			return;
		}

		this._id = evt.getParameter("arguments").id;
		var page = this.getView().byId("page");

		// get path in navigation model
		var navModel = this.getView().getModel("nav");
		var path = util.ObjectSearch.getPath(navModel.getData(), "id", this._id);
		if (!path) {
			this.router.myNavToWithoutHash("views.notFound", "XML", false, { path: this._id });
			return;
		}

		// set page title
		this._navItem = navModel.getProperty(path);
		page.setTitle(this._navItem.name);

		
		if ("COMP" !== this._navItem.type) {
			return;
		}

		// create component only once
		var sCompId = 'sampleComp-' + this._id;
		var sCompName = this._id;
		this._oComp = sap.ui.component(sCompId);
		if (!this._oComp) {
			this._oComp = sap.ui.getCore().createComponent({
				id : sCompId,
				name : sCompName
			});
		}

		// create component container
		var oContent;
		oContent = new sap.ui.core.ComponentContainer({
			component: this._oComp
		});

		// handle stretch content
		var oConfig = (this._oComp.getMetadata()) ? this._oComp.getMetadata().getConfig() : null;
		var bStretch = (oConfig && oConfig.sample && oConfig.sample.stretch);
		var sHeight = (bStretch) ? "100%" : null;
		page.setEnableScrolling(!bStretch);
		oContent.setHeight(sHeight);

		// add content
		page.removeAllContent();
		page.addContent(oContent);

		// scroll to top of page
		page.scrollTo(0);
	},

	handleNavBack : function () {
		var navModel = this.getView().getModel("nav");
		var path = util.ObjectSearch.getPath(navModel.getData(), "id", this._navItem.parent);
		var parentNavItem = navModel.getProperty(path);
		if (2 === parentNavItem.level) {
			this.router.myNavBack("sub", {
				id : parentNavItem.parent,
				subId : parentNavItem.id
			});
		} else if (1 === parentNavItem.level) {
			this.router.myNavBack("category", {
				id : parentNavItem.id
			});
		}
	},

	handleNavToCode : function (evt) {
		this.router.navTo("code", {
			catId : this._catId,
			id : this._id
		}, !sap.ui.Device.system.phone);
	}
});