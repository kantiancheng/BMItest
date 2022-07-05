//变量定义
var new_page;
var time_w;
if (Number(localStorage.getItem("age") < 18)) { w_h_t = "目标身高(cm)"; } else { w_h_t = "目标体重(kg)"; }
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
        window.location = "./index.html";
        localStorage.setItem("calculate", JSON.stringify(calculate));
    }
}

//初始化
onload = function loadon() {
    document.getElementById("inform").hidden = true;
    if (new_page == "设定目标") login('2');
    beb();
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
    } else {
        var haic = document.getElementById("haic").value;
        var weik = document.getElementById("weik").value;
        var haicc = haic / 100;
        heightsquare = haicc * haicc;
        var resultBMI = weik / heightsquare;
        //身高，体重，BMI
        var pushi = [haic, weik, resultBMI];
        calculate.push(pushi);
        localStorage.setItem("lst_d", d);
        localStorage.setItem("calculate", JSON.stringify(calculate));
        if (Number(localStorage.getItem("age")) < 18) {
            localStorage.setItem("last", haic);
        } else { localStorage.setItem("last", weik); }
        location.reload();
    }
}

//目标达成进度
function targetpersent() {
    var targertnum = Number(localStorage.getItem("tar"));
    var lastt = Number(localStorage.getItem("last"));
    var have = lastt / targertnum * 100;
}