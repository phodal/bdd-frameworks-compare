'use strict';

var webdriverio = require('webdriverio');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var assert = require('assert');

var options = {
  desiredCapabilities: {
    browserName: 'firefox'
  }
};


chai.use(chaiAsPromised);
chai.Should();

step("Check the title of the Google home page is <title>", function(titleGiven, done) {
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
