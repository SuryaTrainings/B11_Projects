sap.ui.jsview("home.view.screen1",{
    getControllerName: function(){
        return "home.controller.screen1"
    },

    createContent: function(oController){
        var oBtn1 = new sap.m.Button("idBtn1",{
            text: "Save data",
            icon: "sap-icon://save",
            press: oController.onSave
            
        });

        
        var oBtn2 = new sap.m.Button("idBtn2",{
            text: "Delete data",
            icon: "sap-icon://delete",
            press: oController.onDelete 
            // function(){
            //     alert("Data deleted");
            // }
        });

        return [oBtn1, oBtn2];

    }
});