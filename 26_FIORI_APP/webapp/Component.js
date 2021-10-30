sap.ui.define([
    "sap/ui/core/UIComponent"
], function(UIComponent) {
    'use strict';
    
    return UIComponent.extend("home.Component",{

        init: function(){
            //This line will call the base class constructor 
            UIComponent.prototype.init.apply(this);
        },

        createContent: function(){
            var oView = sap.ui.view({
                viewName : "home.view.App",
                id: "idAppView",
                type: "XML"
            });
            //Step - 1 : Create View 1 
            var oScreen1 = sap.ui.view({
                viewName : "home.view.screen1",
                type: "XML",
                id: "idScreen1"
            });
            //Step - 2 : Create View 2

            var oScreen2 = sap.ui.view({
                viewName : "home.view.screen2",
                type: "XML",
                id: "idScreen2"
            });

            debugger;
            var oAppCon = oView.byId("appCon");
            
            oAppCon.addPage(oScreen1);

            oAppCon.addPage(oScreen2);

            return oView;
        }

        });
});