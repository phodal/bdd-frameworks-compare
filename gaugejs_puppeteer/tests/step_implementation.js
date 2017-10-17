/* globals gauge*/
"use strict";
const puppeteer = require('puppeteer');
const assert = require("assert");

var page;
var browser;

beforeSuite(async function () {
  browser = await puppeteer.launch();
  page = await browser.newPage();
});

afterSuite(async function () {
  browser.close();
});

step("Go to Gauge homepage at <query>", async function (query) {
  await page.goto(query);
});

step("Go to Get Started page", async function () {
  await page.click(".link-get-started");
});

step("Show subtitle <title>", async function(title){
  await page.waitFor('.sub-title');
  const message = await page.$eval('.sub-title', e => e.innerText);
  assert.equal(message, title);
});