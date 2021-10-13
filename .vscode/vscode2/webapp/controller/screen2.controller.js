sap.ui.define([
   "sap/ui/core/mvc/Controller"
], function(Controller) {
    'use strict';

    return Controller.extend("home.controller.screen2",{

        onInit: function(){
            var oView = this.getView();
        },

        onApprove: function(){
            alert("Application approved");
        },

        onReject: function(){
            alert("Application rejected, please resubmit");
        },
        onReload: function(){

            //Get View object, from controller
            //Set the value to the property
            this.oView.byId("idEmpId").setValue("10001");
            this.getView().byId("idEmpName").setValue("Mr A");
            this.getView().byId("idEmpSalary").setValue("25000");
            this.getView().byId("idEmpCurrency").setValue("INR");
            this.getView().byId("idEmpDOJ").setValue("02-Jan-2021");
        }


    });
    
});