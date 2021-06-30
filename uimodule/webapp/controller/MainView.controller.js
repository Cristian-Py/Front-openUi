sap.ui.define([
    "com/bmore/frontBmore/controller/BaseController",
    "sap/ui/model/json/JSONModel",
    "thirdparty/axios/dist/axios.min"
    ], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("com.bmore.frontBmore.controller.MainView", {
        onInit(){
            this.paises = new JSONModel ({pais: []});
            this.setModel(this.paises, "modelTable");
            this.callApi();
        },
        callApi: async function(){
            try{
                await this.getApi();

            }catch(error){
                console.log(error);
            }
        },
        getApi: function(){
            return new Promise((resolve, reject) =>{
                const service = `http://localhost:8080/pais-apis/test/get-paises`;
                axios.get(service,
                {
                }).then((response)=>{
                    console.log(response.data.paises);
                    let data = response.data.paises;
                    this.paises.setProperty("/pais", data);
                    console.log(this.paises);
                    resolve();
                }).catch((error)=>{
                    console.log(error);
                    reject(error.toString());
                })
            })
        }
    });
});
