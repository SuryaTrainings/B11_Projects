sap.ui.define([
   "sap/ui/core/mvc/Controller"
], function(Controller) {
    'use strict';

    return Controller.extend("home.controller.screen2",{

        onApprove: function(){
            alert("Application approved");
        },

        onReject: function(){
            alert("Application rejected, please resubmit");
        }


    });
    
});