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
            var oModel =models.createJSONModel("model/modelData/studentInfo.json");
            //3. Set model to View
            oModel.setDefaultBindingMode("OneWay");
            this.getView().setModel(oModel);

            //2. call created model
            var oModel2 =models.createJSONModel("model/modelData/studentInfo_mech.json");
            //3. Set model to View
            this.getView().setModel(oModel2, "Mech");



            //4. Please path in the view  
            var oDOJ = this.getView().byId("idEmpDOJ");
            oDOJ.bindValue("Mech>/student/joining");

            var oCurrency = this.getView().byId("idEmpCurrency");
            oCurrency.bindProperty("value", "Mech>/student/curr");



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
            // this.getView().byId("idEmpId").setValue('{/student/name}');
            // this.getView().byId("idEmpName").setValue("Mr A");
            // this.getView().byId("idEmpSalary").setValue("25000");
            // this.getView().byId("idEmpCurrency").setValue("INR");
            // this.getView().byId("idEmpDOJ").setValue("02-Jan-2021");

            var oModel = this.getView().getModel();
            var oJson  = oModel.getProperty("/student");
            console.log(oJson);
            oModel.setProperty("/student/name", "FirstName");
        },

        onShow: function(){
            var oModel = this.getView().getModel();
            var oNewJSON = oModel.getProperty("/student");
            console.log(oNewJSON);
        }


    });
    
});