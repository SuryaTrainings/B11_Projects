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

            var oXMLView = sap.ui.core.mvc.ViewType.XML;

            var oView = sap.ui.view({
                viewName : "home.view.App",
                id: "idAppView",
                type: "XML"
            });

            //Step - 1 : Instantiate all views
            var oScreen1 = sap.ui.view({
                viewName : "home.view.screen1",
                id: "idScreen1",
                type: "XML"
            });

            var oScreen2 = sap.ui.view({
                viewName: "home.view.screen2",
                id:"idScreen2",
                type: oXMLView
            });
            
            var oAppCon = oView.byId("appCon");

            oAppCon.addPage(oScreen1);
            oAppCon.addPage(oScreen2);

            return oView;
        }

        });
});