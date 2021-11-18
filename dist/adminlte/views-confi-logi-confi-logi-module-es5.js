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


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "PCNd");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _confi_logi_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./confi-logi-routing.module */
      "il7X");
      /* harmony import */


      var _confi_logi_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./confi-logi.component */
      "ao8m");
      /* harmony import */


      var _set_logic_set_logic_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./set-logic/set-logic.component */
      "bu9C");
      /* harmony import */


      var _job_number_job_number_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./job-number/job-number.component */
      "zQXG");
      /* harmony import */


      var _job_number_create_job_no_create_job_no_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./job-number/create-job-no/create-job-no.component */
      "bXbX");
      /* harmony import */


      var _set_logic_set_relation_set_relation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./set-logic/set-relation/set-relation.component */
      "6ZYc");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/stepper */
      "hzfI");
      /* harmony import */


      var _set_logic_set_relation_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./set-logic/set-relation/add-item/add-item.component */
      "wKjp");
      /* harmony import */


      var _set_logic_test_logic_test_logic_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./set-logic/test-logic/test-logic.component */
      "THzD");

      var ConfiLogiModule = function ConfiLogiModule() {
        _classCallCheck(this, ConfiLogiModule);
      };

      ConfiLogiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: ConfiLogiModule
      });
      ConfiLogiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function ConfiLogiModule_Factory(t) {
          return new (t || ConfiLogiModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _confi_logi_routing_module__WEBPACK_IMPORTED_MODULE_6__["ConfiLogiRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__["MatStepperModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ConfiLogiModule, {
          declarations: [_confi_logi_component__WEBPACK_IMPORTED_MODULE_7__["ConfiLogiComponent"], _set_logic_set_logic_component__WEBPACK_IMPORTED_MODULE_8__["SetLogicComponent"], _job_number_job_number_component__WEBPACK_IMPORTED_MODULE_9__["JobNumberComponent"], _job_number_create_job_no_create_job_no_component__WEBPACK_IMPORTED_MODULE_10__["CreateJobNoComponent"], _set_logic_set_relation_set_relation_component__WEBPACK_IMPORTED_MODULE_11__["SetRelationComponent"], _set_logic_set_relation_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_13__["AddItemComponent"], _set_logic_test_logic_test_logic_component__WEBPACK_IMPORTED_MODULE_14__["TestLogicComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _confi_logi_routing_module__WEBPACK_IMPORTED_MODULE_6__["ConfiLogiRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__["MatStepperModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ConfiLogiModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            declarations: [_confi_logi_component__WEBPACK_IMPORTED_MODULE_7__["ConfiLogiComponent"], _set_logic_set_logic_component__WEBPACK_IMPORTED_MODULE_8__["SetLogicComponent"], _job_number_job_number_component__WEBPACK_IMPORTED_MODULE_9__["JobNumberComponent"], _job_number_create_job_no_create_job_no_component__WEBPACK_IMPORTED_MODULE_10__["CreateJobNoComponent"], _set_logic_set_relation_set_relation_component__WEBPACK_IMPORTED_MODULE_11__["SetRelationComponent"], _set_logic_set_relation_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_13__["AddItemComponent"], _set_logic_test_logic_test_logic_component__WEBPACK_IMPORTED_MODULE_14__["TestLogicComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _confi_logi_routing_module__WEBPACK_IMPORTED_MODULE_6__["ConfiLogiRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__["MatStepperModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "6ZYc": function ZYc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SetRelationComponent", function () {
        return SetRelationComponent;
      });
      /* harmony import */


      var _add_item_add_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./add-item/add-item.component */
      "wKjp");
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/utils/services/logical-form-info.service */
      "wbBK");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/stepper */
      "hzfI");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/select */
      "ZTz/");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");

      function SetRelationComponent_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "HighRisk Construction");
        }
      }

      function SetRelationComponent_span_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 36);
        }
      }

      function SetRelationComponent_span_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " One Item selected ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function SetRelationComponent_span_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " More than one selected ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function SetRelationComponent_mat_option_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var parameter_r41 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", parameter_r41._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", parameter_r41.title, "");
        }
      }

      function SetRelationComponent_ng_template_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "PPE");
        }
      }

      function SetRelationComponent_span_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 36);
        }
      }

      function SetRelationComponent_span_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " One Item selected ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function SetRelationComponent_span_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " More than one selected ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function SetRelationComponent_mat_option_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var parameter_r42 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", parameter_r42._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", parameter_r42.title, " ");
        }
      }

      function SetRelationComponent_ng_template_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Licence ");
        }
      }

      function SetRelationComponent_ng_template_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Licence Category");
        }
      }

      function SetRelationComponent_span_79_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 36);
        }
      }

      function SetRelationComponent_span_80_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " One Item selected ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function SetRelationComponent_span_81_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " More than one selected ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function SetRelationComponent_mat_option_82_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var parameter_r43 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", parameter_r43._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", parameter_r43.title, " ");
        }
      }

      function SetRelationComponent_ng_template_87_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Identify Hazards");
        }
      }

      function SetRelationComponent_span_102_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 36);
        }
      }

      function SetRelationComponent_span_103_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " One Item selected ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function SetRelationComponent_span_104_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " More than one selected ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function SetRelationComponent_mat_option_105_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var parameter_r44 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", parameter_r44._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", parameter_r44.title, " ");
        }
      }

      function SetRelationComponent_ng_template_110_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Risk Level");
        }
      }

      function SetRelationComponent_mat_option_124_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var parameter_r45 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", parameter_r45._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", parameter_r45.title, " ");
        }
      }

      function SetRelationComponent_ng_template_129_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Control Action Required");
        }
      }

      function SetRelationComponent_span_144_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 36);
        }
      }

      function SetRelationComponent_span_145_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " One Item selected ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function SetRelationComponent_span_146_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " More than one selected ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function SetRelationComponent_mat_option_147_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var parameter_r46 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", parameter_r46._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", parameter_r46.title, " ");
        }
      }

      function SetRelationComponent_ng_template_153_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Code of Practice");
        }
      }

      function SetRelationComponent_ng_template_159_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Residule Risk Level");
        }
      }

      function SetRelationComponent_span_175_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 36);
        }
      }

      function SetRelationComponent_span_176_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " One Item selected ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function SetRelationComponent_span_177_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " More than one selected ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function SetRelationComponent_mat_option_178_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var parameter_r47 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", parameter_r47._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", parameter_r47.title, " ");
        }
      }

      function SetRelationComponent_ng_template_183_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Residule Risk Level");
        }
      }

      function SetRelationComponent_mat_option_197_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var parameter_r48 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", parameter_r48._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", parameter_r48.title, " ");
        }
      }

      function SetRelationComponent_ng_template_202_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Chemical related Task");
        }
      }

      function SetRelationComponent_ng_template_222_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Person Responsible");
        }
      }

      function SetRelationComponent_mat_option_236_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var person_r49 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", person_r49._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", person_r49.title, " ");
        }
      }

      function SetRelationComponent_button_239_Template(rf, ctx) {
        if (rf & 1) {
          var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SetRelationComponent_button_239_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r51);

            var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r50.setRelation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Set");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function SetRelationComponent_button_240_Template(rf, ctx) {
        if (rf & 1) {
          var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SetRelationComponent_button_240_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r53);

            var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r52.setRelation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return ["/admin/confiLogi/setLogic"];
      };

      var SetRelationComponent = /*#__PURE__*/function () {
        function SetRelationComponent(route, dialog, router, fb, logicalFormInfo) {
          _classCallCheck(this, SetRelationComponent);

          this.route = route;
          this.dialog = dialog;
          this.router = router;
          this.fb = fb;
          this.logicalFormInfo = logicalFormInfo;
          this.jobTask = null;
          this.highRiskConstructionData = [];
          this.PPESelectionData = [];
          this.licenseAndQual = [];
          this.allHazards = [];
          this.allContrlActReq = [];
          this.licenceByTradecat = [];
          this.resiRiskLevelData = [];
          this.riskLevelData = [];
          this.staff = [];
          this.allCodeOfPract = [];
          this.isLinear = false;
          this.jobTaskId = null;
        }

        _createClass(SetRelationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.JobTaskDetail = this.fb.group({
              highRiskConstr: [''],
              PPE: [''],
              codeOfPract: [''],
              LicenceCat: [''],
              identifyHazrds: [''],
              contrActReq: [''],
              riskLevel: [''],
              residualRiskL: [''],
              personResp: [''],
              chemical: []
            });
            this.route.queryParams.subscribe(function (id) {
              console.log(id);
              _this.jobTaskId = id.id;

              _this.logicalFormInfo.getJobtaskById(id.id).subscribe(function (res) {
                var _a;

                _this.jobTask = res.data;
                console.log('this.jobTask ', _this.jobTask);

                _this.getLicenceByTradeCat(_this.jobTask.tradeCategoryId);

                if (_this.jobTask.set == true) {
                  _this.JobTaskDetail.patchValue({
                    highRiskConstr: _this.jobTask.risk,
                    PPE: _this.jobTask.PPE,
                    codeOfPract: _this.jobTask.PPE,
                    LicenceCat: _this.jobTask.licence,
                    identifyHazrds: _this.jobTask.identifyHazard,
                    contrActReq: _this.jobTask.controlActionRequired,
                    riskLevel: _this.jobTask.riskLevel,
                    residualRiskL: _this.jobTask.residualRisk,
                    personResp: _this.jobTask.staffId,
                    chemical: _this.jobTask.chemical
                  });
                }

                if (((_a = _this.jobTask) === null || _a === void 0 ? void 0 : _a.chemical) === 'YES') _this.JobTaskDetail.get('chemical').setValue('YES');else _this.JobTaskDetail.get('chemical').setValue('NO');
              });
            });
            this.getAllHighRisk();
            this.getAllPPE();
            this.getAllHazard();
            this.getAllContrActReq();
            this.getAllStaff();
            this.getAllResidualRiskLevel();
            this.getAllRiskLevel();
            this.getAllCodeOfPractice();
          }
        }, {
          key: "getAllResidualRiskLevel",
          value: function getAllResidualRiskLevel() {
            var _this2 = this;

            this.logicalFormInfo.getAllResidual().subscribe(function (res) {
              console.log('this.resiRiskLevelData', res.data);
              _this2.resiRiskLevelData = res.data;
            });
          }
        }, {
          key: "getAllRiskLevel",
          value: function getAllRiskLevel() {
            var _this3 = this;

            this.logicalFormInfo.getAllRiskLevel().subscribe(function (res) {
              console.log('this.riskLevelData', res.data);
              _this3.riskLevelData = res.data;
            });
          }
        }, {
          key: "getAllStaff",
          value: function getAllStaff() {
            var _this4 = this;

            this.logicalFormInfo.getAllStaff().subscribe(function (res) {
              console.log(res);
              _this4.staff = res.data;
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
          }
        }, {
          key: "getAllCodeOfPractice",
          value: function getAllCodeOfPractice() {
            var _this7 = this;

            this.logicalFormInfo.getAllCOP().subscribe(function (res) {
              console.log('codeOfPractice=>', res);
              _this7.allCodeOfPract = res.data;
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
          key: "getLicenceByTradeCat",
          value: function getLicenceByTradeCat(id) {
            var _this10 = this;

            console.log('getLicenceByTradeCat', id);
            this.logicalFormInfo.getLicenceByTradeCat(id).subscribe(function (res) {
              console.log('getAllLicenceCat=>', res);
              _this10.licenceByTradecat = res.data.licenceData;
            });
          }
        }, {
          key: "setRelation",
          value: function setRelation() {
            var _this11 = this;

            console.log(this.JobTaskDetail.value);
            var allContrlActReqTitle = [];
            var temp1 = this.JobTaskDetail.get('contrActReq').value;
            this.allContrlActReq.forEach(function (element1) {
              temp1.forEach(function (element2) {
                if (element1._id === element2) {
                  allContrlActReqTitle.push(element1.title);
                }
              });
            });
            var allHazardsTitle = [];
            var temp2 = this.JobTaskDetail.get('identifyHazrds').value;
            this.allHazards.forEach(function (element1) {
              temp2.forEach(function (element2) {
                if (element1._id === element2) {
                  allHazardsTitle.push(element1.title);
                }
              });
            });
            var allCOPTitle = [];
            var temp3 = this.JobTaskDetail.get('codeOfPract').value;
            this.allCodeOfPract.forEach(function (element1) {
              temp3.forEach(function (element2) {
                if (element1._id === element2) {
                  allCOPTitle.push(element1.title);
                }
              });
            });
            var data = {
              title: this.jobTask.title,
              risk: this.JobTaskDetail.get('highRiskConstr').value,
              PPE: this.JobTaskDetail.get('PPE').value,
              tradeCategoryId: this.jobTask.tradeCategoryId,
              licence: this.JobTaskDetail.get('LicenceCat').value,
              identifyHazard: this.JobTaskDetail.get('identifyHazrds').value,
              controlActionRequired: this.JobTaskDetail.get('contrActReq').value,
              riskLevel: this.JobTaskDetail.get('riskLevel').value,
              residualRisk: this.JobTaskDetail.get('residualRiskL').value,
              staffId: this.JobTaskDetail.get('personResp').value,
              chemical: this.JobTaskDetail.get('chemical').value,
              set: true
            };
            console.log('send data', data);
            this.logicalFormInfo.updateJobTask(data, this.jobTaskId).subscribe(function (res) {
              console.log('resJob Task=>', res);
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: 'Relation set successfully',
                showConfirmButton: false,
                timer: 1200
              });

              _this11.router.navigate(['/admin/confiLogi/setLogic']);
            });
          }
        }, {
          key: "addItem",
          value: function addItem(type) {
            var _this12 = this;

            var temp = {
              type: type,
              tradeCategoryId: this.jobTask.tradeCategoryId
            };

            if (type === 'licence') {
              temp = {
                type: type,
                tradeCategoryId: this.jobTask.tradeCategoryId
              };
            } else {
              temp = {
                type: type,
                tradeCategoryId: ''
              };
            }

            var dialogRef = this.dialog.open(_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_0__["AddItemComponent"], {
              width: '550px',
              // height:'50%',
              data: temp
            });
            dialogRef.afterClosed().subscribe(function (result) {
              switch (result) {
                case 'highRisk':
                  {
                    var data = _this12.JobTaskDetail.get('highRiskConstr').value;

                    _this12.getAllHighRisk();

                    _this12.JobTaskDetail.get('highRiskConstr').patchValue(data);

                    break;
                  }

                case 'ppe':
                  {
                    var _data = _this12.JobTaskDetail.get('PPE').value;

                    _this12.getAllPPE();

                    _this12.JobTaskDetail.get('PPE').patchValue(_data);

                    break;
                  }

                case 'codeOfPract':
                  {
                    var _data2 = _this12.JobTaskDetail.get('codeOfPract').value;

                    _this12.getAllCodeOfPractice();

                    _this12.JobTaskDetail.get('codeOfPract').patchValue(_data2);

                    break;
                  }

                case 'licence':
                  {
                    var _data3 = _this12.JobTaskDetail.get('LicenceCat').value;

                    _this12.getLicenceByTradeCat(_this12.jobTask.tradeCategoryId);

                    _this12.JobTaskDetail.get('LicenceCat').patchValue(_data3);

                    break;
                  }

                case 'identifyHazards':
                  {
                    var _data4 = _this12.JobTaskDetail.get('identifyHazrds').value;

                    _this12.getAllHazard();

                    _this12.JobTaskDetail.get('identifyHazrds').patchValue(_data4);

                    break;
                  }

                case 'riskLevel':
                  {
                    var _data5 = _this12.JobTaskDetail.get('riskLevel').value;

                    _this12.getAllRiskLevel();

                    _this12.JobTaskDetail.get('riskLevel').patchValue(_data5);

                    break;
                  }

                case 'ctrlActreq':
                  {
                    var _data6 = _this12.JobTaskDetail.get('contrActReq').value;

                    _this12.getAllContrActReq();

                    _this12.JobTaskDetail.get('contrActReq').patchValue(_data6);

                    break;
                  }

                case 'resRiskLevel':
                  {
                    var _data7 = _this12.JobTaskDetail.get('residualRiskL').value;

                    _this12.getAllResidualRiskLevel();

                    _this12.JobTaskDetail.get('residualRiskL').patchValue(_data7);

                    break;
                  }

                case 'perResbl':
                  {
                    var _data8 = _this12.JobTaskDetail.get('personResp').value;

                    _this12.getAllStaff();

                    _this12.JobTaskDetail.get('personResp').patchValue(_data8);

                    break;
                  }
              }

              console.log('The dialog was closed');
            });
          }
        }]);

        return SetRelationComponent;
      }();

      SetRelationComponent.ɵfac = function SetRelationComponent_Factory(t) {
        return new (t || SetRelationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_6__["LogicalFormInfoService"]));
      };

      SetRelationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: SetRelationComponent,
        selectors: [["app-set-relation"]],
        decls: 241,
        vars: 33,
        consts: [[1, "btn", "btn-outline-primary", 3, "routerLink"], ["aria-hidden", "true", 1, "fa", "fa-arrow-left"], [1, "ml-2"], [2, "height", "500px", 3, "formGroup"], ["matStepLabel", ""], [1, "text-center", "mt-3"], [1, "material-icons", "ml-3", 3, "click"], [1, "row", "justify-content-center"], [1, "col-1", "my-auto"], [1, "col-7"], ["appearance", "fill", 1, "container"], [1, "text-center"], ["formControlName", "highRiskConstr", "multiple", ""], ["class", "example-additional-selection", 4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], ["matStepperNext", "", 1, "btn"], [1, "fas", "fa-arrow-right"], ["matStepperPrevious", "", 1, "btn"], [1, "fas", "fa-arrow-left"], ["formControlName", "PPE", "multiple", ""], ["formControlName", "LicenceCat", "multiple", ""], ["formControlName", "identifyHazrds", "multiple", ""], ["formControlName", "riskLevel"], ["formControlName", "contrActReq", "multiple", ""], ["formControlName", "codeOfPract", "multiple", ""], ["formControlName", "residualRiskL"], [1, "col-7", "text-center"], [1, "form-check", "form-check-inline"], ["type", "radio", "value", "YES", "formControlName", "chemical", 1, "form-check-input"], ["for", "inlineRadio1", 1, "form-check-label"], ["type", "radio", "value", "NO", "formControlName", "chemical", 1, "form-check-input"], ["for", "inlineRadio2", 1, "form-check-label"], [1, "row", "justify-content-center", "mt-3"], [1, "col-6"], ["formControlName", "personResp"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], [1, "example-additional-selection"], [3, "value"], [1, "btn", "btn-primary", 3, "click"]],
        template: function SetRelationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-horizontal-stepper", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-step");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SetRelationComponent_ng_template_7_Template, 1, 0, "ng-template", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h2", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "HighRisk Construction");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SetRelationComponent_Template_span_click_10_listener() {
              return ctx.addItem("highRisk");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "add_circle_outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-form-field", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "HighRiskConstruction");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-select", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-select-trigger");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, SetRelationComponent_span_20_Template, 1, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, SetRelationComponent_span_21_Template, 2, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, SetRelationComponent_span_22_Template, 2, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, SetRelationComponent_mat_option_23_Template, 2, 2, "mat-option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-step");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, SetRelationComponent_ng_template_28_Template, 1, 0, "ng-template", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "h2", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "PPE");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SetRelationComponent_Template_span_click_31_listener() {
              return ctx.addItem("ppe");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "add_circle_outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "mat-form-field", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "PPE selection");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "mat-select", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "mat-select-trigger");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, SetRelationComponent_span_43_Template, 1, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, SetRelationComponent_span_44_Template, 2, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, SetRelationComponent_span_45_Template, 2, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, SetRelationComponent_mat_option_46_Template, 2, 2, "mat-option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "mat-step");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "\n<<<<<<< HEAD ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, SetRelationComponent_ng_template_52_Template, 1, 0, "ng-template", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "h2", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Licences ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SetRelationComponent_Template_span_click_55_listener() {
              return ctx.addItem("licence");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "add_circle_outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "\n======= ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](58, SetRelationComponent_ng_template_58_Template, 1, 0, "ng-template", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "h2", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Licence ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SetRelationComponent_Template_span_click_61_listener() {
              return ctx.addItem("licence");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "add_circle_outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "\n>>>>>>> 251c0a9b0f57bd4e73303b18d5b531815caa435a ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "mat-form-field", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "\n<<<<<<< HEAD ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Licences");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, " ======= ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Licences");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, " >>>>>>> 251c0a9b0f57bd4e73303b18d5b531815caa435a ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "mat-select", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "mat-select-trigger");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](79, SetRelationComponent_span_79_Template, 1, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](80, SetRelationComponent_span_80_Template, 2, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](81, SetRelationComponent_span_81_Template, 2, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](82, SetRelationComponent_mat_option_82_Template, 2, 2, "mat-option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "mat-step");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](87, SetRelationComponent_ng_template_87_Template, 1, 0, "ng-template", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "h2", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Identify Hazards");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SetRelationComponent_Template_span_click_90_listener() {
              return ctx.addItem("identifyHazards");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "add_circle_outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](95, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "mat-form-field", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "Identify Hazards");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "mat-select", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "mat-select-trigger");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](102, SetRelationComponent_span_102_Template, 1, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](103, SetRelationComponent_span_103_Template, 2, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](104, SetRelationComponent_span_104_Template, 2, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](105, SetRelationComponent_mat_option_105_Template, 2, 2, "mat-option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](108, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "mat-step");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](110, SetRelationComponent_ng_template_110_Template, 1, 0, "ng-template", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "h2", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "Risk Level");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SetRelationComponent_Template_span_click_113_listener() {
              return ctx.addItem("riskLevel");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "add_circle_outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](118, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "mat-form-field", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "Risk Level");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "mat-select", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](124, SetRelationComponent_mat_option_124_Template, 2, 2, "mat-option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](127, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "mat-step");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](129, SetRelationComponent_ng_template_129_Template, 1, 0, "ng-template", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "h2", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, "Control Action Required");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SetRelationComponent_Template_span_click_132_listener() {
              return ctx.addItem("ctrlActreq");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "add_circle_outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](137, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "mat-form-field", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, "Control Action Required");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "mat-select", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "mat-select-trigger");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](144, SetRelationComponent_span_144_Template, 1, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](145, SetRelationComponent_span_145_Template, 2, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](146, SetRelationComponent_span_146_Template, 2, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](147, SetRelationComponent_mat_option_147_Template, 2, 2, "mat-option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](150, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "mat-step");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "\n<<<<<<< HEAD ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](153, SetRelationComponent_ng_template_153_Template, 1, 0, "ng-template", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "h2", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155, "Code of Practice");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SetRelationComponent_Template_span_click_156_listener() {
              return ctx.addItem("codeOfPract");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, "add_circle_outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](158, "\n======= ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](159, SetRelationComponent_ng_template_159_Template, 1, 0, "ng-template", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "h2", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, "Residule Risk Level");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SetRelationComponent_Template_span_click_162_listener() {
              return ctx.addItem("resRiskLevel");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](163, "add_circle_outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, "\n>>>>>>> 251c0a9b0f57bd4e73303b18d5b531815caa435a ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](168, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "mat-form-field", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](172, "Code of Practice");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "mat-select", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "mat-select-trigger");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](175, SetRelationComponent_span_175_Template, 1, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](176, SetRelationComponent_span_176_Template, 2, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](177, SetRelationComponent_span_177_Template, 2, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](178, SetRelationComponent_mat_option_178_Template, 2, 2, "mat-option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](181, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "mat-step");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](183, SetRelationComponent_ng_template_183_Template, 1, 0, "ng-template", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "h2", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](185, "Residule Risk Level");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SetRelationComponent_Template_span_click_186_listener() {
              return ctx.addItem("resRiskLevel");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](187, "add_circle_outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](191, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "mat-form-field", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](195, "Residule Risk Level");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "mat-select", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](197, SetRelationComponent_mat_option_197_Template, 2, 2, "mat-option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](200, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "mat-step");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](202, SetRelationComponent_ng_template_202_Template, 1, 0, "ng-template", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "h2", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](204, "Is this Job Task includes Chemicals?");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](208, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](211, "input", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "label", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](213, "Yes");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](215, "input", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "label", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](217, "No");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](220, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](221, "mat-step");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](222, SetRelationComponent_ng_template_222_Template, 1, 0, "ng-template", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "h2", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](224, "Person Responsible");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SetRelationComponent_Template_span_click_225_listener() {
              return ctx.addItem("perResbl");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](226, "add_circle_outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](229, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](230, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](232, "mat-form-field", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](234, "Person Responsible");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "mat-select", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](236, SetRelationComponent_mat_option_236_Template, 2, 2, "mat-option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](237, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](238, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](239, SetRelationComponent_button_239_Template, 2, 0, "button", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](240, SetRelationComponent_button_240_Template, 2, 0, "button", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](32, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Job Task :\xA0", ctx.jobTask == null ? null : ctx.jobTask.title, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.JobTaskDetail);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx.JobTaskDetail.get("highRiskConstr").value == null ? null : ctx.JobTaskDetail.get("highRiskConstr").value.length));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.JobTaskDetail.get("highRiskConstr").value == null ? null : ctx.JobTaskDetail.get("highRiskConstr").value.length) == 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.JobTaskDetail.get("highRiskConstr").value == null ? null : ctx.JobTaskDetail.get("highRiskConstr").value.length) > 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.highRiskConstructionData);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx.JobTaskDetail.get("PPE").value == null ? null : ctx.JobTaskDetail.get("PPE").value.length));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.JobTaskDetail.get("PPE").value == null ? null : ctx.JobTaskDetail.get("PPE").value.length) == 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.JobTaskDetail.get("PPE").value == null ? null : ctx.JobTaskDetail.get("PPE").value.length) > 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.PPESelectionData);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx.JobTaskDetail.get("LicenceCat").value == null ? null : ctx.JobTaskDetail.get("LicenceCat").value.length));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.JobTaskDetail.get("LicenceCat").value == null ? null : ctx.JobTaskDetail.get("LicenceCat").value.length) == 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.JobTaskDetail.get("LicenceCat").value == null ? null : ctx.JobTaskDetail.get("LicenceCat").value.length) > 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.licenceByTradecat);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx.JobTaskDetail.get("identifyHazrds").value == null ? null : ctx.JobTaskDetail.get("identifyHazrds").value.length));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.JobTaskDetail.get("identifyHazrds").value == null ? null : ctx.JobTaskDetail.get("identifyHazrds").value.length) == 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.JobTaskDetail.get("identifyHazrds").value == null ? null : ctx.JobTaskDetail.get("identifyHazrds").value.length) > 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.allHazards);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.riskLevelData);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx.JobTaskDetail.get("contrActReq").value == null ? null : ctx.JobTaskDetail.get("contrActReq").value.length));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.JobTaskDetail.get("contrActReq").value == null ? null : ctx.JobTaskDetail.get("contrActReq").value.length) == 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.JobTaskDetail.get("contrActReq").value == null ? null : ctx.JobTaskDetail.get("contrActReq").value.length) > 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.allContrlActReq);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx.JobTaskDetail.get("codeOfPract").value == null ? null : ctx.JobTaskDetail.get("codeOfPract").value.length));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.JobTaskDetail.get("codeOfPract").value == null ? null : ctx.JobTaskDetail.get("codeOfPract").value.length) == 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.JobTaskDetail.get("codeOfPract").value == null ? null : ctx.JobTaskDetail.get("codeOfPract").value.length) > 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.allCodeOfPract);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.resiRiskLevelData);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.staff);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx.jobTask == null ? null : ctx.jobTask.set));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.jobTask == null ? null : ctx.jobTask.set);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatHorizontalStepper"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatStep"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatStepLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectTrigger"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatStepperNext"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatStepperPrevious"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"]],
        styles: [".example-additional-selection[_ngcontent-%COMP%] {\n  opacity: 0.75;\n  font-size: 0.75em;\n}\n\n.mat-stepper-horizontal[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNldC1yZWxhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUNFO0VBQ0UsZUFBQTtBQUVKOztBQUNFO0VBQ0UsZ0JBQUE7QUFFSiIsImZpbGUiOiJzZXQtcmVsYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1hZGRpdGlvbmFsLXNlbGVjdGlvbiB7XHJcbiAgICBvcGFjaXR5OiAwLjc1O1xyXG4gICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgfVxyXG4gIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgfSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SetRelationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-set-relation',
            templateUrl: './set-relation.component.html',
            styleUrls: ['./set-relation.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
          }, {
            type: src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_6__["LogicalFormInfoService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "THzD": function THzD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TestLogicComponent", function () {
        return TestLogicComponent;
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


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");

      function TestLogicComponent_p_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TestLogicComponent_p_5_Template_p_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var i_r3 = ctx.index;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.handleClick(i_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = ctx.$implicit;
          var i_r3 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r0.stepperList[i_r3].i);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.name);
        }
      }

      function TestLogicComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r6 = ctx.$implicit;
          var i_r7 = ctx.index;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r1.stepperList[i_r7].i)("show", ctx_r1.stepperList[i_r7].i);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.name);
        }
      }

      var TestLogicComponent = /*#__PURE__*/function () {
        function TestLogicComponent() {
          _classCallCheck(this, TestLogicComponent);

          this.count = 0;
          this.stepperList = [{
            name: 'Personal information',
            i: 1,
            tag: "<mat-step >\n      <ng-template matStepLabel>Person Responsible</ng-template>\n      <h2 class=\"text-center mt-3\">Person Responsible<span class=\"material-icons ml-3\"(click)=\"addItem('perResbl')\" >add_circle_outline</span></h2>\n      <div class=\"row justify-content-center mt-3\">\n          <div class=\"col-1 my-auto\"> \n              <button class=\"btn\" matStepperPrevious><i class=\"fas fa-arrow-left\"></i></button>\n          </div>\n          <div class=\"col-6\">\n            \n              <mat-form-field class=\"container\" appearance=\"fill\">\n                <mat-label>Person Responsible</mat-label>\n                <mat-select formControlName=\"personResp\">\n                  <mat-option *ngFor=\"let person of staff\" [value]=\"person._id\">\n                    {{person.title}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n          </div>\n          <div class=\"col-1 my-auto\">\n              <!-- <button class=\"btn\" matStepperNext><i class=\"fas fa-arrow-right\"></i></button> -->\n          </div>\n      </div>\n  \n      <div class=\"text-center mt-3\">\n        <button *ngIf=\"!jobTask?.set\" class=\"btn btn-primary\"(click)=\"setRelation()\">Set</button>\n        <button *ngIf=\"jobTask?.set\" class=\"btn btn-primary\"(click)=\"setRelation()\">Update</button>\n      </div>\n    </mat-step>"
          }, {
            name: 'Bookings',
            i: 0
          }, {
            name: 'Reviews',
            i: 0
          }, {
            name: 'Confirm booking',
            i: 0
          }];
          this.arr = [1, 0, 0, 0];
        }

        _createClass(TestLogicComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "prev",
          value: function prev(item) {
            if (this.count != this.stepperList.length + 1) {
              this.count--;
              this.stepperList.map(function (x) {
                x.i = 0;
              });
              this.stepperList[this.count].i = 1;
            }
          }
        }, {
          key: "next",
          value: function next(item) {
            if (this.count != this.stepperList.length - 1) {
              this.count++;
              this.stepperList.map(function (x) {
                x.i = 0;
              });
              this.stepperList[this.count].i = 1;
            }
          }
        }, {
          key: "handleClick",
          value: function handleClick(index) {
            console.log(index);
            this.count = index;
            this.stepperList.map(function (x) {
              x.i = 0;
            });
            this.stepperList[this.count].i = 1;
          }
        }]);

        return TestLogicComponent;
      }();

      TestLogicComponent.ɵfac = function TestLogicComponent_Factory(t) {
        return new (t || TestLogicComponent)();
      };

      TestLogicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TestLogicComponent,
        selectors: [["app-test-logic"]],
        decls: 14,
        vars: 2,
        consts: [[1, "py-5", "header"], [1, "container", "py-4"], [1, "row"], [1, "col-md-3"], ["id", "v-pills-tab", "role", "tablist", "aria-orientation", "vertical", 1, "nav", "flex-column", "nav-pills", "nav-pills-custom"], ["class", "nav-link mb-3 p-3 shadow ", "id", "v-pills-home-tab", "data-toggle", "pill", "role", "tab", "aria-controls", "v-pills-home", "aria-selected", "true", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "col-md-9"], ["id", "v-pills-tabContent", 1, "tab-content"], ["class", "tab-pane fade shadow rounded bg-white  p-5", "id", "v-pills-home", "role", "tabpanel", "aria-labelledby", "v-pills-home-tab", 3, "active", "show", 4, "ngFor", "ngForOf"], [1, "buttons"], ["mat-icon-button", "", 3, "click"], [1, "fas", "fa-arrow-left", 2, "font-size", "25px"], [1, "fas", "fa-arrow-right", 2, "font-size", "25px"], ["id", "v-pills-home-tab", "data-toggle", "pill", "role", "tab", "aria-controls", "v-pills-home", "aria-selected", "true", 1, "nav-link", "mb-3", "p-3", "shadow", 3, "click"], [1, "fa", "fa-user-circle-o", "mr-2"], [1, "font-weight-bold", "small", "text-uppercase"], ["id", "v-pills-home", "role", "tabpanel", "aria-labelledby", "v-pills-home-tab", 1, "tab-pane", "fade", "shadow", "rounded", "bg-white", "p-5"], [1, "font-italic", "mb-4"], [1, "font-italic", "text-muted", "mb-2"]],
        template: function TestLogicComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TestLogicComponent_p_5_Template, 4, 3, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TestLogicComponent_div_8_Template, 5, 5, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TestLogicComponent_Template_button_click_10_listener() {
              return ctx.prev(1);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TestLogicComponent_Template_button_click_12_listener() {
              return ctx.next(1);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.stepperList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.stepperList);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]],
        styles: ["@import 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css';\n@import 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';\n.nav-pills-custom[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #aaa;\n  background: #fff;\n  position: relative;\n}\n.nav-pills-custom[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: #45b649;\n  background: #fff;\n}\n.buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n@media (min-width: 992px) {\n  .nav-pills-custom[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]::before {\n    content: \"\";\n    display: block;\n    border-top: 8px solid transparent;\n    border-left: 10px solid #fff;\n    border-bottom: 8px solid transparent;\n    position: absolute;\n    top: 50%;\n    right: -10px;\n    transform: translateY(-50%);\n    opacity: 0;\n  }\n}\n.nav-pills-custom[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]::before {\n  opacity: 1;\n}\nbody[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: linear-gradient(to left, #dce35b, #45b649);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHRlc3QtbG9naWMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsOEZBQUE7QUFDQSx3RkFBQTtBQUVSO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFBSjtBQUdBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBQUo7QUFHQTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtBQUFKO0FBSUEsMkNBQUE7QUFDQTtFQUNJO0lBQ0ksV0FBQTtJQUNBLGNBQUE7SUFDQSxpQ0FBQTtJQUNBLDRCQUFBO0lBQ0Esb0NBQUE7SUFDQSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxZQUFBO0lBQ0EsMkJBQUE7SUFDQSxVQUFBO0VBRE47QUFDRjtBQUlBO0VBQ0ksVUFBQTtBQUZKO0FBT0E7RUFDSSxpQkFBQTtFQUNBLHNEQUFBO0FBSkoiLCJmaWxlIjoidGVzdC1sb2dpYy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3R3aXR0ZXItYm9vdHN0cmFwLzQuMy4xL2Nzcy9ib290c3RyYXAubWluLmNzcyc7XHJcbkBpbXBvcnQgJ2h0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzcyc7XHJcblxyXG4ubmF2LXBpbGxzLWN1c3RvbSAubmF2LWxpbmsge1xyXG4gICAgY29sb3I6ICNhYWE7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubmF2LXBpbGxzLWN1c3RvbSAubmF2LWxpbmsuYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjNDViNjQ5O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuLmJ1dHRvbnN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbn1cclxuXHJcblxyXG4vKiBBZGQgaW5kaWNhdG9yIGFycm93IGZvciB0aGUgYWN0aXZlIHRhYiAqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIC5uYXYtcGlsbHMtY3VzdG9tIC5uYXYtbGluazo6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBib3JkZXItdG9wOiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgI2ZmZjtcclxuICAgICAgICBib3JkZXItYm90dG9tOiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIHJpZ2h0OiAtMTBweDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxufVxyXG5cclxuLm5hdi1waWxscy1jdXN0b20gLm5hdi1saW5rLmFjdGl2ZTo6YmVmb3JlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcblxyXG5cclxuYm9keSB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjZGNlMzViLCAjNDViNjQ5KTtcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestLogicComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-test-logic',
            templateUrl: './test-logic.component.html',
            styleUrls: ['./test-logic.component.scss']
          }]
        }], function () {
          return [];
        }, null);
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
            var _this13 = this;

            this.addJobNumberForm.get('siteName').valueChanges.subscribe(function (res) {
              // console.log(JSON.parse(res))
              res = JSON.parse(res);

              _this13.addJobNumberForm.get('streetNumber').setValue(res.streetNumber);

              _this13.addJobNumberForm.get('streetAddress').setValue(res.streetAddress);

              _this13.addJobNumberForm.get('suburb').setValue(res.suburb);

              _this13.addJobNumberForm.get('state').setValue(res.state);
            });
            this.addJobNumberForm.get('customerName').valueChanges.subscribe(function (res) {
              // console.log(JSON.parse(res))
              res = JSON.parse(res);

              _this13.addJobNumberForm.get('customerContact').setValue(res.customerContact);

              _this13.addJobNumberForm.get('customerContactPhone').setValue(res.customerContactPhone);

              _this13.addJobNumberForm.get('customerEmail').setValue(res.customerEmail);
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this14 = this;

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
              _this14.allSites = res.data;
              console.log(res.data);
            });
            this.logicalFormInfoService.getAllCustomer().subscribe(function (res) {
              _this14.allCustomers = res.data;
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
            var _this15 = this;

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

              _this15.dialogRef.close('success');
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


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/paginator */
      "5QHs");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/table */
      "OaSA");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/utils/services/logical-form-info.service */
      "wbBK");
      /* harmony import */


      var src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/utils/services/set-title.service */
      "yZxC");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");

      var _c0 = ["risk"];

      function SetLogicComponent_th_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SetLogicComponent_td_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r8.index);
        }
      }

      function SetLogicComponent_th_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SetLogicComponent_td_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r9.title, " ");
        }
      }

      function SetLogicComponent_th_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Set ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SetLogicComponent_td_12_button_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Set");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SetLogicComponent_td_12_button_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SetLogicComponent_td_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SetLogicComponent_td_12_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var element_r10 = ctx.$implicit;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.setRelation_2(element_r10._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SetLogicComponent_td_12_button_1_Template, 2, 0, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SetLogicComponent_td_12_button_2_Template, 2, 0, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !element_r10.set);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r10.set);
        }
      }

      function SetLogicComponent_tr_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 17);
        }
      }

      function SetLogicComponent_tr_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 18);
        }
      }

      var _c1 = function _c1() {
        return [5, 10, 20];
      };

      var SetLogicComponent = /*#__PURE__*/function () {
        function SetLogicComponent(fb, logicalFormInfo, setTitle, router) {
          _classCallCheck(this, SetLogicComponent);

          this.fb = fb;
          this.logicalFormInfo = logicalFormInfo;
          this.setTitle = setTitle;
          this.router = router;
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
          this.ELEMENT_DATA = []; /////////////mat table////////////////

          this.displayedColumns = ['index', 'title', 'edit'];
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.ELEMENT_DATA);
        }

        _createClass(SetLogicComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.dataSource.paginator = this.paginator;
          }
        }, {
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
            this.getJobTask(); // this.getAllHighRisk();
            // this.getAllLicence();
            // this.getAllCategories();
            // this.getAllPPE();
            // this.getAllHazard();
            // this.getAllContrActReq();
          }
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
            var _this16 = this;

            this.logicalFormInfo.getAllJobtask().subscribe(function (res) {
              console.log('jobTaskDetails=>', res);
              _this16.jobTaskData = res.data;

              _this16.jobTaskData.forEach(function (element, index) {
                element.index = index + 1; //adding index
              });

              _this16.ELEMENT_DATA = _this16.jobTaskData;
              _this16.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this16.ELEMENT_DATA);
              _this16.dataSource.paginator = _this16.paginator; // this.jobTaskData.forEach((item,i) => {
              //   this.addActionHighRisk();
              //   this.addActionPPE();
              //   this.addActionLicnCat();
              //   this.addActionContrActReq();
              //   this.addActionIdentifyHazrds(); 
              //   this.addActionRiskLevel(); 
              //   this.addActionResiRiskLevel();   
              //   this.highRiskFA().controls[i].get('highRiskArr').setValue(item.risk);
              //   this.PPE_FA().controls[i].get('ppeArr').setValue(item.PPE);
              //   this.licenceCatFA().controls[i].get('licenceArr').setValue(item.licence);  
              //   this.identifyHazrdsFA().controls[i].get('hazardsArr').setValue(item.identifyHazard);
              //   this.contrActReqFA().controls[i].get('contrActReqArr').setValue(item.controlActionRequired);
              //   this.riskLevelFA().controls[i].get('riskLevel').setValue(item.riskLevel);
              //   this.residlRiskLevelFA().controls[i].get('resiRiskLevel').setValue(item.residualRisk);
              //   });
            });
          }
        }, {
          key: "getAllHighRisk",
          value: function getAllHighRisk() {
            var _this17 = this;

            this.logicalFormInfo.getAllRisk().subscribe(function (res) {
              console.log('Risk=>', res);
              _this17.highRiskConstructionData = res.data;
            });
          }
        }, {
          key: "getAllPPE",
          value: function getAllPPE() {
            var _this18 = this;

            this.logicalFormInfo.getAllPPE().subscribe(function (res) {
              console.log('PPE=>', res);
              _this18.PPESelectionData = res.data;
            });
          }
        }, {
          key: "getAllLicence",
          value: function getAllLicence() {
            var _this19 = this;

            this.logicalFormInfo.getAllLicence().subscribe(function (res) {
              console.log('Licence=>', res);
              _this19.licenseAndQual = res.data;
            });
          }
        }, {
          key: "getAllHazard",
          value: function getAllHazard() {
            var _this20 = this;

            this.logicalFormInfo.getAllHazards().subscribe(function (res) {
              console.log('getAllHazards=>', res);
              _this20.allHazards = res.data;
            });
          }
        }, {
          key: "getAllContrActReq",
          value: function getAllContrActReq() {
            var _this21 = this;

            this.logicalFormInfo.getAllContrlActReq().subscribe(function (res) {
              console.log('getAllHazards=>', res);
              _this21.allContrlActReq = res.data;
            });
          }
        }, {
          key: "getAllCategories",
          value: function getAllCategories() {
            var _this22 = this;

            this.logicalFormInfo.getAllLicenceCat().subscribe(function (res) {
              console.log('getAllLicenceCat=>', res);
              _this22.licenceCatAll = res.data;
            });
          }
        }, {
          key: "setRelation_2",
          value: function setRelation_2(id) {
            this.router.navigate(['/admin/confiLogi/setRelation'], {
              queryParams: {
                id: id
              }
            });
          }
        }, {
          key: "setRelation",
          value: function setRelation(title, id, i) {
            var _this23 = this;

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

              _this23.getJobTask();

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
            var _this24 = this;

            this.licenseAndQualificationData = [];
            console.log(catArr);
            catArr.forEach(function (element) {
              _this24.licenseAndQual.forEach(function (item) {
                if (element === item.licenceCategoryId._id) {
                  _this24.licenseAndQualificationData.push(item);
                }
              });
            });
            console.log(' this.licenseAndQualificationData', this.licenseAndQualificationData);
          }
        }]);

        return SetLogicComponent;
      }();

      SetLogicComponent.ɵfac = function SetLogicComponent_Factory(t) {
        return new (t || SetLogicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_5__["LogicalFormInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_6__["SetTitleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]));
      };

      SetLogicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SetLogicComponent,
        selectors: [["app-set-logic"]],
        viewQuery: function SetLogicComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.Risk = _t);
          }
        },
        decls: 16,
        vars: 5,
        consts: [[1, "ml-2"], [1, ""], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "index"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "title"], ["matColumnDef", "edit"], ["mat-cell", "", 3, "click", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", "aria-label", "Select page of periodic elements", 3, "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", 3, "click"], ["class", "myBtn", "mat-stroked-button", "", "color", "primary", 4, "ngIf"], ["mat-stroked-button", "", "color", "primary", 1, "myBtn"], ["mat-header-row", ""], ["mat-row", ""]],
        template: function SetLogicComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Set Relation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SetLogicComponent_th_5_Template, 2, 0, "th", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SetLogicComponent_td_6_Template, 2, 1, "td", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SetLogicComponent_th_8_Template, 2, 0, "th", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SetLogicComponent_td_9_Template, 2, 1, "td", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SetLogicComponent_th_11_Template, 2, 0, "th", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SetLogicComponent_td_12_Template, 3, 2, "td", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SetLogicComponent_tr_13_Template, 1, 0, "tr", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SetLogicComponent_tr_14_Template, 1, 0, "tr", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "mat-paginator", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
          }
        },
        directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]],
        styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.myBtn[_ngcontent-%COMP%] {\n  width: 75px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2V0LWxvZ2ljLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0ksV0FBQTtBQUpKOztBQU1FO0VBQ0UsV0FBQTtBQUhKIiwiZmlsZSI6InNldC1sb2dpYy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5zY3JvbGxlcntcclxuICAgXHJcbi8vICAgICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbi8vICAgICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XHJcbi8vIH1cclxudGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5teUJ0bntcclxuICAgIHdpZHRoOiA3NXB4O1xyXG4gIH0iXX0= */"]
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
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
          }, {
            type: src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_5__["LogicalFormInfoService"]
          }, {
            type: src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_6__["SetTitleService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
          }];
        }, {
          paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]]
          }],
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


      var _set_logic_set_relation_set_relation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./set-logic/set-relation/set-relation.component */
      "6ZYc");
      /* harmony import */


      var _job_number_job_number_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./job-number/job-number.component */
      "zQXG");
      /* harmony import */


      var _set_logic_set_logic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./set-logic/set-logic.component */
      "bu9C");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _confi_logi_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./confi-logi.component */
      "ao8m");
      /* harmony import */


      var _set_logic_test_logic_test_logic_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./set-logic/test-logic/test-logic.component */
      "THzD");

      var routes = [{
        path: '',
        component: _confi_logi_component__WEBPACK_IMPORTED_MODULE_5__["ConfiLogiComponent"]
      }, {
        path: 'setLogic',
        component: _set_logic_set_logic_component__WEBPACK_IMPORTED_MODULE_2__["SetLogicComponent"]
      }, {
        path: 'setJobNumber',
        component: _job_number_job_number_component__WEBPACK_IMPORTED_MODULE_1__["JobNumberComponent"]
      }, {
        path: 'setRelation',
        component: _set_logic_set_relation_set_relation_component__WEBPACK_IMPORTED_MODULE_0__["SetRelationComponent"]
      }, {
        path: 'testRelation',
        component: _set_logic_test_logic_test_logic_component__WEBPACK_IMPORTED_MODULE_6__["TestLogicComponent"]
      }];

      var ConfiLogiRoutingModule = function ConfiLogiRoutingModule() {
        _classCallCheck(this, ConfiLogiRoutingModule);
      };

      ConfiLogiRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: ConfiLogiRoutingModule
      });
      ConfiLogiRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        factory: function ConfiLogiRoutingModule_Factory(t) {
          return new (t || ConfiLogiRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ConfiLogiRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ConfiLogiRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "wKjp": function wKjp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddItemComponent", function () {
        return AddItemComponent;
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

      function AddItemComponent_h2_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Add High Risk Construction parameter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddItemComponent_h2_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Add PPE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddItemComponent_h2_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Add Licence ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddItemComponent_h2_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Add Identify Hazards ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddItemComponent_h2_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Add Risk Level");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddItemComponent_h2_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Add Control Action Required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddItemComponent_h2_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Add Residual Risk");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddItemComponent_h2_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Add Person Responsible ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddItemComponent_h2_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Add Code of Practice ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var AddItemComponent = /*#__PURE__*/function () {
        function AddItemComponent(fb, logicalFormInfo, dialogRef, data) {
          _classCallCheck(this, AddItemComponent);

          this.fb = fb;
          this.logicalFormInfo = logicalFormInfo;
          this.dialogRef = dialogRef;
          this.data = data;
          this.dataRec = data;
        }

        _createClass(AddItemComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log(this.dataRec);
            this.addItem = this.fb.group({
              title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
          }
        }, {
          key: "onFormSubmit",
          value: function onFormSubmit() {
            var data = {
              title: this.addItem.get('title').value
            };

            switch (this.dataRec.type) {
              case 'highRisk':
                {
                  this.addHighRisk(data);
                  break;
                }

              case 'ppe':
                {
                  this.addPPE(data);
                  break;
                }

              case 'licence':
                {
                  this.addLicence(data);
                  break;
                }

              case 'identifyHazards':
                {
                  this.addHazard(data);
                  break;
                }

              case 'codeOfPract':
                {
                  this.addCOP(data);
                  break;
                }

              case 'riskLevel':
                {
                  this.addRiskLevel(data);
                  break;
                }

              case 'ctrlActreq':
                {
                  this.addControlActReq(data);
                  break;
                }

              case 'resRiskLevel':
                {
                  this.addResidRiskLevel(data);
                  break;
                }

              case 'perResbl':
                {
                  this.addStaff(data);
                  break;
                }
            }
          }
        }, {
          key: "closeDialog",
          value: function closeDialog() {
            this.dialogRef.close('false');
          }
        }, {
          key: "addHighRisk",
          value: function addHighRisk(data) {
            var _this25 = this;

            this.logicalFormInfo.addRisk(data).subscribe(function (resData) {
              console.log('resData', resData);

              _this25.dialogRef.close('highRisk');

              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: 'Item  Added successfully',
                showConfirmButton: false,
                timer: 1200
              });
            });
          }
        }, {
          key: "addPPE",
          value: function addPPE(data) {
            var _this26 = this;

            this.logicalFormInfo.addPPE(data).subscribe(function (resData) {
              console.log('resData', resData);

              _this26.dialogRef.close('ppe');

              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: 'Item  Added successfully',
                showConfirmButton: false,
                timer: 1200
              });
            });
          }
        }, {
          key: "addRiskLevel",
          value: function addRiskLevel(data) {
            var _this27 = this;

            this.logicalFormInfo.addRiskLevel(data).subscribe(function (resData) {
              console.log('resData', resData);

              _this27.dialogRef.close('riskLevel');

              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: 'Item  Added successfully',
                showConfirmButton: false,
                timer: 1200
              });
            });
          }
        }, {
          key: "addResidRiskLevel",
          value: function addResidRiskLevel(data) {
            var _this28 = this;

            this.logicalFormInfo.addResidual(data).subscribe(function (resData) {
              console.log('resData', resData);

              _this28.dialogRef.close('resRiskLevel');

              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: 'Item  Added successfully',
                showConfirmButton: false,
                timer: 1200
              });
            });
          }
        }, {
          key: "addHazard",
          value: function addHazard(data) {
            var _this29 = this;

            this.logicalFormInfo.addHazards(data).subscribe(function (resData) {
              console.log('resData', resData);

              _this29.dialogRef.close('identifyHazards');

              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: 'Item  Added successfully',
                showConfirmButton: false,
                timer: 1200
              });
            });
          }
        }, {
          key: "addLicence",
          value: function addLicence(data) {
            var _this30 = this;

            var dataTemp = {
              title: data.title,
              tradeCategoryId: this.dataRec.tradeCategoryId
            };
            this.logicalFormInfo.addLicence(dataTemp).subscribe(function (resData) {
              console.log('resData', resData);

              _this30.dialogRef.close('licence');

              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: 'Item  Added successfully',
                showConfirmButton: false,
                timer: 1200
              });
            });
          }
        }, {
          key: "addControlActReq",
          value: function addControlActReq(data) {
            var _this31 = this;

            this.logicalFormInfo.addContrlActReq(data).subscribe(function (resData) {
              console.log('resData', resData);

              _this31.dialogRef.close('ctrlActreq');

              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: 'Item  Added successfully',
                showConfirmButton: false,
                timer: 1200
              });
            });
          }
        }, {
          key: "addStaff",
          value: function addStaff(data) {
            var _this32 = this;

            this.logicalFormInfo.addStaff(data).subscribe(function (resData) {
              console.log('resData', resData);

              _this32.dialogRef.close('perResbl');

              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: 'Item  Added successfully',
                showConfirmButton: false,
                timer: 1200
              });
            });
          }
        }, {
          key: "addCOP",
          value: function addCOP(data) {
            var _this33 = this;

            this.logicalFormInfo.addCode(data).subscribe(function (resData) {
              console.log('resData', resData);

              _this33.dialogRef.close('codeOfPract');

              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: 'Item  Added successfully',
                showConfirmButton: false,
                timer: 1200
              });
            });
          }
        }]);

        return AddItemComponent;
      }();

      AddItemComponent.ɵfac = function AddItemComponent_Factory(t) {
        return new (t || AddItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__["LogicalFormInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]));
      };

      AddItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddItemComponent,
        selectors: [["app-add-item"]],
        decls: 20,
        vars: 11,
        consts: [[3, "formGroup"], [4, "ngIf"], ["appearance", "legacy", 1, "example-full-width", 2, "width", "498px"], ["matInput", "", "formControlName", "title", 2, "text-transform", "capitalize !important"], [1, "row"], [1, "col-sm-2", "offset-8"], ["mat-raised-button", "", 3, "click"], [1, "col-sm-2"], ["mat-raised-button", "", 3, "disabled", "click"]],
        template: function AddItemComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddItemComponent_h2_1_Template, 2, 0, "h2", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddItemComponent_h2_2_Template, 2, 0, "h2", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AddItemComponent_h2_3_Template, 2, 0, "h2", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AddItemComponent_h2_4_Template, 2, 0, "h2", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AddItemComponent_h2_5_Template, 2, 0, "h2", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AddItemComponent_h2_6_Template, 2, 0, "h2", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AddItemComponent_h2_7_Template, 2, 0, "h2", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AddItemComponent_h2_8_Template, 2, 0, "h2", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AddItemComponent_h2_9_Template, 2, 0, "h2", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddItemComponent_Template_button_click_15_listener() {
              return ctx.closeDialog();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddItemComponent_Template_button_click_18_listener() {
              return ctx.onFormSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addItem);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataRec.type === "highRisk");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataRec.type === "ppe");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataRec.type === "licence");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataRec.type === "identifyHazards");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataRec.type === "riskLevel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataRec.type === "ctrlActreq");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataRec.type === "resRiskLevel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataRec.type === "perResbl");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataRec.type === "codeOfPract");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.addItem.valid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtaXRlbS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddItemComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-add-item',
            templateUrl: './add-item.component.html',
            styleUrls: ['./add-item.component.scss']
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
            var _this34 = this;

            this.logicalFormInfoService.getAllJobNumber().subscribe(function (res) {
              console.log(res);
              _this34.dataSource.data = res.data;
              console.log("getAllJobNumber", res.data);
              _this34.dataSource.paginator = _this34.paginator;
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
            var _this35 = this;

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
                _this35.getAllJobNumber();

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
            var _this36 = this;

            var dialogRef = this.dialog.open(src_app_site_info_add_site_info_edit_site_edit_site_component__WEBPACK_IMPORTED_MODULE_5__["EditSiteComponent"], {
              width: '550px',
              data: element
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result == 'true') {
                _this36.getAllJobTask();
              }

              console.log('The dialog was closed');
            });
          }
        }, {
          key: "delete",
          value: function _delete(item) {
            var _this37 = this;

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
                _this37.logicalFormInfoService.deleteJobNumber(item._id).subscribe(function (res) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
                    title: 'Job Number Deleted successfully',
                    showConfirmButton: false,
                    timer: 1200
                  });
                  console.log('deleted res', res);

                  _this37.getAllJobNumber();
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
        consts: [["_ngcontent-hqi-c400", "", "type", "button", 1, "btn", "btn-outline-primary", "mt-1", "mr-2", "float-right", 3, "click"], ["_ngcontent-hqi-c400", "", 1, "fas", "fa-plus"], [1, ""], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "index"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "jobNumber"], ["matColumnDef", "siteName"], ["matColumnDef", "streetNumber"], ["matColumnDef", "streetAddress"], ["matColumnDef", "suburb"], ["matColumnDef", "state"], ["matColumnDef", "customerName"], ["matColumnDef", "customerContact"], ["matColumnDef", "edit"], ["mat-cell", "", 3, "click", 4, "matCellDef"], ["matColumnDef", "delete"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", "aria-label", "Select page of periodic elements", 3, "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", 3, "click"], [1, "fas", "fa-pencil-alt"], [1, "fas", "fa-trash"], ["mat-header-row", ""], ["mat-row", ""]],
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