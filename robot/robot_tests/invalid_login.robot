*** Settings ***
Documentation     登录测试 2
...
...               激光干涉引力波天文台和室女座干涉仪首次观测到因两颗中子星合并引发的引力波。
...               联合国海地稳定特派团成员全数撤出海地，正式结束为期13年的维持和平行动任务。
...               在德国法兰克福书展最后一天，加拿大作家玛格丽特·阿特伍德获颁德国书商和平奖。
Suite Setup       打开浏览器到登录页
Suite Teardown    Close Browser
Test Setup        转到登录页
Test Template     使用错误的失败凭据应该登录失败
Resource          resource.robot

*** Test Cases ***               USER NAME        PASSWORD
无效的用户名                      invalid          ${VALID PASSWORD}
无效的密码                        ${VALID USER}    invalid
无效的用户名和密码                 invalid          whatever

*** Keywords ***
使用错误的失败凭据应该登录失败
    [Arguments]    ${username}    ${password}
    输入用户名    ${username}
    输入密码    ${password}
    提交登录信息
    登录应该不成功

登录应该不成功
    Location Should Be    ${ERROR URL}
    Title Should Be    Error Page
