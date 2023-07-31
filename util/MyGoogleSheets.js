const { google } = require('googleapis')

const auth = new google.auth.GoogleAuth({
    keyFile: "./credentials.json",
    scopes: [
      'https://www.googleapis.com/auth/spreadsheets',
    ],
});

const docId = "1FzoybRtHtHx-xb17hdbqXjRElN-OOoxB6ihR22DEHhE"

class MyGoogleSheets {
    
    async getSheets(){
        const authClient = await auth.getClient();
        return google.sheets({version: 'v4', auth: authClient})
    }

    async getDataFromSheets(range){
        const sheets = await this.getSheets();

        return await sheets.spreadsheets.values.get({
            spreadsheetId: docId,
            range: "Inativar usuário/veículo"
        })
    }

    async updateDataFromSheets(range, data) {
        const sheets = await this.getSheets();
        await sheets.spreadsheets.values.update({
            spreadsheetId: docId, range,
            valueInputOption: 'RAW', // Pode ser 'RAW' para texto simples ou 'USER_ENTERED' para usar a formatação da célula
            resource: {
              values: [[data]],
            },
        })
    }
}

module.exports = MyGoogleSheets;