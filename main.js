//变量定义
var new_page;
var time_w;
var target_chart = Number(localStorage.getItem("tar"));
if (Number(localStorage.getItem("age") < 18)) { w_h_t = "目标身高(cm)"; } else { w_h_t = "目标体重(kg)"; }
var target_name;
var calculate = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];
var calculate30 = [];

//检测是否是新用户
function beb() {
    if (localStorage.getItem("age") == null || localStorage.getItem("age") == "") {
        if (new_page != "设定基础") {
            window.location = "./login_age.html";
        }
    }
    if (localStorage.getItem("tar") != null && localStorage.getItem("tar") != "") {
        if (new_page == "设定基础" || new_page == "设定目标") {
            window.location = "./index.html";
        }
    }
}

//登陆部分
function login(time) {
    if (time == '1') {
        localStorage.setItem("age", document.getElementById("age").value);
        localStorage.setItem("name", document.getElementById("name").value);
        window.location = "./login_detail.html";
    }
    if (time == '2') {
        if (Number(localStorage.getItem("age") < 18)) {
            document.getElementById('targ').innerHTML = "目标身高(cm)";
        }
        if (Number(localStorage.getItem("age") >= 18)) {
            document.getElementById('targ').innerHTML = "目标体重(kg)";
        }
    }
    if (time == '3') {
        localStorage.setItem("tar", document.getElementById("tar").value);
        if (Number(localStorage.getItem("age") < 18)) {
            localStorage.setItem("target_typ", "未成年");
        } else {
            localStorage.setItem("target_typ", "成年");
        }
        window.location = "./index.html";
        localStorage.setItem("calculate", JSON.stringify(calculate));
    }
}

//初始化
onload = function loadon() {
    document.getElementById("inform").hidden = true;
    if (new_page == "设定目标") login('2');
    beb();
    var d = new Date();
    d = d.getUTCDay();
    lst_d = localStorage.getItem("lst_d");
    if (d == lst_d) {
        resulte();
    }
    hengshuping();
}

//提示
function inform(text, time) {
    if (document.getElementById("inform_in").innerHTML == "" || document.getElementById("inform_in").innerHTML == null) {
        time_w = time;
        in_te = text;
        document.getElementById("inform").hidden = false;
        document.getElementById("inform_in").innerHTML = text;
        setTimeout(function() {
            document.getElementById("inform_in").innerHTML = "";
            document.getElementById("inform").hidden = true;
        }, time);
    } else {
        if (in_te != text) {
            setTimeout(function() {
                inform(text, time);
            }, time_w);
        }
        time_w = time;
        in_te = text;
    }
}

function get30() {
    calculate = JSON.parse(localStorage.getItem("calculate"));
    if (calculate != "") {
        for (var i = (calculate.length - 1); i > (calculate.length - 31); i--) {
            var get30 = [calculate[i][0], calculate[i][1], calculate[i][2]];
            calculate30.push(get30);
        }
    }
}

function get_up() {
    for (j = 0; j < 30; j++) {
        hie.push(Number(calculate30[j][0]));
        wei.push(Number(calculate30[j][1]));
        BMIbody.push(Number(calculate30[j][2]));
    }
}

function start_test() {
    var d = new Date();
    d = d.getUTCDay();
    lst_d = localStorage.getItem("lst_d");
    if (d == lst_d) {
        inform('今日已经测试过了', 5000);
    } else if (document.getElementById("haic").value == "" || document.getElementById("weik").value == "" || document.getElementById("haic").value == null || document.getElementById("weik").value == null) {
        inform('身高或体重不能为空', 3000);
    } else {
        var haic = document.getElementById("haic").value;
        var weik = document.getElementById("weik").value;
        var haicc = haic / 100;
        heightsquare = haicc * haicc;
        var resultBMI = weik / heightsquare;
        //身高，体重，BMI
        var pushi = [haic, weik, resultBMI];
        localStorage.setItem("re_BMI", resultBMI);
        localStorage.setItem("re_HI", haic);
        localStorage.setItem("re_WI", weik);
        calculate.push(pushi);
        localStorage.setItem("lst_d", d);
        localStorage.setItem("calculate", JSON.stringify(calculate));
        if (Number(localStorage.getItem("age")) < 18) {
            localStorage.setItem("last", haic);
        } else { localStorage.setItem("last", weik); }
        if (localStorage.getItem("test_fiest_times") == null) {
            if (Number(localStorage.getItem("age")) < 18) {
                localStorage.setItem("test_fiest_times", haic);
            } else { localStorage.setItem("test_fiest_times", weik); }
        }
        location.reload();
    }
}

function resulte() {
    document.getElementById("test_start").hidden = true;
    document.getElementById("test_re").hidden = false;
    var targertnum = Number(localStorage.getItem("tar"));
    if (localStorage.getItem("target_typ") == "未成年") {
        targertnum = targertnum - Number(localStorage.getItem("re_HI"));
        document.getElementById("text_tar_re").innerHTML = "距离目标身高:";
        document.getElementById("text_tar_re_c").innerHTML = "cm";
    } else {
        targertnum = targertnum - Number(localStorage.getItem("re_WI"));
        document.getElementById("text_tar_re").innerHTML = "距离目标体重:";
        document.getElementById("text_tar_re_c").innerHTML = "kg";
    }
    if (targertnum < 0) {
        targertnum = targertnum * -1;
    }
    document.getElementById("result_bmi").innerHTML = localStorage.getItem("re_BMI");
    document.getElementById("result_wei").innerHTML = localStorage.getItem("re_WI");
    document.getElementById("result_hi").innerHTML = localStorage.getItem("re_HI");
    document.getElementById("result_rucul").innerHTML = targertnum;
}

var have;
var not_have;
//目标达成进度
targetpersent();

function targetpersent() {
    var fiest_time = Number(localStorage.getItem("test_fiest_times"));
    var targertnum = Number(localStorage.getItem("tar"));
    var lastt = Number(localStorage.getItem("last"));
    if (fiest_time == 0) {
        target_name = "目标进度";
    } else {
        if (fiest_time > targertnum) {
            if (localStorage.getItem("target_typ") == "未成年") {
                //更改目标，待定
            }
            target_name = "减肥目标进度";
        }
        if (fiest_time < targertnum) {
            if (localStorage.getItem("target_typ") == "未成年") {
                target_name = "增高目标进度";
            } else {
                target_name = "增肥目标进度";
            }
        }
    }
    if (fiest_time > targertnum) {
        var cocklast = lastt - targertnum;
        lastt = targertnum - cocklast;
    }
    have = lastt / targertnum * 100;
    not_have = 100 - have;
}


//减肥周期计算
/*
 * BMR计算
 * BMR (男性) = (13.7x体重干克>) + (5.0x身高厘米>) - (6.8x年龄) + 66
 * BMR (女性)= (9.6x体重干克>)+ (1.8x身高厘米>) -(4.7x年龄)+655
 * BMR = 每日千卡消耗量自然（无肌肉运动）
 * 
 * 计算加上肌肉运动的消耗(千卡)
 * 
 * 计算 每天摄入热量 -（每日千卡消耗量自然（无肌肉运动） + 肌肉运动的消耗）= 缺口
 * 缺口 = 每日消耗（千卡）
 * 减掉1公斤脂肪大约需要消耗7700千卡-9500千卡热量，按7700千卡计算。
 * 7700千卡 × 减肥目标公斤 = 总共千卡
 * 减肥目标需要的周期天数 = 总共千卡 ÷ 千卡/天 = 减肥天数
 */


//BMR
var BMR_re;

function get_BMR() {
    document.getElementById("t_s").hidden = true;
    document.getElementById("t_d").hidden = false;
    //性别
    myselect = document.getElementById("BMR_sex");
    var index = myselect.selectedIndex;
    var gender = myselect[index].value;
    //年龄
    var age_BMR = Number(document.getElementById("BMR_age").value);
    //体重（千克）
    var weight = Number(document.getElementById("BMR_wi").value);
    //身高厘米
    var stature = Number(document.getElementById("BMR_hi").value);

    if (gender == "M") {
        var BMR_re = (weight * 13.7) + (5 * stature) - (6.8 * age_BMR) + 66;
    }
    if (gender == "F") {
        var BMR_re = (weight * 9.6) + (1.8 * stature) - (4.7 * age_BMR) + 655;
    }
    //无运动
    //BMR_re

    //肌肉消耗(千卡)
    var BMR_mus;
    //摄入热量(千卡)
    var BMR_hu = document.getElementById("BMR_hu").value;
    //运动时间
    var BMR_time = document.getElementById("BMR_tim").value;

    myselectit = document.getElementById("BMR_sl");
    var indexit = myselectit.selectedIndex;
    var genderit = myselectit[indexit].value;
    //18
    if (genderit == 'cycling') { BMR_mus = 90; }
    if (genderit == 'walk') { BMR_mus = 93; }
    if (genderit == 'golf') { BMR_mus = 111; }
    if (genderit == 'bowling') { BMR_mus = 120; }
    if (genderit == 'go') { BMR_mus = 132; }
    if (genderit == 'Boating') { BMR_mus = 132; }
    if (genderit == 'dancing') { BMR_mus = 150; }
    if (genderit == 'Badminton') { BMR_mus = 153; }
    if (genderit == 'Volleyball') { BMR_mus = 153; }
    if (genderit == 'Table_tennis') { BMR_mus = 159; }
    if (genderit == 'hockey') { BMR_mus = 186; }
    if (genderit == 'skating') { BMR_mus = 240; }
    if (genderit == 'Jump') { BMR_mus = 270; }
    if (genderit == 'Jogging') { BMR_mus = 282; }
    if (genderit == 'Boxing') { BMR_mus = 342; }
    if (genderit == 'Frog_swimming') { BMR_mus = 354; }
    if (genderit == 'swimming') { BMR_mus = 525; }
    if (genderit == 'No_movement') { BMR_mus = 0; }
    BMR_mus = (BMR_mus / 30) * BMR_time;

    var BMR_tark = document.getElementById("BMR_tark").value

    var window_BMR = BMR_hu - (BMR_mus + BMR_re);
    var window_BMR$;
    if (window_BMR < 0) {
        window_BMR$ = "净消耗";
        window_BMR = window_BMR * -1;
    } else {
        window_BMR$ = "增加";
    }
    //窗口
    document.getElementById("result_dayk").innerHTML = window_BMR$ + window_BMR + '千卡';
    var BMR_tarkk = BMR_tark * 7700;
    //减肥目标需要的周期天数 = 总共千卡 ÷ 千卡/天
    var BMR_day = BMR_tarkk / window_BMR;
    //日期
    var BMR_day$;
    if (BMR_day < 0) {
        BMR_day$ = "∞";
        BMR_day = '';
        document.getElementById("result_com").innerHTML = "你的每日摄入热量大于你消耗的，所以导致无法减重反而增重。你可以增加运动量或减少热量的摄入。";
    } else {
        BMR_day$ = "";
        document.getElementById("result_com").innerHTML = "你的热量消耗大于你摄入的，你正在减重，如果那想增加速度你可以增加运动量或减少热量的摄入。";
        BMR_day = Number(BMR_day).toFixed();
    }
    document.getElementById("result_day").innerHTML = BMR_day + BMR_day$;
}

/*var myselect = document.getElementById("BMR_sl");
var index = myselect.selectedIndex;
myselect[index].value;*/
