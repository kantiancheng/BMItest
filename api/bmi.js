var bmi_result = [null, null];

function bmi(height, weight, gender) {
    //gender=true=男性
    //gender=false=女性
    height = Number(height);
    weight = Number(weight);
    var error_cos;
    if (gender == true) {
        height = height / 100;
        var heightsquare = height * height;
        var BMI_resultel = weight / heightsquare;
        bmi_result[0] = BMI_resultel;
        if (BMI_resultel > 18.5 && BMI_resultel < 23.9) {
            bmi_result[1] = true;
            console.log("BMI计算成功" + "BMI值为:" + BMI_resultel + "     " + "BMI是否在正常范围内:" + bmi_result[1]);
        } else {
            bmi_result[1] = false;
        }
    } else if (gender == false) {
        height = height / 100;
        var heightsquare = height * height;
        var BMI_resultel = weight / heightsquare;
        bmi_result[0] = BMI_resultel;
        if (BMI_resultel > 18.5 && BMI_resultel < 24.9) {
            bmi_result[1] = true;
            console.log("BMI计算成功" + "BMI值为:" + BMI_resultel + "     " + "BMI是否在正常范围内:" + bmi_result[1]);
        } else {
            bmi_result[1] = false;
        }
    } else {
        if (gender == null) {
            error_cos = "未输入性别";
        }
        console.error("BMI接口计算错误，原因:" + error_cos);
    }
}