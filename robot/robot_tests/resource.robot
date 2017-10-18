*** Settings ***
Documentation     A resource file with reusable keywords and variables.
...
...               The system specific keywords created here form our own
...               domain specific language. They utilize keywords provided
...               by the imported Selenium2Library.
Library           Selenium2Library

*** Variables ***
${SERVER}         localhost:7272
${BROWSER}        Chrome
${DELAY}          0
${VALID USER}     demo
${VALID PASSWORD}    mode
${LOGIN URL}      http://${SERVER}/
${WELCOME URL}    http://${SERVER}/welcome.html
${ERROR URL}      http://${SERVER}/error.html

*** Keywords ***
打开浏览器到登录页
    Open Browser    ${LOGIN URL}    ${BROWSER}
    Maximize Browser Window
    Set Selenium Speed    ${DELAY}
    Login Page Should Be Open

Login Page Should Be Open
    Title Should Be    Login Page

转到登录页
    Go To    ${LOGIN URL}
    Login Page Should Be Open

输入用户名
    [Arguments]    ${username}
    Input Text    username_field    ${username}

输入密码
    [Arguments]    ${password}
    Input Text    password_field    ${password}

提交登录信息
    Click Button    login_button

应该跳转到欢迎页
    Location Should Be    ${WELCOME URL}
    Title Should Be    Welcome Page
