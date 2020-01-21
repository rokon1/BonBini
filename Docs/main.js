(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\n  <app-nav-menu></app-nav-menu>\n  <router-outlet></router-outlet>\n  <app-footer></app-footer>\n</body>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\">\n        <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col-sm\">               \n                <table class=\"table\">\n                    <tbody>\n                        <h1 class=\"display-4\">Contact</h1>\n                        <tr>\n                            <td class=\"contactTable\" scope=\"col\" style=\"border-top: 1px solid #CE9667;\">Telefoon</td>\n                            <td class=\"contactTable\" scope=\"col\" style=\"border-top: 1px solid #CE9667;\"><a href=\"tel:03 / 770 86 46\">03 / 770 86 46</a></td>\n                      </tr>\n                      <tr>\n                        <td class=\"contactTable\" scope=\"col\">Email</td>\n                        <td class=\"contactTable\" scope=\"col\"><a href=\"mailto:info@bon-bini.be\">info@bon-bini.be</a></td>\n                    </tr>\n                    <tr>\n                        <td class=\"contactTable\" scope=\"col\">Facebook</td>\n                        <td class=\"contactTable\" scope=\"col\"><a href=\"https://www.facebook.com/Bon-Bini-191647834218873/\">Facebook</a></td>\n                    </tr>\n                    <tr>\n                        <td class=\"contactTable\" scope=\"col\">Maps</td>\n                        <td class=\"contactTable\" scope=\"col\"><a href=\"https://goo.gl/maps/Xq7eYYaaCSkYJZKi7\">Maps</a></td>\n                    </tr>\n                      <tr>\n                            <td class=\"contactTable\" scope=\"col\">Adres</td>\n                            <td class=\"contactTable\" scope=\"col\">Paardenmarkt <br>72 2000 Antwerpen</td>\n                    </tr>\n                    </tbody>\n                  </table>\n              </div>\n              <div class=\"col-sm\">   \n                <h1 class=\"display-4\">Openingsuren</h1>     \n                <table class=\"table\">\n                    \n                    <tbody>\n                      <tr>\n                        <tr *ngFor=\"let i of BussinesHours\">\n                            <td class=\"BussinessHoursTable\" scope=\"col\">{{i.Day}}</td>\n                            <td class=\"BussinessHoursTable\" scope=\"col\" *ngIf=\"i.Hour!= null\">{{i.Hour}}</td>\n                            <td class=\"BussinessHoursTable\" scope=\"col\" *ngIf=\"i.Hour== null\">Gesloten</td>\n                      </tr>\n                    </tbody>\n                  </table>\n              </div>\n            </div>\n          </div>\n  </footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-component/home.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-component/home.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrap\">\n<div class=\"cover-big\">\n    <div class=\"banner-text\">\n      <h1 class=\"text-light head-text\">WELKOM BIJ BON BINI </h1>\n      <hr class=\"titleSeperator\">\n      <p class=\"text-light head-description text-center\" style=\"font-size: 20px;\">\n        EEN WERELD VAN SMAKEN\n      </p>\n      <br>\n      <button  [routerLink]=\"['/menu']\" class=\"HomeButton\">Menu</button>>\n      <button  [routerLink]=\"['/reservations']\" class=\"HomeButton\">Reservatie</button>>\n    </div>\n  </div>\n  <div class=\"HomeStroke\">\n      <div class=\"HomeInfo\">  \n        Bon Bini betekent welkom in het papiamento.<br> De gesproken taal op de Nederlandse antillen. We streven ernaar onze naam eer aan te doen,\n         door u te verwelkomen met een glimlach op het gelaat en een onverstoorbaar goed humeur. Het restaurant bevindt zich in het midden van de studentenbuurt\n        aan de universiteit van Antwerpen.\n        <br><br> \n        Wat u bij ons kunt verwachten zijn gerechten, wijnen, cocktails en spirits van overal in de wereld. \n          Onze specialiteiten zijn kangoeroe en fajitas , maar we beschikken tevens over een uitgebreid assortiment aan tapas. \n          <br><br>\n          Tijdens de zomer kunt\n           u van deze culinaire verwennerij genieten op ons groot terras achteraan het restaurant. Weg van het verkeer, regelrecht in een oase van \n           rust temidden de grote stad.\n           <br><br>\n           U bent van harte welkom en we nodigen u uit om zelf te ondervinden wat een ongelooflijke ervaring u te wachten staat bij Bon Bini.\n    </div>\n</div>\n<div class=\"cover-big\" style=\"height: 50vh;\">\n\n</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header class =\"head\">\n    <h1 class=\"display-4\">BonBini</h1>\n</header>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/reservations/reservations.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reservations/reservations.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"cover-top\">\n\n</div >\n<div class=\"wrapper\">\n\n    <div class=\"form-group\">\n      <label for=\"exampleFormControlInput1\" >Naam</label>\n      <input type=\"email\" class=\"form-control\" [(ngModel)]=\"name\" id=\"exampleFormControlInput1\" placeholder=\"Josh\">\n    </div>\n    <div class=\"form-group\">\n        <label for=\"exampleFormControlInput1\" >Telefoonnummer</label>\n        <input type=\"email\" class=\"form-control\" [(ngModel)]=\"phone\" id=\"exampleFormControlInput1\" placeholder=\"047752924\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleFormControlInput1\">E-mail adres</label>\n        <input type=\"email\" class=\"form-control\" [(ngModel)]=\"email\" id=\"exampleFormControlInput1\" placeholder=\"name@example.com\">\n      </div>\n    <div class=\"form-group\">\n      <label for=\"exampleFormControlTextarea1\">Opmerkingen</label>\n      <textarea [(ngModel)]=\"comments\" class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\"></textarea>\n    </div>\n    <label for=\"exampleFormControlTextarea1\">Aantal personen</label>\n<div class=\"sliderMakeUp\">\n    <ng5-slider [(value)]=\"value\" [options]=\"options\"></ng5-slider>\n</div>\n<label for=\"exampleFormControlTextarea1\">Kies een datum</label>\n      <form #myForm=\"ngForm\" novalidate>\n        <my-date-picker name=\"mydate\" [options]=\"myDatePickerOptions\" \n                        [(ngModel)]=\"model\" required></my-date-picker>\n    </form> \n    <label for=\"exampleFormControlTextarea1\">Kies een uur</label><br>\n<div class=\"ReservationTimes\" *ngFor=\"let times of ReservationTimes\" >\n    <button  style=\"background-color: blue;\" *ngIf=\"times.Hour==SelectedDate.getHours() && times.Minutes==SelectedDate.getMinutes()\" (click)=\"UpdateReservationTime(times.Hour,times.Minutes )\" value=\"{{times.Hour}}:{{times.Minutes | number:'2.0'}}\" class=\"btn btn-primary\" type=\"submit\">{{times.Hour}}:{{times.Minutes | number:'2.0'}}</button>\n    <button  *ngIf=\"times.Hour!=SelectedDate.getHours() || times.Minutes!=SelectedDate.getMinutes()\" (click)=\"UpdateReservationTime(times.Hour,times.Minutes )\" value=\"{{times.Hour}}:{{times.Minutes | number:'2.0'}}\" class=\"btn btn-primary\" type=\"submit\">{{times.Hour}}:{{times.Minutes | number:'2.0'}}</button>\n</div>\n<button  (click)=\"Reservation()\" class=\"btn btn-primary\" style=\"width: 100%;margin:20px 0 20px 0\" type=\"submit\">Reserveren</button>\n  \n</div>\n\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'BonBini';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_component_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home-component/home.component */ "./src/app/home-component/home.component.ts");
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nav-menu/nav-menu.component */ "./src/app/nav-menu/nav-menu.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _reservations_reservations_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reservations/reservations.component */ "./src/app/reservations/reservations.component.ts");
/* harmony import */ var ng5_slider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng5-slider */ "./node_modules/ng5-slider/esm2015/ng5-slider.js");
/* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _home_component_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_8__["NavMenuComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
            _reservations_reservations_component__WEBPACK_IMPORTED_MODULE_10__["ReservationsComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ng5_slider__WEBPACK_IMPORTED_MODULE_11__["Ng5SliderModule"],
            mydatepicker__WEBPACK_IMPORTED_MODULE_12__["MyDatePickerModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot([
                { path: "", component: _home_component_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
                { path: "home", component: _home_component_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
                { path: "reservations", component: _reservations_reservations_component__WEBPACK_IMPORTED_MODULE_10__["ReservationsComponent"] },
            ])
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  \r\n  footer {\r\n    background-color: #EFE7DB;\r\n    padding: 80px 0;\r\n  }\r\n  \r\n  .contactTable{\r\nborder : none;\r\npadding: 4px;\r\npadding-top: 2px;\r\npadding-bottom: 2px;\r\n  }\r\n  \r\n  .footer{\r\n      padding: 2%;\r\n  }\r\n  \r\n  .BussinessHoursTable\r\n  {\r\n    padding: 4px;\r\n    border-color: #CE9667;\r\n  }\r\n  \r\n  .col-sm{\r\n      margin-left: 50px;\r\n      margin-right: 50px;\r\n  }\r\n  \r\n  @media (max-width: 767px) {\r\n    /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\r\n.col-sm\r\n{\r\nmargin: auto;\r\n}\r\n.BussinessHoursTable\r\n{\r\n    position: relative;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n}\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7RUFDRTtJQUNFLHlCQUF5QjtJQUN6QixlQUFlO0VBQ2pCOztFQUVBO0FBQ0YsYUFBYTtBQUNiLFlBQVk7QUFDWixnQkFBZ0I7QUFDaEIsbUJBQW1CO0VBQ2pCOztFQUNBO01BQ0ksV0FBVztFQUNmOztFQUNBOztJQUVFLFlBQVk7SUFDWixxQkFBcUI7RUFDdkI7O0VBQ0E7TUFDSSxpQkFBaUI7TUFDakIsa0JBQWtCO0VBQ3RCOztFQUNBO0lBQ0UsNkZBQTZGO0FBQ2pHOztBQUVBLFlBQVk7QUFDWjtBQUNBOztJQUVJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0VBQ0UiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIFxyXG4gIGZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUZFN0RCO1xyXG4gICAgcGFkZGluZzogODBweCAwO1xyXG4gIH1cclxuICBcclxuICAuY29udGFjdFRhYmxle1xyXG5ib3JkZXIgOiBub25lO1xyXG5wYWRkaW5nOiA0cHg7XHJcbnBhZGRpbmctdG9wOiAycHg7XHJcbnBhZGRpbmctYm90dG9tOiAycHg7XHJcbiAgfVxyXG4gIC5mb290ZXJ7XHJcbiAgICAgIHBhZGRpbmc6IDIlO1xyXG4gIH1cclxuICAuQnVzc2luZXNzSG91cnNUYWJsZVxyXG4gIHtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIGJvcmRlci1jb2xvcjogI0NFOTY2NztcclxuICB9XHJcbiAgLmNvbC1zbXtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNTBweDtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAvKiBPbiBzbWFsbCBzY3JlZW5zLCB0aGUgbmF2IG1lbnUgc3BhbnMgdGhlIGZ1bGwgd2lkdGggb2YgdGhlIHNjcmVlbi4gTGVhdmUgYSBzcGFjZSBmb3IgaXQuICovXHJcbi5jb2wtc21cclxue1xyXG5tYXJnaW46IGF1dG87XHJcbn1cclxuLkJ1c3NpbmVzc0hvdXJzVGFibGVcclxue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() {
        this.BussinesHours = [{ Day: "Maandag", Hour: "17:00" }, { Day: "Dinsdag", Hour: "17:00" },
            { Day: "Woensdag", Hour: "17:00" }, { Day: "Donderdag", Hour: "17:00" }, { Day: "Vrijdag", Hour: "17:00" },
            { Day: "Zaterdag", Hour: "18:00" }, { Day: "Zondag", Hour: "18:00" }];
    }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/home-component/home.component.css":
/*!***************************************************!*\
  !*** ./src/app/home-component/home.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cover-big {\r\n    background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0.6))),\r\n      url('3.jpg');\r\n    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)),\r\n      url('3.jpg');\r\n    height: 100vh;\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    background-repeat: no-repeat;\r\n    padding-top: 40vh;\r\n    z-index: -1;\r\n  }\r\n  .banner-text\r\n  {\r\n      margin: auto;\r\n      width: 100%;\r\n      text-align: center;\r\n  }\r\n  .titleSeperator\r\n  {\r\n    border-top: 1px solid white;\r\n    width: 16vh;\r\n  }\r\n  .HomeButton{\r\n    background-color: transparent;\r\n    color: white;\r\n    border-style: solid;\r\n    width :12vh;\r\n    padding : 10px;\r\n  }\r\n  .HomeButton:hover{\r\n    background-color:rgba(255, 255, 255, 0.5);\r\n  }\r\n  .HomeStroke\r\n  {\r\n      background-color: white;\r\n      margin: auto;\r\n      width: 100%;\r\n      text-align: center;\r\n\r\n  }\r\n  .HomeInfo\r\n  {\r\n      margin-top: 40px;\r\n      margin-left: 35%;\r\n      margin-right: 35%;\r\n      margin-bottom: 40px;\r\n      font-size: larger;\r\n      letter-spacing: 1px;\r\n  }\r\n  @media (max-width: 767px) {\r\n    /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\r\n    .HomeInfo {\r\n        margin-left: 10%;\r\n        margin-right: 10%;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1jb21wb25lbnQvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7a0JBQzZCO0lBRDdCO2tCQUM2QjtJQUM3QixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLGlCQUFpQjtJQUNqQixXQUFXO0VBQ2I7RUFDQTs7TUFFSSxZQUFZO01BQ1osV0FBVztNQUNYLGtCQUFrQjtFQUN0QjtFQUNBOztJQUVFLDJCQUEyQjtJQUMzQixXQUFXO0VBQ2I7RUFDQTtJQUNFLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSx5Q0FBeUM7RUFDM0M7RUFDQTs7TUFFSSx1QkFBdUI7TUFDdkIsWUFBWTtNQUNaLFdBQVc7TUFDWCxrQkFBa0I7O0VBRXRCO0VBQ0E7O01BRUksZ0JBQWdCO01BQ2hCLGdCQUFnQjtNQUNoQixpQkFBaUI7TUFDakIsbUJBQW1CO01BQ25CLGlCQUFpQjtNQUNqQixtQkFBbUI7RUFDdkI7RUFDQTtJQUNFLDZGQUE2RjtJQUM3RjtRQUNJLGdCQUFnQjtRQUNoQixpQkFBaUI7SUFDckI7RUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtY29tcG9uZW50L2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb3Zlci1iaWcge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwLjYpKSxcclxuICAgICAgdXJsKC4uLy4uL2Fzc2V0cy9pbWcvMy5qcGcpO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIHBhZGRpbmctdG9wOiA0MHZoO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgfVxyXG4gIC5iYW5uZXItdGV4dFxyXG4gIHtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAudGl0bGVTZXBlcmF0b3JcclxuICB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICB3aWR0aDogMTZ2aDtcclxuICB9XHJcbiAgLkhvbWVCdXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICB3aWR0aCA6MTJ2aDtcclxuICAgIHBhZGRpbmcgOiAxMHB4O1xyXG4gIH1cclxuICAuSG9tZUJ1dHRvbjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gIH1cclxuICAuSG9tZVN0cm9rZVxyXG4gIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgfVxyXG4gIC5Ib21lSW5mb1xyXG4gIHtcclxuICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDM1JTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAzNSU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC8qIE9uIHNtYWxsIHNjcmVlbnMsIHRoZSBuYXYgbWVudSBzcGFucyB0aGUgZnVsbCB3aWR0aCBvZiB0aGUgc2NyZWVuLiBMZWF2ZSBhIHNwYWNlIGZvciBpdC4gKi9cclxuICAgIC5Ib21lSW5mbyB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxuICAgIH1cclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/home-component/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-component/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-component/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home-component/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/mail.service.ts":
/*!*********************************!*\
  !*** ./src/app/mail.service.ts ***!
  \*********************************/
/*! exports provided: MailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailService", function() { return MailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let MailService = class MailService {
    constructor(http) {
        this.http = http;
    }
    //todo: change url
    PostMail(mail) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });
        let options = { headers: headers };
        return this.http.post(`https://localhost:5001/weatherforecast`, mail, options);
    }
};
MailService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
MailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MailService);



/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.css":
/*!*************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".head{\r\n    background-color: transparent;\r\n    position: absolute;\r\n    z-index: 2;\r\n    color:white;\r\n    width: 100%;\r\n}\r\n.display-4\r\n{\r\n    margin: 5px;\r\n    margin-left: 10%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7QUFDQTs7SUFFSSxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uZGlzcGxheS00XHJcbntcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.ts":
/*!************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.ts ***!
  \************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavMenuComponent = class NavMenuComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav-menu.component.css */ "./src/app/nav-menu/nav-menu.component.css")).default]
    })
], NavMenuComponent);



/***/ }),

/***/ "./src/app/reservations/reservations.component.css":
/*!*********************************************************!*\
  !*** ./src/app/reservations/reservations.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cover-top{\r\n    background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0.6))),\r\n      url('22tn.jpg');\r\n    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)),\r\n      url('22tn.jpg');\r\n    height: 20vh;\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    background-repeat: no-repeat;\r\n   /* padding-top: 40vh;*/\r\n    z-index: -1;\r\n  }\r\n  .wrapper\r\n  {\r\n    margin: auto;\r\n    width: 40%;\r\n    padding-top: 10px;\r\n  }\r\n  .btn-primary{\r\n      background-color: #CE9667;\r\n      border:none;\r\n      margin: 4px;\r\n  }\r\n  .btn-primary:active{\r\n    background-color: #CE9667;\r\n    border:none;\r\n    margin: 4px;\r\n}\r\n  .ReservationTimes{\r\n    display: inline-block;\r\n}\r\n  @media (max-width: 767px) {\r\n    /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\r\n    .wrapper\r\n    {\r\n      margin: auto;\r\n      width: 80%;\r\n      padding-top: 10px;\r\n    }\r\n  }\r\n  .myClass{\r\n    color : red;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzZXJ2YXRpb25zL3Jlc2VydmF0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7cUJBQ2dDO0lBRGhDO3FCQUNnQztJQUNoQyxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsNEJBQTRCO0dBQzdCLHNCQUFzQjtJQUNyQixXQUFXO0VBQ2I7RUFDQTs7SUFFRSxZQUFZO0lBQ1osVUFBVTtJQUNWLGlCQUFpQjtFQUNuQjtFQUNBO01BQ0kseUJBQXlCO01BQ3pCLFdBQVc7TUFDWCxXQUFXO0VBQ2Y7RUFDQTtJQUNFLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsV0FBVztBQUNmO0VBQ0E7SUFDSSxxQkFBcUI7QUFDekI7RUFDQTtJQUNJLDZGQUE2RjtJQUM3Rjs7TUFFRSxZQUFZO01BQ1osVUFBVTtNQUNWLGlCQUFpQjtJQUNuQjtFQUNGO0VBRUE7SUFDRSxXQUFXO0VBQ2IiLCJmaWxlIjoic3JjL2FwcC9yZXNlcnZhdGlvbnMvcmVzZXJ2YXRpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY292ZXItdG9we1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwLjYpKSxcclxuICAgICAgdXJsKC4uLy4uL2Fzc2V0cy9pbWcvMjJ0bi5qcGcpO1xyXG4gICAgaGVpZ2h0OiAyMHZoO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAvKiBwYWRkaW5nLXRvcDogNDB2aDsqL1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgfVxyXG4gIC53cmFwcGVyXHJcbiAge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIH1cclxuICAuYnRuLXByaW1hcnl7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNDRTk2Njc7XHJcbiAgICAgIGJvcmRlcjpub25lO1xyXG4gICAgICBtYXJnaW46IDRweDtcclxuICB9XHJcbiAgLmJ0bi1wcmltYXJ5OmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDRTk2Njc7XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIG1hcmdpbjogNHB4O1xyXG59XHJcbi5SZXNlcnZhdGlvblRpbWVze1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLyogT24gc21hbGwgc2NyZWVucywgdGhlIG5hdiBtZW51IHNwYW5zIHRoZSBmdWxsIHdpZHRoIG9mIHRoZSBzY3JlZW4uIExlYXZlIGEgc3BhY2UgZm9yIGl0LiAqL1xyXG4gICAgLndyYXBwZXJcclxuICAgIHtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICB3aWR0aDogODAlO1xyXG4gICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5teUNsYXNze1xyXG4gICAgY29sb3IgOiByZWQ7XHJcbiAgfVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/reservations/reservations.component.ts":
/*!********************************************************!*\
  !*** ./src/app/reservations/reservations.component.ts ***!
  \********************************************************/
/*! exports provided: ReservationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationsComponent", function() { return ReservationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _mail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mail.service */ "./src/app/mail.service.ts");



let ReservationsComponent = class ReservationsComponent {
    constructor(mailSvc) {
        this.mailSvc = mailSvc;
        this.value = 1;
        this.options = {
            floor: 1,
            ceil: 12,
            step: 1,
            showTicks: true,
            showTicksValues: true,
        };
        this.myDate = new Date();
        this.myDatePickerOptions = {
            // other options...
            dateFormat: 'dd.mm.yyyy',
            disableUntil: { year: this.myDate.getFullYear(), month: this.myDate.getMonth() + 1, day: this.myDate.getDate() }
        };
        this.ReservationTimes = new Array();
        this.SelectedDate = new Date();
        this.comments = "";
        this.email = "";
        this.phone = "";
        this.name = "";
    }
    ngOnInit() {
        this.model = { date: { year: this.myDate.getFullYear(), month: this.myDate.getMonth() + 1, day: this.myDate.getDate() } };
        for (var i = 18; i < 23; i++) {
            for (var j = 0; j < 60; j = j + 15) {
                var temp = { Hour: i, Minutes: j };
                this.ReservationTimes.push(temp);
                if (i == 22 && j == 15) {
                    j = 60;
                }
            }
        }
    }
    Reservation() {
        console.log(this.model.date);
        this.SelectedDate.setFullYear(this.model.date.year);
        this.SelectedDate.setMonth(this.model.date.month);
        this.SelectedDate.setDate(this.model.date.day);
        console.log(this.comments);
        var temp = { comment: this.comments, email: this.email, phoneNumber: this.phone, reservationDate: this.SelectedDate, senderName: this.name };
        console.log(temp);
        this.mailSvc.PostMail(temp).subscribe();
        console.log(this.SelectedDate.toISOString() + "-0100");
    }
    UpdateReservationTime(hour, Minutes) {
        this.SelectedDate.setHours(hour);
        console.log(this.SelectedDate.getHours());
        this.SelectedDate.setMinutes(Minutes);
    }
};
ReservationsComponent.ctorParameters = () => [
    { type: _mail_service__WEBPACK_IMPORTED_MODULE_2__["MailService"] }
];
ReservationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reservations',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reservations.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/reservations/reservations.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reservations.component.css */ "./src/app/reservations/reservations.component.css")).default]
    })
], ReservationsComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\PrivateProjects\Github\BonBini\BonBini\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map