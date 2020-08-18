const express = require('express')
const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
const customer="CustomerDetails";

const app=express()
const port = process.env.PORT

//console.log(typeof parseInt('7000000047908010',10));
//gcloud functions deploy NAME --runtime nodejs8 --trigger-http

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/chatbot',(request,response) =>{
    const agent = new WebhookClient({request, response });
    let ID = parseInt(request.body.queryResult.parameters.customerdetails);
    let localelanguage=agent.locale;
    agent.add(`The locale language is ${localelanguage}`);
    function customerintentHandler(agent)
     {
      switch (localelanguage) {  
         case 'de':            
         if(ID==7000000047908010 || ID==7047908817)
         {
            agent.add(`Beziehungs-ID:7000000047908010`);
            agent.add(`Verbraucher-ID:7047908817`);
            agent.add(`Vorname:Joseph`);
            agent.add(`Nachname:Abt`);
            agent.add(`Geschlecht:Männlich`);
            agent.add(`Subventionsstatus:HALT`);
         }
         else if(ID == 7100000003658180 || ID==7501390156)
         {
            agent.add(`Beziehungs-ID:7100000003658180`);
            agent.add(`Verbraucher-ID:7501390156`);
            agent.add(`Vorname:LuisValentina`);
            agent.add(`Nachname:Devi`);
            agent.add(`Geschlecht:Weiblich`);
            agent.add(`Subventionsstatus:ANFANG`);
         }
         else if(ID == 7000000052517630 || ID==7042628791)
         {
            agent.add(`Beziehungs-ID:7000000052517630`);
            agent.add(`Verbraucher-ID:7042628791`);
            agent.add(`Vorname:Carlos Isabella`);
            agent.add(`Nachname:Abalos`);
            agent.add(`Geschlecht:Männlich`);
            agent.add(`Subventionsstatuso:HALT`);
         }
         else if(ID == 7000000036597500  || ID==7035689703)
         {
            agent.add(`Beziehungs-ID:7000000036597500`);
            agent.add(`Verbraucher-ID:7035689703`);
            agent.add(`Vorname:JuanCamila`);
            agent.add(`Nachname:Eine Bar`);
            agent.add(`Geschlecht:Weiblich`);
            agent.add(`Subventionsstatus:ANFANG`);   
         }
         else{
             agent.add("Bitte geben Sie eine gültige Verbraucher- oder Beziehungs-ID ein");
             agent.add("Geben Sie Werte aus dieser Liste ein:[7000000047908010,7047908817,7100000003658180,7501390156,7000000052517630,7042628791,7000000036597500,7035689703,7000000047908010]");
            }
            break; 
       default:
         agent.add(`Unbekanntes Sprachformat`);
         agent.add(`Language is not understandable`);
         }
      }         
   let intentMap = new Map(); // Map functions to English Dialogflow intent names
   intentMap.set('CustomerDetails', customerintentHandler);
   agent.handleRequest(intentMap);
});
app.listen(port, () => { console.log(`Server running on port number: ${port}`) })
