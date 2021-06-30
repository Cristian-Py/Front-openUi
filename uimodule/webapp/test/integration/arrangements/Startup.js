sap.ui.define(["sap/ui/test/Opa5"], function (Opa5) {
    "use strict";

    return Opa5.extend("com.bmore.frontBmore.test.integration.arrangements.Startup", {
        iStartMyApp: function () {
            this.iStartMyUIComponent({
                componentConfig: {
                    name: "com.bmore.frontBmore",
                    async: true,
                    manifest: true
                }
            });
        }
    });
});
