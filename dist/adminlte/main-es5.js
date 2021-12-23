(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+3ge": function ge(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DynamicFormsService", function () {
        return DynamicFormsService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");

      var DynamicFormsService = /*#__PURE__*/function () {
        function DynamicFormsService(https) {
          _classCallCheck(this, DynamicFormsService);

          this.https = https;
          this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
          this.homebarTitle = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
          this.formIdEdit = '';
          this.formType = '';
          this.formTitle = '';
          this.formNameRecieved = '';
          this.categoryNameRecieved = '';
        }

        _createClass(DynamicFormsService, [{
          key: "login",
          value: function login(data) {
            return this.https.post(this.apiUrl + 'authentication/login', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              console.log('res.data.accessToken', res.data.accessToken);

              if (res.data.accessToken) {
                sessionStorage.setItem('accessToken', res.data.accessToken);
              }

              return res;
            }));
          }
        }, {
          key: "addCategory",
          value: function addCategory(data) {
            return this.https.post(this.apiUrl + 'category/add', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              console.log('res.data=>', res.data);
              return res;
            }));
          }
        }, {
          key: "deleteCategory",
          value: function deleteCategory(id) {
            return this.https["delete"](this.apiUrl + 'category/delete/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              console.log('res.data=>', res.data);
              return res;
            }));
          }
        }, {
          key: "editCategory",
          value: function editCategory(data, id) {
            return this.https.put(this.apiUrl + 'category/update/' + id, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              console.log('res.data=>', res.data);
              return res;
            }));
          }
        }, {
          key: "getAllCategory",
          value: function getAllCategory() {
            return this.https.get(this.apiUrl + 'category/getAll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              console.log('res.data=>', res.data);
              return res;
            }));
          }
        }, {
          key: "getCategoryById",
          value: function getCategoryById(id) {
            return this.https.get(this.apiUrl + 'category/get/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              console.log('res.data=>', res.data);
              return res;
            }));
          }
        }, {
          key: "addForm",
          value: function addForm(data) {
            return this.https.post(this.apiUrl + 'form/add', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              console.log('res.data=>', res.data);
              return res;
            }));
          }
        }, {
          key: "deleteForm",
          value: function deleteForm(id) {
            return this.https["delete"](this.apiUrl + 'form/delete/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              console.log('res.data=>', res.data);
              return res;
            }));
          }
        }, {
          key: "editForm",
          value: function editForm(data, id) {
            return this.https.put(this.apiUrl + 'form/update/' + id, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              console.log('res.data=>', res.data);
              return res;
            }));
          }
        }, {
          key: "getAllForm",
          value: function getAllForm() {
            return this.https.get(this.apiUrl + 'form/getAll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              console.log('res.data=>', res.data);
              return res;
            }));
          }
        }, {
          key: "getFormById",
          value: function getFormById(id) {
            return this.https.get(this.apiUrl + 'form/get/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              console.log('res.data=>', res.data);
              return res;
            }));
          }
        }, {
          key: "addFormBuilder",
          value: function addFormBuilder(data) {
            return this.https.post(this.apiUrl + 'formBuilder/add', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              console.log('res.data=>', res.data);
              return res;
            }));
          }
        }, {
          key: "deleteFormBuilder",
          value: function deleteFormBuilder(id) {
            return this.https["delete"](this.apiUrl + 'formBuilder/delete/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              console.log('res.data=>', res.data);
              return res;
            }));
          }
        }, {
          key: "editFormBuilder",
          value: function editFormBuilder(data, id) {
            return this.https.put(this.apiUrl + 'formBuilder/update/' + id, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              console.log('res.data=>', res.data);
              return res;
            }));
          }
        }, {
          key: "getFormBuilderById",
          value: function getFormBuilderById(id) {
            return this.https.get(this.apiUrl + 'formBuilder/get/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              console.log('res.data=>', res.data);
              return res;
            }));
          }
        }, {
          key: "addMyForm",
          value: function addMyForm(formNameRecieved, categoryNameRecieved) {
            this.formNameRecieved = formNameRecieved;
            this.categoryNameRecieved = categoryNameRecieved;
          }
        }, {
          key: "getFormIdType",
          value: function getFormIdType() {}
        }]);

        return DynamicFormsService;
      }();

      DynamicFormsService.ɵfac = function DynamicFormsService_Factory(t) {
        return new (t || DynamicFormsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
      };

      DynamicFormsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: DynamicFormsService,
        factory: DynamicFormsService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DynamicFormsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "/s1f": function s1f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
        return MainComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./header/header.component */
      "WnE0");
      /* harmony import */


      var _menu_sidebar_menu_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./menu-sidebar/menu-sidebar.component */
      "8BfR");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./footer/footer.component */
      "hlkJ");

      var _c0 = ["contentWrapper"];

      var MainComponent = /*#__PURE__*/function () {
        function MainComponent(renderer) {
          _classCallCheck(this, MainComponent);

          this.renderer = renderer;
          this.sidebarMenuOpened = true;
          this.logoUrl = 'assets/img/whs-icon.svg';
        }

        _createClass(MainComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.renderer.removeClass(document.querySelector('app-root'), 'login-page');
            this.renderer.removeClass(document.querySelector('app-root'), 'register-page');
          }
        }, {
          key: "mainSidebarHeight",
          value: function mainSidebarHeight(height) {// this.renderer.setStyle(
            //   this.contentWrapper.nativeElement,
            //   'min-height',
            //   height - 114 + 'px'
            // );
          }
        }, {
          key: "toggleMenuSidebar",
          value: function toggleMenuSidebar() {
            if (this.sidebarMenuOpened) {
              this.logoUrl = 'assets/img/23.svg';
              this.renderer.removeClass(document.querySelector('app-root'), 'sidebar-open');
              this.renderer.addClass(document.querySelector('app-root'), 'sidebar-collapse');
              this.sidebarMenuOpened = false;
            } else {
              this.logoUrl = 'assets/img/whs-icon.svg';
              this.renderer.removeClass(document.querySelector('app-root'), 'sidebar-collapse');
              this.renderer.addClass(document.querySelector('app-root'), 'sidebar-open');
              this.sidebarMenuOpened = true;
            }
          }
        }]);

        return MainComponent;
      }();

      MainComponent.ɵfac = function MainComponent_Factory(t) {
        return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
      };

      MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MainComponent,
        selectors: [["app-main"]],
        viewQuery: function MainComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentWrapper = _t.first);
          }
        },
        decls: 9,
        vars: 1,
        consts: [[1, "wrapper"], [3, "toggleMenuSidebar"], [3, "logoUrl", "mainSidebarHeight"], [1, "content-wrapper"], ["contentWrapper", ""], [1, "control-sidebar", "control-sidebar-dark"], ["id", "sidebar-overlay", 3, "click"]],
        template: function MainComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-header", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toggleMenuSidebar", function MainComponent_Template_app_header_toggleMenuSidebar_1_listener() {
              return ctx.toggleMenuSidebar();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-menu-sidebar", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mainSidebarHeight", function MainComponent_Template_app_menu_sidebar_mainSidebarHeight_2_listener($event) {
              return ctx.mainSidebarHeight($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "aside", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_Template_div_click_8_listener() {
              return ctx.toggleMenuSidebar();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("logoUrl", ctx.logoUrl);
          }
        },
        directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _menu_sidebar_menu_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["MenuSidebarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
        styles: ["[_nghost-%COMP%] {\n  min-width: 100vw;\n  min-height: 100vh;\n}\n\n.content-wrapper[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 114px);\n  height: 100%;\n  padding: 1rem;\n}\n\n  .cdk-overlay-container {\n  z-index: 9999 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsK0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0Usd0JBQUE7QUFDRiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIG1pbi13aWR0aDogMTAwdnc7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5jb250ZW50LXdyYXBwZXIge1xyXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMTRweCk7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuY2RrLW92ZXJsYXktY29udGFpbmVyIHtcclxuICB6LWluZGV4OiA5OTk5ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-main',
            templateUrl: './main.component.html',
            styleUrls: ['./main.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }];
        }, {
          contentWrapper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['contentWrapper', {
              "static": false
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    0: function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\acceelgrowth2\WHS\ADMIN\ajinkyaAdmin011121\ajinkyaAdmin011121\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0SJk": function SJk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SpinnerInterceptor", function () {
        return SpinnerInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-spinner */
      "7g+E");

      var SpinnerInterceptor = /*#__PURE__*/function () {
        function SpinnerInterceptor(spinner) {
          _classCallCheck(this, SpinnerInterceptor);

          this.spinner = spinner;
        }

        _createClass(SpinnerInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this = this;

            //console.log('spinner====================>', request.url);
            this.spinner.show();
            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (event) {
              if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                // console.log('spinnerhide====================>', request.url);
                _this.spinner.hide();
              }

              return event;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
              if (err) {
                _this.spinner.hide();
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }]);

        return SpinnerInterceptor;
      }();

      SpinnerInterceptor.ɵfac = function SpinnerInterceptor_Factory(t) {
        return new (t || SpinnerInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]));
      };

      SpinnerInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: SpinnerInterceptor,
        factory: SpinnerInterceptor.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "1tPq": function tPq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormsComponent", function () {
        return FormsComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/paginator */
      "5QHs");
      /* harmony import */


      var _add_form_add_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-form/add-form.component */
      "5JI/");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/table */
      "OaSA");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/sort */
      "LUZP");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-spinner */
      "7g+E");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var src_app_utils_services_dynamic_forms_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/utils/services/dynamic-forms.service */
      "+3ge");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "jMqV");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");

      function FormsComponent_th_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function FormsComponent_td_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r12.index);
        }
      }

      function FormsComponent_th_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Form Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function FormsComponent_td_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r13 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r13.title);
        }
      }

      function FormsComponent_th_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Form Frequency");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function FormsComponent_td_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "select", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function FormsComponent_td_17_Template_select_change_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);

            var element_r14 = ctx.$implicit;

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r15.frequencyChange($event, element_r14);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Daily");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Weekly");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Monthly");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "option", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Quaterly");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Half yearly");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "option", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Yearly");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "option", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Once Off");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r14 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", element_r14.frequency);
        }
      }

      function FormsComponent_th_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Disable/Enable");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function FormsComponent_td_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-slide-toggle", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function FormsComponent_td_20_Template_mat_slide_toggle_change_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);

            var element_r17 = ctx.$implicit;

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r18.slideChanged($event, element_r17);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", element_r17.enable);
        }
      }

      function FormsComponent_th_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function FormsComponent_td_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormsComponent_td_23_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);

            var element_r20 = ctx.$implicit;

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r21.editForm(element_r20);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormsComponent_td_23_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);

            var element_r20 = ctx.$implicit;

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r23.viewForm(element_r20);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "visibility");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormsComponent_td_23_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);

            var element_r20 = ctx.$implicit;

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r24["delete"](element_r20);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function FormsComponent_tr_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 29);
        }
      }

      function FormsComponent_tr_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 30);
        }
      }

      var _c0 = function _c0() {
        return [20];
      };

      var FormsComponent = /*#__PURE__*/function () {
        function FormsComponent(dialog, spinner, router, fb, dynamicFormServise) {
          _classCallCheck(this, FormsComponent);

          this.dialog = dialog;
          this.spinner = spinner;
          this.router = router;
          this.fb = fb;
          this.dynamicFormServise = dynamicFormServise;
          this.ELEMENT_DATA = []; /////////////mat table////////////////

          this.displayedColumns = ['index', 'formName', 'formFrequency', 'Disable/Enable', 'edit'];
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.ELEMENT_DATA);
          this.page = 1;
          this.pageSize = 10;
          this.collectionSize = 10;
          this.allForms = [];
          this.formName = '';
          this.form = '';
        }

        _createClass(FormsComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.dataSource.paginator = this.paginator;
          }
        }, {
          key: "addDyForm",
          value: function addDyForm() {
            var _this2 = this;

            console.log('jjjj');
            var dialogRef = this.dialog.open(_add_form_add_form_component__WEBPACK_IMPORTED_MODULE_3__["AddFormComponent"], {
              width: "700px",
              data: ''
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result == "true") {
                _this2.getAllForms();
              }

              console.log("The dialog was closed");
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            sessionStorage.setItem('formId', '');
            sessionStorage.setItem('type', '');
            sessionStorage.setItem('formTitle', '');
            sessionStorage.setItem('frequency', '');
            this.addForm = this.fb.group({
              formName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              frequency: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
            });
            this.getAllForms();
            this.dynamicFormServise.homebarTitle.next('Dynamic Forms List');
          }
        }, {
          key: "getAllForms",
          value: function getAllForms() {
            var _this3 = this;

            this.spinner.show();
            this.dynamicFormServise.getAllForm().subscribe(function (resF) {
              // this.allForms=res.data;
              console.log('allForms', resF); // console.log('allForms', resF.data);

              _this3.allForms = resF.data;
              var data = resF.data;
              data.forEach(function (element, index) {
                element.index = index + 1; //adding index
              });
              _this3.ELEMENT_DATA = data;
              _this3.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this3.ELEMENT_DATA);
              _this3.dataSource.paginator = _this3.paginator;
              _this3.dataSource.sort = _this3.sort;

              _this3.spinner.hide();
            });
          }
        }, {
          key: "slideChanged",
          value: function slideChanged(e, form) {
            var data = {
              title: form.title,
              htmlObject: form.htmlObject,
              enable: e.checked,
              frequency: form.frequency
            };
            this.dynamicFormServise.editForm(data, form._id).subscribe(function (res) {
              if (e.checked) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                  title: 'Form Enabled successfully',
                  showConfirmButton: false,
                  timer: 1200
                });
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                  title: 'Form Disable successfully',
                  showConfirmButton: false,
                  timer: 1200
                });
              }
            });
          }
        }, {
          key: "delete",
          value: function _delete(item) {
            var _this4 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
              title: 'Are you sure?',
              text: "Do you want to delete \"".concat(item.title, "\"?"),
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#00B96F',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, Delete!'
            }).then(function (result) {
              if (result.value) {
                _this4.dynamicFormServise.deleteForm(item._id).subscribe(function (res) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    title: 'Form Deleted successfully',
                    showConfirmButton: false,
                    timer: 1200
                  });

                  _this4.getAllForms();
                });
              }
            });
          } // addFormopen(content) {
          //   this.modalService
          //     .open(content, { ariaLabelledBy: 'modal-basic-title' })
          //     .result.then(
          //       (result) => {
          //         console.log(result);
          //         sessionStorage.setItem('type', 'add');
          //         sessionStorage.setItem(
          //           'formTitle',
          //           this.addForm.get('formName').value
          //         );
          //         sessionStorage.setItem(
          //           'frequency',
          //           this.addForm.get('frequency').value
          //         );
          //         // this.dynamicFormServise.formTitle = this.addForm.get(
          //         //   'formName'
          //         // ).value;
          //         // this.dynamicFormServise.formType = 'add';
          //         this.router.navigate(['/admin/dynamicForm']);
          //         // this.dynamicFormServise.addForm(data).subscribe((res)=>{
          //         //   console.log(res);
          //         //   this.getAllForms();
          //         //   this.addForm.reset();
          //         // })
          //         this.closeResult = `Closed with: ${result}`;
          //       },
          //       (reason) => {
          //         this.addForm.reset();
          //         this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          //       }
          //     );
          // }

        }, {
          key: "editForm",
          value: function editForm(form) {
            console.log(form);
            sessionStorage.setItem('formId', form._id);
            sessionStorage.setItem('type', 'edit');
            sessionStorage.setItem('formTitle', form.title);
            sessionStorage.setItem('frequency', form.frequency); // this.dynamicFormServise.formIdEdit = form._id;
            // this.dynamicFormServise.formType = 'edit';
            // this.dynamicFormServise.formTitle = form.title;

            this.router.navigate(['/admin/dynamicForm']); //   this.router.navigate(['/admin/dynamicForm'],
            //   {queryParams: {  type:'edit',formId:form._id, formName: form.title}});
          }
        }, {
          key: "viewForm",
          value: function viewForm(form) {
            console.log('view', form); // let data={
            //   type:'view',formId:form._id, formName: form.title
            // }

            sessionStorage.setItem('formId', form._id);
            sessionStorage.setItem('type', 'view');
            sessionStorage.setItem('formTitle', form.title);
            sessionStorage.setItem('frequency', form.frequency); // this.dynamicFormServise.formIdEdit = form._id;
            // this.dynamicFormServise.formType = 'view';
            // this.dynamicFormServise.formTitle = form.title;
            // this.router.navigate(['/admin/dynamicForm'],
            // {queryParams: { type:'view',formId:form._id, formName: form.title}});

            this.router.navigate(['/admin/dynamicForm']);
          }
        }, {
          key: "frequencyChange",
          value: function frequencyChange(e, form) {
            var _this5 = this;

            console.log(e.target.value);
            var data = {
              title: form.title,
              htmlObject: form.htmlObject,
              enable: form.enable,
              frequency: e.target.value
            };
            this.dynamicFormServise.editForm(data, form._id).subscribe(function (res) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Form Frequency Changed successfully');

              _this5.getAllForms();
            });
          }
        }]);

        return FormsComponent;
      }();

      FormsComponent.ɵfac = function FormsComponent_Factory(t) {
        return new (t || FormsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_utils_services_dynamic_forms_service__WEBPACK_IMPORTED_MODULE_10__["DynamicFormsService"]));
      };

      FormsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: FormsComponent,
        selectors: [["app-forms"]],
        viewQuery: function FormsComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"], true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          }
        },
        decls: 27,
        vars: 5,
        consts: [[1, "col", "ml-2", "pt-3"], [1, "col", "ml-2", "mb-2"], [1, "btn", "btn-outline-primary", "mt-1", "mr-2", "float-right", 3, "click"], [1, "fas", "fa-folder-plus", "mr-2"], [1, ""], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "index"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "formName"], ["matColumnDef", "formFrequency"], ["matColumnDef", "Disable/Enable"], ["matColumnDef", "edit"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", "aria-label", "Select page of periodic elements", 3, "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "flex-start"], ["aria-label", "Default select example", 1, "form-select", "form-control", 3, "value", "change"], ["value", "daily"], ["value", "weekly"], ["value", "quaterly"], ["value", "halfYearly"], ["value", "yearly"], ["value", "onceOff"], ["color", "primary", 3, "checked", "change"], ["mat-icon-button", "", "aria-label", "Example icon button with a delete icon", 1, "mr-2", 3, "click"], ["mat-icon-button", "", "aria-label", "Example icon button with a delete icon", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]],
        template: function FormsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Dynamic Forms List");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormsComponent_Template_button_click_4_listener() {
              return ctx.addDyForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Add Form ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "table", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](9, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, FormsComponent_th_10_Template, 2, 0, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, FormsComponent_td_11_Template, 2, 1, "td", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](12, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, FormsComponent_th_13_Template, 2, 0, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, FormsComponent_td_14_Template, 3, 1, "td", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](15, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, FormsComponent_th_16_Template, 2, 0, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, FormsComponent_td_17_Template, 16, 1, "td", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](18, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, FormsComponent_th_19_Template, 2, 0, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, FormsComponent_td_20_Template, 2, 1, "td", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](21, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, FormsComponent_th_22_Template, 2, 0, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, FormsComponent_td_23_Template, 10, 0, "td", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, FormsComponent_tr_24_Template, 1, 0, "tr", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, FormsComponent_tr_25_Template, 1, 0, "tr", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "mat-paginator", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0));
          }
        },
        directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCell"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_x"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__["MatSlideToggle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRow"]],
        styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZm9ybXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FBQ0YiLCJmaWxlIjoiZm9ybXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLy8gOjpuZy1kZWVwIC5tYXQtc29ydC1oZWFkZXItY29udGFpbmVyIHtcclxuLy8gICBtYXJnaW4tbGVmdDogNDclICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuLy8gLnNlbGVjdHtcclxuLy8gICB3aWR0aDo1MCU7XHJcbi8vIH1cclxuLy8gLnRhYmxlIHRkLFxyXG4vLyAudGFibGUgdGgge1xyXG4vLyAgIHBhZGRpbmc6IDAuNzVyZW07XHJcbi8vICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuLy8gICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjtcclxuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vIH1cclxuXHJcbi8vIC5tb2RhbC1oZWFkZXIudGl0ZWwge1xyXG4vLyAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbi8vICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgcGFkZGluZzogMXJlbTtcclxuLy8gICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZWNlZjtcclxuLy8gICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiBjYWxjKDAuM3JlbSAtIDFweCk7XHJcbi8vICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IGNhbGMoMC4zcmVtIC0gMXB4KTtcclxuLy8gfVxyXG5cclxuLy8gLm1vZGFsLWJvZHkuZGVsZXRlYm9keSB7XHJcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgIGZvbnQtc2l6ZTogMTZweDtcclxuLy8gfVxyXG4vLyAubW9kYWwtZm9vdGVyLmZvb3RlciB7XHJcbi8vICAgZGlzcGxheTogZmxleDtcclxuLy8gICBmbGV4LXdyYXA6IHdyYXA7XHJcbi8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICBwYWRkaW5nOiAwLjc1cmVtO1xyXG4vLyAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTllY2VmO1xyXG4vLyAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiBjYWxjKDAuM3JlbSAtIDFweCk7XHJcbi8vICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogY2FsYygwLjNyZW0gLSAxcHgpO1xyXG4vLyB9XHJcblxyXG4vLyA6Om5nLWRlZXAubW9kYWwtY29udGVudCB7XHJcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuLy8gICB3aWR0aDogMTAwJTtcclxuLy8gICBwb2ludGVyLWV2ZW50czogYXV0bztcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4vLyAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbi8vICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbi8vICAgYm94LXNoYWRvdzogMCAwLjI1cmVtIDAuNXJlbSByZ2IoMCAwIDAgLyA1MCUpO1xyXG4vLyAgIG91dGxpbmU6IDA7XHJcbi8vIH1cclxuXHJcbi8vIC5pbnB1dGFsaWduIHtcclxuLy8gICBtYXJnaW4tbGVmdDogNCU7XHJcbi8vICAgbWF4LXdpZHRoOiA0MzBweDtcclxuLy8gfVxyXG4vLyAubW9kYWxoZWFkZXIge1xyXG4vLyAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbi8vICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vIH1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FormsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-forms',
            templateUrl: './forms.component.html',
            styleUrls: ['./forms.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
          }, {
            type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]
          }, {
            type: src_app_utils_services_dynamic_forms_service__WEBPACK_IMPORTED_MODULE_10__["DynamicFormsService"]
          }];
        }, {
          sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"]]
          }],
          paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]]
          }]
        });
      })();
      /***/

    },

    /***/
    "2Tyk": function Tyk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserDropdownMenuComponent", function () {
        return UserDropdownMenuComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var src_app_utils_services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/utils/services/app.service */
      "VLJ8");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      var _c0 = ["dropdownMenu"];

      var _c1 = function _c1() {
        return ["/profile"];
      };

      var UserDropdownMenuComponent = /*#__PURE__*/function () {
        function UserDropdownMenuComponent(elementRef, renderer, appService, router) {
          _classCallCheck(this, UserDropdownMenuComponent);

          this.elementRef = elementRef;
          this.renderer = renderer;
          this.appService = appService;
          this.router = router;
          this.userName = '';
          this.phoneNo = '';
        }

        _createClass(UserDropdownMenuComponent, [{
          key: "clickout",
          value: function clickout(event) {
            if (!this.elementRef.nativeElement.contains(event.target)) {
              this.hideDropdownMenu();
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.user = this.appService.user;
            this.userName = sessionStorage.getItem('userName');
            this.phoneNo = sessionStorage.getItem('phoneNo');
          }
        }, {
          key: "toggleDropdownMenu",
          value: function toggleDropdownMenu() {
            if (this.dropdownMenu.nativeElement.classList.contains('show')) {
              this.hideDropdownMenu();
            } else {
              this.showDropdownMenu();
            }
          }
        }, {
          key: "showDropdownMenu",
          value: function showDropdownMenu() {
            this.renderer.addClass(this.dropdownMenu.nativeElement, 'show');
          }
        }, {
          key: "hideDropdownMenu",
          value: function hideDropdownMenu() {
            this.renderer.removeClass(this.dropdownMenu.nativeElement, 'show');
          }
        }, {
          key: "logout",
          value: function logout() {
            //  this.appService.logout();
            console.log('logout');
            sessionStorage.removeItem('accessToken');
            sessionStorage.removeItem('userName');
            sessionStorage.removeItem('phoneNo');
            window.location.reload(); // this.router.navigate['/'];
          }
        }]);

        return UserDropdownMenuComponent;
      }();

      UserDropdownMenuComponent.ɵfac = function UserDropdownMenuComponent_Factory(t) {
        return new (t || UserDropdownMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      UserDropdownMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UserDropdownMenuComponent,
        selectors: [["app-user-dropdown-menu"]],
        viewQuery: function UserDropdownMenuComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dropdownMenu = _t.first);
          }
        },
        hostBindings: function UserDropdownMenuComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserDropdownMenuComponent_click_HostBindingHandler($event) {
              return ctx.clickout($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
          }
        },
        decls: 16,
        vars: 4,
        consts: [[1, "nav-item", "dropdown", "user-menu"], ["data-toggle", "dropdown", 1, "nav-link", "dropdown-toggle", 3, "click"], ["src", "./assets/img/avatar.png", "alt", "User Image", 1, "user-image", "img-circle", "elevation-2"], [1, "dropdown-menu", "dropdown-menu-lg", "dropdown-menu-right"], ["dropdownMenu", ""], [1, "user-header", "bg-primary"], ["src", "./assets/img/avatar.png", "alt", "User Image", 1, "img-circle", "elevation-2"], [1, "user-footer"], [1, "btn", "btn-default", "btn-flat", 3, "routerLink"], [1, "btn", "btn-default", "btn-flat", "float-right", 3, "click"]],
        template: function UserDropdownMenuComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserDropdownMenuComponent_Template_a_click_1_listener() {
              return ctx.toggleDropdownMenu();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Profile ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserDropdownMenuComponent_Template_a_click_14_listener() {
              return ctx.logout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Sign out");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.userName, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.phoneNo);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
        styles: [".user-menu[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.user-menu[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%]:after {\n  content: none;\n}\n\n.user-menu[_ngcontent-%COMP%]    > .dropdown-menu[_ngcontent-%COMP%] {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  padding: 0;\n  width: 280px;\n}\n\n.user-menu[_ngcontent-%COMP%]    > .dropdown-menu[_ngcontent-%COMP%], .user-menu[_ngcontent-%COMP%]    > .dropdown-menu[_ngcontent-%COMP%]    > .user-body[_ngcontent-%COMP%] {\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n\n.user-menu[_ngcontent-%COMP%]    > .dropdown-menu[_ngcontent-%COMP%]    > li.user-header[_ngcontent-%COMP%] {\n  height: 175px;\n  padding: 10px;\n  text-align: center;\n}\n\n.user-menu[_ngcontent-%COMP%]    > .dropdown-menu[_ngcontent-%COMP%]    > li.user-header[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  z-index: 5;\n  height: 90px;\n  width: 90px;\n  border: 3px solid;\n  border-color: transparent;\n  border-color: rgba(255, 255, 255, 0.2);\n}\n\n.user-menu[_ngcontent-%COMP%]    > .dropdown-menu[_ngcontent-%COMP%]    > li.user-header[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  z-index: 5;\n  font-size: 17px;\n  margin-top: 10px;\n}\n\n.user-menu[_ngcontent-%COMP%]    > .dropdown-menu[_ngcontent-%COMP%]    > li.user-header[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]    > small[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n}\n\n.user-menu[_ngcontent-%COMP%]    > .dropdown-menu[_ngcontent-%COMP%]    > .user-body[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #495057;\n  border-top: 1px solid #dee2e6;\n  padding: 15px;\n}\n\n.user-menu[_ngcontent-%COMP%]    > .dropdown-menu[_ngcontent-%COMP%]    > .user-body[_ngcontent-%COMP%]::after {\n  display: block;\n  clear: both;\n  content: \"\";\n}\n\n@media (min-width: 576px) {\n  .user-menu[_ngcontent-%COMP%]    > .dropdown-menu[_ngcontent-%COMP%]    > .user-body[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    background: #ffffff !important;\n    color: #495057 !important;\n  }\n}\n\n.user-menu[_ngcontent-%COMP%]    > .dropdown-menu[_ngcontent-%COMP%]    > .user-footer[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  padding: 10px;\n}\n\n.user-menu[_ngcontent-%COMP%]    > .dropdown-menu[_ngcontent-%COMP%]    > .user-footer[_ngcontent-%COMP%]::after {\n  display: block;\n  clear: both;\n  content: \"\";\n}\n\n.user-menu[_ngcontent-%COMP%]    > .dropdown-menu[_ngcontent-%COMP%]    > .user-footer[_ngcontent-%COMP%]   .btn-default[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n\n@media (min-width: 576px) {\n  .user-menu[_ngcontent-%COMP%]    > .dropdown-menu[_ngcontent-%COMP%]    > .user-footer[_ngcontent-%COMP%]   .btn-default[_ngcontent-%COMP%]:hover {\n    background-color: #f8f9fa;\n  }\n}\n\n.user-menu[_ngcontent-%COMP%]   .user-image[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  float: left;\n  height: 2.1rem;\n  margin-right: 10px;\n  margin-top: -2px;\n  width: 2.1rem;\n}\n\n@media (min-width: 576px) {\n  .user-menu[_ngcontent-%COMP%]   .user-image[_ngcontent-%COMP%] {\n    float: none;\n    line-height: 10px;\n    margin-right: 0.4rem;\n    margin-top: -8px;\n  }\n}\n\n.user-menu[_ngcontent-%COMP%]   .user-image[_ngcontent-%COMP%] {\n  height: 1.6rem;\n  width: 1.6rem;\n  margin-right: 0;\n  margin-left: -8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHVzZXItZHJvcGRvd24tbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBOztFQUVFLCtCQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQ0FBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGdDQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsOEJBQUE7SUFDQSx5QkFBQTtFQUNGO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLGFBQUE7QUFBRjs7QUFHQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtBQUFGOztBQUdBO0VBQ0U7SUFDRSx5QkFBQTtFQUFGO0FBQ0Y7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFERjs7QUFJQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLGlCQUFBO0lBQ0Esb0JBQUE7SUFDQSxnQkFBQTtFQURGO0FBQ0Y7O0FBSUE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUZGIiwiZmlsZSI6InVzZXItZHJvcGRvd24tbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyLW1lbnUgPiAubmF2LWxpbmsge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnVzZXItbWVudSA+IC5uYXYtbGluazphZnRlciB7XHJcbiAgY29udGVudDogbm9uZTtcclxufVxyXG5cclxuLnVzZXItbWVudSA+IC5kcm9wZG93bi1tZW51IHtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgd2lkdGg6IDI4MHB4O1xyXG59XHJcblxyXG4udXNlci1tZW51ID4gLmRyb3Bkb3duLW1lbnUsXHJcbi51c2VyLW1lbnUgPiAuZHJvcGRvd24tbWVudSA+IC51c2VyLWJvZHkge1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4udXNlci1tZW51ID4gLmRyb3Bkb3duLW1lbnUgPiBsaS51c2VyLWhlYWRlciB7XHJcbiAgaGVpZ2h0OiAxNzVweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnVzZXItbWVudSA+IC5kcm9wZG93bi1tZW51ID4gbGkudXNlci1oZWFkZXIgPiBpbWcge1xyXG4gIHotaW5kZXg6IDU7XHJcbiAgaGVpZ2h0OiA5MHB4O1xyXG4gIHdpZHRoOiA5MHB4O1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkO1xyXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbn1cclxuXHJcbi51c2VyLW1lbnUgPiAuZHJvcGRvd24tbWVudSA+IGxpLnVzZXItaGVhZGVyID4gcCB7XHJcbiAgei1pbmRleDogNTtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnVzZXItbWVudSA+IC5kcm9wZG93bi1tZW51ID4gbGkudXNlci1oZWFkZXIgPiBwID4gc21hbGwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLnVzZXItbWVudSA+IC5kcm9wZG93bi1tZW51ID4gLnVzZXItYm9keSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0OTUwNTc7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuLnVzZXItbWVudSA+IC5kcm9wZG93bi1tZW51ID4gLnVzZXItYm9keTo6YWZ0ZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNsZWFyOiBib3RoO1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAudXNlci1tZW51ID4gLmRyb3Bkb3duLW1lbnUgPiAudXNlci1ib2R5IGEge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICM0OTUwNTcgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi51c2VyLW1lbnUgPiAuZHJvcGRvd24tbWVudSA+IC51c2VyLWZvb3RlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4udXNlci1tZW51ID4gLmRyb3Bkb3duLW1lbnUgPiAudXNlci1mb290ZXI6OmFmdGVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjbGVhcjogYm90aDtcclxuICBjb250ZW50OiAnJztcclxufVxyXG5cclxuLnVzZXItbWVudSA+IC5kcm9wZG93bi1tZW51ID4gLnVzZXItZm9vdGVyIC5idG4tZGVmYXVsdCB7XHJcbiAgY29sb3I6ICM2Yzc1N2Q7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xyXG4gIC51c2VyLW1lbnUgPiAuZHJvcGRvd24tbWVudSA+IC51c2VyLWZvb3RlciAuYnRuLWRlZmF1bHQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICB9XHJcbn1cclxuXHJcbi51c2VyLW1lbnUgLnVzZXItaW1hZ2Uge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBmbG9hdDogbGVmdDtcclxuICBoZWlnaHQ6IDIuMXJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogLTJweDtcclxuICB3aWR0aDogMi4xcmVtO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAudXNlci1tZW51IC51c2VyLWltYWdlIHtcclxuICAgIGZsb2F0OiBub25lO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNHJlbTtcclxuICAgIG1hcmdpbi10b3A6IC04cHg7XHJcbiAgfVxyXG59XHJcblxyXG4udXNlci1tZW51IC51c2VyLWltYWdlIHtcclxuICBoZWlnaHQ6IDEuNnJlbTtcclxuICB3aWR0aDogMS42cmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMDtcclxuICBtYXJnaW4tbGVmdDogLThweDtcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserDropdownMenuComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-user-dropdown-menu',
            templateUrl: './user-dropdown-menu.component.html',
            styleUrls: ['./user-dropdown-menu.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: src_app_utils_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, {
          dropdownMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['dropdownMenu', {
              "static": false
            }]
          }],
          clickout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:click', ['$event']]
          }]
        });
      })();
      /***/

    },

    /***/
    "4vV/": function vV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DynamicFormAccessGuard", function () {
        return DynamicFormAccessGuard;
      });
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-toastr */
      "EApP");

      var DynamicFormAccessGuard = /*#__PURE__*/function () {
        function DynamicFormAccessGuard(toastr) {
          _classCallCheck(this, DynamicFormAccessGuard);

          this.toastr = toastr;
        }

        _createClass(DynamicFormAccessGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            if (!_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].allRouteTemp) {
              var activeToast = this.toastr.error('You Are Not allowed to access this route.', '');
            }

            return _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].allRouteTemp;
          }
        }]);

        return DynamicFormAccessGuard;
      }();

      DynamicFormAccessGuard.ɵfac = function DynamicFormAccessGuard_Factory(t) {
        return new (t || DynamicFormAccessGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]));
      };

      DynamicFormAccessGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: DynamicFormAccessGuard,
        factory: DynamicFormAccessGuard.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DynamicFormAccessGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "5JI/": function JI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddFormComponent", function () {
        return AddFormComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");

      var AddFormComponent = /*#__PURE__*/function () {
        function AddFormComponent(router, dialogRef, fb, data) {
          _classCallCheck(this, AddFormComponent);

          this.router = router;
          this.dialogRef = dialogRef;
          this.fb = fb;
          this.data = data;
        }

        _createClass(AddFormComponent, [{
          key: "onNoClick",
          value: function onNoClick() {
            this.dialogRef.close();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log('data', this.data);
            this.addForm = this.fb.group({
              formName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              frequency: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
            });
          }
        }, {
          key: "createForm",
          value: function createForm() {
            sessionStorage.setItem('type', 'add');
            sessionStorage.setItem('formTitle', this.addForm.get('formName').value);
            sessionStorage.setItem('frequency', this.addForm.get('frequency').value); // this.dialogRef.close(this.addForm.get('formName').value,this.addForm.get('frequency').value);

            this.router.navigate(['/admin/dynamicForm']);
            this.dialogRef.close();
          }
        }, {
          key: "closeDialog",
          value: function closeDialog() {
            this.dialogRef.close('false');
          }
        }]);

        return AddFormComponent;
      }();

      AddFormComponent.ɵfac = function AddFormComponent_Factory(t) {
        return new (t || AddFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]));
      };

      AddFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AddFormComponent,
        selectors: [["app-add-form"]],
        decls: 33,
        vars: 2,
        consts: [[1, "text-center"], [1, "row", 3, "formGroup"], [1, "col"], ["for", "exampleFormControlInput1", 1, "form-Label"], ["type", "text", "id", "siteName", "formControlName", "formName", "placeholder", "Enter Form Name", 1, "form-control"], ["aria-label", "Default select example", "formControlName", "frequency", 1, "form-select", "form-control"], ["value", "", "hidden", "", "selected", ""], ["value", "daily"], ["value", "weekly"], ["value", "quaterly"], ["value", "halfYearly"], ["value", "yearly"], ["value", "onceOff"], [1, "row", "mt-4"], [1, "col-sm-2", "offset-8"], ["mat-raised-button", "", 3, "click"], [1, "col-sm-2"], ["mat-raised-button", "", 3, "disabled", "click"]],
        template: function AddFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Add Form");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Form Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Frequency");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "select", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Select frequency");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "option", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Daily");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Weekly");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "option", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Quaterly");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Half yearly");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Yearly");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "option", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Once Off");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddFormComponent_Template_button_click_28_listener() {
              return ctx.closeDialog();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddFormComponent_Template_button_click_31_listener() {
              return ctx.createForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Add");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.addForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.addForm.valid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_x"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AddFormComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-add-form',
            templateUrl: './add-form.component.html',
            styleUrls: ['./add-form.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "8BfR": function BfR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuSidebarComponent", function () {
        return MenuSidebarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var src_app_utils_services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/utils/services/app.service */
      "VLJ8");
      /* harmony import */


      var src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/utils/services/set-title.service */
      "yZxC");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var angular_svg_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! angular-svg-icon */
      "tHmd");

      var _c0 = ["mainSidebar"];

      var _c1 = function _c1() {
        return ["/admin"];
      };

      var _c2 = function _c2(a0) {
        return {
          "menu-open": a0
        };
      };

      var _c3 = function _c3() {
        return ["/admin/roleMangement"];
      };

      var _c4 = function _c4() {
        return ["/admin/dynamicFormsList"];
      };

      var _c5 = function _c5() {
        return ["/admin/forms"];
      };

      var _c6 = function _c6() {
        return ["/admin/confiLogi/setLogic"];
      };

      var _c7 = function _c7() {
        return ["/admin/confiLogi/setJobNumber"];
      };

      var _c8 = function _c8() {
        return ["/admin/confiLogi/setHazard"];
      };

      var _c9 = function _c9() {
        return ["/admin/subscrpt"];
      };

      var _c10 = function _c10() {
        return ["/admin/subscrpt/coupon"];
      };

      var _c11 = function _c11() {
        return ["/admin/siteInfo/addSite"];
      };

      var _c12 = function _c12() {
        return ["/admin/siteInfo/addCustomer"];
      };

      var _c13 = function _c13() {
        return ["/admin/siteInfo/projMang"];
      };

      var _c14 = function _c14() {
        return ["/admin/siteInfo/jobTask"];
      };

      var _c15 = function _c15() {
        return ["/admin/siteInfo/highRisk"];
      };

      var _c16 = function _c16() {
        return ["/admin/siteInfo/licenceAndQual"];
      };

      var _c17 = function _c17() {
        return ["/admin/siteInfo/licenceCat"];
      };

      var _c18 = function _c18() {
        return ["/admin/siteInfo/ppeSel"];
      };

      var _c19 = function _c19() {
        return ["/admin/siteInfo/codeOfpract"];
      };

      var _c20 = function _c20() {
        return ["/admin/siteInfo/hazards"];
      };

      var _c21 = function _c21() {
        return ["/admin/siteInfo/contrlActReq"];
      };

      var _c22 = function _c22() {
        return ["/admin/siteInfo/chemical"];
      };

      var _c23 = function _c23() {
        return ["/admin/siteInfo/riskLevel"];
      };

      var _c24 = function _c24() {
        return ["/admin/siteInfo/residual"];
      };

      var _c25 = function _c25() {
        return ["/admin/siteInfo/staff"];
      };

      var _c26 = function _c26() {
        return ["/admin/siteInfo/manager"];
      };

      var _c27 = function _c27() {
        return ["/admin/siteInfo/WHS-Manager"];
      };

      var _c28 = function _c28() {
        return ["/admin/siteInfo/natureOfIncident"];
      };

      var _c29 = function _c29() {
        return ["/admin/siteInfo/typeOfIncident"];
      };

      var _c30 = function _c30() {
        return ["/admin/siteInfo/changesMade"];
      };

      var _c31 = function _c31() {
        return ["/admin/siteInfo/rootCauseOfIncident"];
      };

      var _c32 = function _c32() {
        return ["/admin/siteInfo/siteinspectioncategory"];
      };

      var _c33 = function _c33() {
        return ["/admin/landingPageInfo/header"];
      };

      var _c34 = function _c34() {
        return ["/admin/landingPageInfo/applicationSerInfo"];
      };

      var _c35 = function _c35() {
        return ["/admin/landingPageInfo/safetyModule"];
      };

      var _c36 = function _c36() {
        return ["/admin/landingPageInfo/happyClient"];
      };

      var _c37 = function _c37() {
        return ["/admin/landingPageInfo/flexible"];
      };

      var _c38 = function _c38() {
        return ["/admin/landingPageInfo/customer"];
      };

      var _c39 = function _c39() {
        return ["/admin/landingPageInfo/aboutUs"];
      };

      var _c40 = function _c40() {
        return ["/admin/landingPageInfo/contactUs"];
      };

      var _c41 = function _c41() {
        return ["/admin/landingPageInfo/ourWork"];
      };

      var _c42 = function _c42() {
        return ["/admin/landingPageInfo/screenShot"];
      };

      var _c43 = function _c43() {
        return ["/admin/landingPageInfo/different"];
      };

      var _c44 = function _c44() {
        return ["/admin/landingPageInfo/faq"];
      };

      var _c45 = function _c45() {
        return ["/admin/landingPageInfo/QA"];
      };

      var _c46 = function _c46() {
        return ["/admin/landingPageInfo/term"];
      };

      var _c47 = function _c47() {
        return ["/admin/landingPageInfo/socialMedia"];
      };

      var _c48 = function _c48() {
        return ["/admin/stateRel/states"];
      };

      var _c49 = function _c49() {
        return ["/admin/stateRel/juridiction"];
      };

      var _c50 = function _c50() {
        return ["/admin/stateRel/safetyLegislation"];
      };

      var _c51 = function _c51() {
        return ["/admin/stateRel/regulator"];
      };

      var _c52 = function _c52() {
        return ["/admin/stateRel/setState"];
      };

      function MenuSidebarComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuSidebarComponent_div_6_Template_a_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.resetAll();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "svg-icon", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuSidebarComponent_div_6_Template_a_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.menuOpen(0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "svg", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Role Manangement ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "svg", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Roles");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuSidebarComponent_div_6_Template_a_click_27_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.menuOpen(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "svg", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Dynamic form ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ul", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "svg", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Forms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuSidebarComponent_div_6_Template_a_click_45_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.menuOpen(2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "svg", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Logical forms ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "ul", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "svg", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Forms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuSidebarComponent_div_6_Template_a_click_63_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.menuOpen(3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "svg", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Form Configure ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "ul", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "svg", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Set Relation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "svg", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Set Job Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "svg", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Set Hazard Treatment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuSidebarComponent_div_6_Template_a_click_97_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.menuOpen(4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "svg", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "circle", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "circle", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "circle", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "path", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "path", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "path", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "rect", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "path", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "path", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " Subscription Rates ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "ul", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "svg", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "rect", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "line", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "line", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "line", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "line", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "line", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "line", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "line", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "line", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "line", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "line", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "line", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "line", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "line", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "line", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "line", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "line", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "line", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " Add Subscription ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "svg", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "circle", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "circle", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "circle", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "path", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "path", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "path", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "rect", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "path", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "path", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Coupon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuSidebarComponent_div_6_Template_a_click_150_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.menuOpen(5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "svg", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "path", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, " Logical Form Data ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "ul", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "svg", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "path", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "path", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Site");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "svg", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "g", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "path", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "path", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "path", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Customer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "svg", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "g", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "path", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "path", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "path", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "Project Manager");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "svg", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "path", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "Job Task");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "svg", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "path", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "path", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "High Risk Construct");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "svg", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "path", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "License And Qualification");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "svg", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "path", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Trade Category");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "svg", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "PPE Selection");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "svg", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "Code Of Practice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "svg", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](226, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](227, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](228, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "Hazards");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "svg", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](234, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](235, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](236, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "Control And Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "a", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "svg", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](242, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](243, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](244, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "Chemical");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "a", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "svg", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](250, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](251, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](252, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "Risk-Level");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "a", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "svg", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](258, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](259, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](260, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "Residual Risk Level");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "a", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "svg", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](266, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](267, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](268, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "Staff");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "a", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "svg", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](274, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](275, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](276, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "Manager");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "a", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "svg", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](282, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](283, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](284, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, "Whs-Manager");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "a", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "svg", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](290, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](291, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](292, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "Nature Of Incident");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "a", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "svg", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](298, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](299, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](300, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "Type Of Incident");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "a", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "svg", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](306, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](307, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](308, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, "Changes Made");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "a", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "svg", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](314, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](315, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](316, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, "Root Cause Of Incident");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "a", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "svg", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](322, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](323, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](324, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, "Site Inspection Category");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuSidebarComponent_div_6_Template_a_click_328_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.menuOpen(6);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "svg", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](330, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](331, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](332, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, " CMS ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](335, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "ul", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "svg", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](340, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](341, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](342, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](344, "Header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "svg", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](348, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](349, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](350, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, "Application Service Info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "svg", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](356, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](357, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](358, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](360, "Safety Module");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "svg", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](364, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](365, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](366, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](368, "Happy Client");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "svg", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](372, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](373, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](374, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](376, "Flexible");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "svg", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](380, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](381, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](382, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](384, "CustomerTestimonial");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "svg", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](388, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](389, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](390, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](392, "About-Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "svg", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](396, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](397, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](398, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](400, "Contact-Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "svg", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](404, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](405, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](406, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](408, "Our-Work(Section-1)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "svg", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](412, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](413, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](414, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](416, "Our-Work(Section-2)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "svg", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](420, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](421, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](422, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](424, "Our-Work-(Section-3) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](425, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](427, "svg", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](428, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](429, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](430, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](432, "FAQ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](433, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "svg", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](436, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](437, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](438, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](439, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](440, "Q&A Section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](441, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](443, "svg", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](444, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](445, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](446, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](447, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](448, "Terms and Conditions ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](449, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](450, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](451, "svg", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](452, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](453, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](454, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](455, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](456, "Social Media");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](457, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](458, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuSidebarComponent_div_6_Template_a_click_458_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12.menuOpen(7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](459, "svg", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](460, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](461, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](462, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](463, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](464, " State Relation ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](465, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](466, "ul", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](467, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](468, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](469, "svg", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](470, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](471, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](472, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](473, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](474, "States");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](475, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](476, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](477, "svg", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](478, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](479, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](480, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](481, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](482, "Jurisdiction");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](483, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](484, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](485, "svg", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](486, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](487, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](488, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](489, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](490, "Safety Legislation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](491, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](492, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](493, "svg", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](494, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](495, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](496, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](497, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](498, "Regulator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](499, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](500, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](501, "svg", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](502, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](503, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](504, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](505, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](506, "Set State Relation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](60, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", "Dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](61, _c2, ctx_r1.treeArr[0] == true));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](63, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](64, _c2, ctx_r1.treeArr[1] == true));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](66, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](67, _c2, ctx_r1.treeArr[2] == true));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](69, _c5));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](70, _c2, ctx_r1.treeArr[3] == true));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](72, _c6));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](73, _c7));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](74, _c8));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](75, _c2, ctx_r1.treeArr[4] == true));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](77, _c9));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](78, _c10));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](79, _c2, ctx_r1.treeArr[5] == true));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](81, _c11));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](82, _c12));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](83, _c13));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](84, _c14));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](85, _c15));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](86, _c16));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](87, _c17));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](88, _c18));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](89, _c19));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](90, _c20));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](91, _c21));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](92, _c22));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](93, _c23));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](94, _c24));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](95, _c25));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](96, _c26));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](97, _c27));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](98, _c28));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](99, _c29));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](100, _c30));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](101, _c31));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](102, _c32));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](103, _c2, ctx_r1.treeArr[6] == true));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](105, _c33));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](106, _c34));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](107, _c35));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](108, _c36));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](109, _c37));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](110, _c38));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](111, _c39));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](112, _c40));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](113, _c41));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](114, _c42));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](115, _c43));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](116, _c44));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](117, _c45));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](118, _c46));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](119, _c47));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](120, _c2, ctx_r1.treeArr[7] == true));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](122, _c48));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](123, _c49));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](124, _c50));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](125, _c51));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](126, _c52));
        }
      }

      var _c53 = function _c53(a0) {
        return [a0];
      };

      function MenuSidebarComponent_ng_container_10_li_1_a_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuSidebarComponent_ng_container_10_li_1_a_1_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var i_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r19.menuOpen(i_r14);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "svg-icon", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c53, item_r13.route));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", "Dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r13.displayedName);
        }
      }

      function MenuSidebarComponent_ng_container_10_li_1_a_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuSidebarComponent_ng_container_10_li_1_a_2_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var i_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r23.menuOpen(i_r14);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "svg-icon", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", item_r13.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r13.displayedName);
        }
      }

      function MenuSidebarComponent_ng_container_10_li_1_ul_3_ng_container_1_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "svg-icon", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var citem_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c53, citem_r28.route));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", citem_r28.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](citem_r28.displayedName);
        }
      }

      function MenuSidebarComponent_ng_container_10_li_1_ul_3_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuSidebarComponent_ng_container_10_li_1_ul_3_ng_container_1_li_1_Template, 5, 5, "li", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var citem_r28 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", citem_r28.hasAccess);
        }
      }

      function MenuSidebarComponent_ng_container_10_li_1_ul_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuSidebarComponent_ng_container_10_li_1_ul_3_ng_container_1_Template, 2, 1, "ng-container", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r13.childItem);
        }
      }

      function MenuSidebarComponent_ng_container_10_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuSidebarComponent_ng_container_10_li_1_a_1_Template, 4, 5, "a", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MenuSidebarComponent_ng_container_10_li_1_a_2_Template, 5, 2, "a", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MenuSidebarComponent_ng_container_10_li_1_ul_3_Template, 2, 1, "ul", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var i_r14 = ctx_r32.index;
          var item_r13 = ctx_r32.$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c2, ctx_r15.treeArr[i_r14] == true));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r13.route);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r13.route);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r13.childItem);
        }
      }

      function MenuSidebarComponent_ng_container_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuSidebarComponent_ng_container_10_li_1_Template, 4, 6, "li", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r13 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r13.hasAccess);
        }
      }

      var _c54 = function _c54() {
        return ["/dashBoard"];
      };

      var MenuSidebarComponent = /*#__PURE__*/function () {
        function MenuSidebarComponent(appService, setTitle, router) {
          _classCallCheck(this, MenuSidebarComponent);

          this.appService = appService;
          this.setTitle = setTitle;
          this.router = router;
          this.mainSidebarHeight = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.dynamic = false;
          this.landingPageVal = false;
          this.subscription = false;
          this.siteInfoVal = false;
          this["static"] = false;
          this.confiLogic = false;
          this.stateRel = false;
          this.treeArr = [false, false, false, false, false, false, false, false]; // menuOpen(key) {
          //   if (key != 'dynamic') this.dynamic = false;
          //   if (key != 'subscription') this.subscription = false;
          //   if (key != 'siteInfo') this.siteInfoVal = false;
          //   if (key != 'landingPageInfo') this.landingPageVal = false;
          //   if (key != 'static') this.static = false;
          //   if (key != 'confiLogic') this.confiLogic = false;
          //   if (key != 'stateRel') this.confiLogic = false;
          //   if (key === 'dynamic') this.dynamic = !this.dynamic;
          //   else if (key === 'subscription') this.subscription = !this.subscription;
          //   else if (key === 'siteInfo') this.siteInfoVal = !this.siteInfoVal;
          //   else if (key === 'landingPageInfo')  this.landingPageVal = !this.landingPageVal;
          //   else if (key === 'static') this.static = !this.static;
          //   else if (key === 'confiLogic') this.confiLogic = !this.confiLogic;
          //   else if (key === 'stateRel') this.stateRel = !this.stateRel;
          // }
          // resetAll(){
          //   this.dynamic = false;
          //   this.landingPageVal = false;
          //   this.subscription = false;
          //   this.siteInfoVal = false;
          //   this.static = false; 
          //   this.confiLogic = false; 
          //   this.stateRel = false; 
          // }

          this.navItems = [{
            displayedName: "Dashboard",
            icon: "Dashboard",
            route: "/dashBoard",
            hasAccess: true
          }, {
            displayedName: "Role Manangement",
            icon: "Role_Manangement",
            childItem: [{
              displayedName: "Roles",
              icon: "Roles",
              route: "/admin/roleMangement",
              hasAccess: true
            }],
            hasAccess: true
          }, {
            displayedName: "Dynamic form",
            icon: "page",
            childItem: [{
              displayedName: "Forms",
              icon: "page",
              route: "/admin/dynamicFormsList",
              hasAccess: true
            }],
            hasAccess: true
          }, {
            displayedName: "Logical forms",
            icon: "page",
            childItem: [{
              displayedName: "Forms",
              icon: "page",
              route: "/admin/forms",
              hasAccess: true
            }],
            hasAccess: true
          }, {
            displayedName: "Form Configure",
            icon: "page",
            childItem: [{
              displayedName: "Set Relation",
              icon: "page",
              route: "/admin/confiLogi/setLogic",
              hasAccess: true
            }, {
              displayedName: "Set Job Number",
              icon: "page",
              route: "/admin/confiLogi/setJobNumber",
              hasAccess: true
            }, {
              displayedName: "Set Hazard Treatment",
              icon: "page",
              route: "/admin/confiLogi/setHazard",
              hasAccess: true
            }],
            hasAccess: true
          }, {
            displayedName: "Subscription Rates",
            icon: "Subscription",
            childItem: [{
              displayedName: "Add Subscription",
              icon: "Add_Subsc",
              route: "/admin/subscrpt",
              hasAccess: true
            }, {
              displayedName: "Coupon",
              icon: "Subscription",
              route: "/admin/subscrpt/coupon",
              hasAccess: true
            }],
            hasAccess: true
          }, {
            displayedName: "Logical Form Data",
            icon: "page",
            childItem: [{
              displayedName: "Site",
              icon: "site",
              route: "/admin/siteInfo/addSite",
              hasAccess: true
            }, {
              displayedName: "Customer",
              icon: "customer",
              route: "/admin/siteInfo/addCustomer",
              hasAccess: true
            }, {
              displayedName: "Project Manager",
              icon: "customer",
              route: "/admin/siteInfo/projMang",
              hasAccess: true
            }, {
              displayedName: "Job Task",
              icon: "job_task",
              route: "/admin/siteInfo/jobTask",
              hasAccess: true
            }, {
              displayedName: "High Risk Construct",
              icon: "Risk_construct",
              route: "/admin/siteInfo/highRisk",
              hasAccess: true
            }, {
              displayedName: "Licence And Qualification",
              icon: "license",
              route: "/admin/siteInfo/licenceAndQual",
              hasAccess: true
            }, {
              displayedName: "Trade Category",
              icon: "page",
              route: "/admin/siteInfo/licenceCat",
              hasAccess: true
            }, {
              displayedName: "PPE Selection",
              icon: "page",
              route: "/admin/siteInfo/ppeSel",
              hasAccess: true
            }, {
              displayedName: "Code Of Practice",
              icon: "page",
              route: "/admin/siteInfo/codeOfpract",
              hasAccess: true
            }, {
              displayedName: "Hazards",
              icon: "page",
              route: "/admin/siteInfo/hazards",
              hasAccess: true
            }, {
              displayedName: "Control And Action",
              icon: "page",
              route: "/admin/siteInfo/contrlActReq",
              hasAccess: true
            }, {
              displayedName: "Chemical",
              icon: "page",
              route: "/admin/siteInfo/chemical",
              hasAccess: true
            }, {
              displayedName: "Risk-Level",
              icon: "page",
              route: "/admin/siteInfo/riskLevel",
              hasAccess: true
            }, {
              displayedName: "Residual Risk Level",
              icon: "page",
              route: "/admin/siteInfo/residual",
              hasAccess: true
            }, {
              displayedName: "Staff",
              icon: "page",
              route: "/admin/siteInfo/staff",
              hasAccess: true
            }, {
              displayedName: "Manager",
              icon: "page",
              route: "/admin/siteInfo/manager",
              hasAccess: true
            }, {
              displayedName: "Whs-Manager",
              icon: "page",
              route: "/admin/siteInfo/WHS-Manager",
              hasAccess: true
            }, {
              displayedName: "Nature Of Incident",
              icon: "page",
              route: "/admin/siteInfo/natureOfIncident",
              hasAccess: true
            }, {
              displayedName: "Type Of Incident",
              icon: "page",
              route: "/admin/siteInfo/typeOfIncident",
              hasAccess: true
            }, {
              displayedName: "Changes Made",
              icon: "page",
              route: "/admin/siteInfo/changesMade",
              hasAccess: true
            }, {
              displayedName: "Root Cause Of Incident",
              icon: "page",
              route: "/admin/siteInfo/rootCauseOfIncident",
              hasAccess: true
            }, {
              displayedName: "Site Inspection Category",
              icon: "page",
              route: "/admin/siteInfo/siteinspectioncategory",
              hasAccess: true
            }],
            hasAccess: true
          }, {
            displayedName: "CMS",
            icon: "page",
            childItem: [{
              displayedName: "Header",
              icon: "page",
              route: "/admin/landingPageInfo/header",
              hasAccess: true
            }, {
              displayedName: "Application Service Info",
              icon: "page",
              route: "/admin/landingPageInfo/applicationSerInfo",
              hasAccess: true
            }, {
              displayedName: "Safety Module",
              icon: "page",
              route: "/admin/landingPageInfo/safetyModule",
              hasAccess: true
            }, {
              displayedName: "Happy Client",
              icon: "page",
              route: "/admin/landingPageInfo/happyClient",
              hasAccess: true
            }, {
              displayedName: "Flexible",
              icon: "page",
              route: "/admin/landingPageInfo/flexible",
              hasAccess: true
            }, {
              displayedName: "CustomerTestimonial",
              icon: "page",
              route: "/admin/landingPageInfo/customer",
              hasAccess: true
            }, {
              displayedName: "About-Us",
              icon: "page",
              route: "/admin/landingPageInfo/aboutUs",
              hasAccess: true
            }, {
              displayedName: "Contact-Us",
              icon: "page",
              route: "/admin/landingPageInfo/contactUs",
              hasAccess: true
            }, {
              displayedName: "Our-Work(Section-1)",
              icon: "page",
              route: "/admin/landingPageInfo/ourWork",
              hasAccess: true
            }, {
              displayedName: "Our-Work(Section-2)",
              icon: "page",
              route: "/admin/landingPageInfo/screenShot",
              hasAccess: true
            }, {
              displayedName: "Our-Work-(Section-3)",
              icon: "page",
              route: "/admin/landingPageInfo/different",
              hasAccess: true
            }, {
              displayedName: "FAQ",
              icon: "page",
              route: "/admin/landingPageInfo/faq",
              hasAccess: true
            }, {
              displayedName: "Q&A Section",
              icon: "page",
              route: "/admin/landingPageInfo/QA",
              hasAccess: true
            }, {
              displayedName: "Terms and Conditions",
              icon: "page",
              route: "/admin/landingPageInfo/term",
              hasAccess: true
            }, {
              displayedName: "Social Media",
              icon: "page",
              route: "/admin/landingPageInfo/socialMedia",
              hasAccess: true
            }],
            hasAccess: true
          }, {
            displayedName: "State Relation",
            icon: "page",
            childItem: [{
              displayedName: "States",
              icon: "page",
              route: "/admin/stateRel/states",
              hasAccess: true
            }, {
              displayedName: "Jurisdiction",
              icon: "page",
              route: "/admin/stateRel/juridiction",
              hasAccess: true
            }, {
              displayedName: "Safety Legislation",
              icon: "page",
              route: "/admin/stateRel/safetyLegislation",
              hasAccess: true
            }, {
              displayedName: "Regulator",
              icon: "page",
              route: "/admin/stateRel/regulator",
              hasAccess: true
            }, {
              displayedName: "Set State Relation",
              icon: "page",
              route: "/admin/stateRel/setState",
              hasAccess: true
            }],
            hasAccess: true
          }];
          this.temp = [{
            displayedName: 'Dashboard',
            icon: 'Dashboard',
            route: '/dashBoard'
          }, {
            displayedName: 'Role Manangement',
            icon: 'Role_Manangement',
            childItem: [{
              displayedName: 'Roles',
              icon: 'Roles',
              route: '/admin/roleMangement'
            }]
          }, {
            displayedName: 'Dynamic form',
            icon: 'page',
            childItem: [{
              displayedName: 'Forms',
              icon: 'page',
              route: '/admin/dynamicFormsList'
            }]
          }, {
            displayedName: 'Logical forms',
            icon: 'page',
            childItem: [{
              displayedName: 'Forms',
              icon: 'page',
              route: '/admin/forms'
            }]
          }, {
            displayedName: 'Form Configure',
            icon: 'page',
            childItem: [{
              displayedName: 'Set Relation',
              icon: 'page',
              route: '/admin/confiLogi/setLogic'
            }, {
              displayedName: 'Set Job Number',
              icon: 'page',
              route: '/admin/confiLogi/setJobNumber'
            }, {
              displayedName: 'Set Hazard Treatment',
              icon: 'page',
              route: '/admin/confiLogi/setHazard'
            }]
          }, {
            displayedName: 'Subscription Rates',
            icon: 'Subscription',
            childItem: [{
              displayedName: 'Add Subscription',
              icon: 'Add_Subsc',
              route: '/admin/subscrpt'
            }, {
              displayedName: 'Coupon',
              icon: 'Subscription',
              route: '/admin/subscrpt/coupon'
            }]
          }, {
            displayedName: 'Logical Form Data',
            icon: 'page',
            childItem: [{
              displayedName: 'Site',
              icon: 'site',
              route: '/admin/siteInfo/addSite'
            }, {
              displayedName: 'Customer',
              icon: 'customer',
              route: '/admin/siteInfo/addCustomer'
            }, {
              displayedName: 'Project Manager',
              icon: 'customer',
              route: '/admin/siteInfo/projMang'
            }, {
              displayedName: 'Job Task',
              icon: 'job_task',
              route: '/admin/siteInfo/jobTask'
            }, {
              displayedName: 'High Risk Construct',
              icon: 'Risk_construct',
              route: '/admin/siteInfo/highRisk'
            }, {
              displayedName: 'Licence And Qualification',
              icon: 'license',
              route: '/admin/siteInfo/licenceAndQual'
            }, {
              displayedName: 'Trade Category',
              icon: 'page',
              route: '/admin/siteInfo/licenceCat'
            }, {
              displayedName: 'PPE Selection',
              icon: 'page',
              route: '/admin/siteInfo/ppeSel'
            }, {
              displayedName: 'Code Of Practice',
              icon: 'page',
              route: '/admin/siteInfo/codeOfpract'
            }, {
              displayedName: 'Hazards',
              icon: 'page',
              route: '/admin/siteInfo/hazards'
            }, {
              displayedName: 'Control And Action',
              icon: 'page',
              route: '/admin/siteInfo/contrlActReq'
            }, {
              displayedName: 'Chemical',
              icon: 'page',
              route: '/admin/siteInfo/chemical'
            }, {
              displayedName: 'Risk-Level',
              icon: 'page',
              route: '/admin/siteInfo/riskLevel'
            }, {
              displayedName: 'Residual Risk Level',
              icon: 'page',
              route: '/admin/siteInfo/residual'
            }, {
              displayedName: 'Staff',
              icon: 'page',
              route: '/admin/siteInfo/staff'
            }, {
              displayedName: 'Manager',
              icon: 'page',
              route: '/admin/siteInfo/manager'
            }, {
              displayedName: 'Whs-Manager',
              icon: 'page',
              route: '/admin/siteInfo/WHS-Manager'
            }, {
              displayedName: 'Nature Of Incident',
              icon: 'page',
              route: '/admin/siteInfo/natureOfIncident'
            }, {
              displayedName: 'Type Of Incident',
              icon: 'page',
              route: '/admin/siteInfo/typeOfIncident'
            }, {
              displayedName: 'Changes Made',
              icon: 'page',
              route: '/admin/siteInfo/changesMade'
            }, {
              displayedName: 'Root Cause Of Incident',
              icon: 'page',
              route: '/admin/siteInfo/rootCauseOfIncident'
            }, {
              displayedName: 'Site Inspection Category',
              icon: 'page',
              route: '/admin/siteInfo/siteinspectioncategory'
            }]
          }, {
            displayedName: 'CMS',
            icon: 'page',
            childItem: [{
              displayedName: 'Header',
              icon: 'page',
              route: '/admin/landingPageInfo/header'
            }, {
              displayedName: 'Application Service Info',
              icon: 'page',
              route: '/admin/landingPageInfo/applicationSerInfo'
            }, {
              displayedName: 'Safety Module',
              icon: 'page',
              route: '/admin/landingPageInfo/safetyModule'
            }, {
              displayedName: 'Happy Client',
              icon: 'page',
              route: '/admin/landingPageInfo/happyClient'
            }, {
              displayedName: 'Flexible',
              icon: 'page',
              route: '/admin/landingPageInfo/flexible'
            }, {
              displayedName: 'CustomerTestimonial',
              icon: 'page',
              route: '/admin/landingPageInfo/customer'
            }, {
              displayedName: 'About-Us',
              icon: 'page',
              route: '/admin/landingPageInfo/aboutUs'
            }, {
              displayedName: 'Contact-Us',
              icon: 'page',
              route: '/admin/landingPageInfo/contactUs'
            }, {
              displayedName: 'Our-Work(Section-1)',
              icon: 'page',
              route: '/admin/landingPageInfo/ourWork'
            }, {
              displayedName: 'Our-Work(Section-2)',
              icon: 'page',
              route: '/admin/landingPageInfo/screenShot'
            }, {
              displayedName: 'Our-Work-(Section-3)',
              icon: 'page',
              route: '/admin/landingPageInfo/different'
            }, {
              displayedName: 'FAQ',
              icon: 'page',
              route: '/admin/landingPageInfo/faq'
            }, {
              displayedName: 'Q&A Section',
              icon: 'page',
              route: '/admin/landingPageInfo/QA'
            }, {
              displayedName: 'Terms and Conditions',
              icon: 'page',
              route: '/admin/landingPageInfo/term'
            }, {
              displayedName: 'Social Media',
              icon: 'page',
              route: '/admin/landingPageInfo/socialMedia'
            }]
          }, {
            displayedName: 'State Relation',
            icon: 'page',
            childItem: [{
              displayedName: 'States',
              icon: 'page',
              route: '/admin/stateRel/states'
            }, {
              displayedName: 'Jurisdiction',
              icon: 'page',
              route: '/admin/stateRel/juridiction'
            }, {
              displayedName: 'Safety Legislation',
              icon: 'page',
              route: '/admin/stateRel/safetyLegislation'
            }, {
              displayedName: 'Regulator',
              icon: 'page',
              route: '/admin/stateRel/regulator'
            }, {
              displayedName: 'Set State Relation',
              icon: 'page',
              route: '/admin/stateRel/setState'
            }]
          }];
        }

        _createClass(MenuSidebarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log("logo=>", this.logoUrl);
            console.log(this.router.url);
            var rLink = this.router.url;

            if (rLink === '/admin/roleMangement') {
              this.menuOpen(1);
            } else if (rLink === '/admin/dynamicFormsList') {
              this.menuOpen(2);
            } else if (rLink === '/admin/forms') {
              this.menuOpen(3);
            } else if (rLink === '/admin/confiLogi/setLogic' || rLink === '/admin/confiLogi/setJobNumber') {
              this.menuOpen(4);
            } else if (rLink === '/admin/siteInfo/addSite' || rLink === '/admin/siteInfo/addCustomer' || rLink === '/admin/siteInfo/jobTask' || rLink === '/admin/siteInfo/highRisk' || rLink === '/admin/siteInfo/licenceAndQual' || rLink === '/admin/siteInfo/licenceCat' || rLink === '/admin/siteInfo/ppeSel' || rLink === '/admin/siteInfo/hazards' || rLink === '/admin/siteInfo/contrlActReq' || rLink === '/admin/siteInfo/chemical' || rLink === '/admin/siteInfo/riskLevel' || rLink === '/admin/siteInfo/riskLevel' || rLink === '/admin/siteInfo/staff') {
              this.menuOpen(5);
            }

            this.setTitle.setTitle('WHS-Menu Sidebar'); // this.navItems.map((x:NavItem) => {
            //   x.hasAccess = true
            //   x.childItem?x.childItem.map((y:NavItem) => {
            //     y.hasAccess = true
            //     return y
            //   }):''
            //   return x
            // })
            // console.log(this.navItems)
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.mainSidebarHeight.emit(this.mainSidebar.nativeElement.offsetHeight);
          }
        }, {
          key: "menuOpen",
          value: function menuOpen(i) {
            var temp = this.treeArr[i];
            this.resetAll();
            this.treeArr[i] = !temp;
            console.log(i, temp, this.treeArr);
          }
        }, {
          key: "resetAll",
          value: function resetAll() {
            for (var i = 0; i < this.treeArr.length; i++) {
              this.treeArr[i] = false;
            } // resetAll(j){
            // for(let i=0;i<this.treeArr.length && j!=i;i++){
            //   this.treeArr[i] =false;
            // }

          }
        }]);

        return MenuSidebarComponent;
      }();

      MenuSidebarComponent.ɵfac = function MenuSidebarComponent_Factory(t) {
        return new (t || MenuSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_2__["SetTitleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      MenuSidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MenuSidebarComponent,
        selectors: [["app-menu-sidebar"]],
        viewQuery: function MenuSidebarComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mainSidebar = _t.first);
          }
        },
        inputs: {
          logoUrl: "logoUrl"
        },
        outputs: {
          mainSidebarHeight: "mainSidebarHeight"
        },
        decls: 11,
        vars: 5,
        consts: [[1, "main-sidebar", "sidebar-light-primary", "elevation-2"], ["mainSidebar", ""], [1, "brand-link", 3, "routerLink"], ["alt", "AdminLTE Logo", 1, "brand-image", 2, "opacity", "1", 3, "src"], [1, "brand-text", "font-weight-light"], ["class", "sidebar m-t-20 m-b-20 mb-5", 4, "ngIf"], [1, "sidebar", "m-t-20", "m-b-20", "mb-5"], [1, "mt-2", "mb-5"], ["data-widget", "treeview", "role", "menu", "data-accordion", "false", 1, "nav", "nav-pills", "nav-sidebar", "flex-column", "adminDashboardNav"], [4, "ngFor", "ngForOf"], [1, "nav-item"], [1, "nav-link", 3, "routerLink", "click"], [3, "name"], [1, "nav-item", 3, "ngClass"], [1, "nav-link", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 64 64", "width", "20.00pt", "height", "20.00pt"], ["fill", "#524f4f", "d", "M54,59.11H10a1,1,0,0,1-1-1V5.89a1,1,0,0,1,1-1H42.3A1,1,0,0,1,43,5.2l11.7,12.12A1,1,0,0,1,55,18v40.1A1,1,0,0,1,54,59.11Zm-43-2H53V18.41L41.88,6.89H11Z"], ["fill", "#524f4f", "d", "M42.3,19a1,1,0,0,1-1-1V5.89a1,1,0,0,1,2,0V18A1,1,0,0,1,42.3,19Z"], ["fill", "#524f4f", "d", "M48 19H42.3a1 1 0 0 1 0-2H48a1 1 0 0 1 0 2zM29.09 25.86H17.18a1 1 0 0 1-1-1V13a1 1 0 0 1 1-1H29.09a1 1 0 0 1 1 1V24.86A1 1 0 0 1 29.09 25.86zm-10.91-2h9.91V14H18.18zM46.84 34H17.16a1 1 0 1 1 0-2H46.84a1 1 0 0 1 0 2zM46.84 41.85H17.16a1 1 0 0 1 0-2H46.84a1 1 0 0 1 0 2zM46.84 49.71H17.16a1 1 0 0 1 0-2H46.84a1 1 0 0 1 0 2z"], [1, "right", "fas", "fa-angle-left"], [1, "nav", "nav-treeview"], [1, "nav-item", "ml-3"], ["routerLinkActive", "active myColor", 1, "nav-link", 3, "routerLink"], ["width", "20.00pt", "height", "20.00pt", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 64 64"], ["cx", "12", "cy", "11", "r", "1"], ["cx", "17", "cy", "11", "r", "1"], ["cx", "22", "cy", "11", "r", "1"], ["fill", "#524f4f", "d", "M53 16H7a1 1 0 0 1 0-2H53a1 1 0 0 1 0 2zM37 44a1 1 0 0 1-1-1V39a1 1 0 0 1 2 0v4A1 1 0 0 1 37 44zM55.11 53h0a1 1 0 0 1 .12 1.28 14.52 14.52 0 0 1-3.68 3.52A.94.94 0 0 1 51 58a1 1 0 0 1-.55-1.83 12.76 12.76 0 0 0 3.15-3A1 1 0 0 1 55.11 53z"], ["fill", "#524f4f", "d", "M58 40.64v5.15a14.34 14.34 0 0 1-.73 4.54 1 1 0 0 1-1.65.37h0a1 1 0 0 1-.23-1A12.85 12.85 0 0 0 56 45.79V40.64A1.59 1.59 0 0 0 54.66 39a1.48 1.48 0 0 0-1.17.38A1.51 1.51 0 0 0 53 40.5a1 1 0 0 1-2 0V38.64A1.59 1.59 0 0 0 49.66 37a1.48 1.48 0 0 0-1.17.38A1.51 1.51 0 0 0 48 38.5a1 1 0 0 1-2 0v-.86A1.59 1.59 0 0 0 44.66 36a1.48 1.48 0 0 0-1.17.38A1.51 1.51 0 0 0 43 37.5a1 1 0 0 1-2 0v-9A1.5 1.5 0 0 0 39.34 27 1.59 1.59 0 0 0 38 28.64V39a1 1 0 0 1-2 0 3 3 0 0 0-3.1-3 1 1 0 0 0-.9 1v8.79a12.47 12.47 0 0 0 5.55 10.38 1 1 0 0 1-1.1 1.66 14.43 14.43 0 0 1-6.45-12V37a3 3 0 0 1 2.84-3A5 5 0 0 1 36 35V28.64A3.61 3.61 0 0 1 39.14 25 3.49 3.49 0 0 1 43 28.5v5.84A3.59 3.59 0 0 1 44.86 34a3.5 3.5 0 0 1 2.58 1.65 3.47 3.47 0 0 1 5.36 1.77A3.57 3.57 0 0 1 54.86 37 3.61 3.61 0 0 1 58 40.64zM7 28H7a1 1 0 0 1-1-1V10a4 4 0 0 1 4-4H29a1 1 0 0 1 0 2H10a2 2 0 0 0-2 2V27A1 1 0 0 1 7 28z"], ["fill", "#524f4f", "d", "M32,43a1,1,0,0,1-1,1H10a4,4,0,0,1-4-4V31a1,1,0,0,1,1-1H7a1,1,0,0,1,1,1v9a2,2,0,0,0,2,2H31A1,1,0,0,1,32,43Z"], ["width", "2", "height", "2", "x", "32", "y", "6", "rx", "1", "ry", "1"], ["fill", "#524f4f", "d", "M54,10V38.5a1,1,0,0,1-2,0V10a2,2,0,0,0-2-2H37a1,1,0,0,1-1-1h0a1,1,0,0,1,1-1H50A4,4,0,0,1,54,10Z"], ["fill", "#524f4f", "d", "M45.31 29H42a1 1 0 0 1 0-2h3.36a1.83 1.83 0 0 0 1.22-.46 1.42 1.42 0 0 0 .47-1A1.6 1.6 0 0 0 45.31 24H36.69a1.83 1.83 0 0 0-1.22.46 1.42 1.42 0 0 0-.47 1A1.6 1.6 0 0 0 36.69 27h.39a1 1 0 0 1 0 2h-.39A3.61 3.61 0 0 1 33 25.5 3.46 3.46 0 0 1 34.11 23a3.81 3.81 0 0 1 2.58-1h8.62A3.61 3.61 0 0 1 49 25.5 3.46 3.46 0 0 1 47.89 28 3.81 3.81 0 0 1 45.31 29zM29 31H12a1 1 0 0 1-1-1V20a1 1 0 0 1 1-1H29a1 1 0 0 1 1 1V30A1 1 0 0 1 29 31zM13 29H28V21H13zM28 35H13a1 1 0 0 1 0-2H28a1 1 0 0 1 0 2zM22 39H13a1 1 0 0 1 0-2h9a1 1 0 0 1 0 2z"], ["width", "20.00pt", "height", "20.00pt", "xmlns", "http://www.w3.org/2000/svg", "data-name", "Layer 1", "viewBox", "0 0 64 64"], ["width", "60", "height", "52", "x", "2", "y", "9", "fill", "none", "stroke", "#524f4f", "stroke-miterlimit", "10", "stroke-width", "4"], ["x1", "2", "x2", "62", "y1", "21.06", "y2", "21.06", "fill", "none", "stroke", "#524f4f", "stroke-miterlimit", "10", "stroke-width", "4"], ["x1", "24", "x2", "28", "y1", "29", "y2", "29", "fill", "none", "stroke", "#524f4f", "stroke-miterlimit", "10", "stroke-width", "4"], ["x1", "36", "x2", "40", "y1", "29", "y2", "29", "fill", "none", "stroke", "#524f4f", "stroke-miterlimit", "10", "stroke-width", "4"], ["x1", "48", "x2", "52", "y1", "29", "y2", "29", "fill", "none", "stroke", "#524f4f", "stroke-miterlimit", "10", "stroke-width", "4"], ["x1", "48", "x2", "52", "y1", "37", "y2", "37", "fill", "none", "stroke", "#524f4f", "stroke-miterlimit", "10", "stroke-width", "4"], ["x1", "36", "x2", "40", "y1", "37", "y2", "37", "fill", "none", "stroke", "#524f4f", "stroke-miterlimit", "10", "stroke-width", "4"], ["x1", "24", "x2", "28", "y1", "37", "y2", "37", "fill", "none", "stroke", "#524f4f", "stroke-miterlimit", "10", "stroke-width", "4"], ["x1", "12", "x2", "16", "y1", "37", "y2", "37", "fill", "none", "stroke", "#524f4f", "stroke-miterlimit", "10", "stroke-width", "4"], ["x1", "12", "x2", "16", "y1", "45", "y2", "45", "fill", "none", "stroke", "#524f4f", "stroke-miterlimit", "10", "stroke-width", "4"], ["x1", "24", "x2", "28", "y1", "45", "y2", "45", "fill", "none", "stroke", "#524f4f", "stroke-miterlimit", "10", "stroke-width", "4"], ["x1", "36", "x2", "40", "y1", "45", "y2", "45", "fill", "none", "stroke", "#524f4f", "stroke-miterlimit", "10", "stroke-width", "4"], ["x1", "48", "x2", "52", "y1", "45", "y2", "45", "fill", "none", "stroke", "#524f4f", "stroke-miterlimit", "10", "stroke-width", "4"], ["x1", "12", "x2", "16", "y1", "53", "y2", "53", "fill", "none", "stroke", "#524f4f", "stroke-miterlimit", "10", "stroke-width", "4"], ["x1", "24", "x2", "28", "y1", "53", "y2", "53", "fill", "none", "stroke", "#524f4f", "stroke-miterlimit", "10", "stroke-width", "4"], ["x1", "36", "x2", "40", "y1", "53", "y2", "53", "fill", "none", "stroke", "#524f4f", "stroke-miterlimit", "10", "stroke-width", "4"], ["x1", "14", "x2", "14", "y1", "3", "y2", "15", "fill", "none", "stroke", "#524f4f", "stroke-miterlimit", "10", "stroke-width", "4"], ["x1", "50", "x2", "50", "y1", "3", "y2", "15", "fill", "none", "stroke", "#524f4f", "stroke-miterlimit", "10", "stroke-width", "4"], ["width", "20.00pt", "height", "20.00pt", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 48 48"], ["fill", "#524f4f", "d", "M16,13h7a1,1,0,0,0,1-1V6H39a1,1,0,0,1,1,1V9.83h2V7a3,3,0,0,0-3-3H23a1,1,0,0,0-.65.26h0l-8,7h0A1,1,0,0,0,14,12V22.13h2Zm1.66-2L22,7.2V11ZM40,38.83h2V41a3,3,0,0,1-3,3H17a3,3,0,0,1-3-3V38.87h2V41a1,1,0,0,0,1,1H39a1,1,0,0,0,1-1ZM21,38h6V36H26V21a1,1,0,0,0-1-1H21a1,1,0,0,0-1,1V36H18V25a1,1,0,0,0-1-1H13a1,1,0,0,0-1,1V36H10V30a1,1,0,0,0-1-1H5a1,1,0,0,0-1,1v6H3v2H21Zm1-16h2V36H22ZM6,36V31H8v5Zm8,0V26h2V36ZM42,11H40a3,3,0,0,0-3,3V33a1,1,0,0,0,.2.6l3,4a1,1,0,0,0,1.6,0l3-4A1,1,0,0,0,45,33V14A3,3,0,0,0,42,11Zm-2,2h2a1,1,0,0,1,1,1v1H39V14A1,1,0,0,1,40,13Zm1,22.33-2-2.66V17h4V32.67Z", "data-name", "10 Graphical Representation, Analytics, Business Evaluation, Infographic, Statistical Representation"], ["width", "20.00pt", "height", "20.00pt", "xmlns", "http://www.w3.org/2000/svg", "id", "Layer_1", "x", "0", "y", "0", "version", "1.1", "viewBox", "0 0 29 29", 0, "xml", "space", "preserve"], ["d", "M8.5 21.5C4.916 21.5 2 18.584 2 15s2.916-6.5 6.5-6.5S15 11.416 15 15s-2.916 6.5-6.5 6.5zm0-11C6.019 10.5 4 12.519 4 15s2.019 4.5 4.5 4.5S13 17.481 13 15s-2.019-4.5-4.5-4.5z", "fill", "#524f4f"], ["d", "M10 16h-.5v.5a1 1 0 11-2 0V16H7a1 1 0 110-2h.5v-.5a1 1 0 112 0v.5h.5a1 1 0 110 2zM26 21.5H15a1 1 0 010-2h11a1 1 0 010 2zM26 17.5h-9a1 1 0 010-2h9a1 1 0 010 2zM26 13.5h-9a1 1 0 010-2h9a1 1 0 010 2zM26 9.5H15a1 1 0 010-2h11a1 1 0 010 2z", "fill", "#524f4f"], ["data-name", "Add Contact"], ["fill", "#524f4f", "d", "M26.66 31.86A11.52 11.52 0 1 1 38.18 20.34 11.53 11.53 0 0 1 26.66 31.86zm0-20a8.52 8.52 0 1 0 8.52 8.51A8.52 8.52 0 0 0 26.66 11.83zM26.66 55.17a24.55 24.55 0 0 1-16.12-5.59 1.49 1.49 0 0 1-.43-1.4c2-9.58 7.91-14.86 16.55-14.86a1.5 1.5 0 1 1 0 3c-6.91 0-11.54 4-13.42 11.6a22.64 22.64 0 0 0 13.42 4.25 1.5 1.5 0 0 1 0 3z"], ["fill", "#524f4f", "d", "M26.66 55.17a1.5 1.5 0 1 1 0-3 23.21 23.21 0 0 0 9.41-1.94A1.5 1.5 0 1 1 37.28 53 26.16 26.16 0 0 1 26.66 55.17zM41.74 50a1.51 1.51 0 0 1-1.47-1.19c-1.73-8.16-6.44-12.48-13.61-12.48a1.5 1.5 0 0 1 0-3c8.64 0 14.51 5.28 16.55 14.86A1.51 1.51 0 0 1 42.05 50 1.63 1.63 0 0 1 41.74 50zM46.76 38.26a1.5 1.5 0 0 1-1.5-1.5V25.42a1.5 1.5 0 0 1 3 0V36.76A1.51 1.51 0 0 1 46.76 38.26z"], ["fill", "#524f4f", "d", "M46.76 32.59H41.09a1.5 1.5 0 1 1 0-3h5.67a1.5 1.5 0 0 1 0 3zM52.43 32.59H50.68a1.5 1.5 0 1 1 0-3h1.75a1.5 1.5 0 1 1 0 3z"], ["width", "20.00pt", "height", "20.00pt", "xmlns", "http://www.w3.org/2000/svg", "data-name", "Layer 1", "viewBox", "0 0 512 512"], ["fill", "#524f4f", "d", "M100.5,147.5h183a7.5,7.5,0,0,0,0-15h-183a7.5,7.5,0,0,0,0,15ZM471,257.81V37.5A37.54,37.54,0,0,0,433.5,0h-213A37.54,37.54,0,0,0,183,37.5V52.26H145.5A37.54,37.54,0,0,0,108,89.76v7.5H85.5A37.54,37.54,0,0,0,48,134.76v61.52A37.55,37.55,0,0,0,15,233.5v241A37.54,37.54,0,0,0,52.5,512h407A37.54,37.54,0,0,0,497,474.5v-181A37.56,37.56,0,0,0,471,257.81ZM198,37.5A22.52,22.52,0,0,1,220.5,15h213A22.52,22.52,0,0,1,456,37.5V256H396V89.76a37.54,37.54,0,0,0-37.5-37.5H198ZM123,89.76a22.52,22.52,0,0,1,22.5-22.5h213A22.52,22.52,0,0,1,381,89.76V256H336V134.76a37.54,37.54,0,0,0-37.5-37.5H123Zm-60,45a22.52,22.52,0,0,1,22.5-22.5h213a22.52,22.52,0,0,1,22.5,22.5V256H286.69a22.61,22.61,0,0,1-16.11-6.79l-40.88-41.9A37.72,37.72,0,0,0,202.86,196H63ZM482,474.5A22.52,22.52,0,0,1,459.5,497H52.5A22.52,22.52,0,0,1,30,474.5v-241A22.52,22.52,0,0,1,52.5,211H202.86a22.61,22.61,0,0,1,16.1,6.79l40.89,41.9A37.69,37.69,0,0,0,286.69,271H459.5A22.52,22.52,0,0,1,482,293.5ZM322,332.11H303.71v-7.73a20.25,20.25,0,0,0-20.23-20.23h-55a20.25,20.25,0,0,0-20.23,20.23v7.73H190a19,19,0,0,0-19,19v93.7a19,19,0,0,0,19,19H322a19,19,0,0,0,19-19v-93.7A19,19,0,0,0,322,332.11Zm-98.7-7.73a5.23,5.23,0,0,1,5.23-5.23h55a5.23,5.23,0,0,1,5.23,5.23v7.73H223.29ZM326,444.83a4,4,0,0,1-4,4H190a4,4,0,0,1-4-4V386.76l46.83,23.37v9.64a14.52,14.52,0,0,0,14.5,14.5h17.36a14.52,14.52,0,0,0,14.5-14.5v-9.64L326,386.76Zm-78.19-25.56V402.92h16.36v16.35ZM326,370l-49.18,24.54a14.49,14.49,0,0,0-12.15-6.62H247.32a14.49,14.49,0,0,0-12.15,6.62L186,370V351.13a4,4,0,0,1,4-4H322a4,4,0,0,1,4,4ZM291,170a7.5,7.5,0,0,0-7.5-7.5h-183a7.5,7.5,0,0,0,0,15h183A7.5,7.5,0,0,0,291,170Z"], ["width", "20.00pt", "height", "20.00pt", "xmlns", "http://www.w3.org/2000/svg", "enable-background", "new 0 0 68 68", "viewBox", "0 0 68 68"], ["fill", "#524f4f", "d", "M52.8361816,66v-4.2431641c0-0.5522461-0.4477539-1-1-1h-3.9150391V15.6914063c0-1.6542969-1.3457031-3-3-3h-6.2084961\n                    v-3.847168c0-2.2549438-1.5938721-4.1403809-3.7128906-4.6009521V2c0-0.5522461-0.4477539-1-1-1s-1,0.4477539-1,1v2.2432861\n                    c-2.1188354,0.4606323-3.7124023,2.3460693-3.7124023,4.6009521v3.847168h-6.2084961c-1.6542969,0-3,1.3457031-3,3v45.0654297\n                    h-3.9150391c-0.5522451,0-0.999999,0.4477539-0.999999,1V66c0,0.5522461,0.4477539,1,0.999999,1h35.6723633\n                    C52.3884277,67,52.8361816,66.5522461,52.8361816,66z M31.2873535,8.8442383c0-1.4960938,1.2167969-2.7128906,2.7124023-2.7128906\n                    c1.4960938,0,2.7128906,1.2167969,2.7128906,2.7128906v3.847168h-5.425293V8.8442383z M22.0788574,15.6914063\n                    c0-0.5512695,0.4487305-1,1-1c7.7866821,0,13.9592285,0,21.8422852,0c0.5512695,0,1,0.4487305,1,1v45.0654297H22.0788574\n                    V15.6914063z M50.8361816,65H17.1638184v-2.2431641c12.2659912,0,21.1560059,0,33.6723633,0V65z"], ["fill", "#524f4f", "d", "M41.9997559,17.7241211c-5.5958862,0-10.4041138,0-16,0c-0.5522461,0-1,0.4477539-1,1c0,14.0767212,0,23.8206787,0,38\n                    c0,0.5522461,0.4477539,1,1,1c5.5958862,0,10.4041138,0,16,0c0.5522461,0,1-0.4477539,1-1c0-14.1781006,0-23.9225464,0-38\n                    C42.9997559,18.171875,42.552002,17.7241211,41.9997559,17.7241211z M32.9997559,55.7241211h-6V45.0615234h6V55.7241211z\n                     M32.9997559,43.0488281h-6V32.3994141h6V43.0488281z M32.9997559,30.3867188h-6V19.7241211h6V30.3867188z M40.9997559,55.7241211\n                    h-6V45.0615234h6V55.7241211z M40.9997559,43.0488281h-6V32.3994141h6V43.0488281z M40.9997559,30.3867188h-6V19.7241211h6\n                    V30.3867188z"], ["fill", "#524f4f", "d", "M139.05469,452h-63a7.5,7.5,0,1,0,0,15h63a7.5,7.5,0,0,0,0-15Zm-21.5-309a49,49,0,1,0-49-49A49.05568,49.05568,0,0,0,117.55469,143Zm0-83a34,34,0,1,1-34,34A34.038,34.038,0,0,1,117.55469,60Zm126.5,293h-168a7.5,7.5,0,0,0,0,15h168a7.5,7.5,0,0,0,0-15ZM472.58691,136.50293c-3.5498-3.81055-6.90332-7.40918-8.89941-10.86035-2.12793-3.67676-3.65625-8.53906-5.27344-13.68653-3.23047-10.27832-6.89258-21.92871-17.14746-27.86328-9.9414-5.751-21.71-3.19336-32.09472-.9375-2.62061.56958-5.16895,1.12085-7.61719,1.54248V37.5a37.54227,37.54227,0,0,0-37.5-37.5h-303a37.54226,37.54226,0,0,0-37.5,37.5v437a37.54226,37.54226,0,0,0,37.5,37.5h303a37.54227,37.54227,0,0,0,37.5-37.5V351.52148L418.37305,363.916a10.49835,10.49835,0,0,0,16.73144-8.44629V250.10352a24.82233,24.82233,0,0,0,6.16211-2.50977c10.25488-5.93359,13.917-17.584,17.14746-27.86328,1.61719-5.14746,3.14551-10.00977,5.27344-13.68652,1.99609-3.45118,5.34961-7.04981,8.90039-10.86036,7.43262-7.97656,15.85742-17.01757,15.85742-29.33984S480.02051,144.47949,472.58691,136.50293ZM386.55469,474.5a22.52586,22.52586,0,0,1-22.5,22.5h-303a22.52586,22.52586,0,0,1-22.5-22.5V37.5a22.52586,22.52586,0,0,1,22.5-22.5h303a22.52586,22.52586,0,0,1,22.5,22.5V84.69775c-2.44824-.42163-4.99658-.9729-7.61719-1.54248-10.38281-2.25683-22.15137-4.81543-32.09375.9375-10.25586,5.9336-13.917,17.584-17.14746,27.86328-1.61817,5.14747-3.14551,10.00977-5.27246,13.68653-1.99707,3.45019-5.35059,7.04883-8.90039,10.85937-7.4336,7.97754-15.8584,17.01953-15.8584,29.3418A26.78217,26.78217,0,0,0,300.655,173H76.05469a7.5,7.5,0,0,0,0,15H309.10852c2.07324,2.51587,4.28259,4.89648,6.41492,7.18457,3.5498,3.81055,6.90332,7.40918,8.89941,10.85938A62.20662,62.20662,0,0,1,329.15063,218H76.05469a7.5,7.5,0,0,0,0,15H334.51245c2.70947,5.85742,6.42285,11.17578,12.33032,14.59375a24.81738,24.81738,0,0,0,6.16211,2.50732V263H71.05469a7.5,7.5,0,1,0,0,15H353.00488v30H71.05469a7.5,7.5,0,1,0,0,15H353.00488v32.46973a10.49077,10.49077,0,0,0,16.7295,8.44824l16.82031-12.39526Zm33.5498-127.94141-19.82226-14.60742a10.45535,10.45535,0,0,0-12.45606.001l-19.82129,14.60742V250.59546c3.72-.49878,7.40674-1.2981,10.93262-2.06421,5.43652-1.18164,10.57129-2.29785,15.11719-2.29785s9.68066,1.11621,15.11719,2.29785c3.52636.76611,7.21289,1.55908,10.93261,2.05737ZM461.61328,184.958c-3.96387,4.2539-8.0625,8.65234-10.91016,13.57422-2.95605,5.11035-4.80859,11.00293-6.5996,16.70117-2.64454,8.415-5.14258,16.36426-10.34864,19.376-4.917,2.84765-12.9209,1.10644-21.39648-.73633-5.97168-1.29785-12.14649-2.63965-18.30371-2.63965s-12.332,1.3418-18.30371,2.63965c-8.47559,1.84179-16.47852,3.583-21.39649.73633-5.20605-3.01172-7.70312-10.96-10.34863-19.376-1.79-5.69824-3.6416-11.59082-6.59961-16.70117-2.84668-4.92188-6.94531-9.31934-10.90918-13.57325-6.085-6.53027-11.832-12.69824-11.832-19.11523s5.74805-12.58594,11.833-19.11621c3.96289-4.25391,8.06152-8.65234,10.90918-13.57324,2.956-5.11035,4.80859-11.00293,6.59863-16.70118,2.64551-8.415,5.14355-16.36425,10.34961-19.376a13.52383,13.52383,0,0,1,6.82812-1.50391c4.26368,0,9.32618,1.10059,14.56739,2.24024,5.97168,1.29785,12.14648,2.63964,18.30371,2.63964s12.332-1.34179,18.30371-2.63964c8.47265-1.8418,16.47656-3.583,21.39648-.73731,5.20606,3.0127,7.7041,10.96192,10.34864,19.37793,1.791,5.69727,3.64355,11.58985,6.5996,16.7002,2.84766,4.92187,6.94629,9.32031,10.91016,13.57422,6.085,6.53027,11.832,12.69824,11.832,19.11523S467.69824,178.42871,461.61328,184.958Zm-22.04883-36.87012c-2.25293-1.46582-5.65722-3.68164-6.33886-4.85937-.77149-1.333-1.01172-5.38184-1.18653-8.3379-.42285-7.15039-.95019-16.0498-8.35937-20.33593-7.22852-4.18262-15.07129-.29-21.37207,2.83789-2.74414,1.3623-6.50391,3.22851-8.25293,3.22851s-5.50781-1.86621-8.25293-3.22851c-6.30078-3.127-14.1416-7.01953-21.37207-2.83789-7.40821,4.28613-7.93555,13.18554-8.3584,20.33691-.17481,2.95606-.415,7.00488-1.18555,8.33692-.68164,1.17871-4.08594,3.39355-6.33886,4.85937-6.11036,3.97461-13.71387,8.92188-13.71387,17.75586,0,8.833,7.60351,13.78027,13.71289,17.75488,2.25293,1.46582,5.65722,3.68067,6.33887,4.85938.77148,1.333,1.01171,5.38183,1.18652,8.33789.42285,7.15039.95019,16.0498,8.35742,20.335,7.22949,4.18262,15.07227.291,21.374-2.83691,2.74415-1.36231,6.50293-3.22852,8.252-3.22852s5.50781,1.86621,8.25293,3.22852c4.332,2.15136,9.39258,4.66308,14.48242,4.66308a13.49316,13.49316,0,0,0,6.89062-1.82519c7.40821-4.28614,7.93555-13.18555,8.3584-20.33594.17481-2.95606.415-7.00488,1.18555-8.33789.68262-1.17871,4.08691-3.39356,6.33984-4.85938,6.10938-3.97461,13.71289-8.92187,13.71289-17.75488C453.27734,157.00977,445.67383,152.0625,439.56445,148.08789Zm-8.17968,22.9375c-4.25977,2.77149-8.665,5.6377-11.14356,9.9209-2.55078,4.41016-2.86816,9.77441-3.17578,14.96289-.14355,2.42773-.373,6.293-.97949,7.97461a40.68328,40.68328,0,0,1-7.1084-3.02539c-4.74707-2.35645-9.65527-4.793-14.92285-4.793-5.2666,0-10.17578,2.43652-14.92188,4.793a40.71471,40.71471,0,0,1-7.1084,3.02539c-.60644-1.68164-.83593-5.54688-.97949-7.97461-.30762-5.18848-.625-10.55273-3.17676-14.96289-2.47754-4.2832-6.88281-7.14941-11.14257-9.9209-2.07129-1.34766-5.79883-3.77344-6.76758-5.18164.96777-1.40918,4.69629-3.835,6.76855-5.18359,4.25977-2.77051,8.66406-5.63575,11.14258-9.91895,2.55078-4.41016,2.86816-9.77441,3.17578-14.96289.14356-2.42773.37305-6.293.97949-7.97461a40.70478,40.70478,0,0,1,7.1084,3.02441c4.7461,2.35645,9.65528,4.793,14.92188,4.793,5.26758,0,10.17578-2.43652,14.92285-4.793a40.78991,40.78991,0,0,1,7.1084-3.02539c.60644,1.68262.83594,5.54688.97949,7.97461.30762,5.18848.625,10.55274,3.17676,14.96289,2.47754,4.28321,6.88183,7.14942,11.1416,9.9209,2.07226,1.34766,5.80078,3.77344,6.76953,5.18262C437.18359,167.252,433.45605,169.67773,431.38477,171.02539ZM332.791,443.38672c-.377.373-9.36231,9.09082-21.91309,6.82519a23.90528,23.90528,0,0,1-12.55859-6.55371,23.49235,23.49235,0,0,0-29.76856-2.23828l-15.26562,10.65625a7.50046,7.50046,0,1,0,8.58593,12.30078l15.26563-10.65722a8.469,8.469,0,0,1,10.73926.706,38.64861,38.64861,0,0,0,20.33593,10.54785c19.77539,3.56446,33.61231-9.42578,35.124-10.91894a7.5,7.5,0,0,0-10.54492-10.668Z"], [1, "nav-link", 3, "routerLink"], ["class", "nav-item", 3, "ngClass", 4, "ngIf"], ["class", "nav-link", 3, "routerLink", "click", 4, "ngIf"], ["class", "nav-link", 3, "click", 4, "ngIf"], ["class", "nav nav-treeview", 4, "ngIf"], ["class", "nav-item  ml-3", 4, "ngIf"]],
        template: function MenuSidebarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aside", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Admin WHS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MenuSidebarComponent_div_6_Template, 507, 127, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nav", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MenuSidebarComponent_ng_container_10_Template, 2, 1, "ng-container", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c54));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navItems);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], angular_svg_icon__WEBPACK_IMPORTED_MODULE_5__["SvgIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]],
        styles: [".main-sidebar[_ngcontent-%COMP%] {\n  height: 100vh;\n  overflow: scroll;\n  position: fixed;\n}\n\n.brand-image[_ngcontent-%COMP%] {\n  float: none !important;\n}\n\n.brand-link[_ngcontent-%COMP%]   .brand-image[_ngcontent-%COMP%] {\n  margin: 0px 10px 0px 0px !important;\n}\n\n.m-t-20[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.adminDashboardNav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-left: 10px !important;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.navLinkColor[_ngcontent-%COMP%] {\n  color: #949292;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  overflow: scroll;\n}\n\n.myColor[_ngcontent-%COMP%] {\n  color: #007bff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbWVudS1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUVBLGdCQUFBO0VBRUEsZUFBQTtBQURGOztBQUlBO0VBQ0Usc0JBQUE7QUFERjs7QUFJQTtFQUNFLG1DQUFBO0FBREY7O0FBSUE7RUFDRSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLGNBQUE7QUFERjs7QUFJQTtFQUNFLGdCQUFBO0FBREY7O0FBSUE7RUFDRSx5QkFBQTtBQURGIiwiZmlsZSI6Im1lbnUtc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLXNpZGViYXIge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgLy9AZXh0ZW5kOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gIG92ZXJmbG93OiBzY3JvbGw7XHJcblxyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxufVxyXG5cclxuLmJyYW5kLWltYWdlIHtcclxuICBmbG9hdDogbm9uZSAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5icmFuZC1saW5rIC5icmFuZC1pbWFnZSB7XHJcbiAgbWFyZ2luOiAwcHggMTBweCAwcHggMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tLXQtMjAge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5hZG1pbkRhc2hib2FyZE5hdiBsaSBwIHtcclxuICBtYXJnaW4tbGVmdDogMTBweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4ubmF2TGlua0NvbG9yIHtcclxuICBjb2xvcjogIzk0OTI5MjtcclxufVxyXG5cclxuLnNpZGViYXIge1xyXG4gIG92ZXJmbG93OiBzY3JvbGw7XHJcbn1cclxuXHJcbi5teUNvbG9yIHtcclxuICBjb2xvcjogIzAwN2JmZiAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuSidebarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-menu-sidebar',
            templateUrl: './menu-sidebar.component.html',
            styleUrls: ['./menu-sidebar.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_utils_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]
          }, {
            type: src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_2__["SetTitleService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, {
          mainSidebar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['mainSidebar', {
              "static": false
            }]
          }],
          mainSidebarHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          logoUrl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "AytR": function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });

      var environment = {
        production: false,
        apiUrl: 'http://13.127.90.176:3148/api/v1/',
        stagingUrl: 'http://54.201.160.69:3152/',
        allRouteTemp: true
      };
      /***/
    },

    /***/
    "CkB4": function CkB4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlankComponent", function () {
        return BlankComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var BlankComponent = /*#__PURE__*/function () {
        function BlankComponent() {
          _classCallCheck(this, BlankComponent);
        }

        _createClass(BlankComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BlankComponent;
      }();

      BlankComponent.ɵfac = function BlankComponent_Factory(t) {
        return new (t || BlankComponent)();
      };

      BlankComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BlankComponent,
        selectors: [["app-blank"]],
        decls: 28,
        vars: 0,
        consts: [[1, "content-header"], [1, "container-fluid"], [1, "row", "mb-2"], [1, "col-sm-6"], [1, "breadcrumb", "float-sm-right"], [1, "breadcrumb-item"], ["href", "#"], [1, "breadcrumb-item", "active"], [1, "content"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-tools"], ["type", "button", "data-widget", "collapse", "data-toggle", "tooltip", "title", "Collapse", 1, "btn", "btn-tool"], [1, "fa", "fa-minus"], ["type", "button", "data-widget", "remove", "data-toggle", "tooltip", "title", "Remove", 1, "btn", "btn-tool"], [1, "fa", "fa-times"], [1, "card-body"], [1, "card-footer"]],
        template: function BlankComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Blank Page");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ol", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Blank Page");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Start creating your amazing application! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Footer ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibGFuay5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlankComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-blank',
            templateUrl: './blank.component.html',
            styleUrls: ['./blank.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "D2ja": function D2ja(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DynamicFormComponent", function () {
        return DynamicFormComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-spinner */
      "7g+E");
      /* harmony import */


      var src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/utils/services/logical-form-info.service */
      "wbBK");
      /* harmony import */


      var src_app_utils_services_dynamic_forms_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/utils/services/dynamic-forms.service */
      "+3ge");
      /* harmony import */


      var _utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../utils/services/set-title.service */
      "yZxC");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var ngx_drag_drop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-drag-drop */
      "o2WJ");
      /* harmony import */


      var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! angular2-signaturepad */
      "r1zJ");

      var _c0 = ["projectManager"];
      var _c1 = ["Signature"];

      function DynamicFormComponent_div_0_div_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DynamicFormComponent_div_0_div_11_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r12.formNameRecieved = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r7.formNameRecieved);
        }
      }

      function DynamicFormComponent_div_0_div_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Configure With Job Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DynamicFormComponent_div_0_div_12_Template_input_change_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r14.onChange2($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r8.isHidden);
        }
      }

      function DynamicFormComponent_div_0_div_13_option_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var state_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", state_r18._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](state_r18.title);
        }
      }

      function DynamicFormComponent_div_0_div_13_option_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var jobNo_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", jobNo_r19._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](jobNo_r19.jobNumber);
        }
      }

      function DynamicFormComponent_div_0_div_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Site Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Customer Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Street Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Street Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Suburb");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "State");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "select", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, DynamicFormComponent_div_0_div_13_option_29_Template, 2, 2, "option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Customer Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Customer Contact Phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Customer Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Job Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "select", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DynamicFormComponent_div_0_div_13_Template_select_change_47_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r20.jobNoSel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "option", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, DynamicFormComponent_div_0_div_13_option_50_Template, 2, 2, "option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r9.riskAssessmentFb);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.states);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.allJobNumbers);
        }
      }

      function DynamicFormComponent_div_0_div_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dndEnd", function DynamicFormComponent_div_0_div_16_Template_div_dndEnd_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r23.onDragEnd($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r22 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dndDraggable", item_r22)("dndEffectAllowed", "copy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r22.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r22.label);
        }
      }

      function DynamicFormComponent_div_0_div_18_div_3_div_5_label_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DynamicFormComponent_div_0_div_18_div_3_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DynamicFormComponent_div_0_div_18_div_3_div_5_label_3_Template, 2, 0, "label", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r28.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r28.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r28.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", item_r28.placeholder);
        }
      }

      function DynamicFormComponent_div_0_div_18_div_3_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", item_r28.linkAddr, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r28.label);
        }
      }

      function DynamicFormComponent_div_0_div_18_div_3_div_7_label_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DynamicFormComponent_div_0_div_18_div_3_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DynamicFormComponent_div_0_div_18_div_3_div_7_label_3_Template, 2, 0, "label", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r28.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r28.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r28.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", item_r28.placeholder);
        }
      }

      function DynamicFormComponent_div_0_div_18_div_3_div_8_label_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DynamicFormComponent_div_0_div_18_div_3_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DynamicFormComponent_div_0_div_18_div_3_div_8_label_3_Template, 2, 0, "label", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r28.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r28.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r28.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", item_r28.placeholder);
        }
      }

      function DynamicFormComponent_div_0_div_18_div_3_div_9_label_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DynamicFormComponent_div_0_div_18_div_3_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DynamicFormComponent_div_0_div_18_div_3_div_9_label_3_Template, 2, 0, "label", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r28.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r28.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r28.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("min", item_r28.min);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("max", item_r28.max);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", item_r28.placeholder);
        }
      }

      function DynamicFormComponent_div_0_div_18_div_3_div_10_label_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DynamicFormComponent_div_0_div_18_div_3_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DynamicFormComponent_div_0_div_18_div_3_div_10_label_3_Template, 2, 0, "label", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r28.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r28.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r28.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", item_r28.placeholder);
        }
      }

      function DynamicFormComponent_div_0_div_18_div_3_div_11_label_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DynamicFormComponent_div_0_div_18_div_3_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DynamicFormComponent_div_0_div_18_div_3_div_11_label_3_Template, 2, 0, "label", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r28.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r28.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r28.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", item_r28.placeholder);
        }
      }

      function DynamicFormComponent_div_0_div_18_div_3_div_12_label_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DynamicFormComponent_div_0_div_18_div_3_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DynamicFormComponent_div_0_div_18_div_3_div_12_label_3_Template, 2, 0, "label", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "textarea", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r28.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r28.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r28.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", item_r28.placeholder);
        }
      }

      function DynamicFormComponent_div_0_div_18_div_3_div_13_label_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DynamicFormComponent_div_0_div_18_div_3_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DynamicFormComponent_div_0_div_18_div_3_div_13_label_3_Template, 2, 0, "label", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "small", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r28.label, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r28.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r28.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", item_r28.placeholder);
        }
      }

      function DynamicFormComponent_div_0_div_18_div_3_div_14_label_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DynamicFormComponent_div_0_div_18_div_3_div_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DynamicFormComponent_div_0_div_18_div_3_div_14_label_3_Template, 2, 0, "label", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "signature-pad", 78, 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onBeginEvent", function DynamicFormComponent_div_0_div_18_div_3_div_14_Template_signature_pad_onBeginEvent_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

            var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

            return ctx_r70.drawStart();
          })("onEndEvent", function DynamicFormComponent_div_0_div_18_div_3_div_14_Template_signature_pad_onEndEvent_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

            var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

            return ctx_r72.drawComplete();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicFormComponent_div_0_div_18_div_3_div_14_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

            var i_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

            var j_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

            var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r73.clear(j_r26, i_r29);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Clear ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r28.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r28.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r39.signaturePadOptions);
        }
      }

      function DynamicFormComponent_div_0_div_18_div_3_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r28.placeholder);
        }
      }

      function DynamicFormComponent_div_0_div_18_div_3_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r28.placeholder, " ");
        }
      }

      function DynamicFormComponent_div_0_div_18_div_3_div_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "add_circle_outline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "remove_circle_outline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DynamicFormComponent_div_0_div_18_div_3_div_18_label_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DynamicFormComponent_div_0_div_18_div_3_div_18_option_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var v_r81 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", v_r81.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", v_r81.label, " ");
        }
      }

      function DynamicFormComponent_div_0_div_18_div_3_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DynamicFormComponent_div_0_div_18_div_3_div_18_label_3_Template, 2, 0, "label", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DynamicFormComponent_div_0_div_18_div_3_div_18_option_5_Template, 2, 2, "option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r28.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r28.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r28.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r28.values);
        }
      }

      function DynamicFormComponent_div_0_div_18_div_3_div_19_label_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DynamicFormComponent_div_0_div_18_div_3_div_19_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicFormComponent_div_0_div_18_div_3_div_19_div_5_Template_input_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87);

            var v_r85 = ctx.$implicit;

            var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);

            return ctx_r86.toggleValue(v_r85);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var v_r85 = ctx.$implicit;

          var item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", item_r28.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", v_r85.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", v_r85.label, " ");
        }
      }

      function DynamicFormComponent_div_0_div_18_div_3_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DynamicFormComponent_div_0_div_18_div_3_div_19_label_3_Template, 2, 0, "label", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DynamicFormComponent_div_0_div_18_div_3_div_19_div_5_Template, 5, 3, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r28.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r28.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r28.values);
        }
      }

      function DynamicFormComponent_div_0_div_18_div_3_div_20_label_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DynamicFormComponent_div_0_div_18_div_3_div_20_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var v_r92 = ctx.$implicit;

          var item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", item_r28.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", v_r92.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", v_r92.label, " ");
        }
      }

      function DynamicFormComponent_div_0_div_18_div_3_div_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DynamicFormComponent_div_0_div_18_div_3_div_20_label_4_Template, 2, 0, "label", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DynamicFormComponent_div_0_div_18_div_3_div_20_div_5_Template, 5, 3, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r28.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r28.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r28.values);
        }
      }

      function DynamicFormComponent_div_0_div_18_div_3_div_21_th_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DynamicFormComponent_div_0_div_18_div_3_div_21_tr_8_td_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DynamicFormComponent_div_0_div_18_div_3_div_21_tr_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicFormComponent_div_0_div_18_div_3_div_21_tr_8_td_1_Template, 2, 0, "td", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r98 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r98);
        }
      }

      function DynamicFormComponent_div_0_div_18_div_3_div_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DynamicFormComponent_div_0_div_18_div_3_div_21_th_6_Template, 2, 0, "th", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DynamicFormComponent_div_0_div_18_div_3_div_21_tr_8_Template, 2, 1, "tr", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicFormComponent_div_0_div_18_div_3_div_21_Template_span_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r103);

            var i_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

            var j_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

            var ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r101.addCol(j_r26, i_r29);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "add_circle_outline ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicFormComponent_div_0_div_18_div_3_div_21_Template_span_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r103);

            var i_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

            var j_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

            var ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r105.removeCol(j_r26, i_r29);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "remove_circle_outline ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicFormComponent_div_0_div_18_div_3_div_21_Template_span_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r103);

            var i_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

            var j_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

            var ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r108.addRow(j_r26, i_r29);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "add_circle_outline ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicFormComponent_div_0_div_18_div_3_div_21_Template_span_click_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r103);

            var i_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

            var j_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

            var ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r111.removeRow(j_r26, i_r29);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "remove_circle_outline ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r28.tableHeading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r28.tableRows);
        }
      }

      function DynamicFormComponent_div_0_div_18_div_3_div_22_Template(rf, ctx) {
        if (rf & 1) {
          var _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicFormComponent_div_0_div_18_div_3_div_22_Template_input_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r116);

            var ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

            return ctx_r115.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("type", item_r28.subtype);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", item_r28.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r28.name);
        }
      }

      function DynamicFormComponent_div_0_div_18_div_3_i_24_Template(rf, ctx) {
        if (rf & 1) {
          var _r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicFormComponent_div_0_div_18_div_3_i_24_Template_i_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r120);

            var item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            return item_r28.toggle = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DynamicFormComponent_div_0_div_18_div_3_i_25_Template(rf, ctx) {
        if (rf & 1) {
          var _r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicFormComponent_div_0_div_18_div_3_i_25_Template_i_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r123);

            var item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            return item_r28.toggle = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DynamicFormComponent_div_0_div_18_div_3_div_27_i_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicFormComponent_div_0_div_18_div_3_div_27_i_4_Template_i_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r134);

            var item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

            return item_r28.required = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DynamicFormComponent_div_0_div_18_div_3_div_27_i_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicFormComponent_div_0_div_18_div_3_div_27_i_5_Template_i_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r137);

            var item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

            return item_r28.required = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DynamicFormComponent_div_0_div_18_div_3_div_27_div_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r140 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Placeholder");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DynamicFormComponent_div_0_div_18_div_3_div_27_div_12_Template_input_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r140);

            var item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

            return item_r28.placeholder = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r28.placeholder);
        }
      }

      function DynamicFormComponent_div_0_div_18_div_3_div_27_div_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r144 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Regex");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DynamicFormComponent_div_0_div_18_div_3_div_27_div_13_Template_input_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r144);

            var item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

            return item_r28.regex = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r28.regex);
        }
      }

      function DynamicFormComponent_div_0_div_18_div_3_div_27_div_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r148 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Link Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DynamicFormComponent_div_0_div_18_div_3_div_27_div_14_Template_input_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r148);

            var item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

            return item_r28.linkAddr = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r28.linkAddr);
        }
      }

      function DynamicFormComponent_div_0_div_18_div_3_div_27_div_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r152 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Error text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DynamicFormComponent_div_0_div_18_div_3_div_27_div_15_Template_input_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r152);

            var item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

            return item_r28.errorText = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r28.errorText);
        }
      }

      function DynamicFormComponent_div_0_div_18_div_3_div_27_div_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r156 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Min");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DynamicFormComponent_div_0_div_18_div_3_div_27_div_16_Template_input_ngModelChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r156);

            var item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

            return item_r28.min = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Max");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DynamicFormComponent_div_0_div_18_div_3_div_27_div_16_Template_input_ngModelChange_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r156);

            var item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

            return item_r28.max = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r28.min);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r28.max);
        }
      }

      function DynamicFormComponent_div_0_div_18_div_3_div_27_div_17_div_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r167 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DynamicFormComponent_div_0_div_18_div_3_div_27_div_17_div_14_Template_input_ngModelChange_3_listener($event) {
            var i_r161 = ctx.$implicit;
            return i_r161.label = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DynamicFormComponent_div_0_div_18_div_3_div_27_div_17_div_14_Template_input_ngModelChange_6_listener($event) {
            var i_r161 = ctx.$implicit;
            return i_r161.value = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicFormComponent_div_0_div_18_div_3_div_27_div_17_div_14_Template_label_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r167);

            var valueIndex_r162 = ctx.index;

            var item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

            return item_r28.values.splice(valueIndex_r162, 1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "remove");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r161 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", i_r161.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", i_r161.value);
        }
      }

      function DynamicFormComponent_div_0_div_18_div_3_div_27_div_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r169 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Value");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DynamicFormComponent_div_0_div_18_div_3_div_27_div_17_div_14_Template, 11, 2, "div", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DynamicFormComponent_div_0_div_18_div_3_div_27_div_17_Template_input_ngModelChange_18_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r169);

            var ctx_r168 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);

            return ctx_r168.value.label = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DynamicFormComponent_div_0_div_18_div_3_div_27_div_17_Template_input_ngModelChange_21_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r169);

            var ctx_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);

            return ctx_r170.value.value = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicFormComponent_div_0_div_18_div_3_div_27_div_17_Template_label_click_24_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r169);

            var item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

            var ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r171.addValue(item_r28.values);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r28.values);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r131.value.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r131.value.value);
        }
      }

      function DynamicFormComponent_div_0_div_18_div_3_div_27_Template(rf, ctx) {
        if (rf & 1) {
          var _r176 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DynamicFormComponent_div_0_div_18_div_3_div_27_i_4_Template, 1, 0, "i", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DynamicFormComponent_div_0_div_18_div_3_div_27_i_5_Template, 1, 0, "i", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DynamicFormComponent_div_0_div_18_div_3_div_27_Template_input_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r176);

            var item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            return item_r28.label = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DynamicFormComponent_div_0_div_18_div_3_div_27_div_12_Template, 4, 1, "div", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DynamicFormComponent_div_0_div_18_div_3_div_27_div_13_Template, 4, 1, "div", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DynamicFormComponent_div_0_div_18_div_3_div_27_div_14_Template, 4, 1, "div", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DynamicFormComponent_div_0_div_18_div_3_div_27_div_15_Template, 4, 1, "div", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DynamicFormComponent_div_0_div_18_div_3_div_27_div_16_Template, 11, 2, "div", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DynamicFormComponent_div_0_div_18_div_3_div_27_div_17_Template, 26, 3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r28.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r28.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r28.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r28.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r28.type != "textarea" && item_r28.type != "signature" && item_r28.type != "externalLink");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r28.type != "textarea" && item_r28.type != "signature" && item_r28.type != "autocomplete" && item_r28.type != "checkbox" && item_r28.type != "radio" && item_r28.type != "externalLink");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r28.type == "externalLink");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r28.regex);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r28.type == "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r28.type == "radio" || item_r28.type == "checkbox" || item_r28.type == "autocomplete" || item_r28.type == "autocompleteCond");
        }
      }

      function DynamicFormComponent_div_0_div_18_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r179 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dndStart", function DynamicFormComponent_div_0_div_18_div_3_Template_div_dndStart_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r179);

            var ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r178.onDragStart($event);
          })("dndCanceled", function DynamicFormComponent_div_0_div_18_div_3_Template_div_dndCanceled_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r179);

            var ctx_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r180.onDragCanceled($event);
          })("dndMoved", function DynamicFormComponent_div_0_div_18_div_3_Template_div_dndMoved_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r179);

            var item_r28 = ctx.$implicit;

            var j_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

            var ctx_r181 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r181.onDragged(item_r28, ctx_r181.model[j_r26].attributes, "move");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicFormComponent_div_0_div_18_div_3_Template_i_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r179);

            var ctx_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r183.deleteItem();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DynamicFormComponent_div_0_div_18_div_3_div_5_Template, 5, 4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DynamicFormComponent_div_0_div_18_div_3_div_6_Template, 3, 2, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DynamicFormComponent_div_0_div_18_div_3_div_7_Template, 5, 4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DynamicFormComponent_div_0_div_18_div_3_div_8_Template, 5, 4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DynamicFormComponent_div_0_div_18_div_3_div_9_Template, 5, 6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DynamicFormComponent_div_0_div_18_div_3_div_10_Template, 5, 4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DynamicFormComponent_div_0_div_18_div_3_div_11_Template, 5, 4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DynamicFormComponent_div_0_div_18_div_3_div_12_Template, 6, 4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DynamicFormComponent_div_0_div_18_div_3_div_13_Template, 6, 4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DynamicFormComponent_div_0_div_18_div_3_div_14_Template, 9, 3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DynamicFormComponent_div_0_div_18_div_3_div_15_Template, 4, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DynamicFormComponent_div_0_div_18_div_3_div_16_Template, 3, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DynamicFormComponent_div_0_div_18_div_3_div_17_Template, 5, 0, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, DynamicFormComponent_div_0_div_18_div_3_div_18_Template, 6, 4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, DynamicFormComponent_div_0_div_18_div_3_div_19_Template, 6, 3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, DynamicFormComponent_div_0_div_18_div_3_div_20_Template, 6, 3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, DynamicFormComponent_div_0_div_18_div_3_div_21_Template, 21, 2, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, DynamicFormComponent_div_0_div_18_div_3_div_22_Template, 2, 3, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, DynamicFormComponent_div_0_div_18_div_3_i_24_Template, 1, 0, "i", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, DynamicFormComponent_div_0_div_18_div_3_i_25_Template, 1, 0, "i", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "i", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicFormComponent_div_0_div_18_div_3_Template_i_click_26_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r179);

            var i_r29 = ctx.index;
            var item_r28 = ctx.$implicit;

            var j_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

            var ctx_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r184.removeField(j_r26, i_r29, item_r28.label);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, DynamicFormComponent_div_0_div_18_div_3_div_27_Template, 18, 10, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r28 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dndEffectAllowed", "all")("dndDraggable", item_r28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r28.type == "text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r28.type == "externalLink");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r28.type == "email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r28.type == "phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r28.type == "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r28.type == "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r28.type == "datetime-local");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r28.type == "textarea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r28.type == "file");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r28.type == "signature");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r28.type == "heading");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r28.type == "paragraph");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r28.type == "addRemove");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r28.type == "autocomplete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r28.type == "checkbox");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r28.type == "radio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r28.type == "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r28.type == "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r28.toggle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r28.toggle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r28.toggle);
        }
      }

      var _c2 = function _c2(a0) {
        return {
          empty: a0
        };
      };

      function DynamicFormComponent_div_0_div_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r187 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dndDragover", function DynamicFormComponent_div_0_div_18_Template_section_dndDragover_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r187);

            var ctx_r186 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r186.onDragover($event);
          })("dndDrop", function DynamicFormComponent_div_0_div_18_Template_section_dndDrop_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r187);

            var j_r26 = ctx.index;

            var ctx_r188 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r188.onDrop($event, ctx_r188.model[j_r26].attributes);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DynamicFormComponent_div_0_div_18_div_3_Template, 28, 23, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicFormComponent_div_0_div_18_Template_span_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r187);

            var j_r26 = ctx.index;

            var ctx_r189 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r189.removeDragAndDropRow(j_r26);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "remove_circle_outline ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicFormComponent_div_0_div_18_Template_span_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r187);

            var j_r26 = ctx.index;

            var ctx_r190 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r190.addDragAndDropRow("inBetween", j_r26);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "add_circle_outline ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var j_r26 = ctx.index;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r11.bgTheme.bgColor)("color", ctx_r11.bgTheme.textColor);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c2, ctx_r11.model[j_r26].attributes.length == 0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r11.model[j_r26].attributes);
        }
      }

      var _c3 = function _c3() {
        return ["/admin/dynamicFormsList"];
      };

      function DynamicFormComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DynamicFormComponent_div_0_div_11_Template, 2, 1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DynamicFormComponent_div_0_div_12_Template, 5, 1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DynamicFormComponent_div_0_div_13_Template, 51, 3, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DynamicFormComponent_div_0_div_16_Template, 5, 4, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, DynamicFormComponent_div_0_div_18_Template, 10, 8, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.formNameRecieved);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.type == "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.type == "edit" || ctx_r0.type == "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isHidden);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.fieldModels);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.model);
        }
      }

      function DynamicFormComponent_div_1_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c3));
        }
      }

      function DynamicFormComponent_div_1_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r195 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicFormComponent_div_1_div_3_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r195);

            var ctx_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r194.report = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DynamicFormComponent_div_1_div_5_div_1_div_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var record_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](record_r199.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](record_r199.value);
        }
      }

      function DynamicFormComponent_div_1_div_5_div_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicFormComponent_div_1_div_5_div_1_div_1_div_1_Template, 5, 2, "div", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var record_r199 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", record_r199.type != "button" && record_r199.type != "paragraph");
        }
      }

      function DynamicFormComponent_div_1_div_5_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicFormComponent_div_1_div_5_div_1_div_1_Template, 2, 1, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var records_r197 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", records_r197.attributes);
        }
      }

      function DynamicFormComponent_div_1_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicFormComponent_div_1_div_5_div_1_Template, 2, 1, "div", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r193 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r193.reports);
        }
      }

      function DynamicFormComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DynamicFormComponent_div_1_div_2_Template, 3, 2, "div", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DynamicFormComponent_div_1_div_3_Template, 3, 0, "div", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DynamicFormComponent_div_1_div_5_Template, 2, 1, "div", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.type == "view");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.type != "view");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r1.reports == null ? null : ctx_r1.reports.length) > 0);
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Your form has been submitted.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_3_option_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var state_r209 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", state_r209._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](state_r209.title);
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_3_option_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var jobNo_r210 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", jobNo_r210._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](jobNo_r210.jobNumber);
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r212 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 135);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Site Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Customer Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 137);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Street Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Street Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 139);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Suburb");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "State");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "select", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, DynamicFormComponent_ng_container_2_div_1_div_6_div_3_option_29_Template, 2, 2, "option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Customer Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 142);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Customer Contact Phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 143);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Customer Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 144);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Job Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "select", 145);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DynamicFormComponent_ng_container_2_div_1_div_6_div_3_Template_select_change_47_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r212);

            var ctx_r211 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

            return ctx_r211.jobNoSel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "option", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, DynamicFormComponent_ng_container_2_div_1_div_6_div_3_option_50_Template, 2, 2, "option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r205 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r205.previewform);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r205.states);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r205.allJobNumbers);
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_1_label_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_1_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 156);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r219.placeholder);
        }
      }

      var _c4 = function _c4() {
        return {
          standalone: true
        };
      };

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r243 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 153);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_1_label_3_Template, 2, 0, "label", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 154);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_1_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r243);

            var item_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            return item_r219.value = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_1_span_5_Template, 3, 1, "span", 155);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r221 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r219.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r219.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", item_r219.required && !item_r219.value && ctx_r221.submitBtn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r219.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", item_r219.placeholder);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r219.value)("required", item_r219.required)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r219.required && !item_r219.value && ctx_r221.submitBtn);
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_2_label_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_2_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 156);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r219.placeholder);
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_2_span_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 156);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r219.errorText);
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r252 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 153);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_2_label_3_Template, 2, 0, "label", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 157);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_2_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r252);

            var item_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            return item_r219.value = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_2_span_5_Template, 3, 1, "span", 155);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_2_span_6_Template, 3, 1, "span", 155);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var i_r214 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

          var ctx_r222 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r219.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r219.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", item_r219.required && !item_r219.value && ctx_r222.submitBtn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r219.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", item_r219.placeholder);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r219.value)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r219.required && !item_r219.value && ctx_r222.submitBtn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r219.required && ctx_r222.regexErr[i_r214] && ctx_r222.submitBtn);
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_3_label_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_3_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 156);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r219.placeholder);
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r260 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 153);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_3_label_3_Template, 2, 0, "label", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 157);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_3_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r260);

            var item_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            return item_r219.value = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_3_span_5_Template, 3, 1, "span", 155);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r223 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r219.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r219.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", item_r219.required && !item_r219.value && ctx_r223.submitBtn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r219.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", item_r219.placeholder);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r219.value)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r219.required && !item_r219.value && ctx_r223.submitBtn);
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_4_th_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 158);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_4_tr_8_td_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 159);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_4_tr_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_4_tr_8_td_1_Template, 2, 0, "td", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r266 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r266);
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 153);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_4_th_6_Template, 2, 0, "th", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_4_tr_8_Template, 2, 1, "tr", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r219.tableHeading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r219.tableRows);
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_5_label_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r273 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 153);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_5_label_3_Template, 2, 0, "label", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "signature-pad", 78, 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onBeginEvent", function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_5_Template_signature_pad_onBeginEvent_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r273);

            var ctx_r272 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](7);

            return ctx_r272.drawStart();
          })("onEndEvent", function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_5_Template_signature_pad_onEndEvent_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r273);

            var ctx_r274 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](7);

            return ctx_r274.drawComplete();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_5_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r273);

            var j_r220 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

            var i_r214 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

            var ctx_r275 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

            return ctx_r275.clear(i_r214, j_r220);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Clear ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r225 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r219.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r219.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r225.signaturePadOptions);
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_6_label_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_6_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 156);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r219.placeholder);
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r284 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 153);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_6_label_3_Template, 2, 0, "label", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 160);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_6_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r284);

            var item_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            return item_r219.value = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_6_span_5_Template, 3, 1, "span", 155);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r226 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r219.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r219.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", item_r219.required && !item_r219.value && ctx_r226.submitBtn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r219.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("min", item_r219.min);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("max", item_r219.max);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", item_r219.placeholder);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r219.value)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r219.required && !item_r219.value && ctx_r226.submitBtn);
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_7_label_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_7_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 156);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r219.placeholder);
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r291 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 153);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_7_label_3_Template, 2, 0, "label", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 161);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_7_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r291);

            var item_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            return item_r219.value = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_7_span_5_Template, 3, 1, "span", 155);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r219.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r219.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", item_r219.required && !item_r219.value && ctx_r227.submitBtn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r219.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", item_r219.placeholder);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r219.value)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r219.required && !item_r219.value && ctx_r227.submitBtn);
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_8_label_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_8_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 156);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r219.placeholder);
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r298 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 153);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_8_label_3_Template, 2, 0, "label", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 162);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_8_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r298);

            var item_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            return item_r219.value = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_8_span_5_Template, 3, 1, "span", 155);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r228 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r219.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r219.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", item_r219.required && !item_r219.value && ctx_r228.submitBtn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r219.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", item_r219.placeholder);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r219.value)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r219.required && !item_r219.value && ctx_r228.submitBtn);
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_9_label_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r303 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 153);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_9_label_3_Template, 2, 0, "label", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "textarea", 163);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_9_Template_textarea_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r303);

            var item_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            return item_r219.value = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r229 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r219.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r219.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", item_r219.required && !item_r219.value && ctx_r229.submitBtn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r219.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", item_r219.placeholder);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r219.value)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("<span *ngIf=\"item.required && !item.value && submitBtn\" class=\"invalid-feedback\">\n              <h4>", item_r219.placeholder, "</h4> </span>\n            ");
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_10_label_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r308 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 153);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_10_label_3_Template, 2, 0, "label", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 164);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_10_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r308);

            var item_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            return item_r219.value = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "small", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r219.label, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r219.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r219.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", item_r219.placeholder);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r219.value)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c4));
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r219.placeholder);
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r219.placeholder, " ");
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 153);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", item_r219.linkAddr, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r219.label);
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_14_label_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_14_option_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var v_r315 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", v_r315.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", v_r315.label, " ");
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r318 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 153);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_14_label_3_Template, 2, 0, "label", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 165);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_14_Template_select_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r318);

            var item_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            return item_r219.value = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_14_option_5_Template, 2, 2, "option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r219.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r219.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r219.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r219.value)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r219.values);
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_15_label_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_15_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r324 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 167);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 168);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_15_div_5_Template_input_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r324);

            var v_r322 = ctx.$implicit;

            var ctx_r323 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](8);

            return ctx_r323.toggleValue(v_r322);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var v_r322 = ctx.$implicit;

          var item_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", item_r219.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", v_r322.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", v_r322.label, " ");
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 153);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_15_label_3_Template, 2, 0, "label", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_15_div_5_Template, 5, 3, "div", 166);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r219.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r219.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r219.values);
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_16_label_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_16_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r332 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 170);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 168);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 171);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_16_div_4_Template_input_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r332);

            var item_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

            return item_r219.value = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var v_r329 = ctx.$implicit;

          var item_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", item_r219.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", v_r329.value)("ngModel", item_r219.value)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", v_r329.label, " ");
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 153);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_16_label_3_Template, 2, 0, "label", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_16_div_4_Template, 5, 6, "div", 169);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r219.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r219.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r219.values);
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r336 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 153);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_17_Template_input_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r336);

            var ctx_r335 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](7);

            return ctx_r335.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("type", item_r219.subtype);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", item_r219.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r219.name);
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 150);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_1_Template, 6, 11, "div", 151);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_2_Template, 7, 11, "div", 151);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_3_Template, 6, 10, "div", 151);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_4_Template, 9, 2, "div", 152);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_5_Template, 9, 3, "div", 151);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_6_Template, 6, 12, "div", 151);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_7_Template, 6, 10, "div", 151);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_8_Template, 6, 10, "div", 151);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_9_Template, 6, 10, "div", 151);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_10_Template, 6, 7, "div", 151);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_11_Template, 4, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_12_Template, 3, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_13_Template, 3, 2, "div", 151);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_14_Template, 6, 7, "div", 151);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_15_Template, 6, 3, "div", 151);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_16_Template, 5, 3, "div", 151);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_div_17_Template, 2, 3, "div", 152);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r219 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r219.type == "text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r219.type == "email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r219.type == "phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r219.type == "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r219.type == "signature");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r219.type == "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r219.type == "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r219.type == "datetime-local");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r219.type == "textarea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r219.type == "file");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r219.type == "heading");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r219.type == "paragraph");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r219.type == "externalLink");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r219.type == "autocomplete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r219.type == "checkbox");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r219.type == "radio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r219.type == "button");
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_div_1_Template, 18, 17, "div", 149);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var row_r213 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r213.attributes);
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_1_label_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_1_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 156);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r340 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r340.placeholder);
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r364 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 153);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_1_label_3_Template, 2, 0, "label", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 154);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_1_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r364);

            var item_r340 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            return item_r340.value = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_1_span_5_Template, 3, 1, "span", 155);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r340 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r342 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r340.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r340.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", item_r340.required && !item_r340.value && ctx_r342.submitBtn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r340.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", item_r340.placeholder);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r340.value)("required", item_r340.required)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r340.required && !item_r340.value && ctx_r342.submitBtn);
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_2_label_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_2_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 156);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r340 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r340.placeholder);
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_2_span_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 156);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r340 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r340.errorText);
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r373 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 153);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_2_label_3_Template, 2, 0, "label", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 157);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_2_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r373);

            var item_r340 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            return item_r340.value = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_2_span_5_Template, 3, 1, "span", 155);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_2_span_6_Template, 3, 1, "span", 155);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r340 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var i_r214 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

          var ctx_r343 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r340.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r340.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", item_r340.required && !item_r340.value && ctx_r343.submitBtn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r340.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", item_r340.placeholder);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r340.value)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r340.required && !item_r340.value && ctx_r343.submitBtn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r340.required && ctx_r343.regexErr[i_r214] && ctx_r343.submitBtn);
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_3_label_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_3_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 156);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r340 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r340.placeholder);
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r381 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 153);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_3_label_3_Template, 2, 0, "label", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 157);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_3_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r381);

            var item_r340 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            return item_r340.value = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_3_span_5_Template, 3, 1, "span", 155);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r340 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r344 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r340.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r340.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", item_r340.required && !item_r340.value && ctx_r344.submitBtn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r340.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", item_r340.placeholder);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r340.value)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r340.required && !item_r340.value && ctx_r344.submitBtn);
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_4_th_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 158);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_4_tr_8_td_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 159);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_4_tr_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_4_tr_8_td_1_Template, 2, 0, "td", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r387 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r387);
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 153);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_4_th_6_Template, 2, 0, "th", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_4_tr_8_Template, 2, 1, "tr", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r340 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r340.tableHeading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r340.tableRows);
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_5_label_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r394 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 153);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_5_label_3_Template, 2, 0, "label", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "signature-pad", 78, 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onBeginEvent", function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_5_Template_signature_pad_onBeginEvent_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r394);

            var ctx_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](7);

            return ctx_r393.drawStart();
          })("onEndEvent", function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_5_Template_signature_pad_onEndEvent_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r394);

            var ctx_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](7);

            return ctx_r395.drawComplete();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_5_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r394);

            var j_r341 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

            var i_r214 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

            var ctx_r396 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

            return ctx_r396.clear(i_r214, j_r341);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Clear ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r340 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r346 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r340.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r340.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r346.signaturePadOptions);
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_6_label_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_6_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 156);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r340 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r340.placeholder);
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r405 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 153);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_6_label_3_Template, 2, 0, "label", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 160);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_6_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r405);

            var item_r340 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            return item_r340.value = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_6_span_5_Template, 3, 1, "span", 155);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r340 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r347 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r340.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r340.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", item_r340.required && !item_r340.value && ctx_r347.submitBtn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r340.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("min", item_r340.min);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("max", item_r340.max);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", item_r340.placeholder);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r340.value)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r340.required && !item_r340.value && ctx_r347.submitBtn);
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_7_label_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_7_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 156);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r340 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r340.placeholder);
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r412 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 153);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_7_label_3_Template, 2, 0, "label", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 161);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_7_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r412);

            var item_r340 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            return item_r340.value = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_7_span_5_Template, 3, 1, "span", 155);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r340 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r348 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r340.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r340.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", item_r340.required && !item_r340.value && ctx_r348.submitBtn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r340.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", item_r340.placeholder);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r340.value)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r340.required && !item_r340.value && ctx_r348.submitBtn);
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_8_label_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_8_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 156);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r340 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r340.placeholder);
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r419 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 153);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_8_label_3_Template, 2, 0, "label", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 162);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_8_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r419);

            var item_r340 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            return item_r340.value = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_8_span_5_Template, 3, 1, "span", 155);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r340 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r349 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r340.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r340.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", item_r340.required && !item_r340.value && ctx_r349.submitBtn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r340.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", item_r340.placeholder);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r340.value)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r340.required && !item_r340.value && ctx_r349.submitBtn);
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_9_label_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r424 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 153);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_9_label_3_Template, 2, 0, "label", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "textarea", 163);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_9_Template_textarea_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r424);

            var item_r340 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            return item_r340.value = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r340 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r350 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r340.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r340.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", item_r340.required && !item_r340.value && ctx_r350.submitBtn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r340.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", item_r340.placeholder);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r340.value)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("<span *ngIf=\"item.required && !item.value && submitBtn\" class=\"invalid-feedback\">\n              <h4>", item_r340.placeholder, "</h4> </span>\n            ");
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_10_label_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r429 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 153);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_10_label_3_Template, 2, 0, "label", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 164);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_10_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r429);

            var item_r340 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            return item_r340.value = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "small", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r340 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r340.label, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r340.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r340.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", item_r340.placeholder);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r340.value)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c4));
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r340 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r340.placeholder);
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r340 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r340.placeholder, " ");
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r435 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 153);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 174);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_13_Template_span_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r435);

            var j_r341 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

            var i_r214 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

            var ctx_r433 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

            return ctx_r433.duplicate(i_r214, j_r341);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "add_circle_outline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 175);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_13_Template_span_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r435);

            var j_r341 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

            var i_r214 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

            var ctx_r437 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

            return ctx_r437.removeDuplicate(i_r214, j_r341);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "remove_circle_outline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 153);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r340 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", item_r340.linkAddr, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r340.label);
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_15_label_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_15_option_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var v_r443 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", v_r443.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", v_r443.label, " ");
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r446 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 153);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_15_label_3_Template, 2, 0, "label", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 165);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_15_Template_select_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r446);

            var item_r340 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            return item_r340.value = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_15_option_5_Template, 2, 2, "option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r340 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r340.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r340.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r340.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r340.value)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r340.values);
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_16_label_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_16_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r452 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 167);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 168);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_16_div_5_Template_input_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r452);

            var v_r450 = ctx.$implicit;

            var ctx_r451 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](8);

            return ctx_r451.toggleValue(v_r450);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var v_r450 = ctx.$implicit;

          var item_r340 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", item_r340.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", v_r450.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", v_r450.label, " ");
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 153);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_16_label_3_Template, 2, 0, "label", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_16_div_5_Template, 5, 3, "div", 166);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r340 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r340.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r340.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r340.values);
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_17_label_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_17_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r460 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 170);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 168);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 171);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_17_div_4_Template_input_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r460);

            var item_r340 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

            return item_r340.value = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var v_r457 = ctx.$implicit;

          var item_r340 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", item_r340.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", v_r457.value)("ngModel", item_r340.value)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", v_r457.label, " ");
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 153);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_17_label_3_Template, 2, 0, "label", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_17_div_4_Template, 5, 6, "div", 169);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r340 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r340.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r340.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r340.values);
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 173);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_1_Template, 6, 11, "div", 151);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_2_Template, 7, 11, "div", 151);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_3_Template, 6, 10, "div", 151);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_4_Template, 9, 2, "div", 152);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_5_Template, 9, 3, "div", 151);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_6_Template, 6, 12, "div", 151);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_7_Template, 6, 10, "div", 151);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_8_Template, 6, 10, "div", 151);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_9_Template, 6, 10, "div", 151);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_10_Template, 6, 7, "div", 151);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_11_Template, 4, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_12_Template, 3, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_13_Template, 5, 0, "div", 151);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_14_Template, 3, 2, "div", 151);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_15_Template, 6, 7, "div", 151);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_16_Template, 6, 3, "div", 151);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_div_17_Template, 5, 3, "div", 151);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r340 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r340.type == "text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r340.type == "email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r340.type == "phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r340.type == "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r340.type == "signature");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r340.type == "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r340.type == "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r340.type == "datetime-local");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r340.type == "textarea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r340.type == "file");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r340.type == "heading");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r340.type == "paragraph");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r340.type == "addRemove");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r340.type == "externalLink");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r340.type == "autocomplete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r340.type == "checkbox");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r340.type == "radio");
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_div_0_Template, 18, 17, "div", 172);
        }

        if (rf & 2) {
          var row_r213 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r213.attributes);
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 146);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_container_1_Template, 2, 1, "ng-container", 147);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_ng_template_2_Template, 1, 1, "ng-template", null, 148, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r213 = ctx.$implicit;

          var _r216 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", row_r213.attributes.length == 1)("ngIfElse", _r216);
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_div_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r465 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 131);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DynamicFormComponent_ng_container_2_div_1_div_6_div_3_Template, 51, 3, "div", 132);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DynamicFormComponent_ng_container_2_div_1_div_6_div_4_Template, 4, 2, "div", 133);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 134);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicFormComponent_ng_container_2_div_1_div_6_Template_div_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r465);

            var ctx_r464 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r464.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r204 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r204.formNameRecieved, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r204.isHidden);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r204.model);
        }
      }

      function DynamicFormComponent_ng_container_2_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DynamicFormComponent_ng_container_2_div_1_div_4_Template, 4, 0, "div", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DynamicFormComponent_ng_container_2_div_1_div_6_Template, 7, 3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r202 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r202.bgTheme.bgColor)("color", ctx_r202.bgTheme.textColor);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r202.success);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r202.success);
        }
      }

      function DynamicFormComponent_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicFormComponent_ng_container_2_div_1_Template, 7, 6, "div", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.model);
        }
      }

      function DynamicFormComponent_button_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r467 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 176);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicFormComponent_button_4_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r467);

            var ctx_r466 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r466.addForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Add Form ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DynamicFormComponent_button_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r469 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 176);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicFormComponent_button_5_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r469);

            var ctx_r468 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r468.addForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Update Form ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DynamicFormComponent_button_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r471 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicFormComponent_button_6_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r471);

            var ctx_r470 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r470.initReport();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Preview ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DynamicFormComponent_pre_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("      ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r6.model), "\n  ");
        }
      }

      var DynamicFormComponent = /*#__PURE__*/function () {
        function DynamicFormComponent(router, spinner, logicalFormInfo, dynamicFormsService, setTitle, fb) {
          _classCallCheck(this, DynamicFormComponent);

          this.router = router;
          this.spinner = spinner;
          this.logicalFormInfo = logicalFormInfo;
          this.dynamicFormsService = dynamicFormsService;
          this.setTitle = setTitle;
          this.fb = fb;
          this.isHidden = false;
          this.check = false;
          this.signaturePadOptions = {
            // passed through to szimek/signature_pad constructor
            minWidth: 1,
            canvasWidth: 500,
            canvasHeight: 100
          };
          this.value = {
            label: '',
            value: ''
          };
          this.bgTheme = {
            bgColor: '#ffffff',
            textColor: '#555555',
            bannerImage: ''
          };
          this.submitBtn = false;
          this.success = false;
          this.show = false;
          this.fieldModels = [{
            type: 'text',
            icon: 'fa-font',
            label: 'Text',
            description: 'Enter your name',
            placeholder: 'Enter your name',
            className: 'form-control',
            subtype: 'text',
            regex: '',
            handle: true
          }, {
            type: 'email',
            icon: 'fa-envelope',
            required: true,
            label: 'Email',
            description: 'Enter your email',
            placeholder: 'Enter your email',
            className: 'form-control',
            subtype: 'text',
            regex: '^([a-zA-Z0-9_.-]+)@([a-zA-Z0-9_.-]+).([a-zA-Z]{2,5})$',
            errorText: 'Please enter a valid email',
            handle: true
          }, {
            type: 'phone',
            icon: 'fa-phone',
            label: 'Phone',
            description: 'Enter your phone',
            placeholder: 'Enter your phone',
            className: 'form-control',
            subtype: 'text',
            regex: '^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$',
            errorText: 'Please enter a valid phone number',
            handle: true
          }, {
            type: 'number',
            label: 'Number',
            icon: 'fas fa-sort-numeric-up',
            description: 'Age',
            placeholder: 'Enter your age',
            className: 'form-control',
            value: '',
            min: null,
            max: null
          }, {
            type: 'date',
            icon: 'fa-calendar',
            label: 'Date',
            placeholder: 'Date',
            className: 'form-control'
          }, {
            type: 'datetime-local',
            icon: 'fa-calendar',
            label: 'DateTime',
            placeholder: 'Date Time',
            className: 'form-control'
          }, {
            type: 'textarea',
            icon: 'fa-text-width',
            label: 'Textarea'
          }, {
            type: 'externalLink',
            icon: 'fa-link',
            label: 'Add link',
            linkAddr: ''
          }, {
            type: 'heading',
            icon: 'fa-heading',
            label: 'Heading',
            placeholder: 'This is Heading'
          }, {
            type: 'paragraph',
            icon: 'fa-paragraph',
            label: 'Paragraph',
            placeholder: 'This is paragraph'
          }, {
            type: 'addRemove',
            icon: 'fa-minus-circle',
            label: 'Add Remove'
          }, {
            type: 'checkbox',
            required: true,
            label: 'Checkbox',
            icon: 'fa-list',
            description: 'Checkbox',
            inline: true,
            values: [{
              label: 'Option1',
              value: 'option-1'
            }, {
              label: 'Option2',
              value: 'option-2'
            }]
          }, {
            type: 'radio',
            icon: 'fa-list-ul',
            label: 'Radio',
            description: 'Radio boxes',
            values: [{
              label: 'Option1',
              value: 'option-1'
            }, {
              label: 'Option2',
              value: 'option-2'
            }]
          }, {
            type: 'autocomplete',
            icon: 'fa-bars',
            label: 'Select',
            description: 'Select',
            placeholder: 'Select',
            className: 'form-control',
            values: [{
              label: 'Option 1',
              value: 'option-1'
            }, {
              label: 'Option 2',
              value: 'option-2'
            }, {
              label: 'Option 3',
              value: 'option-3'
            }]
          }, {
            type: 'file',
            icon: 'fa-file',
            label: 'File Upload',
            className: 'form-control',
            subtype: 'file'
          }, {
            type: 'signature',
            icon: 'fas fa-file-signature',
            label: 'Signature'
          }, {
            type: 'table',
            icon: 'fas fa-table',
            label: 'Table',
            tableHeading: [' ', ' ', ' ', ' '],
            tableRows: [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']]
          }];
          this.type = '';
          this.formIdRec = '';
          this.rows = [];
          this.formData = [];
          this.tableIndexMap = new Map(); //   modelFields:Array<field>=[];
          //  modelFields:Array<field>=[];

          this.model = [// {
            //   name: '',
            //   description: '',
            //   theme: {
            //     bgColor: '#ffffff',
            //     textColor: '#555555',
            //     bannerImage: '',
            //   },
            //   attributes: this.modelFields0,
            // },
            // {
            //   name: '',
            //   description: '',
            //   theme: {
            //     bgColor: '#ffffff',
            //     textColor: '#555555',
            //     bannerImage: '',
            //   },
            //   attributes: this.modelFields1,
            // },
          ];
          this.totalModels = ['', '', '', '', ''];
          this.report = false;
          this.reports = [];
          this.formNameRecieved = '';
          this.regexErr = [];
          this.riskAssessmentFb = this.fb.group({
            siteName: [''],
            customerName: [''],
            streetNo: [''],
            streetAddr: [''],
            subUrb: [''],
            statesSWMS: [''],
            custConct: [''],
            custConctPh: [''],
            custEmail: [''],
            jobNumber: ['']
          });
          this.previewform = this.fb.group({
            siteName: [''],
            customerName: [''],
            streetNo: [''],
            streetAddr: [''],
            subUrb: [''],
            statesSWMS: [''],
            custConct: [''],
            custConctPh: [''],
            custEmail: [''],
            jobNumber: ['']
          });
        }

        _createClass(DynamicFormComponent, [{
          key: "onChange2",
          value: function onChange2(eve) {
            this.isHidden = eve.target.checked;
            console.log("eve", eve.target.checked);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            this.getAllProjectMang();
            this.getAllState();
            console.log("sessionStorage.getItem('type')", sessionStorage.getItem('type'));
            this.setTitle.setTitle('WHS-Dynamic Forms'); // this.dynamicFormsService.homebarTitle.next('Dynamic Forms');

            this.getAllJobNumber();

            if (sessionStorage.getItem('type') == 'add') {
              this.type = 'add'; // if(this.dynamicFormsService.formType =='add'){
              // this.formNameRecieved = this.dynamicFormsService.formTitle;

              this.formNameRecieved = sessionStorage.getItem('formTitle');

              for (var i = 0; i < this.totalModels.length; i++) {
                var modelFields = [];
                var modelRow = {
                  attributes: modelFields
                };
                this.model.push(modelRow);
                console.log("model", this.model);
              }
            }

            if (sessionStorage.getItem('type') == 'edit') {
              // if(this.dynamicFormsService.formType =='edit'){
              this.formNameRecieved = sessionStorage.getItem('formTitle'); // this.formNameRecieved = this.dynamicFormsService.formTitle;

              this.type = 'edit'; // this.formIdRec=this.dynamicFormsService.formIdEdit;

              this.formIdRec = sessionStorage.getItem('formId');
              this.spinner.show();
              this.dynamicFormsService.getFormById(this.formIdRec).subscribe(function (res) {
                console.log('form=>', res);
                _this6.model = [];
                _this6.enableForm = res.data.enable;
                _this6.frequency = res.data.frequency;
                _this6.isHidden = res.data.check; // this.configData=res.data.configure[0];

                _this6.riskAssessmentFb.patchValue(res.data.configure[0]);

                res.data.htmlObject.forEach(function (item) {
                  _this6.model.push(item);
                }); // this.formNameRecieved = res.data.title;
                // this.model.attributes = res.data.htmlObject;

                _this6.spinner.hide();
              });
            }

            if (sessionStorage.getItem('type') == 'view') {
              this.report = true; // if(this.dynamicFormsService.formType =='view'){
              // this.formNameRecieved = this.dynamicFormsService.formTitle;

              this.formNameRecieved = sessionStorage.getItem('formTitle');
              this.type = 'view'; // this.formIdRec=this.dynamicFormsService.formIdEdit;

              this.formIdRec = sessionStorage.getItem('formId');
              this.spinner.show();
              this.dynamicFormsService.getFormById(this.formIdRec).subscribe(function (res) {
                console.log('formView=>', res);
                _this6.formNameRecieved = res.data.title;
                _this6.model = res.data.htmlObject; // this.riskAssessmentFb.patchValue(res.data.configure[0])

                _this6.previewform.patchValue(res.data.configure[0]);

                _this6.isHidden = res.data.check;
                console.log("is hidden", _this6.isHidden);

                _this6.spinner.hide();
              });
            } // this.route
            // .queryParams
            // .subscribe(params => {
            //   console.log("params",params['data'].type);
            //   if(params['type']=='add'){
            //     this.type = 'add';
            //     this.formNameRecieved = params['formName'];
            //     console.log( this.formNameRecieved);
            //   }
            //  if(params['type']=='edit'){
            //   this.type = 'edit';
            //   this.formIdRec=params['formId'];
            //   this.spinner.show();
            //    this.dynamicFormsService.getFormById(params['formId']).subscribe(res=>{
            //      console.log("form=>",res);
            //      this.formNameRecieved = res.data.title;
            //      this.model.attributes = res.data.htmlObject;
            //      this.spinner.hide();
            //    })
            //  }
            //  if(params['type']=='view'){
            //   this.type = 'view';
            //   this.spinner.show();
            //    this.dynamicFormsService.getFormById(params['formId']).subscribe(res=>{
            //      console.log("form=>",res);
            //      this.report = true;
            //      this.model.attributes = res.data.htmlObject;
            //      this.spinner.hide();
            //    })
            //  }
            // });
            //  this.formNameRecieved= this.dynamicFormsService.formNameRecieved;
            // this.route.params.subscribe( params =>{
            //   console.log(params);
            //   this.us.getDataApi('/admin/getFormById',{id:params.id}).subscribe(r=>{
            //     console.log(r);
            //     this.model = r['data'];
            //   });
            // });
            // this.model = this.cs.data;
            // console.log(this.model.data);

          }
        }, {
          key: "addDragAndDropRow",
          value: function addDragAndDropRow(position, index) {
            var modelFields = [];
            var modelRow = {
              attributes: modelFields
            };

            if (position == 'inTheEnd') {
              this.model.push(modelRow);
            }

            if (position == 'inBetween') {
              this.model.splice(index + 1, 0, modelRow);
            }
          }
        }, {
          key: "removeDragAndDropRow",
          value: function removeDragAndDropRow(j) {
            var _this7 = this;

            if (this.model.length > 1) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                title: 'Are you sure?',
                text: "Do you want to remove this Row?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#00B96F',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, remove!'
              }).then(function (result) {
                if (result.value) {
                  _this7.model.splice(j, 1);
                }
              });
            }
          }
        }, {
          key: "getAllProjectMang",
          value: function getAllProjectMang() {
            var _this8 = this;

            this.logicalFormInfo.getAllProjectMang().subscribe(function (res) {
              _this8.projectMang = res.data; // console.log('getAllProjectMang=>', this.projectMang);
            });
          }
        }, {
          key: "onDragStart",
          value: function onDragStart(event) {//  console.log('drag started', JSON.stringify(event, null, 2));
          }
        }, {
          key: "onDragEnd",
          value: function onDragEnd(event) {// console.log('drag ended', JSON.stringify(event, null, 2));
          }
        }, {
          key: "onDraggableCopied",
          value: function onDraggableCopied(event) {//  console.log('draggable copied', JSON.stringify(event, null, 2));
          }
        }, {
          key: "onDraggableLinked",
          value: function onDraggableLinked(event) {// console.log('draggable linked', JSON.stringify(event, null, 2));
          }
        }, {
          key: "onDragged",
          value: function onDragged(item, list, effect) {
            if (effect === 'move') {
              var index = list.indexOf(item);
              list.splice(index, 1);
            }
          }
        }, {
          key: "onDragCanceled",
          value: function onDragCanceled(event) {//  console.log('drag cancelled', JSON.stringify(event, null, 2));
          }
        }, {
          key: "onDragover",
          value: function onDragover(event) {//   console.log('dragover', JSON.stringify(event, null, 2));
          }
        }, {
          key: "onDrop",
          value: function onDrop(event, list) {
            console.log('event', event);
            console.log('list', list);

            if (list && (event.dropEffect === 'copy' || event.dropEffect === 'move')) {
              if (event.dropEffect === 'copy') event.data.name = event.data.type + '-' + new Date().getTime();
              var index = event.index;

              if (typeof index === 'undefined') {
                index = list.length;
              }

              list.splice(index, 0, event.data);
              console.log('event.data.type ', event.data.type); // if (event.data.type == 'table') {
              //   let tablendex = 0;
              //   this.tableIndexMap.clear();
              //   this.model.attributes.forEach((element, i) => {
              //     console.log(element.type);
              //     if (element.type == 'table') {
              //       console.log(element.type);
              //       this.tableIndexMap.set(i, tablendex);
              //       tablendex++;
              //     }
              //   });
              //   let tempRow = [
              //     ['', '', '', ''],
              //     ['', '', '', ''],
              //     ['', '', '', ''],
              //     ['', '', '', ''],
              //   ];
              //   this.rows.splice(this.tableIndexMap.get(event.index), 0, tempRow);
              // }

              console.log(this.rows); // if(event.data.type =="table"){
              // this.rows.push(tempRows)
              // }
              // let tablendex=0;
              // this.tableIndexMap.clear();
              //     this.model.attributes.forEach((element,i )=> {
              //   if(element.type == 'table'){
              //     index++;
              //     this.tableIndexMap.set(i,index);
              //     ///this.rows.push(tempRows)
              //   }
              // });
              // console.log('table Map', this.tableIndexMap);
            }
          }
        }, {
          key: "addValue",
          value: function addValue(values) {
            values.push(this.value);
            this.value = {
              label: '',
              value: ''
            };
          }
        }, {
          key: "deleteItem",
          value: function deleteItem() {
            console.log('delete');
          }
        }, {
          key: "removeField",
          value: function removeField(j, i, item) {
            var _this9 = this;

            console.log('item', item);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
              title: 'Are you sure?',
              text: "Do you want to remove \"".concat(item, "\"?"),
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#00B96F',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, remove!'
            }).then(function (result) {
              if (result.value) {
                console.log('this.model.attributes[i]', _this9.model[j].attributes[i]);

                if (_this9.model[j].attributes[i].type == 'table') {
                  console.log('table found', i);

                  var index = _this9.tableIndexMap.get(i);

                  _this9.rows.splice(index, 1);
                }

                _this9.model[j].attributes.splice(i, 1); // let index = this.tableIndexMap.get(i);
                // this.rows.splice();

              }
            });
            console.log(i);
          }
        }, {
          key: "getAllJobNumber",
          value: function getAllJobNumber() {
            var _this10 = this;

            this.logicalFormInfo.getAllJobNumber().subscribe(function (res) {
              _this10.allJobNumbers = res.data;
            });
          }
        }, {
          key: "jobNoSel",
          value: function jobNoSel() {
            var _this11 = this;

            this.allJobNumbers.forEach(function (item) {
              if (_this11.riskAssessmentFb.get('jobNumber').value === item._id) {
                console.log('Id found', item); // this.configData=item;

                _this11.riskAssessmentFb.patchValue({
                  siteName: item.siteName,
                  customerName: item.customerName,
                  streetNo: item.streetNumber,
                  streetAddr: item.streetAddress,
                  subUrb: item.suburb,
                  statesSWMS: item.stateId._id,
                  custConct: item.customerContact,
                  custConctPh: item.customerContactPhone,
                  custEmail: item.customerEmail,
                  jobNumber: _this11.riskAssessmentFb.get('jobNumber').value
                });
              }
            });
            this.riskAssessmentFb.get('jobNumber').updateValueAndValidity();
          }
        }, {
          key: "updateForm",
          value: function updateForm() {
            var input = new FormData(); //   input.append('id', this.model._id);
            //  input.append('name', this.model.name);
            //input.append('description', this.model.description);
            //  input.append('bannerImage', this.model.theme.bannerImage);
            //  input.append('bgColor', this.model.theme.bgColor);
            // input.append('textColor', this.model.theme.textColor);

            input.append('attributes', JSON.stringify(this.model.attributes)); // this.us.putDataApi('/admin/updateForm',input).subscribe(r=>{
            //   console.log(r);
            //   Swal.fire('Success','App updated successfully','success');
            // });
          }
        }, {
          key: "initReport",
          value: function initReport() {
            //  console.log('model.attributes=>', this.model);
            this.configData = Object.assign({}, this.riskAssessmentFb.value);
            console.log("config", this.configData);
            console.log("hidden", this.isHidden);

            if (this.configData && this.isHidden) {
              console.log("check hidden", this.isHidden);

              if (this.type == 'add') {
                this.previewform.patchValue({
                  siteName: this.configData.siteName,
                  customerName: this.configData.customerName,
                  streetNo: this.configData.streetNo,
                  streetAddr: this.configData.streetAddr,
                  subUrb: this.configData.subUrb,
                  statesSWMS: this.configData.statesSWMS,
                  custConct: this.configData.custConct,
                  custConctPh: this.configData.custConctPh,
                  custEmail: this.configData.custEmail,
                  jobNumber: this.configData.jobNumber
                });
              } else {
                this.previewform.patchValue({
                  siteName: this.configData.siteName,
                  customerName: this.configData.customerName,
                  streetNo: this.configData.streetNo,
                  streetAddr: this.configData.streetAddr,
                  subUrb: this.configData.subUrb,
                  statesSWMS: this.configData.statesSWMS,
                  custConct: this.configData.custConct,
                  custConctPh: this.configData.custConctPh,
                  custEmail: this.configData.custEmail,
                  jobNumber: this.configData.jobNumber
                });
              }
            }

            this.check = true; // this.isHidden=true;

            this.report = true;
            this.formData = [];

            for (var j = 0; j < this.model[0].attributes.length; j++) {
              var temp = [];

              for (var i = 0; i < this.model.length; i++) {
                temp.push(this.model[i].attributes[j]);
              }

              this.formData.push(temp);
            } // console.log('formData', this.formData);
            // let input = {
            //   id:this.model._id
            // }
            // this.us.getDataApi('/admin/allFilledForms',input).subscribe(r=>{
            //   this.reports = r.data;
            //   console.log('reports',this.reports);
            //   this.reports.map(records=>{
            //     return records.attributes.map(record=>{
            //       if(record.type=='checkbox'){
            //         record.value = record.values.filter(r=>r.selected).map(i=>i.value).join(',');
            //       }
            //     })
            //   });
            // });

          }
        }, {
          key: "toggleValue",
          value: function toggleValue(item) {
            item.selected = !item.selected;
          }
        }, {
          key: "showData",
          value: function showData() {
            this.show = !this.show;
          }
        }, {
          key: "submit",
          value: function submit() {
            var allTableHeadings = Array.from(document.querySelectorAll('.tableHeadings'));
            var allTableRows = Array.from(document.querySelectorAll('.tableRows'));
            allTableHeadings.forEach(function (element) {
              console.log('allTableHeadings.value', element.value);
            });
            allTableRows.forEach(function (element) {
              console.log('allTableRows.value', element.value);
            }); //  console.log("heading=>",t[0]);

            console.log('model', this.model);
            this.regexErr = [];
            this.submitBtn = true;
            var valid = true;
            /* commenting for future use
            console.log('this.model.attributes', this.model.attributes);
            let validationArray = JSON.parse(JSON.stringify(this.model.attributes));
            validationArray.reverse().forEach((field, index) => {
              console.log(field.label + '=>' + field.required + '=>' + field.value);
              // if(field.required && !field.value && field.type != 'checkbox'){
              //   console.log("field.required ",field.required );
              //   console.log("!field.value",!field.value);
              //   console.log("field",field);
                    //   Swal.fire('Error','Please enter '+field.label,'error');
              //   valid = false;
              //   return false;
              // }
              console.log(
                'field.regex',
                field.regex + 'field.label',
                field.label + 'index',
                index
              );
                    if (field.required && field.regex) {
                let regex = new RegExp(field.regex);
                if (regex.test(field.value) == false) {
                  // Swal.fire('Error',field.errorText,'error');
                  // valid = false;
                  // return false;
                  this.regexErr[index] = true;
                }
              } else {
                this.regexErr[index] = false;
              }
              if (field.required && field.type == 'checkbox') {
                if (field.values.filter((r) => r.selected).length == 0) {
                  Swal.fire('Error', 'Please enterrr ' + field.label, 'error');
                  valid = false;
                  return false;
                }
              }
            });
            console.log(this.regexErr);
                  if (!valid) {
              return false;
            }
            console.log('Save', this.model);
            let input = new FormData();
            input.append('formId', this.model._id);
            input.append('attributes', JSON.stringify(this.model.attributes));*/
            //////////////////upto this//////////
            // this.us.postDataApi('/user/formFill',input).subscribe(r=>{
            //   console.log(r);
            //   Swal.fire('Success','You have contact sucessfully','success');
            //   this.success = true;
            // },error=>{
            //   Swal.fire('Error',error.message,'error');
            // });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            console.log(this.SignaturePad.toArray());
            console.log(this.SignaturePad.toArray()[0]);
          }
        }, {
          key: "drawComplete",
          value: function drawComplete() {// will be notified of szimek/signature_pad's onEnd event
            // console.log(this.signaturePad1.toDataURL());
          }
        }, {
          key: "clear",
          value: function clear(i, j) {
            var indexOfSignature = new Map();
            var index = 0;
            this.model.forEach(function (modelRow, k) {
              modelRow.attributes.forEach(function (element, l) {
                if (element.type == 'signature') {
                  var myIndex = k.toString() + l.toString();
                  indexOfSignature.set(myIndex, index);
                  index++;
                }
              });
            });
            var temp = i.toString() + j.toString(); //making unique code

            var m = indexOfSignature.get(temp);
            this.SignaturePad.toArray()[m].clear();
          }
        }, {
          key: "drawStart",
          value: function drawStart() {
            // will be notified of szimek/signature_pad's onBegin event
            console.log('begin drawing');
          } ////table//add row column

        }, {
          key: "addCol",
          value: function addCol(j, i) {
            console.log(this.model[j].attributes);
            this.model[j].attributes[i].tableHeading.push('');
            this.model[j].attributes[i].tableRows.forEach(function (item) {
              item.push('');
            }); // console.log(this.tableIndexMap);
            // console.log('add col', i);
            // let index = this.tableIndexMap.get(i);
            // let tempRow = this.rows[index];
            // tempRow.forEach((row) => {
            //   row.push('');
            // });
          }
        }, {
          key: "removeCol",
          value: function removeCol(j, i) {
            if (this.model[j].attributes[i].tableHeading.length > 1 && this.model[j].attributes[i].tableRows[0].length > 1) {
              this.model[j].attributes[i].tableHeading.pop();
              this.model[j].attributes[i].tableRows.forEach(function (item) {
                item.pop();
              });
            } // let index = this.tableIndexMap.get(i);
            // console.log('remove col', i);
            // let tempRow = this.rows[index];
            // if (tempRow[0].length > 1) {
            //   tempRow.forEach((row) => {
            //     row.pop();
            //   });
            // }

          }
        }, {
          key: "addRow",
          value: function addRow(j, i) {
            var arr = [];

            for (var k = 0; k < this.model[j].attributes[i].tableRows[0].length; k++) {
              arr.push('');
            }

            this.model[j].attributes[i].tableRows.push(arr); // console.log('add row', i);
            // let index = this.tableIndexMap.get(i);
            // let tempRow = this.rows[index];
            // let arr = [];
            // for (let i = 0; i < tempRow[0].length; i++) {
            //   arr.push('');
            // }
            // this.rows[index].push(arr);
          }
        }, {
          key: "removeRow",
          value: function removeRow(j, i) {
            // let index = this.tableIndexMap.get(i);
            if (this.model[j].attributes[i].tableRows.length > 1) this.model[j].attributes[i].tableRows.pop();
          }
        }, {
          key: "setProjectManager",
          value: function setProjectManager(value, e) {
            if (value === 'projectManagerSWMS') {
              this.riskAssessmentFb.get('projectManager').setValue(e.target.value);
            }

            if (value === 'projectManager') {
              console.log('setProjectManager==>', this.projectManager);
              this.riskAssessmentFb.get('projectManagerSWMS').setValue(e.target.value);
            }
          }
        }, {
          key: "getAllState",
          value: function getAllState() {
            var _this12 = this;

            this.logicalFormInfo.getAllStates().subscribe(function (res) {
              console.log('getAllStates=>', res);
              _this12.states = res.data;
            });
          }
        }, {
          key: "changeValueTH",
          value: function changeValueTH(e, i, j, l) {
            this.model[i].attributes[j].tableHeading[l] = e.target.value;
          }
        }, {
          key: "addForm",
          value: function addForm() {
            var _this13 = this;

            console.log("model", this.model);

            if (!this.isHidden) {
              console.log("isHidden", this.isHidden);
              this.riskAssessmentFb.reset();
            }

            if (this.type == 'add') {
              console.log('add', this.model);
              var tempModel = [];
              this.model.forEach(function (element) {
                if (element.attributes.length) {
                  tempModel.push(element);
                }
              });
              console.log(tempModel);

              if (tempModel.length) {
                var d = [];
                d.push(this.riskAssessmentFb.value);
                console.log("d", d);
                var data = {
                  title: this.formNameRecieved,
                  frequency: sessionStorage.getItem('frequency'),
                  htmlObject: tempModel,
                  configure: d,
                  check: this.isHidden
                };
                console.log("data", data);
                this.dynamicFormsService.addForm(data).subscribe(function (res) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Form added successfully');

                  _this13.router.navigate(['/admin/dynamicFormsList']);

                  _this13.riskAssessmentFb.reset();
                });
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Please Add Atleast One Field');
              }
            }

            if (this.type == 'edit') {
              console.log('edit');
              var _tempModel = [];
              this.model.forEach(function (element) {
                if (element.attributes.length) {
                  _tempModel.push(element);
                }
              });
              console.log(_tempModel);

              if (_tempModel.length) {
                var _d = [];

                _d.push(this.riskAssessmentFb.value);

                console.log("d", _d);
                var _data = {
                  title: this.formNameRecieved,
                  htmlObject: _tempModel,
                  enable: this.enableForm,
                  frequency: this.frequency,
                  configure: _d,
                  check: this.isHidden
                };
                this.dynamicFormsService.editForm(_data, this.formIdRec).subscribe(function (res) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Form edited successfully');

                  _this13.router.navigate(['/admin/dynamicFormsList']);

                  _this13.riskAssessmentFb.reset();
                });
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Please Add Atleast One Field');
              }
            }
          }
        }, {
          key: "duplicate",
          value: function duplicate(i, j) {
            var _this14 = this;

            console.log('duplicate', i, j, this.model[i].attributes);
            var modelFields = [];
            var modelRow = {
              attributes: modelFields
            };
            this.model[i].attributes.forEach(function (element) {
              _this14.fieldModels.forEach(function (field) {
                if (element.type == field.type) {
                  console.log('field', field);
                  field.label = element.label;
                  var temp = Object.assign({}, element);
                  modelFields.push(temp);
                }
              });
            });
            this.model.splice(i + 1, 0, modelRow);
          }
        }, {
          key: "removeDuplicate",
          value: function removeDuplicate(i, j) {
            console.log('remove duplicate', i, j);
            console.log(this.model);
            console.log(this.model[i]);
            this.model.splice(i, 1);

            for (var k = 0; k < this.model.length; k++) {
              if (this.model[i].length == this.model[k].length && i != k) {
                var notMatch = false;

                for (var l = 0; l < this.model[k].attributes.length; l++) {
                  if (this.model[k].attributes[l].type == this.model[i].attributes[j].type && this.model[k].attributes[l].label == this.model[i].attributes[j].label) {} else {
                    notMatch = true;
                    break;
                  }
                }

                if (!notMatch) {}
              }
            }
          }
        }]);

        return DynamicFormComponent;
      }();

      DynamicFormComponent.ɵfac = function DynamicFormComponent_Factory(t) {
        return new (t || DynamicFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__["LogicalFormInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_dynamic_forms_service__WEBPACK_IMPORTED_MODULE_5__["DynamicFormsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_6__["SetTitleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]));
      };

      DynamicFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DynamicFormComponent,
        selectors: [["app-dynamic-form"]],
        viewQuery: function DynamicFormComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.projectManager = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.SignaturePad = _t);
          }
        },
        decls: 8,
        vars: 7,
        consts: [["class", "padding20 white-bg", 4, "ngIf"], [4, "ngIf"], [1, "text-center", "my-2"], ["class", "btn btn-primary mr-2", 3, "click", 4, "ngIf"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], [1, "padding20", "white-bg"], [1, "col-12", "btn-cont", "mt-1", "ml-1"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "row"], [1, "col-12"], [1, "btn-cont"], [1, "spacer30"], [1, "text-center", "mb-3", 2, "font-size", "30px"], ["class", "col-3 container mb-3", 4, "ngIf"], ["class", "container bg-white checkboxForm", 3, "formGroup", 4, "ngIf"], [1, "row", "mt-2", "position-relative"], [1, "col-1", "ml-2", "sideWalkSet", "scrollbar"], ["class", "fields mt-3 text-center", 4, "ngFor", "ngForOf"], [1, "col-10"], ["class", "row position-relative mt-20 p-l-15 p-r-15", 4, "ngFor", "ngForOf"], [1, "col-3", "container", "mb-3"], ["type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-check"], [1, "form-check-label"], ["type", "checkbox", 1, "form-check-input", 2, "margin-left", "1rem", 3, "checked", "change"], [1, "container", "bg-white", "checkboxForm", 3, "formGroup"], [1, "my-3", "col"], [1, "form-label"], ["type", "text", "formControlName", "siteName", 1, "form-control", "col"], ["type", "text", "formControlName", "customerName", 1, "form-control", "col"], [1, "my-3", "col-2"], ["type", "text", "formControlName", "streetNo", 1, "form-control", "col"], [1, "my-3", "col-4"], ["type", "text", "formControlName", "streetAddr", 1, "form-control", "col"], ["type", "text", "formControlName", "subUrb", 1, "form-control", "col"], ["aria-label", "Default select example", "formControlName", "statesSWMS", 1, "form-select", "form-control", "col"], ["selected", "", "hidden", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "formControlName", "custConct", 1, "form-control", "col"], ["type", "text", "formControlName", "custConctPh", 1, "form-control", "col"], ["type", "text", "formControlName", "custEmail", 1, "form-control", "col"], ["aria-label", "Default select example", "formControlName", "jobNumber", 1, "form-select", "form-control", "col", 3, "change"], [3, "value"], [1, "fields", "mt-3", "text-center"], [1, "field", "pointer", "shadow-bg", "container", 3, "dndDraggable", "dndEffectAllowed", "dndEnd"], [1, "fa", 2, "margin-left", "auto", 3, "ngClass"], [1, "row", "position-relative", "mt-20", "p-l-15", "p-r-15"], [1, "col-11"], ["dndDropzone", "", 1, "dndDropArea", "row", 2, "min-height", "100px", "min-width", "100%", 3, "ngClass", "dndDragover", "dndDrop"], ["class", "field col my-auto", 3, "dndEffectAllowed", "dndDraggable", "dndStart", "dndCanceled", "dndMoved", 4, "ngFor", "ngForOf"], ["dndPlaceholderRef", "", 1, "dndPlaceholder"], [1, "col", "text-center", "setPosFor"], [1, "material-icons", 3, "click"], [1, "field", "col", "my-auto", 3, "dndEffectAllowed", "dndDraggable", "dndStart", "dndCanceled", "dndMoved"], [1, "row", "form-group", "justify-content-center"], [1, "col-2"], ["dndHandle", "", 1, "fa", "fa-ellipsis-v", "dndHandle", 3, "click"], [1, "col-7"], ["class", "my-auto", 4, "ngIf"], ["class", "btn-cont", 4, "ngIf"], [1, "col-3"], ["class", "fa fa-chevron-up pull-right", 3, "click", 4, "ngIf"], ["class", "fa fa-chevron-down pull-right", 3, "click", 4, "ngIf"], [1, "fa", "fa-trash", "pull-right", 3, "click"], ["class", "toggle-Wrapper", 4, "ngIf"], ["class", "text-danger", 4, "ngIf"], ["type", "text", 1, "form-control", 3, "id", "placeholder"], [1, "text-danger"], [1, "my-auto"], ["target", "_blank", 3, "href"], ["type", "email", 1, "form-control", 3, "id", "placeholder"], ["type", "number", 1, "form-control", 3, "id", "min", "max", "placeholder"], ["type", "date", 1, "form-control", 3, "id", "placeholder"], ["type", "datetime-local", 1, "form-control", 3, "id", "placeholder"], [1, "form-control", 2, "height", "100px", 3, "id", "placeholder"], ["type", "file", 1, "form-control", 3, "id", "placeholder"], [1, "form-text", "text-danger"], [2, "border", "1px solid rgb(149 162 173)", "border-radius", "10px"], [3, "options", "onBeginEvent", "onEndEvent"], ["Signature", ""], [1, "btn", "btn-outline-primary", "mt-1", 3, "click"], [1, "form-text", "subtitle"], [1, "form-text"], [1, "material-icons", "my-auto", "mr-3"], [1, "material-icons", "my-auto"], [1, "form-control", 3, "id"], ["class", "col-3 inline-form-group", 4, "ngFor", "ngForOf"], [1, "col-3", "inline-form-group"], [1, "cust-check-bx", "checkbox-inline"], ["type", "checkbox", 3, "value", "name", "click"], [1, "checkmark"], ["class", "form-check", 4, "ngFor", "ngForOf"], ["type", "radio", 1, "form-check-input", 3, "value", "name"], [1, "table", "table-bordered"], ["scope", "col", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "col-1"], [1, "row", "mt-2"], [1, "material-icons", "ml-2", 3, "click"], ["scope", "col"], ["type", "text", "placeholder", "heading", 1, "form-control"], ["type", "text", 1, "form-control"], [1, "btn", "btn-primary", 3, "type", "value", "id", "click"], [1, "fa", "fa-chevron-up", "pull-right", 3, "click"], [1, "fa", "fa-chevron-down", "pull-right", 3, "click"], [1, "toggle-Wrapper"], [1, "form-group"], ["class", "fa fa-toggle-on red", 3, "click", 4, "ngIf"], ["class", "fa fa-toggle-off", 3, "click", 4, "ngIf"], [1, "pull-right", "ucfirst"], ["class", "form-group", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "fa", "fa-toggle-on", "red", 3, "click"], [1, "fa", "fa-toggle-off", 3, "click"], ["type", "text", "placeholder", "https://www.google.com", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-6"], [1, "col-5"], ["class", "row", 4, "ngFor", "ngForOf"], [3, "click"], ["class", "col-12 btn-cont mt-1 ml-1", 4, "ngIf"], [1, "col-12", "spacer30"], ["class", "col-12", 4, "ngIf"], [1, "btn", "btn-primary", 3, "click"], ["class", "report-block", 4, "ngFor", "ngForOf"], [1, "report-block"], [1, "col-4"], [1, "col-8"], ["class", "container", "style", "min-width: 1000px", 4, "ngIf"], [1, "container", 2, "min-width", "1000px"], [1, "row", 2, "padding", "30px"], [1, "ftheme"], [1, "text-center", "mb-5", 2, "font-size", "30px"], ["class", "container", 3, "formGroup", 4, "ngIf"], ["class", "form-group row", 4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", "mt-4", 3, "click"], [1, "container", 3, "formGroup"], ["readonly", "", "type", "text", "formControlName", "siteName", 1, "form-control", "col"], ["readonly", "", "type", "text", "formControlName", "customerName", 1, "form-control", "col"], ["readonly", "", "type", "text", "formControlName", "streetNo", 1, "form-control", "col"], ["readonly", "", "type", "text", "formControlName", "streetAddr", 1, "form-control", "col"], ["readonly", "", "type", "text", "formControlName", "subUrb", 1, "form-control", "col"], ["readonly", "", "disabled", "", "aria-label", "Default select example", "formControlName", "statesSWMS", 1, "form-select", "form-control", "col"], ["readonly", "", "type", "text", "formControlName", "custConct", 1, "form-control", "col"], ["readonly", "", "type", "text", "formControlName", "custConctPh", 1, "form-control", "col"], ["readonly", "", "type", "text", "formControlName", "custEmail", 1, "form-control", "col"], ["disabled", "", "aria-label", "Default select example", "formControlName", "jobNumber", 1, "form-select", "form-control", "col", 3, "change"], [1, "form-group", "row"], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], ["class", "col-6 form-group justify-content-between", 4, "ngFor", "ngForOf"], [1, "col-6", "form-group", "justify-content-between"], ["class", "col mr-1", 4, "ngIf"], ["class", "btn-cont", "class", "col mr-1", 4, "ngIf"], [1, "col", "mr-1"], ["type", "text", "autocomplete", "off", 1, "form-control", 3, "id", "placeholder", "ngModel", "required", "ngModelOptions", "ngModelChange"], ["class", "invalid-feedback", 4, "ngIf"], [1, "invalid-feedback"], ["type", "email", "autocomplete", "off", 1, "form-control", 3, "id", "placeholder", "ngModel", "ngModelOptions", "ngModelChange"], ["type", "text", "placeholder", "heading", 1, "form-control", "tableHeadings"], ["type", "text", 1, "form-control", "tableRows"], ["type", "number", "autocomplete", "off", 1, "form-control", 3, "id", "min", "max", "placeholder", "ngModel", "ngModelOptions", "ngModelChange"], ["type", "date", "autocomplete", "off", 1, "form-control", 3, "id", "placeholder", "ngModel", "ngModelOptions", "ngModelChange"], ["type", "datetime-local", "autocomplete", "off", 1, "form-control", 3, "id", "placeholder", "ngModel", "ngModelOptions", "ngModelChange"], ["autocomplete", "off", 1, "form-control", 2, "height", "120px", "border", "1px solid rgb(149 162 173)", 3, "id", "placeholder", "ngModel", "ngModelOptions", "ngModelChange"], ["type", "file", "autocomplete", "off", 1, "form-control", 3, "id", "placeholder", "ngModel", "ngModelOptions", "ngModelChange"], [1, "form-control", 3, "id", "ngModel", "ngModelOptions", "ngModelChange"], ["class", "inline-form-group col-3", 4, "ngFor", "ngForOf"], [1, "inline-form-group", "col-3"], [1, "cust-check-bx"], ["class", "inline-form-group", 4, "ngFor", "ngForOf"], [1, "inline-form-group"], ["type", "radio", 3, "value", "name", "ngModel", "ngModelOptions", "ngModelChange"], ["class", "col my-auto form-group justify-content-between", 4, "ngFor", "ngForOf"], [1, "col", "my-auto", "form-group", "justify-content-between"], [1, "material-icons", "my-auto", "mr-3", 3, "click"], [1, "material-icons", "my-auto", 3, "click"], [1, "btn", "btn-primary", "mr-2", 3, "click"]],
        template: function DynamicFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DynamicFormComponent_div_0_Template, 19, 8, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicFormComponent_div_1_Template, 6, 3, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DynamicFormComponent_ng_container_2_Template, 2, 1, "ng-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DynamicFormComponent_button_4_Template, 2, 0, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DynamicFormComponent_button_5_Template, 2, 0, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DynamicFormComponent_button_6_Template, 2, 0, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DynamicFormComponent_pre_7_Template, 3, 3, "pre", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.model && !ctx.report);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.report);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.report);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type == "add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type == "edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.report && ctx.type != "view");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show == true && ctx.model);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_x"], ngx_drag_drop__WEBPACK_IMPORTED_MODULE_9__["DndDraggableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], ngx_drag_drop__WEBPACK_IMPORTED_MODULE_9__["DndDropzoneDirective"], ngx_drag_drop__WEBPACK_IMPORTED_MODULE_9__["DndPlaceholderRefDirective"], ngx_drag_drop__WEBPACK_IMPORTED_MODULE_9__["DndHandleDirective"], angular2_signaturepad__WEBPACK_IMPORTED_MODULE_10__["SignaturePad"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RadioControlValueAccessor"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["JsonPipe"]],
        styles: ["body[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.checkboxForm[_ngcontent-%COMP%] {\n  width: 83% !important;\n}\n\n.h5[_ngcontent-%COMP%], h5[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.clearfix[_ngcontent-%COMP%] {\n  clear: both;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.ucfirst[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n\n.min300[_ngcontent-%COMP%] {\n  min-height: 500px;\n}\n\n.app-box[_ngcontent-%COMP%] {\n  padding: 10px;\n  margin-bottom: 20px;\n  height: 230px;\n  background: #b5e8d4;\n  overflow: hidden;\n  box-shadow: 1px 1px 4px #ccc;\n}\n\n.app-box[_ngcontent-%COMP%]:hover {\n  box-shadow: 1px 1px 4px #999;\n}\n\n.app-box[_ngcontent-%COMP%]   .remove[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 21px;\n  top: 0px;\n  color: #545454;\n  display: none;\n}\n\n.app-box[_ngcontent-%COMP%]:hover   .remove[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.inline-btn[_ngcontent-%COMP%] {\n  background: #00b970;\n  padding: 1px 5px;\n  color: white;\n  display: inline-block;\n  margin-bottom: 5px;\n}\n\n.box[_ngcontent-%COMP%] {\n  padding: 10px;\n  margin-bottom: 10px;\n  overflow: auto;\n  box-shadow: 1px 1px 4px #ddd;\n}\n\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  font-size: inherit;\n  background-color: inherit;\n}\n\n.dndDropArea[_ngcontent-%COMP%] {\n  padding: 5px;\n  \n}\n\n.dndDropArea.empty[_ngcontent-%COMP%] {\n  min-height: 500px;\n  border: dotted #ddd 2px;\n}\n\n.field[_ngcontent-%COMP%] {\n  padding: 1px;\n  margin-bottom: 5px;\n  position: relative;\n}\n\n.field[_ngcontent-%COMP%]:hover {\n  box-shadow: 1px 1px 4px #ddd;\n}\n\n.toggle-Wrapper[_ngcontent-%COMP%] {\n  padding: 15px;\n  background: #d6d6d629;\n}\n\n.dndHandle[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #999;\n}\n\n.dndDraggingSource[_ngcontent-%COMP%] {\n  opacity: 0.3;\n}\n\n.dndPlaceholder[_ngcontent-%COMP%] {\n  background: #ceeeee;\n  border-radius: 2px;\n  padding: 20px;\n  margin-bottom: 10px;\n}\n\n.field[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 20px;\n  text-align: center;\n  font-size: 18px;\n  vertical-align: middle;\n}\n\n.red[_ngcontent-%COMP%] {\n  color: #d9534f;\n}\n\n.fa-trash[_ngcontent-%COMP%] {\n  color: #d9534f;\n}\n\n.marginT60[_ngcontent-%COMP%] {\n  margin-top: 60px;\n}\n\n.color-red[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.report-block[_ngcontent-%COMP%] {\n  padding: 10px;\n  background: #f8f8f8;\n  margin-bottom: 20px;\n}\n\n.report-block[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:nth-child(even) {\n  background: #fff;\n}\n\n.ftheme[_ngcontent-%COMP%] {\n  width: 1000px;\n}\n\n.dndDropArea[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.dndDropArea[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]:hover   .fa[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.colorpick[_ngcontent-%COMP%] {\n  height: 25px;\n  background: white;\n  border: none;\n}\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n\ninput[type=file][_ngcontent-%COMP%] {\n  height: 10%;\n  padding: 0%;\n}\n\n.myLabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 500;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n  width: 100%;\n  margin-left: 2px;\n  margin-bottom: 14px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-weight: 520 !important;\n}\n\n.addIcon[_ngcontent-%COMP%] {\n  font-size: 50px;\n  height: 50px;\n  width: 50px;\n}\n\n.subtitle[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 16px;\n  font-weight: 600;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n}\n\n.setPosFor[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -30px;\n  top: 0;\n  display: inline-block;\n  width: -webkit-min-content;\n  width: -moz-min-content;\n  width: min-content;\n}\n\n.mt-20[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.sideWalkSet[_ngcontent-%COMP%] {\n  max-height: 450px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  margin-bottom: 20px;\n  background: #f5f5f5;\n  width: 65px;\n  position: sticky;\n  top: 15px;\n  margin-top: 15px;\n}\n\n.sideWalkSet[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #f5f5f5;\n}\n\n.sideWalkSet[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n  background-color: #f5f5f5;\n}\n\n.sideWalkSet[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #9999fa;\n}\n\n.p-l-15[_ngcontent-%COMP%] {\n  padding-left: 15px !important;\n}\n\n.p-r-15[_ngcontent-%COMP%] {\n  padding-right: 15px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxkeW5hbWljLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0Y7O0FBQ0E7RUFFRSxxQkFBQTtBQUNGOztBQUNBOztFQUVFLGVBQUE7QUFFRjs7QUFDQTtFQUNFLFdBQUE7QUFFRjs7QUFBQTtFQUNFLGVBQUE7QUFHRjs7QUFEQTtFQUNFLDBCQUFBO0FBSUY7O0FBRkE7RUFDRSxpQkFBQTtBQUtGOztBQUhBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBQU1GOztBQUpBO0VBQ0UsNEJBQUE7QUFPRjs7QUFMQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQVFGOztBQU5BO0VBQ0UsY0FBQTtBQVNGOztBQVBBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBVUY7O0FBUkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7QUFXRjs7QUFUQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7QUFZRjs7QUFUQTtFQUNFLFlBQUE7RUFDQSw2QkFBQTtBQVlGOztBQVRBO0VBQ0UsaUJBQUE7RUFDQSx1QkFBQTtBQVlGOztBQVRBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFZRjs7QUFWQTtFQUNFLDRCQUFBO0FBYUY7O0FBWEE7RUFDRSxhQUFBO0VBQ0EscUJBQUE7QUFjRjs7QUFaQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FBZUY7O0FBYkE7RUFDRSxZQUFBO0FBZ0JGOztBQWRBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQWlCRjs7QUFmQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUFrQkY7O0FBaEJBO0VBQ0UsY0FBQTtBQW1CRjs7QUFqQkE7RUFDRSxjQUFBO0FBb0JGOztBQWxCQTtFQUNFLGdCQUFBO0FBcUJGOztBQWxCQTtFQUNFLFVBQUE7QUFxQkY7O0FBbkJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFzQkY7O0FBcEJBO0VBQ0UsZ0JBQUE7QUF1QkY7O0FBcEJBO0VBRUUsYUFBQTtBQXNCRjs7QUFuQkE7RUFDRSxVQUFBO0FBc0JGOztBQXBCQTtFQUNFLFVBQUE7QUF1QkY7O0FBcEJBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQXVCRjs7QUFyQkE7O0VBRUUsWUFBQTtBQXdCRjs7QUF0QkE7RUFDRSxTQUFBO0VBQ0EsaURBQUE7QUF5QkY7O0FBdkJBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7QUEwQkY7O0FBdkJBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUEwQkY7O0FBeEJBO0VBQ0UsMkJBQUE7QUEyQkY7O0FBekJBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBNEJGOztBQTFCQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQTZCRjs7QUExQkE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7QUE2QkY7O0FBM0JBO0VBQ0UsZ0JBQUE7QUE4QkY7O0FBNUJBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQStCRjs7QUE1QkE7RUFDRSxvREFBQTtFQUNBLHlCQUFBO0FBK0JGOztBQTVCQTtFQUNFLFVBQUE7RUFDQSx5QkFBQTtBQStCRjs7QUE3QkE7RUFDRSx5QkFBQTtBQWdDRjs7QUE5QkE7RUFDRSw2QkFBQTtBQWlDRjs7QUEvQkE7RUFDRSw4QkFBQTtBQWtDRiIsImZpbGUiOiJkeW5hbWljLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLmNoZWNrYm94Rm9ybVxyXG57XHJcbiAgd2lkdGg6IDgzJSAhaW1wb3J0YW50O1xyXG59XHJcbi5oNSxcclxuaDUge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmNsZWFyZml4IHtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG4ucG9pbnRlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi51Y2ZpcnN0IHtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG4ubWluMzAwIHtcclxuICBtaW4taGVpZ2h0OiA1MDBweDtcclxufVxyXG4uYXBwLWJveCB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGhlaWdodDogMjMwcHg7XHJcbiAgYmFja2dyb3VuZDogI2I1ZThkNDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggNHB4ICNjY2M7XHJcbn1cclxuLmFwcC1ib3g6aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggNHB4ICM5OTk7XHJcbn1cclxuLmFwcC1ib3ggLnJlbW92ZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAyMXB4O1xyXG4gIHRvcDogMHB4O1xyXG4gIGNvbG9yOiAjNTQ1NDU0O1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmFwcC1ib3g6aG92ZXIgLnJlbW92ZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmlubGluZS1idG4ge1xyXG4gIGJhY2tncm91bmQ6ICMwMGI5NzA7XHJcbiAgcGFkZGluZzogMXB4IDVweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG4uYm94IHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggI2RkZDtcclxufVxyXG4uZm9ybS1ncm91cCAuZm9ybS1jb250cm9sIHtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxuLmRuZERyb3BBcmVhIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgLyogYm9yZGVyOiBkb3R0ZWQgI2RkZCAycHg7ICovXHJcbn1cclxuXHJcbi5kbmREcm9wQXJlYS5lbXB0eSB7XHJcbiAgbWluLWhlaWdodDogNTAwcHg7XHJcbiAgYm9yZGVyOiBkb3R0ZWQgI2RkZCAycHg7XHJcbn1cclxuXHJcbi5maWVsZCB7XHJcbiAgcGFkZGluZzogMXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmZpZWxkOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDRweCAjZGRkO1xyXG59XHJcbi50b2dnbGUtV3JhcHBlciB7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBiYWNrZ3JvdW5kOiAjZDZkNmQ2Mjk7XHJcbn1cclxuLmRuZEhhbmRsZSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiAjOTk5O1xyXG59XHJcbi5kbmREcmFnZ2luZ1NvdXJjZSB7XHJcbiAgb3BhY2l0eTogMC4zO1xyXG59XHJcbi5kbmRQbGFjZWhvbGRlciB7XHJcbiAgYmFja2dyb3VuZDogcmdiKDIwNiwgMjM4LCAyMzgpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLmZpZWxkIC5mYSB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG4ucmVkIHtcclxuICBjb2xvcjogI2Q5NTM0ZjtcclxufVxyXG4uZmEtdHJhc2gge1xyXG4gIGNvbG9yOiAjZDk1MzRmO1xyXG59XHJcbi5tYXJnaW5UNjAge1xyXG4gIG1hcmdpbi10b3A6IDYwcHg7XHJcbn1cclxuXHJcbi5jb2xvci1yZWQge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuLnJlcG9ydC1ibG9jayB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLnJlcG9ydC1ibG9jayAucm93Om50aC1jaGlsZChldmVuKSB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuLmZ0aGVtZSB7XHJcbiAgLy8gd2lkdGg6MTAwJTtcclxuICB3aWR0aDogMTAwMHB4O1xyXG59XHJcblxyXG4uZG5kRHJvcEFyZWEgLmZpZWxkIC5mYSB7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG4uZG5kRHJvcEFyZWEgLmZpZWxkOmhvdmVyIC5mYSB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmNvbG9ycGljayB7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5odG1sLFxyXG5ib2R5IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuYm9keSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbn1cclxuaW5wdXRbdHlwZT0nZmlsZSddIHtcclxuICBoZWlnaHQ6IDEwJTtcclxuICBwYWRkaW5nOiAwJTtcclxufVxyXG5cclxuLm15TGFiZWwge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIGZvbnQtZmFtaWx5OiBJbnRlciwgc2Fucy1zZXJpZjtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XHJcbn1cclxubGFiZWwge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MjAgIWltcG9ydGFudDtcclxufVxyXG4uYWRkSWNvbiB7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICB3aWR0aDogNTBweDtcclxufVxyXG4uc3VidGl0bGUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIGZvbnQtZmFtaWx5OiBJbnRlciwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnNldFBvc0ZvciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAtMzBweDtcclxuICB0b3A6IDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiBtaW4tY29udGVudDtcclxufVxyXG4ubXQtMjAge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLnNpZGVXYWxrU2V0IHtcclxuICBtYXgtaGVpZ2h0OiA0NTBweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgd2lkdGg6IDY1cHg7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDE1cHg7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLnNpZGVXYWxrU2V0Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG59XHJcblxyXG4uc2lkZVdhbGtTZXQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbn1cclxuLnNpZGVXYWxrU2V0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MywgMTUzLCAyNTApO1xyXG59XHJcbi5wLWwtMTUge1xyXG4gIHBhZGRpbmctbGVmdDogMTVweCAhaW1wb3J0YW50O1xyXG59XHJcbi5wLXItMTUge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DynamicFormComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-dynamic-form',
            templateUrl: './dynamic-form.component.html',
            styleUrls: ['./dynamic-form.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]
          }, {
            type: src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__["LogicalFormInfoService"]
          }, {
            type: src_app_utils_services_dynamic_forms_service__WEBPACK_IMPORTED_MODULE_5__["DynamicFormsService"]
          }, {
            type: _utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_6__["SetTitleService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
          }];
        }, {
          SignaturePad: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: ['Signature']
          }],
          projectManager: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['projectManager']
          }]
        });
      })();
      /***/

    },

    /***/
    "D8EZ": function D8EZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-toastr */
      "EApP");
      /* harmony import */


      var _utils_services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../utils/services/app.service */
      "VLJ8");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _utils_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../utils/services/auth.service */
      "bH0Y");
      /* harmony import */


      var src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/utils/services/set-title.service */
      "yZxC");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "SVse");

      function LoginComponent_span_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is Required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_span_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is Required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(renderer, toastr, appService, router, AuthService, setTitle) {
          _classCallCheck(this, LoginComponent);

          this.renderer = renderer;
          this.toastr = toastr;
          this.appService = appService;
          this.router = router;
          this.AuthService = AuthService;
          this.setTitle = setTitle;
          this.isAuthLoading = false;
          this.submitBtn = false;
          this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.renderer.addClass(document.querySelector('app-root'), 'login-page');
            this.setTitle.setTitle('WHS-Login');
          }
        }, {
          key: "login",
          value: function login() {
            var _this15 = this;

            this.submitBtn = true;

            if (this.loginForm.invalid) {
              return;
            }

            var data = Object.assign({}, this.loginForm.value);
            console.log('data', data);

            if (this.loginForm.valid) {
              this.AuthService.login(data).subscribe(function (resData) {
                console.log('resData', resData);
                console.log('res', resData.status);

                if (resData.status == 'SUCCESS') {
                  sessionStorage.setItem('userName', resData.data.username);
                  sessionStorage.setItem('phoneNo', resData.data.phone);

                  _this15.router.navigate(['/admin']);

                  _this15.toastr.success('Login Successful', '');
                }
              }, function (err) {
                console.log(err);

                _this15.toastr.error('Wrong credentials', '');
              });
            } else {
              this.toastr.error('Enter valid username/password', '', {
                timeOut: 1500
              });
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.renderer.removeClass(document.querySelector('app-root'), 'login-page');
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utils_services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utils_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_6__["SetTitleService"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 29,
        vars: 7,
        consts: [[1, "login-box"], [1, "login-logo"], [2, "color", "#c61437"], [1, "card"], [1, "card-body", "login-card-body"], [1, "login-box-msg"], [3, "formGroup", "ngSubmit"], [1, "input-group"], ["formControlName", "email", "type", "email", "placeholder", "Email", 1, "form-control"], [1, "input-group-append"], [1, "input-group-text"], [1, "fas", "fa-envelope"], [1, "mb-3"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "password", "type", "password", "placeholder", "Password", 1, "form-control"], [1, "fas", "fa-lock"], [1, "col-12"], [1, "btn", "btn-primary", "col-12"], [1, "social-auth-links", "text-center", "mb-3"], [1, "text-danger"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "AdminWHS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Sign in to start your session");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_9_listener() {
              return ctx.login();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, LoginComponent_span_16_Template, 2, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, LoginComponent_span_23_Template, 2, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Sign In");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.loginForm.get("email").hasError("required") && ctx.loginForm.get("email").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginForm.get("email").hasError("required") && ctx.loginForm.get("email").touched && ctx.submitBtn);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.loginForm.get("password").hasError("required") && ctx.loginForm.get("password").touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginForm.get("password").hasError("required") && ctx.loginForm.get("password").touched && ctx.submitBtn);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]
          }, {
            type: _utils_services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: _utils_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
          }, {
            type: src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_6__["SetTitleService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "JRIS": function JRIS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SessionManagementService", function () {
        return SessionManagementService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var bn_ng_idle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! bn-ng-idle */
      "cyL1");
      /* harmony import */


      var _utils_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../utils/services/auth.service */
      "bH0Y");

      var SessionManagementService = /*#__PURE__*/function () {
        function SessionManagementService(bnIdle, authService) {
          _classCallCheck(this, SessionManagementService);

          this.bnIdle = bnIdle;
          this.authService = authService;
        }

        _createClass(SessionManagementService, [{
          key: "startSession",
          value: function startSession(time) {
            var _this16 = this;

            console.log('session started', time);
            this.bnIdle.startWatching(time).subscribe(function (res) {
              if (res) {
                console.log('session expired');

                _this16.authService.logout();
              }
            });
          }
        }, {
          key: "resetSession",
          value: function resetSession() {
            this.bnIdle.resetTimer();
          }
        }, {
          key: "stopSession",
          value: function stopSession() {
            this.bnIdle.stopTimer();
          }
        }]);

        return SessionManagementService;
      }();

      SessionManagementService.ɵfac = function SessionManagementService_Factory(t) {
        return new (t || SessionManagementService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](bn_ng_idle__WEBPACK_IMPORTED_MODULE_1__["BnNgIdleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
      };

      SessionManagementService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: SessionManagementService,
        factory: SessionManagementService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SessionManagementService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: bn_ng_idle__WEBPACK_IMPORTED_MODULE_1__["BnNgIdleService"]
          }, {
            type: _utils_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "PCNd": function PCNd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/clipboard */
      "Tr4x");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "YEUz");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "ltgo");
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/portal */
      "1z/I");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "7KAL");
      /* harmony import */


      var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/stepper */
      "q59W");
      /* harmony import */


      var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/cdk/table */
      "GXRp");
      /* harmony import */


      var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/cdk/tree */
      "y7ui");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "vrAh");
      /* harmony import */


      var _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/badge */
      "8Qe2");
      /* harmony import */


      var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/bottom-sheet */
      "Km1n");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      "Ynp+");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "pMoy");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/chips */
      "f44v");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/stepper */
      "hzfI");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "TN/R");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/divider */
      "BSbQ");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/expansion */
      "o4Yh");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "40+f");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/list */
      "SqCe");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/menu */
      "rJgo");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/material/paginator */
      "5QHs");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "BTe0");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "pu8Q");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @angular/material/radio */
      "zQhy");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @angular/material/select */
      "ZTz/");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "q7Ft");
      /* harmony import */


      var _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! @angular/material/slider */
      "mPVK");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "jMqV");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "zHaW");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! @angular/material/sort */
      "LUZP");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! @angular/material/table */
      "OaSA");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! @angular/material/tabs */
      "M9ds");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "l0rg");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "ZFy/");
      /* harmony import */


      var _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! @angular/material/tree */
      "OLiY");
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "1O3W"); // import {MatPaginator} from '@angular/material/paginator';
      // import {MatTableDataSource} from '@angular/material/table';


      var SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SharedModule
      });
      SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function SharedModule_Factory(t) {
          return new (t || SharedModule)();
        },
        imports: [[_angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["A11yModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_9__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_33__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_39__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__["MatTreeModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_44__["OverlayModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"]], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["A11yModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_9__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_33__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_39__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__["MatTreeModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_44__["OverlayModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
          imports: [_angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["A11yModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_9__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_33__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_39__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__["MatTreeModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_44__["OverlayModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"]],
          exports: [_angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["A11yModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_9__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_33__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_39__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__["MatTreeModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_44__["OverlayModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [],
            imports: [_angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["A11yModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_9__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_33__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_39__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__["MatTreeModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_44__["OverlayModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"]],
            exports: [_angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["A11yModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_9__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_33__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_39__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__["MatTreeModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_44__["OverlayModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Q9vn": function Q9vn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(router) {
          _classCallCheck(this, AuthGuard);

          this.router = router;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            if (!sessionStorage.getItem('accessToken')) this.router.navigate(['/']);
            return sessionStorage.getItem('accessToken') ? true : false;
          }
        }, {
          key: "canActivateChild",
          value: function canActivateChild(next, state) {
            return true;
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "RnhZ": function RnhZ(module, exports, __webpack_require__) {
      var map = {
        "./af": "K/tc",
        "./af.js": "K/tc",
        "./ar": "jnO4",
        "./ar-dz": "o1bE",
        "./ar-dz.js": "o1bE",
        "./ar-kw": "Qj4J",
        "./ar-kw.js": "Qj4J",
        "./ar-ly": "HP3h",
        "./ar-ly.js": "HP3h",
        "./ar-ma": "CoRJ",
        "./ar-ma.js": "CoRJ",
        "./ar-sa": "gjCT",
        "./ar-sa.js": "gjCT",
        "./ar-tn": "bYM6",
        "./ar-tn.js": "bYM6",
        "./ar.js": "jnO4",
        "./az": "SFxW",
        "./az.js": "SFxW",
        "./be": "H8ED",
        "./be.js": "H8ED",
        "./bg": "hKrs",
        "./bg.js": "hKrs",
        "./bm": "p/rL",
        "./bm.js": "p/rL",
        "./bn": "kEOa",
        "./bn-bd": "loYQ",
        "./bn-bd.js": "loYQ",
        "./bn.js": "kEOa",
        "./bo": "0mo+",
        "./bo.js": "0mo+",
        "./br": "aIdf",
        "./br.js": "aIdf",
        "./bs": "JVSJ",
        "./bs.js": "JVSJ",
        "./ca": "1xZ4",
        "./ca.js": "1xZ4",
        "./cs": "PA2r",
        "./cs.js": "PA2r",
        "./cv": "A+xa",
        "./cv.js": "A+xa",
        "./cy": "l5ep",
        "./cy.js": "l5ep",
        "./da": "DxQv",
        "./da.js": "DxQv",
        "./de": "tGlX",
        "./de-at": "s+uk",
        "./de-at.js": "s+uk",
        "./de-ch": "u3GI",
        "./de-ch.js": "u3GI",
        "./de.js": "tGlX",
        "./dv": "WYrj",
        "./dv.js": "WYrj",
        "./el": "jUeY",
        "./el.js": "jUeY",
        "./en-au": "Dmvi",
        "./en-au.js": "Dmvi",
        "./en-ca": "OIYi",
        "./en-ca.js": "OIYi",
        "./en-gb": "Oaa7",
        "./en-gb.js": "Oaa7",
        "./en-ie": "4dOw",
        "./en-ie.js": "4dOw",
        "./en-il": "czMo",
        "./en-il.js": "czMo",
        "./en-in": "7C5Q",
        "./en-in.js": "7C5Q",
        "./en-nz": "b1Dy",
        "./en-nz.js": "b1Dy",
        "./en-sg": "t+mt",
        "./en-sg.js": "t+mt",
        "./eo": "Zduo",
        "./eo.js": "Zduo",
        "./es": "iYuL",
        "./es-do": "CjzT",
        "./es-do.js": "CjzT",
        "./es-mx": "tbfe",
        "./es-mx.js": "tbfe",
        "./es-us": "Vclq",
        "./es-us.js": "Vclq",
        "./es.js": "iYuL",
        "./et": "7BjC",
        "./et.js": "7BjC",
        "./eu": "D/JM",
        "./eu.js": "D/JM",
        "./fa": "jfSC",
        "./fa.js": "jfSC",
        "./fi": "gekB",
        "./fi.js": "gekB",
        "./fil": "1ppg",
        "./fil.js": "1ppg",
        "./fo": "ByF4",
        "./fo.js": "ByF4",
        "./fr": "nyYc",
        "./fr-ca": "2fjn",
        "./fr-ca.js": "2fjn",
        "./fr-ch": "Dkky",
        "./fr-ch.js": "Dkky",
        "./fr.js": "nyYc",
        "./fy": "cRix",
        "./fy.js": "cRix",
        "./ga": "USCx",
        "./ga.js": "USCx",
        "./gd": "9rRi",
        "./gd.js": "9rRi",
        "./gl": "iEDd",
        "./gl.js": "iEDd",
        "./gom-deva": "qvJo",
        "./gom-deva.js": "qvJo",
        "./gom-latn": "DKr+",
        "./gom-latn.js": "DKr+",
        "./gu": "4MV3",
        "./gu.js": "4MV3",
        "./he": "x6pH",
        "./he.js": "x6pH",
        "./hi": "3E1r",
        "./hi.js": "3E1r",
        "./hr": "S6ln",
        "./hr.js": "S6ln",
        "./hu": "WxRl",
        "./hu.js": "WxRl",
        "./hy-am": "1rYy",
        "./hy-am.js": "1rYy",
        "./id": "UDhR",
        "./id.js": "UDhR",
        "./is": "BVg3",
        "./is.js": "BVg3",
        "./it": "bpih",
        "./it-ch": "bxKX",
        "./it-ch.js": "bxKX",
        "./it.js": "bpih",
        "./ja": "B55N",
        "./ja.js": "B55N",
        "./jv": "tUCv",
        "./jv.js": "tUCv",
        "./ka": "IBtZ",
        "./ka.js": "IBtZ",
        "./kk": "bXm7",
        "./kk.js": "bXm7",
        "./km": "6B0Y",
        "./km.js": "6B0Y",
        "./kn": "PpIw",
        "./kn.js": "PpIw",
        "./ko": "Ivi+",
        "./ko.js": "Ivi+",
        "./ku": "JCF/",
        "./ku.js": "JCF/",
        "./ky": "lgnt",
        "./ky.js": "lgnt",
        "./lb": "RAwQ",
        "./lb.js": "RAwQ",
        "./lo": "sp3z",
        "./lo.js": "sp3z",
        "./lt": "JvlW",
        "./lt.js": "JvlW",
        "./lv": "uXwI",
        "./lv.js": "uXwI",
        "./me": "KTz0",
        "./me.js": "KTz0",
        "./mi": "aIsn",
        "./mi.js": "aIsn",
        "./mk": "aQkU",
        "./mk.js": "aQkU",
        "./ml": "AvvY",
        "./ml.js": "AvvY",
        "./mn": "lYtQ",
        "./mn.js": "lYtQ",
        "./mr": "Ob0Z",
        "./mr.js": "Ob0Z",
        "./ms": "6+QB",
        "./ms-my": "ZAMP",
        "./ms-my.js": "ZAMP",
        "./ms.js": "6+QB",
        "./mt": "G0Uy",
        "./mt.js": "G0Uy",
        "./my": "honF",
        "./my.js": "honF",
        "./nb": "bOMt",
        "./nb.js": "bOMt",
        "./ne": "OjkT",
        "./ne.js": "OjkT",
        "./nl": "+s0g",
        "./nl-be": "2ykv",
        "./nl-be.js": "2ykv",
        "./nl.js": "+s0g",
        "./nn": "uEye",
        "./nn.js": "uEye",
        "./oc-lnc": "Fnuy",
        "./oc-lnc.js": "Fnuy",
        "./pa-in": "8/+R",
        "./pa-in.js": "8/+R",
        "./pl": "jVdC",
        "./pl.js": "jVdC",
        "./pt": "8mBD",
        "./pt-br": "0tRk",
        "./pt-br.js": "0tRk",
        "./pt.js": "8mBD",
        "./ro": "lyxo",
        "./ro.js": "lyxo",
        "./ru": "lXzo",
        "./ru.js": "lXzo",
        "./sd": "Z4QM",
        "./sd.js": "Z4QM",
        "./se": "//9w",
        "./se.js": "//9w",
        "./si": "7aV9",
        "./si.js": "7aV9",
        "./sk": "e+ae",
        "./sk.js": "e+ae",
        "./sl": "gVVK",
        "./sl.js": "gVVK",
        "./sq": "yPMs",
        "./sq.js": "yPMs",
        "./sr": "zx6S",
        "./sr-cyrl": "E+lV",
        "./sr-cyrl.js": "E+lV",
        "./sr.js": "zx6S",
        "./ss": "Ur1D",
        "./ss.js": "Ur1D",
        "./sv": "X709",
        "./sv.js": "X709",
        "./sw": "dNwA",
        "./sw.js": "dNwA",
        "./ta": "PeUW",
        "./ta.js": "PeUW",
        "./te": "XLvN",
        "./te.js": "XLvN",
        "./tet": "V2x9",
        "./tet.js": "V2x9",
        "./tg": "Oxv6",
        "./tg.js": "Oxv6",
        "./th": "EOgW",
        "./th.js": "EOgW",
        "./tk": "Wv91",
        "./tk.js": "Wv91",
        "./tl-ph": "Dzi0",
        "./tl-ph.js": "Dzi0",
        "./tlh": "z3Vd",
        "./tlh.js": "z3Vd",
        "./tr": "DoHr",
        "./tr.js": "DoHr",
        "./tzl": "z1FC",
        "./tzl.js": "z1FC",
        "./tzm": "wQk9",
        "./tzm-latn": "tT3J",
        "./tzm-latn.js": "tT3J",
        "./tzm.js": "wQk9",
        "./ug-cn": "YRex",
        "./ug-cn.js": "YRex",
        "./uk": "raLr",
        "./uk.js": "raLr",
        "./ur": "UpQW",
        "./ur.js": "UpQW",
        "./uz": "Loxo",
        "./uz-latn": "AQ68",
        "./uz-latn.js": "AQ68",
        "./uz.js": "Loxo",
        "./vi": "KSF8",
        "./vi.js": "KSF8",
        "./x-pseudo": "/X5v",
        "./x-pseudo.js": "/X5v",
        "./yo": "fzPg",
        "./yo.js": "fzPg",
        "./zh-cn": "XDpg",
        "./zh-cn.js": "XDpg",
        "./zh-hk": "SatO",
        "./zh-hk.js": "SatO",
        "./zh-mo": "OmwH",
        "./zh-mo.js": "OmwH",
        "./zh-tw": "kOpN",
        "./zh-tw.js": "kOpN"
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = "RnhZ";
      /***/
    },

    /***/
    "Sy1n": function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-spinner */
      "7g+E");
      /* harmony import */


      var _utils_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./utils/services/auth.service */
      "bH0Y");
      /* harmony import */


      var _services_session_management_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./services/session-management.service */
      "JRIS");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(router, spinner, authService, sessionManagementService) {
          var _this17 = this;

          _classCallCheck(this, AppComponent);

          this.router = router;
          this.spinner = spinner;
          this.authService = authService;
          this.sessionManagementService = sessionManagementService;
          this.title = 'adminlte';
          router.events.subscribe(function (event) {
            _this17.navigationInterceptor(event);
          });
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.authService.loginData$.subscribe(function (data) {
              console.log('data', data);

              if (data) {// this.sessionManagementService.startSession(20);
              }
            });
          }
        }, {
          key: "navigationInterceptor",
          value: function navigationInterceptor(event) {
            var _this18 = this;

            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
              this.spinner.show();
              setTimeout(function () {
                _this18.spinner.hide();
              }, 2000);
              console.log('NavigationStart');
            }

            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
              this.spinner.hide();
              console.log('NavigationEnd');
            } // Set loading state .hide() in both of the below events to hide the spinner in case a request fails


            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"]) {
              this.spinner.hide();
              console.log('NavigationCancel');
            }

            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"]) {
              this.spinner.hide();
              console.log('NavigationError');
            }
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utils_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_session_management_service__WEBPACK_IMPORTED_MODULE_4__["SessionManagementService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]
          }, {
            type: _utils_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
          }, {
            type: _services_session_management_service__WEBPACK_IMPORTED_MODULE_4__["SessionManagementService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "VLJ8": function VLJ8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppService", function () {
        return AppService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      var AppService = /*#__PURE__*/function () {
        function AppService(router) {
          _classCallCheck(this, AppService);

          this.router = router;
          this.user = {
            firstName: 'Alexander',
            lastName: 'Pierce',
            image: 'assets/img/user2-160x160.jpg'
          };
        }

        _createClass(AppService, [{
          key: "login",
          value: function login() {
            sessionStorage.setItem('token', 'LOGGED_IN');
            this.router.navigate(['/']);
          }
        }, {
          key: "register",
          value: function register() {
            sessionStorage.setItem('token', 'LOGGED_IN');
            this.router.navigate(['/']);
          }
        }, {
          key: "logout",
          value: function logout() {
            sessionStorage.removeItem('token');
            this.router.navigate(['/login']);
          }
        }]);

        return AppService;
      }();

      AppService.ɵfac = function AppService_Factory(t) {
        return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      AppService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AppService,
        factory: AppService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "WnE0": function WnE0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var src_app_utils_services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/utils/services/app.service */
      "VLJ8");
      /* harmony import */


      var src_app_utils_services_dynamic_forms_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/utils/services/dynamic-forms.service */
      "+3ge");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "G0yt");
      /* harmony import */


      var _user_dropdown_menu_user_dropdown_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./user-dropdown-menu/user-dropdown-menu.component */
      "2Tyk");

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(appService, dynamicFormsService) {
          _classCallCheck(this, HeaderComponent);

          this.appService = appService;
          this.dynamicFormsService = dynamicFormsService;
          this.toggleMenuSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.currentComp = 'admin';
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this19 = this;

            this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              search: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null)
            });
            this.dynamicFormsService.homebarTitle.subscribe(function (res) {
              _this19.currentComp = res;
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            this.appService.logout();
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_dynamic_forms_service__WEBPACK_IMPORTED_MODULE_3__["DynamicFormsService"]));
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        outputs: {
          toggleMenuSidebar: "toggleMenuSidebar"
        },
        decls: 8,
        vars: 0,
        consts: [[1, "main-header", "navbar", "navbar-expand", "navbar-white", "navbar-light"], [1, "navbar-nav"], [1, "nav-item"], ["role", "button", 1, "nav-link", 3, "click"], [1, "fas", "fa-bars"], [1, "nav-item", "d-none", "d-sm-inline-block"], [1, "navbar-nav", "ml-auto"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_3_listener() {
              return ctx.toggleMenuSidebar.emit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-user-dropdown-menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavbar"], _user_dropdown_menu_user_dropdown_menu_component__WEBPACK_IMPORTED_MODULE_5__["UserDropdownMenuComponent"]],
        styles: [".fa-bars[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGOztBQUdFO0VBQ0UsZUFBQTtBQUFKIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYS1iYXJzIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5uYXYtaXRlbSB7XHJcbiAgLm5hdi1saW5rIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_utils_services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
          }, {
            type: src_app_utils_services_dynamic_forms_service__WEBPACK_IMPORTED_MODULE_3__["DynamicFormsService"]
          }];
        }, {
          toggleMenuSidebar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "Xttp": function Xttp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessagesDropdownMenuComponent", function () {
        return MessagesDropdownMenuComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var MessagesDropdownMenuComponent = /*#__PURE__*/function () {
        // @ViewChild('dropdownMenu', { static: false }) dropdownMenu;
        // @HostListener('document:click', ['$event'])
        // clickout(event) {
        //   if (!this.elementRef.nativeElement.contains(event.target)) {
        //     this.hideDropdownMenu();
        //   }
        // }
        function MessagesDropdownMenuComponent(elementRef, renderer) {
          _classCallCheck(this, MessagesDropdownMenuComponent);

          this.elementRef = elementRef;
          this.renderer = renderer;
        }

        _createClass(MessagesDropdownMenuComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MessagesDropdownMenuComponent;
      }();

      MessagesDropdownMenuComponent.ɵfac = function MessagesDropdownMenuComponent_Factory(t) {
        return new (t || MessagesDropdownMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
      };

      MessagesDropdownMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MessagesDropdownMenuComponent,
        selectors: [["app-messages-dropdown-menu"]],
        decls: 0,
        vars: 0,
        template: function MessagesDropdownMenuComponent_Template(rf, ctx) {},
        styles: [".dropdown[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG1lc3NhZ2VzLWRyb3Bkb3duLW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxlQUFBO0FBQUoiLCJmaWxlIjoibWVzc2FnZXMtZHJvcGRvd24tbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wZG93biB7XHJcbiAgLm5hdi1saW5rIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessagesDropdownMenuComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-messages-dropdown-menu',
            templateUrl: './messages-dropdown-menu.component.html',
            styleUrls: ['./messages-dropdown-menu.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "YkIQ": function YkIQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogicalFormAccessGuard", function () {
        return LogicalFormAccessGuard;
      });
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-toastr */
      "EApP");

      var LogicalFormAccessGuard = /*#__PURE__*/function () {
        function LogicalFormAccessGuard(toastr) {
          _classCallCheck(this, LogicalFormAccessGuard);

          this.toastr = toastr;
        }

        _createClass(LogicalFormAccessGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            console.log('blocked');

            if (!_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].allRouteTemp) {
              var activeToast = this.toastr.error('You Are Not allowed to access this route.', '');
            }

            return _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].allRouteTemp;
          }
        }]);

        return LogicalFormAccessGuard;
      }();

      LogicalFormAccessGuard.ɵfac = function LogicalFormAccessGuard_Factory(t) {
        return new (t || LogicalFormAccessGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]));
      };

      LogicalFormAccessGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: LogicalFormAccessGuard,
        factory: LogicalFormAccessGuard.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LogicalFormAccessGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4": function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./shared/shared.module */
      "PCNd");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/locales/en */
      "tAZD");
      /* harmony import */


      var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "omvX");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "G0yt");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-toastr */
      "EApP");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _pages_main_main_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./pages/main/main.component */
      "/s1f");
      /* harmony import */


      var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./pages/login/login.component */
      "D8EZ");
      /* harmony import */


      var _pages_main_header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./pages/main/header/header.component */
      "WnE0");
      /* harmony import */


      var _pages_main_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./pages/main/footer/footer.component */
      "hlkJ");
      /* harmony import */


      var _pages_main_menu_sidebar_menu_sidebar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./pages/main/menu-sidebar/menu-sidebar.component */
      "8BfR");
      /* harmony import */


      var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./pages/register/register.component */
      "fNfI");
      /* harmony import */


      var _pages_main_header_messages_dropdown_menu_messages_dropdown_menu_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./pages/main/header/messages-dropdown-menu/messages-dropdown-menu.component */
      "Xttp");
      /* harmony import */


      var _pages_main_header_notifications_dropdown_menu_notifications_dropdown_menu_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./pages/main/header/notifications-dropdown-menu/notifications-dropdown-menu.component */
      "iQgY");
      /* harmony import */


      var _pages_main_header_user_dropdown_menu_user_dropdown_menu_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./pages/main/header/user-dropdown-menu/user-dropdown-menu.component */
      "2Tyk");
      /* harmony import */


      var _views_blank_blank_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./views/blank/blank.component */
      "CkB4");
      /* harmony import */


      var _views_profile_profile_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./views/profile/profile.component */
      "wF9P");
      /* harmony import */


      var _views_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./views/dashboard/dashboard.component */
      "l70X");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ngx-spinner */
      "7g+E");
      /* harmony import */


      var ngx_drag_drop__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ngx-drag-drop */
      "o2WJ");
      /* harmony import */


      var _views_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./views/dynamic-form/dynamic-form.component */
      "D2ja");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ng2-charts */
      "hrfs");
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @agm/core */
      "LSHg");
      /* harmony import */


      var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! angular2-signaturepad */
      "r1zJ");
      /* harmony import */


      var _views_dynamic_form_forms_forms_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./views/dynamic-form/forms/forms.component */
      "1tPq");
      /* harmony import */


      var _views_dynamic_form_forms_add_form_add_form_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./views/dynamic-form/forms/add-form/add-form.component */
      "5JI/");
      /* harmony import */


      var _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./not-found-page/not-found-page.component */
      "cxmw");
      /* harmony import */


      var _Directives_textarea_autoresize_directive__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./Directives/textarea-autoresize.directive */
      "lr2a");
      /* harmony import */


      var _interceptor_spinner_interceptor__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./interceptor/spinner.interceptor */
      "0SJk");
      /* harmony import */


      var ngx_mat_timepicker__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ngx-mat-timepicker */
      "PqUb");
      /* harmony import */


      var angular_svg_icon_preloader__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! angular-svg-icon-preloader */
      "Gmle");
      /* harmony import */


      var angular_svg_icon__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! angular-svg-icon */
      "tHmd"); // import { ViewFormsComponent } from './views/dynamic-form/categories/view-forms/view-forms.component';


      Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_4___default.a, 'en-EN');

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_Directives_textarea_autoresize_directive__WEBPACK_IMPORTED_MODULE_33__["TextareaAutoresizeDirective"], {
          provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"],
          useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__["HashLocationStrategy"]
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
          useClass: _interceptor_spinner_interceptor__WEBPACK_IMPORTED_MODULE_34__["SpinnerInterceptor"],
          multi: true
        }, _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"], angular_svg_icon__WEBPACK_IMPORTED_MODULE_37__["AngularSvgIconModule"].forRoot(), angular_svg_icon_preloader__WEBPACK_IMPORTED_MODULE_36__["AngularSvgIconPreloaderModule"].forRoot({
          configUrl: './assets/json/svg.json'
        }), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_24__["NgxSpinnerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], angular2_signaturepad__WEBPACK_IMPORTED_MODULE_29__["SignaturePadModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot({
          timeOut: 10000,
          positionClass: 'toast-bottom-right',
          preventDuplicates: true
        }), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"], ngx_mat_timepicker__WEBPACK_IMPORTED_MODULE_35__["NgxMatTimepickerModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], ngx_drag_drop__WEBPACK_IMPORTED_MODULE_25__["DndModule"], //   DxButtonModule,
        ng2_charts__WEBPACK_IMPORTED_MODULE_27__["ChartsModule"], _agm_core__WEBPACK_IMPORTED_MODULE_28__["AgmCoreModule"].forRoot({
          apiKey: 'AIzaSyAjf0hShAAp6Na6Cd9YJ600hc17DqjS-hM'
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"], _pages_main_main_component__WEBPACK_IMPORTED_MODULE_12__["MainComponent"], _pages_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"], _pages_main_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"], _pages_main_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"], _pages_main_menu_sidebar_menu_sidebar_component__WEBPACK_IMPORTED_MODULE_16__["MenuSidebarComponent"], _views_blank_blank_component__WEBPACK_IMPORTED_MODULE_21__["BlankComponent"], _views_profile_profile_component__WEBPACK_IMPORTED_MODULE_22__["ProfileComponent"], _pages_register_register_component__WEBPACK_IMPORTED_MODULE_17__["RegisterComponent"], _views_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_23__["DashboardComponent"], _pages_main_header_messages_dropdown_menu_messages_dropdown_menu_component__WEBPACK_IMPORTED_MODULE_18__["MessagesDropdownMenuComponent"], _pages_main_header_notifications_dropdown_menu_notifications_dropdown_menu_component__WEBPACK_IMPORTED_MODULE_19__["NotificationsDropdownMenuComponent"], _pages_main_header_user_dropdown_menu_user_dropdown_menu_component__WEBPACK_IMPORTED_MODULE_20__["UserDropdownMenuComponent"], _views_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_26__["DynamicFormComponent"], _views_dynamic_form_forms_forms_component__WEBPACK_IMPORTED_MODULE_30__["FormsComponent"], _views_dynamic_form_forms_add_form_add_form_component__WEBPACK_IMPORTED_MODULE_31__["AddFormComponent"], // ViewFormsComponent,
          _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_32__["NotFoundPageComponent"], _Directives_textarea_autoresize_directive__WEBPACK_IMPORTED_MODULE_33__["TextareaAutoresizeDirective"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"], angular_svg_icon__WEBPACK_IMPORTED_MODULE_37__["AngularSvgIconModule"], angular_svg_icon_preloader__WEBPACK_IMPORTED_MODULE_36__["AngularSvgIconPreloaderModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_24__["NgxSpinnerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], angular2_signaturepad__WEBPACK_IMPORTED_MODULE_29__["SignaturePadModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"], ngx_mat_timepicker__WEBPACK_IMPORTED_MODULE_35__["NgxMatTimepickerModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], ngx_drag_drop__WEBPACK_IMPORTED_MODULE_25__["DndModule"], //   DxButtonModule,
          ng2_charts__WEBPACK_IMPORTED_MODULE_27__["ChartsModule"], _agm_core__WEBPACK_IMPORTED_MODULE_28__["AgmCoreModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"], _pages_main_main_component__WEBPACK_IMPORTED_MODULE_12__["MainComponent"], _pages_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"], _pages_main_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"], _pages_main_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"], _pages_main_menu_sidebar_menu_sidebar_component__WEBPACK_IMPORTED_MODULE_16__["MenuSidebarComponent"], _views_blank_blank_component__WEBPACK_IMPORTED_MODULE_21__["BlankComponent"], _views_profile_profile_component__WEBPACK_IMPORTED_MODULE_22__["ProfileComponent"], _pages_register_register_component__WEBPACK_IMPORTED_MODULE_17__["RegisterComponent"], _views_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_23__["DashboardComponent"], _pages_main_header_messages_dropdown_menu_messages_dropdown_menu_component__WEBPACK_IMPORTED_MODULE_18__["MessagesDropdownMenuComponent"], _pages_main_header_notifications_dropdown_menu_notifications_dropdown_menu_component__WEBPACK_IMPORTED_MODULE_19__["NotificationsDropdownMenuComponent"], _pages_main_header_user_dropdown_menu_user_dropdown_menu_component__WEBPACK_IMPORTED_MODULE_20__["UserDropdownMenuComponent"], _views_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_26__["DynamicFormComponent"], _views_dynamic_form_forms_forms_component__WEBPACK_IMPORTED_MODULE_30__["FormsComponent"], _views_dynamic_form_forms_add_form_add_form_component__WEBPACK_IMPORTED_MODULE_31__["AddFormComponent"], // ViewFormsComponent,
            _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_32__["NotFoundPageComponent"], _Directives_textarea_autoresize_directive__WEBPACK_IMPORTED_MODULE_33__["TextareaAutoresizeDirective"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"], angular_svg_icon__WEBPACK_IMPORTED_MODULE_37__["AngularSvgIconModule"].forRoot(), angular_svg_icon_preloader__WEBPACK_IMPORTED_MODULE_36__["AngularSvgIconPreloaderModule"].forRoot({
              configUrl: './assets/json/svg.json'
            }), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_24__["NgxSpinnerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], angular2_signaturepad__WEBPACK_IMPORTED_MODULE_29__["SignaturePadModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot({
              timeOut: 10000,
              positionClass: 'toast-bottom-right',
              preventDuplicates: true
            }), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"], ngx_mat_timepicker__WEBPACK_IMPORTED_MODULE_35__["NgxMatTimepickerModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], ngx_drag_drop__WEBPACK_IMPORTED_MODULE_25__["DndModule"], //   DxButtonModule,
            ng2_charts__WEBPACK_IMPORTED_MODULE_27__["ChartsModule"], _agm_core__WEBPACK_IMPORTED_MODULE_28__["AgmCoreModule"].forRoot({
              apiKey: 'AIzaSyAjf0hShAAp6Na6Cd9YJ600hc17DqjS-hM'
            })],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["CUSTOM_ELEMENTS_SCHEMA"]],
            providers: [_Directives_textarea_autoresize_directive__WEBPACK_IMPORTED_MODULE_33__["TextareaAutoresizeDirective"], {
              provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"],
              useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__["HashLocationStrategy"]
            }, {
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
              useClass: _interceptor_spinner_interceptor__WEBPACK_IMPORTED_MODULE_34__["SpinnerInterceptor"],
              multi: true
            }, _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "bH0Y": function bH0Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(https) {
          _classCallCheck(this, AuthService);

          this.https = https;
          this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
          this.loginDataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
          this.loginData$ = this.loginDataSubject.asObservable();

          if (sessionStorage.getItem('accessToken')) {
            this.nextLoginData({
              accessToken: sessionStorage.getItem('accessToken'),
              userName: sessionStorage.getItem('userName'),
              phoneNo: sessionStorage.getItem('phoneNo')
            });
          }
        }

        _createClass(AuthService, [{
          key: "nextLoginData",
          value: function nextLoginData(data) {
            this.loginDataSubject.next(data);
          }
        }, {
          key: "login",
          value: function login(data) {
            var _this20 = this;

            return this.https.post(this.apiUrl + 'authentication/login', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              console.log('res.data.accessToken', res.data.accessToken);

              if (res.data.accessToken) {
                _this20.nextLoginData(res.data);

                sessionStorage.setItem('accessToken', res.data.accessToken);
              }

              return res;
            }));
          }
        }, {
          key: "logout",
          value: function logout() {
            sessionStorage.removeItem('accessToken');
            sessionStorage.removeItem('userName');
            sessionStorage.removeItem('phoneNo');
            this.pergeData();
            location.reload();
          }
        }, {
          key: "pergeData",
          value: function pergeData() {
            sessionStorage.clear();
          }
        }]);

        return AuthService;
      }();

      AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
      };

      AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthService,
        factory: AuthService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "cxmw": function cxmw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotFoundPageComponent", function () {
        return NotFoundPageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var NotFoundPageComponent = /*#__PURE__*/function () {
        function NotFoundPageComponent() {
          _classCallCheck(this, NotFoundPageComponent);
        }

        _createClass(NotFoundPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NotFoundPageComponent;
      }();

      NotFoundPageComponent.ɵfac = function NotFoundPageComponent_Factory(t) {
        return new (t || NotFoundPageComponent)();
      };

      NotFoundPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NotFoundPageComponent,
        selectors: [["app-not-found-page"]],
        decls: 9,
        vars: 0,
        consts: [[1, "number"], [1, "text"]],
        template: function NotFoundPageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "not-found-page works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "404");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Ooops...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "page not found");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundPageComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-not-found-page',
            templateUrl: './not-found-page.component.html',
            styleUrls: ['./not-found-page.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "fNfI": function fNfI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return RegisterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-toastr */
      "EApP");
      /* harmony import */


      var src_app_utils_services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/utils/services/app.service */
      "VLJ8");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      var _c0 = function _c0() {
        return ["/"];
      };

      var _c1 = function _c1() {
        return ["/login"];
      };

      var RegisterComponent = /*#__PURE__*/function () {
        function RegisterComponent(renderer, toastr, appService) {
          _classCallCheck(this, RegisterComponent);

          this.renderer = renderer;
          this.toastr = toastr;
          this.appService = appService;
        }

        _createClass(RegisterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.renderer.addClass(document.querySelector('app-root'), 'register-page');
            this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              fullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              retypePassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
            });
          }
        }, {
          key: "register",
          value: function register() {
            if (this.registerForm.valid) {
              this.appService.register();
            } else {
              this.toastr.error('Hello world!', 'Toastr fun!');
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.renderer.removeClass(document.querySelector('app-root'), 'register-page');
          }
        }]);

        return RegisterComponent;
      }();

      RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
        return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]));
      };

      RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RegisterComponent,
        selectors: [["app-register"]],
        decls: 44,
        vars: 5,
        consts: [[1, "register-box"], [1, "register-logo"], [3, "routerLink"], [1, "card"], [1, "card-body", "register-card-body"], [1, "login-box-msg"], [3, "formGroup", "ngSubmit"], [1, "input-group", "mb-3"], ["formControlName", "fullName", "type", "text", "placeholder", "Full name", 1, "form-control"], [1, "input-group-append"], [1, "input-group-text"], [1, "fas", "fa-user"], ["formControlName", "email", "type", "email", "placeholder", "Email", 1, "form-control"], [1, "fas", "fa-envelope"], ["formControlName", "password", "type", "password", "placeholder", "Password", 1, "form-control"], [1, "fas", "fa-lock"], ["formControlName", "retypePassword", "type", "password", "placeholder", "Retype password", 1, "form-control"], [1, "row"], [1, "col-7"], [1, "icheck-primary"], ["type", "checkbox", "id", "agreeTerms", "name", "terms", "value", "agree"], ["for", "agreeTerms"], ["href", "#"], [1, "col-5"], ["type", "submit", 1, "btn", "btn-primary", "btn-block"], [1, "text-center", 3, "routerLink"]],
        template: function RegisterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "LTE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Register a new membership");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_10_listener() {
              return ctx.register();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " I agree to the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "terms");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Register ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "I already have a membership");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]
          }, {
            type: src_app_utils_services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "hlkJ": function hlkJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../../../package.json */
      "kiQV");

      var _package_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! ./../../../../../package.json */
      "kiQV", 1);

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);

          this.appVersion = _package_json__WEBPACK_IMPORTED_MODULE_1__["version"];
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 2,
        vars: 0,
        consts: [[1, "main-footer"], [1, "float-right", "d-none", "d-sm-block"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-footer',
            templateUrl: './footer.component.html',
            styleUrls: ['./footer.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "iQgY": function iQgY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationsDropdownMenuComponent", function () {
        return NotificationsDropdownMenuComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var NotificationsDropdownMenuComponent = /*#__PURE__*/function () {
        // @ViewChild('dropdownMenu', { static: false }) dropdownMenu;
        // @HostListener('document:click', ['$event'])
        // clickout(event) {
        //   if (!this.elementRef.nativeElement.contains(event.target)) {
        //     this.hideDropdownMenu();
        //   }
        // }
        function NotificationsDropdownMenuComponent() {
          _classCallCheck(this, NotificationsDropdownMenuComponent);
        } // constructor(private elementRef: ElementRef, private renderer: Rende/rer2) {}


        _createClass(NotificationsDropdownMenuComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NotificationsDropdownMenuComponent;
      }();

      NotificationsDropdownMenuComponent.ɵfac = function NotificationsDropdownMenuComponent_Factory(t) {
        return new (t || NotificationsDropdownMenuComponent)();
      };

      NotificationsDropdownMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NotificationsDropdownMenuComponent,
        selectors: [["app-notifications-dropdown-menu"]],
        decls: 0,
        vars: 0,
        template: function NotificationsDropdownMenuComponent_Template(rf, ctx) {},
        styles: [".dropdown[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG5vdGlmaWNhdGlvbnMtZHJvcGRvd24tbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGVBQUE7QUFBSiIsImZpbGUiOiJub3RpZmljYXRpb25zLWRyb3Bkb3duLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcGRvd24ge1xyXG4gIC5uYXYtbGluayB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationsDropdownMenuComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-notifications-dropdown-menu',
            templateUrl: './notifications-dropdown-menu.component.html',
            styleUrls: ['./notifications-dropdown-menu.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "kiQV": function kiQV(module) {
      module.exports = JSON.parse("{\"name\":\"WHS-ADMINPORTAL\",\"version\":\"0.1.0\",\"scripts\":{\"start\":\"node server.js\",\"dev:start\":\"ng serve\",\"dev:build\":\"ng build --prod\",\"dev:test\":\"ng test\",\"dev:lint\":\"ng lint\",\"dev:e2e\":\"ng e2e\",\"postinstall\":\"ngcc\"},\"private\":true,\"dependencies\":{\"@agm/core\":\"^3.0.0-beta.0\",\"@angular/animations\":\"11.0.3\",\"@angular/cdk\":\"^11.2.13\",\"@angular/common\":\"11.0.3\",\"@angular/compiler\":\"11.0.3\",\"@angular/core\":\"11.0.3\",\"@angular/forms\":\"11.0.3\",\"@angular/localize\":\"11.0.3\",\"@angular/material\":\"^11.2.13\",\"@angular/platform-browser\":\"11.0.3\",\"@angular/platform-browser-dynamic\":\"11.0.3\",\"@angular/router\":\"11.0.3\",\"@ckeditor/ckeditor5-angular\":\"^2.0.2\",\"@ckeditor/ckeditor5-build-classic\":\"^31.0.0\",\"@ng-bootstrap/ng-bootstrap\":\"8.0.0\",\"angular-responsive-carousel\":\"^2.1.2\",\"angular-svg-icon\":\"^11.2.0\",\"angular-svg-icon-preloader\":\"^2.0.1\",\"angular2-signaturepad\":\"^3.0.4\",\"bn-ng-idle\":\"^1.0.1\",\"bootstrap\":\"^4.6.1\",\"chart.js\":\"^2.9.4\",\"chart.piecelabel.js\":\"^0.15.0\",\"core-js\":\"3.8.0\",\"express\":\"4.17.1\",\"jquery\":\"^3.6.0\",\"ng2-charts\":\"^2.4.3\",\"ngx-autosize\":\"^1.8.4\",\"ngx-drag-drop\":\"^2.0.0\",\"ngx-mat-timepicker\":\"^12.1.0\",\"ngx-spinner\":\"^11.0.2\",\"ngx-toastr\":\"13.2.0\",\"popper.js\":\"^1.16.1\",\"rxjs\":\"6.6.3\",\"slick-carousel\":\"^1.8.1\",\"tslib\":\"^2.0.3\",\"zone.js\":\"0.11.3\"},\"devDependencies\":{\"@angular-devkit/build-angular\":\"0.1100.3\",\"@angular/cli\":\"11.0.3\",\"@angular/compiler-cli\":\"11.0.3\",\"@angular/language-service\":\"11.0.3\",\"@types/faker\":\"^5.1.5\",\"@types/jasmine\":\"~3.6.2\",\"@types/jasminewd2\":\"2.0.8\",\"@types/jquery\":\"^3.5.6\",\"@types/node\":\"14.14.10\",\"admin-lte\":\"3.1.0-rc\",\"codelyzer\":\"^6.0.1\",\"faker\":\"^5.1.0\",\"husky\":\"4.3.0\",\"jasmine-core\":\"~3.6.0\",\"jasmine-spec-reporter\":\"~6.0.0\",\"json-server\":\"^0.16.3\",\"karma\":\"5.2.3\",\"karma-chrome-launcher\":\"~3.1.0\",\"karma-coverage-istanbul-reporter\":\"3.0.3\",\"karma-jasmine\":\"~4.0.1\",\"karma-jasmine-html-reporter\":\"^1.5.4\",\"lint-staged\":\"10.5.3\",\"prettier\":\"2.2.1\",\"pretty-quick\":\"3.1.0\",\"protractor\":\"7.0.0\",\"ts-node\":\"9.1.0\",\"tslint\":\"6.1.3\",\"tslint-config-prettier\":\"1.18.0\",\"tslint-plugin-prettier\":\"2.3.0\",\"typescript\":\"4.0.5\"}}");
      /***/
    },

    /***/
    "l70X": function l70X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
        return DashboardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var chart_piecelabel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! chart.piecelabel.js */
      "ntzx");
      /* harmony import */


      var chart_piecelabel_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chart_piecelabel_js__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-spinner */
      "7g+E");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng2-charts */
      "hrfs");
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @agm/core */
      "LSHg");

      function DashboardComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ol", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Dashboard v1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DashboardComponent_section_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "150");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "New Orders");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "More info ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "53");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "sup", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Bounce Rate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "More info ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "44");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "User Registrations");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "More info ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "65");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Unique Visitors");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "More info ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DashboardComponent_agm_marker_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "agm-marker", 19);
        }

        if (rf & 2) {
          var m_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", m_r3.lat)("longitude", m_r3.lng);
        }
      }

      var DashboardComponent = /*#__PURE__*/function () {
        function DashboardComponent(spinner) {
          _classCallCheck(this, DashboardComponent);

          this.spinner = spinner; // Doughnut

          this.doughnutChartLabels = ['Near Miss', 'Incident', 'Hazard'];
          this.doughnutChartLabels1 = [];
          this.doughnutChartData = [[350, 450, 100]];
          this.doughnutChartData1 = [[20, 27, 53]];
          this.doughnutChartData2 = [[15, 35, 50]];
          this.doughnutChartData3 = [[10, 0, 90]];
          this.doughnutChartData4 = [[0, 0, 100]];
          this.doughnutChartColor = [{
            backgroundColor: [// 'rgba(110, 114, 20, 1)',
            // 'rgba(118, 183, 172, 1)',
            'rgba(211,211,211, 0.8)', 'rgba(0, 0, 128, 0.8)', 'rgba(199,20,55,1)']
          }]; // public horiztChartColor = [
          //   {
          //     backgroundColor: [
          //       // 'rgba(110, 114, 20, 1)',
          //       'rgba(118, 183, 172, 1)',
          //     ],
          //   },
          // ];

          this.horiztChartColor = [{
            backgroundColor: [// 'rgba(200, 0, 0, 0.4)',
            // 'rgba(200, 0, 0, 0.6)',
            // 'rgba(200, 0, 0, 0.8)',
            'rgba(199,20,55,0.4)', 'rgba(199,20,55,0.6)', 'rgba(199,20,55,0.8)', 'rgba(199,20,55,1)']
          }];
          this.barChartColor = [{
            backgroundColor: 'rgba(211,211,211, 0.8)'
          }, {
            backgroundColor: 'rgba(0, 0, 128, 0.8)'
          }, {
            backgroundColor: 'rgba(199,20,55,1)'
          }]; // public barChartColor=[
          //   {
          //    backgroundColor: [
          //   // 'rgba(110, 114, 20, 1)',
          //   'rgba(118, 183, 172, 1)',
          //    'rgba(118, 183, 172, 1)',
          //    'rgba(0, 148, 97, 1)',
          //    ]
          //    }
          //    ];

          this.doughnutChartType = 'doughnut';
          this.barChartOptions = {
            responsive: true
          };
          this.barChartLabels = ['Location1', 'Location3', 'Location5', 'Location7'];
          this.barChartType = 'bar';
          this.barChartLegend = true;
          this.barChartPlugins = [];
          this.barChartData = [{
            data: [55, 59, 80, 81, 56, 55, 40],
            label: 'Near miss'
          }, {
            data: [28, 48, 40, 19, 86, 27, 90],
            label: 'Incident'
          }, {
            data: [18, 28, 20, 49, 36, 37, 50],
            label: 'Hazard'
          }]; ////horizontal chart

          this.barChartTypeH = 'horizontalBar';
          this.barChartLegendH = true;
          this.barChartDataH = [{
            data: [70, 15, 10, 5],
            label: 'Safety Consequences',
            stack: 'a'
          }];
          this.barChartLabelsH = ['Insignificant', 'No Imapact', 'Minor', 'Moderate']; ///AGM angular google map

          this.title = 'My first AGM project';
          this.lat = 51.678418;
          this.lng = 7.809007;
          this.markers = [{
            lat: 51.673858,
            lng: 7.815982,
            label: 'A',
            draggable: true
          }, {
            lat: 51.373858,
            lng: 7.215982,
            label: 'B',
            draggable: false
          }, {
            lat: 51.723858,
            lng: 7.895982,
            label: 'C',
            draggable: true
          }];
          this.chartOptions = {
            labels: {
              render: 'percentage'
            }
          };
        } // events


        _createClass(DashboardComponent, [{
          key: "chartClicked",
          value: function chartClicked(_ref) {
            var event = _ref.event,
                active = _ref.active;
            console.log(event, active);
          }
        }, {
          key: "chartHovered",
          value: function chartHovered(_ref2) {
            var event = _ref2.event,
                active = _ref2.active;
            console.log(event, active);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this21 = this;

            this.spinner.show();
            setTimeout(function () {
              /** spinner ends after 5 seconds */
              _this21.spinner.hide();
            }, 2000);
          }
        }]);

        return DashboardComponent;
      }();

      DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
        return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]));
      };

      DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DashboardComponent,
        selectors: [["app-dashboard"]],
        decls: 39,
        vars: 39,
        consts: [["class", "content-header", 4, "ngIf"], ["class", "content", 4, "ngIf"], [1, "geaphicalSectionContainer"], [1, "container"], [1, "row"], [1, "col-6"], [1, "firstCanvasBlk", "setSecty"], [1, "shadowBxSet", 2, "display", "block"], ["baseChart", "", 3, "data", "labels", "chartType", "colors", "options"], [1, "secndCanvasBlk", "setSecty"], [1, "shadowBxSet"], [1, "setCanvasList"], [1, "text-center", "m-0"], ["baseChart", "", 3, "data", "labels", "chartType", "colors"], [1, "setSecty", "thrdCanvasBlk"], ["baseChart", "", 3, "datasets", "labels", "options", "plugins", "legend", "chartType", "colors"], [1, "setSecty", "forthCanvasBlk"], ["baseChart", "", 3, "datasets", "labels", "options", "legend", "chartType", "colors", "chartHover", "chartClick"], [1, "setSecty", "fifthCanvasBlk"], [3, "latitude", "longitude"], [3, "latitude", "longitude", 4, "ngFor", "ngForOf"], [1, "content-header"], [1, "container-fluid"], [1, "row", "mb-2"], [1, "col-sm-6"], [1, "m-0", "text-dark"], [1, "breadcrumb", "float-sm-right"], [1, "breadcrumb-item"], ["href", "#"], [1, "breadcrumb-item", "active"], [1, "content"], [1, "col-lg-3", "col-6"], [1, "small-box", "bg-info"], [1, "inner"], [1, "icon"], [1, "ion", "ion-bag"], ["href", "#", 1, "small-box-footer"], [1, "fas", "fa-arrow-circle-right"], [1, "small-box", "bg-success"], [2, "font-size", "20px"], [1, "ion", "ion-stats-bars"], [1, "small-box", "bg-warning"], [1, "ion", "ion-person-add"], [1, "small-box", "bg-danger"], [1, "ion", "ion-pie-graph"]],
        template: function DashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DashboardComponent_div_0_Template, 13, 0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_section_1_Template, 53, 0, "section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "canvas", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Low");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "canvas", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Medium");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "canvas", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "High");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "canvas", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Critical");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "canvas", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "canvas", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "canvas", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("chartHover", function DashboardComponent_Template_canvas_chartHover_34_listener($event) {
              return ctx.chartHovered($event);
            })("chartClick", function DashboardComponent_Template_canvas_chartClick_34_listener($event) {
              return ctx.chartClicked($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "agm-map", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, DashboardComponent_agm_marker_38_Template, 1, 2, "agm-marker", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.doughnutChartData)("labels", ctx.doughnutChartLabels)("chartType", ctx.doughnutChartType)("colors", ctx.doughnutChartColor)("options", ctx.chartOptions);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.doughnutChartData1)("labels", ctx.doughnutChartLabels1)("chartType", ctx.doughnutChartType)("colors", ctx.doughnutChartColor);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.doughnutChartData2)("labels", ctx.doughnutChartLabels1)("chartType", ctx.doughnutChartType)("colors", ctx.doughnutChartColor);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.doughnutChartData3)("labels", ctx.doughnutChartLabels1)("chartType", ctx.doughnutChartType)("colors", ctx.doughnutChartColor);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.doughnutChartData4)("labels", ctx.doughnutChartLabels1)("chartType", ctx.doughnutChartType)("colors", ctx.doughnutChartColor);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.barChartData)("labels", ctx.barChartLabels)("options", ctx.barChartOptions)("plugins", ctx.barChartPlugins)("legend", ctx.barChartLegend)("chartType", ctx.barChartType)("colors", ctx.barChartColor);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.barChartDataH)("labels", ctx.barChartLabelsH)("options", ctx.barChartOptions)("legend", ctx.barChartLegendH)("chartType", ctx.barChartTypeH)("colors", ctx.horiztChartColor);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.lat)("longitude", ctx.lng);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.markers);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ng2_charts__WEBPACK_IMPORTED_MODULE_4__["BaseChartDirective"], _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmMap"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmMarker"]],
        styles: ["agm-map[_ngcontent-%COMP%] {\n  height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxhQUFBO0FBQUoiLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XHJcbiAgICAvLyB3aWR0aDogIDUwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICB9Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.scss']
          }]
        }], function () {
          return [{
            type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "lr2a": function lr2a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextareaAutoresizeDirective", function () {
        return TextareaAutoresizeDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var TextareaAutoresizeDirective = /*#__PURE__*/function () {
        function TextareaAutoresizeDirective(elementRef) {
          _classCallCheck(this, TextareaAutoresizeDirective);

          this.elementRef = elementRef;
        }

        _createClass(TextareaAutoresizeDirective, [{
          key: "onInput",
          value: function onInput() {
            this.resize();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this22 = this;

            if (this.elementRef.nativeElement.scrollHeight) {
              setTimeout(function () {
                return _this22.resize();
              });
            }
          }
        }, {
          key: "resize",
          value: function resize() {
            this.elementRef.nativeElement.style.height = '0';
            this.elementRef.nativeElement.style.height = this.elementRef.nativeElement.scrollHeight + 'px';
          }
        }]);

        return TextareaAutoresizeDirective;
      }();

      TextareaAutoresizeDirective.ɵfac = function TextareaAutoresizeDirective_Factory(t) {
        return new (t || TextareaAutoresizeDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      TextareaAutoresizeDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: TextareaAutoresizeDirective,
        selectors: [["", "appTextareaAutoresize", ""]],
        hostBindings: function TextareaAutoresizeDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function TextareaAutoresizeDirective_input_HostBindingHandler() {
              return ctx.onInput();
            });
          }
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TextareaAutoresizeDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[appTextareaAutoresize]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          onInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: [':input']
          }]
        });
      })();
      /***/

    },

    /***/
    "uJp0": function uJp0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NonAuthGuard", function () {
        return NonAuthGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      var NonAuthGuard = /*#__PURE__*/function () {
        function NonAuthGuard(router) {
          _classCallCheck(this, NonAuthGuard);

          this.router = router;
        }

        _createClass(NonAuthGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            if (sessionStorage.getItem('accessToken')) this.router.navigate(['/admin']);
            return sessionStorage.getItem('accessToken') ? false : true;
          }
        }, {
          key: "canActivateChild",
          value: function canActivateChild(next, state) {
            return true;
          }
        }, {
          key: "canLoad",
          value: function canLoad(route, segments) {
            return true;
          }
        }]);

        return NonAuthGuard;
      }();

      NonAuthGuard.ɵfac = function NonAuthGuard_Factory(t) {
        return new (t || NonAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      NonAuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: NonAuthGuard,
        factory: NonAuthGuard.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NonAuthGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "vY5A": function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _RouteGuard_logical_form_access_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./RouteGuard/logical-form-access.guard */
      "YkIQ");
      /* harmony import */


      var _RouteGuard_dynamic_form_access_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./RouteGuard/dynamic-form-access.guard */
      "4vV/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _pages_main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./pages/main/main.component */
      "/s1f");
      /* harmony import */


      var _views_blank_blank_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./views/blank/blank.component */
      "CkB4");
      /* harmony import */


      var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pages/login/login.component */
      "D8EZ");
      /* harmony import */


      var _views_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./views/profile/profile.component */
      "wF9P");
      /* harmony import */


      var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./pages/register/register.component */
      "fNfI");
      /* harmony import */


      var _views_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./views/dashboard/dashboard.component */
      "l70X");
      /* harmony import */


      var _utils_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./utils/guards/auth.guard */
      "Q9vn");
      /* harmony import */


      var _utils_guards_non_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./utils/guards/non-auth.guard */
      "uJp0");
      /* harmony import */


      var _views_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./views/dynamic-form/dynamic-form.component */
      "D2ja");
      /* harmony import */


      var _views_dynamic_form_forms_forms_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./views/dynamic-form/forms/forms.component */
      "1tPq");

      var routes = [{
        path: '',
        component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
        canActivate: [_utils_guards_non_auth_guard__WEBPACK_IMPORTED_MODULE_11__["NonAuthGuard"]]
      }, {
        path: 'admin',
        component: _pages_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"],
        canActivate: [_utils_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
        canActivateChild: [_utils_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
        children: [// { path: '', component: LoginComponent },
        {
          path: '',
          component: _views_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"]
        }, {
          path: 'profile',
          component: _views_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"]
        }, {
          path: 'dynamicForm',
          component: _views_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_12__["DynamicFormComponent"],
          canActivate: [_RouteGuard_dynamic_form_access_guard__WEBPACK_IMPORTED_MODULE_1__["DynamicFormAccessGuard"]]
        }, {
          path: 'blank',
          component: _views_blank_blank_component__WEBPACK_IMPORTED_MODULE_5__["BlankComponent"]
        }, {
          path: 'dynamicFormsList',
          component: _views_dynamic_form_forms_forms_component__WEBPACK_IMPORTED_MODULE_13__["FormsComponent"],
          canActivate: [_RouteGuard_dynamic_form_access_guard__WEBPACK_IMPORTED_MODULE_1__["DynamicFormAccessGuard"]]
        }, {
          path: 'forms',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | views-forms-forms-module */
            [__webpack_require__.e("default~landing-page-info-landing-page-info-module~site-info-site-info-module~views-confi-logi-confi~a1d5b972"), __webpack_require__.e("default~site-info-site-info-module~views-forms-forms-module"), __webpack_require__.e("common"), __webpack_require__.e("views-forms-forms-module")]).then(__webpack_require__.bind(null,
            /*! ./views/forms/forms.module */
            "jASi")).then(function (m) {
              return m.FormsModule1;
            });
          },
          canActivate: [_RouteGuard_logical_form_access_guard__WEBPACK_IMPORTED_MODULE_0__["LogicalFormAccessGuard"]]
        }, {
          path: 'registration',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | registration-registration-module */
            "registration-registration-module").then(__webpack_require__.bind(null,
            /*! ./registration/registration.module */
            "DNuw")).then(function (m) {
              return m.RegistrationModule;
            });
          }
        }, {
          path: 'landingPageInfo',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | landing-page-info-landing-page-info-module */
            [__webpack_require__.e("default~landing-page-info-landing-page-info-module~site-info-site-info-module~views-confi-logi-confi~a1d5b972"), __webpack_require__.e("common"), __webpack_require__.e("landing-page-info-landing-page-info-module")]).then(__webpack_require__.bind(null,
            /*! ./landing-page-info/landing-page-info.module */
            "Fg8/")).then(function (m) {
              return m.LandingPageInfoModule;
            });
          }
        }, {
          path: 'siteInfo',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | site-info-site-info-module */
            [__webpack_require__.e("default~landing-page-info-landing-page-info-module~site-info-site-info-module~views-confi-logi-confi~a1d5b972"), __webpack_require__.e("default~site-info-site-info-module~views-forms-forms-module"), __webpack_require__.e("default~site-info-site-info-module~views-confi-logi-confi-logi-module"), __webpack_require__.e("site-info-site-info-module")]).then(__webpack_require__.bind(null,
            /*! ./site-info/site-info.module */
            "5DFr")).then(function (m) {
              return m.SiteInfoModule;
            });
          },
          canActivate: [_RouteGuard_dynamic_form_access_guard__WEBPACK_IMPORTED_MODULE_1__["DynamicFormAccessGuard"]]
        }, {
          path: 'subscrpt',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | subscription-subscription-module */
            "subscription-subscription-module").then(__webpack_require__.bind(null,
            /*! ./subscription/subscription.module */
            "AfdY")).then(function (m) {
              return m.SubscriptionModule;
            });
          },
          canActivate: [_RouteGuard_dynamic_form_access_guard__WEBPACK_IMPORTED_MODULE_1__["DynamicFormAccessGuard"]]
        }, {
          path: 'confiLogi',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | views-confi-logi-confi-logi-module */
            [__webpack_require__.e("default~landing-page-info-landing-page-info-module~site-info-site-info-module~views-confi-logi-confi~a1d5b972"), __webpack_require__.e("default~site-info-site-info-module~views-confi-logi-confi-logi-module"), __webpack_require__.e("views-confi-logi-confi-logi-module")]).then(__webpack_require__.bind(null,
            /*! ./views/confi-logi/confi-logi.module */
            "3qhI")).then(function (m) {
              return m.ConfiLogiModule;
            });
          },
          canActivate: [_RouteGuard_dynamic_form_access_guard__WEBPACK_IMPORTED_MODULE_1__["DynamicFormAccessGuard"]]
        }, {
          path: 'stateRel',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | views-state-rel-state-rel-module */
            "views-state-rel-state-rel-module").then(__webpack_require__.bind(null,
            /*! ./views/state-rel/state-rel.module */
            "m7j2")).then(function (m) {
              return m.StateRelModule;
            });
          },
          canActivate: [_RouteGuard_dynamic_form_access_guard__WEBPACK_IMPORTED_MODULE_1__["DynamicFormAccessGuard"]]
        }, {
          path: 'roleMangement',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | role-management-role-management-module */
            "role-management-role-management-module").then(__webpack_require__.bind(null,
            /*! ./role-management/role-management.module */
            "xd2E")).then(function (m) {
              return m.RoleManagementModule;
            });
          },
          canActivate: [_RouteGuard_dynamic_form_access_guard__WEBPACK_IMPORTED_MODULE_1__["DynamicFormAccessGuard"]]
        }]
      }, {
        path: 'login',
        component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
        canActivate: [_utils_guards_non_auth_guard__WEBPACK_IMPORTED_MODULE_11__["NonAuthGuard"]]
      }, {
        path: 'register',
        component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
        canActivate: [_utils_guards_non_auth_guard__WEBPACK_IMPORTED_MODULE_11__["NonAuthGuard"]]
      }, {
        path: '**',
        redirectTo: 'admin',
        pathMatch: 'full'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
          relativeLinkResolution: 'legacy',
          useHash: true
        })], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
              relativeLinkResolution: 'legacy',
              useHash: true
            })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "wF9P": function wF9P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
        return ProfileComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var src_app_utils_services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/utils/services/app.service */
      "VLJ8");
      /* harmony import */


      var src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/utils/services/set-title.service */
      "yZxC");

      var ProfileComponent = /*#__PURE__*/function () {
        function ProfileComponent(appService, setTitle) {
          _classCallCheck(this, ProfileComponent);

          this.appService = appService;
          this.setTitle = setTitle;
        }

        _createClass(ProfileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setTitle.setTitle('WHS-Profile');
          }
        }]);

        return ProfileComponent;
      }();

      ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
        return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_2__["SetTitleService"]));
      };

      ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProfileComponent,
        selectors: [["app-profile"]],
        decls: 234,
        vars: 0,
        consts: [[1, "content-header"], [1, "container-fluid"], [1, "row", "mb-2"], [1, "col-sm-6"], [1, "breadcrumb", "float-sm-right"], [1, "breadcrumb-item"], ["href", "#"], [1, "breadcrumb-item", "active"], [1, "content"], [1, "row"], [1, "col-md-3"], [1, "card", "card-primary", "card-outline"], [1, "card-body", "box-profile"], [1, "text-center"], ["src", "assets/img/user4-128x128.jpg", "alt", "User profile picture", 1, "profile-user-img", "img-fluid", "img-circle"], [1, "profile-username", "text-center"], [1, "text-muted", "text-center"], [1, "list-group", "list-group-unbordered", "mb-3"], [1, "list-group-item"], [1, "float-right"], ["href", "#", 1, "btn", "btn-primary", "btn-block"], [1, "card", "card-primary"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "fas", "fa-book", "mr-1"], [1, "text-muted"], [1, "fas", "fa-map-marker-alt", "mr-1"], [1, "fas", "fa-pencil-alt", "mr-1"], [1, "tag", "tag-danger"], [1, "tag", "tag-success"], [1, "tag", "tag-info"], [1, "tag", "tag-warning"], [1, "tag", "tag-primary"], [1, "far", "fa-file-alt", "mr-1"], [1, "col-md-9"], [1, "card"], [1, "card-header", "p-2"], [1, "nav", "nav-pills"], [1, "nav-item"], ["href", "#activity", "data-toggle", "tab", 1, "nav-link", "active"], ["href", "#timeline", "data-toggle", "tab", 1, "nav-link"], ["href", "#settings", "data-toggle", "tab", 1, "nav-link"], [1, "tab-content"], ["id", "activity", 1, "active", "tab-pane"], [1, "post"], [1, "user-block"], ["src", "assets/img/user1-128x128.jpg", "alt", "user image", 1, "img-circle", "img-bordered-sm"], [1, "username"], ["href", "#", 1, "float-right", "btn-tool"], [1, "fas", "fa-times"], [1, "description"], ["href", "#", 1, "link-black", "text-sm", "mr-2"], [1, "fas", "fa-share", "mr-1"], ["href", "#", 1, "link-black", "text-sm"], [1, "far", "fa-thumbs-up", "mr-1"], [1, "far", "fa-comments", "mr-1"], ["type", "text", "placeholder", "Type a comment", 1, "form-control", "form-control-sm"], [1, "post", "clearfix"], ["src", "assets/img/user7-128x128.jpg", "alt", "User Image", 1, "img-circle", "img-bordered-sm"], ["src", "assets/img/user6-128x128.jpg", "alt", "User Image", 1, "img-circle", "img-bordered-sm"], [1, "row", "mb-3"], ["src", "assets/img/photo1.png", "alt", "Photo", 1, "img-fluid"], ["src", "assets/img/photo2.png", "alt", "Photo", 1, "img-fluid", "mb-3"], ["src", "assets/img/photo3.jpg", "alt", "Photo", 1, "img-fluid"], ["src", "assets/img/photo4.jpg", "alt", "Photo", 1, "img-fluid", "mb-3"], ["id", "timeline", 1, "tab-pane"], [1, "timeline", "timeline-inverse"], [1, "time-label"], [1, "bg-danger"], [1, "fas", "fa-envelope", "bg-primary"], [1, "timeline-item"], [1, "time"], [1, "far", "fa-clock"], [1, "timeline-header"], [1, "timeline-body"], [1, "timeline-footer"], ["href", "#", 1, "btn", "btn-primary", "btn-sm"], ["href", "#", 1, "btn", "btn-danger", "btn-sm"], [1, "fas", "fa-user", "bg-info"], [1, "timeline-header", "border-0"], [1, "fas", "fa-comments", "bg-warning"], ["href", "#", 1, "btn", "btn-warning", "btn-flat", "btn-sm"], [1, "bg-success"], [1, "fas", "fa-camera", "bg-purple"], ["src", "http://placehold.it/150x100", "alt", "..."], [1, "far", "fa-clock", "bg-gray"], ["id", "settings", 1, "tab-pane"]],
        template: function ProfileComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ol", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "User Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Nina Mcintire");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Software Engineer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Followers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "1,322");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Following");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "543");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Friends");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "13,287");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Follow");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h3", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "About Me");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Education");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " B.S. in Computer Science from the University of Tennessee at Knoxville ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Location");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Malibu, California");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Skills");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "UI Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Coding");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Javascript");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "PHP");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Node.js");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "i", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Notes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum enim neque. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "ul", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Activity");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Timeline");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "li", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "a", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Settings");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "img", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "span", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Jonathan Burke Jr.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "a", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "i", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Shared publicly - 7:30 PM today");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " Lorem ipsum represents a long-held tradition for designers, typographers and the like. Some people hate it and argue for its demise, but others ignore the hate as they create awesome tools to help create filler text for everyone from bacon lovers to Charlie Sheen fans. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "a", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "i", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " Share");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " Like");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "i", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " Comments (5) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "input", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "img", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "span", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Sarah Ross");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "a", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "i", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "span", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Sent you a message - 3 days ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, " Lorem ipsum represents a long-held tradition for designers, typographers and the like. Some people hate it and argue for its demise, but others ignore the hate as they create awesome tools to help create filler text for everyone from bacon lovers to Charlie Sheen fans. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "img", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "span", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Adam Jones");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "a", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "i", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "span", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Posted 5 photos - 5 days ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "img", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "img", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "img", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "img", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "img", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "a", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "i", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, " Share");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "i", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, " Like");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "i", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, " Comments (5) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "input", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "span", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, " 10 Feb. 2014 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "i", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "span", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "i", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, " 12:05");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "h3", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Support Team");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, " sent you an email ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, " Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles, weebly ning heekya handango imeem plugg dopplr jibjab, movity jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle quora plaxo ideeli hulu weebly balihoo... ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "a", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Read more");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "a", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "Delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "i", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "span", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "i", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, " 5 mins ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "h3", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "Sarah Young");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, " accepted your friend request ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "i", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "span", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "i", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, " 27 mins ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "h3", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Jay White");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, " commented on your post ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, " Take me to your leader! Switzerland is small and neutral! We are more like Germany, ambitious and misunderstood! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "a", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "View comment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "span", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, " 3 Jan. 2014 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "i", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "span", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "i", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, " 2 days ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "h3", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "Mina Lee");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, " uploaded new photos ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](227, "img", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](228, "img", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](229, "img", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](230, "img", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](232, "i", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "div", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-profile',
            templateUrl: './profile.component.html',
            styleUrls: ['./profile.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_utils_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]
          }, {
            type: src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_2__["SetTitleService"]
          }];
        }, null);
      })();
      /***/

    },

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
          } ///customer end/////
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
          } ///////////////////  STAFF INFO End /////////
          ///////////////// START Nature Of Incident//////////////

        }, {
          key: "getAllNatOfInc",
          value: function getAllNatOfInc() {
            return this.https.get(this.apiUrl + 'natureOfIncident/getAll');
          }
        }, {
          key: "addNatOfInc",
          value: function addNatOfInc(data) {
            return this.https.post(this.apiUrl + 'natureOfIncident/add', data);
          }
        }, {
          key: "addMultipleNatOfInc",
          value: function addMultipleNatOfInc(data) {
            return this.https.post(this.apiUrl + 'natureOfIncident/add/multiple', data);
          }
        }, {
          key: "updateNatOfInc",
          value: function updateNatOfInc(data, id) {
            return this.https.put(this.apiUrl + 'natureOfIncident/update/' + id, data);
          }
        }, {
          key: "deleteNatOfInc",
          value: function deleteNatOfInc(id) {
            return this.https["delete"](this.apiUrl + 'natureOfIncident/delete/' + id);
          } ///////////////////  Nature Of Incident End /////////
          ///////////////// START Changes Made//////////////

        }, {
          key: "getAllChangesMade",
          value: function getAllChangesMade() {
            return this.https.get(this.apiUrl + 'changesMade/getAll');
          }
        }, {
          key: "addChangesMade",
          value: function addChangesMade(data) {
            return this.https.post(this.apiUrl + 'changesMade/add', data);
          }
        }, {
          key: "addMultipleChangesMade",
          value: function addMultipleChangesMade(data) {
            return this.https.post(this.apiUrl + 'changesMade/add/multiple', data);
          }
        }, {
          key: "updateChangesMade",
          value: function updateChangesMade(data, id) {
            return this.https.put(this.apiUrl + 'changesMade/update/' + id, data);
          }
        }, {
          key: "deleteChangesMade",
          value: function deleteChangesMade(id) {
            return this.https["delete"](this.apiUrl + 'changesMade/delete/' + id);
          } ///////////////////  Changes Made End /////////
          ///////////////// Root Cause Of Incident Made//////////////

        }, {
          key: "getAllRootCause",
          value: function getAllRootCause() {
            return this.https.get(this.apiUrl + 'rootcauseOfIncident/getAll');
          }
        }, {
          key: "addRootCause",
          value: function addRootCause(data) {
            return this.https.post(this.apiUrl + 'rootcauseOfIncident/add', data);
          }
        }, {
          key: "addMultipleRootCause",
          value: function addMultipleRootCause(data) {
            return this.https.post(this.apiUrl + 'rootcauseOfIncident/add/multiple', data);
          }
        }, {
          key: "updateRootCause",
          value: function updateRootCause(data, id) {
            return this.https.put(this.apiUrl + 'rootcauseOfIncident/update/' + id, data);
          }
        }, {
          key: "deleteRootCause",
          value: function deleteRootCause(id) {
            return this.https["delete"](this.apiUrl + 'rootcauseOfIncident/delete/' + id);
          } ///////////////////  Root Cause Of Incident End /////////
          ///////////////// Type Of Incident Made//////////////

        }, {
          key: "getAllTypeOfIncident",
          value: function getAllTypeOfIncident() {
            return this.https.get(this.apiUrl + 'typeOfIncident/getAll');
          }
        }, {
          key: "addTypeOfIncident",
          value: function addTypeOfIncident(data) {
            return this.https.post(this.apiUrl + 'typeOfIncident/add', data);
          }
        }, {
          key: "addMultipleTypeOfIncident",
          value: function addMultipleTypeOfIncident(data) {
            return this.https.post(this.apiUrl + 'typeOfIncident/add/multiple', data);
          }
        }, {
          key: "updateTypeOfIncident",
          value: function updateTypeOfIncident(data, id) {
            return this.https.put(this.apiUrl + 'typeOfIncident/update/' + id, data);
          }
        }, {
          key: "deleteTypeOfIncident",
          value: function deleteTypeOfIncident(id) {
            return this.https["delete"](this.apiUrl + 'typeOfIncident/delete/' + id);
          } ///////////////////  Type Of Incident End /////////
          ///////////////// Incident Report Form//////////////

        }, {
          key: "getAllIncidentReport",
          value: function getAllIncidentReport() {
            return this.https.get(this.apiUrl + 'incidentForm/getAll');
          }
        }, {
          key: "addIncidentReport",
          value: function addIncidentReport(data) {
            return this.https.post(this.apiUrl + 'incidentForm/add', data);
          }
        }, {
          key: "addMultipleIncidentReport",
          value: function addMultipleIncidentReport(data) {
            return this.https.post(this.apiUrl + 'incidentForm/add/multiple', data);
          }
        }, {
          key: "updateIncidentReport",
          value: function updateIncidentReport(id, data) {
            return this.https.put(this.apiUrl + 'incidentForm/update/' + id, data);
          }
        }, {
          key: "getIncidentReportById",
          value: function getIncidentReportById(id) {
            return this.https.get(this.apiUrl + 'incidentForm/get/' + id);
          }
        }, {
          key: "deleteIncidentReport",
          value: function deleteIncidentReport(id) {
            return this.https["delete"](this.apiUrl + 'incidentForm/delete/' + id);
          } ///////////////////  Incident Report Form End /////////
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
        }, {
          key: "addtoolBox",
          value: function addtoolBox(data) {
            return this.https.post(this.apiUrl + 'toolbox/add', data);
          }
        }, {
          key: "editToolBox",
          value: function editToolBox(id, data) {
            return this.https.put(this.apiUrl + 'toolbox/update/' + id, data);
          }
        }, {
          key: "gettoolBox",
          value: function gettoolBox() {
            return this.https.get(this.apiUrl + 'toolbox/getAll');
          }
        }, {
          key: "getToolboxById",
          value: function getToolboxById(id) {
            return this.https.get(this.apiUrl + 'toolbox/get/' + id);
          }
        }, {
          key: "deleteToolBox",
          value: function deleteToolBox(id) {
            return this.https["delete"](this.apiUrl + 'toolbox/delete/' + id);
          } /////////////////// Subscription End /////////
          ///////////////////////// Manager Start /////////

        }, {
          key: "addManager",
          value: function addManager(data) {
            return this.https.post(this.apiUrl + 'manager/add', data);
          }
        }, {
          key: "editManager",
          value: function editManager(id, data) {
            return this.https.put(this.apiUrl + 'manager/update/' + id, data);
          }
        }, {
          key: "getAllManager",
          value: function getAllManager() {
            return this.https.get(this.apiUrl + 'manager/getAll');
          }
        }, {
          key: "getManagerById",
          value: function getManagerById(id) {
            return this.https.get(this.apiUrl + 'manager/get/' + id);
          }
        }, {
          key: "deleteManager",
          value: function deleteManager(id) {
            return this.https["delete"](this.apiUrl + 'manager/delete/' + id);
          }
        }, {
          key: "addMultipleManager",
          value: function addMultipleManager(data) {
            return this.https.post(this.apiUrl + 'manager/add/multiple', data);
          } /////////////////////// ManagerEnd//////////
          //////////////////// WHS Manager///////////

        }, {
          key: "addWHSManager",
          value: function addWHSManager(data) {
            return this.https.post(this.apiUrl + 'WHSManager/add', data);
          }
        }, {
          key: "editWHSManager",
          value: function editWHSManager(id, data) {
            return this.https.put(this.apiUrl + 'WHSManager/update/' + id, data);
          }
        }, {
          key: "getAllWHSManager",
          value: function getAllWHSManager() {
            return this.https.get(this.apiUrl + 'WHSManager/getAll');
          }
        }, {
          key: "getWHSManagerById",
          value: function getWHSManagerById(id) {
            return this.https.get(this.apiUrl + 'WHSManager/get/' + id);
          }
        }, {
          key: "deleteWHSManager",
          value: function deleteWHSManager(id) {
            return this.https["delete"](this.apiUrl + 'WHSManager/delete/' + id);
          }
        }, {
          key: "addMultipleWHSManager",
          value: function addMultipleWHSManager(data) {
            return this.https.post(this.apiUrl + 'WHSManager/add/multiple', data);
          } ////////////////// Start Site Inspection ///////////

        }, {
          key: "getAllSiteInspection",
          value: function getAllSiteInspection() {
            return this.https.get(this.apiUrl + 'siteInspection/getAll');
          }
        }, {
          key: "addSiteInspection",
          value: function addSiteInspection(data) {
            return this.https.post(this.apiUrl + 'siteInspection/add', data);
          }
        }, {
          key: "getSiteInspection",
          value: function getSiteInspection(id) {
            return this.https.get(this.apiUrl + 'siteInspection/get/' + id);
          }
        }, {
          key: "updateSiteInspection",
          value: function updateSiteInspection(id, data) {
            return this.https.put(this.apiUrl + 'siteInspection/update/' + id, data);
          }
        }, {
          key: "deleteSiteInspection",
          value: function deleteSiteInspection(id) {
            return this.https["delete"](this.apiUrl + 'siteInspection/delete/' + id);
          } ////////////////// End Site Inspection ////////////
          ////////////////////// Start Hzaard ///////

        }, {
          key: "getAllHazardFormData",
          value: function getAllHazardFormData() {
            return this.https.get(this.apiUrl + 'hazard/getAll');
          }
        }, {
          key: "addHazardFormData",
          value: function addHazardFormData(data) {
            return this.https.post(this.apiUrl + 'hazard/add', data);
          }
        }, {
          key: "getHazardFormDataById",
          value: function getHazardFormDataById(id) {
            return this.https.get(this.apiUrl + 'hazard/get/' + id);
          }
        }, {
          key: "updateHazardFormData",
          value: function updateHazardFormData(id, data) {
            return this.https.put(this.apiUrl + 'hazard/update/' + id, data);
          }
        }, {
          key: "deleteHazardFormData",
          value: function deleteHazardFormData(id) {
            return this.https["delete"](this.apiUrl + 'hazard/delete/' + id);
          } //////////////End Hazard///////////

        }, {
          key: "getAllHazardTreatmentRelation",
          value: function getAllHazardTreatmentRelation() {
            return this.https.get(this.apiUrl + 'hazardTreatmentRelation/getAll');
          }
        }, {
          key: "getHazardTreatmentById",
          value: function getHazardTreatmentById(id) {
            return this.https.get(this.apiUrl + 'hazardTreatmentRelation/get/' + id);
          }
        }, {
          key: "updateHazardTreatmentRelation",
          value: function updateHazardTreatmentRelation(id, data) {
            return this.https.put(this.apiUrl + 'hazardTreatmentRelation/update/' + id, data);
          } ////////////////// Start Site Inspection category ///////////

        }, {
          key: "getAllSiteInspectionCategory",
          value: function getAllSiteInspectionCategory() {
            return this.https.get(this.apiUrl + 'siteInspectionCategory/getAll');
          }
        }, {
          key: "getSiteInspectionCategory",
          value: function getSiteInspectionCategory(id) {
            return this.https.get(this.apiUrl + 'siteInspectionCategory/get/' + id);
          }
        }, {
          key: "getTopicByCategoryID",
          value: function getTopicByCategoryID(id) {
            return this.https.get(this.apiUrl + 'siteInspectionCategory/getAllTopics/' + id);
          }
        }, {
          key: "addSiteInspectionCategory",
          value: function addSiteInspectionCategory(data) {
            return this.https.post(this.apiUrl + 'siteInspectionCategory/add', data);
          }
        }, {
          key: "updateSiteInspectionCategory",
          value: function updateSiteInspectionCategory(id, data) {
            return this.https.put(this.apiUrl + 'siteInspectionCategory/update/' + id, data);
          }
        }, {
          key: "deleteSiteInspectionCategory",
          value: function deleteSiteInspectionCategory(id) {
            return this.https["delete"](this.apiUrl + 'siteInspectionCategory/delete/' + id);
          } ////////////////// End Site Inspection category ////////////
          ////////////////// Start Site Inspection Topic ///////////

        }, {
          key: "getAllSiteInspectionTopic",
          value: function getAllSiteInspectionTopic() {
            return this.https.get(this.apiUrl + 'siteInspectionTopic/getAll');
          }
        }, {
          key: "getSiteInspectionTopic",
          value: function getSiteInspectionTopic(id) {
            return this.https.get(this.apiUrl + 'siteInspectionTopic/get/' + id);
          }
        }, {
          key: "addMultipleSiteInspectionTopic",
          value: function addMultipleSiteInspectionTopic(data) {
            return this.https.post(this.apiUrl + 'siteInspectionTopic/add/multiple', data);
          }
        }, {
          key: "addSiteInspectionTopic",
          value: function addSiteInspectionTopic(data) {
            return this.https.post(this.apiUrl + 'siteInspectionTopic/add', data);
          }
        }, {
          key: "updateSiteInspectionTopic",
          value: function updateSiteInspectionTopic(id, data) {
            return this.https.put(this.apiUrl + 'siteInspectionTopic/update/' + id, data);
          }
        }, {
          key: "deleteSiteInspectionTopic",
          value: function deleteSiteInspectionTopic(id) {
            return this.https["delete"](this.apiUrl + 'siteInspectionTopic/delete/' + id);
          }
        }, {
          key: "getAllassessmet",
          value: function getAllassessmet() {
            return this.https.get(this.apiUrl + 'riskAssessment/getAll');
          }
        }, {
          key: "getAssessmentbyId",
          value: function getAssessmentbyId(id) {
            return this.https.get(this.apiUrl + 'riskAssessment/get/' + id);
          }
        }, {
          key: "addAssessment",
          value: function addAssessment(data) {
            return this.https.post(this.apiUrl + 'riskAssessment/add', data);
          }
        }, {
          key: "updateAssessment",
          value: function updateAssessment(id, data) {
            return this.https.put(this.apiUrl + 'riskAssessment/update/' + id, data);
          }
        }, {
          key: "deleteAssessment",
          value: function deleteAssessment(id) {
            return this.https["delete"](this.apiUrl + 'riskAssessment/delete/' + id);
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

    },

    /***/
    "yZxC": function yZxC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SetTitleService", function () {
        return SetTitleService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");

      var SetTitleService = /*#__PURE__*/function () {
        function SetTitleService(titleService) {
          _classCallCheck(this, SetTitleService);

          this.titleService = titleService;
        }

        _createClass(SetTitleService, [{
          key: "setTitle",
          value: function setTitle(title) {
            this.titleService.setTitle(title);
          }
        }]);

        return SetTitleService;
      }();

      SetTitleService.ɵfac = function SetTitleService_Factory(t) {
        return new (t || SetTitleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]));
      };

      SetTitleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: SetTitleService,
        factory: SetTitleService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SetTitleService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "zUnb": function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P": function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map