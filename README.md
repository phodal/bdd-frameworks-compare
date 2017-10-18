BDD 框架对比: Cucumber.js vs Robot Framework vs Gauge.js
===

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
