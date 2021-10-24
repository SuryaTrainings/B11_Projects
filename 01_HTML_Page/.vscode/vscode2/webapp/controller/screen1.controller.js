sap.ui.define([
   "sap/ui/core/mvc/Controller"
], function(Controller) {
    'use strict';

    return Controller.extend("home.controller.screen1",{

        onSave: function(){
            alert("Data saved");
        },
        
        onDelete: function(){
            alert("Data deleted");
        }

// Write our own methods 
    });
    
});