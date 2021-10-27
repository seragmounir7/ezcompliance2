(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "1i0u": function i0u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LandingPageInfoServiceService", function () {
        return LandingPageInfoServiceService;
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

      var LandingPageInfoServiceService = /*#__PURE__*/function () {
        function LandingPageInfoServiceService(https) {
          _classCallCheck(this, LandingPageInfoServiceService);

          this.https = https;
          this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
        }

        _createClass(LandingPageInfoServiceService, [{
          key: "getAppServiceById",
          value: function getAppServiceById(id) {
            return this.https.get(this.apiUrl + 'module/get/data/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              console.log('res.data=>', res.data);
              return res;
            }));
          }
        }, {
          key: "addAppService",
          value: function addAppService(data) {
            return this.https.post(this.apiUrl + 'module/multiple', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              console.log('res.data=>', res.data);
              return res;
            }));
          }
        }, {
          key: "editModule",
          value: function editModule(data, id) {
            return this.https.put(this.apiUrl + 'module/update/' + id, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              console.log('res.data=>', res.data);
              return res;
            }));
          }
        }, {
          key: "deleteModule",
          value: function deleteModule(id) {
            return this.https["delete"](this.apiUrl + 'module/delete/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              console.log('res.data=>', res.data);
              return res;
            }));
          }
        }, {
          key: "editHeader",
          value: function editHeader(id, data) {
            return this.https.put(this.apiUrl + 'mainPage/update/' + id, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              console.log('res.data=>', res.data);
              return res;
            }));
          }
        }, {
          key: "AddHeader",
          value: function AddHeader(data) {
            return this.https.post(this.apiUrl + 'mainPage/add', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              console.log('res.data=>', res.data);
              return res;
            }));
          }
        }, {
          key: "getHeaderBYId",
          value: function getHeaderBYId() {
            return this.https.get(this.apiUrl + 'mainPage/get').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              console.log('res.data=>', res.data);
              return res;
            }));
          }
        }, {
          key: "editsubModule",
          value: function editsubModule(data, id) {
            return this.https.put(this.apiUrl + 'subModule/update/' + id, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              console.log('res.data=>', res.data);
              return res;
            }));
          }
        }, {
          key: "deletesubModule",
          value: function deletesubModule(id) {
            return this.https["delete"](this.apiUrl + 'subModule/delete/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              console.log('res.data=>', res.data);
              return res;
            }));
          }
        }, {
          key: "addFAQ",
          value: function addFAQ(data) {
            return this.https.post(this.apiUrl + 'question/add', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              console.log('res.data=>', res.data);
              return res;
            }));
          }
        }, {
          key: "addSubModule",
          value: function addSubModule(data) {
            return this.https.post(this.apiUrl + 'subModule/add', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              console.log('res.data=>', res.data);
              return res;
            }));
          }
        }, {
          key: "getAboutUsById",
          value: function getAboutUsById(id) {
            return this.https.get(this.apiUrl + 'aboutUs/getAll/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              console.log('res.data=>', res.data);
              return res;
            }));
          }
        }, {
          key: "addAboutUs",
          value: function addAboutUs(data) {
            return this.https.post(this.apiUrl + 'aboutUs/multiple', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              console.log('res.data=>', res.data);
              return res;
            }));
          }
        }, {
          key: "editAboutUs",
          value: function editAboutUs(data, id) {
            return this.https.put(this.apiUrl + 'aboutUs/update/' + id, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              console.log('res.data=>', res.data);
              return res;
            }));
          }
        }, {
          key: "addTeam",
          value: function addTeam(data) {
            return this.https.post(this.apiUrl + 'team/add', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              console.log('res.data=>', res.data);
              return res;
            }));
          }
        }, {
          key: "editTeam",
          value: function editTeam(data, id) {
            return this.https.put(this.apiUrl + 'team/update/' + id, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              console.log('res.data=>', res.data);
              return res;
            }));
          }
        }, {
          key: "deleteTeam",
          value: function deleteTeam(id) {
            return this.https["delete"](this.apiUrl + 'team/delete/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              console.log('res.data=>', res.data);
              return res;
            }));
          }
        }, {
          key: "addContact",
          value: function addContact(data) {
            return this.https.post(this.apiUrl + 'contactUs/add', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              console.log('res.data=>', res.data);
              return res;
            }));
          }
        }, {
          key: "editContactUs",
          value: function editContactUs(id, data) {
            return this.https.put(this.apiUrl + 'contactUs/update/' + id, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              console.log('res.data=>', res.data);
              return res;
            }));
          }
        }, {
          key: "getContactById",
          value: function getContactById(id) {
            return this.https.get(this.apiUrl + 'contactUs/get/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              console.log('res.data=>', res.data);
              return res;
            }));
          }
        }, {
          key: "getContact",
          value: function getContact() {
            return this.https.get(this.apiUrl + 'contactUs/getAll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              console.log('res.data=>', res.data);
              return res;
            }));
          }
        }, {
          key: "deleteContactUs",
          value: function deleteContactUs(id) {
            return this.https["delete"](this.apiUrl + 'contactUs/delete/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              console.log('res.data=>', res.data);
              return res;
            }));
          }
        }, {
          key: "addFormData",
          value: function addFormData(data) {
            return this.https.post(this.apiUrl + 'component/multiple', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              console.log('res.data=>', res.data);
              return res;
            }));
          }
        }]);

        return LandingPageInfoServiceService;
      }();

      LandingPageInfoServiceService.ɵfac = function LandingPageInfoServiceService_Factory(t) {
        return new (t || LandingPageInfoServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      LandingPageInfoServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LandingPageInfoServiceService,
        factory: LandingPageInfoServiceService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingPageInfoServiceService, [{
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