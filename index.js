(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    function init(screenWidthByDesign, screenRatioByDesign) {
        if (screenWidthByDesign === void 0) { screenWidthByDesign = 1920; }
        if (screenRatioByDesign === void 0) { screenRatioByDesign = 16 / 9; }
        var docEle = document.documentElement;
        function setHtmlFontSize() {
            var screenRatio = docEle.clientWidth / docEle.clientHeight;
            var fontSize = (screenRatio > screenRatioByDesign
                ? (screenRatioByDesign / screenRatio)
                : 1) * docEle.clientWidth / 10;
            docEle.style.fontSize = fontSize.toFixed(3) + "px";
        }
        setHtmlFontSize();
        window.addEventListener('resize', setHtmlFontSize);
    }
    exports["default"] = init;
});
