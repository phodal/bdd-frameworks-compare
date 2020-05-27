/* globals gauge*/
"use strict";
const {openBrowser, write, closeBrowser, goto, screenshot, click, waitFor, into, $, evaluate, document} = require('taiko');
const assert = require("assert");
const headless = process.env.headless_chrome.toLowerCase() === 'true';

beforeSuite(async () => {
    await openBrowser({headless: headless})
});

afterSuite(async () => {
    await closeBrowser();
});

gauge.screenshotFn = async function () {
    return await screenshot({encoding: 'base64'});
};

step("当我在网站的首页", async function () {
    await goto('http://0.0.0.0:7272/');
});

step("输入用户名 <query>", async function (query) {
    await write(query, into($('#username_field')));
});

step("输入密码 <query>", async function (query) {
    await write(query, into($('#password_field')));
});

step("提交登录信息", async function () {
    await click($('#login_button'))
});

step("用户应该跳转到欢迎页", async function () {
    assert.strictEqual(await evaluate(() => {
        return document.title;
    } ), 'Welcome Page');
});

step("页面应该返回 <query>", async function (query) {
    assert.strictEqual(await evaluate(() => {
        return document.title;
    } ), query);
});
