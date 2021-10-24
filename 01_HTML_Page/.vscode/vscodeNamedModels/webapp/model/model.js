sap.ui.define([
    "sap/ui/model/json/JSONModel"
], function(JSONModel) {
    'use strict';
return  {

    createJSONModel: function(sPath){
        //1 Create Model Object
        var oModel = new JSONModel(); 
        //2 Load / Set Data model object
        oModel.loadData(sPath);
        //3 
        //4
        return oModel;
    }

    }
});