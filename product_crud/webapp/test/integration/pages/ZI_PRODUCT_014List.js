sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'demo.prod.productcrud',
            componentId: 'ZI_PRODUCT_014List',
            contextPath: '/ZI_PRODUCT_014'
        },
        CustomPageDefinitions
    );
});