(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "wbBK":
/*!*************************************************************!*\
  !*** ./src/app/utils/services/logical-form-info.service.ts ***!
  \*************************************************************/
/*! exports provided: LogicalFormInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogicalFormInfoService", function() { return LogicalFormInfoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");





class LogicalFormInfoService {
    constructor(https) {
        this.https = https;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
    }
    getJobTaskListById(id) {
        return this.https.get(this.apiUrl + 'component/get/data/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            return res;
        }));
    }
    addFormData(data) {
        return this.https.post(this.apiUrl + 'component/multiple', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            return res;
        }));
    }
    getFormDataById(id) {
        return this.https.get(this.apiUrl + 'component/get/data/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            return res;
        }));
    }
    deleteSubComponent(id) {
        return this.https.delete(this.apiUrl + 'subComponent/delete/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            return res;
        }));
    }
    editSubComponent(data, id) {
        return this.https.put(this.apiUrl + 'subComponent/update/' + id, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            return res;
        }));
    }
    uploadMultiple(data, id) {
        return this.https
            .put(this.apiUrl + 'component/upload/multiple/' + id, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            return res;
        }));
    }
    addSubComponent(data) {
        return this.https.post(this.apiUrl + 'subComponent/add', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            return res;
        }));
    }
    //licence api///
    getAllLicence() {
        return this.https.get(this.apiUrl + 'licence/getAll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            return res;
        }));
    }
    getLicenceById(id) {
        return this.https.get(this.apiUrl + 'licence/get/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            return res;
        }));
    }
    addLicence(data) {
        return this.https.post(this.apiUrl + 'licence/add', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            return res;
        }));
    }
    addMultipleLicence(data) {
        return this.https.post(this.apiUrl + 'licence/add/multiple', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            return res;
        }));
    }
    updateLicence(data, id) {
        return this.https.put(this.apiUrl + 'licence/update/' + id, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            return res;
        }));
    }
    deleteLicence(id) {
        return this.https.delete(this.apiUrl + 'licence/delete/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            return res;
        }));
    }
    ///licence category crud///
    addLicenceCat(data) {
        return this.https.post(this.apiUrl + 'licenceCategory/add', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            return res;
        }));
    }
    getAllLicenceCat() {
        return this.https.get(this.apiUrl + 'licenceCategory/getAll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            return res;
        }));
    }
    updateLicenceCat(data, id) {
        return this.https.put(this.apiUrl + 'licenceCategory/update/' + id, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            return res;
        }));
    }
    deleteLicenceCat(id) {
        return this.https.delete(this.apiUrl + 'licenceCategory/delete/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            return res;
        }));
    }
    ///licence category end crud///
    //risk crud///
    addRisk(data) {
        return this.https.post(this.apiUrl + 'risk/add', data);
    }
    addMultipleRisk(data) {
        return this.https.post(this.apiUrl + 'risk/add/multiple', data);
    }
    updateRisk(data, id) {
        return this.https.put(this.apiUrl + 'risk/update/' + id, data);
    }
    deleteRisk(id) {
        return this.https.delete(this.apiUrl + 'risk/delete/' + id);
    }
    getAllRisk() {
        return this.https.get(this.apiUrl + 'risk/getAll');
    }
    getRiskById(id) {
        return this.https.get(this.apiUrl + 'risk/get/' + id);
    }
    //add risk end
    //add job task
    addJobTask(data) {
        return this.https.post(this.apiUrl + 'jobTask/add', data);
    }
    addMultipleJobTask(data) {
        return this.https.post(this.apiUrl + 'jobTask/add/multiple', data);
    }
    updateJobTask(data, id) {
        return this.https.put(this.apiUrl + 'jobTask/update/' + id, data);
    }
    deleteJobTask(id) {
        return this.https.delete(this.apiUrl + 'jobTask/delete/' + id);
    }
    getAllJobtask() {
        return this.https.get(this.apiUrl + 'jobTask/getAll');
    }
    getJobtaskById(id) {
        return this.https.get(this.apiUrl + 'jobTask/get/' + id);
    }
    //add job task end
    //add ppe
    addPPE(data) {
        return this.https.post(this.apiUrl + 'ppe/add', data);
    }
    addMultiplePPE(data) {
        return this.https.post(this.apiUrl + 'ppe/add/multiple', data);
    }
    updatePPE(data, id) {
        return this.https.put(this.apiUrl + 'ppe/update/' + id, data);
    }
    deletePPE(id) {
        return this.https.delete(this.apiUrl + 'ppe/delete/' + id);
    }
    getAllPPE() {
        return this.https.get(this.apiUrl + 'ppe/getAll');
    }
    getPPEById(id) {
        return this.https.get(this.apiUrl + 'ppe/get/' + id);
    }
    //add ppe end
    //add Identify Hazards
    addHazards(data) {
        return this.https.post(this.apiUrl + 'identifyHazard/add', data);
    }
    addMultipleHazards(data) {
        return this.https.post(this.apiUrl + 'identifyHazard/add/multiple', data);
    }
    updateHazards(data, id) {
        return this.https.put(this.apiUrl + 'identifyHazard/update/' + id, data);
    }
    deleteHazards(id) {
        return this.https.delete(this.apiUrl + 'identifyHazard/delete/' + id);
    }
    getAllHazards() {
        return this.https.get(this.apiUrl + 'identifyHazard/getAll');
    }
    getHazardsById(id) {
        return this.https.get(this.apiUrl + 'identifyHazard/get/' + id);
    }
    //add Identify Hazards end
    ///add control ation required///
    addContrlActReq(data) {
        return this.https.post(this.apiUrl + 'controlActionRequired/add', data);
    }
    addMultipleContrlActReq(data) {
        return this.https.post(this.apiUrl + 'controlActionRequired/add/multiple', data);
    }
    updateContrlActReq(data, id) {
        return this.https.put(this.apiUrl + 'controlActionRequired/update/' + id, data);
    }
    deleteContrlActReq(id) {
        return this.https.delete(this.apiUrl + 'controlActionRequired/delete/' + id);
    }
    getAllContrlActReq() {
        return this.https.get(this.apiUrl + 'controlActionRequired/getAll');
    }
    getContrlActReqById(id) {
        return this.https.get(this.apiUrl + 'controlActionRequired/get/' + id);
    }
    ///add control ation required end///
    ////code of practice///
    addCOP(data) {
        return this.https.post(this.apiUrl + 'cop/add', data);
    }
    addMultipleCOP(data) {
        return this.https.post(this.apiUrl + 'cop/add/multiple', data);
    }
    updateCOP(data, id) {
        return this.https.put(this.apiUrl + 'cop/update/' + id, data);
    }
    deleteCOP(id) {
        return this.https.delete(this.apiUrl + 'cop/delete/' + id);
    }
    getAllCOP() {
        return this.https.get(this.apiUrl + 'cop/getAll');
    }
    getCOPById(id) {
        return this.https.get(this.apiUrl + 'cop/get/' + id);
    }
    ////code of practice end///
    ///project manager/////
    addProjectMang(data) {
        return this.https.post(this.apiUrl + 'projectManager/add', data);
    }
    addMultipleProjectManager(data) {
        return this.https.post(this.apiUrl + 'projectManager/add/multiple', data);
    }
    updateProjectMang(data, id) {
        return this.https.put(this.apiUrl + 'projectManager/update/' + id, data);
    }
    deleteProjectMang(id) {
        return this.https.delete(this.apiUrl + 'projectManager/delete/' + id);
    }
    getAllProjectMang() {
        return this.https.get(this.apiUrl + 'projectManager/getAll');
    }
    getProjectMangById(id) {
        return this.https.get(this.apiUrl + 'projectManager/get/' + id);
    }
}
LogicalFormInfoService.ɵfac = function LogicalFormInfoService_Factory(t) { return new (t || LogicalFormInfoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
LogicalFormInfoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LogicalFormInfoService, factory: LogicalFormInfoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogicalFormInfoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map