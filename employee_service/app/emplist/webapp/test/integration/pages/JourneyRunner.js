sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"demo/emplist/emplist/test/integration/pages/EmployeeDetailsList",
	"demo/emplist/emplist/test/integration/pages/EmployeeDetailsObjectPage"
], function (JourneyRunner, EmployeeDetailsList, EmployeeDetailsObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('demo/emplist/emplist') + '/test/flp.html#app-preview',
        pages: {
			onTheEmployeeDetailsList: EmployeeDetailsList,
			onTheEmployeeDetailsObjectPage: EmployeeDetailsObjectPage
        },
        async: true
    });

    return runner;
});

