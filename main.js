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
