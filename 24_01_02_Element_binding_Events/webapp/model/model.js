sap.ui.define([
    'sap/ui/model/json/JSONModel',
    "sap/ui/model/resource/ResourceModel"
], function(JSONModel,ResourceModel) {
    'use strict';
    return {
        
        createJSONModel : function(sPath){
            //Step - 1 : Create Model object 
            var oModel = new JSONModel(); //Skeleton / carrier 
            //Step - 2 : Set / load - mock data (JSON / XML / JS / HTML)
            oModel.loadData(sPath);
            return oModel;
        },
        
        createResourceModel: function(){
            var oRModel = new ResourceModel({
                // specify url of the base .properties file
                bundleUrl : "i18n/i18n.properties"
            });
            return oRModel;
        }
        

    }
});