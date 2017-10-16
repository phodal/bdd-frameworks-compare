*** Settings ***
Documentation     A test suite with a single test for valid login.
...
...               This test has a workflow that is created using keywords in
...               the imported resource file.
Resource          resource.robot

*** Test Cases ***
登录成功
    打开浏览器到登录页
    输入用户名    demo
    输入密码    mode
    提交登录信息
    应该跳转到欢迎页
    [Teardown]    Close Browser
