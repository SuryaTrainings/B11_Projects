sap.ui.define([
    "sap/ui/model/json/JSONModel"
], function(JSONModel) {
    'use strict';
return  {

    createJSONModel: function(){
        //1 Create Model Object
        var oModel = new JSONModel(); 
        //2 Load / Set Data model object
        oModel.loadData("model/modelData/studentInfo.json")
        //3 
        //4
        return oModel;
    }

    }
});