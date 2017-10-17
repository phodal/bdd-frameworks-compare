'use strict';

var webdriverio = require('webdriverio');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var assert = require('assert');

chai.use(chaiAsPromised);
chai.Should();

var options = {
  desiredCapabilities: {
    browserName: 'chrome'
  }
};

var client;

beforeScenario(function() {
  client = webdriverio.remote(options);
  return client.init();
});

step("检测页面的标题是 <title>", function(titleGiven, done) {
  client
    .url('https://www.google.com')
    .getTitle().then(function(title) {
      console.log(title);
      assert.equal(title, titleGiven);
      done();
    })
});

afterScenario(function() {
  client.end();
});

gauge.screenshotFn = function() {
  return "base64encodedstring";
};
