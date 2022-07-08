function hengshuping() {
    if (new_page == "HOME") {
        if (window.orientation == 180 || window.orientation == 0) {
            document.getElementById("landscape").hidden = false;
        }
        if (window.orientation == 90 || window.orientation == -90) {
            document.getElementById("landscape").hidden = true;
        }
    }

    if (new_page == "代谢测试") {
        if (window.orientation == 180 || window.orientation == 0) {
            document.getElementById("landscape").hidden = true;
        }
        if (window.orientation == 90 || window.orientation == -90) {
            document.getElementById("landscape").hidden = false;
        }
    }
}
window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", hengshuping, false);