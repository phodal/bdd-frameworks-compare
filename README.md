BDD 框架对比: Cucumber.js vs Robot Framework vs Gauge.js
===

BDD Process
---

![BDD Process](./docs/bdd.png)

Requirements: Java 8, Node.js 8

 x          |  Cucumber                          |Gauge                |   Robot   
------------|------------------------------------|----------------------|-----------
编程语言支持 | Java,Ruby,JavaScript 等 13 种语言    | Java, JavaScript, Ruby 等 6 种语言 | Python, Java, C  
支持的系统   | 所有主流系统    | 所有主流系统  | 所有主流系统  
多语言支持   |  UTF-8        | UTF-8          | 用户关键字及用例层面支持UTF-8
中文社区支持 | 完善           |     待完善      |   完善   
Report     | JS 不支持 HTML  |   粗粒度          | 细粒度 
失败时截图   | 不支持         |   支持          | 支持

Cucumber.js
--

> Cucumber 是一个能够理解用普通语言 描述的测试用例的支持行为驱动开发（BDD）的自动化测试工具，用Ruby编写，支持Java和.Net等多种开发语言。
  


```
yarn install
```

```
npm test
```


Robot
---

```
pip install -r requirements.txt
```

```
robot robot_tests
```

Gauge
---

> Gauge 是 Go 开发的一个跨平台测试自动化工具。它给作者提供了用商业语言测试用例的能力。

关键特性：

 - 基于 markdown 的丰富的标记
 - 支持用任何程序语言来编写测试代码。在 Test Code 查看当前支持的语言
 - 支持 plugin 的模块化架构
 - 跨语言实现一致性。
 - 简单，灵活和丰富的语法
 - 开源的，因此它可以自由共享，同时被他人改进
 - 商业语言测试 : 支持可执行文件的概念
 - 帮助您创建可维护和可理解的测试套件
 - 支持外部数据来源
 - IDE Support

```
brew install gauge
```

```
$ gauge init -t

ruby_selenium
ruby
python
js_webdriver
js_puppeteer
js
java_maven_selenium
java_maven
java
go_agouti
csharp

Run `gauge init <template_name>` to create a new Gauge project.
```

### gauge js_webdriver

```
yarn install
```

```
selenium-standalone install
```

Terminal 1:

```
selenium-standalone start
```

Terminal 2:

```
npm test
```

### 

```
yarn install
```

```
npm test
```
