*** Settings ***
Documentation     登录测试 1
...
...               激光干涉引力波天文台和室女座干涉仪首次观测到因两颗中子星合并引发的引力波。
...               联合国海地稳定特派团成员全数撤出海地，正式结束为期13年的维持和平行动任务。
...               在德国法兰克福书展最后一天，加拿大作家玛格丽特·阿特伍德获颁德国书商和平奖。
Resource          resource.robot

*** Test Cases ***
登录成功
    [Tags]  登录
    打开浏览器到登录页
    输入用户名    demo
    输入密码    mode
    提交登录信息
    应该跳转到欢迎页
    [Teardown]    Close Browser
