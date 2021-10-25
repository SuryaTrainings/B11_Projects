sap.ui.define(
    [
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
   "sap/ui/model/json/JSONModel",
   "home/model/model"
], function(Controller, MessageToast, JSONModel, oModel) {
    'use strict';

    return Controller.extend("home.controller.screen2",
        {

        onInit: function(){

            debugger;

            //Default Model
            // Load / Set model &
            var oCModel = oModel.createJSONModel("model/modelData/studentInfo.json");
            // Make aware of model to View
            this.getView().setModel(oCModel); 
            

            //Named Model 
            var oCModel = oModel.createJSONModel("model/modelData/studentInfo2.json");
            // Make aware of model to View
            this.getView().setModel(oCModel, "person2"); 
            
            
 
            // Set path to input / screen fields - binding 

            // 3rd type of property binding 
            //step - 1 : get ref of screen filed 
            var oSDept = this.getView().byId("idSDept");
            //setp - 2 : Fill the value with respective path  
            // oSDept.bindValue("/student/dept");  
            
            //4th type of property binding
            oSDept.bindProperty("value", "/student/dept");
            
        },

        onMessage : function(){
            MessageToast.show("Message displayed for a while");
        },

        onApprove: function(){
            alert("Application approved");
        },

        onReject: function(){
            alert("Application rejected, please resubmit");
        },

        onPress: function(){
            this.getView().byId("idSName").setValue("Mr A");
            this.getView().byId("idSId").setValue("CES0058");
            this.getView().byId("idSDept").setValue("CSE");
            this.getView().byId("idSGrade").setValue("A");
            this.getView().byId("idSFee").setValue("36000 INR");
            
        },
        onFlip: function(){
            var oModel = this.getView().getModel();
            var oOther = this.getView().getModel("oCModel");
            this.getView().setModel(oOther);
            this.getView().setModel(oModel, "oCModel");
        }


    });
    
}
);