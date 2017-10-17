'use strict'

var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'firefox'
    }
};
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
expect = chai.expect;
chai.Should();

var assert = require("assert");

step("Check the title of the Google home page is <title>", function (titleGiven, done) {
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
