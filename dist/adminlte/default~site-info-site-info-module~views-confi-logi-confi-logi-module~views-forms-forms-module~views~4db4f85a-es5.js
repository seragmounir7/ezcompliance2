(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~site-info-site-info-module~views-confi-logi-confi-logi-module~views-forms-forms-module~views~4db4f85a"], {
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
      "fXoL");
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
      "tk/3");

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
          value: function updateLicence(id, data) {
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
            return this.https.post(this.apiUrl + 'tradeCategory/add', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              return res;
            }));
          }
        }, {
          key: "getAllLicenceCat",
          value: function getAllLicenceCat() {
            return this.https.get(this.apiUrl + 'tradeCategory/getAll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              return res;
            }));
          }
        }, {
          key: "getLicenceByTradeCat",
          value: function getLicenceByTradeCat(id) {
            return this.https.get(this.apiUrl + 'tradeCategory/getAll/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              return res;
            }));
          }
        }, {
          key: "updateLicenceCat",
          value: function updateLicenceCat(data, id) {
            return this.https.put(this.apiUrl + 'tradeCategory/update/' + id, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              return res;
            }));
          }
        }, {
          key: "deleteLicenceCat",
          value: function deleteLicenceCat(id) {
            return this.https["delete"](this.apiUrl + 'tradeCategory/delete/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
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
          } ///project manager end/////
          ///job no/////

        }, {
          key: "getAllSite",
          value: function getAllSite() {
            return this.https.get(this.apiUrl + 'site/getAll');
          } ///job no end/////
          ///site start/////
          // 

        }, {
          key: "addSite",
          value: function addSite(data) {
            return this.https.post(this.apiUrl + 'site/add', data);
          }
        }, {
          key: "updateSite",
          value: function updateSite(id, data) {
            return this.https.put(this.apiUrl + 'site/update/' + id, data);
          }
        }, {
          key: "deleteSite",
          value: function deleteSite(id) {
            return this.https["delete"](this.apiUrl + 'site/delete/' + id);
          } ///site end/////
          ///customer strat/////

        }, {
          key: "getAllCustomer",
          value: function getAllCustomer() {
            return this.https.get(this.apiUrl + 'customer/getAll');
          }
        }, {
          key: "addCustomer",
          value: function addCustomer(data) {
            return this.https.post(this.apiUrl + 'customer/add', data);
          }
        }, {
          key: "updateCustomer",
          value: function updateCustomer(id, data) {
            return this.https.put(this.apiUrl + 'customer/update/' + id, data);
          }
        }, {
          key: "deleteCustomer",
          value: function deleteCustomer(id) {
            return this.https["delete"](this.apiUrl + 'customer/delete/' + id);
          } ///site end/////
          ///job number start/////

        }, {
          key: "getAllJobNumber",
          value: function getAllJobNumber() {
            return this.https.get(this.apiUrl + 'jobNumber/getAll');
          }
        }, {
          key: "addJobNumber",
          value: function addJobNumber(data) {
            return this.https.post(this.apiUrl + 'jobNumber/add', data);
          }
        }, {
          key: "updateJobNumber",
          value: function updateJobNumber(id, data) {
            return this.https.put(this.apiUrl + 'jobTask/update/' + id, data);
          }
        }, {
          key: "deleteJobNumber",
          value: function deleteJobNumber(id) {
            return this.https["delete"](this.apiUrl + 'jobNumber/delete/' + id);
          } ///job number end/////
          ////////////////// Start  Chemical Info///////////

        }, {
          key: "getAllChemical",
          value: function getAllChemical() {
            return this.https.get(this.apiUrl + 'chemical/getAll');
          }
        }, {
          key: "addChemical",
          value: function addChemical(data) {
            return this.https.post(this.apiUrl + 'chemical/add', data);
          }
        }, {
          key: "addMultipleChemical",
          value: function addMultipleChemical(data) {
            return this.https.post(this.apiUrl + 'chemical/add/multiple', data);
          }
        }, {
          key: "updateChemical",
          value: function updateChemical(id, data) {
            return this.https.put(this.apiUrl + 'chemical/update/' + id, data);
          }
        }, {
          key: "deleteChemical",
          value: function deleteChemical(id) {
            return this.https["delete"](this.apiUrl + 'chemical/delete/' + id);
          } /////////////////// Chemical Info End /////////
          ///Jurisdiction start/////

        }, {
          key: "addJurisdiction",
          value: function addJurisdiction(data) {
            return this.https.post(this.apiUrl + 'jurisdiction/add', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              return res;
            }));
          }
        }, {
          key: "getAllJurisdiction",
          value: function getAllJurisdiction() {
            return this.https.get(this.apiUrl + 'jurisdiction/getAll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              return res;
            }));
          }
        }, {
          key: "updateJurisdiction",
          value: function updateJurisdiction(data, id) {
            return this.https.put(this.apiUrl + 'jurisdiction/update/' + id, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              return res;
            }));
          }
        }, {
          key: "deleteJurisdiction",
          value: function deleteJurisdiction(id) {
            return this.https["delete"](this.apiUrl + 'jurisdiction/delete/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              return res;
            }));
          } ///Jurisdiction end/////
          ///Regulator start/////

        }, {
          key: "addRegulator",
          value: function addRegulator(data) {
            return this.https.post(this.apiUrl + 'regulator/add', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              return res;
            }));
          }
        }, {
          key: "getAllRegulator",
          value: function getAllRegulator() {
            return this.https.get(this.apiUrl + 'regulator/getAll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              return res;
            }));
          }
        }, {
          key: "updateRegulator",
          value: function updateRegulator(data, id) {
            return this.https.put(this.apiUrl + 'regulator/update/' + id, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              return res;
            }));
          }
        }, {
          key: "deleteRegulator",
          value: function deleteRegulator(id) {
            return this.https["delete"](this.apiUrl + 'regulator/delete/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              return res;
            }));
          } ///Regulator end/////
          ///Code Of Practice start/////

        }, {
          key: "addCode",
          value: function addCode(data) {
            return this.https.post(this.apiUrl + 'cop/add', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              return res;
            }));
          }
        }, {
          key: "getAllCode",
          value: function getAllCode() {
            return this.https.get(this.apiUrl + 'cop/getAll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              return res;
            }));
          }
        }, {
          key: "updateCode",
          value: function updateCode(data, id) {
            return this.https.put(this.apiUrl + 'cop/update/' + id, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              return res;
            }));
          }
        }, {
          key: "deleteCode",
          value: function deleteCode(id) {
            return this.https["delete"](this.apiUrl + 'cop/delete/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              return res;
            }));
          } ///Code Of Practice end/////
          ///Safety Legislation start/////

        }, {
          key: "addSafety",
          value: function addSafety(data) {
            return this.https.post(this.apiUrl + 'safetyLegislation/add', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              return res;
            }));
          }
        }, {
          key: "getAllSafety",
          value: function getAllSafety() {
            return this.https.get(this.apiUrl + 'safetyLegislation/getAll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              return res;
            }));
          }
        }, {
          key: "updateSafety",
          value: function updateSafety(data, id) {
            return this.https.put(this.apiUrl + 'safetyLegislation/update/' + id, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              return res;
            }));
          }
        }, {
          key: "deleteSafety",
          value: function deleteSafety(id) {
            return this.https["delete"](this.apiUrl + 'safetyLegislation/delete/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              return res;
            }));
          } ///Safety Legislation end/////
          //////////////// States start//////////////////

        }, {
          key: "addStates",
          value: function addStates(data) {
            return this.https.post(this.apiUrl + 'state/add', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              return res;
            }));
          }
        }, {
          key: "getAllStates",
          value: function getAllStates() {
            return this.https.get(this.apiUrl + 'state/getAll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              return res;
            }));
          }
        }, {
          key: "updateStates",
          value: function updateStates(data, id) {
            return this.https.put(this.apiUrl + 'state/update/' + id, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              return res;
            }));
          }
        }, {
          key: "deleteStates",
          value: function deleteStates(id) {
            return this.https["delete"](this.apiUrl + 'state/delete/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              return res;
            }));
          }
        }, {
          key: "getstatesById",
          value: function getstatesById(id) {
            return this.https.get(this.apiUrl + 'state/get/' + id);
          } ///////////////////End States /////////
          //////////////// START RISK LEVEL INFO//////////////////

        }, {
          key: "getAllRiskLevel",
          value: function getAllRiskLevel() {
            return this.https.get(this.apiUrl + 'riskLevel/getAll');
          }
        }, {
          key: "addRiskLevel",
          value: function addRiskLevel(data) {
            return this.https.post(this.apiUrl + 'riskLevel/add', data);
          }
        }, {
          key: "addMultipleRiskLevel",
          value: function addMultipleRiskLevel(data) {
            return this.https.post(this.apiUrl + 'riskLevel/add/multiple', data);
          }
        }, {
          key: "updateRiskLevel",
          value: function updateRiskLevel(id, data) {
            return this.https.put(this.apiUrl + 'riskLevel/update/' + id, data);
          }
        }, {
          key: "deleteRiskLevel",
          value: function deleteRiskLevel(id) {
            return this.https["delete"](this.apiUrl + 'riskLevel/delete/' + id);
          } ///////////////////End RISK LEVEL INFO /////////
          //////////////////STArT RESIDUAL LEVEL INFO/////////////////////

        }, {
          key: "getAllResidual",
          value: function getAllResidual() {
            return this.https.get(this.apiUrl + 'residualRisk/getAll');
          }
        }, {
          key: "addResidual",
          value: function addResidual(data) {
            return this.https.post(this.apiUrl + 'residualRisk/add', data);
          }
        }, {
          key: "addMultipleResidual",
          value: function addMultipleResidual(data) {
            return this.https.post(this.apiUrl + 'residualRisk/add/multiple', data);
          }
        }, {
          key: "updateResidual",
          value: function updateResidual(id, data) {
            return this.https.put(this.apiUrl + 'residualRisk/update/' + id, data);
          }
        }, {
          key: "deleteResidual",
          value: function deleteResidual(id) {
            return this.https["delete"](this.apiUrl + 'residualRisk/delete/' + id);
          } /////////////////// End RESIDUAL INFO /////////
          ///////////////// START STAFF INFO//////////////

        }, {
          key: "getAllStaff",
          value: function getAllStaff() {
            return this.https.get(this.apiUrl + 'staff/getAll');
          }
        }, {
          key: "addStaff",
          value: function addStaff(data) {
            return this.https.post(this.apiUrl + 'staff/add', data);
          }
        }, {
          key: "addMultipleStaff",
          value: function addMultipleStaff(data) {
            return this.https.post(this.apiUrl + 'staff/add/multiple', data);
          }
        }, {
          key: "updateStaff",
          value: function updateStaff(id, data) {
            return this.https.put(this.apiUrl + 'staff/update/' + id, data);
          }
        }, {
          key: "deleteStaff",
          value: function deleteStaff(id) {
            return this.https["delete"](this.apiUrl + 'staff/delete/' + id);
          } /////////////////// Chemical Info End /////////
          /////////////////// Subscription Start /////////
          // /plan/getAll

        }, {
          key: "getAllPlan",
          value: function getAllPlan() {
            return this.https.get(this.apiUrl + 'plan/getAll');
          }
        }, {
          key: "addPlan",
          value: function addPlan(data) {
            return this.https.post(this.apiUrl + 'plan/add', data);
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
//# sourceMappingURL=default~site-info-site-info-module~views-confi-logi-confi-logi-module~views-forms-forms-module~views~4db4f85a-es5.js.map