sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("zov.controller.View1", {
        onInit: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

            oRouter.getRoute("RouteCustomerNew").attachPatternMatched(this._onRouteMatchedNew, this);
            oRouter.getRoute("RouteCustomerEdit").attachPatternMatched(this._onRouteMatchedEdit, this);
        },

        onView1: function(){
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("RouteView1");
        },

        onNavBack: function(){
            const oHistory = sap.ui.core.routing.History.getInstance();
            const sPreviousHash = oHistory.getPreviousHash();

            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("RouteView1");
            }
        },

        _onRouteMatchedNew: function (oEvent) {
            alert("RouteCustomerNew");
        },

        _onRouteMatchedEdit: function (oEvent) {
            var that = this;
            var oArgs = oEvent.getParameter("arguments");
            var sCustomerId = oArgs.CustomerId;
            alert("Modo modificação do cliente: " + sCustomerId);
        },
            
    });
});
