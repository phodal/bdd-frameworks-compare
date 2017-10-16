*** Settings ***
Documentation     A test suite with a single Gherkin style test.
...
...               This test is functionally identical to the example in
...               valid_login.robot file.
Resource          resource.robot
Test Teardown     Close Browser

*** Test Cases ***
Valid Login
    Given browser is opened to login page
    When user "demo" logs in with password "mode"
    Then 应该跳转到欢迎页

*** Keywords ***
Browser is opened to login page
    打开浏览器到登录页

User "${username}" logs in with password "${password}"
    输入用户名    ${username}
    输入密码    ${password}
    提交登录信息
