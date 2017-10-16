*** Settings ***
Documentation     A test suite with a single Gherkin style test.
...
...               This test is functionally identical to the example in
...               valid_login.robot file.
Resource          resource.robot
Test Teardown     Close Browser

*** Test Cases ***
Valid Login
    Given 浏览器打开登录页
    When 用户 "demo" 使用 "mode" 登录
    Then 应该跳转到欢迎页

*** Keywords ***
浏览器打开登录页
    打开浏览器到登录页

用户 "${username}" 使用 "${password}" 登录
    输入用户名    ${username}
    输入密码    ${password}
    提交登录信息
