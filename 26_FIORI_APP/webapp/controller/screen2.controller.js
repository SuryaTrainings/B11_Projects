sap.ui.define([
    'sap/ui/core/mvc/Controller'
], function(Controller) {
    'use strict';
    
    return Controller.extend("home.controller.screen2",{
        init:function(){
            
        },
        onBack: function(){
            // var oAppCon = this.getView().getParent();
            // oAppCon.to("idScreen1");

            this.getView().getParent().to("idScreen1");
        }
    })

});