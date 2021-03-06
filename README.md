
# BMI test

- 免登录在线BMI测试
- 记录身高，体重，BMI，设定目标，以图表的格式展示
- 减肥周期计算，计算减肥天数
- 计算基础代谢值(BMR)
- 以上内容均有API

<br>

## 效果浏览

![](https://kantiancheng.github.io/BMItest/assets/README-img/效果浏览-主页.png)

### 项目链接

https://kantiancheng.github.io/BMItest/

<br>

## 减肥周期计算


#### 「效果浏览」


![](https://kantiancheng.github.io/BMItest/assets/README-img/效果浏览-代谢.gif)

### 项目链接

https://kantiancheng.github.io/BMItest/Weight-loss-cycle-calculation/

<br>

<br>

# API部分
<br>

## BMI计算

### 第一步: 引入javascript文件

在你的```<html>```文件的```<head>```处插入一句代码:<br>
```html
<script type="text/javascript" src="https://kantiancheng.github.io/BMItest/api/bmi.js"></script>
```

### 第二步: 调用函数
```js
bmi(/*身高(cm)*/, /*体重(kg)*/, /*性别(true为男性，false为女性)*/);
```

### 第三步: 计算结果

计算结果会以数组的形式返回

```js
//BMI值
bmi_result[0];

//BMI是否在正常(健康)范围内
bmi_result[1];
//true代表正常
//false代表

```

### 完整实例

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <!--引入API-->
    <script type="text/javascript" src="https://kantiancheng.github.io/BMItest/api/bmi.js"></script>
</head>

<body>
    <button onclick="run_bmi();">获取BMI</button>
    <script>
        function run_bmi() {
            //身高，体重，性别（男=true,女=false）
            bmi(180, 60, true);
            alert("你的BMI为:" + bmi_result[0] + "," + "你的BMI是否在正常范围内:" + bmi_result[1]);
        }
    </script>
</body>

</html>

```

<br>

## BMR计算

### 第一步: 引入javascript文件

在你的```<html>```文件的```<head>```处插入一句代码:<br>
```html
<script type="text/javascript" src="https://kantiancheng.github.io/BMItest/api/bmr.js"></script>
```

### 第二步: 调用函数
```js
bmr(/*身高(cm)*/, /*体重(kg)*/, /*性别(true为男性，false为女性)*/,/*年龄*/);
```

### 第三步: 计算结果

计算结果会以变量的形式返回

```js
//BMR值
bmi_result;
```

### 完整实例

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <!--引入API-->
    <script type="text/javascript" src="https://kantiancheng.github.io/BMItest/api/bmr.js"></script>
</head>

<body>
    <button onclick="run_bmr();">获取BMR</button>
    <script>
        function run_bmr() {
            //身高，体重，性别（男=true,女=false），年龄
            bmr(180, 60, true, 25);
            alert("你的BMR(基础代谢指数)为:" + bmr_result);
        }
    </script>
</body>

</html>

```

<br>

## 减肥周期计算

### 待完成……

<br>

# 鸣谢 Thanks
<a href="[https://www.highcharts.com/"><img height="80" src="https://wp-assets.highcharts.com/svg/highcharts-logo.svg" alt="BrowserStack Logo"></a>
> 感谢 **HighCharts** 提供的 ***图表展示*** 服务。  
