# BMI test

- 免登录在线BMI测试
- 记录身高，体重，BMI，设定目标，以图表的格式展示
- 减肥周期计算，计算减肥天数
- 计算基础代谢值(BMR)
- 以上内容均有API

<br>

## 效果浏览

![](https://kantiancheng.github.io/BMItest/assets/README-img/效果浏览-主页.png)

<br>

## 减肥周期计算


#### 「效果浏览」


![](https://kantiancheng.github.io/BMItest/assets/README-img/效果浏览-代谢.gif)

#### 链接

https://kantiancheng.github.io/BMItest/Weight-loss-cycle-calculation/index.html

<br>

<br>

# API
<br>

## BMI计算

### 第一步: 引入javascript文件

在你的```<html>```文件的```<head>```处插入一句代码:<br>
```html
<script type="text/javascript" src="https://kantiancheng.github.io/BMItest/api/bmi.js"></script>
```
<br>

### 第二步: 调用函数
```js
bmi(/*身高(cm)*/, /*体重(kg)*/, /*性别(true为男性，false为女性)*/);
```
