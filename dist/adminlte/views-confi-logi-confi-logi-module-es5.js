(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-confi-logi-confi-logi-module"], {
    /***/
    "3qhI": function qhI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfiLogiModule", function () {
        return ConfiLogiModule;
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


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "PCNd");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _confi_logi_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./confi-logi-routing.module */
      "il7X");
      /* harmony import */


      var _confi_logi_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./confi-logi.component */
      "ao8m");
      /* harmony import */


      var _set_logic_set_logic_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./set-logic/set-logic.component */
      "bu9C");
      /* harmony import */


      var _job_number_job_number_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./job-number/job-number.component */
      "zQXG");
      /* harmony import */


      var _job_number_create_job_no_create_job_no_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./job-number/create-job-no/create-job-no.component */
      "bXbX");

      var ConfiLogiModule = function ConfiLogiModule() {
        _classCallCheck(this, ConfiLogiModule);
      };

      ConfiLogiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ConfiLogiModule
      });
      ConfiLogiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ConfiLogiModule_Factory(t) {
          return new (t || ConfiLogiModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _confi_logi_routing_module__WEBPACK_IMPORTED_MODULE_4__["ConfiLogiRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ConfiLogiModule, {
          declarations: [_confi_logi_component__WEBPACK_IMPORTED_MODULE_5__["ConfiLogiComponent"], _set_logic_set_logic_component__WEBPACK_IMPORTED_MODULE_6__["SetLogicComponent"], _job_number_job_number_component__WEBPACK_IMPORTED_MODULE_7__["JobNumberComponent"], _job_number_create_job_no_create_job_no_component__WEBPACK_IMPORTED_MODULE_8__["CreateJobNoComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _confi_logi_routing_module__WEBPACK_IMPORTED_MODULE_4__["ConfiLogiRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfiLogiModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_confi_logi_component__WEBPACK_IMPORTED_MODULE_5__["ConfiLogiComponent"], _set_logic_set_logic_component__WEBPACK_IMPORTED_MODULE_6__["SetLogicComponent"], _job_number_job_number_component__WEBPACK_IMPORTED_MODULE_7__["JobNumberComponent"], _job_number_create_job_no_create_job_no_component__WEBPACK_IMPORTED_MODULE_8__["CreateJobNoComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _confi_logi_routing_module__WEBPACK_IMPORTED_MODULE_4__["ConfiLogiRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ao8m": function ao8m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfiLogiComponent", function () {
        return ConfiLogiComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      var ConfiLogiComponent = /*#__PURE__*/function () {
        function ConfiLogiComponent() {
          _classCallCheck(this, ConfiLogiComponent);
        }

        _createClass(ConfiLogiComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ConfiLogiComponent;
      }();

      ConfiLogiComponent.ɵfac = function ConfiLogiComponent_Factory(t) {
        return new (t || ConfiLogiComponent)();
      };

      ConfiLogiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ConfiLogiComponent,
        selectors: [["app-confi-logi"]],
        decls: 1,
        vars: 0,
        template: function ConfiLogiComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maS1sb2dpLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfiLogiComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-confi-logi',
            templateUrl: './confi-logi.component.html',
            styleUrls: ['./confi-logi.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "bXbX": function bXbX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateJobNoComponent", function () {
        return CreateJobNoComponent;
      });
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/utils/services/logical-form-info.service */
      "wbBK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "SVse");

      function CreateJobNoComponent_option_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "json");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, item_r2));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2.siteName);
        }
      }

      function CreateJobNoComponent_option_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "json");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, item_r3));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r3.customerName);
        }
      }

      var CreateJobNoComponent = /*#__PURE__*/function () {
        function CreateJobNoComponent(dialogRef, data, logicalFormInfoService, fb) {
          _classCallCheck(this, CreateJobNoComponent);

          this.dialogRef = dialogRef;
          this.data = data;
          this.logicalFormInfoService = logicalFormInfoService;
          this.fb = fb;
          this.allSites = [];
          this.allCustomers = [];
        }

        _createClass(CreateJobNoComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this = this;

            this.addJobNumberForm.get('siteName').valueChanges.subscribe(function (res) {
              // console.log(JSON.parse(res))
              res = JSON.parse(res);

              _this.addJobNumberForm.get('streetNumber').setValue(res.streetNumber);

              _this.addJobNumberForm.get('streetAddress').setValue(res.streetAddress);

              _this.addJobNumberForm.get('suburb').setValue(res.suburb);

              _this.addJobNumberForm.get('state').setValue(res.state);
            });
            this.addJobNumberForm.get('customerName').valueChanges.subscribe(function (res) {
              // console.log(JSON.parse(res))
              res = JSON.parse(res);

              _this.addJobNumberForm.get('customerContact').setValue(res.customerContact);

              _this.addJobNumberForm.get('customerContactPhone').setValue(res.customerContactPhone);

              _this.addJobNumberForm.get('customerEmail').setValue(res.customerEmail);
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.addJobNumberForm = this.fb.group({
              siteName: [''],
              streetNumber: [{
                value: '',
                disabled: true
              }],
              streetAddress: [{
                value: '',
                disabled: true
              }],
              suburb: [{
                value: '',
                disabled: true
              }],
              state: [{
                value: '',
                disabled: true
              }],
              customerName: [''],
              customerContact: [{
                value: '',
                disabled: true
              }],
              customerContactPhone: [{
                value: '',
                disabled: true
              }],
              customerEmail: [{
                value: '',
                disabled: true
              }]
            });
            this.logicalFormInfoService.getAllSite().subscribe(function (res) {
              _this2.allSites = res.data;
              console.log(res.data);
            });
            this.logicalFormInfoService.getAllCustomer().subscribe(function (res) {
              _this2.allCustomers = res.data;
            });
          }
        }, {
          key: "f",
          get: function get() {
            return this.addJobNumberForm.controls;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this3 = this;

            console.log(this.addJobNumberForm.value);
            var data;
            data = {
              arrObj: [{
                customerContact: this.f.customerContact.value,
                customerContactPhone: this.f.customerContactPhone.value,
                customerEmail: this.f.customerEmail.value,
                customerName: JSON.parse(this.f.customerName.value).customerName,
                siteName: JSON.parse(this.f.siteName.value).siteName,
                state: this.f.state.value,
                streetAddress: this.f.streetAddress.value,
                streetNumber: this.f.streetNumber.value,
                suburb: this.f.suburb.value
              }]
            };
            console.log(data);
            this.logicalFormInfoService.addJobNumber(data).subscribe(function (res) {
              console.log(res);

              _this3.dialogRef.close('success');
            });
          }
        }, {
          key: "setSite",
          value: function setSite(item) {
            console.log(item);
            this.addJobNumberForm.get('streetNumber').setValue(item.streetNumber);
            this.addJobNumberForm.get('streetAddress').setValue(item.streetAddress);
            this.addJobNumberForm.get('suburb').setValue(item.suburb);
            this.addJobNumberForm.get('state').setValue(item.state);
          }
        }, {
          key: "setCustomer",
          value: function setCustomer(item) {
            this.addJobNumberForm.get('customerContact').setValue(item.customerContact);
            this.addJobNumberForm.get('customerContactPhone').setValue(item.customerContactPhone);
            this.addJobNumberForm.get('customerEmail').setValue(item.customerEmail);
          }
        }]);

        return CreateJobNoComponent;
      }();

      CreateJobNoComponent.ɵfac = function CreateJobNoComponent_Factory(t) {
        return new (t || CreateJobNoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_2__["LogicalFormInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]));
      };

      CreateJobNoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: CreateJobNoComponent,
        selectors: [["app-create-job-no"]],
        decls: 69,
        vars: 3,
        consts: [[1, "content", 3, "formGroup"], [1, "container", "px-4", "py-4", "bg-white"], [1, "row"], [1, "my-3", "col-6"], ["for", "exampleFormControlInput1", 1, "form-Label"], ["type", "text", "formControlName", "siteName", "id", "siteName", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], [1, "my-3", "col-2"], ["type", "text", "formControlName", "streetNumber", "id", "siteName", 1, "form-control"], [1, "my-3", "col-4"], ["type", "text", "formControlName", "streetAddress", "id", "siteName", 1, "form-control"], ["type", "text", "formControlName", "suburb", "id", "siteName", 1, "form-control"], ["for", "exampleFormControlInput1", 1, "form-label"], ["aria-label", "Default select example", "formControlName", "state", 1, "form-select", "form-control", "col"], ["selected", "", "hidden", ""], ["value", "NSW"], ["value", "ACT"], ["value", "QLD"], ["value", "NT"], ["value", "SA"], ["value", "NZ"], ["value", "TAS"], ["value", "VIC"], ["value", "WA"], [1, "my-3", "col"], ["type", "text", "formControlName", "customerName", "id", "siteName", 1, "form-control"], ["type", "text", "id", "siteName", "formControlName", "customerContact", 1, "form-control"], ["type", "text", "id", "siteName", "formControlName", "customerContactPhone", 1, "form-control"], ["type", "text", "id", "siteName", "formControlName", "customerEmail", 1, "form-control"], [1, "btn", "btn-primary", 3, "click"], [3, "value"]],
        template: function CreateJobNoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Create Job Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Site Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "select", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, CreateJobNoComponent_option_9_Template, 3, 4, "option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Street Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Street Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Suburb");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "State");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "select", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Select");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "NSW");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "ACT");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "option", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "QLD");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "option", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "NT");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "SA");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "option", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "NZ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "option", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "TAS");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "option", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "VIC");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "option", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "WA");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Customer Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "select", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, CreateJobNoComponent_option_52_Template, 3, 4, "option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Customer Contact");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "input", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Customer Contact Phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Customer Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "input", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateJobNoComponent_Template_button_click_67_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, " Create ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.addJobNumberForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.allSites);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.allCustomers);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["JsonPipe"]],
        styles: ["input[_ngcontent-%COMP%]:focus {\n  border: 2px solid dodgerblue;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 500;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n}\n\n.form-control[_ngcontent-%COMP%]:hover {\n  border-color: rgba(46, 105, 255, 0.5);\n  box-shadow: 0 0 0 2px rgba(46, 105, 255, 0.25);\n}\n\nabel[_ngcontent-%COMP%]:not(.form-check-label):not(.custom-file-label) {\n  font-weight: 500;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  border: 2px solid dodgerblue;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 500;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n}\n\n.form-control[_ngcontent-%COMP%]:hover {\n  border-color: rgba(46, 105, 255, 0.5);\n  box-shadow: 0 0 0 2px rgba(46, 105, 255, 0.25);\n}\n\n.pt-3[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 32px;\n  font-weight: 700;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n}\n\n.container[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.form-Label[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 500;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n  width: 100%;\n  margin-left: 2px;\n  margin-bottom: 14px;\n}\n\n.sign[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid rgba(46, 105, 255, 0.5);\n  width: 500px;\n  border-radius: 5px;\n}\n\n.sign[_ngcontent-%COMP%]:hover {\n  border: 1px solid;\n  border-color: #2e69ff40;\n  box-shadow: 0 0 0 3px rgba(46, 105, 255, 0.25);\n}\n\n.imgStyle[_ngcontent-%COMP%] {\n  border: 2px solid #2e69ff40;\n  border-radius: 10px;\n}\n\n.example-additional-selection[_ngcontent-%COMP%] {\n  opacity: 0.75;\n  font-size: 0.75em;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNyZWF0ZS1qb2Itbm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBQTtBQUNGOztBQUNBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBRUY7O0FBQUE7RUFDRSxxQ0FBQTtFQUNBLDhDQUFBO0FBR0Y7O0FBREE7RUFDRSxnQkFBQTtBQUlGOztBQUZBO0VBQ0UsNEJBQUE7QUFLRjs7QUFIQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQU1GOztBQUpBO0VBQ0UscUNBQUE7RUFDQSw4Q0FBQTtBQU9GOztBQUxBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBUUY7O0FBTkE7RUFDRSx1QkFBQTtBQVNGOztBQVBBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFVRjs7QUFSQTtFQUNFLGFBQUE7RUFDQSx5Q0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQVdGOztBQVRBO0VBQ0UsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLDhDQUFBO0FBWUY7O0FBVEE7RUFDRSwyQkFBQTtFQUNBLG1CQUFBO0FBWUY7O0FBVkE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QUFhRjs7QUFYQTtFQUNFLFdBQUE7QUFjRiIsImZpbGUiOiJjcmVhdGUtam9iLW5vLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQ6Zm9jdXMge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGRvZGdlcmJsdWU7XHJcbn1cclxubGFiZWwge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIGZvbnQtZmFtaWx5OiBJbnRlciwgc2Fucy1zZXJpZjtcclxufVxyXG4uZm9ybS1jb250cm9sOmhvdmVyIHtcclxuICBib3JkZXItY29sb3I6IHJnYmEoNDYsIDEwNSwgMjU1LCAwLjUpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCByZ2IoNDYgMTA1IDI1NSAvIDI1JSk7XHJcbn1cclxuYWJlbDpub3QoLmZvcm0tY2hlY2stbGFiZWwpOm5vdCguY3VzdG9tLWZpbGUtbGFiZWwpIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbmlucHV0OmZvY3VzIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCBkb2RnZXJibHVlO1xyXG59XHJcbmxhYmVsIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICBmb250LWZhbWlseTogSW50ZXIsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmZvcm0tY29udHJvbDpob3ZlciB7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDQ2LCAxMDUsIDI1NSwgMC41KTtcclxuICBib3gtc2hhZG93OiAwIDAgMCAycHggcmdiKDQ2IDEwNSAyNTUgLyAyNSUpO1xyXG59XHJcbi5wdC0zIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICBmb250LWZhbWlseTogSW50ZXIsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLmZvcm0tTGFiZWwge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIGZvbnQtZmFtaWx5OiBJbnRlciwgc2Fucy1zZXJpZjtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XHJcbn1cclxuLnNpZ24ge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg0NiwgMTA1LCAyNTUsIDAuNSk7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4uc2lnbjpob3ZlciB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMmU2OWZmNDA7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYig0NiwgMTA1LCAyNTUsIDAuMjUpO1xyXG59XHJcblxyXG4uaW1nU3R5bGUge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMyZTY5ZmY0MDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5leGFtcGxlLWFkZGl0aW9uYWwtc2VsZWN0aW9uIHtcclxuICBvcGFjaXR5OiAwLjc1O1xyXG4gIGZvbnQtc2l6ZTogMC43NWVtO1xyXG59XHJcbnRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CreateJobNoComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-create-job-no',
            templateUrl: './create-job-no.component.html',
            styleUrls: ['./create-job-no.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]]
            }]
          }, {
            type: src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_2__["LogicalFormInfoService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "bu9C": function bu9C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SetLogicComponent", function () {
        return SetLogicComponent;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/utils/services/logical-form-info.service */
      "wbBK");
      /* harmony import */


      var src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/utils/services/set-title.service */
      "yZxC");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/select */
      "ZTz/");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");

      var _c0 = ["risk"];

      function SetLogicComponent_tr_33_span_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 36);
        }
      }

      function SetLogicComponent_tr_33_span_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " One Item selected ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SetLogicComponent_tr_33_span_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " More than one selected ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SetLogicComponent_tr_33_mat_option_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var parameter_r25 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", parameter_r25._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", parameter_r25.title, "");
        }
      }

      function SetLogicComponent_tr_33_span_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 36);
        }
      }

      function SetLogicComponent_tr_33_span_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " One Item selected ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SetLogicComponent_tr_33_span_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " More than one selected ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SetLogicComponent_tr_33_mat_option_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var parameter_r26 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", parameter_r26._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", parameter_r26.title, " ");
        }
      }

      function SetLogicComponent_tr_33_span_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 36);
        }
      }

      function SetLogicComponent_tr_33_span_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " One Item selected ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SetLogicComponent_tr_33_span_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " More than one selected ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SetLogicComponent_tr_33_mat_option_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var parameter_r27 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", parameter_r27._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", parameter_r27.title, " ");
        }
      }

      function SetLogicComponent_tr_33_span_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 36);
        }
      }

      function SetLogicComponent_tr_33_span_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " One Item selected ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SetLogicComponent_tr_33_span_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " More than one selected ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SetLogicComponent_tr_33_mat_option_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var parameter_r28 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", parameter_r28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", parameter_r28.title, " ");
        }
      }

      function SetLogicComponent_tr_33_span_72_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 36);
        }
      }

      function SetLogicComponent_tr_33_span_73_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " One Item selected ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SetLogicComponent_tr_33_span_74_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " More than one selected ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SetLogicComponent_tr_33_mat_option_75_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var parameter_r29 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", parameter_r29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", parameter_r29.title, " ");
        }
      }

      function SetLogicComponent_tr_33_td_92_Template(rf, ctx) {
        if (rf & 1) {
          var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SetLogicComponent_tr_33_td_92_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var task_r1 = ctx_r31.$implicit;
            var i_r2 = ctx_r31.index;

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r30.setRelation(task_r1.title, task_r1._id, i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Set");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SetLogicComponent_tr_33_td_93_Template(rf, ctx) {
        if (rf & 1) {
          var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SetLogicComponent_tr_33_td_93_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var task_r1 = ctx_r34.$implicit;
            var i_r2 = ctx_r34.index;

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r33.setRelation(task_r1.title, task_r1._id, i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SetLogicComponent_tr_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "HighRiskConstruction");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-select", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-select-trigger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SetLogicComponent_tr_33_span_12_Template, 1, 0, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SetLogicComponent_tr_33_span_13_Template, 2, 0, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SetLogicComponent_tr_33_span_14_Template, 2, 0, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SetLogicComponent_tr_33_mat_option_15_Template, 2, 2, "mat-option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](16, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "PPE selection");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-select", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-select-trigger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, SetLogicComponent_tr_33_span_23_Template, 1, 0, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, SetLogicComponent_tr_33_span_24_Template, 2, 0, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, SetLogicComponent_tr_33_span_25_Template, 2, 0, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, SetLogicComponent_tr_33_mat_option_26_Template, 2, 2, "mat-option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](27, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-form-field", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Licence Categories");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-select", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-select-trigger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, SetLogicComponent_tr_33_span_34_Template, 1, 0, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, SetLogicComponent_tr_33_span_35_Template, 2, 0, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, SetLogicComponent_tr_33_span_36_Template, 2, 0, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, SetLogicComponent_tr_33_mat_option_37_Template, 2, 2, "mat-option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](38, 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-form-field", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Identify Hazards");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-select", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-select-trigger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, SetLogicComponent_tr_33_span_45_Template, 1, 0, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, SetLogicComponent_tr_33_span_46_Template, 2, 0, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, SetLogicComponent_tr_33_span_47_Template, 2, 0, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, SetLogicComponent_tr_33_mat_option_48_Template, 2, 2, "mat-option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](49, 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-form-field", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Risk");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-select", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "L1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-option", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "L2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-option", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "L3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-option", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "L4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "L5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](65, 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-form-field", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Control Actions Required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-select", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-select-trigger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, SetLogicComponent_tr_33_span_72_Template, 1, 0, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, SetLogicComponent_tr_33_span_73_Template, 2, 0, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, SetLogicComponent_tr_33_span_74_Template, 2, 0, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, SetLogicComponent_tr_33_mat_option_75_Template, 2, 2, "mat-option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](76, 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "mat-form-field", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Residule Risk");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-select", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "mat-option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "L1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "mat-option", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "L2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-option", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "L3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "mat-option", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "L4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "mat-option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "L5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, SetLogicComponent_tr_33_td_92_Template, 3, 0, "td", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, SetLogicComponent_tr_33_td_93_Template, 3, 0, "td", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var task_r1 = ctx.$implicit;
          var i_r2 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r2 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r1.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r0.highRiskFA().controls[i_r2].get("highRiskArr").value == null ? null : ctx_r0.highRiskFA().controls[i_r2].get("highRiskArr").value.length));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.highRiskFA().controls[i_r2].get("highRiskArr").value == null ? null : ctx_r0.highRiskFA().controls[i_r2].get("highRiskArr").value.length) == 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.highRiskFA().controls[i_r2].get("highRiskArr").value == null ? null : ctx_r0.highRiskFA().controls[i_r2].get("highRiskArr").value.length) > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.highRiskConstructionData);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r0.PPE_FA().controls[i_r2].get("ppeArr").value == null ? null : ctx_r0.PPE_FA().controls[i_r2].get("ppeArr").value.length));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.PPE_FA().controls[i_r2].get("ppeArr").value == null ? null : ctx_r0.PPE_FA().controls[i_r2].get("ppeArr").value.length) == 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.PPE_FA().controls[i_r2].get("ppeArr").value == null ? null : ctx_r0.PPE_FA().controls[i_r2].get("ppeArr").value.length) > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.PPESelectionData);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r0.licenceCatFA().controls[i_r2].get("licenceArr").value == null ? null : ctx_r0.licenceCatFA().controls[i_r2].get("licenceArr").value.length));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.licenceCatFA().controls[i_r2].get("licenceArr").value == null ? null : ctx_r0.licenceCatFA().controls[i_r2].get("licenceArr").value.length) == 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.licenceCatFA().controls[i_r2].get("licenceArr").value == null ? null : ctx_r0.licenceCatFA().controls[i_r2].get("licenceArr").value.length) > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.licenceCatAll);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r0.identifyHazrdsFA().controls[i_r2].get("hazardsArr").value == null ? null : ctx_r0.identifyHazrdsFA().controls[i_r2].get("hazardsArr").value.length));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.identifyHazrdsFA().controls[i_r2].get("hazardsArr").value == null ? null : ctx_r0.identifyHazrdsFA().controls[i_r2].get("hazardsArr").value.length) == 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.identifyHazrdsFA().controls[i_r2].get("hazardsArr").value == null ? null : ctx_r0.identifyHazrdsFA().controls[i_r2].get("hazardsArr").value.length) > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.allHazards);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r0.contrActReqFA().controls[i_r2].get("contrActReqArr").value == null ? null : ctx_r0.contrActReqFA().controls[i_r2].get("contrActReqArr").value.length));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.contrActReqFA().controls[i_r2].get("contrActReqArr").value == null ? null : ctx_r0.contrActReqFA().controls[i_r2].get("contrActReqArr").value.length) == 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.contrActReqFA().controls[i_r2].get("contrActReqArr").value == null ? null : ctx_r0.contrActReqFA().controls[i_r2].get("contrActReqArr").value.length) > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.allContrlActReq);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !task_r1.set);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r1.set);
        }
      }

      var SetLogicComponent = /*#__PURE__*/function () {
        function SetLogicComponent(fb, logicalFormInfo, setTitle) {
          _classCallCheck(this, SetLogicComponent);

          this.fb = fb;
          this.logicalFormInfo = logicalFormInfo;
          this.setTitle = setTitle;
          this.allHazards = [];
          this.allContrlActReq = [];
          this.jobTaskData = [];
          this.highRiskData = [];
          this.PPESelectionData = [];
          this.codeOfPract = [];
          this.licenseAndQual = [];
          this.licenseAndQualificationData = [];
          this.licenceCatAll = [];
          this.highRiskConstructionData = [];
          this.task = [];
          this.riskLevel = '';
          this.residuleRiskL = '';
          this.PPEselection = [{
            label: 'Disposable dust mask',
            value: ''
          }, {
            label: 'Dust Mas',
            value: ''
          }, {
            label: 'Face shield',
            value: ''
          }, {
            label: 'Full face respirator',
            value: ''
          }, {
            label: 'Gttors',
            value: ''
          }, {
            label: 'Half face respirator',
            value: ''
          }, {
            label: 'Hard Hat',
            value: ''
          }, {
            label: 'Hearing protection',
            value: ''
          }, {
            label: 'High-Vis Clothing',
            value: ''
          }, {
            label: 'Lock Out Tags',
            value: ''
          }, {
            label: 'Long sleeve/Long pants',
            value: ''
          }, {
            label: 'Out of Service Tags',
            value: ''
          }, {
            label: 'Protective gloves',
            value: ''
          }, {
            label: 'Rescue kit',
            value: ''
          }, {
            label: 'Safety boots',
            value: ''
          }, {
            label: 'Safety glasses',
            value: ''
          }, {
            label: 'Sun Screen',
            value: ''
          }, {
            label: 'torch',
            value: ''
          }, {
            label: 'Wide Brim Hat',
            value: ''
          }];
          this.licenseAndQualification = [{
            label: 'Open Cable Licence',
            value: ''
          }, {
            label: 'White Card',
            value: ''
          }, {
            label: 'EWP Licence',
            value: ''
          }, {
            label: 'Working At Heights',
            value: ''
          }, {
            label: 'Security Licence',
            value: ''
          }, {
            label: 'Asbestos Awarness',
            value: ''
          }, {
            label: 'Working In Confined Space',
            value: ''
          }];
          this.highRiskConstruction2 = [{
            label: 'Working in or near trenches or shafts deeper than 1.5metres',
            value: ''
          }, {
            label: 'Work in or near a confined space',
            value: ''
          }, {
            label: 'Work in an area that may have a contaminated or flammable atmosphere',
            value: ''
          }, {
            label: 'Working around or near mobile plant',
            value: ''
          }, {
            label: 'Work with near or near asbestos',
            value: ''
          }, {
            label: 'Working with hazardous substances',
            value: ''
          }, {
            label: 'Working with or near tilt-up/precast concrete',
            value: ''
          }, {
            label: 'Risk of falls higher than 2 metres',
            value: ''
          }, {
            label: 'Working near on or adjacent to a road or rail corridor',
            value: ''
          }, {
            label: 'Working on or near telecommunication tower',
            value: ''
          }, {
            label: 'Working on or near telecommunication tower',
            value: ''
          }, {
            label: 'Work near explosives',
            value: ''
          }, {
            label: 'Work in or near water or other liquid that involves a risk of drowning',
            value: ''
          }, {
            label: 'Demolition of load-bearing structure',
            value: ''
          }, {
            label: 'Diving work',
            value: ''
          }];
          this.PPEselection2 = [{
            label: 'Disposable dust mask',
            value: ''
          }, {
            label: 'Dust Mas',
            value: ''
          }, {
            label: 'Face shield',
            value: ''
          }, {
            label: 'Full face respirator',
            value: ''
          }, {
            label: 'Gttors',
            value: ''
          }, {
            label: 'Half face respirator',
            value: ''
          }, {
            label: 'Hard Hat',
            value: ''
          }, {
            label: 'Hearing protection',
            value: ''
          }, {
            label: 'High-Vis Clothing',
            value: ''
          }, {
            label: 'Lock Out Tags',
            value: ''
          }, {
            label: 'Long sleeve/Long pants',
            value: ''
          }, {
            label: 'Out of Service Tags',
            value: ''
          }, {
            label: 'Protective gloves',
            value: ''
          }, {
            label: 'Rescue kit',
            value: ''
          }, {
            label: 'Safety boots',
            value: ''
          }, {
            label: 'Safety glasses',
            value: ''
          }, {
            label: 'Sun Screen',
            value: ''
          }, {
            label: 'torch',
            value: ''
          }, {
            label: 'Wide Brim Hat',
            value: ''
          }];
        }

        _createClass(SetLogicComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setTitle.setTitle('WHS-Set Relation');
            this.JobTaskDetail = this.fb.group({
              highRiskConstr: this.fb.array([]),
              PPE: this.fb.array([]),
              LicenceCat: this.fb.array([]),
              identifyHazrds: this.fb.array([]),
              contrActReq: this.fb.array([]),
              riskLevel: this.fb.array([]),
              residualRisk: this.fb.array([])
            });
            this.getJobTask();
            this.getAllHighRisk();
            this.getAllLicence();
            this.getAllCategories();
            this.getAllPPE();
            this.getAllHazard();
            this.getAllContrActReq(); //  this.getCodOfCond();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {}
        }, {
          key: "addActionHighRisk",
          value: function addActionHighRisk() {
            {
              this.highRiskFA().push(this.highRiskFG());
            }
          }
        }, {
          key: "addActionPPE",
          value: function addActionPPE() {
            {
              this.PPE_FA().push(this.PPE_FG());
            }
          }
        }, {
          key: "addActionLicnCat",
          value: function addActionLicnCat() {
            {
              this.licenceCatFA().push(this.licenceCatFG());
            }
          }
        }, {
          key: "addActionContrActReq",
          value: function addActionContrActReq() {
            {
              this.contrActReqFA().push(this.contrActReqFG());
            }
          }
        }, {
          key: "addActionIdentifyHazrds",
          value: function addActionIdentifyHazrds() {
            {
              this.identifyHazrdsFA().push(this.identifyHazrdsFG());
            }
          }
        }, {
          key: "addActionRiskLevel",
          value: function addActionRiskLevel() {
            {
              this.riskLevelFA().push(this.riskLevelFG());
            }
          }
        }, {
          key: "addActionResiRiskLevel",
          value: function addActionResiRiskLevel() {
            {
              this.residlRiskLevelFA().push(this.residlRiskLevelFG());
            }
          }
        }, {
          key: "addActionCOP",
          value: function addActionCOP() {
            {
              this.addCOP().push(this.newActionCOP());
            }
          }
        }, {
          key: "highRiskFA",
          value: function highRiskFA() {
            return this.JobTaskDetail.get('highRiskConstr');
          }
        }, {
          key: "PPE_FA",
          value: function PPE_FA() {
            return this.JobTaskDetail.get('PPE');
          }
        }, {
          key: "licenceCatFA",
          value: function licenceCatFA() {
            return this.JobTaskDetail.get('LicenceCat');
          }
        }, {
          key: "identifyHazrdsFA",
          value: function identifyHazrdsFA() {
            return this.JobTaskDetail.get('identifyHazrds');
          }
        }, {
          key: "contrActReqFA",
          value: function contrActReqFA() {
            return this.JobTaskDetail.get('contrActReq');
          }
        }, {
          key: "addCOP",
          value: function addCOP() {
            return this.JobTaskDetail.get('codeOfPract');
          }
        }, {
          key: "riskLevelFA",
          value: function riskLevelFA() {
            return this.JobTaskDetail.get('riskLevel');
          }
        }, {
          key: "residlRiskLevelFA",
          value: function residlRiskLevelFA() {
            return this.JobTaskDetail.get('residualRisk');
          }
        }, {
          key: "highRiskFG",
          value: function highRiskFG() {
            return this.fb.group({
              highRiskArr: ['']
            });
          }
        }, {
          key: "PPE_FG",
          value: function PPE_FG() {
            return this.fb.group({
              ppeArr: ['']
            });
          }
        }, {
          key: "licenceCatFG",
          value: function licenceCatFG() {
            return this.fb.group({
              licenceArr: ['']
            });
          }
        }, {
          key: "identifyHazrdsFG",
          value: function identifyHazrdsFG() {
            return this.fb.group({
              hazardsArr: ['']
            });
          }
        }, {
          key: "contrActReqFG",
          value: function contrActReqFG() {
            return this.fb.group({
              contrActReqArr: ['']
            });
          }
        }, {
          key: "riskLevelFG",
          value: function riskLevelFG() {
            return this.fb.group({
              riskLevel: ['']
            });
          }
        }, {
          key: "residlRiskLevelFG",
          value: function residlRiskLevelFG() {
            return this.fb.group({
              resiRiskLevel: ['']
            });
          }
        }, {
          key: "newActionCOP",
          value: function newActionCOP() {
            //code of practice
            return this.fb.group({
              copArr: ['']
            });
          }
        }, {
          key: "onFormSubmit",
          value: function onFormSubmit() {
            console.log(this.JobTaskDetail);
          }
        }, {
          key: "getJobTask",
          value: function getJobTask() {
            var _this4 = this;

            this.logicalFormInfo.getAllJobtask().subscribe(function (res) {
              console.log('jobTaskDetails=>', res);
              _this4.jobTaskData = res.data;

              _this4.jobTaskData.forEach(function (item, i) {
                _this4.addActionHighRisk();

                _this4.addActionPPE();

                _this4.addActionLicnCat();

                _this4.addActionContrActReq();

                _this4.addActionIdentifyHazrds();

                _this4.addActionRiskLevel();

                _this4.addActionResiRiskLevel();

                _this4.highRiskFA().controls[i].get('highRiskArr').setValue(item.risk);

                _this4.PPE_FA().controls[i].get('ppeArr').setValue(item.PPE);

                _this4.licenceCatFA().controls[i].get('licenceArr').setValue(item.licence); // console.log("item.identifyHazard",item.identifyHazard+"i",i);
                // console.log("item.controlActionRequired",item.controlActionRequired+"i",i);


                _this4.identifyHazrdsFA().controls[i].get('hazardsArr').setValue(item.identifyHazard);

                _this4.contrActReqFA().controls[i].get('contrActReqArr').setValue(item.controlActionRequired);

                _this4.riskLevelFA().controls[i].get('riskLevel').setValue(item.riskLevel);

                _this4.residlRiskLevelFA().controls[i].get('resiRiskLevel').setValue(item.residualRisk);
              });

              console.log("this.identifyHazrdsFA()", _this4.identifyHazrdsFA().value);
            });
          }
        }, {
          key: "getAllHighRisk",
          value: function getAllHighRisk() {
            var _this5 = this;

            this.logicalFormInfo.getAllRisk().subscribe(function (res) {
              console.log('Risk=>', res);
              _this5.highRiskConstructionData = res.data;
            });
          }
        }, {
          key: "getAllPPE",
          value: function getAllPPE() {
            var _this6 = this;

            this.logicalFormInfo.getAllPPE().subscribe(function (res) {
              console.log('PPE=>', res);
              _this6.PPESelectionData = res.data;
            });
          } // getCodOfCond() {
          //   this.mode = 'codeOfPractice';
          //   this.logicalFormInfo.getFormDataById(this.mode).subscribe((data) => {
          //     console.log('codeOfPractice=>', data);
          //     this.codeOfPract = data.data[0];
          //   });
          // }

        }, {
          key: "getAllLicence",
          value: function getAllLicence() {
            var _this7 = this;

            this.logicalFormInfo.getAllLicence().subscribe(function (res) {
              console.log('Licence=>', res);
              _this7.licenseAndQual = res.data;
            });
          }
        }, {
          key: "getAllHazard",
          value: function getAllHazard() {
            var _this8 = this;

            this.logicalFormInfo.getAllHazards().subscribe(function (res) {
              console.log('getAllHazards=>', res);
              _this8.allHazards = res.data;
            });
          }
        }, {
          key: "getAllContrActReq",
          value: function getAllContrActReq() {
            var _this9 = this;

            this.logicalFormInfo.getAllContrlActReq().subscribe(function (res) {
              console.log('getAllHazards=>', res);
              _this9.allContrlActReq = res.data;
            });
          }
        }, {
          key: "getAllCategories",
          value: function getAllCategories() {
            var _this10 = this;

            this.logicalFormInfo.getAllLicenceCat().subscribe(function (res) {
              console.log('getAllLicenceCat=>', res);
              _this10.licenceCatAll = res.data;
            });
          } // setRelation(riskIds, ppeIDs, codOfPractIds, title, id) {

        }, {
          key: "setRelation",
          value: function setRelation(title, id, i) {
            var _this11 = this;

            // console.log('risk', riskIds);
            // console.log('ppe', ppeIDs);
            /// console.log('licence', licenceIds);
            // console.log('codOfPract', codOfPractIds);
            console.log('index', title);
            console.log('id', id);
            console.log('id', i);
            var risk = [],
                ppe = [],
                licence = [],
                identifyHazard = [],
                controlActionRequired = [];

            if (this.highRiskFA().controls[i].get('highRiskArr').value) {
              this.highRiskFA().controls[i].get('highRiskArr').value.forEach(function (element) {
                risk.push(element._id);
              });
            }

            if (this.PPE_FA().controls[i].get('ppeArr').value) {
              this.PPE_FA().controls[i].get('ppeArr').value.forEach(function (element) {
                ppe.push(element._id);
              });
            }

            if (this.licenceCatFA().controls[i].get('licenceArr').value) {
              this.licenceCatFA().controls[i].get('licenceArr').value.forEach(function (element) {
                licence.push(element._id);
              });
            }

            if (this.identifyHazrdsFA().controls[i].get('hazardsArr').value) {
              this.identifyHazrdsFA().controls[i].get('hazardsArr').value.forEach(function (element) {
                identifyHazard.push(element._id);
              });
            }

            if (this.contrActReqFA().controls[i].get('contrActReqArr').value) {
              this.contrActReqFA().controls[i].get('contrActReqArr').value.forEach(function (element) {
                controlActionRequired.push(element._id);
              });
            }

            var data = {
              title: title,
              risk: this.highRiskFA().controls[i].get('highRiskArr').value,
              PPE: this.PPE_FA().controls[i].get('ppeArr').value,
              licence: this.licenceCatFA().controls[i].get('licenceArr').value,
              identifyHazard: this.identifyHazrdsFA().controls[i].get('hazardsArr').value,
              controlActionRequired: this.contrActReqFA().controls[i].get('contrActReqArr').value,
              riskLevel: this.riskLevelFA().controls[i].get('riskLevel').value,
              residualRisk: this.residlRiskLevelFA().controls[i].get('resiRiskLevel').value,
              set: true
            };
            console.log(data);
            this.logicalFormInfo.updateJobTask(data, id).subscribe(function (res) {
              console.log('resJob Task=>', res);

              _this11.getJobTask();

              sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                title: 'Relation set successfully',
                showConfirmButton: false,
                timer: 1200
              });
            });
          }
        }, {
          key: "categorySel",
          value: function categorySel(catArr) {
            var _this12 = this;

            this.licenseAndQualificationData = [];
            console.log(catArr);
            catArr.forEach(function (element) {
              _this12.licenseAndQual.forEach(function (item) {
                if (element === item.licenceCategoryId._id) {
                  _this12.licenseAndQualificationData.push(item);
                }
              });
            });
            console.log(' this.licenseAndQualificationData', this.licenseAndQualificationData);
          }
        }]);

        return SetLogicComponent;
      }();

      SetLogicComponent.ɵfac = function SetLogicComponent_Factory(t) {
        return new (t || SetLogicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_3__["LogicalFormInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_4__["SetTitleService"]));
      };

      SetLogicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SetLogicComponent,
        selectors: [["app-set-logic"]],
        viewQuery: function SetLogicComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.Risk = _t);
          }
        },
        decls: 34,
        vars: 2,
        consts: [[1, "content", 3, "formGroup"], [1, "container-fluid"], [1, "text-center"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body", "p-0", "overflow-auto"], [1, "table", "table-hover", "text-wrap"], [2, "width", "1%"], [2, "width", "20%"], [2, "width", "15%"], [4, "ngFor", "ngForOf"], ["formArrayName", "highRiskConstr"], [3, "formGroupName"], ["appearance", "fill"], ["formControlName", "highRiskArr", "multiple", ""], ["class", "example-additional-selection", 4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], ["formArrayName", "PPE"], ["formControlName", "ppeArr", "multiple", ""], ["formArrayName", "LicenceCat"], ["formControlName", "licenceArr", "multiple", ""], ["formArrayName", "identifyHazrds"], ["formControlName", "hazardsArr", "multiple", ""], ["formArrayName", "riskLevel"], ["formControlName", "riskLevel"], ["value", "L1"], ["value", "L2"], ["value", "L3"], ["value", "L4"], ["value", "L5"], ["formArrayName", "contrActReq"], ["formControlName", "contrActReqArr", "multiple", ""], ["formArrayName", "residualRisk"], ["formControlName", "resiRiskLevel"], [4, "ngIf"], [1, "example-additional-selection"], [3, "value"], [1, "btn", "btn-primary", 3, "click"]],
        template: function SetLogicComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Job Task List");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Index");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Job Task List ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "High Risk Construction ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "PPE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Licence Category");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Identify Hazards");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Risk");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Control Action Required");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Residule Risk");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, SetLogicComponent_tr_33_Template, 94, 31, "tr", 11);

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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.JobTaskDetail);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.jobTaskData);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectTrigger"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXQtbG9naWMuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SetLogicComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-set-logic',
            templateUrl: './set-logic.component.html',
            styleUrls: ['./set-logic.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_3__["LogicalFormInfoService"]
          }, {
            type: src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_4__["SetTitleService"]
          }];
        }, {
          Risk: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: ['risk']
          }]
        });
      })();
      /***/

    },

    /***/
    "il7X": function il7X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfiLogiRoutingModule", function () {
        return ConfiLogiRoutingModule;
      });
      /* harmony import */


      var _job_number_job_number_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./job-number/job-number.component */
      "zQXG");
      /* harmony import */


      var _set_logic_set_logic_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./set-logic/set-logic.component */
      "bu9C");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _confi_logi_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./confi-logi.component */
      "ao8m");

      var routes = [{
        path: '',
        component: _confi_logi_component__WEBPACK_IMPORTED_MODULE_4__["ConfiLogiComponent"]
      }, {
        path: 'setLogic',
        component: _set_logic_set_logic_component__WEBPACK_IMPORTED_MODULE_1__["SetLogicComponent"]
      }, {
        path: 'setJobNumber',
        component: _job_number_job_number_component__WEBPACK_IMPORTED_MODULE_0__["JobNumberComponent"]
      }];

      var ConfiLogiRoutingModule = function ConfiLogiRoutingModule() {
        _classCallCheck(this, ConfiLogiRoutingModule);
      };

      ConfiLogiRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: ConfiLogiRoutingModule
      });
      ConfiLogiRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function ConfiLogiRoutingModule_Factory(t) {
          return new (t || ConfiLogiRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ConfiLogiRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ConfiLogiRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "zQXG": function zQXG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JobNumberComponent", function () {
        return JobNumberComponent;
      });
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _create_job_no_create_job_no_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./create-job-no/create-job-no.component */
      "bXbX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/paginator */
      "5QHs");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/table */
      "OaSA");
      /* harmony import */


      var src_app_site_info_add_site_info_edit_site_edit_site_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/site-info/add-site-info/edit-site/edit-site.component */
      "2X0P");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/utils/services/set-title.service */
      "yZxC");
      /* harmony import */


      var src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/utils/services/logical-form-info.service */
      "wbBK");

      function JobNumberComponent_th_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " No. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function JobNumberComponent_td_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r25 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r25 + 1);
        }
      }

      function JobNumberComponent_th_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Job Number ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function JobNumberComponent_td_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r26 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r26.jobNumber, " ");
        }
      }

      function JobNumberComponent_th_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Site Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function JobNumberComponent_td_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r27 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r27.siteName, " ");
        }
      }

      function JobNumberComponent_th_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Street Number ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function JobNumberComponent_td_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r28 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r28.streetNumber, " ");
        }
      }

      function JobNumberComponent_th_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Street Address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function JobNumberComponent_td_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r29 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r29.streetAddress, " ");
        }
      }

      function JobNumberComponent_th_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Suburb ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function JobNumberComponent_td_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r30 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r30.suburb, " ");
        }
      }

      function JobNumberComponent_th_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " State ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function JobNumberComponent_td_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r31 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r31.state, " ");
        }
      }

      function JobNumberComponent_th_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Customer Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function JobNumberComponent_td_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r32 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r32.customerName, " ");
        }
      }

      function JobNumberComponent_th_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Customer Contact ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function JobNumberComponent_td_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r33 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r33.customerContact, " ");
        }
      }

      function JobNumberComponent_th_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Edit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function JobNumberComponent_td_36_Template(rf, ctx) {
        if (rf & 1) {
          var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function JobNumberComponent_td_36_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r36);

            var element_r34 = ctx.$implicit;

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r35.edit(element_r34);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function JobNumberComponent_th_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Delete ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function JobNumberComponent_td_39_Template(rf, ctx) {
        if (rf & 1) {
          var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function JobNumberComponent_td_39_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r39);

            var element_r37 = ctx.$implicit;

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r38["delete"](element_r37);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function JobNumberComponent_tr_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 26);
        }
      }

      function JobNumberComponent_tr_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 27);
        }
      }

      var _c0 = function _c0() {
        return [5, 10, 20];
      };

      var JobNumberComponent = /*#__PURE__*/function () {
        /////////////mat table end////////////////
        function JobNumberComponent(dialog, setTitle, logicalFormInfoService) {
          _classCallCheck(this, JobNumberComponent);

          this.dialog = dialog;
          this.setTitle = setTitle;
          this.logicalFormInfoService = logicalFormInfoService;
          this.jobTaskData = [];
          this.ELEMENT_DATA = []; /////////////mat table////////////////

          this.displayedColumns = ['jobNumber', 'siteName', 'streetNumber', 'streetAddress', 'suburb', 'state', 'customerName', 'customerContact', //'customerContactPhone',
          // 'customerEmail',

          /* 'edit', */
          'delete'];
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.ELEMENT_DATA);
        }

        _createClass(JobNumberComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.dataSource.paginator = this.paginator;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setTitle.setTitle('WHS-Add Site Info');
            this.getAllJobNumber();
          }
        }, {
          key: "getAllJobNumber",
          value: function getAllJobNumber() {
            var _this13 = this;

            this.logicalFormInfoService.getAllJobNumber().subscribe(function (res) {
              console.log(res);
              _this13.dataSource.data = res.data;
              console.log("getAllJobNumber", res.data);
              _this13.dataSource.paginator = _this13.paginator;
            });
          }
        }, {
          key: "getAllJobTask",
          value: function getAllJobTask() {// this.logicalFormInfo.getAllJobtask().subscribe((res: any) => {
            //   console.log('jobTaskDetails=>', res);
            //   // this.jobTaskData = res.data[0].subComponents;
            //   let data = res.data
            //   data.forEach((element, index) => {
            //     element.index = index + 1; //adding index
            //   });
            //   this.ELEMENT_DATA = data;
            //   this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
            //   this.dataSource.paginator = this.paginator;
            //   //  this.task = res.data.subComponents;
            // });
          }
        }, {
          key: "openDialog",
          value: function openDialog(id) {
            var _this14 = this;

            var dialogRef = this.dialog.open(_create_job_no_create_job_no_component__WEBPACK_IMPORTED_MODULE_1__["CreateJobNoComponent"], {
              height: '80%',
              data: {
                action: 'new',
                userId: id
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log('CustomerInfoComponent -> openDialog -> result', result);
              console.log("result", result);

              if (result === "success") {
                _this14.getAllJobNumber();

                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
                  title: 'Job Number created successfully',
                  showConfirmButton: false,
                  timer: 1200
                });
              }

              console.log('The dialog was closed');
            });
          }
        }, {
          key: "edit",
          value: function edit(element) {
            var _this15 = this;

            var dialogRef = this.dialog.open(src_app_site_info_add_site_info_edit_site_edit_site_component__WEBPACK_IMPORTED_MODULE_5__["EditSiteComponent"], {
              width: '550px',
              data: element
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result == 'true') {
                _this15.getAllJobTask();
              }

              console.log('The dialog was closed');
            });
          }
        }, {
          key: "delete",
          value: function _delete(item) {
            var _this16 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
              title: 'Are you sure?',
              text: "Do you want to delete \"".concat(item.jobNumber, "\"?"),
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#00B96F',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, Delete!'
            }).then(function (result) {
              if (result.value) {
                _this16.logicalFormInfoService.deleteJobNumber(item._id).subscribe(function (res) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
                    title: 'Job Number Deleted successfully',
                    showConfirmButton: false,
                    timer: 1200
                  });
                  console.log('deleted res', res);

                  _this16.getAllJobNumber();
                });
              }
            });
          }
        }]);

        return JobNumberComponent;
      }();

      JobNumberComponent.ɵfac = function JobNumberComponent_Factory(t) {
        return new (t || JobNumberComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_7__["SetTitleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_8__["LogicalFormInfoService"]));
      };

      JobNumberComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: JobNumberComponent,
        selectors: [["app-job-number"]],
        viewQuery: function JobNumberComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          }
        },
        decls: 43,
        vars: 5,
        consts: [["_ngcontent-hqi-c400", "", "type", "button", 1, "btn", "btn-outline-primary", "mt-1", "mr-2", "float-right", 3, "click"], ["_ngcontent-hqi-c400", "", 1, "fas", "fa-plus"], [1, "mat-elevation-z8", "ml-2"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "index"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "jobNumber"], ["matColumnDef", "siteName"], ["matColumnDef", "streetNumber"], ["matColumnDef", "streetAddress"], ["matColumnDef", "suburb"], ["matColumnDef", "state"], ["matColumnDef", "customerName"], ["matColumnDef", "customerContact"], ["matColumnDef", "edit"], ["mat-cell", "", 3, "click", 4, "matCellDef"], ["matColumnDef", "delete"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", "aria-label", "Select page of periodic elements", 3, "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", 3, "click"], [1, "fas", "fa-pencil-alt"], [1, "fas", "fa-trash"], ["mat-header-row", ""], ["mat-row", ""]],
        template: function JobNumberComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Job Number List ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function JobNumberComponent_Template_button_click_2_listener() {
              return ctx.openDialog("abcd");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Create ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "table", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](7, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, JobNumberComponent_th_8_Template, 2, 0, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, JobNumberComponent_td_9_Template, 2, 1, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](10, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, JobNumberComponent_th_11_Template, 2, 0, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, JobNumberComponent_td_12_Template, 2, 1, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](13, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, JobNumberComponent_th_14_Template, 2, 0, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, JobNumberComponent_td_15_Template, 2, 1, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](16, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, JobNumberComponent_th_17_Template, 2, 0, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, JobNumberComponent_td_18_Template, 2, 1, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](19, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, JobNumberComponent_th_20_Template, 2, 0, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, JobNumberComponent_td_21_Template, 2, 1, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](22, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, JobNumberComponent_th_23_Template, 2, 0, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, JobNumberComponent_td_24_Template, 2, 1, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](25, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, JobNumberComponent_th_26_Template, 2, 0, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, JobNumberComponent_td_27_Template, 2, 1, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](28, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, JobNumberComponent_th_29_Template, 2, 0, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, JobNumberComponent_td_30_Template, 2, 1, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](31, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, JobNumberComponent_th_32_Template, 2, 0, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, JobNumberComponent_td_33_Template, 2, 1, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](34, 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, JobNumberComponent_th_35_Template, 2, 0, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, JobNumberComponent_td_36_Template, 2, 0, "td", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](37, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, JobNumberComponent_th_38_Template, 2, 0, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, JobNumberComponent_td_39_Template, 2, 0, "td", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, JobNumberComponent_tr_40_Template, 1, 0, "tr", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, JobNumberComponent_tr_41_Template, 1, 0, "tr", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "mat-paginator", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](34);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c0));
          }
        },
        directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"]],
        styles: ["abel[_ngcontent-%COMP%]:not(.form-check-label):not(.custom-file-label) {\n  font-weight: 500;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  border: 2px solid dodgerblue;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 500;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n}\n\n.form-control[_ngcontent-%COMP%]:hover {\n  border-color: rgba(46, 105, 255, 0.5);\n  box-shadow: 0 0 0 2px rgba(46, 105, 255, 0.25);\n}\n\n.pt-3[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 32px;\n  font-weight: 700;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n}\n\n.container[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.form-Label[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 500;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n  width: 100%;\n  margin-left: 2px;\n  margin-bottom: 14px;\n}\n\n.sign[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid rgba(46, 105, 255, 0.5);\n  width: 500px;\n  border-radius: 5px;\n}\n\n.sign[_ngcontent-%COMP%]:hover {\n  border: 1px solid;\n  border-color: #2e69ff40;\n  box-shadow: 0 0 0 3px rgba(46, 105, 255, 0.25);\n}\n\n.imgStyle[_ngcontent-%COMP%] {\n  border: 2px solid #2e69ff40;\n  border-radius: 10px;\n}\n\n.example-additional-selection[_ngcontent-%COMP%] {\n  opacity: 0.75;\n  font-size: 0.75em;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcam9iLW51bWJlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBQ0U7RUFDRSw0QkFBQTtBQUVKOztBQUFFO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBR0o7O0FBREU7RUFDRSxxQ0FBQTtFQUNBLDhDQUFBO0FBSUo7O0FBRkU7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFLSjs7QUFIRTtFQUNFLHVCQUFBO0FBTUo7O0FBSkU7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQU9KOztBQUxFO0VBQ0UsYUFBQTtFQUNBLHlDQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBUUo7O0FBTkU7RUFDRSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsOENBQUE7QUFTSjs7QUFORTtFQUNFLDJCQUFBO0VBQ0EsbUJBQUE7QUFTSjs7QUFQRTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtBQVVKOztBQVJFO0VBQ0UsV0FBQTtBQVdKIiwiZmlsZSI6ImpvYi1udW1iZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhYmVsOm5vdCguZm9ybS1jaGVjay1sYWJlbCk6bm90KC5jdXN0b20tZmlsZS1sYWJlbCkge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbiAgaW5wdXQ6Zm9jdXMge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgZG9kZ2VyYmx1ZTtcclxuICB9XHJcbiAgbGFiZWwge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgICBmb250LWZhbWlseTogSW50ZXIsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIC5mb3JtLWNvbnRyb2w6aG92ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDQ2LCAxMDUsIDI1NSwgMC41KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCByZ2IoNDYgMTA1IDI1NSAvIDI1JSk7XHJcbiAgfVxyXG4gIC5wdC0zIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgZm9udC1mYW1pbHk6IEludGVyLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICAuY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAuZm9ybS1MYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICAgIGZvbnQtZmFtaWx5OiBJbnRlciwgc2Fucy1zZXJpZjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XHJcbiAgfVxyXG4gIC5zaWduIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDQ2LCAxMDUsIDI1NSwgMC41KTtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcbiAgLnNpZ246aG92ZXIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6ICMyZTY5ZmY0MDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2IoNDYsIDEwNSwgMjU1LCAwLjI1KTtcclxuICB9XHJcbiAgXHJcbiAgLmltZ1N0eWxlIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyZTY5ZmY0MDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG4gIC5leGFtcGxlLWFkZGl0aW9uYWwtc2VsZWN0aW9uIHtcclxuICAgIG9wYWNpdHk6IDAuNzU7XHJcbiAgICBmb250LXNpemU6IDAuNzVlbTtcclxuICB9XHJcbiAgdGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](JobNumberComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: 'app-job-number',
            templateUrl: './job-number.component.html',
            styleUrls: ['./job-number.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
          }, {
            type: src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_7__["SetTitleService"]
          }, {
            type: src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_8__["LogicalFormInfoService"]
          }];
        }, {
          paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]]
          }]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=views-confi-logi-confi-logi-module-es5.js.map