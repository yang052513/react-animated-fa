"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
exports.Icon = function (_a) {
    var iconUrl = _a.iconUrl, link = _a.link, size = _a.size, color = _a.color, hoveredColor = _a.hoveredColor, layerColor = _a.layerColor, margin = _a.margin, padding = _a.padding, rounded = _a.rounded, bgColor = _a.bgColor;
    //前置图层移动动画
    var scaleAnimation = styled_components_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    0% {\n        left: -110%;\n        top: 90%;\n    }\n    /* 10 -30 */\n    50% {\n        left: 10%;\n        top: -30%;\n    }\n\n    100% {\n        top: -10%;\n        left: -10%;\n    }\n  "], ["\n    0% {\n        left: -110%;\n        top: 90%;\n    }\n    /* 10 -30 */\n    50% {\n        left: 10%;\n        top: -30%;\n    }\n\n    100% {\n        top: -10%;\n        left: -10%;\n    }\n  "
        //图标 font-awesome classname链接
    ])));
    //图标 font-awesome classname链接
    var Icon = styled_components_1.default.i(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    line-height: ", ";\n    font-size: ", ";\n    transition: 0.2s linear;\n  "], ["\n    line-height: ", ";\n    font-size: ", ";\n    transition: 0.2s linear;\n  "
        //图标容器
    ])), size ? size * 1.6 + "px" : '50px', size ? size + "px" : '24px');
    //图标容器
    var IconWrap = styled_components_1.default.a(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    text-align: center;\n    display: inline-block;\n    overflow: hidden;\n    position: relative;\n    width: ", ";\n    height: ", ";\n    margin: ", ";\n    padding: ", ";\n    border-radius: ", ";\n    color: ", ";\n    background: ", ";\n\n    /* \u56FE\u6807\u653E\u5927\u52A8\u753B */\n    &:hover ", " {\n      transform: scale(1.4);\n      color: ", ";\n    }\n\n    /* \u56FE\u6807\u524D\u7F6E\u56FE\u5C42\u79FB\u52A8\u52A8\u753B */\n    &::before {\n      content: '';\n      position: absolute;\n      width: 120%;\n      height: 120%;\n      background: ", ";\n      transform: rotate(45deg);\n      left: -110%;\n      top: 90%;\n    }\n    &:hover::before {\n      animation: ", " 0.8s 1;\n      top: -10%;\n      left: -10%;\n    }\n  "], ["\n    text-align: center;\n    display: inline-block;\n    overflow: hidden;\n    position: relative;\n    width: ", ";\n    height: ", ";\n    margin: ", ";\n    padding: ", ";\n    border-radius: ", ";\n    color: ", ";\n    background: ", ";\n\n    /* \u56FE\u6807\u653E\u5927\u52A8\u753B */\n    &:hover ", " {\n      transform: scale(1.4);\n      color: ", ";\n    }\n\n    /* \u56FE\u6807\u524D\u7F6E\u56FE\u5C42\u79FB\u52A8\u52A8\u753B */\n    &::before {\n      content: '';\n      position: absolute;\n      width: 120%;\n      height: 120%;\n      background: ", ";\n      transform: rotate(45deg);\n      left: -110%;\n      top: 90%;\n    }\n    &:hover::before {\n      animation: ", " 0.8s 1;\n      top: -10%;\n      left: -10%;\n    }\n  "])), size ? size * 1.6 + "px" : '50px', size ? size * 1.6 + "px" : '50px', margin ? margin + "px" : '10px', padding ? padding + "px" : '0px', rounded ? '50%' : '30%', color ? color : 'rgb(0, 0, 0)', bgColor ? bgColor : null, Icon, hoveredColor ? hoveredColor : 'rgb(255, 255, 255)', layerColor ? layerColor : 'rgb(140, 0, 255)', scaleAnimation);
    return (react_1.default.createElement(IconWrap, { as: "a", className: "btn", href: link },
        react_1.default.createElement(Icon, { className: iconUrl })));
};
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=index.js.map