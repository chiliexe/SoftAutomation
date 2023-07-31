const puppeteer = require('puppeteer')
const Softruck = require('../util/Softruck')
const MyGoogleSheets = require('../util/MyGoogleSheets')

const softruck = new Softruck();
const myGoogleSheets = new MyGoogleSheets();

class InactiveUserAndVehicle {

    /**
     * SHEETS LINKS 
     * https://docs.google.com/spreadsheets/d/1FzoybRtHtHx-xb17hdbqXjRElN-OOoxB6ihR22DEHhE/edit#gid=0
     */

    async execute(){
        try {
          console.log("Executing...")
            // GET DATA FROM GOOGLE SHEETS
            const response = await myGoogleSheets.getDataFromSheets("Inativar usuário/veículo")

            // FILTER DATA FROM SHEETS
            const values = response.data.values;
            const active = values[0][1];
            
            if(active != "SIM") return;
            
            let data = []
            values.forEach((value, index) => {
              if(index > 2) {
                data.push({username: value[0], plate: value[1], done: value[2]})
              }
            })

            // INIT PUPPETEER
            const browser = await puppeteer.launch({headless: "new", defaultViewport: { height: 600, width: 1200 }})
            const page = await browser.newPage()
            await softruck.doLogin(page);
            
            //LOOP - DISABLE USER -> DISABLE VEHICLE -> UPDATE CELL FROM SHEETS
            let index = 4;
            for(const value of data){
              if(value.done == "on"){ index++; continue }
              await softruck.disableUser(page, value.username)
              await softruck.disableVehicle(page, value.plate)
              await myGoogleSheets.updateDataFromSheets(`Inativar usuário/veículo!C${index}`, "on");
              index++;
            }
            
            // CLOSE BROWSER
            await browser.close();
            console.log("Finished...")
        } catch (error) {
            this();
        }
    }
}

module.exports = InactiveUserAndVehicle;