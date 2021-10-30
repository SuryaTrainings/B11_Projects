sap.ui.define([
    'sap/ui/core/mvc/Controller'
], function(Controller) {
    'use strict';
    
    return Controller.extend("home.controller.screen2",{
        init:function(){

        },
        onBack: function(){
            this.getView().getParent().to("idScreen1");
        }
    })

});