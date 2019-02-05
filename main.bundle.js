webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/animated-bot/animated-bot.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animated-bot\"\n     [class.__loading]=\"state.loading\"\n     [class.__become-normal]=\"state.normal\"\n     [class.__become-angry]=\"state.angry\"\n     [class.__open-eye]=\"state.open\"\n     [class.__close-eye]=\"state.close\"\n     [class.__moving-pupil]=\"state.pupil\"\n     [class.__moving-antenns]=\"state.antenns\">\n  <div class=\"bot-head\">\n    <div class=\"bot-eye\"></div>\n    <div class=\"bot-mouth\"></div>\n    <div class=\"bot-left-ear\">\n      <div class=\"antenna-left\"></div>\n    </div>\n    <div class=\"bot-right-ear\">\n      <div class=\"antenna-right\"></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/animated-bot/animated-bot.component.less":
/***/ (function(module, exports) {

module.exports = ".animated-bot {\n  width: 180px;\n  height: 180px;\n  padding: 10.8px;\n  position: relative;\n  z-index: 0;\n  background: white;\n  border-radius: 144px;\n}\n.animated-bot .bot-head {\n  position: absolute;\n  left: 22%;\n  bottom: 20%;\n  background: none;\n  height: 97.2px;\n  width: 93.6px;\n  border-top-left-radius: 61.2px;\n  border-top-right-radius: 61.2px;\n  border-bottom-left-radius: 18px;\n  border-bottom-right-radius: 18px;\n  border: 10.8px solid #0F1012;\n}\n.animated-bot .bot-head .bot-eye {\n  position: absolute;\n  background: white;\n  border-radius: 72px;\n  border: 10.8px solid #0F1012;\n  height: 36px;\n  width: 36px;\n  left: 20%;\n  bottom: 16%;\n}\n.animated-bot .bot-head .bot-eye::after {\n  -webkit-transform-origin: right bottom;\n          transform-origin: right bottom;\n  content: '';\n  position: absolute;\n  background: #0F1012;\n  height: 18px;\n  width: 18px;\n  border-radius: 72px;\n  left: 24%;\n  bottom: 24%;\n}\n.animated-bot .bot-head .bot-mouth {\n  position: absolute;\n  background: #0F1012;\n  height: 10.8px;\n  width: 10.8px;\n  border-radius: 72px;\n  left: 70%;\n  bottom: 6%;\n}\n.animated-bot .bot-head .bot-right-ear {\n  position: absolute;\n  background: white;\n  width: 7.2px;\n  height: 28.8px;\n  border-top-right-radius: 14.4px;\n  border-bottom-right-radius: 14.4px;\n  border: 10.8px solid #0F1012;\n  left: 100%;\n  bottom: 10%;\n}\n.animated-bot .bot-head .bot-right-ear .antenna-right {\n  -webkit-transform-origin: left bottom;\n          transform-origin: left bottom;\n  position: absolute;\n  width: 10.8px;\n  height: 28.8px;\n  background: #0F1012;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  border-radius: 10.8px;\n  right: -106%;\n  bottom: 122%;\n}\n.animated-bot .bot-head .bot-left-ear {\n  position: absolute;\n  background: white;\n  width: 7.2px;\n  height: 28.8px;\n  border-top-left-radius: 14.4px;\n  border-bottom-left-radius: 14.4px;\n  border: 10.8px solid #0F1012;\n  right: 100%;\n  bottom: 10%;\n}\n.animated-bot .bot-head .bot-left-ear .antenna-left {\n  -webkit-transform-origin: right bottom;\n          transform-origin: right bottom;\n  position: absolute;\n  width: 10.8px;\n  height: 28.8px;\n  background: #0F1012;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  border-radius: 10.8px;\n  left: -106%;\n  bottom: 122%;\n}\n.animated-bot .bot-head::before {\n  content: '';\n  left: 10%;\n  top: -6%;\n  position: absolute;\n  background: #48BEFE;\n  height: 108px;\n  width: 104.4px;\n  border-top-left-radius: 72px;\n  border-top-right-radius: 75.6px;\n  border-bottom-left-radius: 18px;\n  border-bottom-right-radius: 21.6px;\n  z-index: -1;\n}\n.animated-bot .bot-head::after {\n  content: '';\n  position: absolute;\n  background: #48BEFE;\n  height: 97.2px;\n  width: 72px;\n  right: 14%;\n  -webkit-box-shadow: 18px 0 7.2px #2C97F7;\n          box-shadow: 18px 0 7.2px #2C97F7;\n  border-top-left-radius: 72px;\n  border-top-right-radius: 72px;\n  z-index: -1;\n}\n.__close-eye .bot-head .bot-eye {\n  -webkit-animation-name: eye-close;\n          animation-name: eye-close;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  -webkit-animation-iteration-count: 1;\n          animation-iteration-count: 1;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n.__close-eye .bot-head .bot-eye::after {\n  -webkit-animation-name: disapear-pupil;\n          animation-name: disapear-pupil;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  -webkit-animation-iteration-count: 1;\n          animation-iteration-count: 1;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n.__close-eye .bot-head .bot-mouth {\n  -webkit-animation-name: mouth-moving;\n          animation-name: mouth-moving;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  -webkit-animation-iteration-count: 1;\n          animation-iteration-count: 1;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n.__open-eye .bot-head .bot-eye {\n  -webkit-animation-name: eye-close;\n          animation-name: eye-close;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-iteration-count: 1;\n          animation-iteration-count: 1;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n.__open-eye .bot-head .bot-eye::after {\n  -webkit-animation-name: disapear-pupil;\n          animation-name: disapear-pupil;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-iteration-count: 1;\n          animation-iteration-count: 1;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n.__open-eye .bot-head .bot-mouth {\n  -webkit-animation-name: mouth-moving;\n          animation-name: mouth-moving;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-iteration-count: 1;\n          animation-iteration-count: 1;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n.__moving-pupil .bot-head .bot-eye::after {\n  -webkit-animation-name: eye-pupil-move;\n          animation-name: eye-pupil-move;\n  -webkit-animation-duration: 1.5s;\n          animation-duration: 1.5s;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n.__become-angry .bot-head .bot-mouth {\n  -webkit-animation-name: mouth-angry;\n          animation-name: mouth-angry;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  -webkit-animation-iteration-count: 1;\n          animation-iteration-count: 1;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n.__become-angry .bot-head::before {\n  -webkit-animation-name: change-background-color;\n          animation-name: change-background-color;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  -webkit-animation-iteration-count: 1;\n          animation-iteration-count: 1;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n.__become-angry .bot-head::after {\n  -webkit-animation-name: change-shadow-color;\n          animation-name: change-shadow-color;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  -webkit-animation-iteration-count: 1;\n          animation-iteration-count: 1;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n.__become-normal .bot-head .bot-mouth {\n  -webkit-animation-name: mouth-angry;\n          animation-name: mouth-angry;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-iteration-count: 1;\n          animation-iteration-count: 1;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n.__become-normal .bot-head::before {\n  -webkit-animation-name: change-background-color;\n          animation-name: change-background-color;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-iteration-count: 1;\n          animation-iteration-count: 1;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n.__become-normal .bot-head::after {\n  -webkit-animation-name: change-shadow-color;\n          animation-name: change-shadow-color;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  animation-direction: alternate-reverse;\n  -webkit-animation-iteration-count: 1;\n          animation-iteration-count: 1;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n.__moving-antenns .bot-head .bot-left-ear .antenna-left {\n  -webkit-animation-name: left-antenna-move;\n          animation-name: left-antenna-move;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n.__moving-antenns .bot-head .bot-right-ear .antenna-right {\n  -webkit-animation-name: right-antenna-move;\n          animation-name: right-antenna-move;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n@-webkit-keyframes eye-pupil-move {\n  from {\n    left: 24%;\n    bottom: 24%;\n  }\n  to {\n    left: 50%;\n    bottom: 40%;\n  }\n}\n@keyframes eye-pupil-move {\n  from {\n    left: 24%;\n    bottom: 24%;\n  }\n  to {\n    left: 50%;\n    bottom: 40%;\n  }\n}\n@-webkit-keyframes eye-close {\n  from {\n    height: 36px;\n    bottom: 24%;\n  }\n  to {\n    height: 0;\n    bottom: 40%;\n  }\n}\n@keyframes eye-close {\n  from {\n    height: 36px;\n    bottom: 24%;\n  }\n  to {\n    height: 0;\n    bottom: 40%;\n  }\n}\n@-webkit-keyframes disapear-pupil {\n  from {\n    height: 18px;\n  }\n  to {\n    height: 10.8px;\n  }\n}\n@keyframes disapear-pupil {\n  from {\n    height: 18px;\n  }\n  to {\n    height: 10.8px;\n  }\n}\n@-webkit-keyframes mouth-moving {\n  from {\n    height: 10.8px;\n    left: 70%;\n  }\n  to {\n    height: 21.6px;\n    left: 46%;\n  }\n}\n@keyframes mouth-moving {\n  from {\n    height: 10.8px;\n    left: 70%;\n  }\n  to {\n    height: 21.6px;\n    left: 46%;\n  }\n}\n@-webkit-keyframes change-background-color {\n  from {\n    background: #48BEFE;\n  }\n  to {\n    background: #FFDB01;\n  }\n}\n@keyframes change-background-color {\n  from {\n    background: #48BEFE;\n  }\n  to {\n    background: #FFDB01;\n  }\n}\n@-webkit-keyframes change-shadow-color {\n  from {\n    background: #48BEFE;\n    -webkit-box-shadow: 18px 0 7.2px #2C97F7;\n            box-shadow: 18px 0 7.2px #2C97F7;\n  }\n  to {\n    background: #FFDB01;\n    -webkit-box-shadow: 18px 0 7.2px #FF8603;\n            box-shadow: 18px 0 7.2px #FF8603;\n  }\n}\n@keyframes change-shadow-color {\n  from {\n    background: #48BEFE;\n    -webkit-box-shadow: 18px 0 7.2px #2C97F7;\n            box-shadow: 18px 0 7.2px #2C97F7;\n  }\n  to {\n    background: #FFDB01;\n    -webkit-box-shadow: 18px 0 7.2px #FF8603;\n            box-shadow: 18px 0 7.2px #FF8603;\n  }\n}\n@-webkit-keyframes mouth-angry {\n  from {\n    width: 10.8px;\n    left: 70%;\n  }\n  to {\n    width: 43.2px;\n    left: 28%;\n  }\n}\n@keyframes mouth-angry {\n  from {\n    width: 10.8px;\n    left: 70%;\n  }\n  to {\n    width: 43.2px;\n    left: 28%;\n  }\n}\n@-webkit-keyframes left-antenna-move {\n  from {\n    -webkit-transform: rotate(-40deg);\n            transform: rotate(-40deg);\n  }\n  to {\n    -webkit-transform: rotate(-60deg);\n            transform: rotate(-60deg);\n  }\n}\n@keyframes left-antenna-move {\n  from {\n    -webkit-transform: rotate(-40deg);\n            transform: rotate(-40deg);\n  }\n  to {\n    -webkit-transform: rotate(-60deg);\n            transform: rotate(-60deg);\n  }\n}\n@-webkit-keyframes right-antenna-move {\n  from {\n    -webkit-transform: rotate(40deg);\n            transform: rotate(40deg);\n  }\n  to {\n    -webkit-transform: rotate(60deg);\n            transform: rotate(60deg);\n  }\n}\n@keyframes right-antenna-move {\n  from {\n    -webkit-transform: rotate(40deg);\n            transform: rotate(40deg);\n  }\n  to {\n    -webkit-transform: rotate(60deg);\n            transform: rotate(60deg);\n  }\n}\n@-webkit-keyframes rotate-pupil {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n    left: 0%;\n    bottom: 40%;\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n    left: 0%;\n    bottom: 40%;\n  }\n}\n@keyframes rotate-pupil {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n    left: 0%;\n    bottom: 40%;\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n    left: 0%;\n    bottom: 40%;\n  }\n}\n.__loading .bot-head .bot-eye::after {\n  -webkit-animation-name: rotate-pupil;\n          animation-name: rotate-pupil;\n  -webkit-animation-duration: 1.5s;\n          animation-duration: 1.5s;\n  -webkit-animation-direction: normal;\n          animation-direction: normal;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n:host {\n  margin: 120px auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n"

/***/ }),

/***/ "./src/app/animated-bot/animated-bot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimatedBotComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnimatedBotComponent = /** @class */ (function () {
    function AnimatedBotComponent() {
        this.state = {
            angry: false,
            normal: false,
            antenns: true,
            pupil: false,
            open: false,
            close: false,
            loading: true
        };
    }
    AnimatedBotComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], AnimatedBotComponent.prototype, "state", void 0);
    AnimatedBotComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-animated-bot',
            template: __webpack_require__("./src/app/animated-bot/animated-bot.component.html"),
            styles: [__webpack_require__("./src/app/animated-bot/animated-bot.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], AnimatedBotComponent);
    return AnimatedBotComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_main_chat_main_chat_component__ = __webpack_require__("./src/app/chat/main-chat/main-chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_component__ = __webpack_require__("./src/app/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_auth_guard__ = __webpack_require__("./src/app/auth/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chat_chat_guard__ = __webpack_require__("./src/app/chat/chat.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chat_chat_resolver__ = __webpack_require__("./src/app/chat/chat.resolver.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: 'auth',
        component: __WEBPACK_IMPORTED_MODULE_3__auth_auth_component__["a" /* AuthComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__auth_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'chat',
        component: __WEBPACK_IMPORTED_MODULE_2__chat_main_chat_main_chat_component__["a" /* MainChatComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__chat_chat_guard__["a" /* ChatGuard */]],
        resolve: { messageList: __WEBPACK_IMPORTED_MODULE_6__chat_chat_resolver__["a" /* ChatResolver */] }
    },
    { path: '', redirectTo: 'auth', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes, { enableTracing: false })]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n<app-animated-bot id=\"main-loading\">\n</app-animated-bot>\n"

/***/ }),

/***/ "./src/app/app.component.less":
/***/ (function(module, exports) {

module.exports = ":host > #main-loading {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.less")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__chat_main_chat_main_chat_component__ = __webpack_require__("./src/app/chat/main-chat/main-chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__chat_chat_toolbar_chat_toolbar_component__ = __webpack_require__("./src/app/chat/chat-toolbar/chat-toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__chat_message_input_message_input_component__ = __webpack_require__("./src/app/chat/message-input/message-input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__chat_message_message_component__ = __webpack_require__("./src/app/chat/message/message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_websocet_service__ = __webpack_require__("./src/app/services/websocet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_chat_service__ = __webpack_require__("./src/app/services/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__auth_auth_component__ = __webpack_require__("./src/app/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__auth_auth_guard__ = __webpack_require__("./src/app/auth/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__chat_chat_guard__ = __webpack_require__("./src/app/chat/chat.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__chat_chat_resolver__ = __webpack_require__("./src/app/chat/chat.resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__animated_bot_animated_bot_component__ = __webpack_require__("./src/app/animated-bot/animated-bot.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__chat_main_chat_main_chat_component__["a" /* MainChatComponent */],
                __WEBPACK_IMPORTED_MODULE_9__chat_chat_toolbar_chat_toolbar_component__["a" /* ChatToolbarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__chat_message_input_message_input_component__["a" /* MessageInputComponent */],
                __WEBPACK_IMPORTED_MODULE_12__chat_message_message_component__["a" /* MessageComponent */],
                __WEBPACK_IMPORTED_MODULE_15__auth_auth_component__["a" /* AuthComponent */],
                __WEBPACK_IMPORTED_MODULE_19__animated_bot_animated_bot_component__["a" /* AnimatedBotComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["f" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["c" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["e" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["d" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["b" /* MatCardModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_13__services_websocet_service__["a" /* WebSocetService */],
                __WEBPACK_IMPORTED_MODULE_14__services_chat_service__["b" /* ChatService */],
                __WEBPACK_IMPORTED_MODULE_16__auth_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_17__chat_chat_guard__["a" /* ChatGuard */],
                __WEBPACK_IMPORTED_MODULE_18__chat_chat_resolver__["a" /* ChatResolver */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\"\n     [class.hidden-form]=\"isAuth\">\n  <form class=\"login-form\"\n        [formGroup]=\"authForm\">\n    <mat-form-field class=\"login\">\n      <input matInput\n             placeholder=\"login\"\n             formControlName=\"login\"\n             required=\"required\">\n      <mat-error *ngIf=\"authForm.invalid\">\n        {{getErrorMessage()}}\n      </mat-error>\n    </mat-form-field>\n  </form>\n  <button mat-button\n          color=\"primary\"\n          class=\"chat-button\"\n          [disabled]=\"authForm.invalid || authForm.pending\"\n          (click)=\"addUser()\">\n    Go Chating\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/auth.component.less":
/***/ (function(module, exports) {

module.exports = ".form-container {\n  margin: 140px auto;\n  background: #FFD4AE;\n  border-radius: 2px;\n  padding: 10px;\n  max-width: 400px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.form-container .login-form .login {\n  width: 100%;\n  font-size: 24px;\n}\n.form-container .chat-button {\n  margin-top: 10px;\n  font-size: 24px;\n}\n.hidden-form {\n  display: none;\n}\n"

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthComponent = /** @class */ (function () {
    function AuthComponent(router, formBuilder, userService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.isAuth = false;
        this.userService.turnOffLoadingAnimation('main-loading');
    }
    AuthComponent.prototype.ngOnInit = function () {
        this.createForm();
        this.checkUserLogin();
    };
    AuthComponent.prototype.checkUserLogin = function () {
        var _this = this;
        var inputLogin = this.authForm.get('login');
        inputLogin.valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* debounceTime */])(500), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* switchMap */])(function (login) {
            return _this.userService.checkIsLogin(login);
        }))
            .subscribe(function (ans) {
            if (ans.isLogin) {
                inputLogin.setErrors({ isLogin: true });
            }
        }, function (err) {
            console.log(err);
        });
    };
    AuthComponent.prototype.addUser = function () {
        var _this = this;
        this.userService.addUser(this.authForm.get('login').value)
            .subscribe(function (user) {
            _this.userService.user = user;
            _this.router.navigateByUrl('/chat');
        }, function (err) {
            console.log(err);
        });
        this.isAuth = true;
        this.userService.turnOnloadingAnimation('main-loading');
    };
    AuthComponent.prototype.getErrorMessage = function () {
        var error = this.authForm.get('login').errors;
        return error.required ? 'You must enter a value' :
            error.isLogin ? 'Login is already used' :
                '';
    };
    AuthComponent.prototype.createForm = function () {
        this.authForm = this.formBuilder.group({
            login: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
        });
    };
    AuthComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-auth',
            template: __webpack_require__("./src/app/auth/auth.component.html"),
            styles: [__webpack_require__("./src/app/auth/auth.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.userService.user !== undefined) {
            console.log(this.userService.user);
            this.router.navigateByUrl('/chat');
            return false;
        }
        return this.isValidSession();
    };
    AuthGuard.prototype.isValidSession = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.userService.checkSession()
                .subscribe(function (user) {
                console.log(user);
                _this.userService.user = user;
                _this.router.navigateByUrl('/chat');
                resolve(false);
            }, function (err) {
                console.log(err);
                resolve(true);
            });
        });
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/chat/chat-toolbar/chat-toolbar.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"chat-toolbar\">\n  <span class=\"title\">{{login}}</span>\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/chat/chat-toolbar/chat-toolbar.component.less":
/***/ (function(module, exports) {

module.exports = ":host .chat-toolbar {\n  background-color: #FFF9EF;\n  background-image: -webkit-gradient(linear, right bottom, left top, from(#FFF9EF), color-stop(#FFD7B7), color-stop(#FFB3A5), color-stop(#FF8B9D), to(#FF6F9C));\n  background-image: linear-gradient(to top left, #FFF9EF, #FFD7B7, #FFB3A5, #FF8B9D, #FF6F9C);\n  background-repeat: no-repeat;\n  background-position: right top;\n  background-attachment: fixed;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n:host .chat-toolbar .title {\n  font-size: 24px;\n}\n"

/***/ }),

/***/ "./src/app/chat/chat-toolbar/chat-toolbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatToolbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChatToolbarComponent = /** @class */ (function () {
    function ChatToolbarComponent() {
    }
    ChatToolbarComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], ChatToolbarComponent.prototype, "login", void 0);
    ChatToolbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-chat-toolbar',
            template: __webpack_require__("./src/app/chat/chat-toolbar/chat-toolbar.component.html"),
            styles: [__webpack_require__("./src/app/chat/chat-toolbar/chat-toolbar.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], ChatToolbarComponent);
    return ChatToolbarComponent;
}());



/***/ }),

/***/ "./src/app/chat/chat.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatGuard = /** @class */ (function () {
    function ChatGuard(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    ChatGuard.prototype.canActivate = function (next, state) {
        if (this.userService.user !== undefined) {
            return true;
        }
        return this.isValidSession();
    };
    ChatGuard.prototype.isValidSession = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.userService.checkSession()
                .subscribe(function (user) {
                console.log(user);
                _this.userService.user = user;
                resolve(true);
            }, function (err) {
                console.log(err);
                _this.router.navigateByUrl('/auth');
                resolve(false);
            });
        });
    };
    ChatGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]])
    ], ChatGuard);
    return ChatGuard;
}());



/***/ }),

/***/ "./src/app/chat/chat.resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatResolver = /** @class */ (function () {
    function ChatResolver(userService) {
        this.userService = userService;
    }
    ChatResolver.prototype.resolve = function () {
        return this.userService.getMessageList();
    };
    ChatResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]])
    ], ChatResolver);
    return ChatResolver;
}());



/***/ }),

/***/ "./src/app/chat/main-chat/main-chat.component.html":
/***/ (function(module, exports) {

module.exports = "<app-chat-toolbar [login]=\"user.login\">\n</app-chat-toolbar>\n<div class=\"working-area\">\n  <div class=\"chat-container\">\n    <div class=\"message-container\" #scrollMe [scrollTop]=\"scrollMe.scrollHeight\">\n      <app-message *ngFor=\"let message of messageList\"\n                   [message]=\"message\"\n                   [user]=\"user\">\n      </app-message>\n    </div>\n    <app-message-input (addNewMessage)=\"addNewMessage($event)\">\n    </app-message-input>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/chat/main-chat/main-chat.component.less":
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n:host .working-area {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 100%;\n          flex: 1 1 100%;\n  overflow-y: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n:host .working-area .chat-container {\n  max-width: 800px;\n  min-width: 200px;\n  margin: 0 auto 0 auto;\n  background: white;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  padding: 10px;\n  min-height: 0;\n}\n:host .working-area .chat-container .message-container {\n  padding: 20px 40px 20px 40px;\n  min-height: 0px;\n  overflow-y: auto;\n}\n"

/***/ }),

/***/ "./src/app/chat/main-chat/main-chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_chat_service__ = __webpack_require__("./src/app/services/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainChatComponent = /** @class */ (function () {
    function MainChatComponent(userService, chatService, route) {
        this.userService = userService;
        this.chatService = chatService;
        this.route = route;
        this.userService.turnOffLoadingAnimation('main-loading');
    }
    MainChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.userService.user;
        this.messageList = this.chatService.messageList;
        this.messageList = this.route.snapshot.data.messageList;
        this.subscriptionToAddNewMessage =
            this.chatService.getSubscriptionToEvent(__WEBPACK_IMPORTED_MODULE_2__services_chat_service__["a" /* ChatEvents */].ADD)
                .subscribe(function (data) {
                _this.getNewMessage(data);
            });
    };
    MainChatComponent.prototype.ngOnDestroy = function () {
        this.subscriptionToAddNewMessage.unsubscribe();
    };
    MainChatComponent.prototype.addNewMessage = function (content) {
        this.chatService.sendEvent(__WEBPACK_IMPORTED_MODULE_2__services_chat_service__["a" /* ChatEvents */].ADD, {
            content: content,
            userId: this.user.id
        });
    };
    MainChatComponent.prototype.getNewMessage = function (data) {
        this.messageList.push(data);
    };
    MainChatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main-chat',
            template: __webpack_require__("./src/app/chat/main-chat/main-chat.component.html"),
            styles: [__webpack_require__("./src/app/chat/main-chat/main-chat.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__services_chat_service__["b" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], MainChatComponent);
    return MainChatComponent;
}());



/***/ }),

/***/ "./src/app/chat/message-input/message-input.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"input-container\">\n  <a mat-icon-button\n     class=\"__bottom-location\"\n     href=\"https://github.com/Mahakon/\"\n     target=\"_blank\">\n    <mat-icon>favorite</mat-icon>\n  </a>\n  <div class=\"message\"\n       contentEditable=\"true\"\n       [textContent]=\"content\"\n       (input)=\"handleInputMessage($event)\"\n       (keyup.enter)=\"handleNewMessage()\">\n    {{content}}\n  </div>\n  <button (click)=\"handleNewMessage()\"\n          mat-icon-button\n          class=\"__bottom-location\">\n    <mat-icon>send</mat-icon>\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/chat/message-input/message-input.component.less":
/***/ (function(module, exports) {

module.exports = ":host .input-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n:host .input-container .__bottom-location {\n  margin: auto auto 0 auto;\n}\n:host .input-container .message {\n  word-wrap: break-word;\n  border-radius: 2px;\n  border: 1px solid black;\n  width: 740px;\n  max-width: 740px;\n  min-width: 140px;\n  min-height: 40px;\n  padding: 4px;\n  font-size: 20px;\n}\n"

/***/ }),

/***/ "./src/app/chat/message-input/message-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessageInputComponent = /** @class */ (function () {
    function MessageInputComponent() {
        this.addNewMessage = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    MessageInputComponent.prototype.ngOnInit = function () {
    };
    MessageInputComponent.prototype.handleNewMessage = function () {
        this.addNewMessage.emit(this.content);
        this.content = '';
    };
    MessageInputComponent.prototype.handleInputMessage = function (_a) {
        var target = _a.target;
        this.content = target.textContent;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], MessageInputComponent.prototype, "addNewMessage", void 0);
    MessageInputComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-message-input',
            template: __webpack_require__("./src/app/chat/message-input/message-input.component.html"),
            styles: [__webpack_require__("./src/app/chat/message-input/message-input.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], MessageInputComponent);
    return MessageInputComponent;
}());



/***/ }),

/***/ "./src/app/chat/message/message.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"message\"\n     [class.anouther-user]=\"message.userId!==user.id\">\n  <div class=\"text\" [ngStyle]=\"getRandomColor()\">{{message.content}}</div>\n  <div class=\"icon-view\">\n    <mat-icon class=\"icon\">person</mat-icon>\n    <span>{{message.login}}</span>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/chat/message/message.component.less":
/***/ (function(module, exports) {

module.exports = ":host {\n  margin: 5px;\n}\n:host .message {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n:host .message .icon-view {\n  position: relative;\n}\n:host .message .icon-view .icon {\n  margin: 2px 10px 2px 2px;\n}\n:host .message .icon-view .icon + span {\n  display: none;\n  background: black;\n  opacity: 0.6;\n  color: white;\n  right: 62%;\n  top: 60%;\n  position: absolute;\n}\n:host .message .icon-view .icon:hover + span,\n:host .message .icon-view .icon:focus + span {\n  cursor: pointer;\n  display: inline-block;\n}\n:host .message .text {\n  display: inline;\n  max-width: 600px;\n  min-width: 100px;\n  word-wrap: break-word;\n  border-radius: 4px;\n  border-bottom-right-radius: 0;\n  background: none;\n  padding: 4px;\n  min-height: 24px;\n  font-size: 20px;\n}\n:host .anouther-user {\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n:host .anouther-user .icon-view {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n}\n:host .anouther-user .icon-view .icon + span {\n  right: auto;\n  left: 62%;\n}\n:host .anouther-user .text {\n  -webkit-box-ordinal-group: 3;\n      -ms-flex-order: 2;\n          order: 2;\n  right: -62%;\n}\n"

/***/ }),

/***/ "./src/app/chat/message/message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_random_material_color__ = __webpack_require__("./node_modules/random-material-color/dist/randomColor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_random_material_color___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_random_material_color__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageComponent = /** @class */ (function () {
    function MessageComponent() {
    }
    MessageComponent.prototype.ngOnInit = function () {
    };
    MessageComponent.prototype.getRandomColor = function () {
        var color = __WEBPACK_IMPORTED_MODULE_1_random_material_color__["getColor"]({
            shades: ['200', '300'],
            text: this.message.userId.toString()
        });
        return { 'background': color };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MessageComponent.prototype, "message", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MessageComponent.prototype, "user", void 0);
    MessageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-message',
            template: __webpack_require__("./src/app/chat/message/message.component.html"),
            styles: [__webpack_require__("./src/app/chat/message/message.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return host; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return wsHost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return backHost; });
var host = 'https://angular-meetup.herokuapp.com/api/';
var wsHost = 'wss://angular-meetup.herokuapp.com/api/chat/connection/';
var backHost = 'https://angular-meetup.herokuapp.com';
// export const host = 'http://localhost:3000/api/';
// export const wsHost = 'ws://localhost:3000/api/chat/connection/';
// export const backHost = 'http://localhost:3000';


/***/ }),

/***/ "./src/app/services/chat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__websocet_service__ = __webpack_require__("./src/app/services/websocet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__("./src/app/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChatEvents;
(function (ChatEvents) {
    ChatEvents["ADD"] = "ADD";
    ChatEvents["DELETE"] = "DELETE";
    ChatEvents["LIKE"] = "LIKE";
})(ChatEvents || (ChatEvents = {}));
var ChatService = /** @class */ (function () {
    function ChatService(websocketService, userService) {
        this.websocketService = websocketService;
        this.userService = userService;
        this.openConnection();
        this.messageList = [];
    }
    ChatService.prototype.openConnection = function () {
        this.websocket = this.websocketService
            .connect(__WEBPACK_IMPORTED_MODULE_3__config__["c" /* wsHost */] + this.userService.user.id)
            .map(function (response) {
            return JSON.parse(response.data);
        });
    };
    ChatService.prototype.getSubscriptionToEvent = function (event) {
        return this.websocket
            .filter(function (res) { return res['event'] === event; })
            .map(function (res) { return res['data']; });
    };
    ChatService.prototype.sendEvent = function (event, data) {
        this.websocket.next({
            event: event,
            data: data
        });
    };
    ChatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__websocet_service__["a" /* WebSocetService */],
            __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__("./src/app/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Origin': __WEBPACK_IMPORTED_MODULE_2__config__["a" /* backHost */],
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Headers': ['Content-Type', '*']
        });
        this.options = { headers: this.headers, withCredentials: true };
    }
    UserService.prototype.checkIsLogin = function (login) {
        var formData = new FormData(), url = __WEBPACK_IMPORTED_MODULE_2__config__["b" /* host */] + 'auth/check';
        formData.append('login', login);
        return this.http.post(url, formData);
    };
    UserService.prototype.addUser = function (login) {
        var formData = new FormData(), url = __WEBPACK_IMPORTED_MODULE_2__config__["b" /* host */] + 'auth';
        formData.append('login', login);
        return this.http.post(url, formData, this.options);
    };
    UserService.prototype.checkSession = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__config__["b" /* host */] + 'session/check';
        return this.http.get(url, this.options);
    };
    UserService.prototype.getMessageList = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__config__["b" /* host */] + 'chat/get/messages';
        return this.http.get(url);
    };
    UserService.prototype.turnOnloadingAnimation = function (elementId) {
        document.getElementById(elementId).style.display = 'flex';
    };
    UserService.prototype.turnOffLoadingAnimation = function (elementId) {
        document.getElementById(elementId).style.display = 'none';
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/websocet.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebSocetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebSocetService = /** @class */ (function () {
    function WebSocetService() {
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.ws = undefined;
        this.opening = true;
    }
    WebSocetService.prototype.connect = function (url) {
        this.subject = this.create(url);
        console.log('Successfully connected: ' + url);
        return this.subject;
    };
    WebSocetService.prototype.create = function (url) {
        var _this = this;
        this.ws = new WebSocket(url);
        var observable = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].create(function (obs) {
            _this.ws.onmessage = obs.next.bind(obs);
            _this.ws.onerror = obs.error.bind(obs);
            _this.ws.onclose = obs.complete.bind(obs);
            return _this.ws.close.bind(_this.ws);
        });
        var observer = {
            next: function (data) {
                if (_this.ws.readyState === WebSocket.OPEN) {
                    _this.ws.send(JSON.stringify(data));
                }
            }
        };
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */].create(observer, observable);
    };
    WebSocetService.prototype.close = function () {
        if (this.ws !== undefined) {
            this.ws.close();
            console.log('WebSocket closed');
        }
    };
    WebSocetService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], WebSocetService);
    return WebSocetService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map