(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["site-info-site-info-module"], {
    /***/
    "/S5m": function S5m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddHazardComponent", function () {
        return AddHazardComponent;
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


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/utils/services/logical-form-info.service */
      "wbBK");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "SVse");

      function AddHazardComponent_ng_container_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddHazardComponent_ng_container_9_Template_span_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.addAction();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "add_circle_outline ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddHazardComponent_ng_container_9_Template_span_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var i_r2 = ctx.index;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.removeSafetyModule(i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " remove_circle_outline ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r2 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", i_r2 + 1, ". ");
        }
      }

      var _c0 = function _c0() {
        return ["/admin/siteInfo/hazards"];
      };

      var AddHazardComponent = /*#__PURE__*/function () {
        function AddHazardComponent(fb, router, logicalFormInfo) {
          _classCallCheck(this, AddHazardComponent);

          this.fb = fb;
          this.router = router;
          this.logicalFormInfo = logicalFormInfo;
          this.hazardFG = this.fb.group({
            arrObj: this.fb.array([])
          });
        }

        _createClass(AddHazardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.addAction();
          }
        }, {
          key: "addAction",
          value: function addAction() {
            {
              this.add().push(this.newAction());
            }
          }
        }, {
          key: "add",
          value: function add() {
            return this.hazardFG.get('arrObj');
          }
        }, {
          key: "newAction",
          value: function newAction() {
            return this.fb.group({
              title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
          }
        }, {
          key: "removeSafetyModule",
          value: function removeSafetyModule(i) {
            var item = this.hazardFG.controls['arrObj'];

            if (item.length > 1) {
              item.removeAt(i);
            }
          }
        }, {
          key: "onFormSubmit",
          value: function onFormSubmit() {
            var _this = this;

            console.log(this.hazardFG.value);
            var data = {
              arrObj: this.hazardFG.get('arrObj').value
            };
            this.logicalFormInfo.addMultipleHazards(data).subscribe(function (data) {
              console.log('PPE=>', data);
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: 'Parameter Added successfully',
                showConfirmButton: false,
                timer: 1200
              });

              _this.router.navigate(['/admin/siteInfo/hazards']);
            }, function (err) {
              console.error(err);
            });
          }
        }]);

        return AddHazardComponent;
      }();

      AddHazardComponent.ɵfac = function AddHazardComponent_Factory(t) {
        return new (t || AddHazardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__["LogicalFormInfoService"]));
      };

      AddHazardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddHazardComponent,
        selectors: [["app-add-hazard"]],
        decls: 14,
        vars: 5,
        consts: [[1, "btn", "btn-outline-primary", 3, "routerLink"], ["aria-hidden", "true", 1, "fa", "fa-arrow-left"], [1, "container", "px-4", "py-4", "bg-white"], [3, "formGroup", "ngSubmit"], [1, "text-center"], ["formArrayName", "arrObj"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "col-md-2"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [3, "formGroupName"], [1, "row", "justify-content-center"], [1, "mr-1", "mt-2"], [1, "col-8"], ["type", "text", "formControlName", "title", "id", "name", 1, "form-control", "sign"], [1, "col-1", "mt-2"], [1, "material-icons", 3, "click"]],
        template: function AddHazardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddHazardComponent_Template_form_ngSubmit_3_listener() {
              return ctx.onFormSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add Hazard");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AddHazardComponent_ng_container_9_Template, 14, 2, "ng-container", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.hazardFG);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.add().controls);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.hazardFG.get("arrObj").invalid);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtaGF6YXJkLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddHazardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-add-hazard',
            templateUrl: './add-hazard.component.html',
            styleUrls: ['./add-hazard.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__["LogicalFormInfoService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "0GLU": function GLU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddHighRiskConstructionComponent", function () {
        return AddHighRiskConstructionComponent;
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


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/utils/services/logical-form-info.service */
      "wbBK");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "SVse");

      function AddHighRiskConstructionComponent_ng_container_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddHighRiskConstructionComponent_ng_container_9_Template_span_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.addAction();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "add_circle_outline ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddHighRiskConstructionComponent_ng_container_9_Template_span_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var i_r2 = ctx.index;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.removeSafetyModule(i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " remove_circle_outline ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r2 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", i_r2 + 1, ". ");
        }
      }

      var _c0 = function _c0() {
        return ["/admin/siteInfo/highRisk"];
      };

      var AddHighRiskConstructionComponent = /*#__PURE__*/function () {
        function AddHighRiskConstructionComponent(fb, router, logicalFormInfo) {
          _classCallCheck(this, AddHighRiskConstructionComponent);

          this.fb = fb;
          this.router = router;
          this.logicalFormInfo = logicalFormInfo;
          this.riskConstr = this.fb.group({
            // mode:"JobTask",
            arrObj: this.fb.array([])
          });
        }

        _createClass(AddHighRiskConstructionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.addAction();
          }
        }, {
          key: "addAction",
          value: function addAction() {
            {
              this.add().push(this.newAction());
            }
          }
        }, {
          key: "add",
          value: function add() {
            return this.riskConstr.get('arrObj');
          }
        }, {
          key: "newAction",
          value: function newAction() {
            return this.fb.group({
              title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
          }
        }, {
          key: "removeSafetyModule",
          value: function removeSafetyModule(i) {
            var item = this.riskConstr.controls['arrObj'];

            if (item.length > 1) {
              item.removeAt(i);
            }
          }
        }, {
          key: "onFormSubmit",
          value: function onFormSubmit() {
            var _this2 = this;

            // console.log(this.riskConstr.value);
            var data = {
              arrObj: this.riskConstr.get('arrObj').value
            }; // console.log(data);

            this.logicalFormInfo.addMultipleRisk(data).subscribe(function (data) {
              console.log('Risk=>', data);
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: 'Parameter Added successfully',
                showConfirmButton: false,
                timer: 1200
              });

              _this2.router.navigate(['/admin/siteInfo/highRisk']);
            }, function (err) {
              console.error(err);
            });
          }
        }]);

        return AddHighRiskConstructionComponent;
      }();

      AddHighRiskConstructionComponent.ɵfac = function AddHighRiskConstructionComponent_Factory(t) {
        return new (t || AddHighRiskConstructionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__["LogicalFormInfoService"]));
      };

      AddHighRiskConstructionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddHighRiskConstructionComponent,
        selectors: [["app-add-high-risk-construction"]],
        decls: 14,
        vars: 5,
        consts: [[1, "btn", "btn-outline-primary", 3, "routerLink"], ["aria-hidden", "true", 1, "fa", "fa-arrow-left"], [1, "container", "px-4", "py-4", "bg-white"], [3, "formGroup", "ngSubmit"], [1, "text-center"], ["formArrayName", "arrObj"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "col-md-2"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [3, "formGroupName"], [1, "row", "justify-content-center"], [1, "mr-1", "mt-2"], [1, "col-8"], ["type", "text", "formControlName", "title", "id", "name", 1, "form-control", "sign"], [1, "col-1", "mt-2"], [1, "material-icons", 3, "click"]],
        template: function AddHighRiskConstructionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddHighRiskConstructionComponent_Template_form_ngSubmit_3_listener() {
              return ctx.onFormSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add High Risk Construction Parameter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AddHighRiskConstructionComponent_ng_container_9_Template, 14, 2, "ng-container", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.riskConstr);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.add().controls);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.riskConstr.get("arrObj").invalid);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtaGlnaC1yaXNrLWNvbnN0cnVjdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddHighRiskConstructionComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-add-high-risk-construction',
            templateUrl: './add-high-risk-construction.component.html',
            styleUrls: ['./add-high-risk-construction.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__["LogicalFormInfoService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "0qak": function qak(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditLicenceComponent", function () {
        return EditLicenceComponent;
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


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/utils/services/logical-form-info.service */
      "wbBK");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");

      function EditLicenceComponent_option_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.title);
        }
      }

      var EditLicenceComponent = /*#__PURE__*/function () {
        function EditLicenceComponent(fb, logicalFormInfo, dialogRef, data) {
          _classCallCheck(this, EditLicenceComponent);

          this.fb = fb;
          this.logicalFormInfo = logicalFormInfo;
          this.dialogRef = dialogRef;
          this.data = data;
          this.categories = [];
          this.dataRec = data;
        }

        _createClass(EditLicenceComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log(this.dataRec);
            this.editTitle = this.fb.group({
              title: [this.dataRec.title, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              categoryId: [this.dataRec.licenceCategoryId.title, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
            this.getAllLicenceCat();
          }
        }, {
          key: "getAllLicenceCat",
          value: function getAllLicenceCat() {
            var _this3 = this;

            this.logicalFormInfo.getAllLicenceCat().subscribe(function (res) {
              console.log('getAllLicenceCat=>', res);
              _this3.categories = res.data;
            });
          }
        }, {
          key: "onFormSubmit",
          value: function onFormSubmit() {
            var _this4 = this;

            var data = {
              title: this.editTitle.get('title').value,
              licenceCategoryId: this.editTitle.get('categoryId').value
            };
            this.logicalFormInfo.updateLicence(data, this.dataRec._id).subscribe(function (resData) {
              console.log('submodulesData', resData);

              _this4.dialogRef.close('true');

              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Parameter Edited successfully');
            });
          }
        }, {
          key: "closeDialog",
          value: function closeDialog() {
            this.dialogRef.close('false');
          }
        }]);

        return EditLicenceComponent;
      }();

      EditLicenceComponent.ɵfac = function EditLicenceComponent_Factory(t) {
        return new (t || EditLicenceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__["LogicalFormInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]));
      };

      EditLicenceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EditLicenceComponent,
        selectors: [["app-edit-licence"]],
        decls: 16,
        vars: 3,
        consts: [[3, "formGroup"], ["mat-dialog-title", ""], [1, "row"], [1, "col-6"], ["type", "text", "formControlName", "title", "id", "name", "placeholder", "Licence Name", 1, "form-control", "sign"], ["aria-label", "Default select example", "formControlName", "categoryId", 1, "form-select", "form-control"], ["value", "item._id", 4, "ngFor", "ngForOf"], [1, "row", "mt-4"], [1, "col-sm-2", "offset-8"], ["mat-raised-button", "", 3, "click"], [1, "col-sm-2"], ["mat-raised-button", "", 3, "disabled", "click"], ["value", "item._id"]],
        template: function EditLicenceComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit Licence");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "select", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EditLicenceComponent_option_8_Template, 2, 1, "option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditLicenceComponent_Template_button_click_11_listener() {
              return ctx.closeDialog();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditLicenceComponent_Template_button_click_14_listener() {
              return ctx.onFormSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Update ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.editTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.editTitle.valid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWxpY2VuY2UuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditLicenceComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-edit-licence',
            templateUrl: './edit-licence.component.html',
            styleUrls: ['./edit-licence.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__["LogicalFormInfoService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "2xAX": function xAX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddSiteComponent", function () {
        return AddSiteComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/utils/services/logical-form-info.service */
      "wbBK");

      var AddSiteComponent = /*#__PURE__*/function () {
        function AddSiteComponent(dialogRef, data, fb, logicalFormInfoService) {
          _classCallCheck(this, AddSiteComponent);

          this.dialogRef = dialogRef;
          this.data = data;
          this.fb = fb;
          this.logicalFormInfoService = logicalFormInfoService;
          this.state = [{
            label: 'New South Wales',
            value: ''
          }, {
            label: 'Queensland',
            value: ''
          }, {
            label: 'South Australia',
            value: ''
          }, {
            label: 'Tasmania',
            value: ''
          }, {
            label: 'Victoria',
            value: ''
          }, {
            label: 'Western Australia',
            value: ''
          }];
        }

        _createClass(AddSiteComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.addSitesForm = this.fb.group({
              siteName: [''],
              streetNumber: [''],
              streetAddress: [''],
              suburb: [''],
              state: ['']
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this5 = this;

            console.log(this.addSitesForm.value);
            this.logicalFormInfoService.addSite(this.addSitesForm.value).subscribe(function (res) {
              console.log(res);

              _this5.dialogRef.close('ok');
            });
          }
        }]);

        return AddSiteComponent;
      }();

      AddSiteComponent.ɵfac = function AddSiteComponent_Factory(t) {
        return new (t || AddSiteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_3__["LogicalFormInfoService"]));
      };

      AddSiteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddSiteComponent,
        selectors: [["app-add-site"]],
        decls: 49,
        vars: 2,
        consts: [[1, "content", 3, "formGroup"], [1, "container", "px-4", "py-4", "bg-white"], [1, "row", 3, "formGroup"], [1, "my-3", "col-6"], ["for", "exampleFormControlInput1", 1, "form-Label"], ["type", "text", "formControlName", "siteName", "id", "siteName", 1, "form-control"], [1, "row"], [1, "my-3", "col-2"], ["type", "text", "formControlName", "streetNumber", "id", "siteName", 1, "form-control"], [1, "my-3", "col-4"], ["type", "text", "formControlName", "streetAddress", "id", "siteName", 1, "form-control"], ["type", "text", "formControlName", "suburb", "id", "siteName", 1, "form-control"], ["for", "exampleFormControlInput1", 1, "form-label"], ["id", "siteName", "aria-label", "Default select example", "formControlName", "state", 1, "form-select", "form-control", "col"], ["selected", "", "hidden", ""], ["value", "NSW"], ["value", "ACT"], ["value", "QLD"], ["value", "NT"], ["value", "SA"], ["value", "NZ"], ["value", "TAS"], ["value", "VIC"], ["value", "WA"], [1, "btn", "btn-primary", 3, "click"]],
        template: function AddSiteComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Site Information");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Site Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Street Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Street Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Suburb");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "State");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "select", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Select");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "NSW");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "ACT");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "QLD");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "NT");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "SA");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "NZ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "option", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "TAS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "option", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "VIC");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "option", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "WA");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddSiteComponent_Template_button_click_47_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Submit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addSitesForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addSitesForm);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"]],
        styles: ["input[_ngcontent-%COMP%]:focus {\n  border: 2px solid dodgerblue;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 500;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n}\n\n.form-control[_ngcontent-%COMP%]:hover {\n  border-color: rgba(46, 105, 255, 0.5);\n  box-shadow: 0 0 0 2px rgba(46, 105, 255, 0.25);\n}\n\nabel[_ngcontent-%COMP%]:not(.form-check-label):not(.custom-file-label) {\n  font-weight: 500;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  border: 2px solid dodgerblue;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 500;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n}\n\n.form-control[_ngcontent-%COMP%]:hover {\n  border-color: rgba(46, 105, 255, 0.5);\n  box-shadow: 0 0 0 2px rgba(46, 105, 255, 0.25);\n}\n\n.pt-3[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 32px;\n  font-weight: 700;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n}\n\n.container[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.form-Label[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 500;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n  width: 100%;\n  margin-left: 2px;\n  margin-bottom: 14px;\n}\n\n.sign[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid rgba(46, 105, 255, 0.5);\n  width: 500px;\n  border-radius: 5px;\n}\n\n.sign[_ngcontent-%COMP%]:hover {\n  border: 1px solid;\n  border-color: #2e69ff40;\n  box-shadow: 0 0 0 3px rgba(46, 105, 255, 0.25);\n}\n\n.imgStyle[_ngcontent-%COMP%] {\n  border: 2px solid #2e69ff40;\n  border-radius: 10px;\n}\n\n.example-additional-selection[_ngcontent-%COMP%] {\n  opacity: 0.75;\n  font-size: 0.75em;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWRkLXNpdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtBQUNKOztBQUNFO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBRUo7O0FBQUU7RUFDRSxxQ0FBQTtFQUNBLDhDQUFBO0FBR0o7O0FBREU7RUFDRSxnQkFBQTtBQUlKOztBQUZFO0VBQ0UsNEJBQUE7QUFLSjs7QUFIRTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQU1KOztBQUpFO0VBQ0UscUNBQUE7RUFDQSw4Q0FBQTtBQU9KOztBQUxFO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBUUo7O0FBTkU7RUFDRSx1QkFBQTtBQVNKOztBQVBFO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFVSjs7QUFSRTtFQUNFLGFBQUE7RUFDQSx5Q0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQVdKOztBQVRFO0VBQ0UsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLDhDQUFBO0FBWUo7O0FBVEU7RUFDRSwyQkFBQTtFQUNBLG1CQUFBO0FBWUo7O0FBVkU7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QUFhSjs7QUFYRTtFQUNFLFdBQUE7QUFjSiIsImZpbGUiOiJhZGQtc2l0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0OmZvY3VzIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGRvZGdlcmJsdWU7XHJcbiAgfVxyXG4gIGxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgZm9udC1mYW1pbHk6IEludGVyLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICAuZm9ybS1jb250cm9sOmhvdmVyIHtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSg0NiwgMTA1LCAyNTUsIDAuNSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAycHggcmdiKDQ2IDEwNSAyNTUgLyAyNSUpO1xyXG4gIH1cclxuICBhYmVsOm5vdCguZm9ybS1jaGVjay1sYWJlbCk6bm90KC5jdXN0b20tZmlsZS1sYWJlbCkge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbiAgaW5wdXQ6Zm9jdXMge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgZG9kZ2VyYmx1ZTtcclxuICB9XHJcbiAgbGFiZWwge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgICBmb250LWZhbWlseTogSW50ZXIsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIC5mb3JtLWNvbnRyb2w6aG92ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDQ2LCAxMDUsIDI1NSwgMC41KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCByZ2IoNDYgMTA1IDI1NSAvIDI1JSk7XHJcbiAgfVxyXG4gIC5wdC0zIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgZm9udC1mYW1pbHk6IEludGVyLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICAuY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAuZm9ybS1MYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICAgIGZvbnQtZmFtaWx5OiBJbnRlciwgc2Fucy1zZXJpZjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XHJcbiAgfVxyXG4gIC5zaWduIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDQ2LCAxMDUsIDI1NSwgMC41KTtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcbiAgLnNpZ246aG92ZXIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6ICMyZTY5ZmY0MDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2IoNDYsIDEwNSwgMjU1LCAwLjI1KTtcclxuICB9XHJcbiAgXHJcbiAgLmltZ1N0eWxlIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyZTY5ZmY0MDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG4gIC5leGFtcGxlLWFkZGl0aW9uYWwtc2VsZWN0aW9uIHtcclxuICAgIG9wYWNpdHk6IDAuNzU7XHJcbiAgICBmb250LXNpemU6IDAuNzVlbTtcclxuICB9XHJcbiAgdGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddSiteComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-add-site',
            templateUrl: './add-site.component.html',
            styleUrls: ['./add-site.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_3__["LogicalFormInfoService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "5DFr": function DFr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SiteInfoModule", function () {
        return SiteInfoModule;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _site_info_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./site-info-routing.module */
      "zp0x");
      /* harmony import */


      var _site_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./site-info.component */
      "eyvP");
      /* harmony import */


      var _add_site_info_add_site_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./add-site-info/add-site-info.component */
      "yvBN");
      /* harmony import */


      var _job_task_job_task_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./job-task/job-task.component */
      "pCeX");
      /* harmony import */


      var _high_risk_con_high_risk_con_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./high-risk-con/high-risk-con.component */
      "iXE9");
      /* harmony import */


      var _ppe_select_ppe_select_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./ppe-select/ppe-select.component */
      "SEER");
      /* harmony import */


      var _licence_and_qual_licence_and_qual_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./licence-and-qual/licence-and-qual.component */
      "pMia");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./../shared/shared.module */
      "PCNd");
      /* harmony import */


      var _add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./add-customer/add-customer.component */
      "L+dl");
      /* harmony import */


      var _high_risk_con_add_high_risk_construction_add_high_risk_construction_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./high-risk-con/add-high-risk-construction/add-high-risk-construction.component */
      "0GLU");
      /* harmony import */


      var _high_risk_con_edit_high_risk_construction_edit_high_risk_construction_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./high-risk-con/edit-high-risk-construction/edit-high-risk-construction.component */
      "ocAX");
      /* harmony import */


      var _job_task_add_job_task_add_job_task_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./job-task/add-job-task/add-job-task.component */
      "X72n");
      /* harmony import */


      var _ppe_select_add_ppe_add_ppe_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./ppe-select/add-ppe/add-ppe.component */
      "joJy");
      /* harmony import */


      var _job_task_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./job-task/edit-task/edit-task.component */
      "FVgK");
      /* harmony import */


      var _ppe_select_edit_ppe_edit_ppe_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./ppe-select/edit-ppe/edit-ppe.component */
      "fKBH");
      /* harmony import */


      var _licence_and_qual_edit_licence_edit_licence_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./licence-and-qual/edit-licence/edit-licence.component */
      "0qak");
      /* harmony import */


      var _licence_and_qual_add_licence_add_licence_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./licence-and-qual/add-licence/add-licence.component */
      "czur");
      /* harmony import */


      var _licence_and_qual_licence_cat_licence_cat_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./licence-and-qual/licence-cat/licence-cat.component */
      "SKiF");
      /* harmony import */


      var _licence_and_qual_licence_cat_add_licence_cat_add_licence_cat_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./licence-and-qual/licence-cat/add-licence-cat/add-licence-cat.component */
      "i6cX");
      /* harmony import */


      var _licence_and_qual_licence_cat_edit_licence_cat_edit_licence_cat_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./licence-and-qual/licence-cat/edit-licence-cat/edit-licence-cat.component */
      "HQ6n");
      /* harmony import */


      var _code_of_pract_code_of_pract_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./code-of-pract/code-of-pract.component */
      "V+lG");
      /* harmony import */


      var _code_of_pract_add_cop_add_cop_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./code-of-pract/add-cop/add-cop.component */
      "O1Ir");
      /* harmony import */


      var _code_of_pract_edit_cop_edit_cop_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./code-of-pract/edit-cop/edit-cop.component */
      "VpO3");
      /* harmony import */


      var _add_site_info_add_site_add_site_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./add-site-info/add-site/add-site.component */
      "2xAX");
      /* harmony import */


      var _add_site_info_edit_site_edit_site_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./add-site-info/edit-site/edit-site.component */
      "2X0P");
      /* harmony import */


      var _add_customer_adding_cust_adding_cust_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./add-customer/adding-cust/adding-cust.component */
      "Sgjq");
      /* harmony import */


      var _add_customer_edit_cust_edit_cust_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./add-customer/edit-cust/edit-cust.component */
      "yVkB");
      /* harmony import */


      var _identify_hazards_identify_hazards_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./identify-hazards/identify-hazards.component */
      "G2Gx");
      /* harmony import */


      var _contr_and_act_req_contr_and_act_req_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./contr-and-act-req/contr-and-act-req.component */
      "tTCJ");
      /* harmony import */


      var _identify_hazards_add_hazard_add_hazard_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./identify-hazards/add-hazard/add-hazard.component */
      "/S5m");
      /* harmony import */


      var _identify_hazards_edit_hazard_edit_hazard_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./identify-hazards/edit-hazard/edit-hazard.component */
      "kBda");
      /* harmony import */


      var _contr_and_act_req_add_contr_act_add_contr_act_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./contr-and-act-req/add-contr-act/add-contr-act.component */
      "v0b5");
      /* harmony import */


      var _contr_and_act_req_edit_cont_act_edit_cont_act_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./contr-and-act-req/edit-cont-act/edit-cont-act.component */
      "ISp9");
      /* harmony import */


      var _project_manager_project_manager_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ./project-manager/project-manager.component */
      "xnNE");
      /* harmony import */


      var _project_manager_add_edit_proj_mang_add_edit_proj_mang_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ./project-manager/add-edit-proj-mang/add-edit-proj-mang.component */
      "AXTO");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! @angular/material/stepper */
      "hzfI"); // import { AddLicenceAndQualificationComponent } from './licence-and-qual/add-licence-and-qualification/add-licence-and-qualification.component';
      // import { AddPPEselectComponent } from './ppe-select/add-ppeselect/add-ppeselect.component';


      var SiteInfoModule = function SiteInfoModule() {
        _classCallCheck(this, SiteInfoModule);
      };

      SiteInfoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SiteInfoModule
      });
      SiteInfoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function SiteInfoModule_Factory(t) {
          return new (t || SiteInfoModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _site_info_routing_module__WEBPACK_IMPORTED_MODULE_3__["SiteInfoRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_38__["MatStepperModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SiteInfoModule, {
          declarations: [_site_info_component__WEBPACK_IMPORTED_MODULE_4__["SiteInfoComponent"], _add_site_info_add_site_info_component__WEBPACK_IMPORTED_MODULE_5__["AddSiteInfoComponent"], _job_task_job_task_component__WEBPACK_IMPORTED_MODULE_6__["JobTaskComponent"], _high_risk_con_high_risk_con_component__WEBPACK_IMPORTED_MODULE_7__["HighRiskConComponent"], _ppe_select_ppe_select_component__WEBPACK_IMPORTED_MODULE_8__["PpeSelectComponent"], _licence_and_qual_licence_and_qual_component__WEBPACK_IMPORTED_MODULE_9__["LicenceAndQualComponent"], _add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_11__["AddCustomerComponent"], _high_risk_con_add_high_risk_construction_add_high_risk_construction_component__WEBPACK_IMPORTED_MODULE_12__["AddHighRiskConstructionComponent"], _high_risk_con_edit_high_risk_construction_edit_high_risk_construction_component__WEBPACK_IMPORTED_MODULE_13__["EditHighRiskConstructionComponent"], _job_task_add_job_task_add_job_task_component__WEBPACK_IMPORTED_MODULE_14__["AddJobTaskComponent"], _ppe_select_add_ppe_add_ppe_component__WEBPACK_IMPORTED_MODULE_15__["AddPPEComponent"], _job_task_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_16__["EditTaskComponent"], _ppe_select_edit_ppe_edit_ppe_component__WEBPACK_IMPORTED_MODULE_17__["EditPPEComponent"], _licence_and_qual_edit_licence_edit_licence_component__WEBPACK_IMPORTED_MODULE_18__["EditLicenceComponent"], _licence_and_qual_add_licence_add_licence_component__WEBPACK_IMPORTED_MODULE_19__["AddLicenceComponent"], _licence_and_qual_licence_cat_licence_cat_component__WEBPACK_IMPORTED_MODULE_20__["LicenceCatComponent"], _licence_and_qual_licence_cat_add_licence_cat_add_licence_cat_component__WEBPACK_IMPORTED_MODULE_21__["AddLicenceCatComponent"], _licence_and_qual_licence_cat_edit_licence_cat_edit_licence_cat_component__WEBPACK_IMPORTED_MODULE_22__["EditLicenceCatComponent"], _code_of_pract_code_of_pract_component__WEBPACK_IMPORTED_MODULE_23__["CodeOfPractComponent"], _code_of_pract_add_cop_add_cop_component__WEBPACK_IMPORTED_MODULE_24__["AddCOPComponent"], _code_of_pract_edit_cop_edit_cop_component__WEBPACK_IMPORTED_MODULE_25__["EditCOPComponent"], _add_site_info_add_site_add_site_component__WEBPACK_IMPORTED_MODULE_26__["AddSiteComponent"], _add_site_info_edit_site_edit_site_component__WEBPACK_IMPORTED_MODULE_27__["EditSiteComponent"], _add_customer_adding_cust_adding_cust_component__WEBPACK_IMPORTED_MODULE_28__["AddingCustComponent"], _add_customer_edit_cust_edit_cust_component__WEBPACK_IMPORTED_MODULE_29__["EditCustComponent"], _identify_hazards_identify_hazards_component__WEBPACK_IMPORTED_MODULE_30__["IdentifyHazardsComponent"], _contr_and_act_req_contr_and_act_req_component__WEBPACK_IMPORTED_MODULE_31__["ContrAndActReqComponent"], _identify_hazards_add_hazard_add_hazard_component__WEBPACK_IMPORTED_MODULE_32__["AddHazardComponent"], _identify_hazards_edit_hazard_edit_hazard_component__WEBPACK_IMPORTED_MODULE_33__["EditHazardComponent"], _contr_and_act_req_add_contr_act_add_contr_act_component__WEBPACK_IMPORTED_MODULE_34__["AddContrActComponent"], _contr_and_act_req_edit_cont_act_edit_cont_act_component__WEBPACK_IMPORTED_MODULE_35__["EditContActComponent"], _project_manager_project_manager_component__WEBPACK_IMPORTED_MODULE_36__["ProjectManagerComponent"], _project_manager_add_edit_proj_mang_add_edit_proj_mang_component__WEBPACK_IMPORTED_MODULE_37__["AddEditProjMangComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _site_info_routing_module__WEBPACK_IMPORTED_MODULE_3__["SiteInfoRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_38__["MatStepperModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SiteInfoModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_site_info_component__WEBPACK_IMPORTED_MODULE_4__["SiteInfoComponent"], _add_site_info_add_site_info_component__WEBPACK_IMPORTED_MODULE_5__["AddSiteInfoComponent"], _job_task_job_task_component__WEBPACK_IMPORTED_MODULE_6__["JobTaskComponent"], _high_risk_con_high_risk_con_component__WEBPACK_IMPORTED_MODULE_7__["HighRiskConComponent"], _ppe_select_ppe_select_component__WEBPACK_IMPORTED_MODULE_8__["PpeSelectComponent"], _licence_and_qual_licence_and_qual_component__WEBPACK_IMPORTED_MODULE_9__["LicenceAndQualComponent"], _add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_11__["AddCustomerComponent"], _high_risk_con_add_high_risk_construction_add_high_risk_construction_component__WEBPACK_IMPORTED_MODULE_12__["AddHighRiskConstructionComponent"], _high_risk_con_edit_high_risk_construction_edit_high_risk_construction_component__WEBPACK_IMPORTED_MODULE_13__["EditHighRiskConstructionComponent"], _job_task_add_job_task_add_job_task_component__WEBPACK_IMPORTED_MODULE_14__["AddJobTaskComponent"], _ppe_select_add_ppe_add_ppe_component__WEBPACK_IMPORTED_MODULE_15__["AddPPEComponent"], _job_task_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_16__["EditTaskComponent"], _ppe_select_edit_ppe_edit_ppe_component__WEBPACK_IMPORTED_MODULE_17__["EditPPEComponent"], _licence_and_qual_edit_licence_edit_licence_component__WEBPACK_IMPORTED_MODULE_18__["EditLicenceComponent"], _licence_and_qual_add_licence_add_licence_component__WEBPACK_IMPORTED_MODULE_19__["AddLicenceComponent"], _licence_and_qual_licence_cat_licence_cat_component__WEBPACK_IMPORTED_MODULE_20__["LicenceCatComponent"], _licence_and_qual_licence_cat_add_licence_cat_add_licence_cat_component__WEBPACK_IMPORTED_MODULE_21__["AddLicenceCatComponent"], _licence_and_qual_licence_cat_edit_licence_cat_edit_licence_cat_component__WEBPACK_IMPORTED_MODULE_22__["EditLicenceCatComponent"], _code_of_pract_code_of_pract_component__WEBPACK_IMPORTED_MODULE_23__["CodeOfPractComponent"], _code_of_pract_add_cop_add_cop_component__WEBPACK_IMPORTED_MODULE_24__["AddCOPComponent"], _code_of_pract_edit_cop_edit_cop_component__WEBPACK_IMPORTED_MODULE_25__["EditCOPComponent"], _add_site_info_add_site_add_site_component__WEBPACK_IMPORTED_MODULE_26__["AddSiteComponent"], _add_site_info_edit_site_edit_site_component__WEBPACK_IMPORTED_MODULE_27__["EditSiteComponent"], _add_customer_adding_cust_adding_cust_component__WEBPACK_IMPORTED_MODULE_28__["AddingCustComponent"], _add_customer_edit_cust_edit_cust_component__WEBPACK_IMPORTED_MODULE_29__["EditCustComponent"], _identify_hazards_identify_hazards_component__WEBPACK_IMPORTED_MODULE_30__["IdentifyHazardsComponent"], _contr_and_act_req_contr_and_act_req_component__WEBPACK_IMPORTED_MODULE_31__["ContrAndActReqComponent"], _identify_hazards_add_hazard_add_hazard_component__WEBPACK_IMPORTED_MODULE_32__["AddHazardComponent"], _identify_hazards_edit_hazard_edit_hazard_component__WEBPACK_IMPORTED_MODULE_33__["EditHazardComponent"], _contr_and_act_req_add_contr_act_add_contr_act_component__WEBPACK_IMPORTED_MODULE_34__["AddContrActComponent"], _contr_and_act_req_edit_cont_act_edit_cont_act_component__WEBPACK_IMPORTED_MODULE_35__["EditContActComponent"], _project_manager_project_manager_component__WEBPACK_IMPORTED_MODULE_36__["ProjectManagerComponent"], _project_manager_add_edit_proj_mang_add_edit_proj_mang_component__WEBPACK_IMPORTED_MODULE_37__["AddEditProjMangComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _site_info_routing_module__WEBPACK_IMPORTED_MODULE_3__["SiteInfoRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_38__["MatStepperModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "AXTO": function AXTO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddEditProjMangComponent", function () {
        return AddEditProjMangComponent;
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


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/utils/services/logical-form-info.service */
      "wbBK");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");

      function AddEditProjMangComponent_h3_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add Project Manager");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddEditProjMangComponent_h3_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit Project Manager");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddEditProjMangComponent_button_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddEditProjMangComponent_button_10_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.onFormSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r2.editTitle.valid);
        }
      }

      function AddEditProjMangComponent_button_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddEditProjMangComponent_button_11_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.addForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r3.editTitle.valid);
        }
      }

      var AddEditProjMangComponent = /*#__PURE__*/function () {
        function AddEditProjMangComponent(fb, logicalFormInfo, dialogRef, data) {
          _classCallCheck(this, AddEditProjMangComponent);

          this.fb = fb;
          this.logicalFormInfo = logicalFormInfo;
          this.dialogRef = dialogRef;
          this.data = data;
          this.dataRec = data;
        }

        _createClass(AddEditProjMangComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.editTitle = this.fb.group({
              title: [this.dataRec.title, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
          }
        }, {
          key: "onFormSubmit",
          value: function onFormSubmit() {
            var _this6 = this;

            var data = {
              title: this.editTitle.get('title').value,
              componentId: this.dataRec.componentId
            };
            this.logicalFormInfo.updateProjectMang(data, this.dataRec._id).subscribe(function (resData) {
              console.log('projectManager', resData);

              _this6.dialogRef.close('true');

              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: 'Project Manager Edited successfully',
                showConfirmButton: false,
                timer: 1200
              });
            });
          }
        }, {
          key: "addForm",
          value: function addForm() {
            var _this7 = this;

            var data = {
              title: this.editTitle.get('title').value
            };
            this.logicalFormInfo.addProjectMang(data).subscribe(function (resData) {
              console.log('projectManager', resData);

              _this7.dialogRef.close('true');

              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: 'Project Manager added successfully',
                showConfirmButton: false,
                timer: 1200
              });
            });
          }
        }, {
          key: "closeDialog",
          value: function closeDialog() {
            this.dialogRef.close('false');
          }
        }]);

        return AddEditProjMangComponent;
      }();

      AddEditProjMangComponent.ɵfac = function AddEditProjMangComponent_Factory(t) {
        return new (t || AddEditProjMangComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__["LogicalFormInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]));
      };

      AddEditProjMangComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddEditProjMangComponent,
        selectors: [["app-add-edit-proj-mang"]],
        decls: 12,
        vars: 5,
        consts: [[3, "formGroup"], [4, "ngIf"], ["appearance", "legacy", 1, "example-full-width", 2, "width", "498px"], ["matInput", "", "formControlName", "title"], [1, "row"], [1, "col-sm-2", "offset-8"], ["mat-raised-button", "", 3, "click"], [1, "col-sm-2"], ["mat-raised-button", "", 3, "disabled", "click", 4, "ngIf"], ["mat-raised-button", "", 3, "disabled", "click"]],
        template: function AddEditProjMangComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddEditProjMangComponent_h3_1_Template, 2, 0, "h3", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddEditProjMangComponent_h3_2_Template, 2, 0, "h3", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddEditProjMangComponent_Template_button_click_7_listener() {
              return ctx.closeDialog();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AddEditProjMangComponent_button_10_Template, 2, 1, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AddEditProjMangComponent_button_11_Template, 2, 1, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.editTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.dataRec);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataRec);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataRec);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.dataRec);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtZWRpdC1wcm9qLW1hbmcuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddEditProjMangComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-add-edit-proj-mang',
            templateUrl: './add-edit-proj-mang.component.html',
            styleUrls: ['./add-edit-proj-mang.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__["LogicalFormInfoService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "FVgK": function FVgK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditTaskComponent", function () {
        return EditTaskComponent;
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


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/utils/services/logical-form-info.service */
      "wbBK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");

      var EditTaskComponent = /*#__PURE__*/function () {
        function EditTaskComponent(fb, logicalFormInfo, dialogRef, data) {
          _classCallCheck(this, EditTaskComponent);

          this.fb = fb;
          this.logicalFormInfo = logicalFormInfo;
          this.dialogRef = dialogRef;
          this.data = data;
          this.dataRec = data;
        }

        _createClass(EditTaskComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log("this.dataRec", this.dataRec);
            this.editTitle = this.fb.group({
              title: [this.dataRec.title, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
          }
        }, {
          key: "onFormSubmit",
          value: function onFormSubmit() {
            var _this8 = this;

            var data = {
              title: this.editTitle.get('title').value,
              PPE: this.dataRec.PPE,
              codeOfPractice: this.dataRec.codeOfPractice,
              licence: this.dataRec.licence,
              risk: this.dataRec.risk
            };
            this.logicalFormInfo.updateJobTask(data, this.dataRec._id).subscribe(function (resData) {
              console.log('submodulesData', resData);

              _this8.dialogRef.close('true');

              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: 'Parameter Edited successfully',
                showConfirmButton: false,
                timer: 1200
              });
            });
          }
        }, {
          key: "closeDialog",
          value: function closeDialog() {
            this.dialogRef.close('false');
          }
        }]);

        return EditTaskComponent;
      }();

      EditTaskComponent.ɵfac = function EditTaskComponent_Factory(t) {
        return new (t || EditTaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__["LogicalFormInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]));
      };

      EditTaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EditTaskComponent,
        selectors: [["app-edit-task"]],
        decls: 12,
        vars: 2,
        consts: [[3, "formGroup"], ["appearance", "legacy", 1, "example-full-width", 2, "width", "498px"], ["matInput", "", "formControlName", "title", 2, "text-transform", "capitalize !important"], [1, "row"], [1, "col-sm-2", "offset-8"], ["mat-raised-button", "", 3, "click"], [1, "col-sm-2"], ["mat-raised-button", "", 3, "disabled", "click"]],
        template: function EditTaskComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit Job Task");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditTaskComponent_Template_button_click_7_listener() {
              return ctx.closeDialog();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditTaskComponent_Template_button_click_10_listener() {
              return ctx.onFormSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Update");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.editTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.editTitle.valid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXRhc2suY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditTaskComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-edit-task',
            templateUrl: './edit-task.component.html',
            styleUrls: ['./edit-task.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__["LogicalFormInfoService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "G2Gx": function G2Gx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IdentifyHazardsComponent", function () {
        return IdentifyHazardsComponent;
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


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/paginator */
      "5QHs");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/table */
      "OaSA");
      /* harmony import */


      var _edit_hazard_edit_hazard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./edit-hazard/edit-hazard.component */
      "kBda");
      /* harmony import */


      var src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/utils/services/logical-form-info.service */
      "wbBK");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/utils/services/set-title.service */
      "yZxC");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      function IdentifyHazardsComponent_th_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function IdentifyHazardsComponent_td_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r10.index);
        }
      }

      function IdentifyHazardsComponent_th_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function IdentifyHazardsComponent_td_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r11.title, " ");
        }
      }

      function IdentifyHazardsComponent_th_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Edit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function IdentifyHazardsComponent_td_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IdentifyHazardsComponent_td_16_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var element_r12 = ctx.$implicit;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.edit(element_r12);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function IdentifyHazardsComponent_th_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Delete ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function IdentifyHazardsComponent_td_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IdentifyHazardsComponent_td_19_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

            var element_r15 = ctx.$implicit;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r16["delete"](element_r15);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function IdentifyHazardsComponent_tr_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 21);
        }
      }

      function IdentifyHazardsComponent_tr_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 22);
        }
      }

      var _c0 = function _c0() {
        return ["/admin/siteInfo/addHazards"];
      };

      var _c1 = function _c1() {
        return [5, 10, 20];
      };

      var IdentifyHazardsComponent = /*#__PURE__*/function () {
        /////////////mat table end////////////////
        function IdentifyHazardsComponent(logicalFormInfo, dialog, setTitle) {
          _classCallCheck(this, IdentifyHazardsComponent);

          this.logicalFormInfo = logicalFormInfo;
          this.dialog = dialog;
          this.setTitle = setTitle;
          this.jobTaskData = [];
          this.ELEMENT_DATA = []; /////////////mat table////////////////

          this.displayedColumns = ['index', 'title', 'edit', 'delete'];
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.ELEMENT_DATA);
        }

        _createClass(IdentifyHazardsComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.dataSource.paginator = this.paginator;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getAllHazards();
            this.setTitle.setTitle('WHS-PPE List');
          }
        }, {
          key: "getAllHazards",
          value: function getAllHazards() {
            var _this9 = this;

            this.logicalFormInfo.getAllHazards().subscribe(function (res) {
              console.log('getAllHazards=>', res);
              var data = res.data;
              data.forEach(function (element, index) {
                element.index = index + 1; //adding index
              });
              _this9.ELEMENT_DATA = data;
              _this9.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this9.ELEMENT_DATA);
              _this9.dataSource.paginator = _this9.paginator;
              console.log('this.ELEMENT_DATA', _this9.ELEMENT_DATA); //  this.task = res.data.subComponents;
            });
          }
        }, {
          key: "edit",
          value: function edit(element) {
            var _this10 = this;

            var dialogRef = this.dialog.open(_edit_hazard_edit_hazard_component__WEBPACK_IMPORTED_MODULE_4__["EditHazardComponent"], {
              width: "550px",
              data: element
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result == "true") {
                _this10.getAllHazards();
              }

              console.log("The dialog was closed");
            });
          }
        }, {
          key: "delete",
          value: function _delete(item) {
            var _this11 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
              title: 'Are you sure?',
              text: "Do you want to delete \"".concat(item.title, "\"?"),
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#00B96F',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, Delete!'
            }).then(function (result) {
              if (result.value) {
                _this11.logicalFormInfo.deleteHazards(item._id).subscribe(function (res) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    title: 'Parameter Deleted successfully',
                    showConfirmButton: false,
                    timer: 1200
                  });
                  console.log('deleted res', res);

                  _this11.getAllHazards();
                });
              }
            });
          }
        }]);

        return IdentifyHazardsComponent;
      }();

      IdentifyHazardsComponent.ɵfac = function IdentifyHazardsComponent_Factory(t) {
        return new (t || IdentifyHazardsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_5__["LogicalFormInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_7__["SetTitleService"]));
      };

      IdentifyHazardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: IdentifyHazardsComponent,
        selectors: [["app-identify-hazards"]],
        viewQuery: function IdentifyHazardsComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          }
        },
        decls: 23,
        vars: 7,
        consts: [[1, "ml-2"], [1, "col", "ml-2", "mb-2"], [1, "btn", "btn-outline-primary", "mt-1", "mr-2", "float-right", 3, "routerLink"], [1, "fas", "fa-folder-plus", "mr-2"], [1, "mat-elevation-z8", "ml-2"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "index"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "title"], ["matColumnDef", "edit"], ["mat-cell", "", 3, "click", 4, "matCellDef"], ["matColumnDef", "delete"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", "aria-label", "Select page of periodic elements", 3, "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", 3, "click"], [1, "fas", "fa-pencil-alt"], [1, "fas", "fa-trash"], ["mat-header-row", ""], ["mat-row", ""]],
        template: function IdentifyHazardsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Identify Hazards List");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add Hazard ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, IdentifyHazardsComponent_th_9_Template, 2, 0, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, IdentifyHazardsComponent_td_10_Template, 2, 1, "td", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, IdentifyHazardsComponent_th_12_Template, 2, 0, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, IdentifyHazardsComponent_td_13_Template, 2, 1, "td", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, IdentifyHazardsComponent_th_15_Template, 2, 0, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, IdentifyHazardsComponent_td_16_Template, 2, 0, "td", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, IdentifyHazardsComponent_th_18_Template, 2, 0, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, IdentifyHazardsComponent_td_19_Template, 2, 0, "td", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, IdentifyHazardsComponent_tr_20_Template, 1, 0, "tr", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, IdentifyHazardsComponent_tr_21_Template, 1, 0, "tr", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "mat-paginator", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]],
        styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxpZGVudGlmeS1oYXphcmRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKIiwiZmlsZSI6ImlkZW50aWZ5LWhhemFyZHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IdentifyHazardsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-identify-hazards',
            templateUrl: './identify-hazards.component.html',
            styleUrls: ['./identify-hazards.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_5__["LogicalFormInfoService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
          }, {
            type: src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_7__["SetTitleService"]
          }];
        }, {
          paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]]
          }]
        });
      })();
      /***/

    },

    /***/
    "HQ6n": function HQ6n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditLicenceCatComponent", function () {
        return EditLicenceCatComponent;
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


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/utils/services/logical-form-info.service */
      "wbBK");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");

      function EditLicenceCatComponent_h3_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add Licence Category");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function EditLicenceCatComponent_h3_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit Licence Category");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function EditLicenceCatComponent_button_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditLicenceCatComponent_button_10_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.onFormSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r2.editTitle.valid);
        }
      }

      function EditLicenceCatComponent_button_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditLicenceCatComponent_button_11_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.addForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r3.editTitle.valid);
        }
      }

      var EditLicenceCatComponent = /*#__PURE__*/function () {
        function EditLicenceCatComponent(fb, logicalFormInfo, dialogRef, data) {
          _classCallCheck(this, EditLicenceCatComponent);

          this.fb = fb;
          this.logicalFormInfo = logicalFormInfo;
          this.dialogRef = dialogRef;
          this.data = data;
          this.dataRec = data;
        }

        _createClass(EditLicenceCatComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.editTitle = this.fb.group({
              title: [this.dataRec.title, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
          }
        }, {
          key: "onFormSubmit",
          value: function onFormSubmit() {
            var _this12 = this;

            var data = {
              title: this.editTitle.get('title').value,
              componentId: this.dataRec.componentId
            };
            this.logicalFormInfo.updateLicenceCat(data, this.dataRec._id).subscribe(function (resData) {
              console.log('submodulesData', resData);

              _this12.dialogRef.close('true');

              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: 'Category Edited successfully',
                showConfirmButton: false,
                timer: 1200
              });
            });
          }
        }, {
          key: "addForm",
          value: function addForm() {
            var _this13 = this;

            var data = {
              title: this.editTitle.get('title').value
            };
            this.logicalFormInfo.addLicenceCat(data).subscribe(function (resData) {
              console.log('category', resData);

              _this13.dialogRef.close('true');

              if (_this13.dataRec) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                  title: 'Category Edited successfully',
                  showConfirmButton: false,
                  timer: 1200
                });
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                  title: 'Category Added successfully',
                  showConfirmButton: false,
                  timer: 1200
                });
              }
            });
          }
        }, {
          key: "closeDialog",
          value: function closeDialog() {
            this.dialogRef.close('false');
          }
        }]);

        return EditLicenceCatComponent;
      }();

      EditLicenceCatComponent.ɵfac = function EditLicenceCatComponent_Factory(t) {
        return new (t || EditLicenceCatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__["LogicalFormInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]));
      };

      EditLicenceCatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EditLicenceCatComponent,
        selectors: [["app-edit-licence-cat"]],
        decls: 12,
        vars: 5,
        consts: [[3, "formGroup"], [4, "ngIf"], ["appearance", "legacy", 1, "example-full-width", 2, "width", "498px"], ["matInput", "", "formControlName", "title", 2, "text-transform", "capitalize !important"], [1, "row"], [1, "col-sm-2", "offset-8"], ["mat-raised-button", "", 3, "click"], [1, "col-sm-2"], ["mat-raised-button", "", 3, "disabled", "click", 4, "ngIf"], ["mat-raised-button", "", 3, "disabled", "click"]],
        template: function EditLicenceCatComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditLicenceCatComponent_h3_1_Template, 2, 0, "h3", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditLicenceCatComponent_h3_2_Template, 2, 0, "h3", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditLicenceCatComponent_Template_button_click_7_listener() {
              return ctx.closeDialog();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EditLicenceCatComponent_button_10_Template, 2, 1, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, EditLicenceCatComponent_button_11_Template, 2, 1, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.editTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.dataRec);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataRec);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataRec);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.dataRec);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWxpY2VuY2UtY2F0LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditLicenceCatComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-edit-licence-cat',
            templateUrl: './edit-licence-cat.component.html',
            styleUrls: ['./edit-licence-cat.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__["LogicalFormInfoService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ISp9": function ISp9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditContActComponent", function () {
        return EditContActComponent;
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


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/utils/services/logical-form-info.service */
      "wbBK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");

      var EditContActComponent = /*#__PURE__*/function () {
        function EditContActComponent(fb, logicalFormInfo, dialogRef, data) {
          _classCallCheck(this, EditContActComponent);

          this.fb = fb;
          this.logicalFormInfo = logicalFormInfo;
          this.dialogRef = dialogRef;
          this.data = data;
          this.dataRec = data;
        }

        _createClass(EditContActComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log('this.dataRec', this.dataRec);
            this.editTitle = this.fb.group({
              title: [this.dataRec.title, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
          }
        }, {
          key: "onFormSubmit",
          value: function onFormSubmit() {
            var _this14 = this;

            var data = {
              title: this.editTitle.get('title').value
            };
            this.logicalFormInfo.updateContrlActReq(data, this.dataRec._id).subscribe(function (resData) {
              _this14.dialogRef.close('true');

              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: 'Parameter Edited successfully',
                showConfirmButton: false,
                timer: 1200
              });
            });
          }
        }, {
          key: "closeDialog",
          value: function closeDialog() {
            this.dialogRef.close('false');
          }
        }]);

        return EditContActComponent;
      }();

      EditContActComponent.ɵfac = function EditContActComponent_Factory(t) {
        return new (t || EditContActComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__["LogicalFormInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]));
      };

      EditContActComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EditContActComponent,
        selectors: [["app-edit-cont-act"]],
        decls: 12,
        vars: 2,
        consts: [[3, "formGroup"], ["appearance", "legacy", 1, "example-full-width", 2, "width", "498px"], ["matInput", "", "formControlName", "title", 2, "text-transform", "capitalize !important"], [1, "row"], [1, "col-sm-2", "offset-8"], ["mat-raised-button", "", 3, "click"], [1, "col-sm-2"], ["mat-raised-button", "", 3, "disabled", "click"]],
        template: function EditContActComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit High Risk");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditContActComponent_Template_button_click_7_listener() {
              return ctx.closeDialog();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditContActComponent_Template_button_click_10_listener() {
              return ctx.onFormSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Update");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.editTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.editTitle.valid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWNvbnQtYWN0LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditContActComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-edit-cont-act',
            templateUrl: './edit-cont-act.component.html',
            styleUrls: ['./edit-cont-act.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__["LogicalFormInfoService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "L+dl": function LDl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddCustomerComponent", function () {
        return AddCustomerComponent;
      });
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/paginator */
      "5QHs");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/table */
      "OaSA");
      /* harmony import */


      var _adding_cust_adding_cust_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./adding-cust/adding-cust.component */
      "Sgjq");
      /* harmony import */


      var _edit_cust_edit_cust_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./edit-cust/edit-cust.component */
      "yVkB");
      /* harmony import */


      var src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/utils/services/set-title.service */
      "yZxC");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/utils/services/logical-form-info.service */
      "wbBK");

      function AddCustomerComponent_th_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddCustomerComponent_td_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r17 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r17 + 1);
        }
      }

      function AddCustomerComponent_th_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddCustomerComponent_td_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r18.customerName, " ");
        }
      }

      function AddCustomerComponent_th_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Contact ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddCustomerComponent_td_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r19.customerContact, " ");
        }
      }

      function AddCustomerComponent_th_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Contact Phone ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddCustomerComponent_td_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r20.customerContactPhone, " ");
        }
      }

      function AddCustomerComponent_th_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Email ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddCustomerComponent_td_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r21.customerEmail, " ");
        }
      }

      function AddCustomerComponent_th_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Edit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddCustomerComponent_td_24_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddCustomerComponent_td_24_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);

            var element_r22 = ctx.$implicit;

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r23.edit(element_r22);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddCustomerComponent_th_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Delete ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddCustomerComponent_td_27_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddCustomerComponent_td_27_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27);

            var element_r25 = ctx.$implicit;

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r26["delete"](element_r25);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddCustomerComponent_tr_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 22);
        }
      }

      function AddCustomerComponent_tr_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 23);
        }
      }

      var _c0 = function _c0() {
        return [5, 10, 20];
      };

      var AddCustomerComponent = /*#__PURE__*/function () {
        function AddCustomerComponent(setTitle, dialog, logicalFormInfoService) {
          _classCallCheck(this, AddCustomerComponent);

          this.setTitle = setTitle;
          this.dialog = dialog;
          this.logicalFormInfoService = logicalFormInfoService;
          this.ELEMENT_DATA = [];
          this.displayedColumns = ['index', 'customerName', 'customerContact', 'customerContactPhone', 'customerEmail', 'edit', 'delete'];
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.ELEMENT_DATA);
        }

        _createClass(AddCustomerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getAllCustomers();
            this.setTitle.setTitle('WHS-Add Customer');
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.dataSource.paginator = this.paginator;
          }
        }, {
          key: "getAllCustomers",
          value: function getAllCustomers() {
            var _this15 = this;

            this.logicalFormInfoService.getAllCustomer().subscribe(function (res) {
              console.log(res);
              _this15.dataSource.data = res.data;
              _this15.dataSource.paginator = _this15.paginator;
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
            var _this16 = this;

            var dialogRef = this.dialog.open(_adding_cust_adding_cust_component__WEBPACK_IMPORTED_MODULE_4__["AddingCustComponent"], {
              height: '80%',
              data: {
                action: "new",
                userId: id
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result === 'ok') {
                _this16.getAllCustomers();
              }

              console.log("CustomerInfoComponent -> openDialog -> result", result);
              console.log("The dialog was closed");
            });
          }
        }, {
          key: "edit",
          value: function edit(element) {
            var _this17 = this;

            console.log(element);
            var dialogRef = this.dialog.open(_edit_cust_edit_cust_component__WEBPACK_IMPORTED_MODULE_5__["EditCustComponent"], {
              width: "550px",
              height: "80%",
              data: element
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result == "ok") {
                _this17.getAllCustomers();
              }

              console.log("The dialog was closed");
            });
          }
        }, {
          key: "delete",
          value: function _delete(item) {
            var _this18 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
              title: 'Are you sure?',
              text: "Do you want to delete \"".concat(item.title, "\"?"),
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#00B96F',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, Delete!'
            }).then(function (result) {
              if (result.value) {
                _this18.logicalFormInfoService.deleteCustomer(item._id).subscribe(function (res) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
                    title: 'Deleted successfully',
                    showConfirmButton: false,
                    timer: 1200
                  });
                  console.log('deleted res', res);

                  _this18.getAllCustomers();
                });
              }
            });
          }
        }]);

        return AddCustomerComponent;
      }();

      AddCustomerComponent.ɵfac = function AddCustomerComponent_Factory(t) {
        return new (t || AddCustomerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_6__["SetTitleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_8__["LogicalFormInfoService"]));
      };

      AddCustomerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AddCustomerComponent,
        selectors: [["app-add-customer"]],
        viewQuery: function AddCustomerComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          }
        },
        decls: 31,
        vars: 5,
        consts: [["_ngcontent-hqi-c400", "", "type", "button", 1, "btn", "btn-outline-primary", "mt-1", "mr-2", "float-right", 3, "click"], ["_ngcontent-hqi-c400", "", 1, "fas", "fa-plus"], [1, "mat-elevation-z8", "ml-2"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "index"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "customerName"], ["matColumnDef", "customerContact"], ["matColumnDef", "customerContactPhone"], ["matColumnDef", "customerEmail"], ["matColumnDef", "edit"], ["mat-cell", "", 3, "click", 4, "matCellDef"], ["matColumnDef", "delete"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", "aria-label", "Select page of periodic elements", 3, "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", 3, "click"], [1, "fas", "fa-pencil-alt"], [1, "fas", "fa-trash"], ["mat-header-row", ""], ["mat-row", ""]],
        template: function AddCustomerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Customer List ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddCustomerComponent_Template_button_click_2_listener() {
              return ctx.openDialog("abcd");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "table", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](7, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AddCustomerComponent_th_8_Template, 2, 0, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, AddCustomerComponent_td_9_Template, 2, 1, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](10, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, AddCustomerComponent_th_11_Template, 2, 0, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AddCustomerComponent_td_12_Template, 2, 1, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](13, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AddCustomerComponent_th_14_Template, 2, 0, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, AddCustomerComponent_td_15_Template, 2, 1, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](16, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, AddCustomerComponent_th_17_Template, 2, 0, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, AddCustomerComponent_td_18_Template, 2, 1, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](19, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, AddCustomerComponent_th_20_Template, 2, 0, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, AddCustomerComponent_td_21_Template, 2, 1, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](22, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, AddCustomerComponent_th_23_Template, 2, 0, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, AddCustomerComponent_td_24_Template, 2, 0, "td", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](25, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, AddCustomerComponent_th_26_Template, 2, 0, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, AddCustomerComponent_td_27_Template, 2, 0, "td", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, AddCustomerComponent_tr_28_Template, 1, 0, "tr", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, AddCustomerComponent_tr_29_Template, 1, 0, "tr", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "mat-paginator", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0));
          }
        },
        directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]],
        styles: ["abel[_ngcontent-%COMP%]:not(.form-check-label):not(.custom-file-label) {\n  font-weight: 500;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  border: 2px solid dodgerblue;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 500;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n}\n\n.form-control[_ngcontent-%COMP%]:hover {\n  border-color: rgba(46, 105, 255, 0.5);\n  box-shadow: 0 0 0 2px rgba(46, 105, 255, 0.25);\n}\n\n.pt-3[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 32px;\n  font-weight: 700;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n}\n\n.container[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.form-Label[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 500;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n  width: 100%;\n  margin-left: 2px;\n  margin-bottom: 14px;\n}\n\n.sign[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid rgba(46, 105, 255, 0.5);\n  width: 500px;\n  border-radius: 5px;\n}\n\n.sign[_ngcontent-%COMP%]:hover {\n  border: 1px solid;\n  border-color: #2e69ff40;\n  box-shadow: 0 0 0 3px rgba(46, 105, 255, 0.25);\n}\n\n.imgStyle[_ngcontent-%COMP%] {\n  border: 2px solid #2e69ff40;\n  border-radius: 10px;\n}\n\n.example-additional-selection[_ngcontent-%COMP%] {\n  opacity: 0.75;\n  font-size: 0.75em;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhZGQtY3VzdG9tZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKOztBQUNFO0VBQ0UsNEJBQUE7QUFFSjs7QUFBRTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQUdKOztBQURFO0VBQ0UscUNBQUE7RUFDQSw4Q0FBQTtBQUlKOztBQUZFO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBS0o7O0FBSEU7RUFDRSx1QkFBQTtBQU1KOztBQUpFO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFPSjs7QUFMRTtFQUNFLGFBQUE7RUFDQSx5Q0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQVFKOztBQU5FO0VBQ0UsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLDhDQUFBO0FBU0o7O0FBTkU7RUFDRSwyQkFBQTtFQUNBLG1CQUFBO0FBU0o7O0FBUEU7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QUFVSjs7QUFSRTtFQUNFLFdBQUE7QUFXSiIsImZpbGUiOiJhZGQtY3VzdG9tZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhYmVsOm5vdCguZm9ybS1jaGVjay1sYWJlbCk6bm90KC5jdXN0b20tZmlsZS1sYWJlbCkge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbiAgaW5wdXQ6Zm9jdXMge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgZG9kZ2VyYmx1ZTtcclxuICB9XHJcbiAgbGFiZWwge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgICBmb250LWZhbWlseTogSW50ZXIsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIC5mb3JtLWNvbnRyb2w6aG92ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDQ2LCAxMDUsIDI1NSwgMC41KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCByZ2IoNDYgMTA1IDI1NSAvIDI1JSk7XHJcbiAgfVxyXG4gIC5wdC0zIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgZm9udC1mYW1pbHk6IEludGVyLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICAuY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAuZm9ybS1MYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICAgIGZvbnQtZmFtaWx5OiBJbnRlciwgc2Fucy1zZXJpZjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XHJcbiAgfVxyXG4gIC5zaWduIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDQ2LCAxMDUsIDI1NSwgMC41KTtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcbiAgLnNpZ246aG92ZXIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6ICMyZTY5ZmY0MDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2IoNDYsIDEwNSwgMjU1LCAwLjI1KTtcclxuICB9XHJcbiAgXHJcbiAgLmltZ1N0eWxlIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyZTY5ZmY0MDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG4gIC5leGFtcGxlLWFkZGl0aW9uYWwtc2VsZWN0aW9uIHtcclxuICAgIG9wYWNpdHk6IDAuNzU7XHJcbiAgICBmb250LXNpemU6IDAuNzVlbTtcclxuICB9XHJcbiAgdGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AddCustomerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-add-customer',
            templateUrl: './add-customer.component.html',
            styleUrls: ['./add-customer.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_6__["SetTitleService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
          }, {
            type: src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_8__["LogicalFormInfoService"]
          }];
        }, {
          paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]]
          }]
        });
      })();
      /***/

    },

    /***/
    "O1Ir": function O1Ir(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddCOPComponent", function () {
        return AddCOPComponent;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/utils/services/logical-form-info.service */
      "wbBK");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "SVse");

      function AddCOPComponent_ng_container_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddCOPComponent_ng_container_9_Template_span_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.addAction();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "add_circle_outline ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddCOPComponent_ng_container_9_Template_span_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var i_r2 = ctx.index;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.removeSafetyModule(i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " remove_circle_outline ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r2 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", i_r2 + 1, ". ");
        }
      }

      var _c0 = function _c0() {
        return ["/admin/siteInfo/codeOfpract"];
      };

      var AddCOPComponent = /*#__PURE__*/function () {
        function AddCOPComponent(fb, router, logicalFormInfo) {
          _classCallCheck(this, AddCOPComponent);

          this.fb = fb;
          this.router = router;
          this.logicalFormInfo = logicalFormInfo;
          this.codeOfPractFG = this.fb.group({
            // mode:"JobTask",
            arrObj: this.fb.array([])
          });
        }

        _createClass(AddCOPComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.addAction();
          }
        }, {
          key: "addAction",
          value: function addAction() {
            {
              this.add().push(this.newAction());
            }
          }
        }, {
          key: "add",
          value: function add() {
            return this.codeOfPractFG.get('arrObj');
          }
        }, {
          key: "newAction",
          value: function newAction() {
            return this.fb.group({
              title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
          }
        }, {
          key: "removeSafetyModule",
          value: function removeSafetyModule(i) {
            var item = this.codeOfPractFG.controls['arrObj'];

            if (item.length > 1) {
              item.removeAt(i);
            }
          }
        }, {
          key: "onFormSubmit",
          value: function onFormSubmit() {
            var _this19 = this;

            var data = {
              arrObj: this.codeOfPractFG.get('arrObj').value
            };
            this.logicalFormInfo.addMultipleCOP(data).subscribe(function (data) {
              console.log('codeOfPractice=>', data);

              _this19.router.navigate(['/admin/siteInfo/codeOfpract']);
            }, function (err) {
              console.error(err);
            });
          }
        }]);

        return AddCOPComponent;
      }();

      AddCOPComponent.ɵfac = function AddCOPComponent_Factory(t) {
        return new (t || AddCOPComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_3__["LogicalFormInfoService"]));
      };

      AddCOPComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddCOPComponent,
        selectors: [["app-add-cop"]],
        decls: 14,
        vars: 5,
        consts: [[1, "btn", "btn-outline-primary", 3, "routerLink"], ["aria-hidden", "true", 1, "fa", "fa-arrow-left"], [1, "container", "px-4", "py-4", "bg-white"], [3, "formGroup", "ngSubmit"], [1, "text-center"], ["formArrayName", "arrObj"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "col-md-2"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [3, "formGroupName"], [1, "row", "justify-content-center"], [1, "mr-1", "mt-2"], [1, "col-8"], ["type", "text", "formControlName", "title", "id", "name", 1, "form-control", "sign"], [1, "col-1", "mt-2"], [1, "material-icons", 3, "click"]],
        template: function AddCOPComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddCOPComponent_Template_form_ngSubmit_3_listener() {
              return ctx.onFormSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add Code Of Practice");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AddCOPComponent_ng_container_9_Template, 14, 2, "ng-container", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.codeOfPractFG);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.add().controls);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.codeOfPractFG.get("arrObj").invalid);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtY29wLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddCOPComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-add-cop',
            templateUrl: './add-cop.component.html',
            styleUrls: ['./add-cop.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_3__["LogicalFormInfoService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "SEER": function SEER(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PpeSelectComponent", function () {
        return PpeSelectComponent;
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


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/paginator */
      "5QHs");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/table */
      "OaSA");
      /* harmony import */


      var _edit_ppe_edit_ppe_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./edit-ppe/edit-ppe.component */
      "fKBH");
      /* harmony import */


      var src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/utils/services/logical-form-info.service */
      "wbBK");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/utils/services/set-title.service */
      "yZxC");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      function PpeSelectComponent_th_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PpeSelectComponent_td_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r10.index);
        }
      }

      function PpeSelectComponent_th_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PpeSelectComponent_td_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r11.title, " ");
        }
      }

      function PpeSelectComponent_th_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Edit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PpeSelectComponent_td_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PpeSelectComponent_td_16_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var element_r12 = ctx.$implicit;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.edit(element_r12);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PpeSelectComponent_th_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Delete ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PpeSelectComponent_td_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PpeSelectComponent_td_19_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

            var element_r15 = ctx.$implicit;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r16["delete"](element_r15);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PpeSelectComponent_tr_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 21);
        }
      }

      function PpeSelectComponent_tr_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 22);
        }
      }

      var _c0 = function _c0() {
        return ["/admin/siteInfo/addPPE"];
      };

      var _c1 = function _c1() {
        return [5, 10, 20];
      };

      var PpeSelectComponent = /*#__PURE__*/function () {
        /////////////mat table end////////////////
        function PpeSelectComponent(logicalFormInfo, dialog, setTitle) {
          _classCallCheck(this, PpeSelectComponent);

          this.logicalFormInfo = logicalFormInfo;
          this.dialog = dialog;
          this.setTitle = setTitle;
          this.jobTaskData = [];
          this.ELEMENT_DATA = []; /////////////mat table////////////////

          this.displayedColumns = ['index', 'title', 'edit', 'delete'];
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.ELEMENT_DATA);
        }

        _createClass(PpeSelectComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.dataSource.paginator = this.paginator;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getAllPPEs();
            this.setTitle.setTitle('WHS-PPE List');
          }
        }, {
          key: "getAllPPEs",
          value: function getAllPPEs() {
            var _this20 = this;

            this.logicalFormInfo.getAllPPE().subscribe(function (res) {
              console.log('PPEAll=>', res);
              var data = res.data;
              data.forEach(function (element, index) {
                element.index = index + 1; //adding index
              });
              _this20.ELEMENT_DATA = data;
              _this20.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this20.ELEMENT_DATA);
              _this20.dataSource.paginator = _this20.paginator;
              console.log('this.ELEMENT_DATA', _this20.ELEMENT_DATA); //  this.task = res.data.subComponents;
            });
          }
        }, {
          key: "edit",
          value: function edit(element) {
            var _this21 = this;

            var dialogRef = this.dialog.open(_edit_ppe_edit_ppe_component__WEBPACK_IMPORTED_MODULE_4__["EditPPEComponent"], {
              width: "550px",
              data: element
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result == "true") {
                _this21.getAllPPEs();
              }

              console.log("The dialog was closed");
            });
          }
        }, {
          key: "delete",
          value: function _delete(item) {
            var _this22 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
              title: 'Are you sure?',
              text: "Do you want to delete \"".concat(item.title, "\"?"),
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#00B96F',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, Delete!'
            }).then(function (result) {
              if (result.value) {
                _this22.logicalFormInfo.deletePPE(item._id).subscribe(function (res) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    title: 'Parameter Deleted successfully',
                    showConfirmButton: false,
                    timer: 1200
                  });
                  console.log('deleted res', res);

                  _this22.getAllPPEs();
                });
              }
            });
          }
        }]);

        return PpeSelectComponent;
      }();

      PpeSelectComponent.ɵfac = function PpeSelectComponent_Factory(t) {
        return new (t || PpeSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_5__["LogicalFormInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_7__["SetTitleService"]));
      };

      PpeSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PpeSelectComponent,
        selectors: [["app-ppe-select"]],
        viewQuery: function PpeSelectComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          }
        },
        decls: 23,
        vars: 7,
        consts: [[1, "ml-2"], [1, "col", "ml-2", "mb-2"], [1, "btn", "btn-outline-primary", "mt-1", "mr-2", "float-right", 3, "routerLink"], [1, "fas", "fa-folder-plus", "mr-2"], [1, "mat-elevation-z8", "ml-2"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "index"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "title"], ["matColumnDef", "edit"], ["mat-cell", "", 3, "click", 4, "matCellDef"], ["matColumnDef", "delete"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", "aria-label", "Select page of periodic elements", 3, "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", 3, "click"], [1, "fas", "fa-pencil-alt"], [1, "fas", "fa-trash"], ["mat-header-row", ""], ["mat-row", ""]],
        template: function PpeSelectComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " PPE List");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add PPE ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PpeSelectComponent_th_9_Template, 2, 0, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PpeSelectComponent_td_10_Template, 2, 1, "td", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PpeSelectComponent_th_12_Template, 2, 0, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PpeSelectComponent_td_13_Template, 2, 1, "td", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PpeSelectComponent_th_15_Template, 2, 0, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PpeSelectComponent_td_16_Template, 2, 0, "td", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, PpeSelectComponent_th_18_Template, 2, 0, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PpeSelectComponent_td_19_Template, 2, 0, "td", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, PpeSelectComponent_tr_20_Template, 1, 0, "tr", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, PpeSelectComponent_tr_21_Template, 1, 0, "tr", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "mat-paginator", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]],
        styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcGUtc2VsZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKIiwiZmlsZSI6InBwZS1zZWxlY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PpeSelectComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-ppe-select',
            templateUrl: './ppe-select.component.html',
            styleUrls: ['./ppe-select.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_5__["LogicalFormInfoService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
          }, {
            type: src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_7__["SetTitleService"]
          }];
        }, {
          paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]]
          }]
        });
      })();
      /***/

    },

    /***/
    "SKiF": function SKiF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LicenceCatComponent", function () {
        return LicenceCatComponent;
      });
      /* harmony import */


      var _edit_licence_cat_edit_licence_cat_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./edit-licence-cat/edit-licence-cat.component */
      "HQ6n");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/paginator */
      "5QHs");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/table */
      "OaSA");
      /* harmony import */


      var src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/utils/services/logical-form-info.service */
      "wbBK");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");

      function LicenceCatComponent_th_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function LicenceCatComponent_td_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r10.index);
        }
      }

      function LicenceCatComponent_th_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function LicenceCatComponent_td_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r11.title, " ");
        }
      }

      function LicenceCatComponent_th_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Edit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function LicenceCatComponent_td_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LicenceCatComponent_td_16_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);

            var element_r12 = ctx.$implicit;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r13.edit(element_r12);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function LicenceCatComponent_th_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Delete ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function LicenceCatComponent_td_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LicenceCatComponent_td_19_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);

            var element_r15 = ctx.$implicit;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r16["delete"](element_r15);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function LicenceCatComponent_tr_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 21);
        }
      }

      function LicenceCatComponent_tr_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 22);
        }
      }

      var _c0 = function _c0() {
        return [5, 10, 20];
      };

      var LicenceCatComponent = /*#__PURE__*/function () {
        /////////////mat table end////////////////
        function LicenceCatComponent(logicalFormInfo, dialog) {
          _classCallCheck(this, LicenceCatComponent);

          this.logicalFormInfo = logicalFormInfo;
          this.dialog = dialog;
          this.jobTaskData = [];
          this.ELEMENT_DATA = []; /////////////mat table////////////////

          this.displayedColumns = ['index', 'title', 'edit', 'delete'];
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.ELEMENT_DATA);
        }

        _createClass(LicenceCatComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.dataSource.paginator = this.paginator;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getAllLicenceCat();
          }
        }, {
          key: "getAllLicenceCat",
          value: function getAllLicenceCat() {
            var _this23 = this;

            this.logicalFormInfo.getAllLicenceCat().subscribe(function (res) {
              console.log('getAllLicenceCat=>', res); // this.jobTaskData = res.data[0].subComponents;

              var data = res.data;
              data.forEach(function (element, index) {
                element.index = index + 1; //adding index
              });
              _this23.ELEMENT_DATA = data;
              _this23.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this23.ELEMENT_DATA);
              _this23.dataSource.paginator = _this23.paginator; //  this.task = res.data.subComponents;
            });
          }
        }, {
          key: "edit",
          value: function edit(element) {
            var _this24 = this;

            var dialogRef = this.dialog.open(_edit_licence_cat_edit_licence_cat_component__WEBPACK_IMPORTED_MODULE_0__["EditLicenceCatComponent"], {
              width: "550px",
              data: element
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result == "true") {
                _this24.getAllLicenceCat();
              }

              console.log("The dialog was closed");
            });
          }
        }, {
          key: "delete",
          value: function _delete(item) {
            var _this25 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
              title: 'Are you sure?',
              text: "Do you want to delete \"".concat(item.title, "\"?"),
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#00B96F',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, Delete!'
            }).then(function (result) {
              if (result.value) {
                _this25.logicalFormInfo.deleteLicenceCat(item._id).subscribe(function (res) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    title: 'Category Deleted successfully',
                    showConfirmButton: false,
                    timer: 1200
                  });
                  console.log('deleted res', res);

                  _this25.getAllLicenceCat();
                });
              }
            });
          }
        }]);

        return LicenceCatComponent;
      }();

      LicenceCatComponent.ɵfac = function LicenceCatComponent_Factory(t) {
        return new (t || LicenceCatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_5__["LogicalFormInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]));
      };

      LicenceCatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: LicenceCatComponent,
        selectors: [["app-licence-cat"]],
        viewQuery: function LicenceCatComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          }
        },
        decls: 23,
        vars: 5,
        consts: [[1, "ml-2"], [1, "col", "ml-2", "mb-2"], [1, "btn", "btn-outline-primary", "mt-1", "mr-2", "float-right", 3, "click"], [1, "fas", "fa-folder-plus", "mr-2"], [1, "mat-elevation-z8", "ml-2"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "index"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "title"], ["matColumnDef", "edit"], ["mat-cell", "", 3, "click", 4, "matCellDef"], ["matColumnDef", "delete"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", "aria-label", "Select page of periodic elements", 3, "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", 3, "click"], [1, "fas", "fa-pencil-alt"], [1, "fas", "fa-trash"], ["mat-header-row", ""], ["mat-row", ""]],
        template: function LicenceCatComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Licence Category List");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LicenceCatComponent_Template_button_click_3_listener() {
              return ctx.edit("");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Add Category ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "table", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](8, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, LicenceCatComponent_th_9_Template, 2, 0, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, LicenceCatComponent_td_10_Template, 2, 1, "td", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](11, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, LicenceCatComponent_th_12_Template, 2, 0, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, LicenceCatComponent_td_13_Template, 2, 1, "td", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](14, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, LicenceCatComponent_th_15_Template, 2, 0, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, LicenceCatComponent_td_16_Template, 2, 0, "td", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](17, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, LicenceCatComponent_th_18_Template, 2, 0, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, LicenceCatComponent_td_19_Template, 2, 0, "td", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, LicenceCatComponent_tr_20_Template, 1, 0, "tr", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, LicenceCatComponent_tr_21_Template, 1, 0, "tr", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "mat-paginator", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0));
          }
        },
        directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"]],
        styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbGljZW5jZS1jYXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0oiLCJmaWxlIjoibGljZW5jZS1jYXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LicenceCatComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-licence-cat',
            templateUrl: './licence-cat.component.html',
            styleUrls: ['./licence-cat.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_5__["LogicalFormInfoService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
          }];
        }, {
          paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]]
          }]
        });
      })();
      /***/

    },

    /***/
    "Sgjq": function Sgjq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddingCustComponent", function () {
        return AddingCustComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/utils/services/logical-form-info.service */
      "wbBK");

      var AddingCustComponent = /*#__PURE__*/function () {
        function AddingCustComponent(dialogRef, data, fb, logicalFormInfoService) {
          _classCallCheck(this, AddingCustComponent);

          this.dialogRef = dialogRef;
          this.data = data;
          this.fb = fb;
          this.logicalFormInfoService = logicalFormInfoService;
        }

        _createClass(AddingCustComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.addCustomerForm = this.fb.group({
              customerName: [''],
              customerContact: [''],
              customerContactPhone: [''],
              customerEmail: ['']
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this26 = this;

            console.log(this.addCustomerForm.value);
            this.logicalFormInfoService.addCustomer(this.addCustomerForm.value).subscribe(function (res) {
              console.log(res);

              _this26.dialogRef.close('ok');
            });
          }
        }]);

        return AddingCustComponent;
      }();

      AddingCustComponent.ɵfac = function AddingCustComponent_Factory(t) {
        return new (t || AddingCustComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_3__["LogicalFormInfoService"]));
      };

      AddingCustComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddingCustComponent,
        selectors: [["app-adding-cust"]],
        decls: 25,
        vars: 1,
        consts: [[1, "content"], [1, "container", "px-4", "py-4", "bg-white", 3, "formGroup"], [1, "row"], [1, "my-3", "col"], ["for", "exampleFormControlInput1", 1, "form-Label"], ["type", "text", "id", "siteName", "formControlName", "customerName", 1, "form-control"], ["type", "text", "id", "siteName", "formControlName", "customerContact", 1, "form-control"], ["type", "text", "id", "siteName", "formControlName", "customerContactPhone", 1, "form-control"], ["type", "text", "id", "siteName", "formControlName", "customerEmail", 1, "form-control"], [1, "btn", "btn-primary", 3, "click"]],
        template: function AddingCustComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add Customer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Customer Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Customer Contact");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Customer Contact Phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Customer Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddingCustComponent_Template_button_click_23_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Submit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addCustomerForm);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGRpbmctY3VzdC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddingCustComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-adding-cust',
            templateUrl: './adding-cust.component.html',
            styleUrls: ['./adding-cust.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_3__["LogicalFormInfoService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "V+lG": function VLG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CodeOfPractComponent", function () {
        return CodeOfPractComponent;
      });
      /* harmony import */


      var _edit_cop_edit_cop_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./edit-cop/edit-cop.component */
      "VpO3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/paginator */
      "5QHs");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/table */
      "OaSA");
      /* harmony import */


      var src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/utils/services/logical-form-info.service */
      "wbBK");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/utils/services/set-title.service */
      "yZxC");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      function CodeOfPractComponent_th_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function CodeOfPractComponent_td_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r10.index);
        }
      }

      function CodeOfPractComponent_th_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function CodeOfPractComponent_td_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r11.title, " ");
        }
      }

      function CodeOfPractComponent_th_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Edit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function CodeOfPractComponent_td_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CodeOfPractComponent_td_16_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);

            var element_r12 = ctx.$implicit;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r13.edit(element_r12);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function CodeOfPractComponent_th_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Delete ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function CodeOfPractComponent_td_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CodeOfPractComponent_td_19_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);

            var element_r15 = ctx.$implicit;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r16["delete"](element_r15);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function CodeOfPractComponent_tr_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 21);
        }
      }

      function CodeOfPractComponent_tr_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 22);
        }
      }

      var _c0 = function _c0() {
        return ["/admin/siteInfo/addCOP"];
      };

      var _c1 = function _c1() {
        return [5, 10, 20];
      };

      var CodeOfPractComponent = /*#__PURE__*/function () {
        /////////////mat table end////////////////
        function CodeOfPractComponent(logicalFormInfo, dialog, setTitle) {
          _classCallCheck(this, CodeOfPractComponent);

          this.logicalFormInfo = logicalFormInfo;
          this.dialog = dialog;
          this.setTitle = setTitle;
          this.jobTaskData = [];
          this.ELEMENT_DATA = []; /////////////mat table////////////////

          this.displayedColumns = ['index', 'title', 'edit', 'delete'];
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.ELEMENT_DATA);
        }

        _createClass(CodeOfPractComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.dataSource.paginator = this.paginator;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getAllCodeOfPractice();
            this.setTitle.setTitle('WHS-Code of Practice');
          }
        }, {
          key: "getAllCodeOfPractice",
          value: function getAllCodeOfPractice() {
            var _this27 = this;

            this.logicalFormInfo.getAllCOP().subscribe(function (res) {
              console.log('codeOfPractice=>', res); // this.jobTaskData = res.data[0].subComponents;

              var data = res.data;
              data.forEach(function (element, index) {
                element.index = index + 1; //adding index
              });
              _this27.ELEMENT_DATA = data;
              _this27.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this27.ELEMENT_DATA);
              _this27.dataSource.paginator = _this27.paginator; //  this.task = res.data.subComponents;
            });
          }
        }, {
          key: "edit",
          value: function edit(element) {
            var _this28 = this;

            var dialogRef = this.dialog.open(_edit_cop_edit_cop_component__WEBPACK_IMPORTED_MODULE_0__["EditCOPComponent"], {
              width: "550px",
              data: element
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result == "true") {
                _this28.getAllCodeOfPractice();
              }

              console.log("The dialog was closed");
            });
          }
        }, {
          key: "delete",
          value: function _delete(item) {
            var _this29 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
              title: 'Are you sure?',
              text: "Do you want to delete \"".concat(item.title, "\"?"),
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#00B96F',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, Delete!'
            }).then(function (result) {
              if (result.value) {
                _this29.logicalFormInfo.deleteCOP(item._id).subscribe(function (res) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    title: 'Parameter Deleted successfully',
                    showConfirmButton: false,
                    timer: 1200
                  });

                  _this29.getAllCodeOfPractice();
                });
              }
            });
          }
        }]);

        return CodeOfPractComponent;
      }();

      CodeOfPractComponent.ɵfac = function CodeOfPractComponent_Factory(t) {
        return new (t || CodeOfPractComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_5__["LogicalFormInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_7__["SetTitleService"]));
      };

      CodeOfPractComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: CodeOfPractComponent,
        selectors: [["app-code-of-pract"]],
        viewQuery: function CodeOfPractComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          }
        },
        decls: 23,
        vars: 7,
        consts: [[1, "ml-2"], [1, "col", "ml-2", "mb-2"], [1, "btn", "btn-outline-primary", "mt-1", "mr-2", "float-right", 3, "routerLink"], [1, "fas", "fa-folder-plus", "mr-2"], [1, "mat-elevation-z8", "ml-2"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "index"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "title"], ["matColumnDef", "edit"], ["mat-cell", "", 3, "click", 4, "matCellDef"], ["matColumnDef", "delete"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", "aria-label", "Select page of periodic elements", 3, "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", 3, "click"], [1, "fas", "fa-pencil-alt"], [1, "fas", "fa-trash"], ["mat-header-row", ""], ["mat-row", ""]],
        template: function CodeOfPractComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Code Of Practice List");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Add Code Of Practice ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "table", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](8, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, CodeOfPractComponent_th_9_Template, 2, 0, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CodeOfPractComponent_td_10_Template, 2, 1, "td", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](11, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, CodeOfPractComponent_th_12_Template, 2, 0, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, CodeOfPractComponent_td_13_Template, 2, 1, "td", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](14, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, CodeOfPractComponent_th_15_Template, 2, 0, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, CodeOfPractComponent_td_16_Template, 2, 0, "td", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](17, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, CodeOfPractComponent_th_18_Template, 2, 0, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, CodeOfPractComponent_td_19_Template, 2, 0, "td", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, CodeOfPractComponent_tr_20_Template, 1, 0, "tr", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, CodeOfPractComponent_tr_21_Template, 1, 0, "tr", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "mat-paginator", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c1));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"]],
        styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjb2RlLW9mLXByYWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKIiwiZmlsZSI6ImNvZGUtb2YtcHJhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CodeOfPractComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-code-of-pract',
            templateUrl: './code-of-pract.component.html',
            styleUrls: ['./code-of-pract.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_5__["LogicalFormInfoService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
          }, {
            type: src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_7__["SetTitleService"]
          }];
        }, {
          paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]]
          }]
        });
      })();
      /***/

    },

    /***/
    "VpO3": function VpO3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditCOPComponent", function () {
        return EditCOPComponent;
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


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/utils/services/logical-form-info.service */
      "wbBK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");

      var EditCOPComponent = /*#__PURE__*/function () {
        function EditCOPComponent(fb, logicalFormInfo, dialogRef, data) {
          _classCallCheck(this, EditCOPComponent);

          this.fb = fb;
          this.logicalFormInfo = logicalFormInfo;
          this.dialogRef = dialogRef;
          this.data = data;
          this.dataRec = data;
        }

        _createClass(EditCOPComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.editTitle = this.fb.group({
              title: [this.dataRec.title, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
          }
        }, {
          key: "onFormSubmit",
          value: function onFormSubmit() {
            var _this30 = this;

            var data = {
              title: this.editTitle.get('title').value
            };
            this.logicalFormInfo.updateCOP(data, this.dataRec._id).subscribe(function (resData) {
              console.log('resData', resData);

              _this30.dialogRef.close('true');

              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: 'Parameter Edited successfully',
                showConfirmButton: false,
                timer: 1200
              });
            });
          }
        }, {
          key: "closeDialog",
          value: function closeDialog() {
            this.dialogRef.close('false');
          }
        }]);

        return EditCOPComponent;
      }();

      EditCOPComponent.ɵfac = function EditCOPComponent_Factory(t) {
        return new (t || EditCOPComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__["LogicalFormInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]));
      };

      EditCOPComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EditCOPComponent,
        selectors: [["app-edit-cop"]],
        decls: 12,
        vars: 2,
        consts: [[3, "formGroup"], ["appearance", "legacy", 1, "example-full-width", 2, "width", "498px"], ["matInput", "", "formControlName", "title", 2, "text-transform", "capitalize !important"], [1, "row"], [1, "col-sm-2", "offset-8"], ["mat-raised-button", "", 3, "click"], [1, "col-sm-2"], ["mat-raised-button", "", 3, "disabled", "click"]],
        template: function EditCOPComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Edit Code Of Practice");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditCOPComponent_Template_button_click_7_listener() {
              return ctx.closeDialog();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditCOPComponent_Template_button_click_10_listener() {
              return ctx.onFormSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.editTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.editTitle.valid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWNvcC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditCOPComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-edit-cop',
            templateUrl: './edit-cop.component.html',
            styleUrls: ['./edit-cop.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__["LogicalFormInfoService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "X72n": function X72n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddJobTaskComponent", function () {
        return AddJobTaskComponent;
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


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/utils/services/logical-form-info.service */
      "wbBK");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "SVse");

      function AddJobTaskComponent_ng_container_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddJobTaskComponent_ng_container_9_Template_span_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.addAction();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "add_circle_outline ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddJobTaskComponent_ng_container_9_Template_span_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var i_r2 = ctx.index;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.removeSafetyModule(i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " remove_circle_outline ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r2 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", i_r2 + 1, ". ");
        }
      }

      var _c0 = function _c0() {
        return ["/admin/siteInfo/jobTask"];
      };

      var AddJobTaskComponent = /*#__PURE__*/function () {
        function AddJobTaskComponent(fb, router, logicalFormInfo) {
          _classCallCheck(this, AddJobTaskComponent);

          this.fb = fb;
          this.router = router;
          this.logicalFormInfo = logicalFormInfo;
          this.jobTaskDetails = this.fb.group({
            // mode:"JobTask",
            arrObj: this.fb.array([])
          });
        }

        _createClass(AddJobTaskComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.addAction();
          }
        }, {
          key: "addAction",
          value: function addAction() {
            {
              this.add().push(this.newAction());
            }
          }
        }, {
          key: "add",
          value: function add() {
            return this.jobTaskDetails.get('arrObj');
          }
        }, {
          key: "newAction",
          value: function newAction() {
            return this.fb.group({
              title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
          }
        }, {
          key: "removeSafetyModule",
          value: function removeSafetyModule(i) {
            var item = this.jobTaskDetails.controls['arrObj'];

            if (item.length > 1) {
              item.removeAt(i);
            }
          }
        }, {
          key: "onFormSubmit",
          value: function onFormSubmit() {
            var _this31 = this;

            console.log(this.jobTaskDetails.get('arrObj').value);
            var data = {
              arrObj: this.jobTaskDetails.get('arrObj').value
            };
            this.logicalFormInfo.addMultipleJobTask(data).subscribe(function (data) {
              console.log('JOBTask=>', data);
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: 'Parameter Added successfully',
                showConfirmButton: false,
                timer: 1200
              });

              _this31.router.navigate(['/admin/siteInfo/jobTask']);
            }, function (err) {
              console.error(err);
            });
          }
        }]);

        return AddJobTaskComponent;
      }();

      AddJobTaskComponent.ɵfac = function AddJobTaskComponent_Factory(t) {
        return new (t || AddJobTaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__["LogicalFormInfoService"]));
      };

      AddJobTaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddJobTaskComponent,
        selectors: [["app-add-job-task"]],
        decls: 14,
        vars: 5,
        consts: [[1, "btn", "btn-outline-primary", 3, "routerLink"], ["aria-hidden", "true", 1, "fa", "fa-arrow-left"], [1, "container", "px-4", "py-4", "bg-white"], [3, "formGroup", "ngSubmit"], [1, "text-center"], ["formArrayName", "arrObj"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "col-md-2"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [3, "formGroupName"], [1, "row", "justify-content-center"], [1, "mr-1", "mt-2"], [1, "col-8"], ["type", "text", "formControlName", "title", "id", "name", 1, "form-control", "sign"], [1, "col-1", "mt-2"], [1, "material-icons", 3, "click"]],
        template: function AddJobTaskComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddJobTaskComponent_Template_form_ngSubmit_3_listener() {
              return ctx.onFormSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add Job Task");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AddJobTaskComponent_ng_container_9_Template, 14, 2, "ng-container", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.jobTaskDetails);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.add().controls);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.jobTaskDetails.get("arrObj").invalid);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtam9iLXRhc2suY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddJobTaskComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-add-job-task',
            templateUrl: './add-job-task.component.html',
            styleUrls: ['./add-job-task.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__["LogicalFormInfoService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "czur": function czur(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddLicenceComponent", function () {
        return AddLicenceComponent;
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


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/utils/services/logical-form-info.service */
      "wbBK");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "SVse");

      function AddLicenceComponent_ng_container_9_option_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var category_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", category_r4._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r4.title);
        }
      }

      function AddLicenceComponent_ng_container_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "select", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Select category");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AddLicenceComponent_ng_container_9_option_11_Template, 2, 2, "option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddLicenceComponent_ng_container_9_Template_span_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.addAction();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "add_circle_outline ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddLicenceComponent_ng_container_9_Template_span_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var i_r2 = ctx.index;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.removeSafetyModule(i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " remove_circle_outline ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r2 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", i_r2 + 1, ". ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.categories);
        }
      }

      var _c0 = function _c0() {
        return ["/admin/siteInfo/licenceAndQual"];
      };

      var AddLicenceComponent = /*#__PURE__*/function () {
        function AddLicenceComponent(fb, router, logicalFormInfo) {
          _classCallCheck(this, AddLicenceComponent);

          this.fb = fb;
          this.router = router;
          this.logicalFormInfo = logicalFormInfo;
          this.categories = [];
          this.addLicenceFG = this.fb.group({
            // mode:"JobTask",
            arrObj: this.fb.array([])
          });
        }

        _createClass(AddLicenceComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.addAction();
            this.getAllLicenceCat();
          }
        }, {
          key: "addAction",
          value: function addAction() {
            {
              this.add().push(this.newAction());
            }
          }
        }, {
          key: "add",
          value: function add() {
            return this.addLicenceFG.get('arrObj');
          }
        }, {
          key: "newAction",
          value: function newAction() {
            return this.fb.group({
              title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              licenceCategoryId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
          }
        }, {
          key: "removeSafetyModule",
          value: function removeSafetyModule(i) {
            var item = this.addLicenceFG.controls['arrObj'];

            if (item.length > 1) {
              item.removeAt(i);
            }
          }
        }, {
          key: "getAllLicenceCat",
          value: function getAllLicenceCat() {
            var _this32 = this;

            this.logicalFormInfo.getAllLicenceCat().subscribe(function (res) {
              console.log('getAllLicenceCat=>', res);
              _this32.categories = res.data;
            });
          }
        }, {
          key: "onFormSubmit",
          value: function onFormSubmit() {
            var _this33 = this;

            var data = {
              arrObj: this.addLicenceFG.get('arrObj').value
            };
            console.log("data li cat", data);
            this.logicalFormInfo.addMultipleLicence(data).subscribe(function (res) {
              console.log('licence=>', res);
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: 'Parameter added successfully',
                showConfirmButton: false,
                timer: 1200
              });

              _this33.router.navigate(['/admin/siteInfo/licenceAndQual']);
            }, function (err) {
              console.error(err);
            });
          }
        }]);

        return AddLicenceComponent;
      }();

      AddLicenceComponent.ɵfac = function AddLicenceComponent_Factory(t) {
        return new (t || AddLicenceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__["LogicalFormInfoService"]));
      };

      AddLicenceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddLicenceComponent,
        selectors: [["app-add-licence"]],
        decls: 14,
        vars: 5,
        consts: [[1, "btn", "btn-outline-primary", 3, "routerLink"], ["aria-hidden", "true", 1, "fa", "fa-arrow-left"], [1, "container", "px-4", "py-4", "bg-white"], [3, "formGroup", "ngSubmit"], [1, "text-center"], ["formArrayName", "arrObj"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "col-md-2"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [3, "formGroupName"], [1, "row", "justify-content-center"], [1, "mr-1", "mt-2"], [1, "col-4"], ["type", "text", "formControlName", "title", "id", "name", "placeholder", "Licence Name", 1, "form-control", "sign"], ["formControlName", "licenceCategoryId", "aria-label", "Default select example", 1, "form-select", "form-control"], ["value", "", "selected", "", "hidden", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-1", "mt-2"], [1, "material-icons", 3, "click"], [3, "value"]],
        template: function AddLicenceComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddLicenceComponent_Template_form_ngSubmit_3_listener() {
              return ctx.onFormSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add Licence");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AddLicenceComponent_ng_container_9_Template, 19, 3, "ng-container", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addLicenceFG);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.add().controls);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.addLicenceFG.get("arrObj").invalid);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtbGljZW5jZS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddLicenceComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-add-licence',
            templateUrl: './add-licence.component.html',
            styleUrls: ['./add-licence.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__["LogicalFormInfoService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "eyvP": function eyvP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SiteInfoComponent", function () {
        return SiteInfoComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../utils/services/set-title.service */
      "yZxC");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      var SiteInfoComponent = /*#__PURE__*/function () {
        function SiteInfoComponent(setTitle) {
          _classCallCheck(this, SiteInfoComponent);

          this.setTitle = setTitle;
        }

        _createClass(SiteInfoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setTitle.setTitle('WHS-Site Info');
          }
        }]);

        return SiteInfoComponent;
      }();

      SiteInfoComponent.ɵfac = function SiteInfoComponent_Factory(t) {
        return new (t || SiteInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_1__["SetTitleService"]));
      };

      SiteInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SiteInfoComponent,
        selectors: [["app-site-info"]],
        decls: 1,
        vars: 0,
        template: function SiteInfoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaXRlLWluZm8uY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SiteInfoComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-site-info',
            templateUrl: './site-info.component.html',
            styleUrls: ['./site-info.component.scss']
          }]
        }], function () {
          return [{
            type: _utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_1__["SetTitleService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "fKBH": function fKBH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditPPEComponent", function () {
        return EditPPEComponent;
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


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/utils/services/logical-form-info.service */
      "wbBK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");

      var EditPPEComponent = /*#__PURE__*/function () {
        function EditPPEComponent(fb, logicalFormInfo, dialogRef, data) {
          _classCallCheck(this, EditPPEComponent);

          this.fb = fb;
          this.logicalFormInfo = logicalFormInfo;
          this.dialogRef = dialogRef;
          this.data = data;
          this.dataRec = data;
        }

        _createClass(EditPPEComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.editTitle = this.fb.group({
              title: [this.dataRec.title, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
          }
        }, {
          key: "onFormSubmit",
          value: function onFormSubmit() {
            var _this34 = this;

            var data = {
              title: this.editTitle.get('title').value
            };
            this.logicalFormInfo.updatePPE(data, this.dataRec._id).subscribe(function (resData) {
              console.log('resData', resData);

              _this34.dialogRef.close('true');

              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: 'Parameter Updated successfully',
                showConfirmButton: false,
                timer: 1200
              });
            });
          }
        }, {
          key: "closeDialog",
          value: function closeDialog() {
            this.dialogRef.close('false');
          }
        }]);

        return EditPPEComponent;
      }();

      EditPPEComponent.ɵfac = function EditPPEComponent_Factory(t) {
        return new (t || EditPPEComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__["LogicalFormInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]));
      };

      EditPPEComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EditPPEComponent,
        selectors: [["app-edit-ppe"]],
        decls: 12,
        vars: 2,
        consts: [[3, "formGroup"], ["appearance", "legacy", 1, "example-full-width", 2, "width", "498px"], ["matInput", "", "formControlName", "title", 2, "text-transform", "capitalize !important"], [1, "row"], [1, "col-sm-2", "offset-8"], ["mat-raised-button", "", 3, "click"], [1, "col-sm-2"], ["mat-raised-button", "", 3, "disabled", "click"]],
        template: function EditPPEComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit PPE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditPPEComponent_Template_button_click_7_listener() {
              return ctx.closeDialog();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditPPEComponent_Template_button_click_10_listener() {
              return ctx.onFormSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Update");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.editTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.editTitle.valid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXBwZS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditPPEComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-edit-ppe',
            templateUrl: './edit-ppe.component.html',
            styleUrls: ['./edit-ppe.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__["LogicalFormInfoService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "i6cX": function i6cX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddLicenceCatComponent", function () {
        return AddLicenceCatComponent;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/utils/services/logical-form-info.service */
      "wbBK");

      var AddLicenceCatComponent = /*#__PURE__*/function () {
        function AddLicenceCatComponent(fb, router, logicalFormInfo) {
          _classCallCheck(this, AddLicenceCatComponent);

          this.fb = fb;
          this.router = router;
          this.logicalFormInfo = logicalFormInfo;
          this.addLicenceCatFG = this.fb.group({
            // mode:"JobTask",
            arrObj: this.fb.array([])
          });
        }

        _createClass(AddLicenceCatComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.addAction();
          }
        }, {
          key: "addAction",
          value: function addAction() {
            {
              this.add().push(this.newAction());
            }
          }
        }, {
          key: "add",
          value: function add() {
            return this.addLicenceCatFG.get('arrObj');
          }
        }, {
          key: "newAction",
          value: function newAction() {
            return this.fb.group({
              title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
          }
        }, {
          key: "removeSafetyModule",
          value: function removeSafetyModule(i) {
            var item = this.addLicenceCatFG.controls['arrObj'];

            if (item.length > 1) {
              item.removeAt(i);
            }
          }
        }, {
          key: "onFormSubmit",
          value: function onFormSubmit() {
            var _this35 = this;

            var data = {
              arrObj: this.addLicenceCatFG.get('arrObj').value
            };
            this.logicalFormInfo.addLicenceCat(data).subscribe(function (data) {
              console.log('JOBTask=>', data);

              _this35.router.navigate(['/admin/siteInfo/licenceCat']);
            }, function (err) {
              console.error(err);
            });
          }
        }]);

        return AddLicenceCatComponent;
      }();

      AddLicenceCatComponent.ɵfac = function AddLicenceCatComponent_Factory(t) {
        return new (t || AddLicenceCatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_3__["LogicalFormInfoService"]));
      };

      AddLicenceCatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddLicenceCatComponent,
        selectors: [["app-add-licence-cat"]],
        decls: 0,
        vars: 0,
        template: function AddLicenceCatComponent_Template(rf, ctx) {},
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtbGljZW5jZS1jYXQuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddLicenceCatComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-add-licence-cat',
            templateUrl: './add-licence-cat.component.html',
            styleUrls: ['./add-licence-cat.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_3__["LogicalFormInfoService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "iXE9": function iXE9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HighRiskConComponent", function () {
        return HighRiskConComponent;
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


      var _edit_high_risk_construction_edit_high_risk_construction_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./edit-high-risk-construction/edit-high-risk-construction.component */
      "ocAX");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/paginator */
      "5QHs");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/table */
      "OaSA");
      /* harmony import */


      var src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/utils/services/logical-form-info.service */
      "wbBK");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-spinner */
      "7g+E");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/utils/services/set-title.service */
      "yZxC");

      function HighRiskConComponent_th_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HighRiskConComponent_td_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r10.index);
        }
      }

      function HighRiskConComponent_th_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HighRiskConComponent_td_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r11.title, " ");
        }
      }

      function HighRiskConComponent_th_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Edit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HighRiskConComponent_td_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HighRiskConComponent_td_16_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var element_r12 = ctx.$implicit;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.edit(element_r12);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HighRiskConComponent_th_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Delete ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HighRiskConComponent_td_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HighRiskConComponent_td_19_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

            var element_r15 = ctx.$implicit;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r16["delete"](element_r15);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HighRiskConComponent_tr_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 21);
        }
      }

      function HighRiskConComponent_tr_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 22);
        }
      }

      var _c0 = function _c0() {
        return ["/admin/siteInfo/addHighRisk"];
      };

      var _c1 = function _c1() {
        return [5, 10, 20];
      };

      var HighRiskConComponent = /*#__PURE__*/function () {
        function HighRiskConComponent(logicalFormInfo, dialog, spinner, router, setTitle) {
          _classCallCheck(this, HighRiskConComponent);

          this.logicalFormInfo = logicalFormInfo;
          this.dialog = dialog;
          this.spinner = spinner;
          this.router = router;
          this.setTitle = setTitle;
          this.highRiskConstructionData = [];
          this.isEdit = false;
          this.Edit = false;
          this.Add = false;
          this.collectionSize = 10;
          this.hide = false;
          this.componentId = '';
          this.ELEMENT_DATA = []; /////////////mat table////////////////

          this.displayedColumns = ['index', 'title', 'edit', 'delete'];
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.ELEMENT_DATA);
        }

        _createClass(HighRiskConComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getAllHighRisk();
            this.setTitle.setTitle('WHS-High Risk Construction List');
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.dataSource.paginator = this.paginator;
          } // onFormSubmit() {
          //   console.log(this.riskDetails);
          //   this.logicalFormInfo
          //     .addFormData(this.riskDetails.getRawValue())
          //     .subscribe((data) => {
          //       console.log('risk=>', data);
          //       this.formData = data;
          //     });
          // }
          // getAllHighRisk() {
          //   this.mode = 'Risk';
          //   this.logicalFormInfo.getFormDataById(this.mode).subscribe((res) => {
          //     console.log('riskDetails data=>', res);
          //     this.componentId = res.data[0]._id;
          //     this.highRiskConstructionData = res.data[0];
          //     console.log('highRiskConstructionData', this.highRiskConstructionData);
          //   });
          // }
          // editTask(title,id, i) {
          //   console.log('id', id);
          //   this.myId = id;
          //   this.isEdit = true;
          //   this.mode = 'Risk';
          //   let dialogRef = this.dialog.open(EditHighRiskConstructionComponent, {
          //     data: {        
          //       EditData: id,
          //       componentId: this.componentId,
          //       index: i,
          //       title:title
          //       // moduleName: name,
          //     },
          //     width: '1000px',
          //     height: '500px',
          //   });
          //   dialogRef.afterClosed().subscribe((result) => {
          //     console.log('-> openDialog -> result', result);
          //     if ((result = 'true')) {
          //       this.getAllHighRisk();
          //     }
          //     console.log('The dialog was closed');
          //   });
          // }
          // addTask() {
          //   let dialogRef = this.dialog.open(AddHighRiskConstructionComponent, {
          //     data: {
          //       action: 'new',
          //       EditData: this.componentId,
          //     },
          //     width: '600px',
          //     height: '400px',
          //   });
          //   dialogRef.afterClosed().subscribe((result) => {
          //     console.log('openDialog->result', result);
          //     if ((result = 'true')) {
          //       this.getAllHighRisk();
          //     }
          //   });
          // }
          // deleteopen(content, id) {
          //   console.log('deleteopen close id=>', id);
          //   this.Is_id = id;
          //   this.modalService
          //     .open(content, { ariaLabelledBy: 'modal-basic-title' })
          //     .result.then(
          //       (result) => {
          //         this.closeResult = `Closed with: ${result}`;
          //         console.log('deleting');
          //         this.logicalFormInfo
          //           .deleteSubComponent(this.Is_id)
          //           .subscribe((res) => {
          //             Swal.fire('Deleted Successfully');
          //             console.log('deleted res', res);
          //             this.getAllHighRisk();
          //           });
          //       },
          //       (reason) => {
          //         this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          //         console.log('dismissed');
          //       }
          //     );
          // }
          // delete(item) {
          //   Swal.fire({
          //     title: 'Are you sure?',
          //     text: `Do you want to delete "${item}"?`,
          //     icon: 'warning',
          //     showCancelButton: true,
          //     confirmButtonColor: '#00B96F',
          //     cancelButtonColor: '#d33',
          //     confirmButtonText: 'Yes, Delete!',
          //   }).then((result) => {
          //     if (result.value) {
          //     }
          //   });
          // }
          // private getDismissReason(reason: any): string {
          //   if (reason === ModalDismissReasons.ESC) {
          //     return 'by pressing ESC';
          //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
          //     return 'by clicking on a backdrop';
          //   } else {
          //     return `with: ${reason}`;
          //   }
          // }

        }, {
          key: "getAllHighRisk",
          value: function getAllHighRisk() {
            var _this36 = this;

            this.logicalFormInfo.getAllRisk().subscribe(function (res) {
              console.log('Risk=>', res); // this.jobTaskData = res.data[0].subComponents;

              var data = res.data;
              data.forEach(function (element, index) {
                element.index = index + 1; //adding index
              });
              _this36.ELEMENT_DATA = data;
              _this36.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this36.ELEMENT_DATA);
              _this36.dataSource.paginator = _this36.paginator; //  this.task = res.data.subComponents;
            });
          }
        }, {
          key: "edit",
          value: function edit(element) {
            var _this37 = this;

            var dialogRef = this.dialog.open(_edit_high_risk_construction_edit_high_risk_construction_component__WEBPACK_IMPORTED_MODULE_2__["EditHighRiskConstructionComponent"], {
              width: "550px",
              data: element
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result == "true") {
                _this37.getAllHighRisk();
              }

              console.log("The dialog was closed");
            });
          }
        }, {
          key: "delete",
          value: function _delete(item) {
            var _this38 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
              title: 'Are you sure?',
              text: "Do you want to delete \"".concat(item.title, "\"?"),
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#00B96F',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, Delete!'
            }).then(function (result) {
              if (result.value) {
                _this38.logicalFormInfo.deleteRisk(item._id).subscribe(function (res) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    title: 'Parameter Deleted successfully',
                    showConfirmButton: false,
                    timer: 1200
                  });
                  console.log('deleted res', res);

                  _this38.getAllHighRisk();
                });
              }
            });
          }
        }]);

        return HighRiskConComponent;
      }();

      HighRiskConComponent.ɵfac = function HighRiskConComponent_Factory(t) {
        return new (t || HighRiskConComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_5__["LogicalFormInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_9__["SetTitleService"]));
      };

      HighRiskConComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HighRiskConComponent,
        selectors: [["app-high-risk-con"]],
        viewQuery: function HighRiskConComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          }
        },
        decls: 23,
        vars: 7,
        consts: [[1, "ml-2"], [1, "col", "ml-2", "mb-2"], [1, "btn", "btn-outline-primary", "mt-1", "mr-2", "float-right", 3, "routerLink"], [1, "fas", "fa-folder-plus", "mr-2"], [1, "mat-elevation-z8", "ml-2"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "index"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "title"], ["matColumnDef", "edit"], ["mat-cell", "", 3, "click", 4, "matCellDef"], ["matColumnDef", "delete"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", "aria-label", "Select page of periodic elements", 3, "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", 3, "click"], [1, "fas", "fa-pencil-alt"], [1, "fas", "fa-trash"], ["mat-header-row", ""], ["mat-row", ""]],
        template: function HighRiskConComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "High Risk List");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add High Risk ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HighRiskConComponent_th_9_Template, 2, 0, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HighRiskConComponent_td_10_Template, 2, 1, "td", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HighRiskConComponent_th_12_Template, 2, 0, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HighRiskConComponent_td_13_Template, 2, 1, "td", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HighRiskConComponent_th_15_Template, 2, 0, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HighRiskConComponent_td_16_Template, 2, 0, "td", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, HighRiskConComponent_th_18_Template, 2, 0, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, HighRiskConComponent_td_19_Template, 2, 0, "td", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, HighRiskConComponent_tr_20_Template, 1, 0, "tr", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, HighRiskConComponent_tr_21_Template, 1, 0, "tr", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "mat-paginator", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"]],
        styles: ["abel[_ngcontent-%COMP%]:not(.form-check-label):not(.custom-file-label) {\n  font-weight: 500;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  border: 2px solid dodgerblue;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 500;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n}\n\n.form-control[_ngcontent-%COMP%]:hover {\n  border-color: rgba(46, 105, 255, 0.5);\n  box-shadow: 0 0 0 2px rgba(46, 105, 255, 0.25);\n}\n\n.pt-3[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 32px;\n  font-weight: 700;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n}\n\n.container[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.form-Label[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 500;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n  width: 100%;\n  margin-left: 2px;\n  margin-bottom: 14px;\n}\n\n.sign[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid rgba(46, 105, 255, 0.5);\n  width: 500px;\n  border-radius: 5px;\n}\n\n.sign[_ngcontent-%COMP%]:hover {\n  border: 1px solid;\n  border-color: #2e69ff40;\n  box-shadow: 0 0 0 3px rgba(46, 105, 255, 0.25);\n}\n\n.imgStyle[_ngcontent-%COMP%] {\n  border: 2px solid #2e69ff40;\n  border-radius: 10px;\n}\n\n.example-additional-selection[_ngcontent-%COMP%] {\n  opacity: 0.75;\n  font-size: 0.75em;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxoaWdoLXJpc2stY29uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFDQTtFQUNFLDRCQUFBO0FBRUY7O0FBQUE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFHRjs7QUFEQTtFQUNFLHFDQUFBO0VBQ0EsOENBQUE7QUFJRjs7QUFGQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQUtGOztBQUhBO0VBQ0UsdUJBQUE7QUFNRjs7QUFKQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBT0Y7O0FBTEE7RUFDRSxhQUFBO0VBQ0EseUNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFRRjs7QUFOQTtFQUNFLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSw4Q0FBQTtBQVNGOztBQU5BO0VBQ0UsMkJBQUE7RUFDQSxtQkFBQTtBQVNGOztBQVBBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0FBVUY7O0FBUkE7RUFDRSxXQUFBO0FBV0YiLCJmaWxlIjoiaGlnaC1yaXNrLWNvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFiZWw6bm90KC5mb3JtLWNoZWNrLWxhYmVsKTpub3QoLmN1c3RvbS1maWxlLWxhYmVsKSB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5pbnB1dDpmb2N1cyB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgZG9kZ2VyYmx1ZTtcclxufVxyXG5sYWJlbCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgZm9udC1mYW1pbHk6IEludGVyLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5mb3JtLWNvbnRyb2w6aG92ZXIge1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSg0NiwgMTA1LCAyNTUsIDAuNSk7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHJnYig0NiAxMDUgMjU1IC8gMjUlKTtcclxufVxyXG4ucHQtMyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgZm9udC1mYW1pbHk6IEludGVyLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi5mb3JtLUxhYmVsIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICBmb250LWZhbWlseTogSW50ZXIsIHNhbnMtc2VyaWY7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xyXG59XHJcbi5zaWduIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNDYsIDEwNSwgMjU1LCAwLjUpO1xyXG4gIHdpZHRoOiA1MDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLnNpZ246aG92ZXIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gIGJvcmRlci1jb2xvcjogIzJlNjlmZjQwO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2IoNDYsIDEwNSwgMjU1LCAwLjI1KTtcclxufVxyXG5cclxuLmltZ1N0eWxlIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMmU2OWZmNDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4uZXhhbXBsZS1hZGRpdGlvbmFsLXNlbGVjdGlvbiB7XHJcbiAgb3BhY2l0eTogMC43NTtcclxuICBmb250LXNpemU6IDAuNzVlbTtcclxufVxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HighRiskConComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-high-risk-con',
            templateUrl: './high-risk-con.component.html',
            styleUrls: ['./high-risk-con.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_5__["LogicalFormInfoService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
          }, {
            type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
          }, {
            type: src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_9__["SetTitleService"]
          }];
        }, {
          paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]]
          }]
        });
      })();
      /***/

    },

    /***/
    "joJy": function joJy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddPPEComponent", function () {
        return AddPPEComponent;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/utils/services/logical-form-info.service */
      "wbBK");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "SVse");

      function AddPPEComponent_ng_container_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddPPEComponent_ng_container_9_Template_span_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.addAction();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "add_circle_outline ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddPPEComponent_ng_container_9_Template_span_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var i_r2 = ctx.index;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.removeSafetyModule(i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " remove_circle_outline ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r2 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", i_r2 + 1, ". ");
        }
      }

      var _c0 = function _c0() {
        return ["/admin/siteInfo/ppeSel"];
      };

      var AddPPEComponent = /*#__PURE__*/function () {
        function AddPPEComponent(fb, router, logicalFormInfo) {
          _classCallCheck(this, AddPPEComponent);

          this.fb = fb;
          this.router = router;
          this.logicalFormInfo = logicalFormInfo;
          this.PPEformgp = this.fb.group({
            // mode:"JobTask",
            arrObj: this.fb.array([])
          });
        }

        _createClass(AddPPEComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.addAction();
          }
        }, {
          key: "addAction",
          value: function addAction() {
            {
              this.add().push(this.newAction());
            }
          }
        }, {
          key: "add",
          value: function add() {
            return this.PPEformgp.get('arrObj');
          }
        }, {
          key: "newAction",
          value: function newAction() {
            return this.fb.group({
              title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
          }
        }, {
          key: "removeSafetyModule",
          value: function removeSafetyModule(i) {
            var item = this.PPEformgp.controls['arrObj'];

            if (item.length > 1) {
              item.removeAt(i);
            }
          }
        }, {
          key: "onFormSubmit",
          value: function onFormSubmit() {
            var _this39 = this;

            console.log(this.PPEformgp.value);
            var data = {
              arrObj: this.PPEformgp.get('arrObj').value
            };
            this.logicalFormInfo.addMultiplePPE(data).subscribe(function (data) {
              console.log('PPE=>', data);

              _this39.router.navigate(['/admin/siteInfo/ppeSel']);
            }, function (err) {
              console.error(err);
            });
          }
        }]);

        return AddPPEComponent;
      }();

      AddPPEComponent.ɵfac = function AddPPEComponent_Factory(t) {
        return new (t || AddPPEComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_3__["LogicalFormInfoService"]));
      };

      AddPPEComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddPPEComponent,
        selectors: [["app-add-ppe"]],
        decls: 14,
        vars: 5,
        consts: [[1, "btn", "btn-outline-primary", 3, "routerLink"], ["aria-hidden", "true", 1, "fa", "fa-arrow-left"], [1, "container", "px-4", "py-4", "bg-white"], [3, "formGroup", "ngSubmit"], [1, "text-center"], ["formArrayName", "arrObj"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "col-md-2"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [3, "formGroupName"], [1, "row", "justify-content-center"], [1, "mr-1", "mt-2"], [1, "col-8"], ["type", "text", "formControlName", "title", "id", "name", 1, "form-control", "sign"], [1, "col-1", "mt-2"], [1, "material-icons", 3, "click"]],
        template: function AddPPEComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddPPEComponent_Template_form_ngSubmit_3_listener() {
              return ctx.onFormSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add PPE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AddPPEComponent_ng_container_9_Template, 14, 2, "ng-container", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.PPEformgp);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.add().controls);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.PPEformgp.get("arrObj").invalid);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtcHBlLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddPPEComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-add-ppe',
            templateUrl: './add-ppe.component.html',
            styleUrls: ['./add-ppe.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_3__["LogicalFormInfoService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "kBda": function kBda(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditHazardComponent", function () {
        return EditHazardComponent;
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


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/utils/services/logical-form-info.service */
      "wbBK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");

      var EditHazardComponent = /*#__PURE__*/function () {
        function EditHazardComponent(fb, logicalFormInfo, dialogRef, data) {
          _classCallCheck(this, EditHazardComponent);

          this.fb = fb;
          this.logicalFormInfo = logicalFormInfo;
          this.dialogRef = dialogRef;
          this.data = data;
          this.dataRec = data;
        }

        _createClass(EditHazardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.editTitle = this.fb.group({
              title: [this.dataRec.title, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
          }
        }, {
          key: "onFormSubmit",
          value: function onFormSubmit() {
            var _this40 = this;

            var data = {
              title: this.editTitle.get('title').value
            };
            this.logicalFormInfo.updateHazards(data, this.dataRec._id).subscribe(function (resData) {
              console.log('resData', resData);

              _this40.dialogRef.close('true');

              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: 'Parameter Updated successfully',
                showConfirmButton: false,
                timer: 1200
              });
            });
          }
        }, {
          key: "closeDialog",
          value: function closeDialog() {
            this.dialogRef.close('false');
          }
        }]);

        return EditHazardComponent;
      }();

      EditHazardComponent.ɵfac = function EditHazardComponent_Factory(t) {
        return new (t || EditHazardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__["LogicalFormInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]));
      };

      EditHazardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EditHazardComponent,
        selectors: [["app-edit-hazard"]],
        decls: 12,
        vars: 2,
        consts: [[3, "formGroup"], ["appearance", "legacy", 1, "example-full-width", 2, "width", "498px"], ["matInput", "", "formControlName", "title", 2, "text-transform", "capitalize !important"], [1, "row"], [1, "col-sm-2", "offset-8"], ["mat-raised-button", "", 3, "click"], [1, "col-sm-2"], ["mat-raised-button", "", 3, "disabled", "click"]],
        template: function EditHazardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit Hazard");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditHazardComponent_Template_button_click_7_listener() {
              return ctx.closeDialog();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditHazardComponent_Template_button_click_10_listener() {
              return ctx.onFormSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Update");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.editTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.editTitle.valid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWhhemFyZC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditHazardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-edit-hazard',
            templateUrl: './edit-hazard.component.html',
            styleUrls: ['./edit-hazard.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__["LogicalFormInfoService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ocAX": function ocAX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditHighRiskConstructionComponent", function () {
        return EditHighRiskConstructionComponent;
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


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/utils/services/logical-form-info.service */
      "wbBK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");

      var EditHighRiskConstructionComponent = /*#__PURE__*/function () {
        function EditHighRiskConstructionComponent(fb, logicalFormInfo, dialogRef, data) {
          _classCallCheck(this, EditHighRiskConstructionComponent);

          this.fb = fb;
          this.logicalFormInfo = logicalFormInfo;
          this.dialogRef = dialogRef;
          this.data = data;
          this.dataRec = data;
        }

        _createClass(EditHighRiskConstructionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log("this.dataRec", this.dataRec);
            this.editTitle = this.fb.group({
              title: [this.dataRec.title, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
          }
        }, {
          key: "onFormSubmit",
          value: function onFormSubmit() {
            var _this41 = this;

            var data = {
              title: this.editTitle.get('title').value
            };
            this.logicalFormInfo.updateRisk(data, this.dataRec._id).subscribe(function (resData) {
              _this41.dialogRef.close('true');

              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: 'Parameter Edited successfully',
                showConfirmButton: false,
                timer: 1200
              });
            });
          }
        }, {
          key: "closeDialog",
          value: function closeDialog() {
            this.dialogRef.close('false');
          }
        }]);

        return EditHighRiskConstructionComponent;
      }();

      EditHighRiskConstructionComponent.ɵfac = function EditHighRiskConstructionComponent_Factory(t) {
        return new (t || EditHighRiskConstructionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__["LogicalFormInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]));
      };

      EditHighRiskConstructionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EditHighRiskConstructionComponent,
        selectors: [["app-edit-high-risk-construction"]],
        decls: 12,
        vars: 2,
        consts: [[3, "formGroup"], ["appearance", "legacy", 1, "example-full-width", 2, "width", "498px"], ["matInput", "", "formControlName", "title", 2, "text-transform", "capitalize !important"], [1, "row"], [1, "col-sm-2", "offset-8"], ["mat-raised-button", "", 3, "click"], [1, "col-sm-2"], ["mat-raised-button", "", 3, "disabled", "click"]],
        template: function EditHighRiskConstructionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit High Risk");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditHighRiskConstructionComponent_Template_button_click_7_listener() {
              return ctx.closeDialog();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditHighRiskConstructionComponent_Template_button_click_10_listener() {
              return ctx.onFormSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Update");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.editTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.editTitle.valid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]],
        styles: ["abel[_ngcontent-%COMP%]:not(.form-check-label):not(.custom-file-label) {\n  font-weight: 500;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  border: 2px solid dodgerblue;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 500;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n}\n\n.form-control[_ngcontent-%COMP%]:hover {\n  border-color: rgba(46, 105, 255, 0.5);\n  box-shadow: 0 0 0 2px rgba(46, 105, 255, 0.25);\n}\n\n.pt-3[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 32px;\n  font-weight: 700;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n}\n\n.container[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.form-Label[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 500;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n  width: 100%;\n  margin-left: 2px;\n  margin-bottom: 14px;\n}\n\n.sign[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid rgba(46, 105, 255, 0.5);\n  width: 500px;\n  border-radius: 5px;\n}\n\n.sign[_ngcontent-%COMP%]:hover {\n  border: 1px solid;\n  border-color: #2e69ff40;\n  box-shadow: 0 0 0 3px rgba(46, 105, 255, 0.25);\n}\n\n.imgStyle[_ngcontent-%COMP%] {\n  border: 2px solid #2e69ff40;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZWRpdC1oaWdoLXJpc2stY29uc3RydWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFDRTtFQUNFLDRCQUFBO0FBRUo7O0FBQUU7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFHSjs7QUFERTtFQUNFLHFDQUFBO0VBQ0EsOENBQUE7QUFJSjs7QUFGRTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQUtKOztBQUhFO0VBQ0UsdUJBQUE7QUFNSjs7QUFKRTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBT0o7O0FBTEU7RUFDRSxhQUFBO0VBQ0EseUNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFRSjs7QUFORTtFQUNFLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSw4Q0FBQTtBQVNKOztBQU5FO0VBQ0UsMkJBQUE7RUFDQSxtQkFBQTtBQVNKIiwiZmlsZSI6ImVkaXQtaGlnaC1yaXNrLWNvbnN0cnVjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFiZWw6bm90KC5mb3JtLWNoZWNrLWxhYmVsKTpub3QoLmN1c3RvbS1maWxlLWxhYmVsKSB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuICBpbnB1dDpmb2N1cyB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBkb2RnZXJibHVlO1xyXG4gIH1cclxuICBsYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICAgIGZvbnQtZmFtaWx5OiBJbnRlciwgc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgLmZvcm0tY29udHJvbDpob3ZlciB7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoNDYsIDEwNSwgMjU1LCAwLjUpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHJnYig0NiAxMDUgMjU1IC8gMjUlKTtcclxuICB9XHJcbiAgLnB0LTMge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgICBmb250LWZhbWlseTogSW50ZXIsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIC5jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC5mb3JtLUxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgZm9udC1mYW1pbHk6IEludGVyLCBzYW5zLXNlcmlmO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTRweDtcclxuICB9XHJcbiAgLnNpZ24ge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNDYsIDEwNSwgMjU1LCAwLjUpO1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIH1cclxuICAuc2lnbjpob3ZlciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogIzJlNjlmZjQwO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYig0NiwgMTA1LCAyNTUsIDAuMjUpO1xyXG4gIH1cclxuICBcclxuICAuaW1nU3R5bGUge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzJlNjlmZjQwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcbiAgIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditHighRiskConstructionComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-edit-high-risk-construction',
            templateUrl: './edit-high-risk-construction.component.html',
            styleUrls: ['./edit-high-risk-construction.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__["LogicalFormInfoService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "pCeX": function pCeX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JobTaskComponent", function () {
        return JobTaskComponent;
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


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/paginator */
      "5QHs");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/table */
      "OaSA");
      /* harmony import */


      var _edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./edit-task/edit-task.component */
      "FVgK");
      /* harmony import */


      var src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/utils/services/logical-form-info.service */
      "wbBK");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/utils/services/set-title.service */
      "yZxC");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      function JobTaskComponent_th_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function JobTaskComponent_td_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r10.index);
        }
      }

      function JobTaskComponent_th_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function JobTaskComponent_td_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r11.title, " ");
        }
      }

      function JobTaskComponent_th_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Edit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function JobTaskComponent_td_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobTaskComponent_td_16_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var element_r12 = ctx.$implicit;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.edit(element_r12);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function JobTaskComponent_th_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Delete ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function JobTaskComponent_td_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobTaskComponent_td_19_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

            var element_r15 = ctx.$implicit;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r16["delete"](element_r15);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function JobTaskComponent_tr_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 21);
        }
      }

      function JobTaskComponent_tr_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 22);
        }
      }

      var _c0 = function _c0() {
        return ["/admin/siteInfo/addJobTask"];
      };

      var _c1 = function _c1() {
        return [5, 10, 20];
      };

      var JobTaskComponent = /*#__PURE__*/function () {
        /////////////mat table end////////////////
        function JobTaskComponent(logicalFormInfo, dialog, setTitle) {
          _classCallCheck(this, JobTaskComponent);

          this.logicalFormInfo = logicalFormInfo;
          this.dialog = dialog;
          this.setTitle = setTitle;
          this.jobTaskData = [];
          this.ELEMENT_DATA = []; /////////////mat table////////////////

          this.displayedColumns = ['index', 'title', 'edit', 'delete'];
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.ELEMENT_DATA);
        }

        _createClass(JobTaskComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.dataSource.paginator = this.paginator;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getAllJobTask();
            this.setTitle.setTitle('WHS-Job Task List');
          }
        }, {
          key: "getAllJobTask",
          value: function getAllJobTask() {
            var _this42 = this;

            this.logicalFormInfo.getAllJobtask().subscribe(function (res) {
              console.log('jobTaskDetails=>', res); // this.jobTaskData = res.data[0].subComponents;

              var data = res.data;
              data.forEach(function (element, index) {
                element.index = index + 1; //adding index
              });
              _this42.ELEMENT_DATA = data;
              _this42.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this42.ELEMENT_DATA);
              _this42.dataSource.paginator = _this42.paginator; //  this.task = res.data.subComponents;
            });
          }
        }, {
          key: "edit",
          value: function edit(element) {
            var _this43 = this;

            var dialogRef = this.dialog.open(_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_4__["EditTaskComponent"], {
              width: "550px",
              data: element
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result == "true") {
                _this43.getAllJobTask();
              }

              console.log("The dialog was closed");
            });
          }
        }, {
          key: "delete",
          value: function _delete(item) {
            var _this44 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
              title: 'Are you sure?',
              text: "Do you want to delete \"".concat(item.title, "\"?"),
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#00B96F',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, Delete!'
            }).then(function (result) {
              if (result.value) {
                _this44.logicalFormInfo.deleteJobTask(item._id).subscribe(function (res) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    title: 'Parameter Deleted successfully',
                    showConfirmButton: false,
                    timer: 1200
                  });
                  console.log('deleted res', res);

                  _this44.getAllJobTask();
                });
              }
            });
          }
        }]);

        return JobTaskComponent;
      }();

      JobTaskComponent.ɵfac = function JobTaskComponent_Factory(t) {
        return new (t || JobTaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_5__["LogicalFormInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_7__["SetTitleService"]));
      };

      JobTaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: JobTaskComponent,
        selectors: [["app-job-task"]],
        viewQuery: function JobTaskComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          }
        },
        decls: 23,
        vars: 7,
        consts: [[1, "ml-2"], [1, "col", "ml-2", "mb-2"], [1, "btn", "btn-outline-primary", "mt-1", "mr-2", "float-right", 3, "routerLink"], [1, "fas", "fa-folder-plus", "mr-2"], [1, "mat-elevation-z8", "ml-2"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "index"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "title"], ["matColumnDef", "edit"], ["mat-cell", "", 3, "click", 4, "matCellDef"], ["matColumnDef", "delete"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", "aria-label", "Select page of periodic elements", 3, "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", 3, "click"], [1, "fas", "fa-pencil-alt"], [1, "fas", "fa-trash"], ["mat-header-row", ""], ["mat-row", ""]],
        template: function JobTaskComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Job task List");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add Job Task ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, JobTaskComponent_th_9_Template, 2, 0, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, JobTaskComponent_td_10_Template, 2, 1, "td", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, JobTaskComponent_th_12_Template, 2, 0, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, JobTaskComponent_td_13_Template, 2, 1, "td", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, JobTaskComponent_th_15_Template, 2, 0, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, JobTaskComponent_td_16_Template, 2, 0, "td", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, JobTaskComponent_th_18_Template, 2, 0, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, JobTaskComponent_td_19_Template, 2, 0, "td", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, JobTaskComponent_tr_20_Template, 1, 0, "tr", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, JobTaskComponent_tr_21_Template, 1, 0, "tr", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "mat-paginator", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]],
        styles: ["abel[_ngcontent-%COMP%]:not(.form-check-label):not(.custom-file-label) {\n  font-weight: 500;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  border: 2px solid dodgerblue;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 500;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n}\n\n.form-control[_ngcontent-%COMP%]:hover {\n  border-color: rgba(46, 105, 255, 0.5);\n  box-shadow: 0 0 0 2px rgba(46, 105, 255, 0.25);\n}\n\n.pt-3[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 32px;\n  font-weight: 700;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n}\n\n.container[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.form-Label[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 500;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n  width: 100%;\n  margin-left: 2px;\n  margin-bottom: 14px;\n}\n\n.sign[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid rgba(46, 105, 255, 0.5);\n  width: 500px;\n  border-radius: 5px;\n}\n\n.sign[_ngcontent-%COMP%]:hover {\n  border: 1px solid;\n  border-color: #2e69ff40;\n  box-shadow: 0 0 0 3px rgba(46, 105, 255, 0.25);\n}\n\n.imgStyle[_ngcontent-%COMP%] {\n  border: 2px solid #2e69ff40;\n  border-radius: 10px;\n}\n\n.example-additional-selection[_ngcontent-%COMP%] {\n  opacity: 0.75;\n  font-size: 0.75em;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxqb2ItdGFzay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBQ0U7RUFDRSw0QkFBQTtBQUVKOztBQUFFO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBR0o7O0FBREU7RUFDRSxxQ0FBQTtFQUNBLDhDQUFBO0FBSUo7O0FBRkU7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFLSjs7QUFIRTtFQUNFLHVCQUFBO0FBTUo7O0FBSkU7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQU9KOztBQUxFO0VBQ0UsYUFBQTtFQUNBLHlDQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBUUo7O0FBTkU7RUFDRSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsOENBQUE7QUFTSjs7QUFORTtFQUNFLDJCQUFBO0VBQ0EsbUJBQUE7QUFTSjs7QUFQRTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtBQVVKOztBQVJFO0VBQ0UsV0FBQTtBQVdKIiwiZmlsZSI6ImpvYi10YXNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWJlbDpub3QoLmZvcm0tY2hlY2stbGFiZWwpOm5vdCguY3VzdG9tLWZpbGUtbGFiZWwpIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG4gIGlucHV0OmZvY3VzIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGRvZGdlcmJsdWU7XHJcbiAgfVxyXG4gIGxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgZm9udC1mYW1pbHk6IEludGVyLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICAuZm9ybS1jb250cm9sOmhvdmVyIHtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSg0NiwgMTA1LCAyNTUsIDAuNSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAycHggcmdiKDQ2IDEwNSAyNTUgLyAyNSUpO1xyXG4gIH1cclxuICAucHQtMyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICAgIGZvbnQtZmFtaWx5OiBJbnRlciwgc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgLmZvcm0tTGFiZWwge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgICBmb250LWZhbWlseTogSW50ZXIsIHNhbnMtc2VyaWY7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xyXG4gIH1cclxuICAuc2lnbiB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg0NiwgMTA1LCAyNTUsIDAuNSk7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG4gIC5zaWduOmhvdmVyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMmU2OWZmNDA7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiKDQ2LCAxMDUsIDI1NSwgMC4yNSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbWdTdHlsZSB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMmU2OWZmNDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuICAuZXhhbXBsZS1hZGRpdGlvbmFsLXNlbGVjdGlvbiB7XHJcbiAgICBvcGFjaXR5OiAwLjc1O1xyXG4gICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgfVxyXG4gIHRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JobTaskComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-job-task',
            templateUrl: './job-task.component.html',
            styleUrls: ['./job-task.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_5__["LogicalFormInfoService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
          }, {
            type: src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_7__["SetTitleService"]
          }];
        }, {
          paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]]
          }]
        });
      })();
      /***/

    },

    /***/
    "pMia": function pMia(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LicenceAndQualComponent", function () {
        return LicenceAndQualComponent;
      });
      /* harmony import */


      var _edit_licence_edit_licence_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./edit-licence/edit-licence.component */
      "0qak");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/paginator */
      "5QHs");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/table */
      "OaSA");
      /* harmony import */


      var src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/utils/services/logical-form-info.service */
      "wbBK");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/utils/services/set-title.service */
      "yZxC");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      function LicenceAndQualComponent_th_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function LicenceAndQualComponent_td_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r12.index);
        }
      }

      function LicenceAndQualComponent_th_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function LicenceAndQualComponent_td_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r13 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r13.title, " ");
        }
      }

      function LicenceAndQualComponent_th_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Category ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function LicenceAndQualComponent_td_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r14 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r14.licenceCategoryId == null ? null : element_r14.licenceCategoryId.title, " ");
        }
      }

      function LicenceAndQualComponent_th_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Edit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function LicenceAndQualComponent_td_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LicenceAndQualComponent_td_19_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);

            var element_r15 = ctx.$implicit;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r16.edit(element_r15);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function LicenceAndQualComponent_th_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Delete ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function LicenceAndQualComponent_td_22_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LicenceAndQualComponent_td_22_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);

            var element_r18 = ctx.$implicit;

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r19["delete"](element_r18);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function LicenceAndQualComponent_tr_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 22);
        }
      }

      function LicenceAndQualComponent_tr_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 23);
        }
      }

      var _c0 = function _c0() {
        return ["/admin/siteInfo/addLicence"];
      };

      var _c1 = function _c1() {
        return [5, 10, 20];
      };

      var LicenceAndQualComponent = /*#__PURE__*/function () {
        /////////////mat table end////////////////
        function LicenceAndQualComponent(logicalFormInfo, dialog, setTitle) {
          _classCallCheck(this, LicenceAndQualComponent);

          this.logicalFormInfo = logicalFormInfo;
          this.dialog = dialog;
          this.setTitle = setTitle;
          this.jobTaskData = [];
          this.ELEMENT_DATA = []; /////////////mat table////////////////

          this.displayedColumns = ['index', 'title', 'category', 'edit', 'delete'];
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.ELEMENT_DATA);
        }

        _createClass(LicenceAndQualComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.dataSource.paginator = this.paginator;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getAllLicence();
            this.setTitle.setTitle('WHS-License and Qualification List');
          }
        }, {
          key: "getAllLicence",
          value: function getAllLicence() {
            var _this45 = this;

            this.logicalFormInfo.getAllLicence().subscribe(function (res) {
              console.log('getAllLicence=>', res); // this.jobTaskData = res.data[0].subComponents;

              var data = res.data;
              data.forEach(function (element, index) {
                element.index = index + 1; //adding index
              });
              _this45.ELEMENT_DATA = data;
              _this45.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this45.ELEMENT_DATA);
              _this45.dataSource.paginator = _this45.paginator; //  this.task = res.data.subComponents;
            });
          }
        }, {
          key: "edit",
          value: function edit(element) {
            var _this46 = this;

            var dialogRef = this.dialog.open(_edit_licence_edit_licence_component__WEBPACK_IMPORTED_MODULE_0__["EditLicenceComponent"], {
              width: "550px",
              data: element
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result == "true") {
                _this46.getAllLicence();
              }

              console.log("The dialog was closed");
            });
          }
        }, {
          key: "delete",
          value: function _delete(item) {
            var _this47 = this;

            console.log("delete", item);
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
              title: 'Are you sure?',
              text: "Do you want to delete \"".concat(item.title, "\"?"),
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#00B96F',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, Delete!'
            }).then(function (result) {
              if (result.value) {
                _this47.logicalFormInfo.deleteLicence(item._id).subscribe(function (res) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    title: 'Deleted successfully',
                    showConfirmButton: false,
                    timer: 1000
                  });
                  console.log('deleted res', res);

                  _this47.getAllLicence();
                });
              }
            });
          }
        }]);

        return LicenceAndQualComponent;
      }();

      LicenceAndQualComponent.ɵfac = function LicenceAndQualComponent_Factory(t) {
        return new (t || LicenceAndQualComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_5__["LogicalFormInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_7__["SetTitleService"]));
      };

      LicenceAndQualComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: LicenceAndQualComponent,
        selectors: [["app-licence-and-qual"]],
        viewQuery: function LicenceAndQualComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          }
        },
        decls: 26,
        vars: 7,
        consts: [[1, "ml-2"], [1, "col", "ml-2", "mb-2"], [1, "btn", "btn-outline-primary", "mt-1", "mr-2", "float-right", 3, "routerLink"], [1, "fas", "fa-folder-plus", "mr-2"], [1, "mat-elevation-z8", "ml-2"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "index"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "title"], ["matColumnDef", "category"], ["matColumnDef", "edit"], ["mat-cell", "", 3, "click", 4, "matCellDef"], ["matColumnDef", "delete"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", "aria-label", "Select page of periodic elements", 3, "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", 3, "click"], [1, "fas", "fa-pencil-alt"], [1, "fas", "fa-trash"], ["mat-header-row", ""], ["mat-row", ""]],
        template: function LicenceAndQualComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Licence and Qualification List");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Add Licence ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "table", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](8, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, LicenceAndQualComponent_th_9_Template, 2, 0, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, LicenceAndQualComponent_td_10_Template, 2, 1, "td", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](11, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, LicenceAndQualComponent_th_12_Template, 2, 0, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, LicenceAndQualComponent_td_13_Template, 2, 1, "td", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](14, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, LicenceAndQualComponent_th_15_Template, 2, 0, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, LicenceAndQualComponent_td_16_Template, 2, 1, "td", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](17, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, LicenceAndQualComponent_th_18_Template, 2, 0, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, LicenceAndQualComponent_td_19_Template, 2, 0, "td", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](20, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, LicenceAndQualComponent_th_21_Template, 2, 0, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, LicenceAndQualComponent_td_22_Template, 2, 0, "td", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, LicenceAndQualComponent_tr_23_Template, 1, 0, "tr", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, LicenceAndQualComponent_tr_24_Template, 1, 0, "tr", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "mat-paginator", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c1));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"]],
        styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsaWNlbmNlLWFuZC1xdWFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKIiwiZmlsZSI6ImxpY2VuY2UtYW5kLXF1YWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LicenceAndQualComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-licence-and-qual',
            templateUrl: './licence-and-qual.component.html',
            styleUrls: ['./licence-and-qual.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_5__["LogicalFormInfoService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
          }, {
            type: src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_7__["SetTitleService"]
          }];
        }, {
          paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]]
          }]
        });
      })();
      /***/

    },

    /***/
    "tTCJ": function tTCJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContrAndActReqComponent", function () {
        return ContrAndActReqComponent;
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


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/paginator */
      "5QHs");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/table */
      "OaSA");
      /* harmony import */


      var _edit_cont_act_edit_cont_act_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./edit-cont-act/edit-cont-act.component */
      "ISp9");
      /* harmony import */


      var src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/utils/services/logical-form-info.service */
      "wbBK");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/utils/services/set-title.service */
      "yZxC");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      function ContrAndActReqComponent_th_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ContrAndActReqComponent_td_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r10.index);
        }
      }

      function ContrAndActReqComponent_th_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ContrAndActReqComponent_td_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r11.title, " ");
        }
      }

      function ContrAndActReqComponent_th_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Edit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ContrAndActReqComponent_td_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContrAndActReqComponent_td_16_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var element_r12 = ctx.$implicit;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.edit(element_r12);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ContrAndActReqComponent_th_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Delete ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ContrAndActReqComponent_td_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContrAndActReqComponent_td_19_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

            var element_r15 = ctx.$implicit;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r16["delete"](element_r15);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ContrAndActReqComponent_tr_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 21);
        }
      }

      function ContrAndActReqComponent_tr_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 22);
        }
      }

      var _c0 = function _c0() {
        return ["/admin/siteInfo/addContrlActReq"];
      };

      var _c1 = function _c1() {
        return [5, 10, 20];
      };

      var ContrAndActReqComponent = /*#__PURE__*/function () {
        /////////////mat table end////////////////
        function ContrAndActReqComponent(logicalFormInfo, dialog, setTitle) {
          _classCallCheck(this, ContrAndActReqComponent);

          this.logicalFormInfo = logicalFormInfo;
          this.dialog = dialog;
          this.setTitle = setTitle;
          this.jobTaskData = [];
          this.ELEMENT_DATA = []; /////////////mat table////////////////

          this.displayedColumns = ['index', 'title', 'edit', 'delete'];
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.ELEMENT_DATA);
        }

        _createClass(ContrAndActReqComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.dataSource.paginator = this.paginator;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getAllContrlActReq();
            this.setTitle.setTitle('WHS-PPE List');
          }
        }, {
          key: "getAllContrlActReq",
          value: function getAllContrlActReq() {
            var _this48 = this;

            this.logicalFormInfo.getAllContrlActReq().subscribe(function (res) {
              console.log('PPEAll=>', res);
              var data = res.data;
              data.forEach(function (element, index) {
                element.index = index + 1; //adding index
              });
              _this48.ELEMENT_DATA = data;
              _this48.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this48.ELEMENT_DATA);
              _this48.dataSource.paginator = _this48.paginator;
              console.log('this.ELEMENT_DATA', _this48.ELEMENT_DATA); //  this.task = res.data.subComponents;
            });
          }
        }, {
          key: "edit",
          value: function edit(element) {
            var _this49 = this;

            var dialogRef = this.dialog.open(_edit_cont_act_edit_cont_act_component__WEBPACK_IMPORTED_MODULE_4__["EditContActComponent"], {
              width: "550px",
              data: element
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result == "true") {
                _this49.getAllContrlActReq();
              }

              console.log("The dialog was closed");
            });
          }
        }, {
          key: "delete",
          value: function _delete(item) {
            var _this50 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
              title: 'Are you sure?',
              text: "Do you want to delete \"".concat(item.title, "\"?"),
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#00B96F',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, Delete!'
            }).then(function (result) {
              if (result.value) {
                _this50.logicalFormInfo.deleteContrlActReq(item._id).subscribe(function (res) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    title: 'Parameter Deleted successfully',
                    showConfirmButton: false,
                    timer: 1200
                  });
                  console.log('deleted res', res);

                  _this50.getAllContrlActReq();
                });
              }
            });
          }
        }]);

        return ContrAndActReqComponent;
      }();

      ContrAndActReqComponent.ɵfac = function ContrAndActReqComponent_Factory(t) {
        return new (t || ContrAndActReqComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_5__["LogicalFormInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_7__["SetTitleService"]));
      };

      ContrAndActReqComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ContrAndActReqComponent,
        selectors: [["app-contr-and-act-req"]],
        viewQuery: function ContrAndActReqComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          }
        },
        decls: 23,
        vars: 7,
        consts: [[1, "ml-2"], [1, "col", "ml-2", "mb-2"], [1, "btn", "btn-outline-primary", "mt-1", "mr-2", "float-right", 3, "routerLink"], [1, "fas", "fa-folder-plus", "mr-2"], [1, "mat-elevation-z8", "ml-2"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "index"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "title"], ["matColumnDef", "edit"], ["mat-cell", "", 3, "click", 4, "matCellDef"], ["matColumnDef", "delete"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", "aria-label", "Select page of periodic elements", 3, "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", 3, "click"], [1, "fas", "fa-pencil-alt"], [1, "fas", "fa-trash"], ["mat-header-row", ""], ["mat-row", ""]],
        template: function ContrAndActReqComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Control And Action Required List");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add Control and Action ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ContrAndActReqComponent_th_9_Template, 2, 0, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ContrAndActReqComponent_td_10_Template, 2, 1, "td", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ContrAndActReqComponent_th_12_Template, 2, 0, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ContrAndActReqComponent_td_13_Template, 2, 1, "td", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ContrAndActReqComponent_th_15_Template, 2, 0, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ContrAndActReqComponent_td_16_Template, 2, 0, "td", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ContrAndActReqComponent_th_18_Template, 2, 0, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ContrAndActReqComponent_td_19_Template, 2, 0, "td", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ContrAndActReqComponent_tr_20_Template, 1, 0, "tr", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ContrAndActReqComponent_tr_21_Template, 1, 0, "tr", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "mat-paginator", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]],
        styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjb250ci1hbmQtYWN0LXJlcS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSiIsImZpbGUiOiJjb250ci1hbmQtYWN0LXJlcS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContrAndActReqComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-contr-and-act-req',
            templateUrl: './contr-and-act-req.component.html',
            styleUrls: ['./contr-and-act-req.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_5__["LogicalFormInfoService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
          }, {
            type: src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_7__["SetTitleService"]
          }];
        }, {
          paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]]
          }]
        });
      })();
      /***/

    },

    /***/
    "v0b5": function v0b5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddContrActComponent", function () {
        return AddContrActComponent;
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


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/utils/services/logical-form-info.service */
      "wbBK");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "SVse");

      function AddContrActComponent_ng_container_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddContrActComponent_ng_container_9_Template_span_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.addAction();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "add_circle_outline ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddContrActComponent_ng_container_9_Template_span_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var i_r2 = ctx.index;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.removeSafetyModule(i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " remove_circle_outline ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r2 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", i_r2 + 1, ". ");
        }
      }

      var _c0 = function _c0() {
        return ["/admin/siteInfo/contrlActReq"];
      };

      var AddContrActComponent = /*#__PURE__*/function () {
        function AddContrActComponent(fb, router, logicalFormInfo) {
          _classCallCheck(this, AddContrActComponent);

          this.fb = fb;
          this.router = router;
          this.logicalFormInfo = logicalFormInfo;
          this.contrlAndActFG = this.fb.group({
            // mode:"JobTask",
            arrObj: this.fb.array([])
          });
        }

        _createClass(AddContrActComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.addAction();
          }
        }, {
          key: "addAction",
          value: function addAction() {
            {
              this.add().push(this.newAction());
            }
          }
        }, {
          key: "add",
          value: function add() {
            return this.contrlAndActFG.get('arrObj');
          }
        }, {
          key: "newAction",
          value: function newAction() {
            return this.fb.group({
              title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
          }
        }, {
          key: "removeSafetyModule",
          value: function removeSafetyModule(i) {
            var item = this.contrlAndActFG.controls['arrObj'];

            if (item.length > 1) {
              item.removeAt(i);
            }
          }
        }, {
          key: "onFormSubmit",
          value: function onFormSubmit() {
            var _this51 = this;

            console.log(this.contrlAndActFG.value);
            var data = {
              arrObj: this.contrlAndActFG.get('arrObj').value
            };
            this.logicalFormInfo.addMultipleContrlActReq(data).subscribe(function (data) {
              console.log('PPE=>', data);
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: 'Parameter Added successfully',
                showConfirmButton: false,
                timer: 1200
              });

              _this51.router.navigate(['/admin/siteInfo/contrlActReq']);
            }, function (err) {
              console.error(err);
            });
          }
        }]);

        return AddContrActComponent;
      }();

      AddContrActComponent.ɵfac = function AddContrActComponent_Factory(t) {
        return new (t || AddContrActComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__["LogicalFormInfoService"]));
      };

      AddContrActComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddContrActComponent,
        selectors: [["app-add-contr-act"]],
        decls: 14,
        vars: 5,
        consts: [[1, "btn", "btn-outline-primary", 3, "routerLink"], ["aria-hidden", "true", 1, "fa", "fa-arrow-left"], [1, "container", "px-4", "py-4", "bg-white"], [3, "formGroup", "ngSubmit"], [1, "text-center"], ["formArrayName", "arrObj"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "col-md-2"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [3, "formGroupName"], [1, "row", "justify-content-center"], [1, "mr-1", "mt-2"], [1, "col-8"], ["type", "text", "formControlName", "title", "id", "name", 1, "form-control", "sign"], [1, "col-1", "mt-2"], [1, "material-icons", 3, "click"]],
        template: function AddContrActComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddContrActComponent_Template_form_ngSubmit_3_listener() {
              return ctx.onFormSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add Control And Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AddContrActComponent_ng_container_9_Template, 14, 2, "ng-container", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.contrlAndActFG);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.add().controls);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.contrlAndActFG.get("arrObj").invalid);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtY29udHItYWN0LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddContrActComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-add-contr-act',
            templateUrl: './add-contr-act.component.html',
            styleUrls: ['./add-contr-act.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__["LogicalFormInfoService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "xnNE": function xnNE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectManagerComponent", function () {
        return ProjectManagerComponent;
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


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/paginator */
      "5QHs");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/table */
      "OaSA");
      /* harmony import */


      var _add_edit_proj_mang_add_edit_proj_mang_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./add-edit-proj-mang/add-edit-proj-mang.component */
      "AXTO");
      /* harmony import */


      var src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/utils/services/logical-form-info.service */
      "wbBK");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");

      function ProjectManagerComponent_th_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProjectManagerComponent_td_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r10.index);
        }
      }

      function ProjectManagerComponent_th_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProjectManagerComponent_td_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r11.title, " ");
        }
      }

      function ProjectManagerComponent_th_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Edit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProjectManagerComponent_td_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectManagerComponent_td_16_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var element_r12 = ctx.$implicit;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.edit(element_r12);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProjectManagerComponent_th_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Delete ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProjectManagerComponent_td_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectManagerComponent_td_19_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

            var element_r15 = ctx.$implicit;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r16["delete"](element_r15);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProjectManagerComponent_tr_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 20);
        }
      }

      function ProjectManagerComponent_tr_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 21);
        }
      }

      var _c0 = function _c0() {
        return [5, 10, 20];
      };

      var ProjectManagerComponent = /*#__PURE__*/function () {
        /////////////mat table end////////////////
        function ProjectManagerComponent(logicalFormInfo, dialog) {
          _classCallCheck(this, ProjectManagerComponent);

          this.logicalFormInfo = logicalFormInfo;
          this.dialog = dialog;
          this.jobTaskData = [];
          this.ELEMENT_DATA = []; /////////////mat table////////////////

          this.displayedColumns = ['index', 'title', 'edit', 'delete'];
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.ELEMENT_DATA);
        }

        _createClass(ProjectManagerComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.dataSource.paginator = this.paginator;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getAllProjectMang();
          }
        }, {
          key: "getAllProjectMang",
          value: function getAllProjectMang() {
            var _this52 = this;

            this.logicalFormInfo.getAllProjectMang().subscribe(function (res) {
              console.log('getAllProjectMang=>', res); // this.jobTaskData = res.data[0].subComponents;

              var data = res.data;
              data.forEach(function (element, index) {
                element.index = index + 1; //adding index
              });
              _this52.ELEMENT_DATA = data;
              _this52.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this52.ELEMENT_DATA);
              _this52.dataSource.paginator = _this52.paginator; //  this.task = res.data.subComponents;
            });
          }
        }, {
          key: "edit",
          value: function edit(element) {
            var _this53 = this;

            var dialogRef = this.dialog.open(_add_edit_proj_mang_add_edit_proj_mang_component__WEBPACK_IMPORTED_MODULE_4__["AddEditProjMangComponent"], {
              width: "550px",
              data: element
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result == "true") {
                _this53.getAllProjectMang();
              }

              console.log("The dialog was closed");
            });
          }
        }, {
          key: "delete",
          value: function _delete(item) {
            var _this54 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
              title: 'Are you sure?',
              text: "Do you want to delete \"".concat(item.title, "\"?"),
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#00B96F',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, Delete!'
            }).then(function (result) {
              if (result.value) {
                _this54.logicalFormInfo.deleteProjectMang(item._id).subscribe(function (res) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    title: 'Project Manager Deleted successfully',
                    showConfirmButton: false,
                    timer: 1200
                  });
                  console.log('deleted res', res);

                  _this54.getAllProjectMang();
                });
              }
            });
          }
        }]);

        return ProjectManagerComponent;
      }();

      ProjectManagerComponent.ɵfac = function ProjectManagerComponent_Factory(t) {
        return new (t || ProjectManagerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_5__["LogicalFormInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]));
      };

      ProjectManagerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProjectManagerComponent,
        selectors: [["app-project-manager"]],
        viewQuery: function ProjectManagerComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          }
        },
        decls: 23,
        vars: 5,
        consts: [[1, "col", "ml-2", "mb-2"], [1, "btn", "btn-outline-primary", "mt-1", "mr-2", "float-right", 3, "click"], [1, "fas", "fa-folder-plus", "mr-2"], [1, "mat-elevation-z8", "ml-2"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "index"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "title"], ["matColumnDef", "edit"], ["mat-cell", "", 3, "click", 4, "matCellDef"], ["matColumnDef", "delete"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", "aria-label", "Select page of periodic elements", 3, "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", 3, "click"], [1, "fas", "fa-pencil-alt"], [1, "fas", "fa-trash"], ["mat-header-row", ""], ["mat-row", ""]],
        template: function ProjectManagerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Project Manager List");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectManagerComponent_Template_button_click_3_listener() {
              return ctx.edit("");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add Project Manager ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProjectManagerComponent_th_9_Template, 2, 0, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProjectManagerComponent_td_10_Template, 2, 1, "td", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProjectManagerComponent_th_12_Template, 2, 0, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ProjectManagerComponent_td_13_Template, 2, 1, "td", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProjectManagerComponent_th_15_Template, 2, 0, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ProjectManagerComponent_td_16_Template, 2, 0, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ProjectManagerComponent_th_18_Template, 2, 0, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ProjectManagerComponent_td_19_Template, 2, 0, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ProjectManagerComponent_tr_20_Template, 1, 0, "tr", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ProjectManagerComponent_tr_21_Template, 1, 0, "tr", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "mat-paginator", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
          }
        },
        directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]],
        styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9qZWN0LW1hbmFnZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0oiLCJmaWxlIjoicHJvamVjdC1tYW5hZ2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectManagerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-project-manager',
            templateUrl: './project-manager.component.html',
            styleUrls: ['./project-manager.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_5__["LogicalFormInfoService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
          }];
        }, {
          paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]]
          }]
        });
      })();
      /***/

    },

    /***/
    "yVkB": function yVkB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditCustComponent", function () {
        return EditCustComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/utils/services/logical-form-info.service */
      "wbBK");

      var EditCustComponent = /*#__PURE__*/function () {
        function EditCustComponent(dialogRef, data, fb, logicalFormInfoService) {
          _classCallCheck(this, EditCustComponent);

          this.dialogRef = dialogRef;
          this.data = data;
          this.fb = fb;
          this.logicalFormInfoService = logicalFormInfoService;
        }

        _createClass(EditCustComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log(this.data);
            this.editCustomerForm = this.fb.group({
              customerName: [this.data.customerName],
              customerContact: [this.data.customerContact],
              customerContactPhone: [this.data.customerContactPhone],
              customerEmail: [this.data.customerEmail]
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this55 = this;

            this.logicalFormInfoService.updateCustomer(this.data._id, this.editCustomerForm.value).subscribe(function (res) {
              console.log(res);

              _this55.dialogRef.close('ok');
            });
          }
        }]);

        return EditCustComponent;
      }();

      EditCustComponent.ɵfac = function EditCustComponent_Factory(t) {
        return new (t || EditCustComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_3__["LogicalFormInfoService"]));
      };

      EditCustComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EditCustComponent,
        selectors: [["app-edit-cust"]],
        decls: 25,
        vars: 1,
        consts: [[1, "content", 3, "formGroup"], [1, "container", "px-4", "py-4", "bg-white"], [1, "row"], [1, "my-3", "col"], ["for", "exampleFormControlInput1", 1, "form-Label"], ["type", "text", "id", "siteName", "formControlName", "customerName", 1, "form-control"], ["type", "text", "id", "siteName", "formControlName", "customerContact", 1, "form-control"], ["type", "text", "id", "siteName", "formControlName", "customerContactPhone", 1, "form-control"], ["type", "text", "id", "siteName", "formControlName", "customerEmail", 1, "form-control"], [1, "btn", "btn-primary", 3, "click"]],
        template: function EditCustComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add Customer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Customer Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Customer Contact");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Customer Contact Phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Customer Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditCustComponent_Template_button_click_23_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Submit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.editCustomerForm);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWN1c3QuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditCustComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-edit-cust',
            templateUrl: './edit-cust.component.html',
            styleUrls: ['./edit-cust.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_3__["LogicalFormInfoService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "yvBN": function yvBN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddSiteInfoComponent", function () {
        return AddSiteInfoComponent;
      });
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/paginator */
      "5QHs");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/table */
      "OaSA");
      /* harmony import */


      var _add_site_add_site_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./add-site/add-site.component */
      "2xAX");
      /* harmony import */


      var _edit_site_edit_site_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./edit-site/edit-site.component */
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
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-spinner */
      "7g+E");

      function AddSiteInfoComponent_th_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddSiteInfoComponent_td_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r19 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r19 + 1);
        }
      }

      function AddSiteInfoComponent_th_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Site Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddSiteInfoComponent_td_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r20.siteName, " ");
        }
      }

      function AddSiteInfoComponent_th_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Street No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddSiteInfoComponent_td_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r21.streetNumber, " ");
        }
      }

      function AddSiteInfoComponent_th_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Street Address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddSiteInfoComponent_td_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r22 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r22.streetAddress, " ");
        }
      }

      function AddSiteInfoComponent_th_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Suburb ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddSiteInfoComponent_td_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r23 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r23.suburb, " ");
        }
      }

      function AddSiteInfoComponent_th_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " State ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddSiteInfoComponent_td_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r24 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r24.state, " ");
        }
      }

      function AddSiteInfoComponent_th_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Edit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddSiteInfoComponent_td_27_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddSiteInfoComponent_td_27_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27);

            var element_r25 = ctx.$implicit;

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r26.edit(element_r25);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddSiteInfoComponent_th_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Delete ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddSiteInfoComponent_td_30_Template(rf, ctx) {
        if (rf & 1) {
          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddSiteInfoComponent_td_30_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30);

            var element_r28 = ctx.$implicit;

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r29["delete"](element_r28);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddSiteInfoComponent_tr_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 23);
        }
      }

      function AddSiteInfoComponent_tr_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 24);
        }
      }

      var _c0 = function _c0() {
        return [5, 10, 20];
      };

      var AddSiteInfoComponent = /*#__PURE__*/function () {
        /////////////mat table end////////////////
        function AddSiteInfoComponent(dialog, setTitle, logicalFormInfoService, spinner) {
          _classCallCheck(this, AddSiteInfoComponent);

          this.dialog = dialog;
          this.setTitle = setTitle;
          this.logicalFormInfoService = logicalFormInfoService;
          this.spinner = spinner;
          this.jobTaskData = [];
          this.ELEMENT_DATA = []; /////////////mat table////////////////

          this.displayedColumns = ['index', 'siteName',
          /* 'siteForemen', */
          'streetNo', 'streetAddress', 'Suburb', 'State', 'edit', 'delete'];
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.ELEMENT_DATA);
          this.allSites = [];
        }

        _createClass(AddSiteInfoComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.dataSource.paginator = this.paginator;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setTitle.setTitle('WHS-Add Site Info');
            this.getAllSites();
          }
        }, {
          key: "getAllSites",
          value: function getAllSites() {
            var _this56 = this;

            this.logicalFormInfoService.getAllSite().subscribe(function (res) {
              console.log(res);
              _this56.dataSource.data = res.data;
              _this56.dataSource.paginator = _this56.paginator;
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
            var _this57 = this;

            var dialogRef = this.dialog.open(_add_site_add_site_component__WEBPACK_IMPORTED_MODULE_4__["AddSiteComponent"], {
              data: {
                action: "new",
                userId: id
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result == 'ok') {
                _this57.getAllSites();
              }

              console.log("CustomerInfoComponent -> openDialog -> result", result);
              console.log("The dialog was closed");
            });
          }
        }, {
          key: "edit",
          value: function edit(element) {
            var _this58 = this;

            var dialogRef = this.dialog.open(_edit_site_edit_site_component__WEBPACK_IMPORTED_MODULE_5__["EditSiteComponent"], {
              width: "550px",
              height: '80%',
              data: element
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result == "ok") {
                _this58.getAllSites();
              }

              console.log("The dialog was closed");
            });
          }
        }, {
          key: "delete",
          value: function _delete(item) {
            var _this59 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
              title: 'Are you sure?',
              text: "Do you want to delete \"".concat(item.siteName, "\"?"),
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#00B96F',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, Delete!'
            }).then(function (result) {
              if (result.value) {
                console.log(result); // this.model.attributes.splice(i,1);

                _this59.spinner.show();

                _this59.logicalFormInfoService.deleteSite(item._id).subscribe(function (res) {
                  _this59.getAllSites();

                  _this59.spinner.hide();
                });
              }
            });
          }
        }]);

        return AddSiteInfoComponent;
      }();

      AddSiteInfoComponent.ɵfac = function AddSiteInfoComponent_Factory(t) {
        return new (t || AddSiteInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_7__["SetTitleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_8__["LogicalFormInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"]));
      };

      AddSiteInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AddSiteInfoComponent,
        selectors: [["app-add-site-info"]],
        viewQuery: function AddSiteInfoComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          }
        },
        decls: 34,
        vars: 5,
        consts: [["_ngcontent-hqi-c400", "", "type", "button", 1, "btn", "btn-outline-primary", "mt-1", "mr-2", "float-right", 3, "click"], ["_ngcontent-hqi-c400", "", 1, "fas", "fa-plus"], [1, "mat-elevation-z8", "ml-2"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "index"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "siteName"], ["matColumnDef", "streetNo"], ["matColumnDef", "streetAddress"], ["matColumnDef", "Suburb"], ["matColumnDef", "State"], ["matColumnDef", "edit"], ["mat-cell", "", 3, "click", 4, "matCellDef"], ["matColumnDef", "delete"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", "aria-label", "Select page of periodic elements", 3, "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", 3, "click"], [1, "fas", "fa-pencil-alt"], [1, "fas", "fa-trash"], ["mat-header-row", ""], ["mat-row", ""]],
        template: function AddSiteInfoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Site Information List ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddSiteInfoComponent_Template_button_click_2_listener() {
              return ctx.openDialog("abcd");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Add Site ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "table", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](7, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AddSiteInfoComponent_th_8_Template, 2, 0, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, AddSiteInfoComponent_td_9_Template, 2, 1, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](10, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, AddSiteInfoComponent_th_11_Template, 2, 0, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AddSiteInfoComponent_td_12_Template, 2, 1, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](13, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AddSiteInfoComponent_th_14_Template, 2, 0, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, AddSiteInfoComponent_td_15_Template, 2, 1, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](16, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, AddSiteInfoComponent_th_17_Template, 2, 0, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, AddSiteInfoComponent_td_18_Template, 2, 1, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](19, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, AddSiteInfoComponent_th_20_Template, 2, 0, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, AddSiteInfoComponent_td_21_Template, 2, 1, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](22, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, AddSiteInfoComponent_th_23_Template, 2, 0, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, AddSiteInfoComponent_td_24_Template, 2, 1, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](25, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, AddSiteInfoComponent_th_26_Template, 2, 0, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, AddSiteInfoComponent_td_27_Template, 2, 0, "td", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](28, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, AddSiteInfoComponent_th_29_Template, 2, 0, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, AddSiteInfoComponent_td_30_Template, 2, 0, "td", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, AddSiteInfoComponent_tr_31_Template, 1, 0, "tr", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, AddSiteInfoComponent_tr_32_Template, 1, 0, "tr", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "mat-paginator", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0));
          }
        },
        directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]],
        styles: ["abel[_ngcontent-%COMP%]:not(.form-check-label):not(.custom-file-label) {\n  font-weight: 500;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  border: 2px solid dodgerblue;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 500;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n}\n\n.form-control[_ngcontent-%COMP%]:hover {\n  border-color: rgba(46, 105, 255, 0.5);\n  box-shadow: 0 0 0 2px rgba(46, 105, 255, 0.25);\n}\n\n.pt-3[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 32px;\n  font-weight: 700;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n}\n\n.container[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.form-Label[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 500;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n  width: 100%;\n  margin-left: 2px;\n  margin-bottom: 14px;\n}\n\n.sign[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid rgba(46, 105, 255, 0.5);\n  width: 500px;\n  border-radius: 5px;\n}\n\n.sign[_ngcontent-%COMP%]:hover {\n  border: 1px solid;\n  border-color: #2e69ff40;\n  box-shadow: 0 0 0 3px rgba(46, 105, 255, 0.25);\n}\n\n.imgStyle[_ngcontent-%COMP%] {\n  border: 2px solid #2e69ff40;\n  border-radius: 10px;\n}\n\n.example-additional-selection[_ngcontent-%COMP%] {\n  opacity: 0.75;\n  font-size: 0.75em;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhZGQtc2l0ZS1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFDQTtFQUNFLDRCQUFBO0FBRUY7O0FBQUE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFHRjs7QUFEQTtFQUNFLHFDQUFBO0VBQ0EsOENBQUE7QUFJRjs7QUFGQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQUtGOztBQUhBO0VBQ0UsdUJBQUE7QUFNRjs7QUFKQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBT0Y7O0FBTEE7RUFDRSxhQUFBO0VBQ0EseUNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFRRjs7QUFOQTtFQUNFLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSw4Q0FBQTtBQVNGOztBQU5BO0VBQ0UsMkJBQUE7RUFDQSxtQkFBQTtBQVNGOztBQVBBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0FBVUY7O0FBUkE7RUFDRSxXQUFBO0FBV0YiLCJmaWxlIjoiYWRkLXNpdGUtaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFiZWw6bm90KC5mb3JtLWNoZWNrLWxhYmVsKTpub3QoLmN1c3RvbS1maWxlLWxhYmVsKSB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5pbnB1dDpmb2N1cyB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgZG9kZ2VyYmx1ZTtcclxufVxyXG5sYWJlbCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgZm9udC1mYW1pbHk6IEludGVyLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5mb3JtLWNvbnRyb2w6aG92ZXIge1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSg0NiwgMTA1LCAyNTUsIDAuNSk7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHJnYig0NiAxMDUgMjU1IC8gMjUlKTtcclxufVxyXG4ucHQtMyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgZm9udC1mYW1pbHk6IEludGVyLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi5mb3JtLUxhYmVsIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICBmb250LWZhbWlseTogSW50ZXIsIHNhbnMtc2VyaWY7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xyXG59XHJcbi5zaWduIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNDYsIDEwNSwgMjU1LCAwLjUpO1xyXG4gIHdpZHRoOiA1MDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLnNpZ246aG92ZXIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gIGJvcmRlci1jb2xvcjogIzJlNjlmZjQwO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2IoNDYsIDEwNSwgMjU1LCAwLjI1KTtcclxufVxyXG5cclxuLmltZ1N0eWxlIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMmU2OWZmNDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4uZXhhbXBsZS1hZGRpdGlvbmFsLXNlbGVjdGlvbiB7XHJcbiAgb3BhY2l0eTogMC43NTtcclxuICBmb250LXNpemU6IDAuNzVlbTtcclxufVxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AddSiteInfoComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-add-site-info',
            templateUrl: './add-site-info.component.html',
            styleUrls: ['./add-site-info.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
          }, {
            type: src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_7__["SetTitleService"]
          }, {
            type: src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_8__["LogicalFormInfoService"]
          }, {
            type: ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"]
          }];
        }, {
          paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]]
          }]
        });
      })();
      /***/

    },

    /***/
    "zp0x": function zp0x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SiteInfoRoutingModule", function () {
        return SiteInfoRoutingModule;
      });
      /* harmony import */


      var _contr_and_act_req_add_contr_act_add_contr_act_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./contr-and-act-req/add-contr-act/add-contr-act.component */
      "v0b5");
      /* harmony import */


      var _contr_and_act_req_contr_and_act_req_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./contr-and-act-req/contr-and-act-req.component */
      "tTCJ");
      /* harmony import */


      var _identify_hazards_add_hazard_add_hazard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./identify-hazards/add-hazard/add-hazard.component */
      "/S5m");
      /* harmony import */


      var _identify_hazards_identify_hazards_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./identify-hazards/identify-hazards.component */
      "G2Gx");
      /* harmony import */


      var _project_manager_project_manager_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./project-manager/project-manager.component */
      "xnNE");
      /* harmony import */


      var _code_of_pract_edit_cop_edit_cop_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./code-of-pract/edit-cop/edit-cop.component */
      "VpO3");
      /* harmony import */


      var _code_of_pract_add_cop_add_cop_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./code-of-pract/add-cop/add-cop.component */
      "O1Ir");
      /* harmony import */


      var _code_of_pract_code_of_pract_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./code-of-pract/code-of-pract.component */
      "V+lG");
      /* harmony import */


      var _licence_and_qual_licence_cat_edit_licence_cat_edit_licence_cat_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./licence-and-qual/licence-cat/edit-licence-cat/edit-licence-cat.component */
      "HQ6n");
      /* harmony import */


      var _licence_and_qual_licence_cat_licence_cat_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./licence-and-qual/licence-cat/licence-cat.component */
      "SKiF");
      /* harmony import */


      var _licence_and_qual_edit_licence_edit_licence_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./licence-and-qual/edit-licence/edit-licence.component */
      "0qak");
      /* harmony import */


      var _licence_and_qual_add_licence_add_licence_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./licence-and-qual/add-licence/add-licence.component */
      "czur");
      /* harmony import */


      var _ppe_select_add_ppe_add_ppe_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./ppe-select/add-ppe/add-ppe.component */
      "joJy");
      /* harmony import */


      var _high_risk_con_add_high_risk_construction_add_high_risk_construction_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./high-risk-con/add-high-risk-construction/add-high-risk-construction.component */
      "0GLU");
      /* harmony import */


      var _job_task_add_job_task_add_job_task_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./job-task/add-job-task/add-job-task.component */
      "X72n");
      /* harmony import */


      var _add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./add-customer/add-customer.component */
      "L+dl");
      /* harmony import */


      var _ppe_select_ppe_select_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./ppe-select/ppe-select.component */
      "SEER");
      /* harmony import */


      var _licence_and_qual_licence_and_qual_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./licence-and-qual/licence-and-qual.component */
      "pMia");
      /* harmony import */


      var _high_risk_con_high_risk_con_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./high-risk-con/high-risk-con.component */
      "iXE9");
      /* harmony import */


      var _job_task_job_task_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./job-task/job-task.component */
      "pCeX");
      /* harmony import */


      var _add_site_info_add_site_info_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./add-site-info/add-site-info.component */
      "yvBN");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _licence_and_qual_licence_cat_add_licence_cat_add_licence_cat_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./licence-and-qual/licence-cat/add-licence-cat/add-licence-cat.component */
      "i6cX");
      /* harmony import */


      var _add_site_info_add_site_add_site_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./add-site-info/add-site/add-site.component */
      "2xAX");
      /* harmony import */


      var _add_site_info_edit_site_edit_site_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./add-site-info/edit-site/edit-site.component */
      "2X0P");

      var routes = [{
        path: 'addSite',
        component: _add_site_info_add_site_info_component__WEBPACK_IMPORTED_MODULE_20__["AddSiteInfoComponent"],
        children: [{
          path: 'addSite1',
          component: _add_site_info_add_site_add_site_component__WEBPACK_IMPORTED_MODULE_24__["AddSiteComponent"]
        }, {
          path: 'editSite',
          component: _add_site_info_edit_site_edit_site_component__WEBPACK_IMPORTED_MODULE_25__["EditSiteComponent"]
        }]
      }, {
        path: 'addCustomer',
        component: _add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_15__["AddCustomerComponent"]
      }, {
        path: 'jobTask',
        component: _job_task_job_task_component__WEBPACK_IMPORTED_MODULE_19__["JobTaskComponent"]
      }, {
        path: 'addJobTask',
        component: _job_task_add_job_task_add_job_task_component__WEBPACK_IMPORTED_MODULE_14__["AddJobTaskComponent"]
      }, {
        path: 'addHighRisk',
        component: _high_risk_con_add_high_risk_construction_add_high_risk_construction_component__WEBPACK_IMPORTED_MODULE_13__["AddHighRiskConstructionComponent"]
      }, {
        path: 'addPPE',
        component: _ppe_select_add_ppe_add_ppe_component__WEBPACK_IMPORTED_MODULE_12__["AddPPEComponent"]
      }, {
        path: 'highRisk',
        component: _high_risk_con_high_risk_con_component__WEBPACK_IMPORTED_MODULE_18__["HighRiskConComponent"]
      }, {
        path: 'licenceAndQual',
        component: _licence_and_qual_licence_and_qual_component__WEBPACK_IMPORTED_MODULE_17__["LicenceAndQualComponent"]
      }, {
        path: 'addLicence',
        component: _licence_and_qual_add_licence_add_licence_component__WEBPACK_IMPORTED_MODULE_11__["AddLicenceComponent"]
      }, {
        path: 'editLicence',
        component: _licence_and_qual_edit_licence_edit_licence_component__WEBPACK_IMPORTED_MODULE_10__["EditLicenceComponent"]
      }, {
        path: 'licenceCat',
        component: _licence_and_qual_licence_cat_licence_cat_component__WEBPACK_IMPORTED_MODULE_9__["LicenceCatComponent"]
      }, {
        path: 'addLicenceCat',
        component: _licence_and_qual_licence_cat_add_licence_cat_add_licence_cat_component__WEBPACK_IMPORTED_MODULE_23__["AddLicenceCatComponent"]
      }, {
        path: 'editLicenceCat',
        component: _licence_and_qual_licence_cat_edit_licence_cat_edit_licence_cat_component__WEBPACK_IMPORTED_MODULE_8__["EditLicenceCatComponent"]
      }, {
        path: 'ppeSel',
        component: _ppe_select_ppe_select_component__WEBPACK_IMPORTED_MODULE_16__["PpeSelectComponent"]
      }, {
        path: 'codeOfpract',
        component: _code_of_pract_code_of_pract_component__WEBPACK_IMPORTED_MODULE_7__["CodeOfPractComponent"]
      }, {
        path: 'addCOP',
        component: _code_of_pract_add_cop_add_cop_component__WEBPACK_IMPORTED_MODULE_6__["AddCOPComponent"]
      }, {
        path: 'editCOP',
        component: _code_of_pract_edit_cop_edit_cop_component__WEBPACK_IMPORTED_MODULE_5__["EditCOPComponent"]
      }, // { path: 'uploadData', component: UploadBulkDataComponent },
      {
        path: 'projMang',
        component: _project_manager_project_manager_component__WEBPACK_IMPORTED_MODULE_4__["ProjectManagerComponent"]
      }, {
        path: 'hazards',
        component: _identify_hazards_identify_hazards_component__WEBPACK_IMPORTED_MODULE_3__["IdentifyHazardsComponent"]
      }, {
        path: 'addHazards',
        component: _identify_hazards_add_hazard_add_hazard_component__WEBPACK_IMPORTED_MODULE_2__["AddHazardComponent"]
      }, {
        path: 'contrlActReq',
        component: _contr_and_act_req_contr_and_act_req_component__WEBPACK_IMPORTED_MODULE_1__["ContrAndActReqComponent"]
      }, {
        path: 'addContrlActReq',
        component: _contr_and_act_req_add_contr_act_add_contr_act_component__WEBPACK_IMPORTED_MODULE_0__["AddContrActComponent"]
      }];

      var SiteInfoRoutingModule = function SiteInfoRoutingModule() {
        _classCallCheck(this, SiteInfoRoutingModule);
      };

      SiteInfoRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineNgModule"]({
        type: SiteInfoRoutingModule
      });
      SiteInfoRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjector"]({
        factory: function SiteInfoRoutingModule_Factory(t) {
          return new (t || SiteInfoRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsetNgModuleScope"](SiteInfoRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵsetClassMetadata"](SiteInfoRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_21__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=site-info-site-info-module-es5.js.map