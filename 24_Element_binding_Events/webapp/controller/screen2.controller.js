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

        onRowSelectionChange: function(oEvent){
            debugger;
            //step - 1 : Get selected row 
             var oItem = oEvent.getParameter("rowContext");
            //step - 2 : Get array path of selected row
             var sPath = oItem.getPath(); 
            //step - 3 : Get screen element object ref from the view
            var oForm = this.getView().byId("idForm"); 
            //step - 4 : bind element - for the dynamic path
            oForm.bindElement(sPath); 
        } 


    });
    
}
);