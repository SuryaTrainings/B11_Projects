sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast"
], function(Controller, MessageToast) {
    'use strict';

    return Controller.extend("home.controller.screen2",{

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
            
        }


    });
    
});