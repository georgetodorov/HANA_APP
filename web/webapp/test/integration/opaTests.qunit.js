/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"HANA_APP/web/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});