const puppeteer = require('puppeteer');
const Softruck = require('../util/Softruck');
const MyGoogleSheets = require('../util/MyGoogleSheets');

const docId = "1VS-SQOskrGXVYIZDrj4aX16KhkQpLGQyV1YSCpOxVME"

const softruck = new Softruck();
const myGoogleSheets = new MyGoogleSheets(docId);

class GetIccid {

    async execute() {

       try {
        console.log("Executando...")
        const browser = await puppeteer.launch({headless: "new", defaultViewport: { height: 600, width: 1200 }})
        const page = await browser.newPage();

        await softruck.doLogin(page);

        let start = 25;
        let end = 41;
        const response = await myGoogleSheets.getDataFromSheets(`pag!A${start}:A${end}`);
        for(const plate of response.data.values){
            if(start == end) break;
            const iccid = await softruck.getIccid(page, plate[0])
            await myGoogleSheets.updateDataFromSheets(`pag!C${start}`, iccid);
            start++;
        }

        await browser.close();
       } catch (error) {
        console.log(error.message);
       }

    }

}

module.exports = GetIccid;