sap.ui.define([
    'sap/ui/model/json/JSONModel'
], function(JSONModel) {
    'use strict';
    return {
        createJSONModel : function(sPath){
            //Step - 1 : Create Model object 
            var oModel = new JSONModel(); //Skeleton / carrier 
            //Step - 2 : Set / load - mock data (JSON / XML / JS / HTML)
            oModel.loadData(sPath);
            return oModel;
        } 
        

    }
});