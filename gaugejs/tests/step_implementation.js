/* globals gauge*/
"use strict";
const puppeteer = require('puppeteer');
const expect = require('chai').expect;

var page;
var mainFrame;
var browser;

beforeSuite(async function () {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 5
  });
  page = await browser.newPage();
  mainFrame = page.mainFrame();
});

afterSuite(async function () {
  browser.close();
});

step("当我在网站的首页", async function () {
  await page.goto('http://0.0.0.0:7272/');
});

step("输入用户名 <query>", async function (query) {
  await page.click('#username_field');
  await page.type(query)
});

step("输入密码 <query>", async function (query) {
  await page.click('#password_field');
  await page.type(query)
});

step("提交登录信息", async function () {
  await page.click('#login_button')
});

step("用户应该跳转到欢迎页", async function(){
  await page.waitFor('h1');
  const text = await await page.$eval('#container h1', h1 => {
    return h1.innerHTML;
  });

  expect(text).to.equal('Welcome Page');
});

step("页面应该返回 <query>", async function(query){
  await page.waitFor('h1');
  const text = await await page.$eval('#container h1', h1 => {
    return h1.innerHTML;
  });

  expect(text).to.equal(query);
});
