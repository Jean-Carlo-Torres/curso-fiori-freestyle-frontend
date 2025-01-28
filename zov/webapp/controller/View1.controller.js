sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("zov.controller.View1", {
        onInit: function () {

        },
        onPress: function(){
            alert("Hello world!")
        },

        onNewCustomer: function(){
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("RouteCustomerNew");
        },

        onEditCustomer1: function(){
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("RouteCustomerEdit", (CustomerId));
        },
    });
});
