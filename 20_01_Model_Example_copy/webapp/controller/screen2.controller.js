sap.ui.define(
    [
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
   "sap/ui/model/json/JSONModel"
], function(Controller, MessageToast, JSONModel) {
    'use strict';

    return Controller.extend("home.controller.screen2",
        {

        onInit: function(){

            // Create Model 
            var oJSONData = { "student" : 
                            	{ "name"    : "Sagar",
                            	  "class"   : "12th",
                            	  "grade"   : "A+",
	                              "city"    : "Bangalore",
                                  "phone"   : 123123,
                                  "B.Grp"   : "B+",
                                  "id"      : "SID-0045",
                                  "dept"    : "ECE",
                                  "fee"     : 45000,
                                  "edit"    : true,
                                  "marks"   : 467
	                            }   
                            };
            // Create model object 
            var oJsonModel = new JSONModel(oJSONData);
            oJsonModel.setDefaultBindingMode("OneWay");
            // Load / Set model & 
            // Make aware of model to View
            this.getView().setModel(oJsonModel);                
                            
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

        onJSONData: function(){
            var oInfo = this.getView().getModel();
            console.log(oInfo);
        }


    });
    
}
);