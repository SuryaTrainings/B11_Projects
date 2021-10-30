sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast'
], function(Controller, MessageToast ) {
    'use strict';
    
    return Controller.extend("home.controller.screen1",{
        init:function(){
            
        },

        onNext: function(){
            var oAppCon = this.getView().getParent();
            oAppCon.to("idScreen2");
        },

        onItemClick: function(){
            MessageToast.show("Downloaded successfully, Will see soon in college!")
        }
    })

});