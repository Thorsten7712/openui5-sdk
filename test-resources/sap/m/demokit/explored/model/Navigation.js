jQuery.sap.declare("model.Navigation");

model.Navigation = {

	items: [

		{parent: null, type: "DIR", id: "root", name: "Categories" },

		{parent: "root", type: "DIR", id: "action", name: "Action" },
		{parent: "root", type: "DIR", id: "containers", name: "Container" },
		{parent: "root", type: "DIR", id: "display", name: "Display" },
		{parent: "root", type: "DIR", id: "inputs", name: "User Input" },
		{parent: "root", type: "DIR", id: "list", name: "List" },
		{parent: "root", type: "DIR", id: "listItems", name: "List Items" },
		{parent: "root", type: "DIR", id: "popups", name: "Popups" },
		{parent: "root", type: "DIR", id: "layout", name: "Layout" },
		{parent: "root", type: "DIR", id: "tables", name: "Table" },
		{parent: "root", type: "DIR", id: "responsive", name: "Responsive" },

		{parent: "responsive", type: "COMP", id: "sap.m.sample.BarResponsiveCss", name: "Responsive Bar" },
		{parent: "responsive", type: "COMP", id: "sap.m.sample.ResponsivePopover", name: "Responsive Popover" },
		{parent: "responsive", type: "COMP", id: "sap.m.sample.RefreshResponsive", name: "Responsive Refresh" },
		{parent: "responsive", type: "COMP", id: "sap.m.sample.Form354", name: "Form" },
		{parent: "responsive", type: "COMP", id: "sap.m.sample.GridInfo", name: "Grid"},
		{parent: "responsive", type: "COMP", id: "sap.m.sample.Table", name: "Table"},

		{parent: "action", type: "COMP", id: "sap.m.sample.ActionSheet", name: "Action Sheet" },
		{parent: "action", type: "COMP", id: "sap.m.sample.Button", name: "Button" },
		{parent: "action", type: "COMP", id: "sap.m.sample.Link", name: "Link" },
		{parent: "action", type: "COMP", id: "sap.m.sample.UrlHelper", name: "URL Helper" },
		{parent: "action", type: "DIR", id: "refreshes", name: "Refresh" },

		{parent: "refreshes", type: "COMP", id: "sap.m.sample.PullToRefresh", name: "Pull To Refresh" },
		{parent: "refreshes", type: "COMP", id: "sap.m.sample.RefreshResponsive", name: "Responsive Refresh" },

		{parent: "containers", type: "COMP", id: "sap.m.sample.Carousel", name: "Carousel"},
		{parent: "containers", type: "COMP", id: "sap.m.sample.NavContainer", name: "Nav Container"},
		{parent: "containers", type: "COMP", id: "sap.m.sample.ScrollContainer", name: "Scroll Container"},
		{parent: "containers", type: "COMP", id: "sap.m.sample.TileContainer", name: "Tile Container"},
		{parent: "containers", type: "COMP", id: "sap.m.sample.Panel", name: "Panel"},
		{parent: "containers", type: "DIR", id: "iconTabBars", name: "Icon Tab Bar"},
		{parent: "containers", type: "DIR", id: "pages", name: "Page & Bar"},

		{parent: "layout", type: "COMP", id: "sap.m.sample.HorizontalLayout", name: "Horizontal Layout"},
		{parent: "layout", type: "COMP", id: "sap.m.sample.VerticalLayout", name: "Vertical Layout"},
		{parent: "layout", type: "DIR", id: "form", name: "Form"},
		{parent: "layout", type: "DIR", id: "grid", name: "Grid"},
		{parent: "layout", type: "DIR", id: "flexBoxes", name: "Flex Box"},

		{parent: "form", type: "COMP", id: "sap.m.sample.Form354", name: "Form - Single 3:5:4" },
		{parent: "form", type: "COMP", id: "sap.m.sample.SimpleForm354", name: "Simple Form - Single 3:5:4"},
		{parent: "form", type: "COMP", id: "sap.m.sample.SimpleForm471", name: "Simple Form - Single 4:7:1"},
		{parent: "form", type: "COMP", id: "sap.m.sample.SimpleForm480", name: "Simple Form - Dual 4:8:0"},
		{parent: "form", type: "COMP", id: "sap.m.sample.FormToolbar", name: "Form With Toolbar"},

		{parent: "grid", type: "COMP", id: "sap.m.sample.GridInfo", name: "Grid - Info Layout"},
		{parent: "grid", type: "COMP", id: "sap.m.sample.GridTiles", name: "Grid - Tile-based Layout"},
		{parent: "grid", type: "COMP", id: "sap.m.sample.GridTasks", name: "Grid - Task Display"},

		{parent: "flexBoxes", type: "COMP", id: "sap.m.sample.FlexBox", name: "Flex Box"},
		{parent: "flexBoxes", type: "COMP", id: "sap.m.sample.FlexBoxOpposingAlignment", name: "Flex Box - Opposing Alignment"},
		{parent: "flexBoxes", type: "COMP", id: "sap.m.sample.FlexBoxDirectionOrder", name: "Flex Box - Direction & Order"},
		{parent: "flexBoxes", type: "COMP", id: "sap.m.sample.FlexBoxSizeAdjustments", name: "Flex Box - Size Adjustments"},
		{parent: "flexBoxes", type: "COMP", id: "sap.m.sample.FlexBoxBasicAlignment", name: "Flex Box - Basic Alignment"},
		{parent: "flexBoxes", type: "COMP", id: "sap.m.sample.FlexBoxCols", name: "Flex Box - Equal Height Cols" },
		{parent: "flexBoxes", type: "COMP", id: "sap.m.sample.FlexBoxNav", name: "Flex Box - Navigation Examples"},
		{parent: "flexBoxes", type: "COMP", id: "sap.m.sample.FlexBoxNested", name: "Flex Box - Nested" },

		{parent: "pages", type: "COMP", id: "sap.m.sample.Page", name: "Page & Bar"},
		{parent: "pages", type: "COMP", id: "sap.m.sample.PageSpacing", name: "Page Spacing"},
		{parent: "pages", type: "COMP", id: "sap.m.sample.BarResponsiveCss", name: "Responsive Bar" },
		
		{parent: "iconTabBars", type: "COMP", id: "sap.m.sample.IconTabBar", name: "Icon Tab Bar - Filter"},
		{parent: "iconTabBars", type: "COMP", id: "sap.m.sample.IconTabBarMulti", name: "Icon Tab Bar - Tabs"},
		{parent: "iconTabBars", type: "COMP", id: "sap.m.sample.IconTabBarProcess", name: "Icon Tab Bar - Process"},
		{parent: "iconTabBars", type: "COMP", id: "sap.m.sample.IconTabBarNoIcons", name: "Icon Tab Bar - Only Text"},

		{parent: "display", type: "COMP", id: "sap.m.sample.BusyIndicator", name: "Busy Indicator"},
		{parent: "display", type: "COMP", id: "sap.ui.core.sample.Html", name: "HTML" },
		{parent: "display", type: "COMP", id: "sap.m.sample.Image", name: "Image" },
		{parent: "display", type: "COMP", id: "sap.m.sample.Label", name: "Label" },
		{parent: "display", type: "COMP", id: "sap.m.sample.ProgressIndicator", name: "Progress Indicator"},
		{parent: "display", type: "COMP", id: "sap.m.sample.Text", name: "Text"},
		{parent: "display", type: "COMP", id: "sap.ui.core.sample.Icon", name: "Icon"},
		{parent: "display", type: "DIR", id: "objectHeaders", name: "Object Header"},

		{parent: "objectHeaders", type: "COMP", id: "sap.m.sample.ObjectHeader", name: "Object Header"},
		{parent: "objectHeaders", type: "COMP", id: "sap.m.sample.ObjectHeaderImage", name: "Object Header - With Image"},
		{parent: "objectHeaders", type: "COMP", id: "sap.m.sample.ObjectHeaderFavFlag", name: "Object Header - Favorite & Flag"},
		{parent: "objectHeaders", type: "COMP", id: "sap.m.sample.ObjectHeaderTitleSel", name: "Object Header - Select Title" },
		{parent: "objectHeaders", type: "COMP", id: "sap.m.sample.ObjectHeaderTitleActive", name: "Object Header - Active Title" },
		{parent: "objectHeaders", type: "COMP", id: "sap.m.sample.ObjectHeaderCondensed", name: "Object Header - Condensed"},

		{parent: "inputs", type: "COMP", id: "sap.m.sample.CheckBox", name: "Check Box" },
		{parent: "inputs", type: "COMP", id: "sap.m.sample.DateTimeInput", name: "Date Time Input" },
		{parent: "inputs", type: "COMP", id: "sap.m.sample.RadioButton", name: "Radio Button" },
		{parent: "inputs", type: "COMP", id: "sap.m.sample.RatingIndicator", name: "Rating Indicator" },
		{parent: "inputs", type: "COMP", id: "sap.m.sample.SegmentedButton", name: "Segmented Button" },
		{parent: "inputs", type: "COMP", id: "sap.m.sample.Select", name: "Select"},
		{parent: "inputs", type: "COMP", id: "sap.m.sample.Slider", name: "Slider" },
		{parent: "inputs", type: "COMP", id: "sap.m.sample.TextArea", name: "Text Area" },
		{parent: "inputs", type: "COMP", id: "sap.m.sample.Switch", name: "Switch" },
		{parent: "inputs", type: "DIR", id: "searchField", name: "Search Field" },
		{parent: "inputs", type: "DIR", id: "input", name: "Input" },
		{parent: "inputs", type: "DIR", id: "facetfilter", name: "Facet Filter" },

		{parent: "searchField", type: "COMP", id: "sap.m.sample.SearchField", name: "Search Field" },
		{parent: "searchField", type: "COMP", id: "sap.m.sample.DialogSearch", name: "Dialog with Search" },
		{parent: "searchField", type: "COMP", id: "sap.m.sample.ListSelectionSearch", name: "List - Selection & Search" },
		{parent: "searchField", type: "COMP", id: "sap.m.sample.RefreshResponsive", name: "Responsive Refresh" },
		
		{parent: "facetfilter", type: "COMP", id: "sap.m.sample.FacetFilterSimple", name: "Facet Filter - Simple"},
		{parent: "facetfilter", type: "COMP", id: "sap.m.sample.FacetFilterLight", name: "Facet Filter - Light"},

		{parent: "input", type: "COMP", id: "sap.m.sample.InputTypes", name: "Input - Types" },
		{parent: "input", type: "COMP", id: "sap.m.sample.InputPassword", name: "Input - Password" },
		{parent: "input", type: "COMP", id: "sap.m.sample.InputChecked", name: "Input - Checked" },
		{parent: "input", type: "COMP", id: "sap.m.sample.InputAssisted", name: "Input - Assisted" },
		{parent: "input", type: "COMP", id: "sap.m.sample.InputSuggestionsDynamic", name: "Input - Suggestions - Dynamic" },
		{parent: "input", type: "COMP", id: "sap.m.sample.InputSuggestionsOpenSearch", name: "Input - Suggestions - OSP" },
		{parent: "input", type: "COMP", id: "sap.m.sample.InputSuggestionsCustomFilter", name: "Input - Suggestions - Custom" },

		{parent: "list", type: "COMP", id: "sap.m.sample.ListToolbar", name: "List - Header & Info Toolbar" },
		{parent: "list", type: "COMP", id: "sap.m.sample.ListNoData", name: "List - No Data Indication" },
		{parent: "list", type: "COMP", id: "sap.m.sample.ListFooter", name: "List - Footer" },
		{parent: "list", type: "COMP", id: "sap.m.sample.ListSelection", name: "List - Selection" },
		{parent: "list", type: "COMP", id: "sap.m.sample.ListSelectionSearch", name: "List - Selection & Search" },
		{parent: "list", type: "COMP", id: "sap.m.sample.ListDeletion", name: "List - Deletion" },
		{parent: "list", type: "COMP", id: "sap.m.sample.ListSwipe", name: "List - Swipe" },
		{parent: "list", type: "COMP", id: "sap.m.sample.ListGrowing", name: "List - Growing" },
		{parent: "list", type: "COMP", id: "sap.m.sample.ListGrouping", name: "List - Grouping"},
		{parent: "list", type: "COMP", id: "sap.m.sample.ListUnread", name: "List - Unread Indication" },
		{parent: "list", type: "COMP", id: "sap.m.sample.ListNavType", name: "List - Navigation Indication" },
		{parent: "list", type: "COMP", id: "sap.m.sample.ListCounter", name: "List - Counter Indication" },
		{parent: "list", type: "COMP", id: "sap.m.sample.ListLoading", name: "List - Loading Indication" },

		{parent: "tables", type: "COMP", id: "sap.m.sample.Table", name: "Table - Columns"},
		{parent: "tables", type: "COMP", id: "sap.m.sample.TableViewSettingsDialog", name: "Table - View Settings" },
		{parent: "tables", type: "COMP", id: "sap.m.sample.TablePerso", name: "Table - Personalization"},
		{parent: "tables", type: "COMP", id: "sap.m.sample.TableMergeCells", name: "Table - Merge Cells"},
		{parent: "tables", type: "COMP", id: "sap.m.sample.TableVerticalAlignment", name: "Table - Vertical Alignment"},
		{parent: "tables", type: "COMP", id: "sap.m.sample.TableBreadcrumb", name: "Table - Breadcrumb" },

		{parent: "listItems", type: "COMP", id: "sap.m.sample.ActionListItem", name: "Action List Item" },
		{parent: "listItems", type: "COMP", id: "sap.m.sample.CustomListItem", name: "Custom List Item" },
		{parent: "listItems", type: "COMP", id: "sap.m.sample.DisplayListItem", name: "Display List Item" },
		{parent: "listItems", type: "COMP", id: "sap.m.sample.FeedListItem", name: "Feed List Item", noMVI : true},
		{parent: "listItems", type: "COMP",  id: "sap.m.sample.InputListItem", name: "Input List Item" },
		{parent: "listItems", type: "COMP", id: "sap.m.sample.ObjectListItem", name: "Object List Item", noMVI : true},
		{parent: "listItems", type: "DIR",  id: "listItemStd", name: "Standard List Item" },

		{parent: "listItemStd", type: "COMP", id: "sap.m.sample.StandardListItem", name: "Standard List Item" },
		{parent: "listItemStd", type: "COMP", id: "sap.m.sample.StandardListItemTitle", name: "Standard List Item - Adapt Title" },

		{parent: "popups", type: "COMP", id: "sap.m.sample.ActionSheet", name: "Action Sheet" },
		{parent: "popups", type: "COMP", id: "sap.m.sample.MessageBox", name: "Message Box" },
		{parent: "popups", type: "COMP", id: "sap.m.sample.MessageToast", name: "Message Toast" },
		{parent: "popups", type: "COMP", id: "sap.m.sample.Popover", name: "Popover" },
		{parent: "popups", type: "COMP", id: "sap.m.sample.ResponsivePopover", name: "Responsive Popover" },
		{parent: "popups", type: "COMP", id: "sap.m.sample.SelectDialog", name: "Select Dialog" },
		{parent: "popups", type: "COMP", id: "sap.m.sample.TableSelectDialog", name: "Table Select Dialog" },
		{parent: "popups", type: "DIR", id: "busyDialogs", name: "Busy Dialog" },
		{parent: "popups", type: "DIR", id: "dialogs", name: "Dialog" },
		{parent: "popups", type: "DIR", id: "viewSettingsDialogs", name: "View Settings Dialog" },

		{parent: "dialogs", type: "COMP", id: "sap.m.sample.Dialog", name: "Dialog" },
		{parent: "dialogs", type: "COMP", id: "sap.m.sample.DialogSearch", name: "Dialog with Search" },

		{parent: "viewSettingsDialogs", type: "COMP", id: "sap.m.sample.ViewSettingsDialog", name: "View Settings Dialog - Standard" },
		{parent: "viewSettingsDialogs", type: "COMP", id: "sap.m.sample.ViewSettingsDialogCustom", name: "View Settings Dialog - Custom" },

		{parent: "busyDialogs", type: "COMP", id: "sap.m.sample.BusyDialog", name: "Busy Dialog - Standard" },
		{parent: "busyDialogs", type: "COMP", id: "sap.m.sample.BusyDialogLight", name: "Busy Dialog - Light" }
	]
};

// calculate the sample counts
(function () {

	// map items 2 indizes
	var itemIndizes = {};
	jQuery.each(model.Navigation.items, function (i, item) {
		itemIndizes[item.id] = i;
	});
	
	// define recursive count function
	var itemIds = {};
	var fnCalcCounts = function (id, level) {
		var itemCount = 0;
		jQuery.each(model.Navigation.items, function (i, item) {
			if (id === item.parent) {
				if ("DIR" === item.type) {
					itemCount += fnCalcCounts(item.id, level + 1);
				} else {
					itemCount++;
					item.level = level + 1;
					itemIds[item.id] = true;
				}
			}
		});
		var i = itemIndizes[id];
		model.Navigation.items[i].count = itemCount;
		model.Navigation.items[i].level = level;
		return itemCount;
	};
	
	// start recursion with root
	fnCalcCounts("root", 0);
	
	// set total count
	model.Navigation.items[0].count = 0;
	jQuery.each(itemIds, function () {
		model.Navigation.items[0].count++;
	});
}
)();
