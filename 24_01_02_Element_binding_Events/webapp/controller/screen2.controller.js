sap.ui.define(
    [
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
   "home/model/model",
   "home/util/cosmatic",
], function(Controller, MessageToast, oModel, cosmatic) {
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
            
            //Resource model
            var oRSModel = oModel.createResourceModel();
            this.getView().setModel(oRSModel, "i18n");            
 
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
            console.log(oEvent);

            //Step - 1 : Get the source 
            var oRow =  oEvent.getParameter("rowContext");
            //Step - 2 : Get Path / data source 
            var sPath = oRow.getPath();
            //Step - 3 : Get Element reference / object refer 
            var oForm = this.getView().byId("idForm");
            //Step - 4 : Using bindElement() method - Set Abosultepath to the screen element 
            oForm.bindElement(sPath);
            
        },

        toUpperCase: function(oInp){
            if(oInp){
                return oInp.toUpperCase();
            }
        }


    });
    
}
);