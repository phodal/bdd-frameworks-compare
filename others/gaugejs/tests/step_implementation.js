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

step("Go to Gauge homepage at <query>", async function (query) {
  await client.url(query);
});

step("Go to Get Started page", async function () {
  await client.click("a.btn-primary");
});

step("Show subtitle <title>", async function (title) {
  const message = await client.getText('.sub-title');
  assert.equal(message, title);
});
