// features/step_definitions/browser_steps.js
var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {
    Given('我在 Cucumber.js GitHub repository', function() {
        return this.driver.get('https://github.com/cucumber/cucumber-js/tree/master');
    });

    When('我点击 {string}', function (text) {
        return this.driver.findElement({linkText: text}).then(function(element) {
            return element.click();
        });
    });

    Then('我应该看到 {string}', function (text) {
        var xpath = "//*[contains(text(),'" + text + "')]";
        var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
        return this.driver.wait(condition, 10000);
    });
});
