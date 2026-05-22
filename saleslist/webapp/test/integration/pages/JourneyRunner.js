sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"demo/saleslist/saleslist/test/integration/pages/SalesOrdersList",
	"demo/saleslist/saleslist/test/integration/pages/SalesOrdersObjectPage"
], function (JourneyRunner, SalesOrdersList, SalesOrdersObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('demo/saleslist/saleslist') + '/test/flp.html#app-preview',
        pages: {
			onTheSalesOrdersList: SalesOrdersList,
			onTheSalesOrdersObjectPage: SalesOrdersObjectPage
        },
        async: true
    });

    return runner;
});

