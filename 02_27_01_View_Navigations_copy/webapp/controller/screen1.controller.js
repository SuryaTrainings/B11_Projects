sap.ui.define([
    'sap/ui/core/mvc/Controller'
], function(Controller) {
    'use strict';
    
    return Controller.extend("home.controller.screen1",{
        init:function(){

        },
        onNext: function(){
            var oAppCon = this.getView().getParent();
            oAppCon.to("idScreen2");
        }
    })

});