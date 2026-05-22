sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"demo/prod/productcrud/test/integration/pages/ZI_PRODUCT_014List",
	"demo/prod/productcrud/test/integration/pages/ZI_PRODUCT_014ObjectPage"
], function (JourneyRunner, ZI_PRODUCT_014List, ZI_PRODUCT_014ObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('demo/prod/productcrud') + '/test/flp.html#app-preview',
        pages: {
			onTheZI_PRODUCT_014List: ZI_PRODUCT_014List,
			onTheZI_PRODUCT_014ObjectPage: ZI_PRODUCT_014ObjectPage
        },
        async: true
    });

    return runner;
});

