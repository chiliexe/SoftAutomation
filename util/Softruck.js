class Softruck {
  selector = {
    login: {
      login: "beto.bot",
      pass: "Bolt360@",
      loginUrl: "https://app.softruck.com/access/login",
      devicesUrl: "https://app.softruck.com/organization/devices/list?",
      loginSelector:
        "body > div > div.access-form-wrapper.ng-scope.layout-align-center-stretch.layout-column > div:nth-child(2) > div.access-container.ng-scope > form > div:nth-child(1) > input",
      passSelector:
        "body > div > div.access-form-wrapper.ng-scope.layout-align-center-stretch.layout-column > div:nth-child(2) > div.access-container.ng-scope > form > div:nth-child(2) > input",
      loginBtnSelector:
        "body > div > div.access-form-wrapper.ng-scope.layout-align-center-stretch.layout-column > div:nth-child(2) > div.access-container.ng-scope > form > button",
      devicesSearchSelector:
        "#content > div > div.ng-scope > ui-view > div.ng-scope.layout-column.flex-100 > div > div > div.filter-wrapper > md-toolbar > div > input",
      arrowDevicesSelector:
        "#content > div > div.ng-scope > ui-view > div.ng-scope.layout-column.flex-100 > div > div > div.st-expansion-panel > div > div.st-expansion-header > span > a > i",
      iccidSelector:
        "#content > div > div.ng-scope > ui-view > div.ng-scope.layout-column.flex-100 > div > div > div.st-expansion-panel > div > div.st-expansion-container > div.st-expansion-content > span > span.mt8.mb8.flex-70 > span:nth-child(1) > span > span.st-subhead.ng-binding",
    },
    devices: {
        searchUrl: "https://app.softruck.com/organization/devices/list?search=",
        arrow: "#content > div > div.ng-scope > ui-view > div.ng-scope.layout-column.flex-100 > div > div > div.st-expansion-panel > div > div.st-expansion-header > span > a",
        iccid: "#content > div > div.ng-scope > ui-view > div.ng-scope.layout-column.flex-100 > div > div > div.st-expansion-panel > div > div.st-expansion-container > div.st-expansion-content > span > span.mt8.mb8.flex-70 > span:nth-child(1) > span > span.st-subhead.ng-binding",
        details: {
          toggleButton: "#content > div > div.ng-scope > ui-view > div > div > div.ng-scope > div > div:nth-child(2) > div > div > md-switch",
          toggleConfirm: "body > div.md-dialog-container.ng-scope > md-dialog > md-dialog-actions > button.md-primary.md-confirm-button.md-button.md-ink-ripple.md-default-theme",

        }
      },
    vehicles: {
        url: "https://app.softruck.com/management/vehicles/list?search=",
        arrow: "#content > div > div.ng-scope > ui-view > div.ng-scope.layout-column.flex-100 > div > div > md-expansion-panel-group > md-expansion-panel > md-expansion-panel-collapsed > md-icon",
        lastReporting: "#content > div > div.ng-scope > ui-view > div.ng-scope.layout-column.flex-100 > div > div > md-expansion-panel-group > md-expansion-panel > md-expansion-panel-collapsed > span > span:nth-child(5) > span.st-subhead.st-no-wrap > span",
        owner: "#content > div > div.ng-scope > ui-view > div.ng-scope.layout-column.flex-100 > div > div > md-expansion-panel-group > md-expansion-panel > md-expansion-panel-expanded > md-expansion-panel-header > div > span > span:nth-child(2) > span.st-subhead.st-no-wrap.ng-binding",
        moreDetails: "#content > div > div.ng-scope > ui-view > div.ng-scope.layout-column.flex-100 > div > div > md-expansion-panel-group > md-expansion-panel > md-expansion-panel-expanded > md-expansion-panel-footer > div > div > div > a",
        notFound: "#content > div > div.ng-scope > ui-view > div.ng-scope.layout-column.flex-100 > div > div > div.ng-scope > div > div > span",
        toggleButton: "#content > div > div.ng-scope > ui-view > div.ng-scope.layout-column.flex-100 > div > div > md-expansion-panel-group > md-expansion-panel > md-expansion-panel-expanded > md-expansion-panel-footer > div > div > div > span > span > md-switch",
        toggleConfirm: "body > div.md-dialog-container.ng-scope > md-dialog > md-dialog-actions > button.md-primary.md-confirm-button.md-button.md-ink-ripple.md-default-theme",
        details: {
          userLine: "#content > div > div.ng-scope > ui-view > div.card-content.ng-scope > div > form > div > div:nth-child(7) > md-table-container > table > tbody > tr",
          userTrash: "#content > div > div.ng-scope > ui-view > div.card-content.ng-scope > div > form > div > div:nth-child(7) > md-table-container > table > tbody > tr > td:nth-child(4) > div > a",
          deviceLine: "#content > div > div.ng-scope > ui-view > div.card-content.ng-scope > div > form > div > div:nth-child(9) > md-table-container > table > tbody > tr",
          deviceTrash: "#content > div > div.ng-scope > ui-view > div.card-content.ng-scope > div > form > div > div:nth-child(9) > md-table-container > table > tbody > tr > td:nth-child(6) > div > a",
          saveButton: "#content > div > div.ng-scope > ui-view > div.card-content.ng-scope > div > form > div > div.st-form-actions.layout-align-end-center.layout-row > button.altnav-action.save",
          deviceImei: "#content > div > div.ng-scope > ui-view > div.card-content.ng-scope > div > form > div > div:nth-child(9) > md-table-container > table > tbody > tr > td:nth-child(3) > a",

        }
    },
    users: {
        url: "https://app.softruck.com/management/users/list?search=",
        btnSwitch: "#content > div > div.ng-scope > ui-view > div.ng-scope.layout-column.flex-100 > div > div > md-expansion-panel-group > md-expansion-panel.ng-scope.md-open > md-expansion-panel-expanded > md-expansion-panel-footer > div > div > div > span > md-switch",
        arrow: "#content > div > div.ng-scope > ui-view > div.ng-scope.layout-column.flex-100 > div > div > md-expansion-panel-group > md-expansion-panel > md-expansion-panel-collapsed > md-icon",
        toggleButton: "#content > div > div.ng-scope > ui-view > div.ng-scope.layout-column.flex-100 > div > div > md-expansion-panel-group > md-expansion-panel > md-expansion-panel-expanded > md-expansion-panel-footer > div > div > div > span > md-switch",
        toggleConfirm: "body > div.md-dialog-container.ng-scope > md-dialog > md-dialog-actions > button.md-primary.md-confirm-button.md-button.md-ink-ripple.md-default-theme",
        notFound: "#content > div > div.ng-scope > ui-view > div.ng-scope.layout-column.flex-100 > div > div > div.ng-scope > div > div > span"
    }
  }
  
  async doLogin(page) {
    await page.goto(this.selector.login.loginUrl);
    await page.waitForSelector(this.selector.login.loginSelector);
    await page.type(this.selector.login.loginSelector, this.selector.login.login);
    await page.type(this.selector.login.passSelector, this.selector.login.pass);
    await page.click(this.selector.login.loginBtnSelector);
    await page.waitForNavigation();
  }

  async getIccid(page, plate) {
    await page.goto(`${this.selector.devices.searchUrl}${plate}`);
    await page.waitForTimeout(1800);
    await page.waitForSelector(this.selector.devices.arrow);
    await page.click(this.selector.devices.arrow);

    const el = await page.waitForSelector(this.selector.devices.iccid);
    const iccid = await el.evaluate((el) => el.textContent);

    return iccid
  }

  async lastReporting(page, plate){
    await page.goto(`${this.selector.vehicles.url}${plate}`);
    await page.waitForTimeout(1800);
    const el = await page.waitForSelector(this.selector.vehicles.lastReporting);
    const content = await el.evaluate((el) => el.textContent);

    return content.split(" ")[1];
  }
  async isReporting(page, plate){
    await page.goto(`${this.selector.vehicles.url}${plate}`);
    await page.waitForTimeout(1800);
    const el = await page.waitForSelector(this.selector.vehicles.lastReporting);
    const content = await el.evaluate((el) => el.textContent);

    return !content.includes("warning");
  }

  async isVehicleEnabled(page, plate) {
    await page.goto(`${this.selector.vehicles.url}${plate}`);
    await page.waitForTimeout(1800);
    await page.waitForSelector(this.selector.vehicles.arrow);
    await page.click(this.selector.vehicles.arrow);
    const el = await page.$(this.selector.vehicles.toggleButton);
    const isVehicleEnabled = await el.evaluate((el) => el.getAttribute('aria-checked'))
    return isVehicleEnabled;
  }
  async disableUser(page, username){
    await page.goto(`${this.selector.users.url}${username}`);
    await page.waitForTimeout(1800);
    const notFoundEl = await page.$(this.selector.users.notFound);
    if(notFoundEl != null) return

    await page.waitForSelector(this.selector.users.arrow);
    await page.click(this.selector.users.arrow);
    const el = await page.$(this.selector.users.toggleButton);
    
    const isUserEnabled = await el.evaluate((el) => el.getAttribute('aria-checked'))
    if(isUserEnabled == "true"){
      await page.click(this.selector.users.toggleButton)
      await page.waitForTimeout(1200);
      await page.click(this.selector.users.toggleConfirm);
      await page.waitForTimeout(1200);
    }

  }

  async disableVehicle(page, plate){
    await page.goto(`${this.selector.vehicles.url}${plate}`);
    await page.waitForTimeout(1800);
    const notFoundEl = await page.$(this.selector.vehicles.notFound);
    if(notFoundEl != null) return

    await page.waitForSelector(this.selector.vehicles.arrow);
    await page.click(this.selector.vehicles.arrow);
    const el = await page.$(this.selector.vehicles.toggleButton);
    const isVehicleEnabled = await el.evaluate((el) => el.getAttribute('aria-checked'))

    if(isVehicleEnabled == "true"){
      await page.waitForTimeout(1000);
      await page.click(this.selector.vehicles.toggleButton)
      await page.waitForTimeout(1200);
      await page.click(this.selector.vehicles.toggleConfirm);
      await page.waitForTimeout(1200);
    }
    
  };

  
  async hasCarInUser(page, username){
    // verify if cars in user
    await page.goto(`${this.selector.vehicles.url}${username}`);
    await page.waitForTimeout(3000);

    const elNotFound = await page.$(this.selector.vehicles.notFound);

    if(elNotFound == null) return true;
    else return false;
  }

  async remove(page, plate){
    await page.goto(`${this.selector.vehicles.url}${plate}`);
    await page.waitForTimeout(3000);
    await page.click(this.selector.vehicles.arrow);

    //get name of owner
    const el = await page.waitForSelector(this.selector.vehicles.owner);
    const ownerName = await el.evaluate((el) => el.textContent);

    //disable vehicle


    // details vehicle
    const elLink = await page.$(this.selector.vehicles.moreDetails);
    const detailsLink = await elLink.evaluate((el) => el.getAttribute('href'));
    const vehicleDetailsLink = "https://app.softruck.com" + detailsLink;

    await page.goto(vehicleDetailsLink);
    await page.waitForTimeout(3000);

    const imeiEl = await page.$(this.selector.vehicles.details.deviceImei);
    const imeiLink = await imeiEl.evaluate((el) => el.getAttribute('href'));
    const fullImeiLink = "https://app.softruck.com" + imeiLink + "/general";

    // remove user from vehicle
    await page.hover(this.selector.vehicles.details.userLine);
    await page.waitForTimeout(1000);
    await page.click(this.selector.vehicles.details.userTrash);

    // remove device from vehicle
    await page.hover(this.selector.vehicles.details.deviceLine);
    await page.waitForTimeout(1000);
    await page.click(this.selector.vehicles.details.deviceTrash);

    await page.click(this.selector.vehicles.details.saveButton);
    await page.waitForTimeout(1000);

    // disable device
    await page.goto(fullImeiLink);
    await page.waitForTimeout(2000);
    const imeiToggleEl = await page.$(this.selector.devices.details.toggleButton);
    const isDeviceEnabled = await imeiToggleEl.evaluate((el) => el.getAttribute('aria-checked'))
    
    if(isDeviceEnabled){
      await page.click(this.selector.devices.details.toggleButton)
      await page.waitForTimeout(1000);
      await page.click(this.selector.devices.details.toggleConfirm);
    }

    await page.waitForTimeout(1000);

    // disable user
    const hasCar = await this.hasCarInUser(page, ownerName)
    if(!hasCar) this.disableUser(page, ownerName);


    console.log("retirada concluida");
  }
}

module.exports = Softruck;
