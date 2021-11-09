(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["subscription-subscription-module"],{

/***/ "+XbK":
/*!********************************************************!*\
  !*** ./src/app/subscription/subscription.component.ts ***!
  \********************************************************/
/*! exports provided: SubscriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionComponent", function() { return SubscriptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/services/set-title.service */ "yZxC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");




class SubscriptionComponent {
    constructor(setTitle) {
        this.setTitle = setTitle;
    }
    ngOnInit() {
        this.setTitle.setTitle('WHS-Subscription');
    }
}
SubscriptionComponent.ɵfac = function SubscriptionComponent_Factory(t) { return new (t || SubscriptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_1__["SetTitleService"])); };
SubscriptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SubscriptionComponent, selectors: [["app-subscription"]], decls: 1, vars: 0, template: function SubscriptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWJzY3JpcHRpb24uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubscriptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-subscription',
                templateUrl: './subscription.component.html',
                styleUrls: ['./subscription.component.scss']
            }]
    }], function () { return [{ type: _utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_1__["SetTitleService"] }]; }, null); })();


/***/ }),

/***/ "0Q2x":
/*!***************************************************************************!*\
  !*** ./src/app/subscription/rate-and-coupon/rate-and-coupon.component.ts ***!
  \***************************************************************************/
/*! exports provided: RateAndCouponComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RateAndCouponComponent", function() { return RateAndCouponComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_utils_services_subscription_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utils/services/subscription.service */ "jPky");





class RateAndCouponComponent {
    constructor(subscript, fb) {
        this.subscript = subscript;
        this.fb = fb;
        this.isValid = false;
        this.rateAndCoupon = this.fb.group({
            monthly: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            yearly: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    ngOnInit() {
        this.getContact();
    }
    getContact() {
        this.myId = '6177e0b96d0cc515a04870a2';
        this.subscript.getPlan(this.myId).subscribe((data) => {
            console.log('mode=>', data);
            this.dataPlan = data.data;
        });
    }
    editPlan() {
        this.isValid = true;
    }
    editPlanInfo(id) {
        console.log('id=>', id);
        this.myId = this.dataPlan._id;
        console.log('form', this.rateAndCoupon.value);
        // this.isEdit = true;
        this.subscript
            .editPlan(this.myId, this.rateAndCoupon.value)
            .subscribe((res) => {
            console.log('Data Set response' + res);
            this.data = res.data;
            console.log('new response' + this.data);
            // this.dialogRef.close('true');
        });
    }
}
RateAndCouponComponent.ɵfac = function RateAndCouponComponent_Factory(t) { return new (t || RateAndCouponComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_subscription_service__WEBPACK_IMPORTED_MODULE_2__["SubscriptionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
RateAndCouponComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RateAndCouponComponent, selectors: [["app-rate-and-coupon"]], decls: 0, vars: 0, template: function RateAndCouponComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyYXRlLWFuZC1jb3Vwb24uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RateAndCouponComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-rate-and-coupon',
                templateUrl: './rate-and-coupon.component.html',
                styleUrls: ['./rate-and-coupon.component.scss']
            }]
    }], function () { return [{ type: src_app_utils_services_subscription_service__WEBPACK_IMPORTED_MODULE_2__["SubscriptionService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "AfdY":
/*!*****************************************************!*\
  !*** ./src/app/subscription/subscription.module.ts ***!
  \*****************************************************/
/*! exports provided: SubscriptionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionModule", function() { return SubscriptionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _subscription_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subscription-routing.module */ "KGXC");
/* harmony import */ var _subscription_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subscription.component */ "+XbK");
/* harmony import */ var _rate_and_coupon_rate_and_coupon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rate-and-coupon/rate-and-coupon.component */ "0Q2x");






class SubscriptionModule {
}
SubscriptionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SubscriptionModule });
SubscriptionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SubscriptionModule_Factory(t) { return new (t || SubscriptionModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _subscription_routing_module__WEBPACK_IMPORTED_MODULE_2__["SubscriptionRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SubscriptionModule, { declarations: [_subscription_component__WEBPACK_IMPORTED_MODULE_3__["SubscriptionComponent"], _rate_and_coupon_rate_and_coupon_component__WEBPACK_IMPORTED_MODULE_4__["RateAndCouponComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _subscription_routing_module__WEBPACK_IMPORTED_MODULE_2__["SubscriptionRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubscriptionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_subscription_component__WEBPACK_IMPORTED_MODULE_3__["SubscriptionComponent"], _rate_and_coupon_rate_and_coupon_component__WEBPACK_IMPORTED_MODULE_4__["RateAndCouponComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _subscription_routing_module__WEBPACK_IMPORTED_MODULE_2__["SubscriptionRoutingModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "KGXC":
/*!*************************************************************!*\
  !*** ./src/app/subscription/subscription-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: SubscriptionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionRoutingModule", function() { return SubscriptionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _rate_and_coupon_rate_and_coupon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rate-and-coupon/rate-and-coupon.component */ "0Q2x");





const routes = [
    // { path: '', component: SubscriptionComponent },
    { path: '', component: _rate_and_coupon_rate_and_coupon_component__WEBPACK_IMPORTED_MODULE_2__["RateAndCouponComponent"] },
];
class SubscriptionRoutingModule {
}
SubscriptionRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SubscriptionRoutingModule });
SubscriptionRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SubscriptionRoutingModule_Factory(t) { return new (t || SubscriptionRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SubscriptionRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubscriptionRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "jPky":
/*!********************************************************!*\
  !*** ./src/app/utils/services/subscription.service.ts ***!
  \********************************************************/
/*! exports provided: SubscriptionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionService", function() { return SubscriptionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");





class SubscriptionService {
    constructor(https) {
        this.https = https;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
    }
    getPlan(id) {
        return this.https.get(this.apiUrl + 'plan/get/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            console.log('res.data=>', res.data);
            return res;
        }));
    }
    editPlan(id, data) {
        return this.https.put(this.apiUrl + 'plan/update/' + id, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            console.log('res.data=>', res.data);
            return res;
        }));
    }
    addPlan(data) {
        return this.https.post(this.apiUrl + 'plan/add', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            console.log('res.data=>', res.data);
            return res;
        }));
    }
}
SubscriptionService.ɵfac = function SubscriptionService_Factory(t) { return new (t || SubscriptionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
SubscriptionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SubscriptionService, factory: SubscriptionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubscriptionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=subscription-subscription-module-es2015.js.map