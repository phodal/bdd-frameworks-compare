/* globals gauge*/
"use strict";
const webdriverio = require('webdriverio');
const assert = require("assert");

var client;
var options = {
  desiredCapabilities: {
    browserName: 'chrome'
  }
};

beforeSuite(async function () {
  client = webdriverio.remote(options);
  await client.init();
});

afterSuite(async function () {
  client.close()
});

step("当我在网站的首页", async function () {
  await client.url('http://0.0.0.0:7272/');
});

step("输入用户名 <username>", async function (username) {
  await client.setValue('#username_field', username);
});

step("输入密码 <password>", async function (password) {
  await client.setValue('#password_field', password);
});

step("提交登录信息", async function () {
  await client.click('#login_button');
});

step("用户应该跳转到欢迎页", async function () {
  client.getTitle().then(function(title) {
    assert.equal('Welcome Page', title);
  });

});

step("页面应该返回 <pageTitle>", async function (pageTitle) {
  client.getTitle().then(function(title) {
    assert.equal(pageTitle, title);
  });

});
