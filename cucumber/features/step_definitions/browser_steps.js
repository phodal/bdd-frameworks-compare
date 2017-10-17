// features/step_definitions/browser_steps.js
// var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');
var { By } = require('selenium-webdriver');
const expect = require('chai').expect;

defineSupportCode(function({setDefaultTimeout}) {
    setDefaultTimeout(10 * 1000);
});

defineSupportCode(function({Given, When, Then}) {
    Given('当我在网站的首页', function() {
        return this.driver.get('http://0.0.0.0:7272/');
    });

    When('输入用户名 {string}', function (text) {
        return this.driver.findElement(By.id('username_field')).sendKeys(text)
    });

    When('输入密码 {string}', function (text) {
        return this.driver.findElement(By.id('password_field')).sendKeys(text)
    });

    When('提交登录信息', function () {
        return this.driver.findElement(By.id('login_button')).click()
    });

    Then('用户应该跳转到欢迎页', function () {
      this.driver.getTitle().then(function(title) {
        expect(title).to.equal('Welcome Page');
      });
    });
});
