sap.ui.define([
    "sap/ui/core/UIComponent"
], function(UIComponent) {

    "use strict";

    return UIComponent.extend("demo.xml.xmlcomp.Component", {

        metadata: {
            manifest: "json"
        },

        init: function() {

            UIComponent.prototype.init.apply(this, arguments);

        }

    });

});