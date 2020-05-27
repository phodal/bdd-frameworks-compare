const { setWorldConstructor } = require("cucumber");
const seleniumWebdriver = require('selenium-webdriver');

function CustomWorld() {
  this.driver = new seleniumWebdriver.Builder()
    .forBrowser('chrome')
    .build();
}

setWorldConstructor(CustomWorld)
