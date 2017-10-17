'use strict';

var webdriverio = require('webdriverio');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var assert = require('assert');

chai.use(chaiAsPromised);
chai.Should();

var options = {
  desiredCapabilities: {
    browserName: 'firefox'
  }
};

beforeStep(function() {

});

step("检测页面的标题是 <title>", function(titleGiven, done) {
  webdriverio
    .remote(options)
    .init()
    .url('http://google.com')
    .getTitle().then(function(title) {
    assert.equal(title, titleGiven);
  })
    .end()
    .call(done);
});

beforeScenario(function() {

});

beforeScenario(function() {

});

gauge.screenshotFn = function() {
  return "base64encodedstring";
};
