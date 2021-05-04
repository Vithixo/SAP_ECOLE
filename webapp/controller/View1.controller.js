sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, MessageToast) {
		"use strict";

		return Controller.extend("ecole1.controller.View1", {
			onInit: function () {

            },
            
            onPress: function (oEvent) {
                var oItem = oEvent.getSource();
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("RouteView2", {
                    invoicePath: oItem.getBindingContext().getPath().substr(1)
                });
            }
                
		});
	});
