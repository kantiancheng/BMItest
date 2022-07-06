function hengshuping() {
    if (window.orientation == 180 || window.orientation == 0) {
        document.getElementById("landscape").hidden = false;
    }
    if (window.orientation == 90 || window.orientation == -90) {
        document.getElementById("landscape").hidden = true;
    }
}
window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", hengshuping, false);