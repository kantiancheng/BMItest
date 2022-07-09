var bmr_result;

function bmr(height, weight, gender, age) {
    //gender=true=男性
    //gender=false=女性
    height = Number(height);
    weight = Number(weight);
    age = Number(age);
    var error_cos = '';
    if (gender == null) {
        error_cos = "未输入性别";
    }
    if (height == 0) {
        error_cos = error_cos + "," + "未输入身高";
    }
    if (weight == 0) {
        error_cos = error_cos + "," + "未输入体重";
    }
    if (age == 0) {
        error_cos = error_cos + "," + "未输入年龄";
    }
    if (gender == null || height == 0 || weight == 0 || age == 0) console.error("bmr接口计算错误，原因:" + error_cos);
    if (gender != null && height != 0 && weight != 0 && age != 0) start_test();

    function start_test() {
        if (gender == true) {
            var bmr_resultel;
            bmr_result = (10 * weight) + (6.25 * height) - (5 * age) + 5;
            console.log("bmr计算成功" + "bmr值为:" + bmr_resultel);
        } else if (gender == false) {
            var bmr_resultel;
            bmr_result = (10 * weight) + (6.25 * height) - (5 * age) + 161;
            console.log("bmr计算成功" + "bmr值为:" + bmr_resultel);
        } else {
            console.error("bmr接口遇到未知错误");
        }
    }
}