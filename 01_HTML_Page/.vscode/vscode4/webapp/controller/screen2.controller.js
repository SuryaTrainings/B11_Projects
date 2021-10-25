sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/ui/model/json/JSONModel",
   "home/model/model"
], function(Controller, JSONModel, models ) {
    'use strict';

    return Controller.extend("home.controller.screen2",{

        onInit: function(){
            var oView = this.getView();

            //2. call created model
            var oModel =models.createJSONModel();
            //3. Set model to View

            this.getView().setModel(oModel);
            //4. Please path in the view  
            var oDOJ = this.getView().byId("idEmpDOJ");
            oDOJ.bindValue("/student/joining");

            var oCurrency = this.getView().byId("idEmpCurrency");
            oCurrency.bindProperty("value", "/student/curr");

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
            this.getView().byId("idEmpId").setValue('{/student/name}');
            this.getView().byId("idEmpName").setValue("Mr A");
            this.getView().byId("idEmpSalary").setValue("25000");
            this.getView().byId("idEmpCurrency").setValue("INR");
            this.getView().byId("idEmpDOJ").setValue("02-Jan-2021");
        }


    });
    
});