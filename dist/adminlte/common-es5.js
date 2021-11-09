(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "wbBK": function wbBK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogicalFormInfoService", function () {
        return LogicalFormInfoService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");

      var LogicalFormInfoService = /*#__PURE__*/function () {
        function LogicalFormInfoService(https) {
          _classCallCheck(this, LogicalFormInfoService);

          this.https = https;
          this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
        }

        _createClass(LogicalFormInfoService, [{
          key: "getJobTaskListById",
          value: function getJobTaskListById(id) {
            return this.https.get(this.apiUrl + 'component/get/data/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              return res;
            }));
          }
        }, {
          key: "addFormData",
          value: function addFormData(data) {
            return this.https.post(this.apiUrl + 'component/multiple', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              return res;
            }));
          }
        }, {
          key: "getFormDataById",
          value: function getFormDataById(id) {
            return this.https.get(this.apiUrl + 'component/get/data/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              return res;
            }));
          }
        }, {
          key: "deleteSubComponent",
          value: function deleteSubComponent(id) {
            return this.https["delete"](this.apiUrl + 'subComponent/delete/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              return res;
            }));
          }
        }, {
          key: "editSubComponent",
          value: function editSubComponent(data, id) {
            return this.https.put(this.apiUrl + 'subComponent/update/' + id, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              return res;
            }));
          }
        }, {
          key: "uploadMultiple",
          value: function uploadMultiple(data, id) {
            return this.https.put(this.apiUrl + 'component/upload/multiple/' + id, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              return res;
            }));
          }
        }, {
          key: "addSubComponent",
          value: function addSubComponent(data) {
            return this.https.post(this.apiUrl + 'subComponent/add', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              return res;
            }));
          } //licence api///

        }, {
          key: "getAllLicence",
          value: function getAllLicence() {
            return this.https.get(this.apiUrl + 'licence/getAll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              return res;
            }));
          }
        }, {
          key: "getLicenceById",
          value: function getLicenceById(id) {
            return this.https.get(this.apiUrl + 'licence/get/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              return res;
            }));
          }
        }, {
          key: "addLicence",
          value: function addLicence(data) {
            return this.https.post(this.apiUrl + 'licence/add', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              return res;
            }));
          }
        }, {
          key: "addMultipleLicence",
          value: function addMultipleLicence(data) {
            return this.https.post(this.apiUrl + 'licence/add/multiple', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              return res;
            }));
          }
        }, {
          key: "updateLicence",
          value: function updateLicence(data, id) {
            return this.https.put(this.apiUrl + 'licence/update/' + id, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              return res;
            }));
          }
        }, {
          key: "deleteLicence",
          value: function deleteLicence(id) {
            return this.https["delete"](this.apiUrl + 'licence/delete/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              return res;
            }));
          } ///licence category crud///

        }, {
          key: "addLicenceCat",
          value: function addLicenceCat(data) {
            return this.https.post(this.apiUrl + 'licenceCategory/add', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              return res;
            }));
          }
        }, {
          key: "getAllLicenceCat",
          value: function getAllLicenceCat() {
            return this.https.get(this.apiUrl + 'licenceCategory/getAll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              return res;
            }));
          }
        }, {
          key: "updateLicenceCat",
          value: function updateLicenceCat(data, id) {
            return this.https.put(this.apiUrl + 'licenceCategory/update/' + id, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              return res;
            }));
          }
        }, {
          key: "deleteLicenceCat",
          value: function deleteLicenceCat(id) {
            return this.https["delete"](this.apiUrl + 'licenceCategory/delete/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              return res;
            }));
          } ///licence category end crud///
          //risk crud///

        }, {
          key: "addRisk",
          value: function addRisk(data) {
            return this.https.post(this.apiUrl + 'risk/add', data);
          }
        }, {
          key: "addMultipleRisk",
          value: function addMultipleRisk(data) {
            return this.https.post(this.apiUrl + 'risk/add/multiple', data);
          }
        }, {
          key: "updateRisk",
          value: function updateRisk(data, id) {
            return this.https.put(this.apiUrl + 'risk/update/' + id, data);
          }
        }, {
          key: "deleteRisk",
          value: function deleteRisk(id) {
            return this.https["delete"](this.apiUrl + 'risk/delete/' + id);
          }
        }, {
          key: "getAllRisk",
          value: function getAllRisk() {
            return this.https.get(this.apiUrl + 'risk/getAll');
          }
        }, {
          key: "getRiskById",
          value: function getRiskById(id) {
            return this.https.get(this.apiUrl + 'risk/get/' + id);
          } //add risk end
          //add job task

        }, {
          key: "addJobTask",
          value: function addJobTask(data) {
            return this.https.post(this.apiUrl + 'jobTask/add', data);
          }
        }, {
          key: "addMultipleJobTask",
          value: function addMultipleJobTask(data) {
            return this.https.post(this.apiUrl + 'jobTask/add/multiple', data);
          }
        }, {
          key: "updateJobTask",
          value: function updateJobTask(data, id) {
            return this.https.put(this.apiUrl + 'jobTask/update/' + id, data);
          }
        }, {
          key: "deleteJobTask",
          value: function deleteJobTask(id) {
            return this.https["delete"](this.apiUrl + 'jobTask/delete/' + id);
          }
        }, {
          key: "getAllJobtask",
          value: function getAllJobtask() {
            return this.https.get(this.apiUrl + 'jobTask/getAll');
          }
        }, {
          key: "getJobtaskById",
          value: function getJobtaskById(id) {
            return this.https.get(this.apiUrl + 'jobTask/get/' + id);
          } //add job task end
          //add ppe

        }, {
          key: "addPPE",
          value: function addPPE(data) {
            return this.https.post(this.apiUrl + 'ppe/add', data);
          }
        }, {
          key: "addMultiplePPE",
          value: function addMultiplePPE(data) {
            return this.https.post(this.apiUrl + 'ppe/add/multiple', data);
          }
        }, {
          key: "updatePPE",
          value: function updatePPE(data, id) {
            return this.https.put(this.apiUrl + 'ppe/update/' + id, data);
          }
        }, {
          key: "deletePPE",
          value: function deletePPE(id) {
            return this.https["delete"](this.apiUrl + 'ppe/delete/' + id);
          }
        }, {
          key: "getAllPPE",
          value: function getAllPPE() {
            return this.https.get(this.apiUrl + 'ppe/getAll');
          }
        }, {
          key: "getPPEById",
          value: function getPPEById(id) {
            return this.https.get(this.apiUrl + 'ppe/get/' + id);
          } //add ppe end
          //add Identify Hazards

        }, {
          key: "addHazards",
          value: function addHazards(data) {
            return this.https.post(this.apiUrl + 'identifyHazard/add', data);
          }
        }, {
          key: "addMultipleHazards",
          value: function addMultipleHazards(data) {
            return this.https.post(this.apiUrl + 'identifyHazard/add/multiple', data);
          }
        }, {
          key: "updateHazards",
          value: function updateHazards(data, id) {
            return this.https.put(this.apiUrl + 'identifyHazard/update/' + id, data);
          }
        }, {
          key: "deleteHazards",
          value: function deleteHazards(id) {
            return this.https["delete"](this.apiUrl + 'identifyHazard/delete/' + id);
          }
        }, {
          key: "getAllHazards",
          value: function getAllHazards() {
            return this.https.get(this.apiUrl + 'identifyHazard/getAll');
          }
        }, {
          key: "getHazardsById",
          value: function getHazardsById(id) {
            return this.https.get(this.apiUrl + 'identifyHazard/get/' + id);
          } //add Identify Hazards end
          ///add control ation required///

        }, {
          key: "addContrlActReq",
          value: function addContrlActReq(data) {
            return this.https.post(this.apiUrl + 'controlActionRequired/add', data);
          }
        }, {
          key: "addMultipleContrlActReq",
          value: function addMultipleContrlActReq(data) {
            return this.https.post(this.apiUrl + 'controlActionRequired/add/multiple', data);
          }
        }, {
          key: "updateContrlActReq",
          value: function updateContrlActReq(data, id) {
            return this.https.put(this.apiUrl + 'controlActionRequired/update/' + id, data);
          }
        }, {
          key: "deleteContrlActReq",
          value: function deleteContrlActReq(id) {
            return this.https["delete"](this.apiUrl + 'controlActionRequired/delete/' + id);
          }
        }, {
          key: "getAllContrlActReq",
          value: function getAllContrlActReq() {
            return this.https.get(this.apiUrl + 'controlActionRequired/getAll');
          }
        }, {
          key: "getContrlActReqById",
          value: function getContrlActReqById(id) {
            return this.https.get(this.apiUrl + 'controlActionRequired/get/' + id);
          } ///add control ation required end///
          ////code of practice///

        }, {
          key: "addCOP",
          value: function addCOP(data) {
            return this.https.post(this.apiUrl + 'cop/add', data);
          }
        }, {
          key: "addMultipleCOP",
          value: function addMultipleCOP(data) {
            return this.https.post(this.apiUrl + 'cop/add/multiple', data);
          }
        }, {
          key: "updateCOP",
          value: function updateCOP(data, id) {
            return this.https.put(this.apiUrl + 'cop/update/' + id, data);
          }
        }, {
          key: "deleteCOP",
          value: function deleteCOP(id) {
            return this.https["delete"](this.apiUrl + 'cop/delete/' + id);
          }
        }, {
          key: "getAllCOP",
          value: function getAllCOP() {
            return this.https.get(this.apiUrl + 'cop/getAll');
          }
        }, {
          key: "getCOPById",
          value: function getCOPById(id) {
            return this.https.get(this.apiUrl + 'cop/get/' + id);
          } ////code of practice end///
          ///project manager/////

        }, {
          key: "addProjectMang",
          value: function addProjectMang(data) {
            return this.https.post(this.apiUrl + 'projectManager/add', data);
          }
        }, {
          key: "addMultipleProjectManager",
          value: function addMultipleProjectManager(data) {
            return this.https.post(this.apiUrl + 'projectManager/add/multiple', data);
          }
        }, {
          key: "updateProjectMang",
          value: function updateProjectMang(data, id) {
            return this.https.put(this.apiUrl + 'projectManager/update/' + id, data);
          }
        }, {
          key: "deleteProjectMang",
          value: function deleteProjectMang(id) {
            return this.https["delete"](this.apiUrl + 'projectManager/delete/' + id);
          }
        }, {
          key: "getAllProjectMang",
          value: function getAllProjectMang() {
            return this.https.get(this.apiUrl + 'projectManager/getAll');
          }
        }, {
          key: "getProjectMangById",
          value: function getProjectMangById(id) {
            return this.https.get(this.apiUrl + 'projectManager/get/' + id);
          }
        }]);

        return LogicalFormInfoService;
      }();

      LogicalFormInfoService.ɵfac = function LogicalFormInfoService_Factory(t) {
        return new (t || LogicalFormInfoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      LogicalFormInfoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LogicalFormInfoService,
        factory: LogicalFormInfoService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogicalFormInfoService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map