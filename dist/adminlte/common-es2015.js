(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "1i0u":
/*!*********************************************************************!*\
  !*** ./src/app/utils/services/landing-page-info-service.service.ts ***!
  \*********************************************************************/
/*! exports provided: LandingPageInfoServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageInfoServiceService", function() { return LandingPageInfoServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");





class LandingPageInfoServiceService {
    constructor(https) {
        this.https = https;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
    }
    getAppServiceById(id) {
        return this.https.get(this.apiUrl + 'module/get/data/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            console.log('res.data=>', res.data);
            return res;
        }));
    }
    addAppService(data) {
        return this.https.post(this.apiUrl + 'module/multiple', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            console.log('res.data=>', res.data);
            return res;
        }));
    }
    editModule(data, id) {
        return this.https.put(this.apiUrl + 'module/update/' + id, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            console.log('res.data=>', res.data);
            return res;
        }));
    }
    deleteModule(id) {
        return this.https.delete(this.apiUrl + 'module/delete/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            console.log('res.data=>', res.data);
            return res;
        }));
    }
    editHeader(id, data) {
        return this.https.put(this.apiUrl + 'mainPage/update/' + id, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            console.log('res.data=>', res.data);
            return res;
        }));
    }
    AddHeader(data) {
        return this.https.post(this.apiUrl + 'mainPage/add', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            console.log('res.data=>', res.data);
            return res;
        }));
    }
    getHeaderBYId() {
        return this.https.get(this.apiUrl + 'mainPage/get').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            console.log('res.data=>', res.data);
            return res;
        }));
    }
    editsubModule(data, id) {
        return this.https.put(this.apiUrl + 'subModule/update/' + id, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            console.log('res.data=>', res.data);
            return res;
        }));
    }
    deletesubModule(id) {
        return this.https.delete(this.apiUrl + 'subModule/delete/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            console.log('res.data=>', res.data);
            return res;
        }));
    }
    addFAQ(data) {
        return this.https.post(this.apiUrl + 'question/add', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            console.log('res.data=>', res.data);
            return res;
        }));
    }
    addSubModule(data) {
        return this.https.post(this.apiUrl + 'subModule/add', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            console.log('res.data=>', res.data);
            return res;
        }));
    }
    getAboutUsById(id) {
        return this.https.get(this.apiUrl + 'aboutUs/getAll/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            console.log('res.data=>', res.data);
            return res;
        }));
    }
    addAboutUs(data) {
        return this.https.post(this.apiUrl + 'aboutUs/multiple', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            console.log('res.data=>', res.data);
            return res;
        }));
    }
    editAboutUs(data, id) {
        return this.https.put(this.apiUrl + 'aboutUs/update/' + id, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            console.log('res.data=>', res.data);
            return res;
        }));
    }
    addTeam(data) {
        return this.https.post(this.apiUrl + 'team/add', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            console.log('res.data=>', res.data);
            return res;
        }));
    }
    editTeam(data, id) {
        return this.https.put(this.apiUrl + 'team/update/' + id, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            console.log('res.data=>', res.data);
            return res;
        }));
    }
    deleteTeam(id) {
        return this.https.delete(this.apiUrl + 'team/delete/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            console.log('res.data=>', res.data);
            return res;
        }));
    }
    addContact(data) {
        return this.https.post(this.apiUrl + 'contactUs/add', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            console.log('res.data=>', res.data);
            return res;
        }));
    }
    editContactUs(id, data) {
        return this.https.put(this.apiUrl + 'contactUs/update/' + id, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            console.log('res.data=>', res.data);
            return res;
        }));
    }
    getContactById(id) {
        return this.https.get(this.apiUrl + 'contactUs/get/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            console.log('res.data=>', res.data);
            return res;
        }));
    }
    getContact() {
        return this.https.get(this.apiUrl + 'contactUs/getAll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            console.log('res.data=>', res.data);
            return res;
        }));
    }
    deleteContactUs(id) {
        return this.https.delete(this.apiUrl + 'contactUs/delete/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            console.log('res.data=>', res.data);
            return res;
        }));
    }
    addFormData(data) {
        return this.https.post(this.apiUrl + 'component/multiple', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            console.log('res.data=>', res.data);
            return res;
        }));
    }
}
LandingPageInfoServiceService.ɵfac = function LandingPageInfoServiceService_Factory(t) { return new (t || LandingPageInfoServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
LandingPageInfoServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LandingPageInfoServiceService, factory: LandingPageInfoServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingPageInfoServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map