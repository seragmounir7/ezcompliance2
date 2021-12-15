(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-forms-forms-module"],{

/***/ "4psL":
/*!**************************************************************************!*\
  !*** ./src/app/views/forms/incident-report/incident-report.component.ts ***!
  \**************************************************************************/
/*! exports provided: IncidentReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentReportComponent", function() { return IncidentReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_utils_services_dynamic_forms_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils/services/dynamic-forms.service */ "+3ge");
/* harmony import */ var src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utils/services/logical-form-info.service */ "wbBK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/utils/services/set-title.service */ "yZxC");
/* harmony import */ var src_app_utils_services_upload_file_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/utils/services/upload-file-service.service */ "X2mD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var ngx_mat_timepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-mat-timepicker */ "PqUb");
/* harmony import */ var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular2-signaturepad */ "r1zJ");















const _c0 = ["signature"];
const _c1 = ["signature1"];
function IncidentReportComponent_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobNo_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", jobNo_r42._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](jobNo_r42.jobNumber);
} }
function IncidentReportComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Project Number is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IncidentReportComponent_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Project Name is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IncidentReportComponent_span_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Site Name is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IncidentReportComponent_span_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Customer Name is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IncidentReportComponent_span_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Site Address is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IncidentReportComponent_span_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Customer Contact is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IncidentReportComponent_option_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mang_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", mang_r43._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](mang_r43.title);
} }
function IncidentReportComponent_span_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Project Manager is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IncidentReportComponent_span_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This Field is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IncidentReportComponent_span_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Phone Number is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IncidentReportComponent_span_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Email is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IncidentReportComponent_span_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Date is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IncidentReportComponent_ng_container_91_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function IncidentReportComponent_ng_container_91_Template_input_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r46.typeOfIncidentsSelected($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r45 = ctx.index;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", ctx_r13.incidents[i_r45]._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", i_r45 + "typeOf")("value", ctx_r13.incidents[i_r45]._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", i_r45 + "typeOf");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r13.incidents[i_r45].title);
} }
function IncidentReportComponent_span_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Name is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IncidentReportComponent_span_117_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This Field is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IncidentReportComponent_span_124_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This Field is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IncidentReportComponent_ng_container_131_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function IncidentReportComponent_ng_container_131_Template_input_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r50.natureOfIncSelected($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r49 = ctx.index;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", ctx_r17.natureOFIncidents[i_r49]._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", i_r49 + "natureOfInc")("value", ctx_r17.natureOFIncidents[i_r49]._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", i_r49 + "natureOfInc");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r17.natureOFIncidents[i_r49].title);
} }
function IncidentReportComponent_span_139_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Locationis Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IncidentReportComponent_span_145_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Date is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IncidentReportComponent_span_153_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Select Time is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IncidentReportComponent_span_164_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Name is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IncidentReportComponent_span_170_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This Field is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IncidentReportComponent_ng_container_183_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function IncidentReportComponent_ng_container_183_Template_input_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r55); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r54.ppeSelected($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r53 = ctx.index;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", ctx_r24.PPE[i_r53]._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", i_r53 + "whatPPE")("value", ctx_r24.PPE[i_r53]._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", i_r53 + "whatPPE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r24.PPE[i_r53].title);
} }
function IncidentReportComponent_ng_container_191_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function IncidentReportComponent_ng_container_191_Template_input_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r59); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r58.rootSelected($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r57 = ctx.index;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", ctx_r25.rootCauseIncident[i_r57]._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", i_r57 + "rootCauseIncident")("value", ctx_r25.rootCauseIncident[i_r57]._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", i_r57 + "rootCauseIncident");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r25.rootCauseIncident[i_r57].title);
} }
function IncidentReportComponent_textarea_210_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "textarea", 80);
} }
function IncidentReportComponent_textarea_221_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "textarea", 81);
} }
function IncidentReportComponent_ng_container_229_Template(rf, ctx) { if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function IncidentReportComponent_ng_container_229_Template_input_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r63); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r62.changesSelected($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r61 = ctx.index;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", ctx_r28.changes[i_r61]._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", i_r61 + "changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", i_r61 + "changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r28.changes[i_r61].title);
} }
function IncidentReportComponent_ng_container_233_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This Field is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IncidentReportComponent_ng_container_233_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const j_r71 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", j_r71 == null ? null : j_r71._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](j_r71 == null ? null : j_r71.title);
} }
function IncidentReportComponent_ng_container_233_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This Field is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IncidentReportComponent_ng_container_233_span_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This Field is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IncidentReportComponent_ng_container_233_span_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Date is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IncidentReportComponent_ng_container_233_Template(rf, ctx) { if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Corrective Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, IncidentReportComponent_ng_container_233_span_6_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Person Responsible");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "select", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Select...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, IncidentReportComponent_ng_container_233_option_14_Template, 2, 2, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, IncidentReportComponent_ng_container_233_span_15_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Complete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "select", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, IncidentReportComponent_ng_container_233_span_27_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "input", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, IncidentReportComponent_ng_container_233_span_32_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IncidentReportComponent_ng_container_233_Template_span_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r73); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r72.addAction(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "add_circle_outline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IncidentReportComponent_ng_container_233_Template_span_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r73); const i_r65 = ctx.index; const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r74.removeIncident(i_r65); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, " remove_circle_outline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r65 = ctx.index;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    let tmp_1_0 = null;
    let tmp_2_0 = null;
    let tmp_3_0 = null;
    let tmp_5_0 = null;
    let tmp_6_0 = null;
    let tmp_7_0 = null;
    let tmp_8_0 = null;
    let tmp_9_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_1_0 = ctx_r29.add().controls[i_r65].get("correctAction")) == null ? null : tmp_1_0.hasError("required")) && (ctx_r29.add().controls[i_r65].get("correctAction").dirty || ctx_r29.add().controls[i_r65].get("correctAction").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx_r29.add().controls[i_r65].get("correctAction")) == null ? null : tmp_2_0.hasError("required")) && (ctx_r29.add().controls[i_r65].get("correctAction").dirty || ctx_r29.add().controls[i_r65].get("correctAction").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_3_0 = ctx_r29.add().controls[i_r65].get("personRes")) == null ? null : tmp_3_0.hasError("required")) && (ctx_r29.add().controls[i_r65].get("personRes").dirty || ctx_r29.add().controls[i_r65].get("personRes").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r29.staff);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx_r29.add().controls[i_r65].get("personRes")) == null ? null : tmp_5_0.hasError("required")) && (ctx_r29.add().controls[i_r65].get("personRes").dirty || ctx_r29.add().controls[i_r65].get("personRes").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_6_0 = ctx_r29.add().controls[i_r65].get("complete")) == null ? null : tmp_6_0.hasError("required")) && (ctx_r29.add().controls[i_r65].get("complete").dirty || ctx_r29.add().controls[i_r65].get("complete").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_7_0 = ctx_r29.add().controls[i_r65].get("complete")) == null ? null : tmp_7_0.hasError("required")) && (ctx_r29.add().controls[i_r65].get("complete").dirty || ctx_r29.add().controls[i_r65].get("complete").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_8_0 = ctx_r29.add().controls[i_r65].get("date")) == null ? null : tmp_8_0.hasError("required")) && (ctx_r29.add().controls[i_r65].get("date").dirty || ctx_r29.add().controls[i_r65].get("date").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_9_0 = ctx_r29.add().controls[i_r65].get("date")) == null ? null : tmp_9_0.hasError("required")) && (ctx_r29.add().controls[i_r65].get("date").dirty || ctx_r29.add().controls[i_r65].get("date").touched));
} }
function IncidentReportComponent_span_245_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Name is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IncidentReportComponent_span_251_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This Field is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IncidentReportComponent_span_258_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This Field is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IncidentReportComponent_span_264_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Date is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IncidentReportComponent_span_273_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This Field is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IncidentReportComponent_span_286_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Name is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IncidentReportComponent_span_292_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This Field is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IncidentReportComponent_span_299_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This Field is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IncidentReportComponent_span_305_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Date is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IncidentReportComponent_span_314_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This Field is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c2 = function () { return ["/admin/forms"]; };
class IncidentReportComponent {
    constructor(fb, dynamicFormsService, logicalFormInfo, activatedRoute, setTitle, upload, router) {
        this.fb = fb;
        this.dynamicFormsService = dynamicFormsService;
        this.logicalFormInfo = logicalFormInfo;
        this.activatedRoute = activatedRoute;
        this.setTitle = setTitle;
        this.upload = upload;
        this.router = router;
        this.fileArr = [];
        this.imgArr = [];
        this.fileObj = [];
        this.PPEselection = [];
        this.ppeArr = [];
        this.changesArr = [];
        this.natureOfIncArr = [];
        this.incidentsArr = [];
        this.rootArr = [];
        this.allJobNumbers = [];
        this.PPE = [];
        this.changes = [];
        this.rootCauseIncident = [];
        this.natureOFIncidents = [];
        this.incidents = [];
        this.ppeSelectedArr = [];
        this.changesSelectedArr = [];
        this.natureOfIncSelectedArr = [];
        this.typeOfIncidentsSelectedArr = [];
        this.rootSelectedArr = [];
        this.signaturePadOptions = {
            // passed through to szimek/signature_pad constructor
            minWidth: 1,
            canvasWidth: 480,
            canvasHeight: 100,
        };
        this.signaturePadOptions1 = {
            // passed through to szimek/signature_pad constructor
            minWidth: 1,
            canvasWidth: 480,
            canvasHeight: 100,
        };
        this.IncidentReport = this.fb.group({
            incidents: this.fb.array([]),
            natureOFIncidents: this.fb.array([]),
            PPE: this.fb.array([]),
            rootCauseIncident: this.fb.array([]),
            changes: this.fb.array([]),
            arrObj: this.fb.array([]),
            //correctAction: ['', Validators.required],
            // complete: ['', Validators.required],
            // date: ['', Validators.required],
            jobNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            projectName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            siteName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            customerName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            streetAddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            customerContact: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            projectManager: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            personCompletingForm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            customerContactPhone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            customerEmail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            dateOfFormCompletion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            department: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            position: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            locationOfTheIncident: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            dateOfTheIncident: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            timeOfTheIncident: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            whyDidtheUnsafeConditonExist: ['',],
            completedName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            completedPosition: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            completedDepartment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            completedDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            reviewedName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            reviewedPosition: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            reviewedDepartment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            reviewedDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            // typeofIncident: ['', Validators.required],
            priorIncident: [''],
            similarIncident: [''],
            witnessStatement: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            nameOfWitness: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            file: [''],
            similarIncidentText: [''],
            priorIncidentText: [''],
            instructions: ['Complete this form as soon as possible after an incident that results in serious inquiry or illness or death. Use to investigate a minor injuryor near-miss that could have resulted in a serious injury or illness.'],
            signaturePad: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            signaturePad1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        // this.IncidentReport = this.data;
        // this.IncidentReport.patchValue({
        //   incidents:this.data.incidents,
        //   PPE:this.data.PPE,
        //   natureOFIncidents:this.data.natureOFIncidents,
        //   rootCauseIncident:this.data.rootCauseIncident,
        //   changes:this.data.changes,
        //   arrObj:this.data.arrObj,
        //   correctAction:this.data.correctAction,
        // })
    }
    ngOnInit() {
        this.id = this.activatedRoute.snapshot.params.id;
        console.log("IncidentReport", this.IncidentReport);
        this.dynamicFormsService.homebarTitle.next('Incident Report Form');
        this.setTitle.setTitle('WHS-Incident Report Form');
        this.getAllJobNumber();
        this.getAllProjectMang();
        this.getAllChanges();
        this.getAllPPE();
        this.getAllTypeOfInc();
        this.getAllRoot();
        this.getAllNatureOfInc();
        this.getAllStaff();
        if (this.id !== 'Form') {
            console.log("id", this.id);
            this.getIncidentsByid(this.id);
        }
        else {
            this.addAction();
        }
    }
    addAction() {
        {
            this.add().push(this.newAction());
        }
    }
    add() {
        return this.IncidentReport.get('arrObj');
    }
    newAction() {
        return this.fb.group({
            correctAction: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            personRes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            complete: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            date: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    removeIncident(i) {
        const item = this.IncidentReport.controls['arrObj'];
        if (item.length > 1) {
            item.removeAt(i);
        }
    }
    changeAdd() {
        return this.IncidentReport.get('changes');
    }
    changeAction(index) {
        return this.fb.group({
            [this.changes[index]._id]: ['',],
        });
    }
    incidentsAdd() {
        return this.IncidentReport.get('incidents');
    }
    incidentsAction(index) {
        return this.fb.group({
            [this.incidents[index]._id]: ['',],
        });
    }
    natureAdd() {
        return this.IncidentReport.get('natureOFIncidents');
    }
    natureAction(index) {
        return this.fb.group({
            [this.natureOFIncidents[index]._id]: ['',],
        });
    }
    ppeAdd() {
        return this.IncidentReport.get('PPE');
    }
    ppeAction(index) {
        return this.fb.group({
            [this.PPE[index]._id]: ['',],
        });
    }
    rootCauseIncidentAdd() {
        return this.IncidentReport.get('rootCauseIncident');
    }
    rootCauseIncidentAction(index) {
        return this.fb.group({
            [this.rootCauseIncident[index]._id]: ['',],
        });
    }
    jobNoSel() {
        this.allJobNumbers.forEach((item) => {
            if (this.IncidentReport.get('jobNumber').value === item._id) {
                console.log('Id found', item);
                this.IncidentReport.patchValue({
                    jobNumber: this.IncidentReport.get('jobNumber').value,
                    projectName: item.projectName,
                    siteName: item.siteName,
                    customerName: item.customerName,
                    streetAddress: item.streetAddress,
                    projectManager: item.projectManager,
                    customerContact: item.customerContact,
                    personCompletingForm: item.personCompletingForm,
                    customerContactPhone: item.customerContactPhone,
                    customerEmail: item.customerEmail,
                });
            }
        });
        this.IncidentReport.get('jobNumber').updateValueAndValidity();
    }
    getAllJobNumber() {
        this.logicalFormInfo.getAllJobNumber().subscribe((res) => {
            this.allJobNumbers = res.data;
            console.log("this.allJobNumbers", this.allJobNumbers);
        });
    }
    getAllProjectMang() {
        this.logicalFormInfo.getAllProjectMang().subscribe((res) => {
            this.projectMang = res.data;
            console.log('this.projectMang=>', this.projectMang);
        });
    }
    getAllPPE() {
        this.logicalFormInfo.getAllPPE().subscribe((res) => {
            console.log('PPE=>', res);
            this.PPE = res.data;
            for (let i = 0; i < this.PPE.length; i++) {
                this.ppeArr[i] = 0;
                this.ppeAdd().push(this.ppeAction(i));
            }
        });
    }
    getAllTypeOfInc() {
        this.logicalFormInfo.getAllTypeOfIncident().subscribe((res) => {
            console.log('typeOfIncident=>', res);
            this.incidents = res.data;
            for (let i = 0; i < this.incidents.length; i++) {
                this.incidentsArr[i] = 0;
                this.incidentsAdd().push(this.incidentsAction(i));
            }
        });
    }
    getAllRoot() {
        this.logicalFormInfo.getAllRootCause().subscribe((res) => {
            console.log('root=>', res);
            this.rootCauseIncident = res.data;
            for (let i = 0; i < this.rootCauseIncident.length; i++) {
                this.rootArr[i] = 0;
                this.rootCauseIncidentAdd().push(this.rootCauseIncidentAction(i));
            }
        });
    }
    getAllNatureOfInc() {
        this.logicalFormInfo.getAllNatOfInc().subscribe((res) => {
            console.log('NatOfIncAll=>', res);
            this.natureOFIncidents = res.data;
            for (let i = 0; i < this.natureOFIncidents.length; i++) {
                this.natureOfIncArr[i] = 0;
                this.natureAdd().push(this.natureAction(i));
            }
        });
    }
    getAllChanges() {
        this.logicalFormInfo.getAllChangesMade().subscribe((res) => {
            console.log('Changes=>', res);
            this.changes = res.data;
            this.changesArr = [];
            for (let i = 0; i < this.changes.length; i++) {
                this.changesArr[i] = 0;
                this.changeAdd().push(this.changeAction(i));
            }
        });
    }
    selectFile(event) {
        this.fileData = event.target.files[0];
        if (this.fileData.type == 'image/jpeg' ||
            this.fileData.type == 'application/pdf') {
        }
        else {
            alert('file type should be image of pdf');
            return;
        }
    }
    submit() {
        console.log(this.IncidentReport.value);
    }
    ngAfterViewInit() {
        // this.signaturePad is now available
        this.signaturePad.set('minWidth', 1); // set szimek/signature_pad options at runtime
        this.signaturePad.set('dotSize', 1); // set szimek/signature_pad options at runtime
        this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
        this.signaturePad1.clear(); // invoke functions from szimek/signature_pad API
    }
    drawComplete() {
        // will be notified of szimek/signature_pad's onEnd event
        console.log(this.signaturePad.toDataURL());
        console.log("signnn", this.signaturePad);
        this.IncidentReport.controls['signaturePad'].setValue(this.signaturePad.toDataURL());
    }
    drawComplete1() {
        // will be notified of szimek/signature_pad's onEnd event
        console.log(this.signaturePad1.toDataURL());
        console.log("signnn", this.signaturePad1);
        this.IncidentReport.controls['signaturePad1'].setValue(this.signaturePad1.toDataURL());
        console.log("signaturePad1 control", this.IncidentReport.controls['signaturePad1'].value);
    }
    clear() {
        this.signaturePad.clear();
        this.singRequired = this.IncidentReport.controls['signaturePad1'].untouched;
    }
    clear1() {
        console.log('cl1');
        this.signaturePad1.clear();
        this.singRequired1 = this.IncidentReport.controls['signaturePad1'].untouched;
    }
    drawStart() {
        // will be notified of szimek/signature_pad's onBegin event
        console.log('begin drawing');
        console.log("signaturePad control", this.IncidentReport.controls['signaturePad'].touched);
        this.singRequired = this.IncidentReport.controls['signaturePad'].invalid;
    }
    drawStart1() {
        // will be notified of szimek/signature_pad's onBegin event
        console.log('begin drawing');
        this.singRequired1 = this.IncidentReport.controls['signaturePad1'].invalid;
        console.log('begin drawing', this.singRequired1);
    }
    // onChangeIncident(e: any) {
    //   const checkArray: FormArray = this.IncidentReport.get(
    //     'incidents'
    //   ) as FormArray;
    //   let item = e.target.value;
    //   if (e.target.checked) {
    //     checkArray.push(new FormControl(item));
    //     console.log(item);
    //   } else {
    //     let i: number = 0;
    //     checkArray.controls.forEach((item) => {
    //       if (item.value == e.target.value) {
    //         checkArray.removeAt(i);
    //       }
    //     });
    //   }
    // }
    // onNatureOFIncidents(e: any) {
    //   const NatureArray: FormArray = this.IncidentReport.get(
    //     'natureOFIncidents'
    //   ) as FormArray;
    //   let item = e.target.value;
    //   if (e.target.checked) {
    //     NatureArray.push(new FormControl(item));
    //     console.log(item);
    //   } else {
    //     let i: number = 0;
    //     NatureArray.controls.forEach((item) => {
    //       if (item.value == e.target.value) {
    //         NatureArray.removeAt(i);
    //       }
    //     });
    //   }
    // }
    // onPPE(e: any) {
    //   let item = e.target.value;
    //   if (e.target.checked) {
    //     this.ppeArr.push(item);
    //     console.log(item);
    //   } else {
    //     this.ppeArr.forEach((item,i) => {
    //       if (item.value == e.target.value) {
    //         this.ppeArr.splice(i,1);
    //       }
    //     });
    //   }
    // }
    // onRootCauseIncident(e: any) {
    //   const IncidentArray: FormArray = this.IncidentReport.get(
    //     'rootCauseIncident'
    //   ) as FormArray;
    //   let item = e.target.value;
    //   if (e.target.checked) {
    //     IncidentArray.push(new FormControl(item));
    //     console.log(item);
    //   } else {
    //     let i: number = 0;
    //     IncidentArray.controls.forEach((item) => {
    //       if (item.value == e.target.value) {
    //         IncidentArray.removeAt(i);
    //       }
    //     });
    //   }
    // }
    // onChanges(e: any) {
    //   const ChangeArray: FormArray = this.IncidentReport.get(
    //     'changes'
    //   ) as FormArray;
    //   let item = e.target.value;
    //   if (e.target.checked) {
    //     ChangeArray.push(new FormControl(item));
    //     console.log(item);
    //   } else {
    //     let i: number = 0;
    //     ChangeArray.controls.forEach((item) => {
    //       if (item.value == e.target.value) {
    //         ChangeArray.removeAt(i);
    //       }
    //     });
    //   }
    // }
    ppeSelected(e) {
        let item = e.target.value;
        if (e.target.checked) {
            this.ppeSelectedArr.push(item);
        }
        else {
            this.ppeSelectedArr.forEach((item, j) => {
                if (item == e.target.value) {
                    this.ppeSelectedArr.splice(j, 1);
                    return;
                }
            });
        }
        console.log("ppeSelectedArr", this.ppeSelectedArr);
    }
    changesSelected(e) {
        let item = e.target.value;
        if (e.target.checked) {
            this.changesSelectedArr.push(item);
        }
        else {
            this.changesSelectedArr.forEach((item, j) => {
                if (item == e.target.value) {
                    this.changesSelectedArr.splice(j, 1);
                    return;
                }
            });
        }
        console.log("changesSelected", this.changesSelectedArr);
    }
    natureOfIncSelected(e) {
        let item = e.target.value;
        if (e.target.checked) {
            this.natureOfIncSelectedArr.push(item);
        }
        else {
            this.natureOfIncSelectedArr.forEach((item, j) => {
                if (item == e.target.value) {
                    this.natureOfIncSelectedArr.splice(j, 1);
                    return;
                }
            });
        }
        console.log("natureOfIncSelectedArr", this.natureOfIncSelectedArr);
    }
    typeOfIncidentsSelected(e) {
        let item = e.target.value;
        if (e.target.checked) {
            this.typeOfIncidentsSelectedArr.push(item);
        }
        else {
            this.typeOfIncidentsSelectedArr.forEach((item, j) => {
                if (item == e.target.value) {
                    this.typeOfIncidentsSelectedArr.splice(j, 1);
                    return;
                }
            });
        }
        console.log("natureOfIncSelectedArr", this.typeOfIncidentsSelectedArr);
    }
    rootSelected(e) {
        let item = e.target.value;
        if (e.target.checked) {
            this.rootSelectedArr.push(item);
        }
        else {
            this.rootSelectedArr.forEach((item, j) => {
                if (item == e.target.value) {
                    this.rootSelectedArr.splice(j, 1);
                    return;
                }
            });
        }
        console.log("natureOfIncSelectedArr", this.rootSelectedArr);
    }
    getAllStaff() {
        this.logicalFormInfo.getAllStaff().subscribe((res) => {
            this.staff = res.data;
            console.log("res", this.staff);
        });
    }
    getIncidentsByid(id) {
        this.logicalFormInfo.getIncidentReportById(id).subscribe((res) => {
            console.log("getById", res);
            this.IncidentReport.patchValue({
                projectName: res.data.projectName,
                siteName: res.data.siteName,
                customerName: res.data.customerName,
                streetAddress: res.data.streetAddress,
                customerContact: res.data.customerContact,
                projectManager: res.data.projectManager,
                personCompletingForm: res.data.personCompletingForm,
                customerContactPhone: res.data.customerContactPhone,
                customerEmail: res.data.customerEmail,
                jobNumber: res.data.jobNumber,
                dateOfFormCompletion: res.data.dateOfFormCompletion,
                name: res.data.name,
                department: res.data.department,
                position: res.data.position,
                locationOfTheIncident: res.data.locationOfTheIncident,
                dateOfTheIncident: res.data.dateOfTheIncident,
                timeOfTheIncident: res.data.timeOfTheIncident,
                nameOfWitness: res.data.nameOfWitness,
                witnessStatement: res.data.witnessStatement,
                //file:res.data.file,
                whyDidtheUnsafeConditonExist: res.data.whyDidtheUnsafeConditonExist,
                priorIncident: res.data.priorIncident,
                similarIncident: res.data.similarIncident,
                completedName: res.data.completedName,
                completedPosition: res.data.completedPosition,
                completedDepartment: res.data.completedDepartment,
                completedDate: res.data.completedDate,
                reviewedName: res.data.reviewedName,
                reviewedPosition: res.data.reviewedPosition,
                reviewedDepartment: res.data.reviewedDepartment,
                reviewedDate: res.data.reviewedDate,
                similarIncidentText: res.data.similarIncidentText,
                priorIncidentText: res.data.priorIncidentText,
            });
            this.selectedImage = res.data.file;
            for (let index = 0; index < res.data.arrObj.length; index++) {
                console.log("res.data.arrObj.length", res.data.arrObj.length);
                let key;
                key = Object.keys(res.data.arrObj[index]);
                let changeIndex = this.changeAdd().length;
                this.addAction();
                this.add().controls[index].get("complete").setValue(res.data.arrObj[index].complete);
                this.add().controls[index].get("correctAction").setValue(res.data.arrObj[index].correctAction);
                this.add().controls[index].get("date").setValue(res.data.arrObj[index].date);
                this.add().controls[index].get("personRes").setValue(res.data.arrObj[index].personRes);
            }
            for (let index = 0; index < res.data.changes.length; index++) {
                let key;
                key = Object.keys(res.data.changes[index]);
                let changeIndex = this.changeAdd().length;
                this.changeAdd().controls[index].get(key).setValue(res.data.changes[index][key]);
            }
            for (let index = 0; index < res.data.PPE.length; index++) {
                let key;
                key = Object.keys(res.data.PPE[index]);
                let changeIndex = this.changeAdd().length;
                this.ppeAdd().controls[index].get(key).setValue(res.data.PPE[index][key]);
            }
            for (let index = 0; index < res.data.incidents.length; index++) {
                let key;
                key = Object.keys(res.data.incidents[index]);
                let changeIndex = this.changeAdd().length;
                this.incidentsAdd().controls[index].get(key).setValue(res.data.incidents[index][key]);
            }
            for (let index = 0; index < res.data.natureOFIncidents.length; index++) {
                let key;
                key = Object.keys(res.data.natureOFIncidents[index]);
                let changeIndex = this.changeAdd().length;
                this.natureAdd().controls[index].get(key).setValue(res.data.natureOFIncidents[index][key]);
            }
            for (let index = 0; index < res.data.rootCauseIncident.length; index++) {
                let key;
                key = Object.keys(res.data.rootCauseIncident[index]);
                let changeIndex = this.changeAdd().length;
                this.rootCauseIncidentAdd().controls[index].get(key).setValue(res.data.rootCauseIncident[index][key]);
            }
            // for (let index = 0; index < this.typeOfIncidentsSelectedArr.length; index++) {
            //   console.log("this.typeOfIncidentsSelectedArr.length",this.typeOfIncidentsSelectedArr.length);
            //   let typeOfIncidentsIndex = this.incidentsAdd().length
            //   console.log("typeOfIncidentsIndex",typeOfIncidentsIndex);
            //   this.incidentsAdd().push(this.incidentsAction());
            //   this.incidentsAdd().at(typeOfIncidentsIndex).get("id").setValue(this.typeOfIncidentsSelectedArr[index])
            // }
            // for (let index = 0; index < this.natureOfIncSelectedArr.length; index++) {
            //   console.log("this.natureOfIncSelectedArr.length",this.natureOfIncSelectedArr.length);
            //   let natureOfIncIndex = this.natureAdd().length
            //   console.log("typeOfIncidentsIndex",natureOfIncIndex);
            //   this.natureAdd().push(this.incidentsAction());
            //   this.natureAdd().at(natureOfIncIndex).get("id").setValue(this.natureOfIncSelectedArr[index])
            // }
            // for (let index = 0; index < this.ppeSelectedArr.length; index++) {
            //   console.log("this.ppeSelectedArr.length",this.ppeSelectedArr.length);
            //   let ppeIndex = this.ppeAdd().length
            //   console.log("ppeIndex",ppeIndex);
            //   this.ppeAdd().push(this.ppeAction());
            //   this.ppeAdd().at(ppeIndex).get("id").setValue(this.ppeSelectedArr[index])
            // }
            // for (let index = 0; index < this.rootSelectedArr.length; index++) {
            //   console.log("this.rootSelectedArr.length",this.rootSelectedArr.length);
            //   let rootIndex = this.rootCauseIncidentAdd().length
            //   console.log("rootIndex",rootIndex);
            //   this.rootCauseIncidentAdd().push(this.rootCauseIncidentAction());
            //   this.rootCauseIncidentAdd().at(rootIndex).get("id").setValue(this.rootSelectedArr[index])
            // }
            // this.add(res.data.arrObj);
            // this.changeAdd(res.data.changes);
            // this.incidentsAdd(res.data.attendees);
            // this.natureAdd(res.data.attendees);
            // this.ppeAdd(res.data.attendees);
            // this.rootCauseIncidentAdd(res.data.attendees);
            this.dataUrl = res.data.signaturePad1;
            let check = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { this.signaturePad1 != null; });
            check().then(() => {
                this.signaturePad1.fromDataURL(res.data.signaturePad1);
            });
            let check2 = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { this.signaturePad != null; });
            check2().then(() => {
                console.log(this.signaturePad);
                this.signaturePad.fromDataURL(res.data.signaturePad);
                // setTimeout(() => {
                //   let signaturePadArr=this.signaturePad2.toArray()
                //   res.data.attendees.forEach((x,i) => {
                //     signaturePadArr[i].fromDataURL(x.signature)
                //   });
                // }, 2000); 
            });
            this.IncidentReport.patchValue({
                signaturePad: this.signaturePad,
                signaturePad1: this.signaturePad1
            });
        });
    }
    onSubmit() {
        var _a;
        console.log(this.IncidentReport.value);
        (_a = this.IncidentReport.get("file")) === null || _a === void 0 ? void 0 : _a.patchValue(this.selectedImage);
        console.log(this.IncidentReport.value);
        if (this.id !== 'Form') {
            const data = Object.assign({}, this.IncidentReport.value);
            this.logicalFormInfo.updateIncidentReport(this.id, this.IncidentReport.value).subscribe((res) => {
                console.log("res", res);
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    title: 'Update successfully',
                    showConfirmButton: false,
                    timer: 1200,
                });
                this.router.navigate(["/admin/forms/incidentsTable"]);
            });
        }
        else {
            const data = Object.assign({}, this.IncidentReport.value);
            this.logicalFormInfo.addIncidentReport(data).subscribe(res => {
                console.log("addCustomerForm=>", res);
                // this.IncidentReport.reset();
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    title: 'Submit successfully',
                    showConfirmButton: false,
                    timer: 1200,
                });
                this.router.navigate(["/admin/forms"]);
            }, (err) => {
                console.error(err);
            });
        }
        // // for (let index = 0; index < this.changesSelectedArr.length; index++) {
        // //   console.log("this.changesSelectedArr.length",this.changesSelectedArr.length);
        // //   let changeIndex = this.changeAdd().length
        // //   console.log("changeIndex",changeIndex);
        // //  // this.changeAdd().push(this.changeAction(index));
        // //  this.changeAdd().get("61a9ba8bdee47f7c86631bf5").setValue("ssssssss")
        // // }
        // for (let index = 0; index < this.typeOfIncidentsSelectedArr.length; index++) {
        //   console.log("this.typeOfIncidentsSelectedArr.length",this.typeOfIncidentsSelectedArr.length);
        //   let typeOfIncidentsIndex = this.incidentsAdd().length
        //   console.log("typeOfIncidentsIndex",typeOfIncidentsIndex);
        //   this.incidentsAdd().push(this.incidentsAction());
        //   this.incidentsAdd().at(typeOfIncidentsIndex).get("id").setValue(this.typeOfIncidentsSelectedArr[index])
        // }
        // for (let index = 0; index < this.natureOfIncSelectedArr.length; index++) {
        //   console.log("this.natureOfIncSelectedArr.length",this.natureOfIncSelectedArr.length);
        //   let natureOfIncIndex = this.natureAdd().length
        //   console.log("typeOfIncidentsIndex",natureOfIncIndex);
        //   this.natureAdd().push(this.incidentsAction());
        //   this.natureAdd().at(natureOfIncIndex).get("id").setValue(this.natureOfIncSelectedArr[index])
        // }
        // for (let index = 0; index < this.ppeSelectedArr.length; index++) {
        //   console.log("this.ppeSelectedArr.length",this.ppeSelectedArr.length);
        //   let ppeIndex = this.ppeAdd().length
        //   console.log("ppeIndex",ppeIndex);
        //   this.ppeAdd().push(this.ppeAction());
        //   this.ppeAdd().at(ppeIndex).get("id").setValue(this.ppeSelectedArr[index])
        // }
        // for (let index = 0; index < this.rootSelectedArr.length; index++) {
        //   console.log("this.rootSelectedArr.length",this.rootSelectedArr.length);
        //   let rootIndex = this.rootCauseIncidentAdd().length
        //   console.log("rootIndex",rootIndex);
        //   this.rootCauseIncidentAdd().push(this.rootCauseIncidentAction());
        //   this.rootCauseIncidentAdd().at(rootIndex).get("id").setValue(this.rootSelectedArr[index])
        // }
    }
    // upload(e) {
    //   const fileListAsArray = Array.from(e);
    //   fileListAsArray.forEach((item, i) => {
    //     const file = (e as HTMLInputElement);
    //     const url = URL.createObjectURL(file[i]);
    //     this.imgArr.push(url);
    //     this.fileArr.push({ item, url: url });
    //   })
    //   this.fileArr.forEach((item) => {
    //     this.fileObj.push(item.item)
    //   })
    //   // Set files form control
    //   this.IncidentReport.patchValue({
    //     avatar: this.fileObj
    //   })
    //   this.IncidentReport.get('avatar').updateValueAndValidity()
    // }
    browser(event) {
        const files = event.target.files[0];
        const formdata = new FormData();
        formdata.append('', files);
        console.log(files);
        this.upload.upload(formdata).subscribe((res) => {
            console.log('AddProductComponent -> browser -> res', res);
            this.selectedImage = res.files[0];
            console.log('AddProductComponent -> browse -> this.selectedImage', this.selectedImage);
        });
    }
}
IncidentReportComponent.ɵfac = function IncidentReportComponent_Factory(t) { return new (t || IncidentReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_utils_services_dynamic_forms_service__WEBPACK_IMPORTED_MODULE_4__["DynamicFormsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_5__["LogicalFormInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_7__["SetTitleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_utils_services_upload_file_service_service__WEBPACK_IMPORTED_MODULE_8__["UploadFileServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
IncidentReportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IncidentReportComponent, selectors: [["app-incident-report"]], viewQuery: function IncidentReportComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.signaturePad = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.signaturePad1 = _t.first);
    } }, decls: 322, vars: 104, consts: [[1, "btn", "btn-outline-primary", 3, "routerLink"], ["aria-hidden", "true", 1, "fa", "fa-arrow-left"], [1, "container", "card", "px-4", "py-4", 3, "formGroup"], [1, "text-center", "pt-3"], [1, "title"], [1, "box"], [1, "row"], [1, "col-md-6"], [1, "form-label", "mb-3"], ["aria-label", "Default select example", "formControlName", "jobNumber", 1, "form-select", "form-control", 3, "change"], ["selected", "", "hidden", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], [1, "form-Label"], ["type", "text", "formControlName", "projectName", 1, "form-control"], [1, "col-sm-6"], ["type", "text", "formControlName", "siteName", 1, "form-control"], ["type", "text", "formControlName", "customerName", 1, "form-control"], ["type", "text", "formControlName", "streetAddress", 1, "form-control"], ["placeholder", "", "type", "text", "formControlName", "customerContact", 1, "form-control"], ["aria-label", "Default select example", "formControlName", "projectManager", 1, "form-select", "form-control", "col"], ["type", "text", "formControlName", "personCompletingForm", 1, "form-control"], ["placeholder", "(000) 000-0000", "type", "text", "formControlName", "customerContactPhone", 1, "form-control"], ["placeholder", "ex: email@yahoo.com", "type", "text", "formControlName", "customerEmail", 1, "form-control"], ["type", "date", "formControlName", "dateOfFormCompletion", 1, "form-control"], [1, "mt-3"], ["formArrayName", "incidents"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "col-md-12"], [1, "mt-3", "text-center"], ["type", "text", "formControlName", "instructions", 1, "form-control"], [1, "col-12"], ["type", "text", "formControlName", "name", "id", "", 1, "form-control"], ["type", "text", "formControlName", "department", 1, "form-control"], ["type", "text", "formControlName", "position", 1, "form-control"], ["formArrayName", "natureOFIncidents"], ["type", "text", "formControlName", "locationOfTheIncident", 1, "form-control"], [1, "col-md-3"], [1, "form-Label", "mt-2"], ["type", "date", "formControlName", "dateOfTheIncident", 1, "form-control"], ["formControlName", "timeOfTheIncident", 1, "form-control", 3, "ngxMatTimepicker"], ["picker", ""], ["type", "text", "formControlName", "nameOfWitness", 1, "form-control"], ["type", "text", "formControlName", "witnessStatement", 1, "form-control"], ["type", "file", 1, "form-control", 3, "change"], ["formArrayName", "PPE"], ["formArrayName", "rootCauseIncident"], ["type", "text", "formControlName", "whyDidtheUnsafeConditonExist", 1, "form-control"], ["for", "exampleFormControlInput1", 1, "form-Label"], ["formControlName", "priorIncident", "aria-label", "Default select example", 1, "form-select", "form-control", "col", "form-dropdown"], ["value", "yes"], ["value", "no"], ["name", "", "class", "col mt-2 form-control", "id", "", "formControlName", "priorIncidentText", 4, "ngIf"], ["formControlName", "similarIncident", "aria-label", "Default select example", 1, "form-select", "form-control", "col", "form-dropdown"], ["name", "", "class", "col mt-2 form-control", "id", "", "formControlName", "similarIncidentText", 4, "ngIf"], ["formArrayName", "changes"], ["formArrayName", "arrObj"], ["type", "text", "formControlName", "completedName", 1, "form-control"], ["type", "text", "formControlName", "completedPosition", 1, "form-control"], ["type", "text", "formControlName", "completedDepartment", 1, "form-control"], ["type", "date", "formControlName", "completedDate", 1, "form-control"], [1, "sign"], [3, "options", "onBeginEvent", "onEndEvent"], ["signature", ""], [1, "btn", "btn-outline-primary", "mt-1", 3, "click"], ["type", "text", "formControlName", "reviewedName", 1, "form-control"], ["type", "text", "formControlName", "reviewedPosition", 1, "form-control"], ["type", "text", "formControlName", "reviewedDepartment", 1, "form-control"], ["type", "date", "formControlName", "reviewedDate", 1, "form-control"], ["signature1", ""], [1, "col-md-2"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", 3, "disabled", "click"], [3, "value"], [1, "invalid-feedback"], [3, "formGroupName"], [1, "mt-2", "col-4"], [1, "checkrdobtn"], ["type", "checkbox", 1, "mr-1", 3, "id", "value", "formControlName", "change"], [1, "txtdefault", "fs-16", "weight500", "text-center", "label_2", 3, "for"], [1, "mt-3", "col-4"], ["name", "", "id", "", "formControlName", "priorIncidentText", 1, "col", "mt-2", "form-control"], ["name", "", "id", "", "formControlName", "similarIncidentText", 1, "col", "mt-2", "form-control"], [1, "mt-2", "col-4", "mb-0"], ["type", "checkbox", 1, "mr-1", 3, "id", "formControlName", "change"], ["type", "text", "formControlName", "correctAction", 1, "form-control"], ["aria-label", "Default select example", "formControlName", "personRes", 1, "form-select", "form-control", "col", "form-dropdown"], ["aria-label", "Default select example", "formControlName", "complete", 1, "form-select", "form-control", "col", "form-dropdown"], ["type", "date", "formControlName", "date", 1, "form-control"], [1, "col-1", "mt-5"], [1, "material-icons", 3, "click"]], template: function IncidentReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Incident Report Form Preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Site Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Project Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function IncidentReportComponent_Template_select_change_14_listener() { return ctx.jobNoSel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, IncidentReportComponent_option_17_Template, 2, 2, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, IncidentReportComponent_span_18_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Project Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, IncidentReportComponent_span_24_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Site Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, IncidentReportComponent_span_31_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Customer Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, IncidentReportComponent_span_37_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Site Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, IncidentReportComponent_span_44_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Customer Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, IncidentReportComponent_span_50_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Project Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](58, IncidentReportComponent_option_58_Template, 2, 2, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, IncidentReportComponent_span_59_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Person Completing Form ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](65, IncidentReportComponent_span_65_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Customer Contact Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](72, IncidentReportComponent_span_72_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Customer Contact Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](78, IncidentReportComponent_span_78_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Date of Form Completion");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](84, IncidentReportComponent_span_84_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Type of Incident");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](90, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](91, IncidentReportComponent_ng_container_91_Template, 6, 6, "ng-container", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](92, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Instructions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "textarea", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "        Complete this form as soon as possible after an incident that results in serious inquiry or illness or death. Use to investigate a minor injury\n        or near-miss that could have resulted in a serious injury or illness.\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](100, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](101, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "Injured or Affected Person");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](110, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](111, IncidentReportComponent_span_111_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "Department");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](116, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](117, IncidentReportComponent_span_117_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "position");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](123, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](124, IncidentReportComponent_span_124_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](125, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "Nature of Incident");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](130, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](131, IncidentReportComponent_ng_container_131_Template, 6, 6, "ng-container", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](132, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, "Location of the incident");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](138, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](139, IncidentReportComponent_span_139_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "Date of the incident");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](144, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](145, IncidentReportComponent_span_145_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, "Time of the incident");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](150, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](151, "ngx-mat-timepicker", null, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](153, IncidentReportComponent_span_153_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](154, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, "Incident Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](162, " Name of Witness");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](163, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](164, IncidentReportComponent_span_164_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168, "Witness Statement");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](169, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](170, IncidentReportComponent_span_170_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](175, "Attachments ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function IncidentReportComponent_Template_input_change_176_listener($event) { return ctx.browser($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](177, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](180, "What PPE was in Use ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](182, 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](183, IncidentReportComponent_ng_container_183_Template, 6, 6, "ng-container", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](184, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](185, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](188, "What was the rootcause of incident happen?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](190, 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](191, IncidentReportComponent_ng_container_191_Template, 6, 6, "ng-container", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](192, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](197, "Why did the unsafe condition exist");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "textarea", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](199, "        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "label", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](202, "Was the unsafe act or hazard reported prior to the incident?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "select", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](205, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "option", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](207, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "option", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](209, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](210, IncidentReportComponent_textarea_210_Template, 1, 0, "textarea", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "label", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](213, "Has a similar incident Occured");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "select", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](216, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "option", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](218, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "option", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](220, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](221, IncidentReportComponent_textarea_221_Template, 1, 0, "textarea", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](222, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](223, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](226, "What changes can be made ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](228, 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](229, IncidentReportComponent_ng_container_229_Template, 6, 5, "ng-container", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](230, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](232, 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](233, IncidentReportComponent_ng_container_233_Template, 39, 14, "ng-container", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](234, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](236, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](237, "The Form was Completed by:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](238, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](239, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](241, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](242, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](243, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](244, "input", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](245, IncidentReportComponent_span_245_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](246, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](247, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](248, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](249, "Position ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](250, "input", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](251, IncidentReportComponent_span_251_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](252, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](253, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](254, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](255, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](256, "Department");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](257, "input", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](258, IncidentReportComponent_span_258_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](259, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](260, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](261, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](262, "Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](263, "input", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](264, IncidentReportComponent_span_264_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](265, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](266, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](267, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](268, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](269, "Signature");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](270, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](271, "signature-pad", 62, 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onBeginEvent", function IncidentReportComponent_Template_signature_pad_onBeginEvent_271_listener() { return ctx.drawStart(); })("onEndEvent", function IncidentReportComponent_Template_signature_pad_onEndEvent_271_listener() { return ctx.drawComplete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](273, IncidentReportComponent_span_273_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](274, "button", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IncidentReportComponent_Template_button_click_274_listener() { return ctx.clear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](275, " Clear ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](276, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](277, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](278, "The Form was Reviewed by:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](279, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](280, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](281, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](282, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](283, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](284, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](285, "input", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](286, IncidentReportComponent_span_286_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](287, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](288, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](289, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](290, "Position ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](291, "input", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](292, IncidentReportComponent_span_292_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](293, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](294, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](295, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](296, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](297, "Department");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](298, "input", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](299, IncidentReportComponent_span_299_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](300, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](301, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](302, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](303, "Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](304, "input", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](305, IncidentReportComponent_span_305_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](306, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](307, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](308, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](309, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](310, "Signature");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](311, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](312, "signature-pad", 62, 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onBeginEvent", function IncidentReportComponent_Template_signature_pad_onBeginEvent_312_listener() { return ctx.drawStart1(); })("onEndEvent", function IncidentReportComponent_Template_signature_pad_onEndEvent_312_listener() { return ctx.drawComplete1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](314, IncidentReportComponent_span_314_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](315, "button", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IncidentReportComponent_Template_button_click_315_listener() { return ctx.clear1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](316, " Clear ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](317, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](318, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](319, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](320, "button", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IncidentReportComponent_Template_button_click_320_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](321, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](152);
        let tmp_2_0 = null;
        let tmp_4_0 = null;
        let tmp_5_0 = null;
        let tmp_6_0 = null;
        let tmp_7_0 = null;
        let tmp_8_0 = null;
        let tmp_9_0 = null;
        let tmp_10_0 = null;
        let tmp_11_0 = null;
        let tmp_12_0 = null;
        let tmp_13_0 = null;
        let tmp_14_0 = null;
        let tmp_15_0 = null;
        let tmp_17_0 = null;
        let tmp_18_0 = null;
        let tmp_19_0 = null;
        let tmp_20_0 = null;
        let tmp_21_0 = null;
        let tmp_22_0 = null;
        let tmp_23_0 = null;
        let tmp_24_0 = null;
        let tmp_25_0 = null;
        let tmp_27_0 = null;
        let tmp_28_0 = null;
        let tmp_29_0 = null;
        let tmp_30_0 = null;
        let tmp_31_0 = null;
        let tmp_32_0 = null;
        let tmp_34_0 = null;
        let tmp_35_0 = null;
        let tmp_36_0 = null;
        let tmp_37_0 = null;
        let tmp_38_0 = null;
        let tmp_40_0 = null;
        let tmp_41_0 = null;
        let tmp_42_0 = null;
        let tmp_43_0 = null;
        let tmp_44_0 = null;
        let tmp_51_0 = null;
        let tmp_52_0 = null;
        let tmp_53_0 = null;
        let tmp_54_0 = null;
        let tmp_55_0 = null;
        let tmp_56_0 = null;
        let tmp_57_0 = null;
        let tmp_58_0 = null;
        let tmp_62_0 = null;
        let tmp_63_0 = null;
        let tmp_64_0 = null;
        let tmp_65_0 = null;
        let tmp_66_0 = null;
        let tmp_67_0 = null;
        let tmp_68_0 = null;
        let tmp_69_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](103, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.IncidentReport);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_2_0 = ctx.IncidentReport.get("jobNumber")) == null ? null : tmp_2_0.hasError("required")) && (ctx.IncidentReport.get("jobNumber").dirty || ctx.IncidentReport.get("jobNumber").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.allJobNumbers);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx.IncidentReport.get("jobNumber")) == null ? null : tmp_4_0.hasError("required")) && (ctx.IncidentReport.get("jobNumber").dirty || ctx.IncidentReport.get("jobNumber").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_5_0 = ctx.IncidentReport.get("projectName")) == null ? null : tmp_5_0.hasError("required")) && (ctx.IncidentReport.get("projectName").dirty || ctx.IncidentReport.get("projectName").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_6_0 = ctx.IncidentReport.get("projectName")) == null ? null : tmp_6_0.hasError("required")) && (ctx.IncidentReport.get("projectName").dirty || ctx.IncidentReport.get("projectName").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_7_0 = ctx.IncidentReport.get("siteName")) == null ? null : tmp_7_0.hasError("required")) && (ctx.IncidentReport.get("siteName").dirty || ctx.IncidentReport.get("siteName").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_8_0 = ctx.IncidentReport.get("siteName")) == null ? null : tmp_8_0.hasError("required")) && (ctx.IncidentReport.get("siteName").dirty || ctx.IncidentReport.get("siteName").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_9_0 = ctx.IncidentReport.get("customerName")) == null ? null : tmp_9_0.hasError("required")) && (ctx.IncidentReport.get("customerName").dirty || ctx.IncidentReport.get("customerName").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_10_0 = ctx.IncidentReport.get("customerName")) == null ? null : tmp_10_0.hasError("required")) && (ctx.IncidentReport.get("customerName").dirty || ctx.IncidentReport.get("customerName").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_11_0 = ctx.IncidentReport.get("streetAddress")) == null ? null : tmp_11_0.hasError("required")) && (ctx.IncidentReport.get("streetAddress").dirty || ctx.IncidentReport.get("streetAddress").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_12_0 = ctx.IncidentReport.get("streetAddress")) == null ? null : tmp_12_0.hasError("required")) && (ctx.IncidentReport.get("streetAddress").dirty || ctx.IncidentReport.get("streetAddress").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_13_0 = ctx.IncidentReport.get("customerContact")) == null ? null : tmp_13_0.hasError("required")) && (ctx.IncidentReport.get("customerContact").dirty || ctx.IncidentReport.get("customerContact").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_14_0 = ctx.IncidentReport.get("customerContact")) == null ? null : tmp_14_0.hasError("required")) && (ctx.IncidentReport.get("customerContact").dirty || ctx.IncidentReport.get("customerContact").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_15_0 = ctx.IncidentReport.get("projectManager")) == null ? null : tmp_15_0.hasError("required")) && (ctx.IncidentReport.get("projectManager").dirty || ctx.IncidentReport.get("projectManager").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.projectMang);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_17_0 = ctx.IncidentReport.get("projectManager")) == null ? null : tmp_17_0.hasError("required")) && (ctx.IncidentReport.get("projectManager").dirty || ctx.IncidentReport.get("projectManager").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_18_0 = ctx.IncidentReport.get("personCompletingForm")) == null ? null : tmp_18_0.hasError("required")) && (ctx.IncidentReport.get("personCompletingForm").dirty || ctx.IncidentReport.get("personCompletingForm").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_19_0 = ctx.IncidentReport.get("personCompletingForm")) == null ? null : tmp_19_0.hasError("required")) && (ctx.IncidentReport.get("personCompletingForm").dirty || ctx.IncidentReport.get("personCompletingForm").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_20_0 = ctx.IncidentReport.get("customerContactPhone")) == null ? null : tmp_20_0.hasError("required")) && (ctx.IncidentReport.get("customerContactPhone").dirty || ctx.IncidentReport.get("customerContactPhone").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_21_0 = ctx.IncidentReport.get("customerContactPhone")) == null ? null : tmp_21_0.hasError("required")) && (ctx.IncidentReport.get("customerContactPhone").dirty || ctx.IncidentReport.get("customerContactPhone").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_22_0 = ctx.IncidentReport.get("customerEmail")) == null ? null : tmp_22_0.hasError("required")) && (ctx.IncidentReport.get("customerEmail").dirty || ctx.IncidentReport.get("customerEmail").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_23_0 = ctx.IncidentReport.get("customerEmail")) == null ? null : tmp_23_0.hasError("required")) && (ctx.IncidentReport.get("customerEmail").dirty || ctx.IncidentReport.get("customerEmail").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_24_0 = ctx.IncidentReport.get("dateOfFormCompletion")) == null ? null : tmp_24_0.hasError("required")) && (ctx.IncidentReport.get("dateOfFormCompletion").dirty || ctx.IncidentReport.get("dateOfFormCompletion").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_25_0 = ctx.IncidentReport.get("dateOfFormCompletion")) == null ? null : tmp_25_0.hasError("required")) && (ctx.IncidentReport.get("dateOfFormCompletion").dirty || ctx.IncidentReport.get("dateOfFormCompletion").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.incidentsAdd().controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_27_0 = ctx.IncidentReport.get("name")) == null ? null : tmp_27_0.hasError("required")) && (ctx.IncidentReport.get("name").dirty || ctx.IncidentReport.get("name").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_28_0 = ctx.IncidentReport.get("name")) == null ? null : tmp_28_0.hasError("required")) && (ctx.IncidentReport.get("name").dirty || ctx.IncidentReport.get("name").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_29_0 = ctx.IncidentReport.get("department")) == null ? null : tmp_29_0.hasError("required")) && (ctx.IncidentReport.get("department").dirty || ctx.IncidentReport.get("department").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_30_0 = ctx.IncidentReport.get("department")) == null ? null : tmp_30_0.hasError("required")) && (ctx.IncidentReport.get("department").dirty || ctx.IncidentReport.get("department").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_31_0 = ctx.IncidentReport.get("position")) == null ? null : tmp_31_0.hasError("required")) && (ctx.IncidentReport.get("position").dirty || ctx.IncidentReport.get("position").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_32_0 = ctx.IncidentReport.get("position")) == null ? null : tmp_32_0.hasError("required")) && (ctx.IncidentReport.get("position").dirty || ctx.IncidentReport.get("position").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.natureAdd().controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_34_0 = ctx.IncidentReport.get("locationOfTheIncident")) == null ? null : tmp_34_0.hasError("required")) && (ctx.IncidentReport.get("locationOfTheIncident").dirty || ctx.IncidentReport.get("locationOfTheIncident").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_35_0 = ctx.IncidentReport.get("locationOfTheIncident")) == null ? null : tmp_35_0.hasError("required")) && (ctx.IncidentReport.get("locationOfTheIncident").dirty || ctx.IncidentReport.get("locationOfTheIncident").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_36_0 = ctx.IncidentReport.get("dateOfTheIncident")) == null ? null : tmp_36_0.hasError("required")) && (ctx.IncidentReport.get("dateOfTheIncident").dirty || ctx.IncidentReport.get("dateOfTheIncident").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_37_0 = ctx.IncidentReport.get("dateOfTheIncident")) == null ? null : tmp_37_0.hasError("required")) && (ctx.IncidentReport.get("dateOfTheIncident").dirty || ctx.IncidentReport.get("dateOfTheIncident").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_38_0 = ctx.IncidentReport.get("timeOfTheIncident")) == null ? null : tmp_38_0.hasError("required")) && (ctx.IncidentReport.get("timeOfTheIncident").dirty || ctx.IncidentReport.get("timeOfTheIncident").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxMatTimepicker", _r20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_40_0 = ctx.IncidentReport.get("timeOfTheIncident")) == null ? null : tmp_40_0.hasError("required")) && (ctx.IncidentReport.get("timeOfTheIncident").dirty || ctx.IncidentReport.get("timeOfTheIncident").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_41_0 = ctx.IncidentReport.get("nameOfWitness")) == null ? null : tmp_41_0.hasError("required")) && (ctx.IncidentReport.get("nameOfWitness").dirty || ctx.IncidentReport.get("nameOfWitness").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_42_0 = ctx.IncidentReport.get("nameOfWitness")) == null ? null : tmp_42_0.hasError("required")) && (ctx.IncidentReport.get("nameOfWitness").dirty || ctx.IncidentReport.get("nameOfWitness").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_43_0 = ctx.IncidentReport.get("witnessStatement")) == null ? null : tmp_43_0.hasError("required")) && (ctx.IncidentReport.get("witnessStatement").dirty || ctx.IncidentReport.get("witnessStatement").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_44_0 = ctx.IncidentReport.get("witnessStatement")) == null ? null : tmp_44_0.hasError("required")) && (ctx.IncidentReport.get("witnessStatement").dirty || ctx.IncidentReport.get("witnessStatement").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.ppeAdd().controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.rootCauseIncidentAdd().controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.IncidentReport.get("priorIncident").value == "yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.IncidentReport.get("similarIncident").value == "yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.changeAdd().controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.add().controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_51_0 = ctx.IncidentReport.get("completedName")) == null ? null : tmp_51_0.hasError("required")) && (ctx.IncidentReport.get("completedName").dirty || ctx.IncidentReport.get("completedName").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_52_0 = ctx.IncidentReport.get("completedName")) == null ? null : tmp_52_0.hasError("required")) && (ctx.IncidentReport.get("completedName").dirty || ctx.IncidentReport.get("completedName").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_53_0 = ctx.IncidentReport.get("completedPosition")) == null ? null : tmp_53_0.hasError("required")) && (ctx.IncidentReport.get("completedPosition").dirty || ctx.IncidentReport.get("completedPosition").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_54_0 = ctx.IncidentReport.get("completedPosition")) == null ? null : tmp_54_0.hasError("required")) && (ctx.IncidentReport.get("completedPosition").dirty || ctx.IncidentReport.get("completedPosition").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_55_0 = ctx.IncidentReport.get("completedDepartment")) == null ? null : tmp_55_0.hasError("required")) && (ctx.IncidentReport.get("completedDepartment").dirty || ctx.IncidentReport.get("completedDepartment").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_56_0 = ctx.IncidentReport.get("completedDepartment")) == null ? null : tmp_56_0.hasError("required")) && (ctx.IncidentReport.get("completedDepartment").dirty || ctx.IncidentReport.get("completedDepartment").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_57_0 = ctx.IncidentReport.get("completedDate")) == null ? null : tmp_57_0.hasError("required")) && (ctx.IncidentReport.get("completedDate").dirty || ctx.IncidentReport.get("completedDate").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_58_0 = ctx.IncidentReport.get("completedDate")) == null ? null : tmp_58_0.hasError("required")) && (ctx.IncidentReport.get("completedDate").dirty || ctx.IncidentReport.get("completedDate").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.singRequired);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.signaturePadOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.singRequired);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_62_0 = ctx.IncidentReport.get("reviewedName")) == null ? null : tmp_62_0.hasError("required")) && (ctx.IncidentReport.get("reviewedName").dirty || ctx.IncidentReport.get("reviewedName").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_63_0 = ctx.IncidentReport.get("reviewedName")) == null ? null : tmp_63_0.hasError("required")) && (ctx.IncidentReport.get("reviewedName").dirty || ctx.IncidentReport.get("reviewedName").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_64_0 = ctx.IncidentReport.get("reviewedPosition")) == null ? null : tmp_64_0.hasError("required")) && (ctx.IncidentReport.get("reviewedPosition").dirty || ctx.IncidentReport.get("reviewedPosition").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_65_0 = ctx.IncidentReport.get("reviewedPosition")) == null ? null : tmp_65_0.hasError("required")) && (ctx.IncidentReport.get("reviewedPosition").dirty || ctx.IncidentReport.get("reviewedPosition").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_66_0 = ctx.IncidentReport.get("reviewedDepartment")) == null ? null : tmp_66_0.hasError("required")) && (ctx.IncidentReport.get("reviewedDepartment").dirty || ctx.IncidentReport.get("reviewedDepartment").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_67_0 = ctx.IncidentReport.get("reviewedDepartment")) == null ? null : tmp_67_0.hasError("required")) && (ctx.IncidentReport.get("reviewedDepartment").dirty || ctx.IncidentReport.get("reviewedDepartment").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_68_0 = ctx.IncidentReport.get("reviewedDate")) == null ? null : tmp_68_0.hasError("required")) && (ctx.IncidentReport.get("reviewedDate").dirty || ctx.IncidentReport.get("reviewedDate").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_69_0 = ctx.IncidentReport.get("reviewedDate")) == null ? null : tmp_69_0.hasError("required")) && (ctx.IncidentReport.get("reviewedDate").dirty || ctx.IncidentReport.get("reviewedDate").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.singRequired1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.signaturePadOptions1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.singRequired1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.IncidentReport.valid || ctx.singRequired || ctx.singRequired1);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArrayName"], ngx_mat_timepicker__WEBPACK_IMPORTED_MODULE_10__["NgxMatTimepickerDirective"], ngx_mat_timepicker__WEBPACK_IMPORTED_MODULE_10__["ɵc"], angular2_signaturepad__WEBPACK_IMPORTED_MODULE_11__["SignaturePad"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"]], styles: [".container[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\nlabel[_ngcontent-%COMP%]:not(.form-check-label):not(.custom-file-label) {\n  font-weight: 500;\n}\n\nlabel[_ngcontent-%COMP%] {\n  margin-bottom: 4%;\n  margin-top: 2%;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 500;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n}\n\n  .mat-checkbox .mat-checkbox-inner-container {\n  width: 30px;\n  height: 30px;\n}\n\n.form-check-input[_ngcontent-%COMP%]:hover {\n  border-color: rgba(46, 105, 255, 0.5);\n  box-shadow: 0 0 0 2px rgba(46, 105, 255, 0.25);\n}\n\n.form-check-input[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n}\n\ninput[type=file][_ngcontent-%COMP%] {\n  height: 10%;\n  padding: 0%;\n}\n\n.pt-3[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 32px;\n  font-weight: 700;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n}\n\n.h5[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 20px;\n}\n\nbody[_ngcontent-%COMP%] {\n  background-color: #eee;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%] {\n  border: 5px solid #00d9ff;\n  box-shadow: 10px solid #00d9ff;\n  position: relative;\n  border-radius: 2px;\n  height: 15px;\n  width: 15px;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%]:hover {\n  border: 1px solid;\n  border-color: #2e69ff40;\n  box-shadow: 0 0 0 3px rgba(46, 105, 255, 0.25);\n  height: 15px;\n  width: 15px;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%]:focus {\n  border: 1px solid;\n  border-color: #2e69ff40;\n  box-shadow: 0 0 0 3px rgba(46, 105, 255, 0.25);\n  height: 15px;\n  width: 15px;\n}\n\n.box[_ngcontent-%COMP%] {\n  padding: 1px 9px;\n  box-shadow: 10px solid #00b7ff;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  box-shadow: 3px solid dodgerblue;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  padding: 10px;\n  max-width: 100%;\n  line-height: 1.5;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  box-shadow: 1px 1px 1px #999;\n}\n\n.sign[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid rgba(46, 105, 255, 0.5);\n  width: 500px;\n  border-radius: 5px;\n}\n\n.sign[_ngcontent-%COMP%]:hover {\n  border: 1px solid;\n  border-color: #2e69ff40;\n  box-shadow: 0 0 0 3px rgba(46, 105, 255, 0.25);\n}\n\n.form-control[_ngcontent-%COMP%]:hover {\n  border-color: rgba(46, 105, 255, 0.5);\n  box-shadow: 0 0 0 2px rgba(46, 105, 255, 0.25);\n}\n\nselect[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\n.form-dropdown[_ngcontent-%COMP%] {\n  padding: 0 1.875em 0 0.625em;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='240' height='240'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z'/%3E%3C/svg%3E\");\n  background-position: right 10px bottom 50%;\n  background-size: 0.925em;\n  background-repeat: no-repeat;\n}\n\n.title[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 16px;\n  font-weight: 600;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n}\n\n.form-Label[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 500;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n  width: 100%;\n  margin-left: 2px;\n  margin-bottom: 14px;\n}\n\n.label_2[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 500;\n  margin-left: 7px;\n  margin-top: 5px;\n  padding-right: 0.5rem;\n}\n\n.custError[_ngcontent-%COMP%] {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #dc3545;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaW5jaWRlbnQtcmVwb3J0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBO0VBQ0UsdUJBQUE7QUFQRjs7QUFVQTtFQUNFLGdCQUFBO0FBUEY7O0FBU0E7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUFORjs7QUFTQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQU5GOztBQVNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFORjs7QUFRQTtFQUNFLHFDQUFBO0VBQ0EsOENBQUE7QUFMRjs7QUFPQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBSkY7O0FBT0E7RUFDRSxXQUFBO0VBQ0EsV0FBQTtBQUpGOztBQU1BO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBSEY7O0FBTUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFIRjs7QUFNQTtFQUNFLHNCQUFBO0FBSEY7O0FBS0E7RUFDRSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBRkY7O0FBaUJBO0VBQ0UsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLDhDQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFkRjs7QUFrQkE7RUFDRSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsOENBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQWZGOztBQWlCQTtFQUNFLGdCQUFBO0VBQ0EsOEJBQUE7QUFkRjs7QUFnQkE7RUFFRSxnQ0FBQTtBQWRGOztBQWlCQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUFkRjs7QUFpQkE7RUFDRSxhQUFBO0VBQ0EseUNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFkRjs7QUFnQkE7RUFDRSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsOENBQUE7QUFiRjs7QUFnQkE7RUFDRSxxQ0FBQTtFQUNBLDhDQUFBO0FBYkY7O0FBZUE7RUFDRSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFaRjs7QUFlQTtFQUNFLDRCQUFBO0VBQ0Esc1FBQUE7RUFDQSwwQ0FBQTtFQUNBLHdCQUFBO0VBRUEsNEJBQUE7QUFiRjs7QUFnQkE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFiRjs7QUFlQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBWkY7O0FBY0E7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBWEY7O0FBYUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFWRiIsImZpbGUiOiJpbmNpZGVudC1yZXBvcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsYWJlbDpub3QoLmZvcm0tY2hlY2stbGFiZWwpOm5vdCguY3VzdG9tLWZpbGUtbGFiZWwpIHtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbi8vIH1cclxuLy8gbGFiZWwge1xyXG4vLyAgICAgbWFyZ2luLWJvdHRvbTogNCU7XHJcbi8vICAgICBtYXJnaW4tdG9wOiAyJTtcclxuLy8gfVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmxhYmVsOm5vdCguZm9ybS1jaGVjay1sYWJlbCk6bm90KC5jdXN0b20tZmlsZS1sYWJlbCkge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxubGFiZWwge1xyXG4gIG1hcmdpbi1ib3R0b206IDQlO1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgZm9udC1mYW1pbHk6IEludGVyLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1jaGVja2JveCAubWF0LWNoZWNrYm94LWlubmVyLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcbi5mb3JtLWNoZWNrLWlucHV0OmhvdmVyIHtcclxuICBib3JkZXItY29sb3I6IHJnYmEoNDYsIDEwNSwgMjU1LCAwLjUpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCByZ2IoNDYgMTA1IDI1NSAvIDI1JSk7XHJcbn1cclxuLmZvcm0tY2hlY2staW5wdXQge1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGhlaWdodDogMjVweDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT0nZmlsZSddIHtcclxuICBoZWlnaHQ6IDEwJTtcclxuICBwYWRkaW5nOiAwJTtcclxufVxyXG4ucHQtMyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgZm9udC1mYW1pbHk6IEludGVyLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uaDUge1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG59XHJcbmlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xyXG4gIGJvcmRlcjogNXB4IHNvbGlkIHJnYigwLCAyMTcsIDI1NSk7XHJcbiAgYm94LXNoYWRvdzogMTBweCBzb2xpZCByZ2IoMCwgMjE3LCAyNTUpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgaGVpZ2h0OiAxNXB4O1xyXG4gIHdpZHRoOiAxNXB4O1xyXG4gIC8vIG1hcmdpbi10b3A6IDFweDtcclxufVxyXG5cclxuLy8gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQrc3Bhbjo6YWZ0ZXJcclxuLy8ge1xyXG4vLyAgICAgYm94LXNoYWRvdzoxMHB4IHNvbGlkIHJnYigwLCAyMTcsIDI1NSk7XHJcbi8vICAgICBib3JkZXI6NXB4IHNvbGlkIHJnYigwLCAyMTcsIDI1NSk7XHJcbi8vICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuLy8gICAgIGhlaWdodDoyMHB4O1xyXG4vLyAgICAgd2lkdGg6MjBweDtcclxuXHJcbi8vIH1cclxuXHJcbmlucHV0W3R5cGU9J2NoZWNrYm94J106aG92ZXIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gIGJvcmRlci1jb2xvcjogIzJlNjlmZjQwO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2IoNDYsIDEwNSwgMjU1LCAwLjI1KTtcclxuICBoZWlnaHQ6IDE1cHg7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbiAgLy8gIG1hcmdpbi10b3A6IDFweDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXTpmb2N1cyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMmU2OWZmNDA7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYig0NiwgMTA1LCAyNTUsIDAuMjUpO1xyXG4gIGhlaWdodDogMTVweDtcclxuICB3aWR0aDogMTVweDtcclxufVxyXG4uYm94IHtcclxuICBwYWRkaW5nOiAxcHggOXB4O1xyXG4gIGJveC1zaGFkb3c6IDEwcHggc29saWQgcmdiKDAsIDE4MywgMjU1KTtcclxufVxyXG5pbnB1dDpmb2N1cyB7XHJcbiAgLy8gYm9yZGVyOiAgMnB4IHNvbGlkIGRvZGdlcmJsdWU7XHJcbiAgYm94LXNoYWRvdzogM3B4IHNvbGlkIGRvZGdlcmJsdWU7XHJcbn1cclxuXHJcbnRleHRhcmVhIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4ICM5OTk7XHJcbn1cclxuXHJcbi5zaWduIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNDYsIDEwNSwgMjU1LCAwLjUpO1xyXG4gIHdpZHRoOiA1MDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLnNpZ246aG92ZXIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gIGJvcmRlci1jb2xvcjogIzJlNjlmZjQwO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2IoNDYsIDEwNSwgMjU1LCAwLjI1KTtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbDpob3ZlciB7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDQ2LCAxMDUsIDI1NSwgMC41KTtcclxuICBib3gtc2hhZG93OiAwIDAgMCAycHggcmdiKDQ2IDEwNSAyNTUgLyAyNSUpO1xyXG59XHJcbnNlbGVjdCB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICBhcHBlYXJhbmNlOiBub25lO1xyXG59XHJcblxyXG4uZm9ybS1kcm9wZG93biB7XHJcbiAgcGFkZGluZzogMCAxLjg3NWVtIDAgMC42MjVlbTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyB3aWR0aD0nMjQwJyBoZWlnaHQ9JzI0MCclM0UlM0NwYXRoIGZpbGw9J25vbmUnIGQ9J00wIDBoMjR2MjRIMHonLyUzRSUzQ3BhdGggZD0nTTEyIDEzLjE3Mmw0Ljk1LTQuOTUgMS40MTQgMS40MTRMMTIgMTYgNS42MzYgOS42MzYgNy4wNSA4LjIyMnonLyUzRSUzQy9zdmclM0VcIik7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgMTBweCBib3R0b20gNTAlO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMC45MjVlbTtcclxuXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICBmb250LWZhbWlseTogSW50ZXIsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmZvcm0tTGFiZWwge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIGZvbnQtZmFtaWx5OiBJbnRlciwgc2Fucy1zZXJpZjtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XHJcbn1cclxuLmxhYmVsXzIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBtYXJnaW4tbGVmdDogN3B4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XHJcbn1cclxuLmN1c3RFcnJvcntcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDAuMjVyZW07XHJcbiAgZm9udC1zaXplOiA4MCU7XHJcbiAgY29sb3I6ICNkYzM1NDU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IncidentReportComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-incident-report',
                templateUrl: './incident-report.component.html',
                styleUrls: ['./incident-report.component.scss'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: src_app_utils_services_dynamic_forms_service__WEBPACK_IMPORTED_MODULE_4__["DynamicFormsService"] }, { type: src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_5__["LogicalFormInfoService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_7__["SetTitleService"] }, { type: src_app_utils_services_upload_file_service_service__WEBPACK_IMPORTED_MODULE_8__["UploadFileServiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, { signaturePad: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['signature']
        }], signaturePad1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['signature1']
        }] }); })();


/***/ }),

/***/ "9Ohn":
/*!**********************************************************************!*\
  !*** ./src/app/views/forms/hazard-report/hazard-report.component.ts ***!
  \**********************************************************************/
/*! exports provided: HazardReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HazardReportComponent", function() { return HazardReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_utils_services_dynamic_forms_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utils/services/dynamic-forms.service */ "+3ge");
/* harmony import */ var src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/utils/services/set-title.service */ "yZxC");
/* harmony import */ var src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/utils/services/logical-form-info.service */ "wbBK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_utils_services_upload_file_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/utils/services/upload-file-service.service */ "X2mD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/autocomplete */ "vrAh");
/* harmony import */ var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular2-signaturepad */ "r1zJ");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "UhP/");


















const _c0 = ["Signature1"];
function HazardReportComponent_span_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Full Name is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HazardReportComponent_span_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Email is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HazardReportComponent_span_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Phone Number is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HazardReportComponent_span_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Phone Number Should be 10 digits");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HazardReportComponent_span_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Department is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HazardReportComponent_span_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Position is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HazardReportComponent_span_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Project Number is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HazardReportComponent_option_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const manager_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", manager_r26._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](manager_r26.name);
} }
function HazardReportComponent_option_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const manager_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", manager_r27.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](manager_r27.email);
} }
function HazardReportComponent_mat_option_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", option_r28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", option_r28.name, " ");
} }
function HazardReportComponent_span_115_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Description is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HazardReportComponent_span_121_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Date is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HazardReportComponent_span_127_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Location is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HazardReportComponent_span_133_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Date is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HazardReportComponent_span_139_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Job Number is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HazardReportComponent_option_291_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const consequence_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", consequence_r29.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](consequence_r29.name);
} }
function HazardReportComponent_option_298_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const likelihood_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", likelihood_r30.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](likelihood_r30.name);
} }
function HazardReportComponent_option_305_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rating_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", rating_r31.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](rating_r31.name);
} }
function HazardReportComponent_span_498_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Name is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HazardReportComponent_span_504_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Position is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HazardReportComponent_span_510_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Department is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HazardReportComponent_span_521_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Date is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HazardReportComponent_span_528_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This Field is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c1 = function () { return ["/admin/forms"]; };
class HazardReportComponent {
    constructor(fb, dynamicFormsService, setTitle, url, router, upload, activatedRoute) {
        this.fb = fb;
        this.dynamicFormsService = dynamicFormsService;
        this.setTitle = setTitle;
        this.url = url;
        this.router = router;
        this.upload = upload;
        this.activatedRoute = activatedRoute;
        this.title = 'hazardReport';
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.options = [''];
        this.whsData = [''];
        this.hazardData = [''];
        this.myControlEmail = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.myControlManagerEmail = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.myControlManager = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.signaturePadOptions = {
            // passed through to szimek/signature_pad constructor
            minWidth: 1,
            canvasWidth: 500,
            canvasHeight: 100,
        };
        this.Consequences = [
            { name: '1-Insignificant', value: 1 },
            { name: '2-Moderate', value: 2 },
            { name: '4-Minor', value: 4 },
            { name: '3-Major', value: 3 },
            { name: '5-Catastrophic', value: 5 },
        ];
        this.Likelihood = [
            { name: '1-Rare', value: 1 },
            { name: '3-Moderate', value: 3 },
            { name: '2-Unlikely', value: 2 },
            { name: '4-Likely', value: 4 },
            { name: '5-Almost Certain', value: 5 }
        ];
        this.RiskRating = [
            { name: 'Low', value: 'low' },
            { name: 'Medium', value: 'medium' },
            { name: 'High', value: 'high' },
        ];
        this.ActionRequired = [
            { name: 'Immediately', value: 'immediately' },
            { name: 'Today', value: 'today' },
            { name: 'This week', value: 'thisWeek' },
            { name: 'This Month', value: 'thisMonth' },
        ];
        this.hazardReport = this.fb.group({
            fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
            department: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            position: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            projectName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            signaturePad1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            describeHazard: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            dateHazardReport: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            locationHazard: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            dateHazardIdentify: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            jobNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            compilePosition: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            compileDepartment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            myControl: [''],
            myControlManager: [''],
            employeeParttime: [''],
            managerSupervisor: [''],
            managerSupervisorEmail: [''],
            whsManagerEmail: [''],
            action: [''],
            eliminateHazard: [''],
            eliminateCorrect: [''],
            elliminateAction: [''],
            eliminateWhen: [''],
            substituteCorrect: [''],
            substituteAction: [''],
            substituteWhen: [''],
            isolatedCorrect: [''],
            isolatedAction: [''],
            isolatedWhen: [''],
            solutionCorrect: [''],
            solutionAction: [''],
            solutionWhen: [''],
            procedureRemove: [''],
            procedureRemoveCorrect: [''],
            procedureRemoveAction: [''],
            procedureRemoveWhen: [''],
            PPECorrect: [''],
            PPEAction: [''],
            PPEWhen: [''],
            fileUpload: [''],
            complete: [''],
            consequence: [],
            riskRating: [''],
            actionRequired: [''],
            likelihood: [],
            reduceRisk: [''],
            procedures: [''],
            process: [''],
            isolatedHazard: [''],
            eliminateHazardAction: ['']
        });
    }
    ngOnInit() {
        this.filteredOptions = this.myControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(val => {
            console.log("myControl", val);
            return this.filter(val || '');
        }));
        this.filteredManager = this.myControlManager.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(val => {
            console.log("myControlManager", val);
            return this.filter(val || '');
        }));
        this.getAllHazardTreatmentRelation();
        this.getall();
        this.dynamicFormsService.homebarTitle.next('Hazard Report Form');
        this.setTitle.setTitle('WHS-Hazard Report Form');
        this.hazardReport.get('managerSupervisor').valueChanges.subscribe((res) => {
            if (res) {
                console.log(res);
                for (let i = 0; i < this.whsData.length; i++) {
                    if (res === this.whsData[i]._id) {
                        console.log("id found");
                        this.hazardReport.get('managerSupervisorEmail').setValue(this.whsData[i].email);
                        break;
                    }
                }
            }
        });
        this.id = this.activatedRoute.snapshot.params.id;
        if (this.id != 'form')
            console.log(this.id, "nnnn");
        {
            console.log("id", this.id);
            this.getHazardByid(this.id);
        }
        // this.hazardReport.get('Consequence').valueChanges.subscribe((res) => {
        //   if (res) {
        //     console.log(res);
        //     if (res == '1-Insignificant') {
        //       this.hazardReport.get('riskRating').setValue('Low');
        //       this.hazardReport.get('action').setValue('option4');
        //     }
        //     if (res == '2-Moderate') {
        //       this.hazardReport.get('riskRating').setValue('Medium');
        //       this.hazardReport.get('action').setValue('option3');
        //     }
        //     if (res == '4-Minor') {
        //       this.hazardReport.get('riskRating').setValue('Low');
        //       this.hazardReport.get('action').setValue('option4');
        //     }
        //     if (res == '3-Major') {
        //       this.hazardReport.get('riskRating').setValue('High');
        //       this.hazardReport.get('action').setValue('option1');
        //     }
        //     if (res == '5-Catastrophic') {
        //       this.hazardReport.get('riskRating').setValue('High');
        //       this.hazardReport.get('action').setValue('option1');
        //     }
        //   }
        // });
        // this.hazardReport.get('likelihood').valueChanges.subscribe((res) => {
        //   if (res) {
        //     console.log(res);
        //     if (res == '1-Insignificant') {
        //       this.hazardReport.get('riskRating').setValue('Low');
        //     }
        //     if (res == '3-Moderate') {
        //       this.hazardReport.get('riskRating').setValue('Medium');
        //     }
        //     if (res == '2-Minor') {
        //       this.hazardReport.get('riskRating').setValue('Low');
        //     }
        //     if (res == '4-Major') {
        //       this.hazardReport.get('riskRating').setValue('High');
        //     }
        //     if (res == '5-Catastrophic') {
        //       this.hazardReport.get('riskRating').setValue('High');
        //     }
        //   }
        // });
    }
    getHazardByid(id) {
        this.url.getHazardFormDataById(id).subscribe((res) => {
            console.log(res);
            this.hazardReport.patchValue({
                myControl: res.data.myControl,
                myControlManager: res.data.myControlManager,
                employeeParttime: res.data.employeeParttime,
                fullName: res.data.fullName,
                email: res.data.email,
                phone: res.data.phone,
                department: res.data.department,
                position: res.data.position,
                projectName: res.data.projectName,
                managerSupervisor: res.data.managerSupervisor,
                managerSupervisorEmail: res.data.managerSupervisorEmail,
                whsManagerEmail: res.data.whsManagerEmail,
                describeHazard: res.data.describeHazard,
                dateHazardReport: res.data.dateHazardReport,
                jobNumber: res.data.jobNumber,
                action: res.data.action,
                eliminateHazard: res.data.eliminateHazard,
                eliminateCorrect: res.data.eliminateCorrect,
                elliminateAction: res.data.elliminateAction,
                eliminateWhen: res.data.eliminateWhen,
                substituteCorrect: res.data.substituteCorrect,
                substituteAction: res.data.substituteAction,
                substituteWhen: res.data.substituteWhen,
                isolatedCorrect: res.data.isolatedCorrect,
                isolatedAction: res.data.isolatedAction,
                isolatedWhen: res.data.isolatedWhen,
                solutionCorrect: res.data.solutionCorrect,
                solutionAction: res.data.solutionAction,
                customerName: res.data.customerName,
                solutionWhen: res.data.solutionWhen,
                procedureRemove: res.data.procedureRemove,
                procedureRemoveCorrect: res.data.procedureRemoveCorrect,
                procedureRemoveAction: res.data.procedureRemoveAction,
                procedureRemoveWhen: res.data.procedureRemoveWhen,
                PPECorrect: res.data.PPECorrect,
                PPEAction: res.data.PPEAction,
                PPEWhen: res.data.PPEWhen,
                name: res.data.name,
                locationHazard: res.data.locationHazard,
                compilePosition: res.data.compilePosition,
                compileDepartment: res.data.compileDepartment,
                date: res.data.date,
                complete: res.data.complete,
                consequence: res.data.consequence,
                riskRating: res.data.riskRating,
                actionRequired: res.data.actionRequired,
                likelihood: res.data.likelihood,
                reduceRisk: res.data.reduceRisk,
                procedures: res.data.procedures,
                process: res.data.process,
                isolatedHazard: res.data.isolatedHazard,
                dateHazardIdentify: res.data.dateHazardIdentify,
                eliminateHazardAction: res.data.eliminateHazardAction,
            });
            this.selectedImage = res.data.fileUpload;
            console.log(this.selectedImage, "selectedImage");
            this.dataUrl = res.data.signaturePad1;
            let check = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { this.signaturePad1 != null; });
            check().then(() => {
                this.signaturePad1.fromDataURL(res.data.signaturePad1);
            });
        });
    }
    ngAfterViewInit() {
        // this.signaturePad is now available
        console.log(this.signaturePad1, this.dataUrl);
        this.signaturePad1.set('minWidth', 1); // set szimek/signature_pad options at runtime
        this.signaturePad1.clear();
        this.signaturePad1.fromDataURL(this.dataUrl);
        // this.signaturePad1.set('minWidth', 1); // set szimek/signature_pad options at runtime
        // this.signaturePad1.set('dotSize', 1); // set szimek/signature_pad options at runtime
        // invoke functions from szimek/signature_pad API
    }
    drawComplete() {
        console.log("signnn", this.signaturePad1);
        this.hazardReport.controls['signaturePad1'].setValue(this.signaturePad1.toDataURL());
        console.log("signaturePad1 control", this.hazardReport.controls['signaturePad1'].value);
        // will be notified of szimek/signature_pad's onEnd event
        console.log(this.signaturePad1.toDataURL());
    }
    clear() {
        this.signaturePad1.clear();
        this.hazardReport.controls['signaturePad1'].setValue("");
    }
    drawStart() {
        // will be notified of szimek/signature_pad's onBegin event
        console.log('begin drawing');
        this.singRequired = this.hazardReport.controls['signaturePad1'].invalid;
    }
    // RiskRating: Array<any> = [
    //   { name: 'Low' },
    //   { name: 'Medium' },
    //   { name: 'High' },
    // ];
    filter(val) {
        return this.url.getAllWHSManager()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => {
            response.data = response.data.filter(option => {
                return option.name.toLowerCase().indexOf(val.toLowerCase()) === 0;
            });
            return response.data;
        }));
    }
    filterEvent(val) {
        return this.url.getAllManager()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => {
            response.data = response.data.filter(manager => {
                return manager.name.toLowerCase().indexOf(val.toLowerCase()) === 0;
            });
            return response.data;
        }));
    }
    change(event) {
        console.log("evebt", event);
        this.hazardReport.get('myControl').setValue(event.option.value.name || '');
        this.hazardReport.get('whsManagerEmail').setValue(event.option.value.email || '');
    }
    changeName() {
        console.log("changeName");
    }
    getall() {
        this.url.getAllManager().subscribe((res) => {
            console.log(res);
            this.whsData = res.data;
        });
    }
    getHazardNo() {
        if (this.hazardReport.get('consequence').value && this.hazardReport.get('likelihood').value) {
            let addition = parseInt(this.hazardReport.get('consequence').value) + parseInt(this.hazardReport.get('likelihood').value);
            console.log(addition);
            this.hazardData.forEach((item) => {
                if (addition === item.title) {
                    console.log('Id found', item.title);
                    this.hazardReport.patchValue({
                        riskRating: item.riskRating,
                        actionRequired: item.actionRequired,
                    });
                }
            });
        }
    }
    getAllHazardTreatmentRelation() {
        this.url.getAllHazardTreatmentRelation().subscribe((res) => {
            console.log('getAllHazardTreatmentRelation=>', res);
            this.hazardData = res.data;
        });
    }
    onFormSubmit() {
        var _a;
        (_a = this.hazardReport.get('fileUpload')) === null || _a === void 0 ? void 0 : _a.setValue(this.selectedImage);
        console.log('form data', this.hazardReport.value);
        this.singRequired = this.hazardReport.controls['signaturePad1'].invalid;
        console.log(this.id);
        if (this.id != 'form') {
            const data = Object.assign({}, this.hazardReport.value);
            console.log(this.hazardReport.value, "mmmmmmm");
            this.url
                .updateHazardFormData(this.id, data)
                .subscribe((res) => {
                console.log('res', res);
                this.router.navigate(['/admin/forms']);
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    title: 'Update successfully',
                    showConfirmButton: false,
                    timer: 1200,
                });
                this.router.navigate(['/admin/forms']);
            });
        }
        else {
            const data = Object.assign({}, this.hazardReport.value);
            this.url.addHazardFormData(data).subscribe((res) => {
                console.log('res', res);
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    title: 'Submit successfully',
                    showConfirmButton: false,
                    timer: 1200,
                });
                // this.router.navigate(["/admin/forms/tableData"]);
                this.router.navigate(['/admin/forms']);
            });
            console.log('data', data);
        }
        this.hazardReport.reset();
    }
    browser(event) {
        const files = event.target.files[0];
        const formdata = new FormData();
        formdata.append('', files);
        console.log(files);
        this.upload.upload(formdata).subscribe((res) => {
            console.log('AddProductComponent -> browser -> res', res);
            this.selectedImage = res.files[0];
            console.log('AddProductComponent -> browse -> this.selectedImage', this.selectedImage);
        });
    }
}
HazardReportComponent.ɵfac = function HazardReportComponent_Factory(t) { return new (t || HazardReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_utils_services_dynamic_forms_service__WEBPACK_IMPORTED_MODULE_5__["DynamicFormsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_6__["SetTitleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_7__["LogicalFormInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_utils_services_upload_file_service_service__WEBPACK_IMPORTED_MODULE_9__["UploadFileServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"])); };
HazardReportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HazardReportComponent, selectors: [["app-hazard-report"]], viewQuery: function HazardReportComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.signaturePad1 = _t.first);
    } }, decls: 536, vars: 98, consts: [[1, "btn", "btn-outline-primary", 3, "routerLink"], ["aria-hidden", "true", 1, "fa", "fa-arrow-left"], [1, "container", "card", "px-4", "py-4", "content-center"], [1, "px-4", "py-4", 3, "formGroup"], [1, "mb-3"], [1, "text-center", "title"], [1, "mt-5"], [1, "row", "py-4"], [1, "col-md-12"], [1, "col-md-6", 2, "padding", "0px"], [1, "mb-3", "text_1"], [1, "text_2"], [1, "col-md-12", 2, "padding", "0px"], [1, "form-check", "form-check-inline"], ["type", "radio", "formControlName", "employeeParttime", "id", "inlineCheckbox5", "value", "option4", 1, "form-check-input"], ["for", "inlineCheckbox5", 1, "form-check-label", "ml-1"], [1, "form-check", "form-check-inline", "ml-4"], ["type", "radio", "formControlName", "employeeParttime", "id", "inlineCheckbox6", "value", "option5", 1, "form-check-input", "checkbox-lg"], ["for", "inlineCheckbox6", 1, "form-check-label", "ml-1"], ["type", "radio", "formControlName", "employeeParttime", "id", "inlineCheckbox7", "value", "option6", 1, "form-check-input"], ["for", "inlineCheckbox7", 1, "form-check-label", "ml-1"], ["type", "radio", "formControlName", "employeeParttime", "id", "inlineCheckbox8", "value", "option7", 1, "form-check-input"], ["for", "inlineCheckbox8", 1, "form-check-label", "ml-1"], [1, "row"], ["for", "exampleInputFullname", 1, "form-label"], ["type", "fullname", "formControlName", "fullName", "id", "exampleInputFullname", "aria-describedby", "emailHelp", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], [1, "col-md-6"], ["for", "exampleInputEmail1", 1, "form-label"], ["type", "email", "formControlName", "email", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", 1, "form-control"], ["for", "exampleInputPhone", 1, "form-label"], ["maxlength", "10", "formControlName", "phone", "id", "exampleInputPhone", "aria-describedby", "emailHelp", 1, "form-control"], ["for", "exampleInputDepartment", 1, "form-label"], ["type", "department", "formControlName", "department", "id", "exampleInputDepartment", "aria-describedby", "emailHelp", 1, "form-control"], ["for", "exampleInputPosition", 1, "form-label"], ["type", "position", "formControlName", "position", "id", "exampleInputPosition", "aria-describedby", "emailHelp", 1, "form-control"], ["for", "exampleInputProjectNumber", 1, "form-label"], ["type", "Projectnumber", "formControlName", "projectName", "id", "exampleInputProjectNumber", "aria-describedby", "emailHelp", 1, "form-control"], [1, "col-md-12", "report_1"], [2, "margin-top", "1.5%"], [1, "form-label"], ["formControlName", "managerSupervisor", "aria-label", "Default select example", 1, "form-select", "form-control", "col", "form-dropdown"], ["selected", "", "hidden", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "email", 1, "form-label"], ["formControlName", "managerSupervisorEmail", "aria-label", "Default select example", 1, "form-select", "form-control", "col", "form-dropdown"], ["type", "text", "placeholder", "Enter Name", "formControlName", "myControl", "matInput", "", 1, "form-control", 3, "matAutocomplete"], [3, "optionSelected"], ["auto", "matAutocomplete"], ["type", "email", "formControlName", "whsManagerEmail", "id", "exampleInputProjectNumber", "aria-describedby", "emailHelp", 1, "form-control"], [1, "text_3"], [1, "col-md-12", "py-4"], [1, "form-floating"], ["formControlName", "describeHazard", "placeholder", "Leave a comment here", "id", "floatingTextarea2", "aria-describedby", "emailHelp", 1, "form-control", 2, "height", "120px"], [1, "col-md-3"], ["type", "date", "formControlName", "dateHazardReport", "id", "exampleInputProjectNumber", "aria-describedby", "emailHelp", 1, "form-control"], ["type", "text", "formControlName", "locationHazard", "id", "exampleInputProjectNumber", "aria-describedby", "emailHelp", 1, "form-control"], ["type", "date", "formControlName", "dateHazardIdentify", "id", "exampleInputProjectNumber", "aria-describedby", "emailHelp", 1, "form-control"], ["type", "text", "formControlName", "projectName", "id", "exampleInputProjectNumber", "aria-describedby", "emailHelp", 1, "form-control"], [1, "table", "table-bordered", "text-center"], ["colspan", "7", 1, "L_1"], ["colspan", "8", 1, "L_1"], ["colspan", "2", "rowspan", "2"], ["colspan", "5"], ["colspan", "4", "rowspan", "2"], [1, "like_2"], ["rowspan", "5"], [1, "like_1"], [1, "M_1"], [1, "H_1"], ["colspan", "2"], [1, "space_1"], [1, "L_1"], ["scope", "col"], ["colspan", "2", 1, "mr-2", "ml-2"], [1, "mb-3", "col"], ["for", "exampleFormControlInput1", 1, "form-label"], ["formControlName", "consequence", "aria-label", "Default select example", 1, "form-select", "form-control", "col", "form-dropdown", 3, "change"], ["formControlName", "likelihood", "aria-label", "Default select example", 1, "form-select", "form-control", "col", "form-dropdown", 3, "change"], ["formControlName", "riskRating", "aria-label", "Default select example", 1, "form-select", "form-control", "col", "form-dropdown"], [1, "col-md"], ["type", "radio", "formControlName", "actionRequired", "id", "inlineCheckbox1", "value", "immediately", 1, "form-check-input"], ["for", "inlineCheckbox1", 1, "form-check-label", "ml-1"], ["type", "radio", "formControlName", "actionRequired", "id", "inlineCheckbox2", "value", "today", 1, "form-check-input"], ["for", "inlineCheckbox2", 1, "form-check-label", "ml-1"], ["type", "radio", "formControlName", "actionRequired", "id", "inlineCheckbox3", "value", "thisWeek", 1, "form-check-input"], ["for", "inlineCheckbox3", 1, "form-check-label", "ml-1"], ["type", "radio", "formControlName", "actionRequired", "id", "inlineCheckbox4", "value", "this.Month", 1, "form-check-input"], ["for", "inlineCheckbox4", 1, "form-check-label", "ml-1"], [1, "mt-3"], [1, "col-md-4"], ["aria-label", "Default select example", "formControlName", "eliminateHazard", 1, "form-select", "form-control", "col", "outline", "form-dropdown"], ["value", "yes", 1, "mr-1"], ["value", "no", 1, "mr-1"], ["type", "surname", "formControlName", "eliminateCorrect", "aria-describedby", "emailHelp", 1, "form-control"], [1, "col-md-2"], [1, "form-label", "label_1"], ["type", "email", "formControlName", "elliminateAction", "aria-describedby", "emailHelp", 1, "form-control"], ["type", "date", "formControlName", "eliminateWhen", "aria-describedby", "emailHelp", 1, "form-control"], ["aria-label", "Default select example", "formControlName", "process", 1, "form-select", "form-control", "col", "outline", "form-dropdown"], ["type", "surname", "formControlName", "substituteCorrect", "aria-describedby", "emailHelp", 1, "form-control"], ["type", "email", "formControlName", "substituteAction", "aria-describedby", "emailHelp", 1, "form-control"], ["type", "date", "formControlName", "substituteWhen", "aria-describedby", "emailHelp", 1, "form-control"], ["aria-label", "Default select example", "formControlName", "isolatedHazard", 1, "form-select", "form-control", "col", "outline", "form-dropdown"], ["type", "surname", "formControlName", "isolatedCorrect", "aria-describedby", "emailHelp", 1, "form-control"], ["type", "email", "formControlName", "isolatedAction", "aria-describedby", "emailHelp", 1, "form-control"], ["type", "date", "formControlName", "isolatedWhen", "aria-describedby", "emailHelp", 1, "form-control"], ["aria-label", "Default select example", "formControlName", "complete", 1, "form-select", "form-control", "col", "outline", "form-dropdown"], ["type", "surname", "formControlName", "solutionCorrect", "aria-describedby", "emailHelp", 1, "form-control"], ["type", "email", "formControlName", "solutionAction", "aria-describedby", "emailHelp", 1, "form-control"], ["type", "date", "formControlName", "solutionWhen", "aria-describedby", "emailHelp", 1, "form-control"], ["aria-label", "Default select example", "formControlName", "procedures", 1, "form-select", "form-control", "col", "outline", "form-dropdown"], ["type", "surname", "formControlName", "procedureRemoveCorrect", "aria-describedby", "emailHelp", 1, "form-control"], ["type", "email", "formControlName", "procedureRemoveAction", "aria-describedby", "emailHelp", 1, "form-control"], ["type", "date", "formControlName", "procedureRemove", "aria-describedby", "emailHelp", 1, "form-control"], ["aria-label", "Default select example", "formControlName", "reduceRisk", 1, "form-select", "form-control", "col", "outline", "form-dropdown"], ["type", "surname", "formControlName", "PPECorrect", "aria-describedby", "emailHelp", 1, "form-control"], ["type", "email", "formControlName", "PPEAction", "aria-describedby", "emailHelp", 1, "form-control"], ["type", "date", "formControlName", "PPEWhen", "aria-describedby", "emailHelp", 1, "form-control"], ["type", "fullname", "formControlName", "name", "aria-describedby", "emailHelp", 1, "form-control"], ["type", "surname", "formControlName", "compilePosition", "aria-describedby", "emailHelp", 1, "form-control"], ["type", "surname", "formControlName", "compileDepartment", "aria-describedby", "emailHelp", 1, "form-control"], [1, "mb-3", "col-md-6"], ["type", "file", "id", "file", 1, "form-control", 3, "change"], ["file", ""], ["for", "exampleInputSurname", 1, "form-label"], ["type", "date", "value", "", "formControlName", "date", "aria-describedby", "emailHelp", 1, "form-control"], [1, "sign"], [3, "options", "onBeginEvent", "onEndEvent"], ["Signature1", ""], [1, "btn", "btn-outline-primary", "my-3", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", 3, "click"], [1, "invalid-feedback"], [3, "value"]], template: function HazardReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Hazard Report Form Preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "hr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Part A - Form Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Position Reporting The Hazard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Fulltime Employee");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Part-time Employee");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Casual");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Contractor");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, HazardReportComponent_span_38_Template, 2, 0, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, HazardReportComponent_span_45_Template, 2, 0, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, HazardReportComponent_span_51_Template, 2, 0, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, HazardReportComponent_span_52_Template, 2, 0, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Department");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](58, HazardReportComponent_span_58_Template, 2, 0, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Position");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](64, HazardReportComponent_span_64_Template, 2, 0, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Project Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](70, HazardReportComponent_span_70_Template, 2, 0, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "h3", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Report to be sent to the following");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Manager/Supervisor");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "select", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "option", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](83, HazardReportComponent_option_83_Template, 2, 2, "option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "label", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "select", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "option", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](91, HazardReportComponent_option_91_Template, 2, 2, "option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "WHS Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](96, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "mat-autocomplete", 47, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("optionSelected", function HazardReportComponent_Template_mat_autocomplete_optionSelected_97_listener($event) { return ctx.change($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](99, HazardReportComponent_mat_option_99_Template, 2, 2, "mat-option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](100, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "label", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](105, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "h2", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "Hazard Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "Describe the Hazard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](114, "textarea", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](115, HazardReportComponent_span_115_Template, 2, 0, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "label", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "Date Hazard Reported");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](120, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](121, HazardReportComponent_span_121_Template, 2, 0, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "label", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, "Location of Hazard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](126, "input", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](127, HazardReportComponent_span_127_Template, 2, 0, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "label", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, "Date Hazard Identified");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](132, "input", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](133, HazardReportComponent_span_133_Template, 2, 0, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "label", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, "Job Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](138, "input", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](139, HazardReportComponent_span_139_Template, 2, 0, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "Hazard Treatment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "table", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "th", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, "Risk Level Matrix");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "th", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, "Risk Analysis");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](154, "th", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "td", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](156, "Consequence");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "td", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, "Likelihood");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "td", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](162, "Consequence");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](165, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](167, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](169, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](171, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](173, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "th", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](177, "Likelihood");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](179, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "td", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](181, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "td", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](183, "H");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "td", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](185, "H");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "td", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](187, "H");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "td", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](189, "H");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "td", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](192, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "td", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](194, "Rare");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "td", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](197, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "td", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](199, "Insignificant");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](202, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "td", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](204, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "td", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](206, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "td", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](208, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "td", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](210, "H");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "td", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](212, "H");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "td", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](214, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "td", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](216, "Unlikely");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "td", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](218, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "td", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](220, "Minor");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](221, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](223, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "td", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](225, "L");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](226, "td", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](227, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "td", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](229, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "td", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](231, "H");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](232, "td", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](233, "H");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](234, "td", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](235, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](236, "td", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](237, "Moderate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](238, "td", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](239, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "td", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](241, "Moderate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](242, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](243, "th", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](244, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](245, "td", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](246, "L");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](247, "td", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](248, "L");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](249, "td", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](250, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](251, "td", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](252, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](253, "td", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](254, "H");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](255, "td", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](256, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](257, "td", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](258, "Likely");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](259, "td", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](260, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](261, "td", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](262, "Major");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](263, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](264, "th", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](265, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](266, "td", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](267, "L");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](268, "td", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](269, "L");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](270, "td", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](271, "L");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](272, "td", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](273, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](274, "td", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](275, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](276, "td", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](277, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](278, "td", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](279, "Almost Certain");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](280, "td", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](281, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](282, "td", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](283, "Catastrophic");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](284, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](285, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](286, "label", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](287, "Consequence");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](288, "select", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function HazardReportComponent_Template_select_change_288_listener() { return ctx.getHazardNo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](289, "option", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](290, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](291, HazardReportComponent_option_291_Template, 2, 2, "option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](292, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](293, "label", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](294, "Likelihood");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](295, "select", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function HazardReportComponent_Template_select_change_295_listener() { return ctx.getHazardNo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](296, "option", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](297, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](298, HazardReportComponent_option_298_Template, 2, 2, "option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](299, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](300, "label", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](301, "Risk Rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](302, "select", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](303, "option", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](304, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](305, HazardReportComponent_option_305_Template, 2, 2, "option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](306, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](307, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](308, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](309, "Action Required");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](310, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](311, "input", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](312, "label", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](313, "Immediately");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](314, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](315, "input", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](316, "label", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](317, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](318, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](319, "input", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](320, "label", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](321, "This week");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](322, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](323, "input", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](324, "label", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](325, "This Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](326, "h2", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](327, "Corrective Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](328, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](329, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](330, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](331, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](332, "Can you eliminate the hazard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](333, "select", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](334, "option", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](335, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](336, "option", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](337, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](338, "option", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](339, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](340, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](341, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](342, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](343, "Corrective Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](344, "input", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](345, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](346, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](347, "label", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](348, "Actioned by");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](349, "input", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](350, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](351, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](352, "label", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](353, "By when");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](354, "input", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](355, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](356, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](357, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](358, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](359, "Can you substitute a safe process");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](360, "select", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](361, "option", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](362, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](363, "option", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](364, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](365, "option", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](366, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](367, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](368, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](369, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](370, "Corrective Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](371, "input", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](372, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](373, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](374, "label", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](375, "Actioned by");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](376, "input", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](377, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](378, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](379, "label", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](380, "By when");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](381, "input", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](382, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](383, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](384, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](385, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](386, "Can the hazard be isolated");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](387, "select", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](388, "option", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](389, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](390, "option", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](391, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](392, "option", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](393, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](394, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](395, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](396, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](397, "Corrective Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](398, "input", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](399, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](400, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](401, "label", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](402, "Actioned by");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](403, "input", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](404, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](405, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](406, "label", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](407, "By when");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](408, "input", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](409, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](410, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](411, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](412, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](413, "Can a solution be engreed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](414, "select", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](415, "option", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](416, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](417, "option", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](418, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](419, "option", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](420, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](421, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](422, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](423, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](424, "Corrective Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](425, "input", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](426, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](427, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](428, "label", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](429, "Actioned by");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](430, "input", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](431, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](432, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](433, "label", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](434, "By when");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](435, "input", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](436, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](437, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](438, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](439, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](440, "Can procedures remove or reduce the risk");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](441, "select", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](442, "option", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](443, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](444, "option", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](445, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](446, "option", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](447, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](448, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](449, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](450, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](451, "Corrective Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](452, "input", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](453, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](454, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](455, "label", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](456, "Actioned by");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](457, "input", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](458, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](459, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](460, "label", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](461, "By when");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](462, "input", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](463, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](464, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](465, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](466, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](467, "Can the use PPE reduce the risk");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](468, "select", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](469, "option", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](470, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](471, "option", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](472, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](473, "option", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](474, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](475, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](476, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](477, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](478, "Corrective Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](479, "input", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](480, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](481, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](482, "label", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](483, "Actioned by");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](484, "input", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](485, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](486, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](487, "label", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](488, "By when");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](489, "input", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](490, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](491, "The form was compiled by:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](492, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](493, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](494, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](495, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](496, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](497, "input", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](498, HazardReportComponent_span_498_Template, 2, 0, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](499, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](500, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](501, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](502, "Position");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](503, "input", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](504, HazardReportComponent_span_504_Template, 2, 0, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](505, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](506, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](507, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](508, "Department");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](509, "input", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](510, HazardReportComponent_span_510_Template, 2, 0, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](511, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](512, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](513, "File Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](514, "input", 123, 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function HazardReportComponent_Template_input_change_514_listener($event) { return ctx.browser($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](516, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](517, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](518, "label", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](519, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](520, "input", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](521, HazardReportComponent_span_521_Template, 2, 0, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](522, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](523, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](524, "Signature");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](525, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](526, "signature-pad", 128, 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onBeginEvent", function HazardReportComponent_Template_signature_pad_onBeginEvent_526_listener() { return ctx.drawStart(); })("onEndEvent", function HazardReportComponent_Template_signature_pad_onEndEvent_526_listener() { return ctx.drawComplete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](528, HazardReportComponent_span_528_Template, 2, 0, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](529, "button", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HazardReportComponent_Template_button_click_529_listener() { return ctx.clear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](530, " Clear ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](531, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](532, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](533, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](534, "button", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HazardReportComponent_Template_button_click_534_listener() { return ctx.onFormSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](535, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](98);
        let tmp_2_0 = null;
        let tmp_3_0 = null;
        let tmp_4_0 = null;
        let tmp_5_0 = null;
        let tmp_6_0 = null;
        let tmp_7_0 = null;
        let tmp_8_0 = null;
        let tmp_9_0 = null;
        let tmp_10_0 = null;
        let tmp_11_0 = null;
        let tmp_12_0 = null;
        let tmp_13_0 = null;
        let tmp_14_0 = null;
        let tmp_19_0 = null;
        let tmp_20_0 = null;
        let tmp_21_0 = null;
        let tmp_22_0 = null;
        let tmp_23_0 = null;
        let tmp_24_0 = null;
        let tmp_25_0 = null;
        let tmp_26_0 = null;
        let tmp_27_0 = null;
        let tmp_28_0 = null;
        let tmp_50_0 = null;
        let tmp_51_0 = null;
        let tmp_52_0 = null;
        let tmp_53_0 = null;
        let tmp_54_0 = null;
        let tmp_55_0 = null;
        let tmp_56_0 = null;
        let tmp_57_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](97, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.hazardReport);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_2_0 = ctx.hazardReport.get("fullName")) == null ? null : tmp_2_0.hasError("required")) && (ctx.hazardReport.get("fullName").dirty || ctx.hazardReport.get("fullName").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.hazardReport.get("fullName")) == null ? null : tmp_3_0.hasError("required")) && (ctx.hazardReport.get("fullName").dirty || ctx.hazardReport.get("fullName").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_4_0 = ctx.hazardReport.get("email")) == null ? null : tmp_4_0.hasError("required")) && (ctx.hazardReport.get("email").dirty || ctx.hazardReport.get("email").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx.hazardReport.get("email")) == null ? null : tmp_5_0.hasError("required")) && (ctx.hazardReport.get("email").dirty || ctx.hazardReport.get("email").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_6_0 = ctx.hazardReport.get("phone")) == null ? null : tmp_6_0.hasError("required")) && (ctx.hazardReport.get("phone").dirty || ctx.hazardReport.get("phone").touched) || ((tmp_6_0 = ctx.hazardReport.get("phone")) == null ? null : tmp_6_0.hasError("pattern")));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_7_0 = ctx.hazardReport.get("phone")) == null ? null : tmp_7_0.hasError("required")) && (ctx.hazardReport.get("phone").dirty || ctx.hazardReport.get("phone").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_8_0 = ctx.hazardReport.get("phone")) == null ? null : tmp_8_0.hasError("pattern"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_9_0 = ctx.hazardReport.get("department")) == null ? null : tmp_9_0.hasError("required")) && (ctx.hazardReport.get("department").dirty || ctx.hazardReport.get("department").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_10_0 = ctx.hazardReport.get("department")) == null ? null : tmp_10_0.hasError("required")) && (ctx.hazardReport.get("department").dirty || ctx.hazardReport.get("department").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_11_0 = ctx.hazardReport.get("position")) == null ? null : tmp_11_0.hasError("required")) && (ctx.hazardReport.get("position").dirty || ctx.hazardReport.get("position").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_12_0 = ctx.hazardReport.get("position")) == null ? null : tmp_12_0.hasError("required")) && (ctx.hazardReport.get("position").dirty || ctx.hazardReport.get("position").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_13_0 = ctx.hazardReport.get("projectName")) == null ? null : tmp_13_0.hasError("required")) && (ctx.hazardReport.get("projectName").dirty || ctx.hazardReport.get("projectName").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_14_0 = ctx.hazardReport.get("projectName")) == null ? null : tmp_14_0.hasError("required")) && (ctx.hazardReport.get("projectName").dirty || ctx.hazardReport.get("projectName").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.whsData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.whsData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matAutocomplete", _r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](100, 95, ctx.filteredOptions));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_19_0 = ctx.hazardReport.get("describeHazard")) == null ? null : tmp_19_0.hasError("required")) && (ctx.hazardReport.get("describeHazard").dirty || ctx.hazardReport.get("describeHazard").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_20_0 = ctx.hazardReport.get("describeHazard")) == null ? null : tmp_20_0.hasError("required")) && (ctx.hazardReport.get("describeHazard").dirty || ctx.hazardReport.get("describeHazard").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_21_0 = ctx.hazardReport.get("dateHazardReport")) == null ? null : tmp_21_0.hasError("required")) && (ctx.hazardReport.get("dateHazardReport").dirty || ctx.hazardReport.get("dateHazardReport").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_22_0 = ctx.hazardReport.get("dateHazardReport")) == null ? null : tmp_22_0.hasError("required")) && (ctx.hazardReport.get("dateHazardReport").dirty || ctx.hazardReport.get("dateHazardReport").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_23_0 = ctx.hazardReport.get("locationHazard")) == null ? null : tmp_23_0.hasError("required")) && (ctx.hazardReport.get("locationHazard").dirty || ctx.hazardReport.get("locationHazard").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_24_0 = ctx.hazardReport.get("locationHazard")) == null ? null : tmp_24_0.hasError("required")) && (ctx.hazardReport.get("locationHazard").dirty || ctx.hazardReport.get("locationHazard").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_25_0 = ctx.hazardReport.get("dateHazardIdentify")) == null ? null : tmp_25_0.hasError("required")) && (ctx.hazardReport.get("dateHazardIdentify").dirty || ctx.hazardReport.get("dateHazardIdentify").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_26_0 = ctx.hazardReport.get("dateHazardIdentify")) == null ? null : tmp_26_0.hasError("required")) && (ctx.hazardReport.get("dateHazardIdentify").dirty || ctx.hazardReport.get("dateHazardIdentify").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_27_0 = ctx.hazardReport.get("projectName")) == null ? null : tmp_27_0.hasError("required")) && (ctx.hazardReport.get("projectName").dirty || ctx.hazardReport.get("projectName").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_28_0 = ctx.hazardReport.get("projectName")) == null ? null : tmp_28_0.hasError("required")) && (ctx.hazardReport.get("projectName").dirty || ctx.hazardReport.get("projectName").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](152);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.Consequences);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.Likelihood);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.RiskRating);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disableDiv", ctx.hazardReport.get("eliminateHazard").value == "no");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disableDiv", ctx.hazardReport.get("eliminateHazard").value == "no");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disableDiv", ctx.hazardReport.get("eliminateHazard").value == "no");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disableDiv", ctx.hazardReport.get("process").value == "no");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disableDiv", ctx.hazardReport.get("process").value == "no");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disableDiv", ctx.hazardReport.get("process").value == "no");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disableDiv", ctx.hazardReport.get("isolatedHazard").value == "no");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disableDiv", ctx.hazardReport.get("isolatedHazard").value == "no");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disableDiv", ctx.hazardReport.get("isolatedHazard").value == "no");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disableDiv", ctx.hazardReport.get("complete").value == "no");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disableDiv", ctx.hazardReport.get("complete").value == "no");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disableDiv", ctx.hazardReport.get("complete").value == "no");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disableDiv", ctx.hazardReport.get("procedures").value == "no");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disableDiv", ctx.hazardReport.get("procedures").value == "no");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disableDiv", ctx.hazardReport.get("procedures").value == "no");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disableDiv", ctx.hazardReport.get("reduceRisk").value == "no");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disableDiv", ctx.hazardReport.get("reduceRisk").value == "no");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disableDiv", ctx.hazardReport.get("reduceRisk").value == "no");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_50_0 = ctx.hazardReport.get("name")) == null ? null : tmp_50_0.hasError("required")) && (ctx.hazardReport.get("name").dirty || ctx.hazardReport.get("name").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_51_0 = ctx.hazardReport.get("name")) == null ? null : tmp_51_0.hasError("required")) && (ctx.hazardReport.get("name").dirty || ctx.hazardReport.get("name").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_52_0 = ctx.hazardReport.get("compilePosition")) == null ? null : tmp_52_0.hasError("required")) && (ctx.hazardReport.get("compilePosition").dirty || ctx.hazardReport.get("compilePosition").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_53_0 = ctx.hazardReport.get("compilePosition")) == null ? null : tmp_53_0.hasError("required")) && (ctx.hazardReport.get("compilePosition").dirty || ctx.hazardReport.get("compilePosition").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_54_0 = ctx.hazardReport.get("compileDepartment")) == null ? null : tmp_54_0.hasError("required")) && (ctx.hazardReport.get("compileDepartment").dirty || ctx.hazardReport.get("compileDepartment").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_55_0 = ctx.hazardReport.get("compileDepartment")) == null ? null : tmp_55_0.hasError("required")) && (ctx.hazardReport.get("compileDepartment").dirty || ctx.hazardReport.get("compileDepartment").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_56_0 = ctx.hazardReport.get("date")) == null ? null : tmp_56_0.hasError("required")) && (ctx.hazardReport.get("date").dirty || ctx.hazardReport.get("date").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_57_0 = ctx.hazardReport.get("date")) == null ? null : tmp_57_0.hasError("required")) && (ctx.hazardReport.get("date").dirty || ctx.hazardReport.get("date").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.singRequired);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.signaturePadOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.singRequired);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteTrigger"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocomplete"], angular2_signaturepad__WEBPACK_IMPORTED_MODULE_13__["SignaturePad"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]], styles: [".report_1[_ngcontent-%COMP%] {\n  background-color: #f1f7f7;\n  border-left: 4px solid blue;\n}\n\ndiv.like_1[_ngcontent-%COMP%] {\n  transform: rotate(-90deg);\n  margin-top: 92px;\n  margin-left: -37px;\n  margin-right: -35px;\n}\n\n.M_1[_ngcontent-%COMP%] {\n  background-color: yellow;\n}\n\n.H_1[_ngcontent-%COMP%] {\n  background-color: orangered;\n}\n\n.L_1[_ngcontent-%COMP%] {\n  background-color: #5fdf5f;\n}\n\ndiv.space_1[_ngcontent-%COMP%] {\n  margin: 0px 37px 0px 37px;\n}\n\ndiv.like_2[_ngcontent-%COMP%] {\n  margin: 22px 0 0 0;\n}\n\nlabel[_ngcontent-%COMP%]:not(.form-check-label):not(.custom-file-label) {\n  font-weight: 500;\n}\n\nlabel[_ngcontent-%COMP%] {\n  margin-bottom: 4%;\n  margin-top: 2%;\n}\n\n  .mat-checkbox .mat-checkbox-inner-container {\n  width: 30px;\n  height: 30px;\n}\n\n.label_1[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n}\n\n.form-check-input[_ngcontent-%COMP%]:hover {\n  border-color: rgba(46, 105, 255, 0.5);\n}\n\n.form-check-input[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 16px;\n  font-weight: 500;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n}\n\n.form-control[_ngcontent-%COMP%]:hover {\n  border-color: rgba(46, 105, 255, 0.5);\n  box-shadow: 0 0 0 2px rgba(46, 105, 255, 0.25);\n}\n\n.text_1[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.text_2[_ngcontent-%COMP%] {\n  font-size: 15px;\n  margin-top: -13px;\n  margin-bottom: 25px;\n}\n\n.sign[_ngcontent-%COMP%] {\n  border: 1px solid lightgray;\n  width: 500px;\n}\n\n.sign[_ngcontent-%COMP%]:hover {\n  border-color: rgba(46, 105, 255, 0.5);\n  box-shadow: 0 0 0 2px rgba(46, 105, 255, 0.25);\n}\n\n.text_3[_ngcontent-%COMP%] {\n  margin-bottom: -15px;\n}\n\ntr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n}\n\ntr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n  word-break: break-word;\n  text-align: center;\n  font-family: Inter, sans-serif;\n}\n\ninput[type=file][_ngcontent-%COMP%] {\n  height: 36%;\n  padding: 0%;\n}\n\n.pt-3[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 32px;\n  font-weight: 700;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n}\n\nselect[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\n.form-dropdown[_ngcontent-%COMP%] {\n  padding: 0 1.875em 0 0.625em;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z'/%3E%3C/svg%3E\");\n  background-position: right 10px bottom 50%;\n  background-size: 0.925em;\n  background-repeat: no-repeat;\n}\n\n.mat-radio-button[_ngcontent-%COMP%]    ~ .mat-radio-button[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaGF6YXJkLXJlcG9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsMkJBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0E7RUFDRSx3QkFBQTtBQUVGOztBQUFBO0VBQ0UsMkJBQUE7QUFHRjs7QUFEQTtFQUNFLHlCQUFBO0FBSUY7O0FBRkE7RUFDRSx5QkFBQTtBQUtGOztBQUhBO0VBQ0Usa0JBQUE7QUFNRjs7QUFKQTtFQUNFLGdCQUFBO0FBT0Y7O0FBSkE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUFPRjs7QUFMQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBUUY7O0FBTkE7RUFDRSxtQkFBQTtBQVNGOztBQUpBO0VBQ0UscUNBQUE7QUFPRjs7QUFKQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBT0Y7O0FBTEE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFRRjs7QUFOQTtFQUNFLHFDQUFBO0VBQ0EsOENBQUE7QUFTRjs7QUFQQTtFQUNFLGVBQUE7QUFVRjs7QUFSQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBV0Y7O0FBVEE7RUFDRSwyQkFBQTtFQUNBLFlBQUE7QUFZRjs7QUFWQTtFQUNFLHFDQUFBO0VBQ0EsOENBQUE7QUFhRjs7QUFYQTtFQUNFLG9CQUFBO0FBY0Y7O0FBWkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBZUY7O0FBYkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBZ0JGOztBQWJBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0FBZ0JGOztBQWRBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7QUFpQkY7O0FBZkE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFrQkY7O0FBaEJBO0VBQ0Usd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBbUJGOztBQWhCQTtFQUNFLDRCQUFBO0VBQ0Esb1FBQUE7RUFDQSwwQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7QUFtQkY7O0FBakJBO0VBQ0UsaUJBQUE7QUFvQkYiLCJmaWxlIjoiaGF6YXJkLXJlcG9ydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXBvcnRfMSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjdmNztcclxuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIGJsdWU7XHJcbn1cclxuXHJcbmRpdi5saWtlXzEge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbiAgbWFyZ2luLXRvcDogOTJweDtcclxuICBtYXJnaW4tbGVmdDogLTM3cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMzVweDtcclxufVxyXG4uTV8xIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbn1cclxuLkhfMSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlcmVkO1xyXG59XHJcbi5MXzEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5NSwgMjIzLCA5NSk7XHJcbn1cclxuZGl2LnNwYWNlXzEge1xyXG4gIG1hcmdpbjogMHB4IDM3cHggMHB4IDM3cHg7XHJcbn1cclxuZGl2Lmxpa2VfMiB7XHJcbiAgbWFyZ2luOiAyMnB4IDAgMCAwO1xyXG59XHJcbmxhYmVsOm5vdCguZm9ybS1jaGVjay1sYWJlbCk6bm90KC5jdXN0b20tZmlsZS1sYWJlbCkge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBtYXJnaW4tYm90dG9tOiA0JTtcclxuICBtYXJnaW4tdG9wOiAyJTtcclxufVxyXG46Om5nLWRlZXAgLm1hdC1jaGVja2JveCAubWF0LWNoZWNrYm94LWlubmVyLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcbi5sYWJlbF8xIHtcclxuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG59XHJcbi8vIC5zZWxlY3Rvcjpob3ZlciB7XHJcbi8vIFx0YmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuLy8gfVxyXG4uZm9ybS1jaGVjay1pbnB1dDpob3ZlciB7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDQ2LCAxMDUsIDI1NSwgMC41KTtcclxuIC8vIGJveC1zaGFkb3c6IDAgMCAwIDJweCByZ2IoNDYgMTA1IDI1NSAvIDI1JSk7XHJcbn1cclxuLmZvcm0tY2hlY2staW5wdXQge1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxufVxyXG5sYWJlbCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgZm9udC1mYW1pbHk6IEludGVyLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5mb3JtLWNvbnRyb2w6aG92ZXIge1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSg0NiwgMTA1LCAyNTUsIDAuNSk7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHJnYig0NiAxMDUgMjU1IC8gMjUlKTtcclxufVxyXG4udGV4dF8xIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLnRleHRfMiB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIG1hcmdpbi10b3A6IC0xM3B4O1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuLnNpZ24ge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICB3aWR0aDogNTAwcHg7XHJcbn1cclxuLnNpZ246aG92ZXIge1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSg0NiwgMTA1LCAyNTUsIDAuNSk7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHJnYig0NiAxMDUgMjU1IC8gMjUlKTtcclxufVxyXG4udGV4dF8zIHtcclxuICBtYXJnaW4tYm90dG9tOiAtMTVweDtcclxufVxyXG50ciB0ZCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICBmb250LWZhbWlseTogSW50ZXIsIHNhbnMtc2VyaWY7XHJcbn1cclxudHIgdGgge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgZm9udC1mYW1pbHk6IEludGVyLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBJbnRlciwgc2Fucy1zZXJpZjtcclxufVxyXG5pbnB1dFt0eXBlPSdmaWxlJ10ge1xyXG4gIGhlaWdodDogMzYlO1xyXG4gIHBhZGRpbmc6IDAlO1xyXG59XHJcbi5wdC0zIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICBmb250LWZhbWlseTogSW50ZXIsIHNhbnMtc2VyaWY7XHJcbn1cclxuc2VsZWN0IHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gIGFwcGVhcmFuY2U6IG5vbmU7XHJcbn1cclxuXHJcbi5mb3JtLWRyb3Bkb3duIHtcclxuICBwYWRkaW5nOiAwIDEuODc1ZW0gMCAwLjYyNWVtO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCclM0UlM0NwYXRoIGZpbGw9J25vbmUnIGQ9J00wIDBoMjR2MjRIMHonLyUzRSUzQ3BhdGggZD0nTTEyIDEzLjE3Mmw0Ljk1LTQuOTUgMS40MTQgMS40MTRMMTIgMTYgNS42MzYgOS42MzYgNy4wNSA4LjIyMnonLyUzRSUzQy9zdmclM0VcIik7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgMTBweCBib3R0b20gNTAlO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMC45MjVlbTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcbi5tYXQtcmFkaW8tYnV0dG9uIH4gLm1hdC1yYWRpby1idXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HazardReportComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-hazard-report',
                templateUrl: './hazard-report.component.html',
                styleUrls: ['./hazard-report.component.scss'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: src_app_utils_services_dynamic_forms_service__WEBPACK_IMPORTED_MODULE_5__["DynamicFormsService"] }, { type: src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_6__["SetTitleService"] }, { type: src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_7__["LogicalFormInfoService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: src_app_utils_services_upload_file_service_service__WEBPACK_IMPORTED_MODULE_9__["UploadFileServiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }]; }, { signaturePad1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['Signature1']
        }] }); })();


/***/ }),

/***/ "KMw5":
/*!*********************************************************************************!*\
  !*** ./src/app/views/forms/risk-assessment-swms/add-item/add-item.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AddItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemComponent", function() { return AddItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils/services/logical-form-info.service */ "wbBK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");












function AddItemComponent_h2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Add Identify Hazards ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddItemComponent_h2_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Update Identify Hazards ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddItemComponent_h2_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Add Control Action Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddItemComponent_h2_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Update Control Action Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddItemComponent_h2_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Add Chemical");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddItemComponent_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddItemComponent_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r5.addItem.valid);
} }
function AddItemComponent_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddItemComponent_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r6.addItem.valid);
} }
class AddItemComponent {
    constructor(fb, logicalFormInfo, dialogRef, data) {
        this.fb = fb;
        this.logicalFormInfo = logicalFormInfo;
        this.dialogRef = dialogRef;
        this.data = data;
        this.dataRec = data;
    }
    ngOnInit() {
        console.log(this.dataRec);
        this.addItem = this.fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        if (this.dataRec.type === 'editIdentifyHazards' || this.dataRec.type === 'editCtrlActreq') {
            this.addItem.get('title').setValue(this.dataRec.title);
        }
    }
    closeDialog() {
        this.dialogRef.close('false');
    }
    onSubmit() {
        this.dialogRef.close(this.addItem.get('title').value);
        if (this.dataRec.type === 'editIdentifyHazards' || this.dataRec.type === 'editCtrlActreq') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: 'Item  updated successfully',
                showConfirmButton: false,
                timer: 1200,
            });
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: 'Item  Added successfully',
                showConfirmButton: false,
                timer: 1200,
            });
        }
    }
}
AddItemComponent.ɵfac = function AddItemComponent_Factory(t) { return new (t || AddItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__["LogicalFormInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])); };
AddItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddItemComponent, selectors: [["app-add-item"]], decls: 16, vars: 8, consts: [[3, "formGroup"], [4, "ngIf"], ["appearance", "legacy", 1, "example-full-width", 2, "width", "498px"], ["matInput", "", "formControlName", "title", "rows", ""], [1, "row"], [1, "col-sm-2", "offset-8"], ["mat-raised-button", "", 3, "click"], [1, "col-sm-2"], ["mat-raised-button", "", 3, "disabled", "click", 4, "ngIf"], ["mat-raised-button", "", 3, "disabled", "click"]], template: function AddItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddItemComponent_h2_1_Template, 2, 0, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddItemComponent_h2_2_Template, 2, 0, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AddItemComponent_h2_3_Template, 2, 0, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AddItemComponent_h2_4_Template, 2, 0, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AddItemComponent_h2_5_Template, 2, 0, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "textarea", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddItemComponent_Template_button_click_11_listener() { return ctx.closeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AddItemComponent_button_14_Template, 2, 1, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AddItemComponent_button_15_Template, 2, 1, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataRec.type === "identifyHazards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataRec.type === "editIdentifyHazards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataRec.type === "ctrlActreq");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataRec.type === "editCtrlActreq");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataRec.type === "chemical");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataRec.type === "identifyHazards" || ctx.dataRec.type === "ctrlActreq" || ctx.dataRec.type === "chemical");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataRec.type === "editIdentifyHazards" || ctx.dataRec.type === "editCtrlActreq");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtaXRlbS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-item',
                templateUrl: './add-item.component.html',
                styleUrls: ['./add-item.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__["LogicalFormInfoService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "TQFz":
/*!**********************************************************************************************!*\
  !*** ./src/app/views/forms/hazard-form-table-details/hazard-form-table-details.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: HazardFormTableDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HazardFormTableDetailsComponent", function() { return HazardFormTableDetailsComponent; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "5QHs");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "LUZP");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "OaSA");
/* harmony import */ var src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utils/services/logical-form-info.service */ "wbBK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ "ZFy/");












function HazardFormTableDetailsComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HazardFormTableDetailsComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r15 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r15 + 1);
} }
function HazardFormTableDetailsComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HazardFormTableDetailsComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r16.fullName);
} }
function HazardFormTableDetailsComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HazardFormTableDetailsComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r18.phone);
} }
function HazardFormTableDetailsComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HazardFormTableDetailsComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r19.email, " ");
} }
function HazardFormTableDetailsComponent_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Position");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HazardFormTableDetailsComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r20.position, " ");
} }
function HazardFormTableDetailsComponent_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HazardFormTableDetailsComponent_td_24_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HazardFormTableDetailsComponent_td_24_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const element_r21 = ctx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r22.edit(element_r21._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HazardFormTableDetailsComponent_td_24_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const element_r21 = ctx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r24.delete(element_r21._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HazardFormTableDetailsComponent_tr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 23);
} }
function HazardFormTableDetailsComponent_tr_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 24);
} }
const _c0 = function () { return ["/admin/forms"]; };
const _c1 = function () { return [20]; };
class HazardFormTableDetailsComponent {
    constructor(logicalFormInfo, router) {
        this.logicalFormInfo = logicalFormInfo;
        this.router = router;
        this.displayedColumns = ['position', 'Name', "Phone", "Email", "Site", 'Action'];
    }
    ngOnInit() {
        this.getAllHazardFormData();
    }
    delete(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
            title: 'Are you sure?',
            text: `Do you want to delete `,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#00B96F',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Delete!',
        }).then((result) => {
            if (result.value) {
                this.logicalFormInfo.deleteHazardFormData(id).subscribe((res) => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
                        title: 'Deleted successfully',
                        showConfirmButton: false,
                        timer: 1200,
                    });
                    console.log('deleted res', res);
                    this.getAllHazardFormData();
                });
            }
        });
    }
    getAllHazardFormData() {
        this.logicalFormInfo.getAllHazardFormData().subscribe((res) => {
            console.log("res", res.data);
            this.showDatas = res.data;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.showDatas);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
            console.log("get res", this.showDatas);
        });
    }
    edit(id) {
        this.router.navigate(["/admin/forms/hazardRep/" + id]);
    }
}
HazardFormTableDetailsComponent.ɵfac = function HazardFormTableDetailsComponent_Factory(t) { return new (t || HazardFormTableDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_5__["LogicalFormInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
HazardFormTableDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HazardFormTableDetailsComponent, selectors: [["app-hazard-form-table-details"]], viewQuery: function HazardFormTableDetailsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 28, vars: 7, consts: [[1, "btn", "btn-outline-primary", 3, "routerLink"], ["aria-hidden", "true", 1, "fa", "fa-arrow-left"], [1, "col", "ml-2", "pt-3"], [1, ""], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Name"], ["matColumnDef", "Phone"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "Email"], ["matColumnDef", "Site"], ["matColumnDef", "Action"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", "aria-label", "Select page of periodic elements", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], [2, "display", "flex", "justify-content", "space-around"], ["matTooltip", "Edit", 1, "material-icons", 2, "color", "#c1c1c1", "cursor", "pointer !important", 3, "click"], ["matTooltip", "Delete", 1, "material-icons", 2, "color", "#c1c1c1", "cursor", "pointer !important", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function HazardFormTableDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Hazard Form List");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](7, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, HazardFormTableDetailsComponent_th_8_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, HazardFormTableDetailsComponent_td_9_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](10, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, HazardFormTableDetailsComponent_th_11_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, HazardFormTableDetailsComponent_td_12_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](13, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, HazardFormTableDetailsComponent_th_14_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, HazardFormTableDetailsComponent_td_15_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](16, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, HazardFormTableDetailsComponent_th_17_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, HazardFormTableDetailsComponent_td_18_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](19, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, HazardFormTableDetailsComponent_th_20_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, HazardFormTableDetailsComponent_td_21_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](22, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, HazardFormTableDetailsComponent_th_23_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, HazardFormTableDetailsComponent_td_24_Template, 6, 0, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, HazardFormTableDetailsComponent_tr_25_Template, 1, 0, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, HazardFormTableDetailsComponent_tr_26_Template, 1, 0, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "mat-paginator", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltip"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"]], styles: [".viewBtn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #007bff;\n  font-size: 21px !important;\n}\n\n  .mat-sort-header-container {\n  margin-left: 47% !important;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.select[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n\n.pt-3[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 32px;\n  font-weight: 700;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaGF6YXJkLWZvcm0tdGFibGUtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSwwQkFBQTtBQUNKOztBQUNBO0VBQ0UsMkJBQUE7QUFFRjs7QUFBQTtFQUNJLFdBQUE7QUFHSjs7QUFEQTtFQUNJLHNCQUFBO0FBSUo7O0FBRkU7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFLSiIsImZpbGUiOiJoYXphcmQtZm9ybS10YWJsZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZpZXdCdG4gaSB7XHJcbiAgICBjb2xvcjogIzAwN2JmZjtcclxuICAgIGZvbnQtc2l6ZTogMjFweCAhaW1wb3J0YW50O1xyXG59XHJcbjo6bmctZGVlcCAubWF0LXNvcnQtaGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLWxlZnQ6IDQ3JSAhaW1wb3J0YW50O1xyXG59XHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuLnNlbGVjdHtcclxuICAgIHdpZHRoOjEwMCUhaW1wb3J0YW50O1xyXG59XHJcbiAgLnB0LTMge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgICBmb250LWZhbWlseTogSW50ZXIsIHNhbnMtc2VyaWY7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HazardFormTableDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-hazard-form-table-details',
                templateUrl: './hazard-form-table-details.component.html',
                styleUrls: ['./hazard-form-table-details.component.scss']
            }]
    }], function () { return [{ type: src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_5__["LogicalFormInfoService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"]]
        }] }); })();


/***/ }),

/***/ "h5Ns":
/*!********************************************************************!*\
  !*** ./src/app/views/forms/toolbox-talk/toolbox-talk.component.ts ***!
  \********************************************************************/
/*! exports provided: ToolboxTalkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolboxTalkComponent", function() { return ToolboxTalkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_utils_services_dynamic_forms_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utils/services/dynamic-forms.service */ "+3ge");
/* harmony import */ var src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils/services/set-title.service */ "yZxC");
/* harmony import */ var src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utils/services/logical-form-info.service */ "wbBK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular2-signaturepad */ "r1zJ");












const _c0 = ["Signature1"];
const _c1 = ["Signature2"];
function ToolboxTalkComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Site Name is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ToolboxTalkComponent_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Customer Name is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ToolboxTalkComponent_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Site Address is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ToolboxTalkComponent_span_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Customer Contact is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ToolboxTalkComponent_span_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Phone Number is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ToolboxTalkComponent_span_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Email is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ToolboxTalkComponent_option_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobNo_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", jobNo_r16._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](jobNo_r16.jobNumber);
} }
function ToolboxTalkComponent_span_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Job Number is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ToolboxTalkComponent_span_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Date is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ToolboxTalkComponent_option_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", p_r17 == null ? null : p_r17._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r17.title);
} }
function ToolboxTalkComponent_span_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This Field is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ToolboxTalkComponent_span_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This Field is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ToolboxTalkComponent_ng_container_79_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This Field is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ToolboxTalkComponent_ng_container_79_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This Field is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ToolboxTalkComponent_ng_container_79_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This Field is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ToolboxTalkComponent_ng_container_79_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Issue");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ToolboxTalkComponent_ng_container_79_span_7_Template, 2, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Topic of discussion ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "textarea", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ToolboxTalkComponent_ng_container_79_span_12_Template, 2, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Topic Resolution ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "select", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, ToolboxTalkComponent_ng_container_79_span_23_Template, 2, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToolboxTalkComponent_ng_container_79_Template_span_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.addIssues(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "add_circle_outline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToolboxTalkComponent_ng_container_79_Template_span_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const i_r19 = ctx.index; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r25.removeIssues(i_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " remove_circle_outline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r19 = ctx.index;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    let tmp_1_0 = null;
    let tmp_2_0 = null;
    let tmp_3_0 = null;
    let tmp_4_0 = null;
    let tmp_5_0 = null;
    let tmp_6_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_1_0 = ctx_r13.issues().at(i_r19).get("index")) == null ? null : tmp_1_0.hasError("required")) && (ctx_r13.issues().at(i_r19).get("index").dirty || ctx_r13.issues().at(i_r19).get("index").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx_r13.issues().at(i_r19).get("index")) == null ? null : tmp_2_0.hasError("required")) && (ctx_r13.issues().at(i_r19).get("index").dirty || ctx_r13.issues().at(i_r19).get("index").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_3_0 = ctx_r13.issues().at(i_r19).get("topicDisc")) == null ? null : tmp_3_0.hasError("required")) && (ctx_r13.issues().at(i_r19).get("topicDisc").dirty || ctx_r13.issues().at(i_r19).get("topicDisc").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx_r13.issues().at(i_r19).get("topicDisc")) == null ? null : tmp_4_0.hasError("required")) && (ctx_r13.issues().at(i_r19).get("topicDisc").dirty || ctx_r13.issues().at(i_r19).get("topicDisc").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_5_0 = ctx_r13.issues().at(i_r19).get("topicRes")) == null ? null : tmp_5_0.hasError("required")) && (ctx_r13.issues().at(i_r19).get("topicRes").dirty || ctx_r13.issues().at(i_r19).get("topicRes").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_6_0 = ctx_r13.issues().at(i_r19).get("topicRes")) == null ? null : tmp_6_0.hasError("required")) && (ctx_r13.issues().at(i_r19).get("topicRes").dirty || ctx_r13.issues().at(i_r19).get("topicRes").touched));
} }
function ToolboxTalkComponent_ng_container_83_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This Field is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ToolboxTalkComponent_ng_container_83_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const j_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", j_r32 == null ? null : j_r32._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](j_r32 == null ? null : j_r32.title);
} }
function ToolboxTalkComponent_ng_container_83_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This Field is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ToolboxTalkComponent_ng_container_83_span_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This Field is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ToolboxTalkComponent_ng_container_83_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "select", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ToolboxTalkComponent_ng_container_83_span_12_Template, 2, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Person Responsible ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "select", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ToolboxTalkComponent_ng_container_83_option_19_Template, 2, 2, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ToolboxTalkComponent_ng_container_83_span_20_Template, 2, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Complete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "select", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, ToolboxTalkComponent_ng_container_83_span_31_Template, 2, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToolboxTalkComponent_ng_container_83_Template_span_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r33.addCorrectAct(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "add_circle_outline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToolboxTalkComponent_ng_container_83_Template_span_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34); const i_r27 = ctx.index; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r35.removeCorrectAct(i_r27); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " remove_circle_outline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r27 = ctx.index;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    let tmp_1_0 = null;
    let tmp_2_0 = null;
    let tmp_3_0 = null;
    let tmp_5_0 = null;
    let tmp_6_0 = null;
    let tmp_7_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_1_0 = ctx_r14.correctAct().at(i_r27).get("action")) == null ? null : tmp_1_0.hasError("required")) && (ctx_r14.correctAct().at(i_r27).get("action").dirty || ctx_r14.correctAct().at(i_r27).get("action").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx_r14.correctAct().at(i_r27).get("action")) == null ? null : tmp_2_0.hasError("required")) && (ctx_r14.correctAct().at(i_r27).get("action").dirty || ctx_r14.correctAct().at(i_r27).get("action").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_3_0 = ctx_r14.correctAct().at(i_r27).get("personRes")) == null ? null : tmp_3_0.hasError("required")) && (ctx_r14.correctAct().at(i_r27).get("personRes").dirty || ctx_r14.correctAct().at(i_r27).get("personRes").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r14.staff);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx_r14.correctAct().at(i_r27).get("personRes")) == null ? null : tmp_5_0.hasError("required")) && (ctx_r14.correctAct().at(i_r27).get("personRes").dirty || ctx_r14.correctAct().at(i_r27).get("personRes").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_6_0 = ctx_r14.correctAct().at(i_r27).get("complete")) == null ? null : tmp_6_0.hasError("required")) && (ctx_r14.correctAct().at(i_r27).get("complete").dirty || ctx_r14.correctAct().at(i_r27).get("complete").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_7_0 = ctx_r14.correctAct().at(i_r27).get("complete")) == null ? null : tmp_7_0.hasError("required")) && (ctx_r14.correctAct().at(i_r27).get("complete").dirty || ctx_r14.correctAct().at(i_r27).get("complete").touched));
} }
function ToolboxTalkComponent_ng_container_87_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This Field is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ToolboxTalkComponent_ng_container_87_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This Field is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ToolboxTalkComponent_ng_container_87_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ToolboxTalkComponent_ng_container_87_span_6_Template, 2, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Signature");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "signature-pad", 47, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onBeginEvent", function ToolboxTalkComponent_ng_container_87_Template_signature_pad_onBeginEvent_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43); const i_r37 = ctx.index; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r42.drawStart2(i_r37); })("onEndEvent", function ToolboxTalkComponent_ng_container_87_Template_signature_pad_onEndEvent_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43); const i_r37 = ctx.index; const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r44.drawComplete2(i_r37, _r40); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ToolboxTalkComponent_ng_container_87_span_14_Template, 2, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToolboxTalkComponent_ng_container_87_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43); const i_r37 = ctx.index; const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); _r40.clear(); return ctx_r45.clear2(i_r37); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Clear ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToolboxTalkComponent_ng_container_87_Template_span_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r46.addAttendee(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "add_circle_outline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToolboxTalkComponent_ng_container_87_Template_span_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43); const i_r37 = ctx.index; const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r47.removeAttendee(i_r37); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " remove_circle_outline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r37 = ctx.index;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    let tmp_2_0 = null;
    let tmp_3_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Employee ", i_r37 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_2_0 = ctx_r15.attendee().controls[i_r37].get("employee")) == null ? null : tmp_2_0.hasError("required")) && (ctx_r15.attendee().controls[i_r37].get("employee").dirty || ctx_r15.attendee().controls[i_r37].get("employee").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx_r15.attendee().controls[i_r37].get("employee")) == null ? null : tmp_3_0.hasError("required")) && (ctx_r15.attendee().controls[i_r37].get("employee").dirty || ctx_r15.attendee().controls[i_r37].get("employee").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx_r15.sing2Required[i_r37]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r15.signaturePadOptions2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r15.sing2Required[i_r37]);
} }
const _c2 = function () { return ["/admin/forms"]; };
class ToolboxTalkComponent {
    constructor(fb, dynamicFormsService, setTitle, logicalFormInfo, activatedRoute, router) {
        this.fb = fb;
        this.dynamicFormsService = dynamicFormsService;
        this.setTitle = setTitle;
        this.logicalFormInfo = logicalFormInfo;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.allJobNumbers = [];
        this.sign = [];
        this.sing2Required = [];
        this.signaturePadOptions1 = {
            // passed through to szimek/signature_pad constructor
            minWidth: 1,
            canvasWidth: 550,
            canvasHeight: 100,
        };
        this.signaturePadOptions2 = {
            // passed through to szimek/signature_pad constructor
            minWidth: 1,
            canvasWidth: 450,
            canvasHeight: 100,
        };
        this.toolBox = this.fb.group({
            siteName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            customerName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            streetAddr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            custConct: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            custConctPh: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            custEmail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            jobNumberId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            meetingBy: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            signaturePad1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            issues: this.fb.array([]),
            corrAction: this.fb.array([]),
            attendees: this.fb.array([])
        });
    }
    ngOnInit() {
        this.id = this.activatedRoute.snapshot.params.id;
        this.getAllJobNumber();
        this.getAllStaff();
        this.dynamicFormsService.homebarTitle.next('ToolBox Talk Form');
        this.setTitle.setTitle('WHS-ToolBox Talk Form');
        if (this.id !== 'form') {
            console.log("id", this.id);
            this.getToolboxByid(this.id);
        }
        else {
            this.addIssues();
            this.addCorrectAct();
            this.addAttendee();
        }
    }
    getToolboxByid(id) {
        this.logicalFormInfo.getToolboxById(id).subscribe((res) => {
            console.log(res);
            //this.pushissues(res.data.issues);
            // this.pushCorrective(res.data.corrAction);
            // this.pushattendee(res.data.attendees);
            this.toolBox.patchValue({
                siteName: res.data.siteName,
                customerName: res.data.customerName,
                streetAddr: res.data.streetAddr,
                custConct: res.data.custConct,
                custConctPh: res.data.custConctPh,
                custEmail: res.data.custEmail,
                jobNumberId: res.data.jobNumberId,
                meetingBy: res.data.meetingBy,
                date: res.data.date
            });
            this.dataUrl = res.data.signaturePad1;
            let check = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { this.signaturePad1 != null; });
            check().then(() => {
                this.signaturePad1.fromDataURL(res.data.signaturePad1);
            });
            console.log("this.signaturePad1", this.signaturePad1);
            let check2 = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { this.signaturePad2 != null; });
            check2().then(() => {
                console.log(this.signaturePad2);
                setTimeout(() => {
                    let signaturePadArr = this.signaturePad2.toArray();
                    res.data.attendees.forEach((x, i) => {
                        signaturePadArr[i].fromDataURL(x.signature);
                    });
                }, 2000);
            });
            this.toolBox.patchValue({
                signaturePad1: res.data.signaturePad1
            });
            for (let i = 0; i < res.data.attendees.length; i++) {
                this.addAttendee();
                this.attendee().controls[i].get("employee").patchValue(res.data.attendees[i].employee);
                this.attendee().controls[i].get("signature").patchValue(res.data.attendees[i].signature);
            }
            for (let x = 0; x < res.data.corrAction.length; x++) {
                this.addCorrectAct();
                this.correctAct().controls[x].get("action").patchValue(res.data.corrAction[x].action);
                this.correctAct().controls[x].get("complete").patchValue(res.data.corrAction[x].complete);
                this.correctAct().controls[x].get("personRes").patchValue(res.data.corrAction[x].personRes);
            }
            for (let i = 0; i < res.data.issues.length; i++) {
                this.addIssues();
                this.issues().controls[i].get("index").patchValue(res.data.issues[i].index);
                this.issues().controls[i].get("topicDisc").patchValue(res.data.issues[i].topicDisc);
                this.issues().controls[i].get("topicRes").patchValue(res.data.issues[i].topicRes);
            }
        });
    }
    getAllJobNumber() {
        this.logicalFormInfo.getAllJobNumber().subscribe((res) => {
            this.allJobNumbers = res.data;
        });
    }
    jobNoSel() {
        this.allJobNumbers.forEach((item) => {
            if (this.toolBox.get('jobNumberId').value === item._id) {
                console.log('Id found', item);
                this.toolBox.patchValue({
                    siteName: item.siteName,
                    customerName: item.customerName,
                    streetAddr: item.streetAddress,
                    custConct: item.customerContact,
                    custConctPh: item.customerContactPhone,
                    custEmail: item.customerEmail,
                    jobNumber: this.toolBox.get('jobNumberId').value,
                });
            }
        });
        this.toolBox.get('jobNumberId').updateValueAndValidity();
    }
    addIssues() {
        this.issues().push(this.issuesForm());
    }
    // getissues(D): FormGroup {
    //   return this.fb.group({
    //     index: D.index,
    //     topicDisc: D.topicDisc,
    //     topicRes: D.topicRes,
    //   });
    // }
    // pushissues(D) {
    //   console.log("D",D);
    //   D.forEach((element) => {
    //    this.issues().push(this.getissues(element));
    //   });
    // }
    // getCorrective(D): FormGroup {
    //   return this.fb.group({
    //     action: D.action,
    //     personRes: D.personRes,
    //     complete: D.complete,
    //   });
    // }
    // pushCorrective(D) {
    //   console.log("D",D);
    //   D.forEach((element) => {
    //    this.correctAct().push(this.getCorrective(element));
    //   });
    // }
    // getattendee(D): FormGroup {
    //   return this.fb.group({
    //     employee: D.employee,
    //     signature:D.signature,
    //   });
    // }
    // pushattendee(D) {
    //   console.log("D",D);
    //   D.forEach((element) => {
    //    this.attendee().push(this.getattendee(element));
    //   });
    // }
    issues() {
        return this.toolBox.get('issues');
    }
    issuesForm() {
        return this.fb.group({
            index: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            topicDisc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            topicRes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    removeIssues(i) {
        const item = this.toolBox.controls['issues'];
        if (item.length > 1)
            item.removeAt(i);
    }
    addCorrectAct() {
        this.correctAct().push(this.correctActForm());
    }
    correctAct() {
        return this.toolBox.get('corrAction');
    }
    correctActForm() {
        return this.fb.group({
            action: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            personRes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            complete: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    removeCorrectAct(i) {
        const item = this.toolBox.controls['corrAction'];
        if (item.length > 1)
            item.removeAt(i);
    }
    addAttendee() {
        this.attendee().push(this.attendeeForm());
    }
    attendee() {
        return this.toolBox.get('attendees');
    }
    attendeeForm() {
        return this.fb.group({
            employee: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            signature: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    removeAttendee(i) {
        const item = this.toolBox.controls['attendees'];
        if (item.length > 1)
            item.removeAt(i);
    }
    ngAfterViewInit() {
        // this.signaturePad is now available
        console.log(this.signaturePad1, this.dataUrl);
        this.signaturePad1.set('minWidth', 1); // set szimek/signature_pad options at runtime
        this.signaturePad1.fromDataURL(this.dataUrl);
        // this.signaturePad2.set('minWidth', 1); // set szimek/signature_pad options at runtime
        // this.signaturePad1.clear(); // invoke functions from szimek/signature_pad API
        // this.signaturePad2.clear(); // invoke functions from szimek/signature_pad API
    }
    drawComplete1() {
        // will be notified of szimek/signature_pad's onEnd event
        console.log("signnn", this.signaturePad1);
        this.toolBox.controls['signaturePad1'].setValue(this.signaturePad1.toDataURL());
        console.log("signaturePad1 control", this.toolBox.controls['signaturePad1'].value);
    }
    clear1() {
        this.signaturePad1.clear();
        this.toolBox.controls['signaturePad1'].setValue("");
        this.singRequired = this.toolBox.controls['signaturePad1'].untouched;
    }
    drawStart1() {
        // will be notified of szimek/signature_pad's onBegin event
        // this.signaturePad2=null;
        console.log('begin drawing');
        this.singRequired = this.toolBox.controls['signaturePad1'].invalid;
    }
    drawComplete2(index, sign) {
        console.log("sign", sign);
        //this.sing2Required[index]=this.attendee().controls[index].get('signature').invalid
        this.attendee().controls[index].get('signature').setValue(sign.toDataURL());
        // will be notified of szimek/signature_pad's onEnd event
    }
    clear2(i) {
        this.attendee().controls[i].get('signature').setValue("");
        this.sing2Required[i] = this.attendee().controls[i].get('signature').untouched;
        // this.signaturePad2.clear();
    }
    drawStart2(index) {
        // will be notified of szimek/signature_pad's onBegin event
        console.log('begin drawing');
        this.sing2Required[index] = this.attendee().controls[index].get('signature').invalid;
        console.log(" this.sing2Required", this.sing2Required[index]);
    }
    onSave() {
        for (let index = 0; index < this.attendee().length; index++) {
            this.sing2Required[index] = this.attendee().controls[index].get('signature').invalid;
        }
        this.singRequired = this.toolBox.controls['signaturePad1'].invalid;
        console.log("form data", this.toolBox.value);
        if (this.id !== 'form') {
            const data = Object.assign({}, this.toolBox.value);
            this.logicalFormInfo.editToolBox(this.id, data).subscribe((res) => {
                console.log("res", res);
                this.router.navigate(["/admin/forms/tableData"]);
            });
        }
        else {
            const data = Object.assign({}, this.toolBox.value);
            this.logicalFormInfo.addtoolBox(data).subscribe((res) => {
                console.log("res", res);
                this.router.navigate(["/admin/forms/tableData"]);
            });
        }
        this.toolBox.reset();
    }
    getAllStaff() {
        this.logicalFormInfo.getAllStaff().subscribe((res) => {
            this.staff = res.data;
            console.log("res", this.staff);
        });
    }
}
ToolboxTalkComponent.ɵfac = function ToolboxTalkComponent_Factory(t) { return new (t || ToolboxTalkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_utils_services_dynamic_forms_service__WEBPACK_IMPORTED_MODULE_3__["DynamicFormsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_4__["SetTitleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_5__["LogicalFormInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
ToolboxTalkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ToolboxTalkComponent, selectors: [["app-toolbox-talk"]], viewQuery: function ToolboxTalkComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.signaturePad1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.signaturePad2 = _t);
    } }, decls: 90, vars: 40, consts: [[1, "btn", "btn-outline-primary", 3, "routerLink"], ["aria-hidden", "true", 1, "fa", "fa-arrow-left"], [3, "formGroup"], [1, "container", "px-4", "py-4", "card"], [1, "text-center", "pt-3"], [1, "title"], [1, "row"], [1, "my-3", "col"], ["for", "exampleFormControlInput1", 1, "form-Label"], ["type", "text", "id", "siteName", "formControlName", "siteName", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "formControlName", "customerName", 1, "form-control"], ["type", "text", "formControlName", "streetAddr", 1, "form-control"], ["type", "text", "formControlName", "custConct", 1, "form-control"], ["type", "text", "formControlName", "custConctPh", 1, "form-control"], ["type", "text", "formControlName", "custEmail", 1, "form-control"], ["aria-label", "Default select example", "formControlName", "jobNumberId", 1, "form-select", "form-control", "col", "form-dropdown", 3, "change"], ["selected", "", "hidden", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "date", "type", "date", 1, "form-control"], ["formControlName", "meetingBy", "aria-label", "Default select example", 1, "form-select", "form-control", "col", "form-dropdown"], [1, "sign", 2, "border", "1px solid rgb(149 162 173)"], [3, "options", "onBeginEvent", "onEndEvent"], ["Signature1", ""], [1, "btn", "btn-outline-primary", "mt-1", 3, "click"], ["formArrayName", "issues"], [3, "formGroupName", 4, "ngFor", "ngForOf"], ["formArrayName", "corrAction"], ["formArrayName", "attendees"], ["type", "submit", 1, "btn", "btn-outline-primary", "mt-1", 2, "width", "10rem", "align-self", "center", 3, "disabled", "click"], [1, "invalid-feedback"], [3, "value"], [3, "formGroupName"], [1, "my-3", "col-2"], ["type", "text", "formControlName", "index", 1, "form-control"], [1, "my-3", "col-6"], ["type", "text", "formControlName", "topicDisc", 1, "form-control"], ["aria-label", "Default select example", "formControlName", "topicRes", 1, "form-select", "form-control", "col", "form-dropdown"], ["value", "Yes"], ["value", "No"], [1, "my-3", "col-1", "my-auto"], [1, "material-icons", 2, "margin-top", "35%", 3, "click"], ["aria-label", "Default select example", "formControlName", "action", 1, "form-select", "form-control", "col", "form-dropdown"], ["aria-label", "Default select example", "formControlName", "personRes", 1, "form-select", "form-control", "col", "form-dropdown"], ["aria-label", "Default select example", "formControlName", "complete", 1, "form-select", "form-control", "col", "form-dropdown"], [1, "my-3", "col-5"], ["type", "text", "formControlName", "employee", 1, "form-control"], ["sing2Required", "", 3, "options", "onBeginEvent", "onEndEvent"], ["Signature2", "", "sign", ""], [1, "material-icons", 3, "click"]], template: function ToolboxTalkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Toolbox Talk Preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Site Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Site Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ToolboxTalkComponent_span_17_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Customer Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ToolboxTalkComponent_span_22_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Site Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, ToolboxTalkComponent_span_28_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " Customer Contact ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, ToolboxTalkComponent_span_33_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " Customer Contact Phone ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, ToolboxTalkComponent_span_39_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " Customer Contact Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, ToolboxTalkComponent_span_44_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Job Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ToolboxTalkComponent_Template_select_change_49_listener() { return ctx.jobNoSel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, ToolboxTalkComponent_option_52_Template, 2, 2, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, ToolboxTalkComponent_span_53_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](58, ToolboxTalkComponent_span_58_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, " Meeting Conducted By ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](64, ToolboxTalkComponent_option_64_Template, 2, 2, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](65, ToolboxTalkComponent_span_65_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Signature*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "signature-pad", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onBeginEvent", function ToolboxTalkComponent_Template_signature_pad_onBeginEvent_70_listener() { return ctx.drawStart1(); })("onEndEvent", function ToolboxTalkComponent_Template_signature_pad_onEndEvent_70_listener() { return ctx.drawComplete1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](72, ToolboxTalkComponent_span_72_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToolboxTalkComponent_Template_button_click_73_listener() { return ctx.clear1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, " Clear ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Issues/Topics to be covered:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](78, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](79, ToolboxTalkComponent_ng_container_79_Template, 30, 10, "ng-container", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Corrective Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](83, ToolboxTalkComponent_ng_container_83_Template, 38, 11, "ng-container", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Attendee (Print and Sign)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](87, ToolboxTalkComponent_ng_container_87_Template, 23, 9, "ng-container", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToolboxTalkComponent_Template_button_click_88_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_2_0 = null;
        let tmp_3_0 = null;
        let tmp_4_0 = null;
        let tmp_5_0 = null;
        let tmp_6_0 = null;
        let tmp_7_0 = null;
        let tmp_8_0 = null;
        let tmp_9_0 = null;
        let tmp_10_0 = null;
        let tmp_11_0 = null;
        let tmp_12_0 = null;
        let tmp_13_0 = null;
        let tmp_14_0 = null;
        let tmp_16_0 = null;
        let tmp_17_0 = null;
        let tmp_18_0 = null;
        let tmp_19_0 = null;
        let tmp_21_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](39, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.toolBox);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_2_0 = ctx.toolBox.get("siteName")) == null ? null : tmp_2_0.hasError("required")) && (ctx.toolBox.get("siteName").dirty || ctx.toolBox.get("siteName").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.toolBox.get("siteName")) == null ? null : tmp_3_0.hasError("required")) && (ctx.toolBox.get("siteName").dirty || ctx.toolBox.get("siteName").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_4_0 = ctx.toolBox.get("customerName")) == null ? null : tmp_4_0.hasError("required")) && (ctx.toolBox.get("customerName").dirty || ctx.toolBox.get("customerName").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx.toolBox.get("customerName")) == null ? null : tmp_5_0.hasError("required")) && (ctx.toolBox.get("customerName").dirty || ctx.toolBox.get("customerName").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_6_0 = ctx.toolBox.get("streetAddr")) == null ? null : tmp_6_0.hasError("required")) && (ctx.toolBox.get("streetAddr").dirty || ctx.toolBox.get("streetAddr").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_7_0 = ctx.toolBox.get("streetAddr")) == null ? null : tmp_7_0.hasError("required")) && (ctx.toolBox.get("streetAddr").dirty || ctx.toolBox.get("streetAddr").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_8_0 = ctx.toolBox.get("custConct")) == null ? null : tmp_8_0.hasError("required")) && (ctx.toolBox.get("custConct").dirty || ctx.toolBox.get("custConct").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_9_0 = ctx.toolBox.get("custConct")) == null ? null : tmp_9_0.hasError("required")) && (ctx.toolBox.get("custConct").dirty || ctx.toolBox.get("custConct").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_10_0 = ctx.toolBox.get("custConctPh")) == null ? null : tmp_10_0.hasError("required")) && (ctx.toolBox.get("custConctPh").dirty || ctx.toolBox.get("custConctPh").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_11_0 = ctx.toolBox.get("custConctPh")) == null ? null : tmp_11_0.hasError("required")) && (ctx.toolBox.get("custConctPh").dirty || ctx.toolBox.get("custConctPh").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_12_0 = ctx.toolBox.get("custEmail")) == null ? null : tmp_12_0.hasError("required")) && (ctx.toolBox.get("custEmail").dirty || ctx.toolBox.get("custEmail").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_13_0 = ctx.toolBox.get("custEmail")) == null ? null : tmp_13_0.hasError("required")) && (ctx.toolBox.get("custEmail").dirty || ctx.toolBox.get("custEmail").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_14_0 = ctx.toolBox.get("jobNumberId")) == null ? null : tmp_14_0.hasError("required")) && (ctx.toolBox.get("jobNumberId").dirty || ctx.toolBox.get("jobNumberId").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.allJobNumbers);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_16_0 = ctx.toolBox.get("jobNumberId")) == null ? null : tmp_16_0.hasError("required")) && (ctx.toolBox.get("jobNumberId").dirty || ctx.toolBox.get("jobNumberId").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_17_0 = ctx.toolBox.get("date")) == null ? null : tmp_17_0.hasError("required")) && (ctx.toolBox.get("date").dirty || ctx.toolBox.get("date").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_18_0 = ctx.toolBox.get("date")) == null ? null : tmp_18_0.hasError("required")) && (ctx.toolBox.get("date").dirty || ctx.toolBox.get("date").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ((tmp_19_0 = ctx.toolBox.get("meetingBy")) == null ? null : tmp_19_0.hasError("required")) && (ctx.toolBox.get("meetingBy").dirty || ctx.toolBox.get("meetingBy").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.staff);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_21_0 = ctx.toolBox.get("meetingBy")) == null ? null : tmp_21_0.hasError("required")) && (ctx.toolBox.get("meetingBy").dirty || ctx.toolBox.get("meetingBy").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.singRequired);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.signaturePadOptions1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.singRequired);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.issues().controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.correctAct().controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.attendee().controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.toolBox.valid || ctx.singRequired);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], angular2_signaturepad__WEBPACK_IMPORTED_MODULE_8__["SignaturePad"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"]], styles: ["label[_ngcontent-%COMP%]:not(.form-check-label):not(.custom-file-label) {\n  font-weight: 500;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  border: 2px solid dodgerblue;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 500;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n}\n\n.form-control[_ngcontent-%COMP%]:hover {\n  border-color: rgba(46, 105, 255, 0.5);\n  box-shadow: 0 0 0 2px rgba(46, 105, 255, 0.25);\n}\n\n.pt-3[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 32px;\n  font-weight: 700;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n}\n\n.container[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.sign[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid rgba(46, 105, 255, 0.5);\n  border-radius: 5px;\n}\n\nselect[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\n.form-dropdown[_ngcontent-%COMP%] {\n  padding: 0 1.875em 0 0.625em;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='240' height='240'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z'/%3E%3C/svg%3E\");\n  background-position: right 10px bottom 50%;\n  background-size: 0.925em;\n  background-repeat: no-repeat;\n}\n\n.title[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 16px;\n  font-weight: 600;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n}\n\n.sign[_ngcontent-%COMP%]:hover {\n  border: 1px solid;\n  border-color: #2e69ff40;\n  box-shadow: 0 0 0 3px rgba(46, 105, 255, 0.25);\n}\n\n.form-Label[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 500;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n  width: 100%;\n  margin-left: 2px;\n  margin-bottom: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdG9vbGJveC10YWxrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFXQTtFQUNFLDRCQUFBO0FBUkY7O0FBVUE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFQRjs7QUFTQTtFQUNFLHFDQUFBO0VBQ0EsOENBQUE7QUFORjs7QUFTQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQU5GOztBQVFBO0VBQ0UsdUJBQUE7QUFMRjs7QUFPQTtFQUNFLGFBQUE7RUFDQSx5Q0FBQTtFQUVBLGtCQUFBO0FBTEY7O0FBT0E7RUFDRSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFKRjs7QUFPQTtFQUNFLDRCQUFBO0VBQ0Esc1FBQUE7RUFDQSwwQ0FBQTtFQUNBLHdCQUFBO0VBRUEsNEJBQUE7QUFMRjs7QUFPQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQUpGOztBQU1BO0VBQ0UsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLDhDQUFBO0FBSEY7O0FBS0E7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUZGIiwiZmlsZSI6InRvb2xib3gtdGFsay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsOm5vdCguZm9ybS1jaGVjay1sYWJlbCk6bm90KC5jdXN0b20tZmlsZS1sYWJlbCkge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi8vIGxhYmVsIHtcclxuLy8gICAgIG1hcmdpbi1ib3R0b206IDQlO1xyXG4vLyAgICAgbWFyZ2luLXRvcDogMiU7XHJcbi8vIH1cclxuXHJcbi8vIGxhYmVsIHtcclxuLy8gICAgIG1hcmdpbi1ib3R0b206IDQlO1xyXG4vLyAgICAgbWFyZ2luLXRvcDogMiU7XHJcbi8vIH1cclxuaW5wdXQ6Zm9jdXMge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGRvZGdlcmJsdWU7XHJcbn1cclxubGFiZWwge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIGZvbnQtZmFtaWx5OiBJbnRlciwgc2Fucy1zZXJpZjtcclxufVxyXG4uZm9ybS1jb250cm9sOmhvdmVyIHtcclxuICBib3JkZXItY29sb3I6IHJnYmEoNDYsIDEwNSwgMjU1LCAwLjUpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCByZ2IoNDYgMTA1IDI1NSAvIDI1JSk7XHJcbn1cclxuXHJcbi5wdC0zIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICBmb250LWZhbWlseTogSW50ZXIsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLnNpZ24ge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg0NiwgMTA1LCAyNTUsIDAuNSk7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5zZWxlY3Qge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgYXBwZWFyYW5jZTogbm9uZTtcclxufVxyXG5cclxuLmZvcm0tZHJvcGRvd24ge1xyXG4gIHBhZGRpbmc6IDAgMS44NzVlbSAwIDAuNjI1ZW07XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgd2lkdGg9JzI0MCcgaGVpZ2h0PScyNDAnJTNFJTNDcGF0aCBmaWxsPSdub25lJyBkPSdNMCAwaDI0djI0SDB6Jy8lM0UlM0NwYXRoIGQ9J00xMiAxMy4xNzJsNC45NS00Ljk1IDEuNDE0IDEuNDE0TDEyIDE2IDUuNjM2IDkuNjM2IDcuMDUgOC4yMjJ6Jy8lM0UlM0Mvc3ZnJTNFXCIpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDEwcHggYm90dG9tIDUwJTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDAuOTI1ZW07XHJcblxyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuLnRpdGxlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICBmb250LWZhbWlseTogSW50ZXIsIHNhbnMtc2VyaWY7XHJcbn1cclxuLnNpZ246aG92ZXIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gIGJvcmRlci1jb2xvcjogIzJlNjlmZjQwO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2IoNDYsIDEwNSwgMjU1LCAwLjI1KTtcclxufVxyXG4uZm9ybS1MYWJlbCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgZm9udC1mYW1pbHk6IEludGVyLCBzYW5zLXNlcmlmO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ToolboxTalkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-toolbox-talk',
                templateUrl: './toolbox-talk.component.html',
                styleUrls: ['./toolbox-talk.component.scss'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: src_app_utils_services_dynamic_forms_service__WEBPACK_IMPORTED_MODULE_3__["DynamicFormsService"] }, { type: src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_4__["SetTitleService"] }, { type: src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_5__["LogicalFormInfoService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, { signaturePad1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['Signature1']
        }], signaturePad2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"],
            args: ['Signature2']
        }] }); })();


/***/ }),

/***/ "jASi":
/*!*********************************************!*\
  !*** ./src/app/views/forms/forms.module.ts ***!
  \*********************************************/
/*! exports provided: FormsModule1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsModule1", function() { return FormsModule1; });
/* harmony import */ var _Directives_textarea_autoresize_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../Directives/textarea-autoresize.directive */ "lr2a");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/autocomplete */ "vrAh");
/* harmony import */ var _forms_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forms-routing.module */ "kWw+");
/* harmony import */ var _forms_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forms.component */ "naXW");
/* harmony import */ var _site_inspection_site_inspection_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./site-inspection/site-inspection.component */ "lJ0R");
/* harmony import */ var _toolbox_talk_toolbox_talk_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./toolbox-talk/toolbox-talk.component */ "h5Ns");
/* harmony import */ var _hazard_report_hazard_report_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hazard-report/hazard-report.component */ "9Ohn");
/* harmony import */ var _incident_report_incident_report_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./incident-report/incident-report.component */ "4psL");
/* harmony import */ var _risk_assessment_swms_risk_assessment_swms_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./risk-assessment-swms/risk-assessment-swms.component */ "woRl");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular2-signaturepad */ "r1zJ");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _risk_assessment_swms_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./risk-assessment-swms/add-item/add-item.component */ "KMw5");
/* harmony import */ var _display_table_display_table_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./display-table/display-table.component */ "qnD2");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "zioG");
/* harmony import */ var _site_inspection_table_site_inspection_table_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./site-inspection-table/site-inspection-table.component */ "xx1r");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var src_app_interceptor_spinner_interceptor__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/interceptor/spinner.interceptor */ "0SJk");
/* harmony import */ var ngx_mat_timepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-mat-timepicker */ "PqUb");
/* harmony import */ var ngx_autosize__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-autosize */ "6bhV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _hazard_form_table_details_hazard_form_table_details_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./hazard-form-table-details/hazard-form-table-details.component */ "TQFz");
/* harmony import */ var _incidents_table_incidents_table_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./incidents-table/incidents-table.component */ "xWxM");
/* harmony import */ var _risk_assesment_table_risk_assesment_table_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./risk-assesment-table/risk-assesment-table.component */ "sE/3");



























class FormsModule1 {
}
FormsModule1.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FormsModule1 });
FormsModule1.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function FormsModule1_Factory(t) { return new (t || FormsModule1)(); }, providers: [
        _Directives_textarea_autoresize_directive__WEBPACK_IMPORTED_MODULE_0__["TextareaAutoresizeDirective"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HTTP_INTERCEPTORS"],
            useClass: src_app_interceptor_spinner_interceptor__WEBPACK_IMPORTED_MODULE_19__["SpinnerInterceptor"],
            multi: true
        }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _forms_routing_module__WEBPACK_IMPORTED_MODULE_4__["FormsRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            angular2_signaturepad__WEBPACK_IMPORTED_MODULE_12__["SignaturePadModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_16__["CKEditorModule"],
            ngx_mat_timepicker__WEBPACK_IMPORTED_MODULE_20__["NgxMatTimepickerModule"],
            ngx_autosize__WEBPACK_IMPORTED_MODULE_21__["AutosizeModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FormsModule1, { declarations: [_forms_component__WEBPACK_IMPORTED_MODULE_5__["FormsComponent"],
        _site_inspection_site_inspection_component__WEBPACK_IMPORTED_MODULE_6__["SiteInspectionComponent"],
        _toolbox_talk_toolbox_talk_component__WEBPACK_IMPORTED_MODULE_7__["ToolboxTalkComponent"],
        _hazard_report_hazard_report_component__WEBPACK_IMPORTED_MODULE_8__["HazardReportComponent"],
        _incident_report_incident_report_component__WEBPACK_IMPORTED_MODULE_9__["IncidentReportComponent"],
        _risk_assessment_swms_risk_assessment_swms_component__WEBPACK_IMPORTED_MODULE_10__["RiskAssessmentSWMSComponent"],
        _risk_assessment_swms_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_14__["AddItemComponent"],
        _display_table_display_table_component__WEBPACK_IMPORTED_MODULE_15__["DisplayTableComponent"],
        _site_inspection_table_site_inspection_table_component__WEBPACK_IMPORTED_MODULE_17__["SiteInspectionTableComponent"],
        _hazard_form_table_details_hazard_form_table_details_component__WEBPACK_IMPORTED_MODULE_23__["HazardFormTableDetailsComponent"],
        _incidents_table_incidents_table_component__WEBPACK_IMPORTED_MODULE_24__["IncidentsTableComponent"],
        _risk_assesment_table_risk_assesment_table_component__WEBPACK_IMPORTED_MODULE_25__["RiskAssesmentTableComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _forms_routing_module__WEBPACK_IMPORTED_MODULE_4__["FormsRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
        angular2_signaturepad__WEBPACK_IMPORTED_MODULE_12__["SignaturePadModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_16__["CKEditorModule"],
        ngx_mat_timepicker__WEBPACK_IMPORTED_MODULE_20__["NgxMatTimepickerModule"],
        ngx_autosize__WEBPACK_IMPORTED_MODULE_21__["AutosizeModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FormsModule1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _forms_component__WEBPACK_IMPORTED_MODULE_5__["FormsComponent"],
                    _site_inspection_site_inspection_component__WEBPACK_IMPORTED_MODULE_6__["SiteInspectionComponent"],
                    _toolbox_talk_toolbox_talk_component__WEBPACK_IMPORTED_MODULE_7__["ToolboxTalkComponent"],
                    _hazard_report_hazard_report_component__WEBPACK_IMPORTED_MODULE_8__["HazardReportComponent"],
                    _incident_report_incident_report_component__WEBPACK_IMPORTED_MODULE_9__["IncidentReportComponent"],
                    _risk_assessment_swms_risk_assessment_swms_component__WEBPACK_IMPORTED_MODULE_10__["RiskAssessmentSWMSComponent"],
                    _risk_assessment_swms_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_14__["AddItemComponent"],
                    _display_table_display_table_component__WEBPACK_IMPORTED_MODULE_15__["DisplayTableComponent"],
                    _site_inspection_table_site_inspection_table_component__WEBPACK_IMPORTED_MODULE_17__["SiteInspectionTableComponent"],
                    _hazard_form_table_details_hazard_form_table_details_component__WEBPACK_IMPORTED_MODULE_23__["HazardFormTableDetailsComponent"],
                    _incidents_table_incidents_table_component__WEBPACK_IMPORTED_MODULE_24__["IncidentsTableComponent"],
                    _risk_assesment_table_risk_assesment_table_component__WEBPACK_IMPORTED_MODULE_25__["RiskAssesmentTableComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _forms_routing_module__WEBPACK_IMPORTED_MODULE_4__["FormsRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                    angular2_signaturepad__WEBPACK_IMPORTED_MODULE_12__["SignaturePadModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                    _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_16__["CKEditorModule"],
                    ngx_mat_timepicker__WEBPACK_IMPORTED_MODULE_20__["NgxMatTimepickerModule"],
                    ngx_autosize__WEBPACK_IMPORTED_MODULE_21__["AutosizeModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"]
                ],
                providers: [
                    _Directives_textarea_autoresize_directive__WEBPACK_IMPORTED_MODULE_0__["TextareaAutoresizeDirective"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HTTP_INTERCEPTORS"],
                        useClass: src_app_interceptor_spinner_interceptor__WEBPACK_IMPORTED_MODULE_19__["SpinnerInterceptor"],
                        multi: true
                    }
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "kWw+":
/*!*****************************************************!*\
  !*** ./src/app/views/forms/forms-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: FormsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsRoutingModule", function() { return FormsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _display_table_display_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display-table/display-table.component */ "qnD2");
/* harmony import */ var _forms_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forms.component */ "naXW");
/* harmony import */ var _hazard_report_hazard_report_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hazard-report/hazard-report.component */ "9Ohn");
/* harmony import */ var _incident_report_incident_report_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./incident-report/incident-report.component */ "4psL");
/* harmony import */ var _risk_assessment_swms_risk_assessment_swms_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./risk-assessment-swms/risk-assessment-swms.component */ "woRl");
/* harmony import */ var _site_inspection_site_inspection_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./site-inspection/site-inspection.component */ "lJ0R");
/* harmony import */ var _toolbox_talk_toolbox_talk_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./toolbox-talk/toolbox-talk.component */ "h5Ns");
/* harmony import */ var _site_inspection_table_site_inspection_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./site-inspection-table/site-inspection-table.component */ "xx1r");
/* harmony import */ var _hazard_form_table_details_hazard_form_table_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hazard-form-table-details/hazard-form-table-details.component */ "TQFz");
/* harmony import */ var _incidents_table_incidents_table_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./incidents-table/incidents-table.component */ "xWxM");
/* harmony import */ var _risk_assesment_table_risk_assesment_table_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./risk-assesment-table/risk-assesment-table.component */ "sE/3");















const routes = [
    { path: '', component: _forms_component__WEBPACK_IMPORTED_MODULE_3__["FormsComponent"] },
    { path: 'forms', component: _forms_component__WEBPACK_IMPORTED_MODULE_3__["FormsComponent"] },
    { path: 'siteInspect/:id', component: _site_inspection_site_inspection_component__WEBPACK_IMPORTED_MODULE_7__["SiteInspectionComponent"] },
    { path: 'toolboxTalk/:id', component: _toolbox_talk_toolbox_talk_component__WEBPACK_IMPORTED_MODULE_8__["ToolboxTalkComponent"] },
    { path: 'hazardRep/:id', component: _hazard_report_hazard_report_component__WEBPACK_IMPORTED_MODULE_4__["HazardReportComponent"] },
    { path: 'incidentRep/:id', component: _incident_report_incident_report_component__WEBPACK_IMPORTED_MODULE_5__["IncidentReportComponent"] },
    { path: 'riskAssessSWMS/:id', component: _risk_assessment_swms_risk_assessment_swms_component__WEBPACK_IMPORTED_MODULE_6__["RiskAssessmentSWMSComponent"] },
    { path: 'riskAssessTable', component: _risk_assesment_table_risk_assesment_table_component__WEBPACK_IMPORTED_MODULE_12__["RiskAssesmentTableComponent"] },
    { path: 'tableData', component: _display_table_display_table_component__WEBPACK_IMPORTED_MODULE_2__["DisplayTableComponent"] },
    { path: 'siteinspectiontable', component: _site_inspection_table_site_inspection_table_component__WEBPACK_IMPORTED_MODULE_9__["SiteInspectionTableComponent"] },
    { path: 'hazardTable', component: _hazard_form_table_details_hazard_form_table_details_component__WEBPACK_IMPORTED_MODULE_10__["HazardFormTableDetailsComponent"] },
    { path: 'incidentsTable', component: _incidents_table_incidents_table_component__WEBPACK_IMPORTED_MODULE_11__["IncidentsTableComponent"] }
];
class FormsRoutingModule {
}
FormsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FormsRoutingModule });
FormsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FormsRoutingModule_Factory(t) { return new (t || FormsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FormsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "lJ0R":
/*!**************************************************************************!*\
  !*** ./src/app/views/forms/site-inspection/site-inspection.component.ts ***!
  \**************************************************************************/
/*! exports provided: SiteInspectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteInspectionComponent", function() { return SiteInspectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_utils_services_dynamic_forms_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utils/services/dynamic-forms.service */ "+3ge");
/* harmony import */ var src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils/services/set-title.service */ "yZxC");
/* harmony import */ var src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utils/services/logical-form-info.service */ "wbBK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ "M9ds");











function SiteInspectionComponent_div_8_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This Field is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SiteInspectionComponent_div_8_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This Field is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SiteInspectionComponent_div_8_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This Field is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SiteInspectionComponent_div_8_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This Field is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SiteInspectionComponent_div_8_span_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This Field is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SiteInspectionComponent_div_8_span_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This Field is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SiteInspectionComponent_div_8_option_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobNo_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", jobNo_r15._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](jobNo_r15.jobNumber);
} }
function SiteInspectionComponent_div_8_span_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This Field is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SiteInspectionComponent_div_8_option_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mang_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", mang_r16._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](mang_r16.title);
} }
function SiteInspectionComponent_div_8_span_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This Field is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SiteInspectionComponent_div_8_span_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Date is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SiteInspectionComponent_div_8_div_62_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const index_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r19.allcategory[index_r18].category);
} }
function SiteInspectionComponent_div_8_div_62_ng_container_3_div_2_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const filed_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r25.allTopic[filed_r23].topic, " ");
} }
function SiteInspectionComponent_div_8_div_62_ng_container_3_div_2_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const filed_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", ctx_r26.allTopic[filed_r23]._id);
} }
function SiteInspectionComponent_div_8_div_62_ng_container_3_div_2_p_3_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_div_62_ng_container_3_div_2_p_3_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r30.addAcionTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const filed_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", ctx_r27.allTopic[filed_r23]._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r27.allTopic[filed_r23]._id);
} }
function SiteInspectionComponent_div_8_div_62_ng_container_3_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SiteInspectionComponent_div_8_div_62_ng_container_3_div_2_p_1_Template, 2, 1, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SiteInspectionComponent_div_8_div_62_ng_container_3_div_2_p_2_Template, 3, 1, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SiteInspectionComponent_div_8_div_62_ng_container_3_div_2_p_3_Template, 3, 2, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const filed_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const index_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.allTopic[filed_r23].categoryId == ctx_r24.allcategory[index_r18]._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.allTopic[filed_r23].categoryId == ctx_r24.allcategory[index_r18]._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.allTopic[filed_r23].categoryId == ctx_r24.allcategory[index_r18]._id);
} }
function SiteInspectionComponent_div_8_div_62_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SiteInspectionComponent_div_8_div_62_ng_container_3_div_2_Template, 4, 3, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const filed_r23 = ctx.index;
    const index_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", filed_r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.allTopic[filed_r23].categoryId == ctx_r20.allcategory[index_r18]._id);
} }
function SiteInspectionComponent_div_8_div_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SiteInspectionComponent_div_8_div_62_div_1_Template, 3, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SiteInspectionComponent_div_8_div_62_ng_container_3_Template, 3, 2, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const index_r18 = ctx.index;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.categorychecked(index_r18));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r13.add2().controls);
} }
function SiteInspectionComponent_div_8_div_63_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Site Control");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Is the Hazard Signage up to date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_div_63_Template_input_change_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r36.addAcionTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Is the documentation up to date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_div_63_Template_input_change_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r38.addAcionTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Have all workers been inducted onsite ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_div_63_Template_input_change_30_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r39.addAcionTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Have all workers been inducted into the SWMS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_div_63_Template_input_change_39_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r40.addAcionTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Are regular toobox talks taking place ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_div_63_Template_input_change_48_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r41.addAcionTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Date of last toolbox talk ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "WHS Documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " WHS Manual is avaiable to all workers ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_div_63_Template_input_change_65_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r42.addAcionTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Incident Report form available ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_div_63_Template_input_change_74_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r43.addAcionTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Hazard Report form available ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_div_63_Template_input_change_83_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r44.addAcionTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " Emergrncy Evacuation plan displayed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_div_63_Template_input_change_92_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r45.addAcionTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " Training Records are up tp date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_div_63_Template_input_change_101_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r46.addAcionTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Display Material");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " WHS Policy Displayed on notice board ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_div_63_Template_input_change_114_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r47.addAcionTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " Return to Work Form avaliable ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_div_63_Template_input_change_123_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r48.addAcionTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " Hazard Report form avaliable ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_div_63_Template_input_change_132_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r49.addAcionTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, " Emergrncy Evacuation plan displayed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_div_63_Template_input_change_141_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r50.addAcionTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, " No Smoking signs displayed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_div_63_Template_input_change_150_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r51.addAcionTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, " PPE Signage displayed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_div_63_Template_input_change_159_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r52.addAcionTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, " Report the Hazard signs displayed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "input", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_div_63_Template_input_change_168_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r53.addAcionTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, " Manual Handling Signs Displayed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_div_63_Template_input_change_177_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r54.addAcionTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, " Notice Board is up to date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "input", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_div_63_Template_input_change_186_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r55.addAcionTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Access And Egrass");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, " No oil, grease or other slip hazard ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_div_63_Template_input_change_199_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r56.addAcionTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, " Walkways clearly marked ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "input", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_div_63_Template_input_change_208_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r57.addAcionTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, " Walkways are free of clutter or obstructions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_div_63_Template_input_change_217_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r58.addAcionTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, " Stairs are not blocked and good condition ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "input", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "input", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_div_63_Template_input_change_226_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r59.addAcionTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, " Hoardings/fence and getes secure ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](232, "input", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "input", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_div_63_Template_input_change_235_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r60.addAcionTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, " Loose matrials secure from wind ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](241, "input", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_div_63_Template_input_change_244_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r61.addAcionTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, " Bins/Skips located suitable areas ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](250, "input", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_div_63_Template_input_change_253_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r62.addAcionTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, " Bins/Skips are not overflowing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](259, "input", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "input", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_div_63_Template_input_change_262_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r63.addAcionTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, " Notice Board is up to date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](268, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "input", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_div_63_Template_input_change_271_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r64.addAcionTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "Electrical Equipment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, " Mainboard lockable ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](281, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "input", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_div_63_Template_input_change_284_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r65.addAcionTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, " Powerleads tested and tagged ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](290, "input", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "input", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_div_63_Template_input_change_293_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r66.addAcionTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, " Appropriate giards on equipment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](299, "input", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "input", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_div_63_Template_input_change_302_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r67.addAcionTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, " Equipment in good condition ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](308, "input", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "input", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_div_63_Template_input_change_311_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r68.addAcionTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, "No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, " Leads safety placed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](317, "input", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "input", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_div_63_Template_input_change_320_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r69.addAcionTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, "No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, "Chemicals");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](328, " Safey Data Sheet(SDS) available ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](330, "input", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "input", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_div_63_Template_input_change_333_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r70.addAcionTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, "No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, " All Chemicals Are stored as per the SDS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](339, "input", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](340, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "input", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_div_63_Template_input_change_342_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r71.addAcionTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](343, "No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, " SDS Register is availables and up to date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](348, "input", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](349, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "input", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_div_63_Template_input_change_351_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r72.addAcionTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, "No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](355, " Correct PPE on hand and in use ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](357, "input", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](358, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "input", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_div_63_Template_input_change_360_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r73.addAcionTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](361, "No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](364, "First Aid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](368, " First Aid Kit available ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](370, "input", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](371, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "input", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_div_63_Template_input_change_373_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r74.addAcionTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](374, "No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, " First Kit stocked as per contents list ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](379, "input", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](380, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "input", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_div_63_Template_input_change_382_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r75.addAcionTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, "No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](386, " First Aid Kit accessable to all workers ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](388, "input", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](389, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "input", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_div_63_Template_input_change_391_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r76.addAcionTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](392, "No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](395, " All workers aware of the first Aid kit location ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](397, "input", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](398, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "input", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_div_63_Template_input_change_400_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r77.addAcionTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](401, "No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](404, "Fire and Evacuation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](408, " Extinguishers are in place ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](410, "input", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](411, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](413, "input", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_div_63_Template_input_change_413_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r78.addAcionTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](414, "No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](417, " Extinguishers are clearly maked ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](419, "input", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](420, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "input", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_div_63_Template_input_change_422_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r79.addAcionTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](423, "No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](425, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](426, " Extinguishers seviced and up to date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](427, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](428, "input", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](429, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "input", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_div_63_Template_input_change_431_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r80.addAcionTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](432, "No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](433, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](435, " Exit Sings are in Working condition ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](436, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](437, "input", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](438, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](439, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "input", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_div_63_Template_input_change_440_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r81.addAcionTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](441, "No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](443, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](444, " Exit Doors not blocked ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](445, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](446, "input", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](447, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](448, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](449, "input", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_div_63_Template_input_change_449_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r82.addAcionTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](450, "No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](451, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](452, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](453, " Exit Doors can be easily opened ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](455, "input", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](456, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](457, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](458, "input", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_div_63_Template_input_change_458_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r83.addAcionTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](459, "No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](460, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](461, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](462, " Fire Alarm tested and inspected up to date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](463, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](464, "input", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](465, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](466, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](467, "input", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_div_63_Template_input_change_467_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r84.addAcionTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](468, "No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](469, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](470, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](471, " Evacuation Plans displayed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](472, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](473, "input", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](474, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](475, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](476, "input", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_div_63_Template_input_change_476_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r85.addAcionTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](477, "No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](478, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](479, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](480, " Emergency Drill conduct within the last year ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](481, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](482, "input", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](483, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](484, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](485, "input", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_div_63_Template_input_change_485_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r86.addAcionTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](486, "No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](487, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](488, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](489, "Plant Equipment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](490, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](491, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](492, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](493, " Risk Assessment and SWMS completed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](494, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](495, "input", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](496, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](497, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](498, "input", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_div_63_Template_input_change_498_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r87.addAcionTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](499, "No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](500, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](501, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](502, " Plant is within valid service/inspection period ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](503, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](504, "input", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](505, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](506, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](507, "input", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_div_63_Template_input_change_507_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r88.addAcionTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](508, "No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](509, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](510, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](511, " Opertion procedures and SOP's in place ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](512, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](513, "input", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](514, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](515, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](516, "input", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_div_63_Template_input_change_516_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r89.addAcionTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](517, "No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](518, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](519, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](520, "PPE available");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](521, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](522, "input", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](523, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](524, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](525, "input", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_div_63_Template_input_change_525_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r90.addAcionTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](526, "No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](527, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](528, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](529, " Emergency Plan in place ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](530, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](531, "input", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](532, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](533, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](534, "input", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_div_63_Template_input_change_534_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r91.addAcionTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](535, "No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](536, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](537, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](538, " Plant is in good Condition ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](539, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](540, "input", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](541, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](542, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](543, "input", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_div_63_Template_input_change_543_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r92.addAcionTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](544, "No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](545, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](546, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](547, " Appropriate guards fitted ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](548, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](549, "input", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](550, "Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](551, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](552, "input", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_div_63_Template_input_change_552_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r93.addAcionTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](553, "No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SiteInspectionComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Site Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Site Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SiteInspectionComponent_div_8_span_10_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Customer Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SiteInspectionComponent_div_8_span_15_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Site Address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, SiteInspectionComponent_div_8_span_21_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Customer Contact ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, SiteInspectionComponent_div_8_span_26_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Customer Contact Phone ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, SiteInspectionComponent_div_8_span_32_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Customer Contact Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, SiteInspectionComponent_div_8_span_37_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Job Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_Template_select_change_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r95); const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r94.jobNoSel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, SiteInspectionComponent_div_8_option_45_Template, 2, 2, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, SiteInspectionComponent_div_8_span_46_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Project Manager ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "select", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, SiteInspectionComponent_div_8_option_53_Template, 2, 2, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, SiteInspectionComponent_div_8_span_54_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, SiteInspectionComponent_div_8_span_60_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, SiteInspectionComponent_div_8_div_62_Template, 4, 2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, SiteInspectionComponent_div_8_div_63_Template, 554, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    let tmp_0_0 = null;
    let tmp_1_0 = null;
    let tmp_2_0 = null;
    let tmp_3_0 = null;
    let tmp_4_0 = null;
    let tmp_5_0 = null;
    let tmp_6_0 = null;
    let tmp_7_0 = null;
    let tmp_8_0 = null;
    let tmp_9_0 = null;
    let tmp_10_0 = null;
    let tmp_11_0 = null;
    let tmp_12_0 = null;
    let tmp_14_0 = null;
    let tmp_15_0 = null;
    let tmp_17_0 = null;
    let tmp_18_0 = null;
    let tmp_19_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ((tmp_0_0 = ctx_r0.sidePreview.get("siteName")) == null ? null : tmp_0_0.hasError("required")) && (ctx_r0.sidePreview.get("siteName").dirty || ctx_r0.sidePreview.get("siteName").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r0.sidePreview.get("siteName")) == null ? null : tmp_1_0.hasError("required")) && (ctx_r0.sidePreview.get("siteName").dirty || ctx_r0.sidePreview.get("siteName").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ((tmp_2_0 = ctx_r0.sidePreview.get("customerName")) == null ? null : tmp_2_0.hasError("required")) && (ctx_r0.sidePreview.get("customerName").dirty || ctx_r0.sidePreview.get("customerName").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx_r0.sidePreview.get("customerName")) == null ? null : tmp_3_0.hasError("required")) && (ctx_r0.sidePreview.get("customerName").dirty || ctx_r0.sidePreview.get("customerName").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ((tmp_4_0 = ctx_r0.sidePreview.get("streetAddr")) == null ? null : tmp_4_0.hasError("required")) && (ctx_r0.sidePreview.get("streetAddr").dirty || ctx_r0.sidePreview.get("streetAddr").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx_r0.sidePreview.get("streetAddr")) == null ? null : tmp_5_0.hasError("required")) && (ctx_r0.sidePreview.get("streetAddr").dirty || ctx_r0.sidePreview.get("streetAddr").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ((tmp_6_0 = ctx_r0.sidePreview.get("custConct")) == null ? null : tmp_6_0.hasError("required")) && (ctx_r0.sidePreview.get("custConct").dirty || ctx_r0.sidePreview.get("custConct").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_7_0 = ctx_r0.sidePreview.get("custConct")) == null ? null : tmp_7_0.hasError("required")) && (ctx_r0.sidePreview.get("custConct").dirty || ctx_r0.sidePreview.get("custConct").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ((tmp_8_0 = ctx_r0.sidePreview.get("custConctPh")) == null ? null : tmp_8_0.hasError("required")) && (ctx_r0.sidePreview.get("custConctPh").dirty || ctx_r0.sidePreview.get("custConctPh").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_9_0 = ctx_r0.sidePreview.get("custConctPh")) == null ? null : tmp_9_0.hasError("required")) && (ctx_r0.sidePreview.get("custConctPh").dirty || ctx_r0.sidePreview.get("custConctPh").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ((tmp_10_0 = ctx_r0.sidePreview.get("custEmail")) == null ? null : tmp_10_0.hasError("required")) && (ctx_r0.sidePreview.get("custEmail").dirty || ctx_r0.sidePreview.get("custEmail").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_11_0 = ctx_r0.sidePreview.get("custEmail")) == null ? null : tmp_11_0.hasError("required")) && (ctx_r0.sidePreview.get("custEmail").dirty || ctx_r0.sidePreview.get("custEmail").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ((tmp_12_0 = ctx_r0.sidePreview.get("jobNumber")) == null ? null : tmp_12_0.hasError("required")) && (ctx_r0.sidePreview.get("jobNumber").dirty || ctx_r0.sidePreview.get("jobNumber").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.allJobNumbers);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_14_0 = ctx_r0.sidePreview.get("jobNumber")) == null ? null : tmp_14_0.hasError("required")) && (ctx_r0.sidePreview.get("jobNumber").dirty || ctx_r0.sidePreview.get("jobNumber").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ((tmp_15_0 = ctx_r0.sidePreview.get("projectManager")) == null ? null : tmp_15_0.hasError("required")) && (ctx_r0.sidePreview.get("projectManager").dirty || ctx_r0.sidePreview.get("projectManager").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.projectMang);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_17_0 = ctx_r0.sidePreview.get("projectManager")) == null ? null : tmp_17_0.hasError("required")) && (ctx_r0.sidePreview.get("projectManager").dirty || ctx_r0.sidePreview.get("projectManager").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ((tmp_18_0 = ctx_r0.sidePreview.get("date")) == null ? null : tmp_18_0.hasError("required")) && (ctx_r0.sidePreview.get("date").dirty || ctx_r0.sidePreview.get("date").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_19_0 = ctx_r0.sidePreview.get("date")) == null ? null : tmp_19_0.hasError("required")) && (ctx_r0.sidePreview.get("date").dirty || ctx_r0.sidePreview.get("date").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.allcategory);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", false);
} }
function SiteInspectionComponent_div_10_div_2_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This Field is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SiteInspectionComponent_div_10_div_2_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This Field is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SiteInspectionComponent_div_10_div_2_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const j_r104 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", j_r104 == null ? null : j_r104._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](j_r104 == null ? null : j_r104.title);
} }
function SiteInspectionComponent_div_10_div_2_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This Field is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SiteInspectionComponent_div_10_div_2_span_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This Field is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SiteInspectionComponent_div_10_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Item ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SiteInspectionComponent_div_10_div_2_span_7_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SiteInspectionComponent_div_10_div_2_span_12_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Person Responsible ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "select", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SiteInspectionComponent_div_10_div_2_option_19_Template, 2, 2, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SiteInspectionComponent_div_10_div_2_span_20_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Complete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "select", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, SiteInspectionComponent_div_10_div_2_span_31_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const filed_r98 = ctx.index;
    const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    let tmp_2_0 = null;
    let tmp_3_0 = null;
    let tmp_5_0 = null;
    let tmp_6_0 = null;
    let tmp_8_0 = null;
    let tmp_10_0 = null;
    let tmp_11_0 = null;
    let tmp_12_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", filed_r98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disableDiv", ctx_r96.add().controls[filed_r98].get("complete").value == "yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ((tmp_2_0 = ctx_r96.add().controls[filed_r98].get("item")) == null ? null : tmp_2_0.hasError("required")) && (ctx_r96.add().controls[filed_r98].get("item").dirty || ctx_r96.add().controls[filed_r98].get("item").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx_r96.add().controls[filed_r98].get("item")) == null ? null : tmp_3_0.hasError("required")) && (ctx_r96.add().controls[filed_r98].get("item").dirty || ctx_r96.add().controls[filed_r98].get("item").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disableDiv", ctx_r96.add().controls[filed_r98].get("complete").value == "yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ((tmp_5_0 = ctx_r96.add().controls[filed_r98].get("action")) == null ? null : tmp_5_0.hasError("required")) && (ctx_r96.add().controls[filed_r98].get("action").dirty || ctx_r96.add().controls[filed_r98].get("action").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_6_0 = ctx_r96.add().controls[filed_r98].get("action")) == null ? null : tmp_6_0.hasError("required")) && (ctx_r96.add().controls[filed_r98].get("action").dirty || ctx_r96.add().controls[filed_r98].get("action").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disableDiv", ctx_r96.add().controls[filed_r98].get("complete").value == "yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ((tmp_8_0 = ctx_r96.add().controls[filed_r98].get("PersonResponsible")) == null ? null : tmp_8_0.hasError("required")) && (ctx_r96.add().controls[filed_r98].get("PersonResponsible").dirty || ctx_r96.add().controls[filed_r98].get("PersonResponsible").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r96.staff);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_10_0 = ctx_r96.add().controls[filed_r98].get("PersonResponsible")) == null ? null : tmp_10_0.hasError("required")) && (ctx_r96.add().controls[filed_r98].get("PersonResponsible").dirty || ctx_r96.add().controls[filed_r98].get("PersonResponsible").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ((tmp_11_0 = ctx_r96.add().controls[filed_r98].get("complete")) == null ? null : tmp_11_0.hasError("required")) && (ctx_r96.add().controls[filed_r98].get("complete").dirty || ctx_r96.add().controls[filed_r98].get("complete").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_12_0 = ctx_r96.add().controls[filed_r98].get("complete")) == null ? null : tmp_12_0.hasError("required")) && (ctx_r96.add().controls[filed_r98].get("complete").dirty || ctx_r96.add().controls[filed_r98].get("complete").touched));
} }
function SiteInspectionComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SiteInspectionComponent_div_10_div_2_Template, 32, 20, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SiteInspectionComponent_div_10_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r106); const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r105.addAction(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "add_circle_outline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SiteInspectionComponent_div_10_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r106); const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r107.removeAction(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " remove_circle_outline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " keyboard_arrow_up ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " keyboard_arrow_down ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.add().controls);
} }
const _c0 = function () { return ["/admin/forms"]; };
class SiteInspectionComponent {
    constructor(fb, dynamicFormsService, setTitle, logicalFormInfo, router, activatedRoute, datePipe) {
        this.fb = fb;
        this.dynamicFormsService = dynamicFormsService;
        this.setTitle = setTitle;
        this.logicalFormInfo = logicalFormInfo;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.datePipe = datePipe;
        this.siteshow = true;
        this.siteAction = false;
        this.item_values = ['In Progress', 'Completed', 'Closed'];
        this.allJobNumbers = [];
        this.projectMang = [];
        this.keyArr = [
            'jobNumber',
            'siteName',
            'customerName',
            'streetNo',
            'streetAddr',
            'subUrb',
            'custConct',
            'custConctPh',
            'custEmail',
            'datetooboxtalk',
            'date',
            'projectManager',
        ];
        this.sidePreview = this.fb.group({
            jobNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            siteName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            customerName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            //streetNo: [''],
            streetAddr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            // subUrb: [''],
            custConct: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            custConctPh: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            custEmail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            projectManager: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            // datetooboxtalk: [''],
            // Hazard: ['', Validators.required],
            // documentation: ['', Validators.required],
            // workeronsite: ['', Validators.required],
            // SWMS: ['', Validators.required],
            // tooboxtalk: ['', Validators.required],
            // WHSManual: ['', Validators.required],
            // IncidentReport: ['', Validators.required],
            // HazardReport: ['', Validators.required],
            // emergrncyEvacuation: ['', Validators.required],
            // TrainingRecords: ['', Validators.required],
            // WHSPolicy: ['', Validators.required],
            // ReturnToWork: ['', Validators.required],
            // displayHazardReport: ['', Validators.required],
            // displayEmergrncyEvacuation: ['', Validators.required],
            // NoSmoking: ['', Validators.required],
            // PPESignage: ['', Validators.required],
            // ReportHazardsigns: ['', Validators.required],
            // ManualHandlingSigns: ['', Validators.required],
            // NoticeBoard: ['', Validators.required],
            // accessEgrassHazards: ['', Validators.required],
            // Walkways: ['', Validators.required],
            // Walkwaysfree: ['', Validators.required],
            // StairsConditionGood: ['', Validators.required],
            // HoardingsFenceGates: ['', Validators.required],
            // LosseMatrialSecure: ['', Validators.required],
            // binsSkipsLocated: ['', Validators.required],
            // binsSkipsOverflowing: ['', Validators.required],
            // electricalMainboardLock: ['', Validators.required],
            // PowerleadsTested: ['', Validators.required],
            // EquipmentGiards: ['', Validators.required],
            // EquipmentCondition: ['', Validators.required],
            // LeadsSafety: ['', Validators.required],
            // SDSavailable: ['', Validators.required],
            // chemicalsStoredSDS: ['', Validators.required],
            // SDSRegisterAvailables: ['', Validators.required],
            // correctPPHand: ['', Validators.required],
            // FirstAidavailable: ['', Validators.required],
            // FirstKitContentsList: ['', Validators.required],
            // KitAccessableWorkers: ['', Validators.required],
            // awarefirstKitLocation: ['', Validators.required],
            // Extinguishers: ['', Validators.required],
            // ExtinguishersClearlyMaked: ['', Validators.required],
            // ExtinguishersSevicedUpdate: ['', Validators.required],
            // ExitSingsCondition: ['', Validators.required],
            // ExitDoorsBlocked: ['', Validators.required],
            // ExitDoorsOpened: ['', Validators.required],
            // FireAlarmTested: ['', Validators.required],
            // EvacuationPlans: ['', Validators.required],
            // emergencyDrillConduct: ['', Validators.required],
            // RiskAssessmentSWMS: ['', Validators.required],
            // PlantValidService: ['', Validators.required],
            // OpertionProceduresSOPs: ['', Validators.required],
            // PPEAvailable: ['', Validators.required],
            // emergencyPlan: ['', Validators.required],
            // PlantGoodCondition: ['', Validators.required],
            // appropriateGuards: ['', Validators.required],
            siteAction: this.fb.array([]),
            siteCategorytTopic: this.fb.array([]),
        });
    }
    ngOnInit() {
        this.id = this.activatedRoute.snapshot.params.id;
        this.dynamicFormsService.homebarTitle.next('Site Inspection Form');
        this.setTitle.setTitle('WHS-Site Inspection Form');
        this.getAllJobNumber();
        this.getAllProjectMang();
        this.getAllCategory();
        this.getAllTopic();
        this.getAllStaff();
        if (this.id != 'form') {
            this.logicalFormInfo.getSiteInspection(this.id).subscribe((res) => {
                console.log('res', res.data);
                this.showDatas = res.data;
                setTimeout(() => {
                    var _a;
                    let formatDate;
                    if (this.showDatas.sitePreview[0].date) {
                        var date = new Date(this.showDatas.sitePreview[0].date);
                        formatDate = this.datePipe.transform(date, 'yyyy-MM-dd');
                        this.sidePreview.patchValue({ date: formatDate });
                    }
                    else {
                        formatDate = '';
                    }
                    this.sidePreview.patchValue({
                        siteName: this.showDatas.sitePreview[0].siteName,
                        customerName: this.showDatas.sitePreview[0].customerName,
                        streetAddr: this.showDatas.sitePreview[0].streetAddr,
                        custConct: this.showDatas.sitePreview[0].custConct,
                        custConctPh: this.showDatas.sitePreview[0].custConctPh,
                        custEmail: this.showDatas.sitePreview[0].custEmail,
                        jobNumber: this.showDatas.sitePreview[0].jobNumber,
                        projectManager: this.showDatas.sitePreview[0].projectManager,
                    });
                    if (this.add2().controls) {
                        let key;
                        for (let i = 0; i < this.allTopic.length; i++) {
                            for (let index = 0; index < this.showDatas.sitePreview[0].siteCategorytTopic.length; index++) {
                                key = Object.keys(this.showDatas.sitePreview[0].siteCategorytTopic[index]);
                                (_a = this.add2()
                                    .controls[i].get(key)) === null || _a === void 0 ? void 0 : _a.setValue(this.showDatas.sitePreview[0].siteCategorytTopic[index][key]);
                            }
                        }
                    }
                }, 500);
            });
        }
    }
    ngAfterViewInit() {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
    }
    jobNoSel() {
        this.allJobNumbers.forEach((item) => {
            if (this.sidePreview.get('jobNumber').value === item._id) {
                console.log('Id found', item);
                this.sidePreview.patchValue({
                    siteName: item.siteName,
                    customerName: item.customerName,
                    streetAddr: item.streetAddress,
                    custConct: item.customerContact,
                    custConctPh: item.customerContactPhone,
                    custEmail: item.customerEmail,
                    jobNumber: this.sidePreview.get('jobNumber').value,
                });
            }
        });
        this.sidePreview.get('jobNumber').updateValueAndValidity();
    }
    addAction() {
        {
            this.add().push(this.newAction());
        }
    }
    add() {
        return this.sidePreview.get('siteAction');
    }
    newAction() {
        return this.fb.group({
            item: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            action: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            PersonResponsible: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            complete: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            topicId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    showsite() {
        this.siteshow = true;
        this.siteAction = false;
        console.log(this.sidePreview);
    }
    showAction() {
        this.siteAction = true;
        this.siteshow = false;
        this.add().clear();
        if (this.id != 'form') {
            for (let index = 0; index < this.showDatas.sitePreview[0].siteAction.length; index++) {
                console.log(this.showDatas.sitePreview[0].siteAction[index].item);
                this.addAction();
                this.add()
                    .controls[index].get('item')
                    .setValue(this.showDatas.sitePreview[0].siteAction[index].item);
                this.add()
                    .controls[index].get('action')
                    .setValue(this.showDatas.sitePreview[0].siteAction[index].action);
                this.add()
                    .controls[index].get('topicId')
                    .setValue(this.showDatas.sitePreview[0].siteAction[index].topicId);
                this.add()
                    .controls[index].get('PersonResponsible')
                    .setValue(this.showDatas.sitePreview[0].siteAction[index].PersonResponsible);
                this.add()
                    .controls[index].get('complete')
                    .setValue(this.showDatas.sitePreview[0].siteAction[index].complete);
            }
        }
        else {
            let key = [];
            for (let y = 0; y < this.allTopic.length; y++) {
                key.push(Object.keys(this.add2().at(y).value));
            }
            console.log('this.keyArr.find((ele) => key.includes(ele))', key);
            for (let i = 0; i < key.length - 1; i++) {
                if (!this.keyArr.find((ele) => key[i].includes(ele))) {
                    let tempValue = this.add2().at(i).get(key[i]).value;
                    console.log('tempValue', tempValue);
                    let data = this.allTopic.find((obj) => {
                        if (obj._id == tempValue) {
                            console.log('obj', obj);
                            return obj;
                        }
                    });
                    if (tempValue != '') {
                        if (tempValue != 'yes') {
                            let index = this.add().length;
                            this.addAction();
                            console.log('data', data);
                            this.add().controls[index].get('item').setValue(data.item);
                            this.add().controls[index].get('action').setValue(data.action);
                            this.add().controls[index].get('topicId').setValue(data._id);
                        }
                    }
                }
            }
        }
    }
    removeAction() {
        let index = this.add().length;
        this.add().removeAt(index - 1);
    }
    addAcionTab(event) {
        let b = Object.keys(this.sidePreview.value);
        console.log('event', event);
        //   let index =this.add().length
        //   this.addAction()
        // this.add().controls[index].get("item").setValue(event.target.value)
        //  console.log(this.sidePreview.controls[b[0]].value);
    }
    getAllJobTask() {
        this.logicalFormInfo.getAllJobtask().subscribe((res) => {
            this.jobTaskData = res.data;
            console.log('jobTaskDetails=>', this.jobTaskData);
        });
    }
    getAllProjectMang() {
        this.logicalFormInfo.getAllProjectMang().subscribe((res) => {
            this.projectMang = res.data;
        });
    }
    getAllJobNumber() {
        this.logicalFormInfo.getAllJobNumber().subscribe((res) => {
            this.allJobNumbers = res.data;
        });
    }
    tabClick(eve) {
        console.log('tab changed', eve);
        if (eve.index == 0) {
            this.showsite();
        }
        if (eve.index == 1) {
            this.sidePreview.updateValueAndValidity();
            this.showAction();
        }
    }
    onSave() {
        console.log('form data', this.sidePreview.value);
        if (this.id != 'form') {
            const data = {
                sitePreview: [
                    Object.assign({}, this.sidePreview.value),
                ],
            };
            this.logicalFormInfo
                .updateSiteInspection(this.id, data)
                .subscribe((res) => {
                console.log('res', res);
                this.router.navigate(['/admin/forms']);
                // this.router.navigate(["/admin/forms/tableData"]);
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    title: 'Update successfully',
                    showConfirmButton: false,
                    timer: 1200,
                });
                this.router.navigate(['/admin/forms']);
            });
        }
        else {
            const data = {
                sitePreview: [
                    Object.assign({}, this.sidePreview.value),
                ],
            };
            this.logicalFormInfo.addSiteInspection(data).subscribe((res) => {
                console.log('res', res);
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    title: 'Submit successfully',
                    showConfirmButton: false,
                    timer: 1200,
                });
                // this.router.navigate(["/admin/forms/tableData"]);
                this.router.navigate(['/admin/forms']);
            });
            console.log('data', data);
        }
        this.sidePreview.reset();
    }
    getAllCategory() {
        this.logicalFormInfo
            .getAllSiteInspectionCategory()
            .subscribe((res) => {
            this.allcategory = res.data;
            console.log('Allcategory', res);
            // for (let index = 0; index < this.allcategory.length; index++) {
            //   //this.sidePreview.addControl( this.allcategory[index].category ,new FormArray([]))
            // }
            // for (let x = 0; x < this.allcategory.length; x++) {
            //   let y=this.allcategory[x].category
            //  this.add2().push(this.newAction2())
            // }
        });
    }
    add2() {
        return this.sidePreview.get('siteCategorytTopic');
    }
    newAction2(index) {
        return this.fb.group({
            [this.allTopic[index]._id]: ['',],
        });
    }
    getAllTopic() {
        this.logicalFormInfo.getAllSiteInspectionTopic().subscribe((res) => {
            this.allTopic = res.data;
            console.log('alltopic', this.allTopic);
            // this.add2().push(this.newAction2(index))
            for (let index = 0; index < this.allTopic.length; index++) {
                //this.sidePreview.addControl( this.allcategory[index].category ,new FormArray([]))
                this.add2().push(this.newAction2(index));
                // console.log("index",index);
            }
            console.log(this.sidePreview.value);
        });
    }
    categorychecked(index) {
        var _a;
        let value;
        value = (_a = this.allTopic) === null || _a === void 0 ? void 0 : _a.find((ele) => {
            var _a;
            return (ele === null || ele === void 0 ? void 0 : ele.categoryId) == ((_a = this.allcategory[index]) === null || _a === void 0 ? void 0 : _a._id);
        });
        return value != null;
    }
    getAllStaff() {
        this.logicalFormInfo.getAllStaff().subscribe((res) => {
            this.staff = res.data;
            console.log('res', this.staff);
        });
    }
}
SiteInspectionComponent.ɵfac = function SiteInspectionComponent_Factory(t) { return new (t || SiteInspectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_dynamic_forms_service__WEBPACK_IMPORTED_MODULE_3__["DynamicFormsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_4__["SetTitleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_5__["LogicalFormInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"])); };
SiteInspectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SiteInspectionComponent, selectors: [["app-site-inspection"]], decls: 13, vars: 6, consts: [[1, "btn", "btn-outline-primary", 3, "routerLink"], ["aria-hidden", "true", 1, "fa", "fa-arrow-left"], [1, "container", "card", "px-4", "py-4", 3, "formGroup"], [1, "text-center", "pt-3"], [1, "title"], [3, "selectedTabChange"], ["label", "Site Inspection"], ["class", "tab-pane fade show active", "id", "siteInspection", "role", "tabpanel", "aria-labelledby", "siteInspection-tab", 4, "ngIf"], ["label", "Site Inspection Corrective Action"], ["class", "tab-pane fade show active", "id", "siteAction", "role", "tabpanel", "aria-labelledby", "siteAction-tab", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-outline-primary", "mt-1", 2, "width", "10rem", "align-self", "center", 3, "disabled", "click"], ["id", "siteInspection", "role", "tabpanel", "aria-labelledby", "siteInspection-tab", 1, "tab-pane", "fade", "show", "active"], [1, "pt-3"], [1, "subtitel"], [1, "row"], [1, "mb-3", "col"], ["for", "exampleFormControlInput1", 1, "form-Label"], ["type", "text", "id", "siteName", "formControlName", "siteName", 1, "form-control", "outline"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "formControlName", "customerName", 1, "form-control", "outline"], ["type", "text", "formControlName", "streetAddr", 1, "form-control", "outline"], ["type", "text", "formControlName", "custConct", 1, "form-control", "outline"], ["type", "text", "formControlName", "custConctPh", 1, "form-control", "outline"], ["type", "text", "formControlName", "custEmail", 1, "form-control", "outline"], ["aria-label", "Default select example", "formControlName", "jobNumber", 1, "form-select", "form-control", "col", "outline", "form-dropdown", 3, "change"], ["selected", "", "hidden", ""], [3, "value", 4, "ngFor", "ngForOf"], ["aria-label", "Default select example", "formControlName", "projectManager", 1, "form-select", "form-control", "col", "outline", "form-dropdown"], [1, "mb-3", "col-6"], ["type", "date", "formControlName", "date", 1, "form-control", "outline"], ["formArrayName", "siteCategorytTopic"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "invalid-feedback"], [3, "value"], ["class", "mt-4", 4, "ngIf"], [1, "mt-4"], [3, "formGroupName"], ["class", "mt-2 col-4", 4, "ngIf"], [1, "mt-2", "col-4"], ["class", "", 4, "ngIf"], [1, ""], ["type", "radio", "value", "yes", 1, "form-radio", "mr-1", 3, "formControlName"], ["type", "radio", 1, "mr-1", 3, "formControlName", "value", "change"], ["for", "exampleFormControlInput1", 1, ""], ["type", "radio", "formControlName", "Hazard", "value", "yes", 1, "form-radio", "mr-1"], ["type", "radio", "formControlName", "Hazard", "value", "Hazard Signage not up to date", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "documentation", 1, "mr-1"], ["type", "radio", "value", " documentation not up to date", "formControlName", "documentation", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "workeronsite", 1, "mr-1"], ["type", "radio", "value", " workers not  inducted into onsite", "formControlName", "workeronsite", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "SWMS", 1, "mr-1"], ["type", "radio", "value", "workers not inducted into  SWMS", "formControlName", "SWMS", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "tooboxtalk", 1, "mr-1"], ["type", "radio", "value", "toobox talks not taking place", "formControlName", "tooboxtalk", 1, "mr-1", 3, "change"], ["type", "date", "formControlName", "datetooboxtalk", 1, "form-control", "outline"], ["type", "radio", "value", "yes", "formControlName", "WHSManual", 1, "mr-1"], ["type", "radio", "value", "WHS Manual is not avaiable all workers", "formControlName", "WHSManual", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "IncidentReport", 1, "mr-1"], ["type", "radio", "value", "Incident Report not available", "formControlName", "IncidentReport", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "HazardReport", 1, "mr-1"], ["type", "radio", "value", "Hazard Report not available", "formControlName", "HazardReport", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "emergrncyEvacuation", 1, "mr-1"], ["type", "radio", "value", "Emergrncy Evacuation plan not displayed", "formControlName", "emergrncyEvacuation", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "TrainingRecords", 1, "mr-1"], ["type", "radio", "value", "Training Records not up tp date", "formControlName", "TrainingRecords", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "WHSPolicy", 1, "mr-1"], ["type", "radio", "value", "HS Policy not  Displayed on notice board", "formControlName", "WHSPolicy", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "ReturnToWork", 1, "mr-1"], ["type", "radio", "value", "Return to Work Form not avaliable", "formControlName", "ReturnToWork", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "displayHazardReport", 1, "mr-1"], ["type", "radio", "value", "Hazard Report form not avaliable", "formControlName", "displayHazardReport", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "displayEmergrncyEvacuation", 1, "mr-1"], ["type", "radio", "value", "Emergrncy Evacuation plan not displayed", "formControlName", "displayEmergrncyEvacuation", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "NoSmoking", 1, "mr-1"], ["type", "radio", "value", "No Smoking signs not displayed", "formControlName", "NoSmoking", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "PPESignage", 1, "mr-1"], ["type", "radio", "value", "PPE Signage not displayed", "formControlName", "PPESignage", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "ReportHazardsigns", 1, "mr-1"], ["type", "radio", "value", "Report the Hazard signs not displayed", "formControlName", "ReportHazardsigns", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "ManualHandlingSigns", 1, "mr-1"], ["type", "radio", "value", "Manual Handling Signs not Displayed", "formControlName", "ManualHandlingSigns", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "NoticeBoard", 1, "mr-1"], ["type", "radio", "value", "Notice Board not up to date", "formControlName", "NoticeBoard", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "accessEgrassHazards", 1, "mr-1"], ["type", "radio", "value", "oil, grease or other slip hazard", "formControlName", "accessEgrassHazards", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "Walkways", 1, "mr-1"], ["type", "radio", "value", "Walkways not clearly marked", "formControlName", "Walkways", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "Walkwaysfree", 1, "mr-1"], ["type", "radio", "value", "Walkways not free of clutter or obstructions", "formControlName", "Walkwaysfree", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "StairsConditionGood", 1, "mr-1"], ["type", "radio", "value", "Stairs are  blocked and not  good condition", "formControlName", "StairsConditionGood", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "HoardingsFenceGates", 1, "mr-1"], ["type", "radio", "value", "Hoardings/fence and getes not secure", "formControlName", "HoardingsFenceGates", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "LosseMatrialSecure", 1, "mr-1"], ["type", "radio", "value", "Loose matrials not secure from wind", "formControlName", "LosseMatrialSecure", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "binsSkipsLocated", 1, "mr-1"], ["type", "radio", "value", "Bins/Skips not located suitable areas", "formControlName", "binsSkipsLocated", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "binsSkipsOverflowing", 1, "mr-1"], ["type", "radio", "value", "Bins/Skips are overflowing", "formControlName", "binsSkipsOverflowing", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "electricalMainboardLock", 1, "mr-1"], ["type", "radio", "value", "Mainboard not lockable", "formControlName", "electricalMainboardLock", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "PowerleadsTested", 1, "mr-1"], ["type", "radio", "value", "Powerleads not tested and tagged", "formControlName", "PowerleadsTested", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "EquipmentGiards", 1, "mr-1"], ["type", "radio", "value", "Not Appropriate giards on equipment", "formControlName", "EquipmentGiards", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "EquipmentCondition", 1, "mr-1"], ["type", "radio", "value", "Equipment not good condition", "formControlName", "EquipmentCondition", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "LeadsSafety", 1, "mr-1"], ["type", "radio", "value", "Leads not safety placed", "formControlName", "LeadsSafety", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "SDSavailable", 1, "mr-1"], ["type", "radio", "value", "Safey Data Sheet(SDS) not available", "formControlName", "SDSavailable", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "chemicalsStoredSDS", 1, "mr-1"], ["type", "radio", "value", "All Chemicals Are not stored as per the SDS", "formControlName", "chemicalsStoredSDS", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "SDSRegisterAvailables", 1, "mr-1"], ["type", "radio", "value", "SDS Register not availables and not  up to date", "formControlName", "SDSRegisterAvailables", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "correctPPHand", 1, "mr-1"], ["type", "radio", "value", "Incorrect PPE on hand and in use", "formControlName", "correctPPHand", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "FirstAidavailable", 1, "mr-1"], ["type", "radio", "value", "First Aid Kit not available", "formControlName", "FirstAidavailable", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "FirstKitContentsList", 1, "mr-1"], ["type", "radio", "value", "First Kit not  stocked as per contents list", "formControlName", "FirstKitContentsList", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "KitAccessableWorkers", 1, "mr-1"], ["type", "radio", "value", "First Aid Kit not  accessable to all workers", "formControlName", "KitAccessableWorkers", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "awarefirstKitLocation", 1, "mr-1"], ["type", "radio", "value", "All workers not aware first Aid kit location", "formControlName", "awarefirstKitLocation", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "Extinguishers", 1, "mr-1"], ["type", "radio", "value", "Extinguishers not in place", "formControlName", "Extinguishers", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "ExtinguishersClearlyMaked", 1, "mr-1"], ["type", "radio", "value", "Extinguishers not clearly maked", "formControlName", "ExtinguishersClearlyMaked", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "ExtinguishersSevicedUpdate", 1, "mr-1"], ["type", "radio", "value", "Extinguishers seviced not up to date", "formControlName", "ExtinguishersSevicedUpdate", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "ExitSingsCondition", 1, "mr-1"], ["type", "radio", "value", "Exit Sings not in a Working condition", "formControlName", "ExitSingsCondition", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "ExitDoorsBlocked", 1, "mr-1"], ["type", "radio", "value", "Exit Doors blocked ", "formControlName", "ExitDoorsBlocked", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "ExitDoorsOpened", 1, "mr-1"], ["type", "radio", "value", "Exit Doors cannot be easily opened", "formControlName", "ExitDoorsOpened", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "FireAlarmTested", 1, "mr-1"], ["type", "radio", "value", "Fire Alarm not tested and inspected not  up to date", "formControlName", "FireAlarmTested", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "EvacuationPlans", 1, "mr-1"], ["type", "radio", "value", "Evacuation Plans not displayed", "formControlName", "EvacuationPlans", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "emergencyDrillConduct", 1, "mr-1"], ["type", "radio", "value", "Emergency Drill not conduct within the last year", "formControlName", "emergencyDrillConduct", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "RiskAssessmentSWMS", 1, "mr-1"], ["type", "radio", "value", "Risk Assessment and SWMS not completed", "formControlName", "RiskAssessmentSWMS", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "PlantValidService", 1, "mr-1"], ["type", "radio", "value", "Plant is within valid service/inspection not in  period", "formControlName", "PlantValidService", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "OpertionProceduresSOPs", 1, "mr-1"], ["type", "radio", "value", "Opertion procedures and SOP's not in place", "formControlName", "OpertionProceduresSOPs", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "PPEAvailable", 1, "mr-1"], ["type", "radio", "value", "PPE not available", "formControlName", "PPEAvailable", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "emergencyPlan", 1, "mr-1"], ["type", "radio", "value", "Emergency Plan not an in place", "formControlName", "emergencyPlan", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "PlantGoodCondition", 1, "mr-1"], ["type", "radio", "value", "Plant is not  good Condition", "formControlName", "PlantGoodCondition", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "appropriateGuards", 1, "mr-1"], ["type", "radio", "value", "Appropriate guards not fitted", "formControlName", "appropriateGuards", 1, "mr-1", 3, "change"], ["id", "siteAction", "role", "tabpanel", "aria-labelledby", "siteAction-tab", 1, "tab-pane", "fade", "show", "active"], ["formArrayName", "siteAction"], [1, "material-icons", 3, "click"], [1, "material-icons"], [1, "mb-3", "col-3"], ["for", "exampleFormControlInput1", 1, "form-Label", "mt-2"], ["type", "text", "formControlName", "item", 1, "form-control", "outline"], ["type", "text", "formControlName", "action", 1, "form-control", "outline"], [1, "my-3", "col-2"], ["aria-label", "Default select example", "formControlName", "PersonResponsible", 1, "form-select", "form-control", "col", "form-dropdown"], [1, "mb-3", "col-2"], ["aria-label", "Default select example", "formControlName", "complete", 1, "form-select", "form-control", "col", "outline", "form-dropdown"], ["value", "yes", 1, "mr-1"], ["value", "no", 1, "mr-1"]], template: function SiteInspectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Site Inspection Preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-tab-group", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedTabChange", function SiteInspectionComponent_Template_mat_tab_group_selectedTabChange_6_listener($event) { return ctx.tabClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-tab", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SiteInspectionComponent_div_8_Template, 64, 31, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-tab", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SiteInspectionComponent_div_10_Template, 11, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SiteInspectionComponent_Template_button_click_11_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.sidePreview);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.siteshow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.siteAction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.sidePreview.valid);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTab"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RadioControlValueAccessor"]], styles: ["input[type=radio][_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 17px;\n  width: 17px;\n  border: 1px solid #6107d6;\n  border-color: blue;\n  position: relative;\n  border-radius: 3px;\n  color: blue;\n  padding: 0 6px;\n  top: 2px;\n}\n\ninput[type=radio][_ngcontent-%COMP%] {\n  color: #666;\n  font-weight: normal;\n}\n\ninput[type=radio][_ngcontent-%COMP%]:hover::before {\n  content: \" \";\n  display: inline-block;\n  position: relative;\n  top: -2px;\n  right: 2px;\n  bottom: 1px;\n  width: 20px;\n  height: 20px;\n  border-radius: 11px;\n  border: 3px solid #2e69ff40;\n  background-color: transparent;\n}\n\ninput[type=radio][_ngcontent-%COMP%]    + p[_ngcontent-%COMP%]:checked::after {\n  border-radius: 11px;\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  border: 2px solid #2e69ff40;\n  content: \" \";\n  display: block;\n  background: #2e69ff40;\n}\n\n.outline[_ngcontent-%COMP%]:hover {\n  border: 1px solid;\n  border-color: #2e69ff40;\n  box-shadow: 0 0 0 3px rgba(46, 105, 255, 0.25);\n}\n\n.outline[_ngcontent-%COMP%]:focus {\n  border: 1px solid;\n  border-color: #2e69ff40;\n  box-shadow: 0 0 0 3px rgba(46, 105, 255, 0.25);\n}\n\n.form-Label[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 500;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n  width: 100%;\n  margin-left: 2px;\n  margin-bottom: 14px;\n}\n\n.subtitel[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 16px;\n  font-weight: 600;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n}\n\n.nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  border: 3px solid;\n  color: #495057;\n  background-color: #fff;\n  border-color: #2e69ff40 #2e69ff40 #fff;\n  border-radius: 1px;\n  font-family: Inter, sans-serif;\n}\n\n.title[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 32px;\n  font-weight: 700;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background-color: #eeeeee;\n  border: none;\n  outline: none;\n  height: 40px;\n}\n\nselect[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\n.form-dropdown[_ngcontent-%COMP%] {\n  padding: 0 1.875em 0 0.625em;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z'/%3E%3C/svg%3E\");\n  background-position: right 10px bottom 50%;\n  background-size: 0.925em;\n  background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2l0ZS1pbnNwZWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFFQSxRQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7QUFERjs7QUFJQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBR0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQUhGOztBQU1BO0VBQ0UsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLDhDQUFBO0FBSEY7O0FBTUE7RUFDRSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsOENBQUE7QUFIRjs7QUFRQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBTEY7O0FBV0E7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFSRjs7QUFXQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0FBUkY7O0FBVUE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFQRjs7QUFTQTtFQUtFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBVkY7O0FBYUE7RUFDRSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFWRjs7QUFhQTtFQUNFLDRCQUFBO0VBQ0Esb1FBQUE7RUFDQSwwQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7QUFWRiIsImZpbGUiOiJzaXRlLWluc3BlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPSdyYWRpbyddIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgaGVpZ2h0OiAxN3B4O1xyXG4gIHdpZHRoOiAxN3B4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYig5NywgNywgMjE0KTtcclxuICBib3JkZXItY29sb3I6IGJsdWU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBjb2xvcjogYmx1ZTtcclxuICBwYWRkaW5nOiAwIDZweDtcclxuICAvLyAgbWFyZ2luOiAxMHB4IDAgMDtcclxuICB0b3A6IDJweDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT0ncmFkaW8nXSB7XHJcbiAgY29sb3I6ICM2NjY7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT0ncmFkaW8nXTpob3Zlcjo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnICc7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IC0ycHg7XHJcbiAgcmlnaHQ6IDJweDtcclxuICBib3R0b206IDFweDtcclxuICAvL21hcmdpbjogMCAxMDBweCAxMHB4IDA7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDExcHg7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgIzJlNjlmZjQwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPSdyYWRpbyddICsgcDpjaGVja2VkOjphZnRlciB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTFweDtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMyZTY5ZmY0MDtcclxuICAvLyB0b3A6IDlweDtcclxuICAvLyBsZWZ0OiAxMHB4O1xyXG4gIGNvbnRlbnQ6ICcgJztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBiYWNrZ3JvdW5kOiAjMmU2OWZmNDA7XHJcbn1cclxuXHJcbi5vdXRsaW5lOmhvdmVyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZDtcclxuICBib3JkZXItY29sb3I6ICMyZTY5ZmY0MDtcclxuICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiKDQ2LCAxMDUsIDI1NSwgMC4yNSk7XHJcbn1cclxuXHJcbi5vdXRsaW5lOmZvY3VzIHtcclxuICBib3JkZXI6IDFweCBzb2xpZDtcclxuICBib3JkZXItY29sb3I6ICMyZTY5ZmY0MDtcclxuICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiKDQ2LCAxMDUsIDI1NSwgMC4yNSk7XHJcbn1cclxuLy8gICAuZm9ybS1saW5lLWFjdGl2ZXtcclxuLy8gICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MiwgMjQzLCA0MiwgMC44OSk7XHJcbi8vICAgfVxyXG4uZm9ybS1MYWJlbCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgZm9udC1mYW1pbHk6IEludGVyLCBzYW5zLXNlcmlmO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcclxufVxyXG5cclxuLy8gICBib2R5e1xyXG4vLyBcdGZvbnQtZmFtaWx5OiBJbnRlcixzYW5zLXNlcmlmXHJcbi8vICAgfVxyXG4uc3VidGl0ZWwge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIGZvbnQtZmFtaWx5OiBJbnRlciwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLm5hdi10YWJzIC5uYXYtbGluay5hY3RpdmUge1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkO1xyXG4gIGNvbG9yOiAjNDk1MDU3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMmU2OWZmNDAgIzJlNjlmZjQwICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gIGZvbnQtZmFtaWx5OiBJbnRlciwgc2Fucy1zZXJpZjtcclxufVxyXG4udGl0bGUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIGZvbnQtZmFtaWx5OiBJbnRlciwgc2Fucy1zZXJpZjtcclxufVxyXG5idXR0b24ge1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIC8vIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgLy8gY3Vyc29yOiBwb2ludGVyO1xyXG4gIC8vIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbnNlbGVjdCB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICBhcHBlYXJhbmNlOiBub25lO1xyXG59XHJcblxyXG4uZm9ybS1kcm9wZG93biB7XHJcbiAgcGFkZGluZzogMCAxLjg3NWVtIDAgMC42MjVlbTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnJTNFJTNDcGF0aCBmaWxsPSdub25lJyBkPSdNMCAwaDI0djI0SDB6Jy8lM0UlM0NwYXRoIGQ9J00xMiAxMy4xNzJsNC45NS00Ljk1IDEuNDE0IDEuNDE0TDEyIDE2IDUuNjM2IDkuNjM2IDcuMDUgOC4yMjJ6Jy8lM0UlM0Mvc3ZnJTNFXCIpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDEwcHggYm90dG9tIDUwJTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDAuOTI1ZW07XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SiteInspectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-site-inspection',
                templateUrl: './site-inspection.component.html',
                styleUrls: ['./site-inspection.component.scss'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: src_app_utils_services_dynamic_forms_service__WEBPACK_IMPORTED_MODULE_3__["DynamicFormsService"] }, { type: src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_4__["SetTitleService"] }, { type: src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_5__["LogicalFormInfoService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"] }]; }, null); })();


/***/ }),

/***/ "naXW":
/*!************************************************!*\
  !*** ./src/app/views/forms/forms.component.ts ***!
  \************************************************/
/*! exports provided: FormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsComponent", function() { return FormsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "5QHs");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "OaSA");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "LUZP");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "7g+E");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/utils/services/set-title.service */ "yZxC");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slide-toggle */ "jMqV");














function FormsComponent_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormsComponent_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r12.index);
} }
function FormsComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Form Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormsComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r13.title);
} }
function FormsComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Form Frequency ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormsComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Daily");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Weekly");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Monthly");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Quaterly");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Half yearly");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Yearly");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Once Off");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormsComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Disable/Enable ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormsComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-slide-toggle", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormsComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormsComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " add_circle_outline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormsComponent_td_19_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const element_r16 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.goTo(element_r16.title); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " launch ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", element_r16.link);
} }
function FormsComponent_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 29);
} }
function FormsComponent_tr_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 30);
} }
const _c0 = function () { return [20]; };
class FormsComponent {
    constructor(dialog, spinner, router, setTitle) {
        this.dialog = dialog;
        this.spinner = spinner;
        this.router = router;
        this.setTitle = setTitle;
        this.page = 1;
        this.pageSize = 10;
        this.collectionSize = 10;
        this.ELEMENT_DATA = [
            { index: 1, title: 'Hazards Reported', link: ['/admin/forms/hazardRep/' + 'form'] },
            { index: 2, title: 'Notifiable Incidents', link: ['/admin/forms/incidentRep/' + 'Form'] },
            { index: 3, title: 'Toolbox Talk', link: ['/admin/forms/toolboxTalk/' + 'form'] },
            { index: 4, title: 'Site Inspection', link: ['/admin/forms/siteInspect/' + 'form'] },
            { index: 5, title: 'Risk Assessment', link: ['/admin/forms/riskAssessSWMS/' + 'form'] }
        ];
        this.formName = '';
        // formName =[] ;
        this.displayedColumns = ['index', 'formName', 'formFrequency', 'Disable/Enable', 'edit'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.ELEMENT_DATA);
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    goTo(title) {
        console.log("title", title);
        if (title === "Toolbox Talk") {
            this.router.navigate(["/admin/forms/tableData"]);
        }
        if (title === "Site Inspection") {
            this.router.navigate(["/admin/forms/siteinspectiontable"]);
        }
        if (title === "Hazards Reported") {
            this.router.navigate(["/admin/forms/hazardTable"]);
        }
        if (title === "Notifiable Incidents") {
            this.router.navigate(["/admin/forms/incidentsTable"]);
        }
        if (title === "Risk Assessment") {
            this.router.navigate(["/admin/forms/riskAssessTable"]);
        }
    }
    ngOnInit() {
        this.setTitle.setTitle('WHS-All Form');
    }
}
FormsComponent.ɵfac = function FormsComponent_Factory(t) { return new (t || FormsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_7__["SetTitleService"])); };
FormsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormsComponent, selectors: [["app-forms"]], viewQuery: function FormsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 23, vars: 5, consts: [[1, "col", "ml-2", "pt-3"], [1, ""], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "index"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "formName"], ["matColumnDef", "formFrequency"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "Disable/Enable"], ["matColumnDef", "edit"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", "aria-label", "Select page of periodic elements", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [1, "flex-start"], ["mat-header-cell", ""], ["aria-label", "Default select example", 1, "form-select", "form-control"], ["value", "daily"], ["value", "weekly"], ["value", "quaterly"], ["value", "halfYearly"], ["value", "yearly"], ["value", "onceOff"], ["color", "primary", "checked", ""], [2, "display", "flex", "justify-content", "space-around"], [1, "material-icons", 2, "font-size", "26px", "cursor", "pointer !important", 3, "routerLink"], [1, "material-icons", 2, "cursor", "pointer !important", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function FormsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Forms List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FormsComponent_th_6_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FormsComponent_td_7_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FormsComponent_th_9_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FormsComponent_td_10_Template, 3, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FormsComponent_th_12_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, FormsComponent_td_13_Template, 16, 0, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, FormsComponent_th_15_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, FormsComponent_td_16_Template, 2, 0, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, FormsComponent_th_18_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, FormsComponent_td_19_Template, 6, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, FormsComponent_tr_20_Template, 1, 0, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, FormsComponent_tr_21_Template, 1, 0, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "mat-paginator", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_x"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggle"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], styles: [".viewBtn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #007bff;\n  font-size: 21px !important;\n}\n\n  .mat-sort-header-container {\n  margin-left: 47% !important;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.select[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n\n.pt-3[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 32px;\n  font-weight: 700;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmb3Jtcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSwwQkFBQTtBQUNKOztBQUNBO0VBQ0UsMkJBQUE7QUFFRjs7QUFBQTtFQUNJLFdBQUE7QUFHSjs7QUFEQTtFQUNJLHNCQUFBO0FBSUo7O0FBRkU7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFLSiIsImZpbGUiOiJmb3Jtcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52aWV3QnRuIGkge1xyXG4gICAgY29sb3I6ICMwMDdiZmY7XHJcbiAgICBmb250LXNpemU6IDIxcHggIWltcG9ydGFudDtcclxufVxyXG46Om5nLWRlZXAgLm1hdC1zb3J0LWhlYWRlci1jb250YWluZXIge1xyXG4gIG1hcmdpbi1sZWZ0OiA0NyUgIWltcG9ydGFudDtcclxufVxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbi5zZWxlY3R7XHJcbiAgICB3aWR0aDoxMDAlIWltcG9ydGFudDtcclxufVxyXG4gIC5wdC0zIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgZm9udC1mYW1pbHk6IEludGVyLCBzYW5zLXNlcmlmO1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-forms',
                templateUrl: './forms.component.html',
                styleUrls: ['./forms.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_7__["SetTitleService"] }]; }, { sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"]]
        }], paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]]
        }] }); })();


/***/ }),

/***/ "qnD2":
/*!**********************************************************************!*\
  !*** ./src/app/views/forms/display-table/display-table.component.ts ***!
  \**********************************************************************/
/*! exports provided: DisplayTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayTableComponent", function() { return DisplayTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "5QHs");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "LUZP");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "OaSA");
/* harmony import */ var src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils/services/logical-form-info.service */ "wbBK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ "ZFy/");











function DisplayTableComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DisplayTableComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r15 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r15 + 1);
} }
function DisplayTableComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DisplayTableComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r16.customerName);
} }
function DisplayTableComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DisplayTableComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r17.custConct);
} }
function DisplayTableComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DisplayTableComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r18.custEmail, " ");
} }
function DisplayTableComponent_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Site Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DisplayTableComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r19.siteName, " ");
} }
function DisplayTableComponent_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DisplayTableComponent_td_24_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DisplayTableComponent_td_24_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const element_r20 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.edit(element_r20._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DisplayTableComponent_td_24_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const element_r20 = ctx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.delete(element_r20._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DisplayTableComponent_tr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 23);
} }
function DisplayTableComponent_tr_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 24);
} }
const _c0 = function () { return ["/admin/forms"]; };
const _c1 = function () { return [20]; };
class DisplayTableComponent {
    constructor(logicalFormInfo, router) {
        this.logicalFormInfo = logicalFormInfo;
        this.router = router;
        this.displayedColumns = ['position', 'Name', "Phone", "Email", "Site", 'Action'];
    }
    ngOnInit() {
        this.getToolBox();
    }
    ngAfterViewInit() {
        this.tempArray.paginator = this.paginator;
        this.tempArray.sort = this.sort;
    }
    delete(id) {
        this.logicalFormInfo.deleteToolBox(id).subscribe((res) => {
            console.log("deleted", res);
            this.getToolBox();
        });
    }
    getToolBox() {
        this.logicalFormInfo.gettoolBox().subscribe((res) => {
            this.showDatas = res.data;
            this.tempArray = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.showDatas);
            this.tempArray.paginator = this.paginator;
            this.tempArray.sort = this.sort;
            console.log("get res", this.showDatas);
        });
    }
    edit(id) {
        this.router.navigate(["/admin/forms/toolboxTalk/" + id]);
    }
}
DisplayTableComponent.ɵfac = function DisplayTableComponent_Factory(t) { return new (t || DisplayTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__["LogicalFormInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
DisplayTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DisplayTableComponent, selectors: [["app-display-table"]], viewQuery: function DisplayTableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 28, vars: 7, consts: [[1, "btn", "btn-outline-primary", 3, "routerLink"], ["aria-hidden", "true", 1, "fa", "fa-arrow-left"], [1, "col", "ml-2", "pt-3"], [1, ""], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Name"], ["matColumnDef", "Phone"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "Email"], ["matColumnDef", "Site"], ["matColumnDef", "Action"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", "aria-label", "Select page of periodic elements", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], [2, "display", "flex", "justify-content", "space-around"], ["matTooltip", "Edit", 1, "material-icons", 2, "color", "#c1c1c1", "cursor", "pointer !important", 3, "click"], ["matTooltip", "Delete", 1, "material-icons", 2, "color", "#c1c1c1", "cursor", "pointer !important", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function DisplayTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " ToolBox Talk List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DisplayTableComponent_th_8_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DisplayTableComponent_td_9_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DisplayTableComponent_th_11_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DisplayTableComponent_td_12_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DisplayTableComponent_th_14_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DisplayTableComponent_td_15_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](16, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DisplayTableComponent_th_17_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, DisplayTableComponent_td_18_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](19, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, DisplayTableComponent_th_20_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, DisplayTableComponent_td_21_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](22, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, DisplayTableComponent_th_23_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, DisplayTableComponent_td_24_Template, 6, 0, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, DisplayTableComponent_tr_25_Template, 1, 0, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, DisplayTableComponent_tr_26_Template, 1, 0, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "mat-paginator", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.tempArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltip"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]], styles: [".viewBtn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #007bff;\n  font-size: 21px !important;\n}\n\n  .mat-sort-header-container {\n  margin-left: 47% !important;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.select[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n\n.pt-3[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 32px;\n  font-weight: 700;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZGlzcGxheS10YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSwwQkFBQTtBQUNKOztBQUNBO0VBQ0UsMkJBQUE7QUFFRjs7QUFBQTtFQUNJLFdBQUE7QUFHSjs7QUFEQTtFQUNJLHNCQUFBO0FBSUo7O0FBRkU7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFLSiIsImZpbGUiOiJkaXNwbGF5LXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZpZXdCdG4gaSB7XHJcbiAgICBjb2xvcjogIzAwN2JmZjtcclxuICAgIGZvbnQtc2l6ZTogMjFweCAhaW1wb3J0YW50O1xyXG59XHJcbjo6bmctZGVlcCAubWF0LXNvcnQtaGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLWxlZnQ6IDQ3JSAhaW1wb3J0YW50O1xyXG59XHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuLnNlbGVjdHtcclxuICAgIHdpZHRoOjEwMCUhaW1wb3J0YW50O1xyXG59XHJcbiAgLnB0LTMge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgICBmb250LWZhbWlseTogSW50ZXIsIHNhbnMtc2VyaWY7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DisplayTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-display-table',
                templateUrl: './display-table.component.html',
                styleUrls: ['./display-table.component.scss']
            }]
    }], function () { return [{ type: src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__["LogicalFormInfoService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"]]
        }] }); })();


/***/ }),

/***/ "sE/3":
/*!************************************************************************************!*\
  !*** ./src/app/views/forms/risk-assesment-table/risk-assesment-table.component.ts ***!
  \************************************************************************************/
/*! exports provided: RiskAssesmentTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiskAssesmentTableComponent", function() { return RiskAssesmentTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "5QHs");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "LUZP");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "OaSA");
/* harmony import */ var src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils/services/logical-form-info.service */ "wbBK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ "ZFy/");











function RiskAssesmentTableComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RiskAssesmentTableComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r15 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r15 + 1);
} }
function RiskAssesmentTableComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RiskAssesmentTableComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r16.customerName);
} }
function RiskAssesmentTableComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RiskAssesmentTableComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r17.custConct);
} }
function RiskAssesmentTableComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RiskAssesmentTableComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r18.custEmail, " ");
} }
function RiskAssesmentTableComponent_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Site Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RiskAssesmentTableComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r19.siteName, " ");
} }
function RiskAssesmentTableComponent_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RiskAssesmentTableComponent_td_24_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RiskAssesmentTableComponent_td_24_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const element_r20 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.edit(element_r20._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RiskAssesmentTableComponent_td_24_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const element_r20 = ctx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.delete(element_r20._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RiskAssesmentTableComponent_tr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 23);
} }
function RiskAssesmentTableComponent_tr_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 24);
} }
const _c0 = function () { return ["/admin/forms"]; };
const _c1 = function () { return [20]; };
class RiskAssesmentTableComponent {
    constructor(logicalFormInfo, router) {
        this.logicalFormInfo = logicalFormInfo;
        this.router = router;
        this.displayedColumns = ['position', 'Name', "Phone", "Email", "Site", 'Action'];
    }
    ngOnInit() {
        this.getToolBox();
    }
    ngAfterViewInit() {
        this.tempArray.paginator = this.paginator;
        this.tempArray.sort = this.sort;
    }
    delete(id) {
        this.logicalFormInfo.deleteAssessment(id).subscribe((res) => {
            console.log("deleted", res);
            this.getToolBox();
        });
    }
    getToolBox() {
        this.logicalFormInfo.getAllassessmet().subscribe((res) => {
            this.showDatas = res.data;
            this.tempArray = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.showDatas);
            this.tempArray.paginator = this.paginator;
            this.tempArray.sort = this.sort;
            console.log("get res", this.showDatas);
        });
    }
    edit(id) {
        this.router.navigate(["/admin/forms/riskAssessSWMS/" + id]);
    }
}
RiskAssesmentTableComponent.ɵfac = function RiskAssesmentTableComponent_Factory(t) { return new (t || RiskAssesmentTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__["LogicalFormInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
RiskAssesmentTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RiskAssesmentTableComponent, selectors: [["app-risk-assesment-table"]], viewQuery: function RiskAssesmentTableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 28, vars: 7, consts: [[1, "btn", "btn-outline-primary", 3, "routerLink"], ["aria-hidden", "true", 1, "fa", "fa-arrow-left"], [1, "col", "ml-2", "pt-3"], [1, ""], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Name"], ["matColumnDef", "Phone"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "Email"], ["matColumnDef", "Site"], ["matColumnDef", "Action"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", "aria-label", "Select page of periodic elements", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], [2, "display", "flex", "justify-content", "space-around"], ["matTooltip", "Edit", 1, "material-icons", 2, "color", "#c1c1c1", "cursor", "pointer !important", 3, "click"], ["matTooltip", "Delete", 1, "material-icons", 2, "color", "#c1c1c1", "cursor", "pointer !important", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function RiskAssesmentTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Risk Assessment Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RiskAssesmentTableComponent_th_8_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RiskAssesmentTableComponent_td_9_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RiskAssesmentTableComponent_th_11_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, RiskAssesmentTableComponent_td_12_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, RiskAssesmentTableComponent_th_14_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, RiskAssesmentTableComponent_td_15_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](16, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, RiskAssesmentTableComponent_th_17_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RiskAssesmentTableComponent_td_18_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](19, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, RiskAssesmentTableComponent_th_20_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, RiskAssesmentTableComponent_td_21_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](22, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, RiskAssesmentTableComponent_th_23_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, RiskAssesmentTableComponent_td_24_Template, 6, 0, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, RiskAssesmentTableComponent_tr_25_Template, 1, 0, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, RiskAssesmentTableComponent_tr_26_Template, 1, 0, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "mat-paginator", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.tempArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltip"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]], styles: [".viewBtn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #007bff;\n  font-size: 21px !important;\n}\n\n  .mat-sort-header-container {\n  margin-left: 47% !important;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.select[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n\n.pt-3[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 32px;\n  font-weight: 700;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccmlzay1hc3Nlc21lbnQtdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsMEJBQUE7QUFDSjs7QUFDQTtFQUNFLDJCQUFBO0FBRUY7O0FBQUE7RUFDSSxXQUFBO0FBR0o7O0FBREE7RUFDSSxzQkFBQTtBQUlKOztBQUZFO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBS0oiLCJmaWxlIjoicmlzay1hc3Nlc21lbnQtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlld0J0biBpIHtcclxuICAgIGNvbG9yOiAjMDA3YmZmO1xyXG4gICAgZm9udC1zaXplOiAyMXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtc29ydC1oZWFkZXItY29udGFpbmVyIHtcclxuICBtYXJnaW4tbGVmdDogNDclICFpbXBvcnRhbnQ7XHJcbn1cclxudGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4uc2VsZWN0e1xyXG4gICAgd2lkdGg6MTAwJSFpbXBvcnRhbnQ7XHJcbn1cclxuICAucHQtMyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICAgIGZvbnQtZmFtaWx5OiBJbnRlciwgc2Fucy1zZXJpZjtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RiskAssesmentTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-risk-assesment-table',
                templateUrl: './risk-assesment-table.component.html',
                styleUrls: ['./risk-assesment-table.component.scss']
            }]
    }], function () { return [{ type: src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__["LogicalFormInfoService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"]]
        }] }); })();


/***/ }),

/***/ "woRl":
/*!************************************************************************************!*\
  !*** ./src/app/views/forms/risk-assessment-swms/risk-assessment-swms.component.ts ***!
  \************************************************************************************/
/*! exports provided: RiskAssessmentSWMSComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiskAssessmentSWMSComponent", function() { return RiskAssessmentSWMSComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "ltgo");
/* harmony import */ var _add_item_add_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-item/add-item.component */ "KMw5");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "+z1p");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/utils/services/logical-form-info.service */ "wbBK");
/* harmony import */ var src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/utils/services/set-title.service */ "yZxC");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tabs */ "M9ds");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular2-signaturepad */ "r1zJ");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "zioG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");



















const _c0 = ["projectManager"];
const _c1 = ["signaturePad1Div"];
const _c2 = ["Signature1"];
const _c3 = ["Signature2"];
function RiskAssessmentSWMSComponent_option_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const state_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", state_r25._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](state_r25.title);
} }
function RiskAssessmentSWMSComponent_option_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobNo_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", jobNo_r26._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](jobNo_r26.jobNumber);
} }
function RiskAssessmentSWMSComponent_option_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mang_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", mang_r27._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](mang_r27.title);
} }
function RiskAssessmentSWMSComponent_ng_container_80_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RiskAssessmentSWMSComponent_ng_container_80_Template_input_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const i_r29 = ctx.index; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r30.onJobtaskSelect($event, ctx_r30.jobTaskData[i_r29]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r29 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", ctx_r3.jobTaskData[i_r29]._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", i_r29 + "jt")("value", ctx_r3.jobTaskData[i_r29]._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", i_r29 + "jt");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.jobTaskData[i_r29].title);
} }
function RiskAssessmentSWMSComponent_div_227_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RiskAssessmentSWMSComponent_div_227_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); const i_r33 = ctx.index; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r34.onRiskChange($event, ctx_r34.highRiskConstruction[i_r33]._id, i_r33); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r33 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", ctx_r4.highRiskConstruction[i_r33]._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", i_r33 + "hrc")("checked", ctx_r4.riskArr[i_r33]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", i_r33 + "hrc");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.highRiskConstruction[i_r33].title);
} }
function RiskAssessmentSWMSComponent_div_233_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RiskAssessmentSWMSComponent_div_233_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39); const i_r37 = ctx.index; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r38.onPPEChange($event, ctx_r38.PPEselection[i_r37]._id, i_r37); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r37 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", ctx_r5.PPEselection[i_r37]._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", i_r37 + "ppes")("checked", ctx_r5.ppeArr[i_r37]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", i_r37 + "ppes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.PPEselection[i_r37].title);
} }
function RiskAssessmentSWMSComponent_div_239_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RiskAssessmentSWMSComponent_div_239_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43); const i_r41 = ctx.index; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r42.onLicenseChange($event, ctx_r42.licenseAndQualification[i_r41]._id, i_r41); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r41 = ctx.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", ctx_r6.licenseAndQualification[i_r41]._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", i_r41 + "l&q")("checked", ctx_r6.licenceArr[i_r41]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", i_r41 + "l&q");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.licenseAndQualification[i_r41].title);
} }
function RiskAssessmentSWMSComponent_option_300_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const state_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", state_r44._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](state_r44.title);
} }
function RiskAssessmentSWMSComponent_option_321_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobNo_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", jobNo_r45._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](jobNo_r45.jobNumber);
} }
function RiskAssessmentSWMSComponent_option_329_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mang_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", mang_r46._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](mang_r46.title);
} }
function RiskAssessmentSWMSComponent_option_337_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RiskAssessmentSWMSComponent_option_338_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jurisdiction_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", jurisdiction_r47._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](jurisdiction_r47.title);
} }
function RiskAssessmentSWMSComponent_option_344_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RiskAssessmentSWMSComponent_option_345_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const safetyLegislation_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", safetyLegislation_r48._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" Act: ", safetyLegislation_r48.act, "\u00A0 Regulation:", safetyLegislation_r48.regulation, " ");
} }
function RiskAssessmentSWMSComponent_option_351_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RiskAssessmentSWMSComponent_option_352_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const regulator_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", regulator_r49._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](regulator_r49.title);
} }
function RiskAssessmentSWMSComponent_h2_354_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Code Of Practices");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RiskAssessmentSWMSComponent_div_356_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r50 = ctx.$implicit;
    const i_r51 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", i_r51 + "cop")("checked", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", i_r51 + "cop");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r50.title);
} }
function RiskAssessmentSWMSComponent_div_361_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RiskAssessmentSWMSComponent_div_361_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r55); const i_r53 = ctx.index; const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r54.onRiskChange2($event, ctx_r54.highRiskConstruction[i_r53]._id, i_r53); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r53 = ctx.index;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", ctx_r20.highRiskConstruction[i_r53]._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", i_r53 + "hrc")("checked", ctx_r20.riskArr[i_r53]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", i_r53 + "hrc");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r20.highRiskConstruction[i_r53].title);
} }
function RiskAssessmentSWMSComponent_div_507_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RiskAssessmentSWMSComponent_div_507_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r59); const i_r57 = ctx.index; const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r58.onPPEChange2($event, ctx_r58.PPEselection[i_r57]._id, i_r57); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r57 = ctx.index;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", ctx_r21.PPEselection[i_r57]._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", i_r57 + "ppes")("checked", ctx_r21.ppeArr[i_r57]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", i_r57 + "ppes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r21.PPEselection[i_r57].title);
} }
function RiskAssessmentSWMSComponent_ng_container_509_div_4_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RiskAssessmentSWMSComponent_ng_container_509_div_4_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r66 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r66.title, " ");
} }
function RiskAssessmentSWMSComponent_ng_container_509_div_4_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RiskAssessmentSWMSComponent_ng_container_509_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Name of Chemical");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RiskAssessmentSWMSComponent_ng_container_509_div_4_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r68); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r67.addChemical(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "add_circle_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "select", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, RiskAssessmentSWMSComponent_ng_container_509_div_4_option_8_Template, 2, 0, "option", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, RiskAssessmentSWMSComponent_ng_container_509_div_4_option_9_Template, 2, 1, "option", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Hazardous");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "select", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, RiskAssessmentSWMSComponent_ng_container_509_div_4_option_20_Template, 2, 0, "option", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "option", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "option", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Qty");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Expiry Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "input", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "label", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Attach SDS Sheet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "input", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RiskAssessmentSWMSComponent_ng_container_509_div_4_Template_span_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r68); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r69.addActionSDSRegister(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "add_circle_outline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "span", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RiskAssessmentSWMSComponent_ng_container_509_div_4_Template_span_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r68); const i_r62 = ctx.index; const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r70.removeSDSRegister(i_r62); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, " remove_circle_outline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r62 = ctx.index;
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r60.isSelected[i_r62]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r60.allChemicals);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r60.isHazardous[i_r62]);
} }
function RiskAssessmentSWMSComponent_ng_container_509_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "SDS Registor");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](3, 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, RiskAssessmentSWMSComponent_ng_container_509_div_4_Template, 45, 4, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r22.sdsRegisterFA().controls);
} }
function RiskAssessmentSWMSComponent_div_512_li_11_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RiskAssessmentSWMSComponent_div_512_li_11_div_4_Template_mat_icon_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r83); const hazard_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const i_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r81.editHazrds("editIdentifyHazards", hazard_r78.title, i_r72); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-icon", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RiskAssessmentSWMSComponent_div_512_li_11_div_4_Template_mat_icon_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r83); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const hazard_r78 = ctx_r86.$implicit; const j_r79 = ctx_r86.index; const i_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r85.deleteHazrds("identifyHazards", hazard_r78.title, i_r72, j_r79); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RiskAssessmentSWMSComponent_div_512_li_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, RiskAssessmentSWMSComponent_div_512_li_11_div_4_Template, 5, 0, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hazard_r78 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](hazard_r78.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !hazard_r78.id);
} }
function RiskAssessmentSWMSComponent_div_512_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r88 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r88._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r88.title);
} }
function RiskAssessmentSWMSComponent_div_512_li_24_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RiskAssessmentSWMSComponent_div_512_li_24_div_4_Template_mat_icon_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r94); const contrlActReq_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const i_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r92.editHazrds("editCtrlActreq", contrlActReq_r89.title, i_r72); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-icon", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RiskAssessmentSWMSComponent_div_512_li_24_div_4_Template_mat_icon_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r94); const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const contrlActReq_r89 = ctx_r97.$implicit; const j_r90 = ctx_r97.index; const i_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r96.deleteHazrds("ctrlActreq", contrlActReq_r89.title, i_r72, j_r90); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RiskAssessmentSWMSComponent_div_512_li_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, RiskAssessmentSWMSComponent_div_512_li_24_div_4_Template, 5, 0, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contrlActReq_r89 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](contrlActReq_r89.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !contrlActReq_r89.id);
} }
function RiskAssessmentSWMSComponent_div_512_option_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r99 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r99._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r99.title);
} }
function RiskAssessmentSWMSComponent_div_512_option_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r100 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r100.title, " ");
} }
function RiskAssessmentSWMSComponent_div_512_Template(rf, ctx) { if (rf & 1) {
    const _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Identity Hazards");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RiskAssessmentSWMSComponent_div_512_Template_span_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r102); const i_r72 = ctx.index; const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r101.addItem("identifyHazards", i_r72); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "add_circle_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ol", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, RiskAssessmentSWMSComponent_div_512_li_11_Template, 5, 2, "li", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](12, 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Risk");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "select", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, RiskAssessmentSWMSComponent_div_512_option_17_Template, 2, 2, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Control and Action Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RiskAssessmentSWMSComponent_div_512_Template_span_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r102); const i_r72 = ctx.index; const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r103.addItem("ctrlActreq", i_r72); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "add_circle_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ol", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, RiskAssessmentSWMSComponent_div_512_li_24_Template, 5, 2, "li", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](26, 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Residual Risk");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "select", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, RiskAssessmentSWMSComponent_div_512_option_31_Template, 2, 2, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](32, 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "label", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Person Responsible");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "select", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, RiskAssessmentSWMSComponent_div_512_option_37_Template, 2, 1, "option", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r71 = ctx.$implicit;
    const i_r72 = ctx.index;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("Step:", i_r72 + 1, " ", item_r71.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", item_r71.allHazardsTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r23.riskLevel);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", item_r71.allContrlActReqTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r23.resiRiskLevel);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("size", item_r71.staffTitle.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", item_r71.staffTitle);
} }
const _c4 = function () { return ["/admin/forms"]; };
class RiskAssessmentSWMSComponent {
    constructor(router, dialog, fb, logicalFormInfo, activatedRoute, setTitle) {
        this.router = router;
        this.dialog = dialog;
        this.fb = fb;
        this.logicalFormInfo = logicalFormInfo;
        this.activatedRoute = activatedRoute;
        this.setTitle = setTitle;
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_5__;
        this.RiskAssessment = true;
        this.SWMSShow = false;
        this.chemicalTask = false;
        //checkboxes array
        this.jobTask = [];
        this.staff = [];
        this.resiRiskLevel = [];
        this.riskLevel = [];
        this.highRiskConstruction = [];
        this.PPEselection = [];
        this.licenseAndQualification = [];
        this.checkArray = [];
        this.allJobNumbers = [];
        this.allHazards = [];
        this.allContrlActReq = [];
        this.isSelected = [];
        this.isHazardous = [];
        this.hasJuridiction = false;
        this.hasLegist = false;
        this.hasRegulation = false;
        this.highRiskConstruction2 = [
            {
                label: 'Working in or near trenches or shafts deeper than 1.5metres',
                value: '',
            },
            { label: 'Work in or near a confined space', value: '' },
            {
                label: 'Work in an area that may have a contaminated or flammable atmosphere',
                value: '',
            },
            { label: 'Working around or near mobile plant', value: '' },
            { label: 'Work with near or near asbestos', value: '' },
            { label: 'Working with hazardous substances', value: '' },
            { label: 'Working with or near tilt-up/precast concrete', value: '' },
            { label: 'Risk of falls higher than 2 metres', value: '' },
            {
                label: 'Working near on or adjacent to a road or rail corridor',
                value: '',
            },
            { label: 'Working on or near telecommunication tower', value: '' },
            { label: 'Working on or near telecommunication tower', value: '' },
            { label: 'Work near explosives', value: '' },
            {
                label: 'Work in or near water or other liquid that involves a risk of drowning',
                value: '',
            },
            { label: 'Demolition of load-bearing structure', value: '' },
            { label: 'Diving work', value: '' },
        ];
        this.PPEselection2 = [
            { label: 'Disposable dust mask', value: '' },
            { label: 'Dust Mas', value: '' },
            { label: 'Face shield', value: '' },
            { label: 'Full face respirator', value: '' },
            { label: 'Gttors', value: '' },
            { label: 'Half face respirator', value: '' },
            { label: 'Hard Hat', value: '' },
            { label: 'Hearing protection', value: '' },
            { label: 'High-Vis Clothing', value: '' },
            { label: 'Lock Out Tags', value: '' },
            { label: 'Long sleeve/Long pants', value: '' },
            { label: 'Out of Service Tags', value: '' },
            { label: 'Protective gloves', value: '' },
            { label: 'Rescue kit', value: '' },
            { label: 'Safety boots', value: '' },
            { label: 'Safety glasses', value: '' },
            { label: 'Sun Screen', value: '' },
            { label: 'torch', value: '' },
            { label: 'Wide Brim Hat', value: '' },
        ];
        this.secondEditor = `
  <h1 class='form-control' >
  <strong>Worker consultation, instruction, training, toolbox talks, review,
  acceptance record:</strong>
  </h1>
  <br /><br />
  
  <h3 class='txt_1'>
    Only persons who have completed the singoff are authorised to work
    on the relevent tasks covered by this document. <br />
    Note: Work must be performed in accordance with this SWMS, any Risk
    Assessment prepared in relation to this work and any <br />
    relevent Safe WorkProcedures.<br />
    This SWMS must be accessible for inspection untill the energised
    electrical work to which this SWMS relates is completed. If the
    <br />
    SWMS is revised, all version should be kept.<br />
    If a Notifiable incident occurs in relation to the high-risk
    construction work in this SWMS, the SWMS must be kept for at least 2
    years<br />
    from the date of the Notifiable incident.<br /><br />
    If Changes are made to the work practice and the content of the SWMS
    workers will need sign to confirm that they haverecieved an<br />
    updated briefing, undestand the content and will comply with the
    requirements.<br /><br />
    Where there are other parties working adjascent to the contractor
    and the work activity that could impact upon the safety and
    welfare<br />
    of others not directly employed, SWMS will make references to how
    they will coordinate the work activity and where applicable<br />
    communicate to the other parties.<br /><br />
  </h3>`;
        this.riskArr = [];
        this.COPArr = [];
        this.ppeArr = [];
        this.taskArr = [];
        this.licenceArr = [];
        this.jobTaskData = [];
        this.jobTaskSelected = [];
        this.hazard = [];
        this.projectMang = [];
        this.allChemicals = [];
        this.allCOPSelected = [];
        this.regulatorData = [];
        this.safety = [];
        this.JurisdictionData = [];
        this.states = [];
        this.signaturePadOptions1 = {
            // passed through to szimek/signature_pad constructor
            minWidth: 1,
            canvasWidth: 450,
            canvasHeight: 100,
        };
        this.signaturePadOptions2 = {
            // passed through to szimek/signature_pad constructor
            minWidth: 1,
            canvasWidth: 430,
            canvasHeight: 100,
        };
        this.id = this.activatedRoute.snapshot.params.id;
        console.log("id", this.id);
        this.riskAssessmentFb = this.fb.group({
            SWMSTab: this.fb.array([]),
            jobNumber: [''],
            siteName: [''],
            customerName: [''],
            streetNo: [''],
            streetAddr: [''],
            suburb: [''],
            town: [''],
            custConct: [''],
            custConctPh: [''],
            custEmail: [''],
            employee1: [''],
            employee2: [''],
            dateTime: [''],
            statesSWMS: [''],
            projectManager: [''],
            date: [''],
            projectManagerSWMS: [''],
            jurisdiction: [''],
            safetyLeg: [''],
            regulator: [''],
            location: [''],
            qty: [],
            expiryDate: [''],
            hazardous: this.fb.array([]),
            ppeSelection: this.fb.array([]),
            file: this.fb.array([]),
            SDSRegister: this.fb.array([]),
            riskLevel: this.fb.array([]),
            residualRisk: this.fb.array([]),
            persResp: this.fb.array([]),
            jobTask: this.fb.array([]),
            riskConstruction: this.fb.array([]),
            riskConstruction2: this.fb.array([]),
            PPEselection: this.fb.array([]),
            PPESelection2: this.fb.array([]),
            licence: this.fb.array([]),
            editor: [""],
            signature1: [""],
            signature2: [""]
        });
    }
    ngOnInit() {
        this.getAllJobTask();
        this.getAllPPE();
        this.getAllHighRisk();
        this.getAllLicence();
        this.getAllProjectMang();
        this.addActionSDSRegister();
        this.getAllJobNumber();
        this.getAllResidualRiskLevel();
        this.getAllStaff();
        this.getAllRiskLevel();
        this.getAllChemical();
        this.getAllHazard();
        this.getAllContrActReq();
        this.getAllRegulator();
        this.getAllSafe();
        this.getAllState();
        this.getAllJurisdiction();
        if (this.id != "form") {
            this.getAssessmentByid(this.id);
        }
        this.setTitle.setTitle('WHS-Risk Assesment Form');
        // this.riskAssessmentFb.get('jobNumber').valueChanges.subscribe((res) => {
        //   if (res) {
        //     console.log('jobNumberres', res);
        //     this.allJobNumbers.forEach((item) => {
        //       if (res === item._id) {
        //         console.log('Id found', item);
        //         this.riskAssessmentFb.patchValue({
        //           siteName: item.siteName,
        //           customerName: item.customerName,
        //           streetNo: item.streetNumber,
        //           streetAddr: item.streetAddress,
        //           subUrb: item.suburb,
        //           statesSWMS: item.state,
        //           custConct: item.customerContact,
        //           custConctPh: item.customerContactPhone,
        //           custEmail: item.customerEmail,
        //           jobNumberDupl: this.riskAssessmentFb.get('jobNumber').value,
        //         });
        //       }
        //     });
        //   }
        //  // this.riskAssessmentFb.get('jobNumber').updateValueAndValidity();
        // });
        this.riskAssessmentFb.get('statesSWMS').valueChanges.subscribe((res) => {
            if (res) {
                console.log(res);
                for (let i = 0; i < this.states.length; i++) {
                    if (res === this.states[i]._id) {
                        console.log("id found");
                        this.riskAssessmentFb.get('jurisdiction').setValue(this.states[i].jurisdictionId._id);
                        this.riskAssessmentFb.get('safetyLeg').setValue(this.states[i].safetyLegislationId._id);
                        this.riskAssessmentFb.get('regulator').setValue(this.states[i].regulatorId._id);
                        break;
                    }
                }
            }
        });
    }
    getAssessmentByid(id) {
        console.log("iddd", id);
        this.logicalFormInfo.getAssessmentbyId(id).subscribe((res) => {
            var _a;
            this.allCOPSelected = [];
            console.log("assesment by id", res.data);
            let check = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { this.signaturePad1 != null; });
            check().then(() => {
                this.signaturePad1.fromDataURL(res.data.signature1);
            });
            let check1 = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { this.signaturePad2 != null; });
            check1().then(() => {
                this.signaturePad2.fromDataURL(res.data.signature2);
            });
            if ((res === null || res === void 0 ? void 0 : res.data.jurisdiction) != "") {
                this.hasJuridiction = true;
            }
            if ((res === null || res === void 0 ? void 0 : res.data.safetyLeg) != "") {
                this.hasLegist = true;
            }
            if ((res === null || res === void 0 ? void 0 : res.data.regulator) != "") {
                this.hasRegulation = true;
            }
            this.riskAssessmentFb.patchValue(Object.assign({}, res.data));
            const item = this.riskAssessmentFb.controls['SDSRegister'];
            while (item.length > 0) {
                item.removeAt(0);
            }
            (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.SDSRegister.forEach((element, index) => {
                this.chemicalTask = true;
                if ((element === null || element === void 0 ? void 0 : element.chemicalName) != "") {
                    this.isSelected[index] = true;
                }
                if ((element === null || element === void 0 ? void 0 : element.hazardous) != "") {
                    this.isHazardous[index] = true;
                }
                this.PushActionSDSRegister(element);
            });
            res.data.riskLevel.forEach(element => {
                console.log("riskLevel", element.riskLevel);
                this.PushActionRiskLevel(element);
            });
            res.data.residualRisk.forEach(element => {
                this.PushActionResiRiskLevel(element);
            });
            res.data.riskLevel.forEach(element => {
                this.PushActionPersonRes(element);
            });
            res.data.codeOfPract.forEach(element => {
                console.log("eleee", element);
                this.allCOPSelected.push(element);
            });
            res.data.identifyHazards.forEach((element, index) => {
                console.log("eleeeme", element);
                this.checkHazards(element, index);
                //  element.allHazardsTitle.forEach(ele => { 
                //   this.checkHazards(ele,index);
                //  });
            });
            res.data.jobTask.forEach((element, index) => {
                this.checkJobtask(element, index);
                // this.checkCOP(element,index);
            });
            res.data.PPEselection.forEach((element, index) => {
                this.checkPPE(element, index);
            });
            res.data.PPESelection2.forEach((element, index) => {
                this.checkPPE(element, index);
            });
            res.data.riskConstruction.forEach((element, index) => {
                this.checkRisk(element, index);
            });
            res.data.licence.forEach((element, index) => {
                this.checkLicense(element, index);
            });
        });
    }
    checkHazards(data, i) {
        for (let j = 0; j < this.jobTaskData.length; j++) {
            if (this.jobTaskData[j]._id == data._id) {
                this.jobTaskData[j].allHazardsTitle = [];
                this.jobTaskData[j].allContrlActReqTitle = [];
                this.jobTaskData[j].allHazardsTitle = data.allHazardsTitle;
                this.jobTaskData[j].allContrlActReqTitle = data.allContrlActReqTitle;
                console.log("allHazardsTitle", this.jobTaskData[j].allHazardsTitle);
                console.log("allHazardsTitle", this.jobTaskData[j].allContrlActReqTitle);
            }
        }
    }
    checkJobtask(element, index) {
        let z = this.jobTaskData[index]._id;
        console.log("z", z);
        console.log("ele", element[z]);
        let c = this.riskAssessmentFb.controls['jobTask'];
        let d = c.controls[index];
        if (element[z]) {
            d.controls[z].setValue(element[z]);
            this.jobTaskSelected.push(this.jobTaskData[index]);
            console.log("job selected", this.jobTaskSelected);
        }
    }
    checkRisk(element, index) {
        let z = this.highRiskConstruction[index]._id;
        console.log("ele", element[z]);
        let c = this.riskAssessmentFb.controls['riskConstruction'];
        let d = c.controls[index];
        if (element[z]) {
            d.controls[z].setValue(element[z]);
        }
    }
    checkPPE(element, index) {
        let z = this.PPEselection[index]._id;
        console.log("ele", element[z]);
        let c = this.riskAssessmentFb.controls['PPEselection'];
        let d = c.controls[index];
        if (element[z]) {
            d.controls[z].setValue(element[z]);
        }
    }
    checkLicense(element, index) {
        let z = this.licenseAndQualification[index]._id;
        console.log("ele", element[z]);
        let c = this.riskAssessmentFb.controls['licence'];
        let d = c.controls[index];
        if (element[z]) {
            d.controls[z].setValue(element[z]);
        }
    }
    jobNoSel() {
        this.allJobNumbers.forEach((item) => {
            if (this.riskAssessmentFb.get('jobNumber').value === item._id) {
                console.log('Id found', item);
                this.riskAssessmentFb.patchValue({
                    siteName: item.siteName,
                    customerName: item.customerName,
                    streetNo: item.streetNumber,
                    streetAddr: item.streetAddress,
                    subUrb: item.suburb,
                    statesSWMS: item.stateId._id,
                    custConct: item.customerContact,
                    custConctPh: item.customerContactPhone,
                    custEmail: item.customerEmail,
                    jobNumber: this.riskAssessmentFb.get('jobNumber').value,
                });
            }
        });
        this.riskAssessmentFb.get('jobNumber').updateValueAndValidity();
    }
    addActionRiskLevel() {
        {
            this.riskLevelFA().push(this.riskLevelFG());
        }
    }
    PushActionRiskLevel(data) {
        {
            this.riskLevelFA().push(this.GetriskLevelFG(data));
        }
    }
    addActionResiRiskLevel() {
        {
            this.residlRiskLevelFA().push(this.residlRiskLevelFG());
        }
    }
    PushActionResiRiskLevel(data) {
        {
            this.residlRiskLevelFA().push(this.GetresidlRiskLevelFG(data));
        }
    }
    addActionPersonRes() {
        {
            this.personResFA().push(this.personResFG());
        }
    }
    PushActionPersonRes(data) {
        {
            this.personResFA().push(this.GetpersonResFG(data));
        }
    }
    addActionSDSRegister() {
        {
            this.sdsRegisterFA().push(this.sdsRegisterFG());
        }
    }
    PushActionSDSRegister(data) {
        {
            this.sdsRegisterFA().push(this.GetsdsRegisterFG(data));
        }
    }
    jobtask() {
        return this.riskAssessmentFb.get('jobTask');
    }
    COP() {
        return this.riskAssessmentFb.get('CodeOfPract');
    }
    riskConstruct() {
        return this.riskAssessmentFb.get('riskConstruction');
    }
    riskConstruct2() {
        return this.riskAssessmentFb.get('riskConstruction2');
    }
    ppe() {
        return this.riskAssessmentFb.get('PPEselection');
    }
    ppe2() {
        return this.riskAssessmentFb.get('PPESelection2');
    }
    Licence() {
        return this.riskAssessmentFb.get('licence');
    }
    riskLevelFA() {
        return this.riskAssessmentFb.get('riskLevel');
    }
    residlRiskLevelFA() {
        return this.riskAssessmentFb.get('residualRisk');
    }
    sdsRegisterFA() {
        return this.riskAssessmentFb.get('SDSRegister');
    }
    personResFA() {
        return this.riskAssessmentFb.get('persResp');
    }
    riskLevelFG() {
        return this.fb.group({
            riskLevel: [''],
        });
    }
    GetriskLevelFG(data) {
        return this.fb.group({
            riskLevel: data.riskLevel
        });
    }
    residlRiskLevelFG() {
        return this.fb.group({
            resiRiskLevel: [''],
        });
    }
    GetresidlRiskLevelFG(data) {
        return this.fb.group({
            resiRiskLevel: data.resiRiskLevel
        });
    }
    personResFG() {
        return this.fb.group({
            personRes: [''],
        });
    }
    GetpersonResFG(data) {
        return this.fb.group({
            personRes: [''],
        });
    }
    jobtaskk(index) {
        return this.fb.group({
            [this.jobTaskData[index]._id]: ['']
        });
    }
    codeOfPrac(index) {
        return this.fb.group({
            cop: ['']
        });
    }
    riskCons(index) {
        return this.fb.group({
            [this.highRiskConstruction[index]._id]: ['']
        });
    }
    ppeSelect(index) {
        return this.fb.group({
            [this.PPEselection[index]._id]: ['']
        });
    }
    license(index) {
        return this.fb.group({
            [this.licenseAndQualification[index]._id]: ['']
        });
    }
    sdsRegisterFG() {
        return this.fb.group({
            chemicalName: [''],
            location: [''],
            hazardous: [''],
            quantity: [''],
            expDate: [''],
            file: ['']
        });
    }
    GetsdsRegisterFG(data) {
        return this.fb.group({
            chemicalName: data.chemicalName,
            location: data.location,
            hazardous: data.hazardous,
            quantity: data.quantity,
            expDate: data.expDate,
            file: data.file
        });
    }
    removeSDSRegister(i) {
        const item = this.riskAssessmentFb.controls['SDSRegister'];
        if (item.length > 1) {
            item.removeAt(i);
        }
    }
    showsite() {
        this.RiskAssessment = true;
        this.SWMSShow = false;
    }
    showAction() {
        this.SWMSShow = true;
        this.RiskAssessment = false;
    }
    ngAfterViewInit() {
        // this.signaturePad is now available
        //this.signaturePad1.set('minWidth', 1); // set szimek/signature_pad options at runtime
        // this.signaturePad2.set('minWidth', 1); // set szimek/signature_pad options at runtime
        //this.signaturePad1.clear(); // invoke functions from szimek/signature_pad API
        // this.signaturePad2.clear(); // invoke functions from szimek/signature_pad API
        console.log('clear1 &2');
        console.log(this.signaturePad1Div);
    }
    drawComplete1() {
        // will be notified of szimek/signature_pad's onEnd event
        console.log(this.signaturePad1.toDataURL());
        this.riskAssessmentFb.controls["signature1"].setValue(this.signaturePad1.toDataURL());
    }
    clear1() {
        console.log('clear1');
        this.signaturePad1.clear();
    }
    drawStart1() {
        // will be notified of szimek/signature_pad's onBegin event
        console.log('begin drawing');
    }
    drawComplete2() {
        // will be notified of szimek/signature_pad's onEnd event
        console.log(this.signaturePad2.toDataURL());
        this.riskAssessmentFb.controls["signature2"].setValue(this.signaturePad2.toDataURL());
    }
    clear2() {
        console.log('clear2');
        this.signaturePad2.clear();
    }
    drawStart2() {
        // will be notified of szimek/signature_pad's onBegin event
        console.log('begin drawing');
    }
    getAllJobTask() {
        this.logicalFormInfo.getAllJobtask().subscribe((res) => {
            this.jobTaskData = res.data;
            console.log('jobTaskDetails=>', this.jobTaskData);
            for (let i = 0; i < this.jobTaskData.length; i++) {
                // this.taskArr[i] = 0;
                this.jobtask().push(this.jobtaskk(i));
            }
        });
    }
    getAllPPE() {
        this.logicalFormInfo.getAllPPE().subscribe((res) => {
            // console.log('PPE=>', res);
            this.PPEselection = res.data;
            for (let i = 0; i < this.PPEselection.length; i++) {
                this.ppeArr[i] = 0;
                this.ppe().push(this.ppeSelect(i));
                this.ppe2().push(this.ppeSelect(i));
            }
        });
    }
    getAllProjectMang() {
        this.logicalFormInfo.getAllProjectMang().subscribe((res) => {
            this.projectMang = res.data;
            // console.log('getAllProjectMang=>', this.projectMang);
        });
    }
    getAllHighRisk() {
        this.logicalFormInfo.getAllRisk().subscribe((res) => {
            // console.log('Risk=>', res);
            this.highRiskConstruction = res.data;
            for (let i = 0; i < this.highRiskConstruction.length; i++) {
                this.riskArr[i] = 0;
                this.riskConstruct().push(this.riskCons(i));
                this.riskConstruct2().push(this.riskCons(i));
            }
        });
    }
    getHighRiskById() {
        let mode = 'Risk';
        this.logicalFormInfo.getFormDataById(mode).subscribe((res) => {
            this.highRiskConstruction = res.data[0].subComponents;
            // console.log(' this.highRiskConstruction=>', this.highRiskConstruction);
            for (let i = 0; i < this.highRiskConstruction.length; i++) {
                this.riskArr[i] = 0;
            }
        });
    }
    getAllLicence() {
        this.logicalFormInfo.getAllLicence().subscribe((res) => {
            this.licenseAndQualification = res.data;
            // console.log(
            //   'this.licenseAndQualification=>',
            //   this.licenseAndQualification
            // );
            for (let i = 0; i < this.licenseAndQualification.length; i++) {
                this.licenceArr[i] = 0;
                this.Licence().push(this.license(i));
            }
        });
    }
    getAllHazard() {
        this.logicalFormInfo.getAllHazards().subscribe((res) => {
            // console.log('getAllHazards=>', res);
            this.allHazards = res.data;
        });
    }
    getAllContrActReq() {
        this.logicalFormInfo.getAllContrlActReq().subscribe((res) => {
            // console.log('getAllHazards=>', res);
            this.allContrlActReq = res.data;
        });
    }
    deleteHazrds(type, title, i, j) {
        console.log('type=>', type, title, i);
        console.log(this.jobTaskSelected[i]);
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: 'Are you sure?',
            text: `Do you want to delete "${title}"?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#00B96F',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Delete!',
        }).then((result) => {
            if (result.value) {
                if (type === 'identifyHazards') {
                    this.jobTaskSelected[i].allHazardsTitle.splice(j, 1);
                }
                if (type === 'ctrlActreq') {
                    this.jobTaskSelected[i].allContrlActReqTitle.splice(j, 1);
                }
            }
        });
    }
    onLicenseChange(e, license, i) {
        console.log("e", e.target.checked);
        let c = this.riskAssessmentFb.controls['licence'];
        let d = c.controls[i];
        if (e.target.checked) {
            d.controls[license].setValue("Open Cable Licence");
        }
        else {
            d.controls[license].reset();
        }
    }
    onRiskChange(e, risk, i) {
        console.log("e", e.target.checked);
        let c = this.riskAssessmentFb.controls['riskConstruction'];
        let d = c.controls[i];
        if (e.target.checked) {
            d.controls[risk].setValue("Working in or near trenches or shafts deeper than 1.5metres");
        }
        else {
            d.controls[risk].reset();
        }
    }
    onPPEChange(e, ppe, i) {
        console.log("e", e.target.checked);
        let c = this.riskAssessmentFb.controls['PPEselection'];
        let d = c.controls[i];
        if (e.target.checked) {
            d.controls[ppe].setValue("Disposable dust mask");
        }
        else {
            d.controls[ppe].reset();
        }
    }
    onRiskChange2(e, risk, i) {
        console.log("e", e.target.checked);
        let c = this.riskAssessmentFb.controls['riskConstruction2'];
        let d = c.controls[i];
        if (e.target.checked) {
            d.controls[risk].setValue("Working in or near trenches or shafts deeper than 1.5metres");
        }
        else {
            d.controls[risk].reset();
        }
    }
    onPPEChange2(e, ppe, i) {
        console.log("e", e.target.checked);
        let c = this.riskAssessmentFb.controls['PPESelection2'];
        let d = c.controls[i];
        if (e.target.checked) {
            d.controls[ppe].setValue("Disposable dust mask");
        }
        else {
            d.controls[ppe].reset();
        }
    }
    onJobtaskSelect(e, jobTaskRecd) {
        // this.jobTaskSelected=[];
        console.log('event', e.target.value, jobTaskRecd);
        let item = e.target.value;
        if (e.target.checked) {
            this.checkArray.push(item);
            console.log('jobTaskRecd', jobTaskRecd);
            this.jobTaskSelected.push(jobTaskRecd);
        }
        else {
            this.checkArray.forEach((item, j) => {
                if (item == e.target.value) {
                    this.checkArray.splice(j, 1);
                    this.jobTaskSelected.splice(j, 1);
                    return;
                }
            });
        }
        for (let k = 0; k < this.riskArr.length; k++) {
            this.riskArr[k] = 0;
            let c = this.riskAssessmentFb.controls['riskConstruction'];
            let c1 = this.riskAssessmentFb.controls['riskConstruction2'];
            let d = c.controls[k];
            let d1 = c1.controls[k];
            d.controls[this.highRiskConstruction[k]._id].reset();
            d1.controls[this.highRiskConstruction[k]._id].reset();
        }
        for (let k = 0; k < this.ppeArr.length; k++) {
            this.ppeArr[k] = 0;
            let c = this.riskAssessmentFb.controls['PPEselection'];
            let d = c.controls[k];
            d.controls[this.PPEselection[k]._id].reset();
            let c1 = this.riskAssessmentFb.controls['PPESelection2'];
            let d1 = c1.controls[k];
            d1.controls[this.PPEselection[k]._id].reset();
        }
        for (let k = 0; k < this.licenceArr.length; k++) {
            this.licenceArr[k] = 0;
            let c = this.riskAssessmentFb.controls['licence'];
            let d = c.controls[k];
            d.controls[this.licenseAndQualification[k]._id].reset();
        }
        this.chemicalTask = false;
        console.log('jobTaskSelected', this.jobTaskSelected);
        this.jobTaskSelected.forEach((element) => {
            //looking for chemical task
            if (element.chemical == 'YES') {
                this.chemicalTask = true;
            }
            element.risk.forEach((item) => {
                this.highRiskConstruction.forEach((highRisk, index) => {
                    if (highRisk._id === item) {
                        this.riskArr[index] = 1;
                        let c = this.riskAssessmentFb.controls['riskConstruction'];
                        let d = c.controls[index];
                        d.controls[this.highRiskConstruction[index]._id].setValue("Working in or near trenches or shafts deeper than 1.5metres");
                        let c1 = this.riskAssessmentFb.controls['riskConstruction2'];
                        let d1 = c1.controls[index];
                        d1.controls[this.highRiskConstruction[index]._id].setValue("Working in or near trenches or shafts deeper than 1.5metres");
                        // //  c.controls[highRisk._id].value
                        console.log("x", d.controls[this.highRiskConstruction[index]._id].value);
                    }
                });
            });
            element.PPE.forEach((item) => {
                this.PPEselection.forEach((ppeItem, index) => {
                    if (ppeItem._id === item) {
                        this.ppeArr[index] = 1;
                        let c = this.riskAssessmentFb.controls['PPEselection'];
                        let d = c.controls[index];
                        d.controls[this.PPEselection[index]._id].setValue("Disposable dust mask");
                        let c1 = this.riskAssessmentFb.controls['PPESelection2'];
                        let d1 = c1.controls[index];
                        d1.controls[this.PPEselection[index]._id].setValue("Disposable dust mask");
                    }
                });
            });
            element.licence.forEach(ele => {
                this.licenseAndQualification.forEach((item, index) => {
                    if (item._id === ele) {
                        console.log("item", item);
                        console.log("ele", ele);
                        this.licenceArr[index] = 1;
                        let c = this.riskAssessmentFb.controls['licence'];
                        let d = c.controls[index];
                        d.controls[this.licenseAndQualification[index]._id].setValue("Open Cable Licence");
                    }
                });
            });
        });
        // this.checkArray.forEach((id) => {
        //   this.jobTaskData.forEach((element) => {
        //     //looking for chemical task
        //     if(id === element._id && element.chemical == "YES"){
        //       this.chemicalTask=true;
        //     }
        //     if (id === element._id) {
        //       element.risk.forEach((riskItem) => {
        //         this.highRiskConstruction.forEach((highRisk, riskIndex) => {
        //           if (highRisk._id === riskItem) {
        //             this.riskArr[riskIndex] = 1;
        //           }
        //         });
        //       });
        //       element.PPE.forEach((riskItem) => {
        //         this.PPEselection.forEach((highRisk, index) => {
        //           if (highRisk._id === riskItem) {
        //             this.ppeArr[index] = 1;
        //           }
        //         });
        //       });
        //       // element.tradeCategoryId.forEach((riskItem) => {
        //       //   this.licenseAndQualification.forEach((highRisk, index) => {
        //       //     if (highRisk.tradeCategoryId._id === riskItem) {
        //       //       this.licenceArr[index] = 1;
        //       //     }
        //       //   });
        //       // });
        //       this.licenseAndQualification.forEach((highRisk, index) => {
        //         if (highRisk.tradeCategoryId._id === element.tradeCategoryId._id) {
        //           this.licenceArr[index] = 1;
        //         }
        //       });
        //     }
        //   });
        // });
        while (this.riskLevelFA().length) {
            this.riskLevelFA().removeAt(0);
        }
        while (this.residlRiskLevelFA().length) {
            this.residlRiskLevelFA().removeAt(0);
        }
        while (this.personResFA().length) {
            this.personResFA().removeAt(0);
        }
        this.allCOPSelected = [];
        this.jobTaskSelected.forEach((data, i) => {
            this.addActionRiskLevel();
            this.addActionResiRiskLevel();
            this.addActionPersonRes();
            this.personResFA()
                .controls[i].get('personRes')
                .setValue(data === null || data === void 0 ? void 0 : data.staff);
            this.riskLevelFA().controls[i].get('riskLevel').setValue(data.riskLevel);
            this.residlRiskLevelFA()
                .controls[i].get('resiRiskLevel')
                .setValue(data.residualRisk);
            console.log("data", data);
            data.allCOPTitle.forEach((element, index) => {
                this.allCOPSelected.push(element);
                // this.COP().push(this.codeOfPrac(index));
            });
            console.log('allCOPSelected', this.allCOPSelected);
            let myMap = new Map();
            this.allCOPSelected.forEach((item) => {
                if (myMap.has(item)) {
                    myMap.set(item, myMap.get(item) + 1);
                }
                else {
                    myMap.set(item, 1);
                }
            });
            this.allCOPSelected = Array.from(new Set(this.allCOPSelected.map(x => JSON.stringify(x)))).map(y => JSON.parse(y));
            console.log('allCOPSelected', this.allCOPSelected, myMap);
        });
    }
    getAllJobNumber() {
        this.logicalFormInfo.getAllJobNumber().subscribe((res) => {
            this.allJobNumbers = res.data;
        });
    }
    getAllStaff() {
        this.logicalFormInfo.getAllStaff().subscribe((res) => {
            this.staff = res.data;
        });
    }
    getAllResidualRiskLevel() {
        this.logicalFormInfo.getAllResidual().subscribe((res) => {
            this.resiRiskLevel = res.data;
        });
    }
    getAllRiskLevel() {
        this.logicalFormInfo.getAllRiskLevel().subscribe((res) => {
            this.riskLevel = res.data;
        });
    }
    getAllChemical() {
        this.logicalFormInfo.getAllChemical().subscribe((res) => {
            this.allChemicals = res.data;
        });
    }
    drop(event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(this.jobTaskSelected, event.previousIndex, event.currentIndex);
        while (this.riskLevelFA().length) {
            this.riskLevelFA().removeAt(0);
        }
        while (this.residlRiskLevelFA().length) {
            this.residlRiskLevelFA().removeAt(0);
        }
        while (this.personResFA().length) {
            this.personResFA().removeAt(0);
        }
        this.allCOPSelected = [];
        this.jobTaskSelected.forEach((data, i) => {
            var _a;
            this.addActionRiskLevel();
            this.addActionResiRiskLevel();
            this.addActionPersonRes();
            this.personResFA()
                .controls[i].get('personRes')
                .setValue((_a = data === null || data === void 0 ? void 0 : data.staffId) === null || _a === void 0 ? void 0 : _a._id);
            this.riskLevelFA().controls[i].get('riskLevel').setValue(data.riskLevel);
            this.residlRiskLevelFA()
                .controls[i].get('resiRiskLevel')
                .setValue(data.residualRisk);
            console.log('data', data);
            data.allCOPTitle.forEach((element) => {
                this.allCOPSelected.push(element);
            });
        });
        console.log('allCOPSelected', this.allCOPSelected);
    }
    addItem(type, i) {
        const dialogRef = this.dialog.open(_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_3__["AddItemComponent"], {
            width: '550px',
            // height:'50%',
            data: {
                type: type,
                title: ''
            },
        });
        dialogRef.afterClosed().subscribe((result) => {
            let data = {
                title: result,
                id: ''
            };
            if (type === 'identifyHazards' && result != 'false') {
                this.jobTaskSelected[i].allHazardsTitle.push(data);
            }
            if (type === 'ctrlActreq' && result != 'false') {
                this.jobTaskSelected[i].allContrlActReqTitle.push(data);
            }
            console.log('The dialog was closed');
        });
    }
    editHazrds(type, title, i) {
        const dialogRef = this.dialog.open(_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_3__["AddItemComponent"], {
            width: '550px',
            // height:'50%',
            data: {
                type: type,
                title: title
            },
        });
        dialogRef.afterClosed().subscribe((result) => {
            let data = {
                title: result,
                id: ''
            };
            if (type === 'editIdentifyHazards' && result != 'false') {
                this.jobTaskSelected[i].allHazardsTitle[i] = data;
            }
            if (type === 'editCtrlActreq' && result != 'false') {
                this.jobTaskSelected[i].allContrlActReqTitle[i] = data;
            }
            console.log('The dialog was closed');
        });
    }
    addChemical() {
        const dialogRef = this.dialog.open(_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_3__["AddItemComponent"], {
            width: '550px',
            // height:'50%',
            data: {
                type: 'chemical',
                title: ''
            },
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result != 'false' && result) {
                let data = {
                    title: result,
                };
                this.logicalFormInfo.addChemical(data).subscribe((res) => {
                    this.getAllChemical();
                });
            }
            console.log('The dialog was closed');
        });
    }
    getAllRegulator() {
        this.logicalFormInfo.getAllRegulator().subscribe((res) => {
            console.log("this.regulatorData", res.data);
            this.regulatorData = res.data;
        });
    }
    getAllSafe() {
        this.logicalFormInfo.getAllSafety().subscribe((res) => {
            console.log("this.safety", res);
            this.safety = res.data;
        });
    }
    getAllJurisdiction() {
        this.logicalFormInfo.getAllJurisdiction().subscribe((res) => {
            console.log('JurisdictionData=>', res);
            this.JurisdictionData = res.data;
        });
    }
    getAllState() {
        this.logicalFormInfo.getAllStates().subscribe((res) => {
            console.log('getAllStates=>', res);
            this.states = res.data;
        });
    }
    setProjectManager(value, e) {
        if (value === 'projectManagerSWMS') {
            this.riskAssessmentFb.get('projectManager').setValue(e.target.value);
        }
        if (value === 'projectManager') {
            console.log('setProjectManager==>', this.projectManager);
            this.riskAssessmentFb.get('projectManagerSWMS').setValue(e.target.value);
        }
    }
    onSubmit() {
        const data = Object.assign(Object.assign({}, this.riskAssessmentFb.value), { codeOfPract: this.allCOPSelected, identifyHazards: this.jobTaskSelected });
        console.log("data", data);
        if (this.id !== 'form') {
            this.logicalFormInfo.updateAssessment(this.id, data).subscribe((res) => {
                console.log("this.riskAssessmentFb updated", res);
                this.router.navigate(["/admin/forms/riskAssessTable"]);
            });
        }
        else {
            this.logicalFormInfo.addAssessment(data).subscribe((res) => {
                this.router.navigate(["/admin/forms/riskAssessTable"]);
                console.log("this.riskAssessmentFb posted", res);
            });
        }
        this.riskAssessmentFb.reset();
        this.allCOPSelected = [];
        this.jobTaskSelected = [];
        this.signaturePad1.clear();
        this.signaturePad2.clear();
    }
}
RiskAssessmentSWMSComponent.ɵfac = function RiskAssessmentSWMSComponent_Factory(t) { return new (t || RiskAssessmentSWMSComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_9__["LogicalFormInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_10__["SetTitleService"])); };
RiskAssessmentSWMSComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RiskAssessmentSWMSComponent, selectors: [["app-risk-assessment-swms"]], viewQuery: function RiskAssessmentSWMSComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c3, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.projectManager = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.signaturePad1Div = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.signaturePad1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.signaturePad2 = _t.first);
    } }, decls: 537, vars: 29, consts: [[1, "btn", "btn-outline-primary", 3, "routerLink"], ["aria-hidden", "true", 1, "fa", "fa-arrow-left"], [1, "container", "card", "px-4", "py-4", 3, "formGroup"], [1, "text-center", "pt-3"], [1, "title"], ["label", "Risk Assessment"], ["id", "myTabContent", 1, "tab-content"], ["id", "RISKAssessment", "role", "tabpanel", "aria-labelledby", "RISKAssessment-tab", 1, "tab-pane", "fade", "show", "active", "px-4", "py-4"], [1, "row"], [1, "my-3", "col"], [1, "form-label"], ["type", "text", "formControlName", "siteName", 1, "form-control", "col"], ["type", "text", "formControlName", "customerName", 1, "form-control", "col"], [1, "my-3", "col-2"], ["type", "text", "formControlName", "streetNo", 1, "form-control", "col"], [1, "my-3", "col-4"], ["type", "text", "formControlName", "streetAddr", 1, "form-control", "col"], ["type", "text", "formControlName", "suburb", 1, "form-control", "col"], ["aria-label", "Default select example", "formControlName", "statesSWMS", 1, "form-select", "form-control", "col"], ["selected", "", "hidden", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "formControlName", "custConct", 1, "form-control", "col"], ["type", "text", "formControlName", "custConctPh", 1, "form-control", "col"], ["type", "text", "formControlName", "custEmail", 1, "form-control", "col"], ["aria-label", "Default select example", "formControlName", "jobNumber", 1, "form-select", "form-control", "col", 3, "change"], [1, "my-3", "col-6"], ["aria-label", "Default select example", "formControlName", "projectManager", 1, "form-select", "form-control", "col", 3, "change"], ["type", "date", "formControlName", "date", 1, "form-control"], [1, "mt-4"], ["formArrayName", "jobTask", 1, "row"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "row", "mt-4"], [1, "table", "table-bordered", "text-center"], ["colspan", "7", 1, "L_1"], ["colspan", "8", 1, "L_1"], ["colspan", "2", "rowspan", "2"], ["colspan", "5"], ["colspan", "4", "rowspan", "2"], [1, "like_2"], ["rowspan", "5"], [1, "like_1"], [1, "M_1"], [1, "H_1"], ["colspan", "2"], [1, "space_1"], [1, "L_1"], ["scope", "col"], ["colspan", "2", 1, "mr-2", "ml-2"], ["formArrayName", "riskConstruction", 1, "row"], ["class", "mt-2 col-4", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["formArrayName", "PPEselection", 1, "row"], ["formArrayName", "licence", 1, "row"], [1, "col-4"], ["type", "input", "value", "", "formControlName", "employee1", 1, "mr-1", "form-control"], [1, "sign"], ["signaturePad1Div", ""], [3, "options", "onBeginEvent", "onEndEvent"], ["Signature1", ""], [1, "btn", "btn-outline-primary", "mt-1", 3, "click"], [1, "col-3"], ["type", "date", "value", "", "formControlName", "dateTime", 1, "mr-1", "form-control"], ["label", "SWMS"], ["id", "SWSS", "role", "tabpanel", "aria-labelledby", "SWSS-tab", 1, "tab-pane", "fade", "show", "active"], [1, "container", "content-center"], [1, "px-4", "py-4"], [1, "col-md-6"], [1, "my-3"], ["type", "fullname", "aria-describedby", "emailHelp", "formControlName", "siteName", 1, "form-control"], ["type", "surname", "aria-describedby", "emailHelp", "formControlName", "customerName", 1, "form-control"], [1, "col-md-2"], ["type", "number", "aria-describedby", "emailHelp", "formControlName", "streetNo", 1, "form-control"], [1, "col-md-4"], ["type", "email", "aria-describedby", "emailHelp", "formControlName", "streetAddr", 1, "form-control"], ["type", "department", "aria-describedby", "emailHelp", "formControlName", "town", 1, "form-control"], ["type", "Projectnumber", "aria-describedby", "emailHelp", "formControlName", "custConct", 1, "form-control"], ["type", "tel", "aria-describedby", "emailHelp", "formControlName", "custConctPh", 1, "form-control"], ["type", "email", "aria-describedby", "emailHelp", "formControlName", "custEmail", 1, "form-control"], [1, "col-md-3"], ["aria-label", "Default select example", "formControlName", "projectManagerSWMS", 1, "form-select", "form-control", "col", 3, "change"], ["for", "exampleInputProjectNumber", 1, "form-label"], ["aria-label", "Default select example", "formControlName", "jurisdiction", 1, "form-select", "form-control", "col"], ["value", "", "selected", "", "hidden", "", 4, "ngIf"], [1, "col-md-5"], ["name", "sellist2", "formControlName", "safetyLeg", 1, "form-control"], ["id", "siteName", "aria-label", "Default select example", "formControlName", "regulator", 1, "form-select", "form-control", "col"], [4, "ngIf"], ["class", "mt-2 col-4", 4, "ngFor", "ngForOf"], ["formArrayName", "riskConstruction2", 1, "row"], ["formArrayName", "PPESelection2", 1, "row"], ["cdkDropList", "", 1, "example-list", 3, "cdkDropListDropped"], ["class", "example-box setBoxMart", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["formControlName", "editor", 2, "width", "100%", 3, "editor", "data"], [1, "col-md-7"], ["formControlName", "employee2", "type", "text", "id", "exampleInputProjectNumber", "aria-describedby", "emailHelp", 1, "form-control"], [1, "form-floating"], ["Signature2", ""], ["type", "submit", 1, "btn", "btn-outline-primary", 3, "click"], [3, "value"], [3, "formGroupName"], [1, "mt-2", "col-4"], ["type", "checkbox", 1, "form-check-input", 3, "id", "value", "formControlName", "change"], [1, "form-check-label", "label_2", 3, "for"], [1, "mt-2", "col-4", 3, "formGroupName"], ["type", "checkbox", "value", "Working in or near trenches or shafts deeper than 1.5metres", 1, "form-check-input", 3, "id", "formControlName", "checked", "change"], ["type", "checkbox", "value", "Disposable dust mask", 1, "form-check-input", 3, "id", "formControlName", "checked", "change"], ["type", "checkbox", "value", "Open Cable Licence", 1, "form-check-input", 3, "id", "formControlName", "checked", "change"], ["value", "", "selected", "", "hidden", ""], ["type", "checkbox", "value", "Working in or near trenches or shafts deeper than 1.5metres", "disabled", "", 1, "form-check-input", 3, "id", "checked"], ["formArrayName", "SDSRegister"], ["class", "row", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "row", 3, "formGroupName"], ["for", "sel2", 1, "form-label"], [1, "material-icons", "ml-3", 2, "font-size", "19px", 3, "click"], ["id", "sel2", "name", "sellist2", "formControlName", "chemicalName", 1, "form-control"], ["value", "", "hidden", "", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["type", "text", "id", "exampleInputProjectNumber", "aria-describedby", "emailHelp", "formControlName", "location", 1, "form-control"], ["id", "sel2", "name", "sellist2", "formControlName", "hazardous", 1, "form-control"], ["value", "YES"], ["value", "NO"], ["type", "number", "id", "exampleInputProjectNumber", "aria-describedby", "emailHelp", "formControlName", "quantity", 1, "form-control"], ["type", "date", "id", "exampleInputProjectNumber", "aria-describedby", "emailHelp", "formControlName", "expDate", 1, "form-control"], [1, "col-md-10"], ["for", "formFile", 1, "form-label"], ["type", "file", "id", "formFile", "formControlName", "file", 1, "form-control"], [1, "material-icons", 2, "margin-top", "30%", 3, "click"], [1, "material-icons", 3, "click"], ["value", "", "hidden", ""], ["cdkDrag", "", 1, "example-box", "setBoxMart"], [1, "col-10"], ["for", "sel2"], [1, "material-icons", "ml-3", "my-auto", "p-0", 2, "font-size", "19px", 3, "click"], [1, "identifyHaz"], ["formArrayName", "riskLevel"], [1, "col-2", 3, "formGroupName"], ["for", "sel1"], ["id", "sel1", "name", "sellist1", "formControlName", "riskLevel", 1, "form-control"], [1, "col-10", "my-3"], ["formArrayName", "residualRisk"], [1, "my-3", 3, "formGroupName"], ["id", "sel1", "name", "sellist1", "formControlName", "resiRiskLevel", 1, "form-control"], ["formArrayName", "persResp"], ["for", "sel1", 1, "pt-2"], ["multiple", "", "formControlName", "personRes", "id", "sel2", "name", "sellist2", 1, "form-control", 3, "size"], [1, "d-flex"], [1, "stepItem", "p-1"], ["class", "", 4, "ngIf"], [1, ""], [1, "mr-1", 2, "font-size", "18px", 3, "click"], [2, "font-size", "18px", 3, "click"], ["class", "col-3", 4, "ngIf"]], template: function RiskAssessmentSWMSComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Risk Assessment Preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-tab-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-tab", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Site Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Site Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Customer Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Street Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Street Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Suburb");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, RiskAssessmentSWMSComponent_option_41_Template, 2, 2, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Customer Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Customer Contact Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Customer Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Job Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "select", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RiskAssessmentSWMSComponent_Template_select_change_59_listener() { return ctx.jobNoSel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](62, RiskAssessmentSWMSComponent_option_62_Template, 2, 2, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Project Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "select", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RiskAssessmentSWMSComponent_Template_select_change_66_listener($event) { return ctx.setProjectManager("projectManager", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](69, RiskAssessmentSWMSComponent_option_69_Template, 2, 2, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Job Tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](80, RiskAssessmentSWMSComponent_ng_container_80_Template, 5, 6, "ng-container", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "table", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "th", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Risk Level Matrix");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Risk Analysis");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](92, "th", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "td", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "Consequence");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "td", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "Likelihood");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "td", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Consequence");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "th", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "Likelihood");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "td", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "td", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "H");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "td", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "H");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "td", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, "H");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "td", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "H");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "Rare");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, "Insignificant");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "td", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "td", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "td", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "td", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, "H");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "td", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, "H");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](154, "Unlikely");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](156, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](158, "Minor");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](163, "L");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "td", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](165, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "td", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](167, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "td", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](169, "H");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "td", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](171, "H");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](173, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](175, "Moderate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](177, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](179, "Moderate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "th", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](182, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](184, "L");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](186, "L");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "td", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](188, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "td", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](190, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "td", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](192, "H");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](194, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](196, "Likely");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](198, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](200, "Major");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "th", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](203, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](205, "L");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](207, "L");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](209, "L");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "td", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](211, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "td", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](213, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "td", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](215, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](217, "Almost Certain");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](219, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](221, "Catastrophic");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](222, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](225, "High Risk Construction");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](226, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](227, RiskAssessmentSWMSComponent_div_227_Template, 4, 6, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](228, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](229, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](231, "PPE Selection");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](232, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](233, RiskAssessmentSWMSComponent_div_233_Template, 4, 6, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](234, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](236, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](237, "Licence and Qualifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](238, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](239, RiskAssessmentSWMSComponent_div_239_Template, 4, 6, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](240, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](241, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](242, " Toolbox this document with all workers and contractors on sit & sign off ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](243, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](244, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](245, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](246, "Employee 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](247, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](248, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](249, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](250, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](251, "Signature");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](252, "div", 54, 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](254, "signature-pad", 56, 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onBeginEvent", function RiskAssessmentSWMSComponent_Template_signature_pad_onBeginEvent_254_listener() { return ctx.drawStart1(); })("onEndEvent", function RiskAssessmentSWMSComponent_Template_signature_pad_onEndEvent_254_listener() { return ctx.drawComplete1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](256, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RiskAssessmentSWMSComponent_Template_button_click_256_listener() { return ctx.clear1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](257, " Clear ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](258, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](259, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](260, "Date/Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](261, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](262, "input", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](263, "mat-tab", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](264, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](265, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](266, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](267, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](268, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](269, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](270, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](271, "Site Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](272, "input", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](273, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](274, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](275, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](276, "Customer Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](277, "input", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](278, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](279, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](280, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](281, "Street Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](282, "input", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](283, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](284, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](285, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](286, "Street Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](287, "input", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](288, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](289, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](290, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](291, "Town/City");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](292, "input", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](293, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](294, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](295, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](296, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](297, "select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](298, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](299, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](300, RiskAssessmentSWMSComponent_option_300_Template, 2, 2, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](301, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](302, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](303, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](304, "Customer Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](305, "input", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](306, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](307, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](308, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](309, "Customer Contact Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](310, "input", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](311, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](312, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](313, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](314, "Customer Contact Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](315, "input", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](316, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](317, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](318, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](319, "Job Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](320, "select", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RiskAssessmentSWMSComponent_Template_select_change_320_listener() { return ctx.jobNoSel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](321, RiskAssessmentSWMSComponent_option_321_Template, 2, 2, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](322, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](323, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](324, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](325, "Project Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](326, "select", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RiskAssessmentSWMSComponent_Template_select_change_326_listener($event) { return ctx.setProjectManager("projectManagerSWMS", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](327, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](328, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](329, RiskAssessmentSWMSComponent_option_329_Template, 2, 2, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](330, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](331, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](332, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](333, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](334, "label", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](335, "Jurisdiction");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](336, "select", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](337, RiskAssessmentSWMSComponent_option_337_Template, 2, 0, "option", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](338, RiskAssessmentSWMSComponent_option_338_Template, 2, 2, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](339, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](340, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](341, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](342, "Safety Legislation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](343, "select", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](344, RiskAssessmentSWMSComponent_option_344_Template, 2, 0, "option", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](345, RiskAssessmentSWMSComponent_option_345_Template, 2, 3, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](346, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](347, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](348, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](349, "Regulator & other Legislation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](350, "select", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](351, RiskAssessmentSWMSComponent_option_351_Template, 2, 0, "option", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](352, RiskAssessmentSWMSComponent_option_352_Template, 2, 2, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](353, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](354, RiskAssessmentSWMSComponent_h2_354_Template, 2, 0, "h2", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](355, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](356, RiskAssessmentSWMSComponent_div_356_Template, 4, 4, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](357, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](358, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](359, "High Risk Construction");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](360, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](361, RiskAssessmentSWMSComponent_div_361_Template, 4, 6, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](362, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](363, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](364, "table", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](365, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](366, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](367, "th", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](368, "Risk Level Matrix");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](369, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](370, "Risk Analysis");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](371, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](372, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](373, "th", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](374, "td", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](375, "Consequence");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](376, "td", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](377, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](378, "Likelihood");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](379, "td", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](380, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](381, "Consequence");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](382, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](383, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](384, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](385, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](386, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](387, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](388, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](389, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](390, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](391, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](392, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](393, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](394, "th", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](395, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](396, "Likelihood");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](397, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](398, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](399, "td", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](400, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](401, "td", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](402, "H");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](403, "td", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](404, "H");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](405, "td", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](406, "H");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](407, "td", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](408, "H");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](409, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](410, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](411, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](412, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](413, "Rare");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](414, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](415, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](416, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](417, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](418, "Insignificant");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](419, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](420, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](421, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](422, "td", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](423, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](424, "td", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](425, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](426, "td", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](427, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](428, "td", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](429, "H");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](430, "td", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](431, "H");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](432, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](433, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](434, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](435, "Unlikely");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](436, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](437, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](438, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](439, "Minor");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](440, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](441, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](442, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](443, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](444, "L");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](445, "td", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](446, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](447, "td", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](448, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](449, "td", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](450, "H");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](451, "td", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](452, "H");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](453, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](454, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](455, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](456, "Moderate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](457, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](458, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](459, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](460, "Moderate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](461, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](462, "th", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](463, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](464, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](465, "L");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](466, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](467, "L");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](468, "td", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](469, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](470, "td", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](471, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](472, "td", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](473, "H");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](474, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](475, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](476, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](477, "Likely");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](478, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](479, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](480, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](481, "Major");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](482, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](483, "th", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](484, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](485, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](486, "L");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](487, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](488, "L");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](489, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](490, "L");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](491, "td", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](492, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](493, "td", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](494, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](495, "td", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](496, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](497, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](498, "Almost Certain");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](499, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](500, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](501, "td", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](502, "Catastrophic");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](503, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](504, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](505, "PPE Selection");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](506, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](507, RiskAssessmentSWMSComponent_div_507_Template, 4, 6, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](508, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](509, RiskAssessmentSWMSComponent_ng_container_509_Template, 5, 1, "ng-container", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](510, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](511, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkDropListDropped", function RiskAssessmentSWMSComponent_Template_div_cdkDropListDropped_511_listener($event) { return ctx.drop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](512, RiskAssessmentSWMSComponent_div_512_Template, 39, 11, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](513, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](514, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](515, "ckeditor", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](516, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](517, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](518, "Name of worker (Print and Sign)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](519, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](520, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](521, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](522, "label", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](523, "Employee 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](524, "input", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](525, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](526, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](527, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](528, "Signature*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](529, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](530, "signature-pad", 56, 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onBeginEvent", function RiskAssessmentSWMSComponent_Template_signature_pad_onBeginEvent_530_listener() { return ctx.drawStart2(); })("onEndEvent", function RiskAssessmentSWMSComponent_Template_signature_pad_onEndEvent_530_listener() { return ctx.drawComplete2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](532, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RiskAssessmentSWMSComponent_Template_button_click_532_listener() { return ctx.clear2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](533, " Clear ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](534, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](535, "button", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RiskAssessmentSWMSComponent_Template_button_click_535_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](536, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](28, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.riskAssessmentFb);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.states);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.allJobNumbers);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.projectMang);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.jobtask().controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](147);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.riskConstruct().controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.ppe().controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.Licence().controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.signaturePadOptions1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.states);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.allJobNumbers);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.projectMang);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.hasJuridiction);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.JurisdictionData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.hasLegist);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.safety);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.hasRegulation);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.regulatorData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.allCOPSelected.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.allCOPSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.riskConstruct2().controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](146);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.ppe2().controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.chemicalTask);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.jobTaskSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("editor", ctx.Editor)("data", ctx.secondEditor);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.signaturePadOptions2);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroupDirective"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTab"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormArrayName"], angular2_signaturepad__WEBPACK_IMPORTED_MODULE_13__["SignaturePad"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NumberValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDropList"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_14__["CKEditorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["CheckboxControlValueAccessor"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDrag"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectMultipleControlValueAccessor"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"]], styles: [".report_1[_ngcontent-%COMP%] {\n  background-color: aqua;\n  border-left: 4px solid blue;\n}\n\ndiv.like_1[_ngcontent-%COMP%] {\n  transform: rotate(-90deg);\n  margin-top: 92px;\n  margin-left: -37px;\n  margin-right: -35px;\n}\n\n.M_1[_ngcontent-%COMP%] {\n  background-color: yellow;\n}\n\n.H_1[_ngcontent-%COMP%] {\n  background-color: orangered;\n}\n\n.L_1[_ngcontent-%COMP%] {\n  background-color: #5fdf5f;\n}\n\ndiv.space_1[_ngcontent-%COMP%] {\n  margin: 0px 37px 0px 37px;\n}\n\ndiv.like_2[_ngcontent-%COMP%] {\n  margin: 22px 0 0 0;\n}\n\nlabel[_ngcontent-%COMP%]:not(.form-check-label):not(.custom-file-label) {\n  font-weight: 500;\n}\n\ntr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  word-break: break-word;\n}\n\ntr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  word-break: break-word;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 500;\n  word-break: break-word;\n}\n\n.form-control[_ngcontent-%COMP%]:hover {\n  border-color: rgba(46, 105, 255, 0.5);\n  box-shadow: 0 0 0 2px rgba(46, 105, 255, 0.25);\n}\n\n.form-check-input[_ngcontent-%COMP%]:hover {\n  border-color: rgba(46, 105, 255, 0.5);\n  box-shadow: 0 0 0 2px rgba(46, 105, 255, 0.25);\n}\n\n.form-check-input[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n}\n\n.sign[_ngcontent-%COMP%] {\n  border: 1px solid lightgray;\n}\n\n.sign[_ngcontent-%COMP%]:hover {\n  border-color: rgba(46, 105, 255, 0.5);\n  box-shadow: 0 0 0 2px rgba(46, 105, 255, 0.25);\n}\n\n.txt_1[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 16px;\n  font-weight: 500;\n  word-break: break-word;\n}\n\n.label_2[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 500;\n  margin-left: 7px;\n  margin-top: 5px;\n  padding-right: 0.5rem;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background-color: transparent;\n  background-repeat: no-repeat;\n  border: none;\n  cursor: pointer;\n  overflow: hidden;\n  outline: none;\n}\n\n.outline[_ngcontent-%COMP%]:hover {\n  border: 1px solid;\n  border-color: #2e69ff40;\n  box-shadow: 0 0 0 3px rgba(46, 105, 255, 0.25);\n}\n\n.outline[_ngcontent-%COMP%]:focus {\n  border: 1px solid;\n  border-color: #2e69ff40;\n  box-shadow: 0 0 0 3px rgba(46, 105, 255, 0.25);\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n  word-break: break-word;\n  text-align: center;\n  font-family: Inter, sans-serif;\n}\n\ninput[type=file][_ngcontent-%COMP%] {\n  height: 10%;\n  padding: 0%;\n}\n\n.myBtn[_ngcontent-%COMP%] {\n  background-color: #eeeeee;\n  border: none;\n  outline: none;\n  height: 40px;\n}\n\n.example-list[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n  display: block;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.example-box[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.example-box[_ngcontent-%COMP%]:hover {\n  background-color: #f1eded;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.identifyHaz[_ngcontent-%COMP%] {\n  background-color: white;\n  border: 1px solid #ced4da;\n  width: 100%;\n  border-radius: 5px;\n  overflow-x: hidden;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #888;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n\n.mat-icon[_ngcontent-%COMP%] {\n  height: 20px !important;\n  width: 20px !important;\n  cursor: pointer !important;\n}\n\n.setBoxMart[_ngcontent-%COMP%] {\n  padding: 15px;\n  border-radius: 8px;\n}\n\n.stepItem[_ngcontent-%COMP%] {\n  cursor: default !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccmlzay1hc3Nlc3NtZW50LXN3bXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUhBO0VBQ0Usc0JBQUE7RUFDQSwyQkFBQTtBQWhIRjs7QUFtSEE7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQWhIRjs7QUFrSEE7RUFDRSx3QkFBQTtBQS9HRjs7QUFpSEE7RUFDRSwyQkFBQTtBQTlHRjs7QUFnSEE7RUFDRSx5QkFBQTtBQTdHRjs7QUErR0E7RUFDRSx5QkFBQTtBQTVHRjs7QUE4R0E7RUFDRSxrQkFBQTtBQTNHRjs7QUE2R0E7RUFDRSxnQkFBQTtBQTFHRjs7QUFpSEE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQTlHRjs7QUFpSEE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQTlHRjs7QUFnSEE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBN0dGOztBQStHQTtFQUNFLHFDQUFBO0VBQ0EsOENBQUE7QUE1R0Y7O0FBOEdBO0VBQ0UscUNBQUE7RUFDQSw4Q0FBQTtBQTNHRjs7QUE2R0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQTFHRjs7QUE0R0E7RUFDRSwyQkFBQTtBQXpHRjs7QUEyR0E7RUFDRSxxQ0FBQTtFQUNBLDhDQUFBO0FBeEdGOztBQTBHQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUF2R0Y7O0FBeUdBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQXRHRjs7QUF3R0E7RUFDRSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFyR0Y7O0FBdUdBO0VBQ0UsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLDhDQUFBO0FBcEdGOztBQXVHQTtFQUNFLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSw4Q0FBQTtBQXBHRjs7QUFzR0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUFuR0Y7O0FBcUdBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7QUFsR0Y7O0FBb0dBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFqR0Y7O0FBbUdBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFHQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBbEdGOztBQXFHQTtFQUdFLDBCQUFBO0VBS0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBeEdGOztBQTBHQTtFQUNFLHlCQUFBO0FBdkdGOztBQXlHQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxSEFBQTtBQXRHRjs7QUEyR0E7RUFDRSxVQUFBO0FBeEdGOztBQTJHQTtFQUNFLHNEQUFBO0FBeEdGOztBQTJHQTtFQUNFLFlBQUE7QUF4R0Y7O0FBMkdBO0VBQ0Usc0RBQUE7QUF4R0Y7O0FBMEdBO0VBQ0UsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUtBLGtCQUFBO0FBM0dGOztBQStHQTtFQUNFLFVBQUE7QUE1R0Y7O0FBK0dBLFVBQUE7O0FBQ0E7RUFDRSxtQkFBQTtBQTVHRjs7QUErR0EsV0FBQTs7QUFDQTtFQUNFLGdCQUFBO0FBNUdGOztBQStHQSxvQkFBQTs7QUFDQTtFQUNFLGdCQUFBO0FBNUdGOztBQW1IQTtFQUNFLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtBQWhIRjs7QUFrSEE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUEvR0Y7O0FBaUhBO0VBQ0UsMEJBQUE7QUE5R0YiLCJmaWxlIjoicmlzay1hc3Nlc3NtZW50LXN3bXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAucmVwb3J0XzEge1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XHJcbi8vICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCBibHVlO1xyXG4vLyB9XHJcblxyXG4vLyBkaXYubGlrZV8xIHtcclxuLy8gICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG4vLyAgIG1hcmdpbi10b3A6IDkycHg7XHJcbi8vICAgbWFyZ2luLWxlZnQ6IC0zN3B4O1xyXG4vLyAgIG1hcmdpbi1yaWdodDogLTM1cHg7XHJcbi8vIH1cclxuLy8gLk1fMSB7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xyXG4vLyB9XHJcbi8vIC5IXzEge1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZXJlZDtcclxuLy8gfVxyXG4vLyAuTF8xIHtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTUsIDIyMywgOTUpO1xyXG4vLyB9XHJcbi8vIGRpdi5zcGFjZV8xIHtcclxuLy8gICBtYXJnaW46IDBweCAzN3B4IDBweCAzN3B4O1xyXG4vLyB9XHJcbi8vIGRpdi5saWtlXzIge1xyXG4vLyAgIG1hcmdpbjogMjJweCAwIDAgMDtcclxuLy8gfVxyXG4vLyBsYWJlbDpub3QoLmZvcm0tY2hlY2stbGFiZWwpOm5vdCguY3VzdG9tLWZpbGUtbGFiZWwpIHtcclxuLy8gICBmb250LXdlaWdodDogNTAwO1xyXG4vLyB9XHJcblxyXG4vLyAvLyBsYWJlbCB7XHJcbi8vIC8vICAgICBtYXJnaW4tYm90dG9tOiA0JTtrc1xyXG4vLyAvLyAgICAgbWFyZ2luLXRvcDogMiU7XHJcbi8vIC8vIH1cclxuLy8gdHIgdGgge1xyXG4vLyAgIGZvbnQtc2l6ZTogMTZweDtcclxuLy8gICBmb250LXdlaWdodDogNTAwO1xyXG4vLyAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbi8vIH1cclxuXHJcbi8vIHRyIHRkIHtcclxuLy8gICBmb250LXNpemU6IDE2cHg7XHJcbi8vICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuLy8gICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4vLyB9XHJcbi8vIGxhYmVsIHtcclxuLy8gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbi8vICAgZm9udC1zaXplOiAxNHB4O1xyXG4vLyAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbi8vICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuLy8gfVxyXG4vLyAuZm9ybS1jb250cm9sOmhvdmVyIHtcclxuLy8gICBib3JkZXItY29sb3I6IHJnYmEoNDYsIDEwNSwgMjU1LCAwLjUpO1xyXG4vLyAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCByZ2IoNDYgMTA1IDI1NSAvIDI1JSk7XHJcbi8vIH1cclxuLy8gLmZvcm0tY2hlY2staW5wdXQ6aG92ZXIge1xyXG4vLyAgIGJvcmRlci1jb2xvcjogcmdiYSg0NiwgMTA1LCAyNTUsIDAuNSk7XHJcbi8vICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHJnYig0NiAxMDUgMjU1IC8gMjUlKTtcclxuLy8gfVxyXG4vLyAuZm9ybS1jaGVjay1pbnB1dCB7XHJcbi8vICAgd2lkdGg6IDIwcHg7XHJcbi8vICAgaGVpZ2h0OiAyMHB4O1xyXG4vLyB9XHJcbi8vIC5zaWduIHtcclxuLy8gICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbi8vIH1cclxuLy8gLnNpZ246aG92ZXIge1xyXG4vLyAgIGJvcmRlci1jb2xvcjogcmdiYSg0NiwgMTA1LCAyNTUsIDAuNSk7XHJcbi8vICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHJnYig0NiAxMDUgMjU1IC8gMjUlKTtcclxuLy8gfVxyXG4vLyAudHh0XzEge1xyXG4vLyAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuLy8gICBmb250LXNpemU6IDE2cHg7XHJcbi8vICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuLy8gICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4vLyB9XHJcbi8vIC5sYWJlbF8yIHtcclxuLy8gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbi8vICAgZm9udC1zaXplOiAxNnB4O1xyXG4vLyAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbi8vICAgbWFyZ2luLWxlZnQ6IDdweDtcclxuLy8gICBtYXJnaW4tdG9wOiA1cHg7XHJcbi8vIH1cclxuLy8gYnV0dG9uIHtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuLy8gICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4vLyAgIGJvcmRlcjogbm9uZTtcclxuLy8gICBjdXJzb3I6IHBvaW50ZXI7XHJcbi8vICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuLy8gICBvdXRsaW5lOiBub25lO1xyXG5cclxuLy8gfVxyXG5cclxuLy8gLm91dGxpbmU6aG92ZXIge1xyXG4vLyAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4vLyAgIGJvcmRlci1jb2xvcjogIzJlNjlmZjQwO1xyXG4vLyAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2IoNDYsIDEwNSwgMjU1LCAwLjI1KTtcclxuLy8gfVxyXG5cclxuLy8gLm91dGxpbmU6Zm9jdXMge1xyXG4vLyAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4vLyAgIGJvcmRlci1jb2xvcjogIzJlNjlmZjQwO1xyXG4vLyAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2IoNDYsIDEwNSwgMjU1LCAwLjI1KTtcclxuLy8gfVxyXG4vLyAudGl0bGUge1xyXG4vLyAgIGZvbnQtc2l6ZTogMzJweDtcclxuLy8gICBmb250LXdlaWdodDogNzAwO1xyXG4vLyAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgIGZvbnQtZmFtaWx5OiBJbnRlciwgc2Fucy1zZXJpZjtcclxuLy8gfVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi5yZXBvcnRfMSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcclxuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIGJsdWU7XHJcbn1cclxuXHJcbmRpdi5saWtlXzEge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbiAgbWFyZ2luLXRvcDogOTJweDtcclxuICBtYXJnaW4tbGVmdDogLTM3cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMzVweDtcclxufVxyXG4uTV8xIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbn1cclxuLkhfMSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlcmVkO1xyXG59XHJcbi5MXzEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5NSwgMjIzLCA5NSk7XHJcbn1cclxuZGl2LnNwYWNlXzEge1xyXG4gIG1hcmdpbjogMHB4IDM3cHggMHB4IDM3cHg7XHJcbn1cclxuZGl2Lmxpa2VfMiB7XHJcbiAgbWFyZ2luOiAyMnB4IDAgMCAwO1xyXG59XHJcbmxhYmVsOm5vdCguZm9ybS1jaGVjay1sYWJlbCk6bm90KC5jdXN0b20tZmlsZS1sYWJlbCkge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi8vIGxhYmVsIHtcclxuLy8gICAgIG1hcmdpbi1ib3R0b206IDQlO2tzXHJcbi8vICAgICBtYXJnaW4tdG9wOiAyJTtcclxuLy8gfVxyXG50ciB0aCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxufVxyXG5cclxudHIgdGQge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbn1cclxubGFiZWwge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG59XHJcbi5mb3JtLWNvbnRyb2w6aG92ZXIge1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSg0NiwgMTA1LCAyNTUsIDAuNSk7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHJnYig0NiAxMDUgMjU1IC8gMjUlKTtcclxufVxyXG4uZm9ybS1jaGVjay1pbnB1dDpob3ZlciB7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDQ2LCAxMDUsIDI1NSwgMC41KTtcclxuICBib3gtc2hhZG93OiAwIDAgMCAycHggcmdiKDQ2IDEwNSAyNTUgLyAyNSUpO1xyXG59XHJcbi5mb3JtLWNoZWNrLWlucHV0IHtcclxuICB3aWR0aDogMTVweDtcclxuICBoZWlnaHQ6IDE1cHg7XHJcbn1cclxuLnNpZ24ge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxufVxyXG4uc2lnbjpob3ZlciB7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDQ2LCAxMDUsIDI1NSwgMC41KTtcclxuICBib3gtc2hhZG93OiAwIDAgMCAycHggcmdiKDQ2IDEwNSAyNTUgLyAyNSUpO1xyXG59XHJcbi50eHRfMSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbn1cclxuLmxhYmVsXzIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBtYXJnaW4tbGVmdDogN3B4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XHJcbn1cclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5vdXRsaW5lOmhvdmVyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZDtcclxuICBib3JkZXItY29sb3I6ICMyZTY5ZmY0MDtcclxuICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiKDQ2LCAxMDUsIDI1NSwgMC4yNSk7XHJcbn1cclxuXHJcbi5vdXRsaW5lOmZvY3VzIHtcclxuICBib3JkZXI6IDFweCBzb2xpZDtcclxuICBib3JkZXItY29sb3I6ICMyZTY5ZmY0MDtcclxuICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiKDQ2LCAxMDUsIDI1NSwgMC4yNSk7XHJcbn1cclxuLnRpdGxlIHtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogSW50ZXIsIHNhbnMtc2VyaWY7XHJcbn1cclxuaW5wdXRbdHlwZT0nZmlsZSddIHtcclxuICBoZWlnaHQ6IDEwJTtcclxuICBwYWRkaW5nOiAwJTtcclxufVxyXG4ubXlCdG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcbi5leGFtcGxlLWxpc3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICAvL2JvcmRlcjogc29saWQgMXB4ICNjY2M7XHJcbiAgLy9taW4taGVpZ2h0OiA2MHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uZXhhbXBsZS1ib3gge1xyXG4gIC8vcGFkZGluZzogMjBweCAxMHB4O1xyXG4gIC8vYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjY2M7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XHJcbiAgLy9kaXNwbGF5OiBmbGV4O1xyXG4gLy8gZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAvL2FsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLy9qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBjdXJzb3I6IG1vdmU7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5leGFtcGxlLWJveDpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxLCAyMzcsIDIzNyk7XHJcbn1cclxuLmNkay1kcmFnLXByZXZpZXcge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcclxuICAgICAgICAgICAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxyXG4gICAgICAgICAgICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbn1cclxuXHJcbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLmNkay1kcmFnLWFuaW1hdGluZyB7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG59XHJcblxyXG4uZXhhbXBsZS1ib3g6bGFzdC1jaGlsZCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uZXhhbXBsZS1saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmV4YW1wbGUtYm94Om5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbn1cclxuLmlkZW50aWZ5SGF6IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAvLyBoZWlnaHQ6OTlweDtcclxuICAvLyBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gIC8vIGxpc3Qtc3R5bGUtdHlwZTpub25lO1xyXG4gIC8vIHBhZGRpbmc6IDVweDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcblxyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogNXB4O1xyXG59XHJcblxyXG4vKiBUcmFjayAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxOyBcclxufVxyXG4gXHJcbi8qIEhhbmRsZSAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kOiAjODg4OyBcclxufVxyXG5cclxuLyogSGFuZGxlIG9uIGhvdmVyICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICM1NTU7IFxyXG59XHJcbi8vIGJvZHkge1xyXG4vLyAgIG92ZXJmbG93LXk6IGhpZGRlbjsgLyogSGlkZSB2ZXJ0aWNhbCBzY3JvbGxiYXIgKi9cclxuLy8gICBvdmVyZmxvdy14OiBoaWRkZW47IC8qIEhpZGUgaG9yaXpvbnRhbCBzY3JvbGxiYXIgKi9cclxuLy8gfVxyXG5cclxuLm1hdC1pY29uIHtcclxuICBoZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcclxuICB3aWR0aDogMjBweCAhaW1wb3J0YW50O1xyXG4gIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xyXG59XHJcbi5zZXRCb3hNYXJ0IHtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG4uc3RlcEl0ZW17XHJcbiAgY3Vyc29yOiBkZWZhdWx0ICFpbXBvcnRhbnQ7XHJcblxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RiskAssessmentSWMSComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-risk-assessment-swms',
                templateUrl: './risk-assessment-swms.component.html',
                styleUrls: ['./risk-assessment-swms.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] }, { type: src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_9__["LogicalFormInfoService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_10__["SetTitleService"] }]; }, { projectManager: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['projectManager']
        }], signaturePad1Div: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['signaturePad1Div']
        }], signaturePad1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['Signature1']
        }], signaturePad2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['Signature2']
        }] }); })();


/***/ }),

/***/ "xWxM":
/*!**************************************************************************!*\
  !*** ./src/app/views/forms/incidents-table/incidents-table.component.ts ***!
  \**************************************************************************/
/*! exports provided: IncidentsTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentsTableComponent", function() { return IncidentsTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "5QHs");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "LUZP");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "OaSA");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utils/services/logical-form-info.service */ "wbBK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ "ZFy/");












function IncidentsTableComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IncidentsTableComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r15 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r15 + 1);
} }
function IncidentsTableComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Project Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IncidentsTableComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r16.projectName);
} }
function IncidentsTableComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Customer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IncidentsTableComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r17.customerName);
} }
function IncidentsTableComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IncidentsTableComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r18.custEmail, " ");
} }
function IncidentsTableComponent_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Site Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IncidentsTableComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r19.siteName, " ");
} }
function IncidentsTableComponent_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IncidentsTableComponent_td_24_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IncidentsTableComponent_td_24_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const element_r20 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.edit(element_r20._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IncidentsTableComponent_td_24_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const element_r20 = ctx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.delete(element_r20._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IncidentsTableComponent_tr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 23);
} }
function IncidentsTableComponent_tr_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 24);
} }
const _c0 = function () { return ["/admin/forms"]; };
const _c1 = function () { return [20]; };
class IncidentsTableComponent {
    constructor(logicalFormInfo, router) {
        this.logicalFormInfo = logicalFormInfo;
        this.router = router;
        this.displayedColumns = ['position', 'projectName', "customerName", "Email", "Site", 'Action'];
    }
    ngOnInit() {
        this.getIncidentReport();
    }
    ngAfterViewInit() {
        this.tempArray.paginator = this.paginator;
        this.tempArray.sort = this.sort;
    }
    delete(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: 'Are you sure?',
            text: `Do you want to delete `,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#00B96F',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Delete!',
        }).then((result) => {
            if (result.value) {
                this.logicalFormInfo.deleteIncidentReport(id).subscribe((res) => {
                    console.log("deleted", res);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                        title: 'Deleted successfully',
                        showConfirmButton: false,
                        timer: 1200,
                    });
                    console.log('deleted res', res);
                    this.getIncidentReport();
                });
            }
        });
    }
    getIncidentReport() {
        this.logicalFormInfo.getAllIncidentReport().subscribe((res) => {
            this.showDatas = res.data;
            this.tempArray = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.showDatas);
            this.tempArray.paginator = this.paginator;
            this.tempArray.sort = this.sort;
            console.log("get res", this.showDatas);
        });
    }
    edit(id) {
        this.router.navigate(["/admin/forms/incidentRep/" + id]);
    }
}
IncidentsTableComponent.ɵfac = function IncidentsTableComponent_Factory(t) { return new (t || IncidentsTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_5__["LogicalFormInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
IncidentsTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IncidentsTableComponent, selectors: [["app-incidents-table"]], viewQuery: function IncidentsTableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 28, vars: 7, consts: [[1, "btn", "btn-outline-primary", 3, "routerLink"], ["aria-hidden", "true", 1, "fa", "fa-arrow-left"], [1, "col", "ml-2", "pt-3"], [1, ""], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "projectName"], ["matColumnDef", "customerName"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "Email"], ["matColumnDef", "Site"], ["matColumnDef", "Action"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", "aria-label", "Select page of periodic elements", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], [2, "display", "flex", "justify-content", "space-around"], ["matTooltip", "Edit", 1, "material-icons", 2, "color", "#c1c1c1", "cursor", "pointer !important", 3, "click"], ["matTooltip", "Delete", 1, "material-icons", 2, "color", "#c1c1c1", "cursor", "pointer !important", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function IncidentsTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Incident Report List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, IncidentsTableComponent_th_8_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, IncidentsTableComponent_td_9_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, IncidentsTableComponent_th_11_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, IncidentsTableComponent_td_12_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, IncidentsTableComponent_th_14_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, IncidentsTableComponent_td_15_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](16, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, IncidentsTableComponent_th_17_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, IncidentsTableComponent_td_18_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](19, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, IncidentsTableComponent_th_20_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, IncidentsTableComponent_td_21_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](22, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, IncidentsTableComponent_th_23_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, IncidentsTableComponent_td_24_Template, 6, 0, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, IncidentsTableComponent_tr_25_Template, 1, 0, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, IncidentsTableComponent_tr_26_Template, 1, 0, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "mat-paginator", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.tempArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltip"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]], styles: [".viewBtn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #007bff;\n  font-size: 21px !important;\n}\n\n  .mat-sort-header-container {\n  margin-left: 47% !important;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.select[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n\n.pt-3[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 32px;\n  font-weight: 700;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaW5jaWRlbnRzLXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLDBCQUFBO0FBQ0o7O0FBQ0E7RUFDRSwyQkFBQTtBQUVGOztBQUFBO0VBQ0ksV0FBQTtBQUdKOztBQURBO0VBQ0ksc0JBQUE7QUFJSjs7QUFGRTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQUtKIiwiZmlsZSI6ImluY2lkZW50cy10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52aWV3QnRuIGkge1xyXG4gICAgY29sb3I6ICMwMDdiZmY7XHJcbiAgICBmb250LXNpemU6IDIxcHggIWltcG9ydGFudDtcclxufVxyXG46Om5nLWRlZXAgLm1hdC1zb3J0LWhlYWRlci1jb250YWluZXIge1xyXG4gIG1hcmdpbi1sZWZ0OiA0NyUgIWltcG9ydGFudDtcclxufVxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbi5zZWxlY3R7XHJcbiAgICB3aWR0aDoxMDAlIWltcG9ydGFudDtcclxufVxyXG4gIC5wdC0zIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgZm9udC1mYW1pbHk6IEludGVyLCBzYW5zLXNlcmlmO1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IncidentsTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-incidents-table',
                templateUrl: './incidents-table.component.html',
                styleUrls: ['./incidents-table.component.scss']
            }]
    }], function () { return [{ type: src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_5__["LogicalFormInfoService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"]]
        }] }); })();


/***/ }),

/***/ "xx1r":
/*!**************************************************************************************!*\
  !*** ./src/app/views/forms/site-inspection-table/site-inspection-table.component.ts ***!
  \**************************************************************************************/
/*! exports provided: SiteInspectionTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteInspectionTableComponent", function() { return SiteInspectionTableComponent; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "5QHs");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "LUZP");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "OaSA");
/* harmony import */ var src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utils/services/logical-form-info.service */ "wbBK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ "ZFy/");












function SiteInspectionTableComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SiteInspectionTableComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r15 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r15 + 1);
} }
function SiteInspectionTableComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SiteInspectionTableComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r16.customerName);
} }
function SiteInspectionTableComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SiteInspectionTableComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r18.custConctPh);
} }
function SiteInspectionTableComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SiteInspectionTableComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r19.custEmail, " ");
} }
function SiteInspectionTableComponent_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Site Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SiteInspectionTableComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r20.siteName, " ");
} }
function SiteInspectionTableComponent_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SiteInspectionTableComponent_td_24_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteInspectionTableComponent_td_24_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const element_r21 = ctx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r22.edit(element_r21._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SiteInspectionTableComponent_td_24_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const element_r21 = ctx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r24.delete(element_r21._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SiteInspectionTableComponent_tr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 23);
} }
function SiteInspectionTableComponent_tr_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 24);
} }
const _c0 = function () { return ["/admin/forms"]; };
const _c1 = function () { return [20]; };
class SiteInspectionTableComponent {
    constructor(logicalFormInfo, router) {
        this.logicalFormInfo = logicalFormInfo;
        this.router = router;
        this.displayedColumns = ['position', 'Name', "Phone", "Email", "Site", 'Action'];
    }
    ngOnInit() {
        this.getsiteInspection();
    }
    ngAfterViewInit() {
    }
    delete(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
            title: 'Are you sure?',
            text: `Do you want to delete `,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#00B96F',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Delete!',
        }).then((result) => {
            if (result.value) {
                this.logicalFormInfo.deleteSiteInspection(id).subscribe((res) => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
                        title: 'Deleted successfully',
                        showConfirmButton: false,
                        timer: 1200,
                    });
                    console.log('deleted res', res);
                    this.getsiteInspection();
                });
            }
        });
    }
    getsiteInspection() {
        this.logicalFormInfo.getAllSiteInspection().subscribe((res) => {
            console.log("res", res.data);
            this.showDatas = res.data.map(x => {
                console.log(x.sitePreview);
                return Object.assign(Object.assign({}, x.sitePreview[0]), { _id: x._id });
            });
            this.tempArray = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.showDatas);
            this.tempArray.paginator = this.paginator;
            this.tempArray.sort = this.sort;
            console.log("get res", this.showDatas);
        });
    }
    edit(id) {
        this.router.navigate(["/admin/forms/siteInspect/" + id]);
    }
}
SiteInspectionTableComponent.ɵfac = function SiteInspectionTableComponent_Factory(t) { return new (t || SiteInspectionTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_5__["LogicalFormInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
SiteInspectionTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SiteInspectionTableComponent, selectors: [["app-site-inspection-table"]], viewQuery: function SiteInspectionTableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 28, vars: 7, consts: [[1, "btn", "btn-outline-primary", 3, "routerLink"], ["aria-hidden", "true", 1, "fa", "fa-arrow-left"], [1, "col", "ml-2", "pt-3"], [1, ""], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Name"], ["matColumnDef", "Phone"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "Email"], ["matColumnDef", "Site"], ["matColumnDef", "Action"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", "aria-label", "Select page of periodic elements", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], [2, "display", "flex", "justify-content", "space-around"], ["matTooltip", "Edit", 1, "material-icons", 2, "color", "#c1c1c1", "cursor", "pointer !important", 3, "click"], ["matTooltip", "Delete", 1, "material-icons", 2, "color", "#c1c1c1", "cursor", "pointer !important", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function SiteInspectionTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Site Inspection List");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](7, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SiteInspectionTableComponent_th_8_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, SiteInspectionTableComponent_td_9_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](10, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, SiteInspectionTableComponent_th_11_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, SiteInspectionTableComponent_td_12_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](13, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, SiteInspectionTableComponent_th_14_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, SiteInspectionTableComponent_td_15_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](16, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, SiteInspectionTableComponent_th_17_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, SiteInspectionTableComponent_td_18_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](19, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, SiteInspectionTableComponent_th_20_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, SiteInspectionTableComponent_td_21_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](22, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, SiteInspectionTableComponent_th_23_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, SiteInspectionTableComponent_td_24_Template, 6, 0, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, SiteInspectionTableComponent_tr_25_Template, 1, 0, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, SiteInspectionTableComponent_tr_26_Template, 1, 0, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "mat-paginator", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.tempArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltip"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"]], styles: [".viewBtn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #007bff;\n  font-size: 21px !important;\n}\n\n  .mat-sort-header-container {\n  margin-left: 47% !important;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.select[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n\n.pt-3[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 32px;\n  font-weight: 700;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2l0ZS1pbnNwZWN0aW9uLXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLDBCQUFBO0FBQ0o7O0FBQ0E7RUFDRSwyQkFBQTtBQUVGOztBQUFBO0VBQ0ksV0FBQTtBQUdKOztBQURBO0VBQ0ksc0JBQUE7QUFJSjs7QUFGRTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQUtKIiwiZmlsZSI6InNpdGUtaW5zcGVjdGlvbi10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52aWV3QnRuIGkge1xyXG4gICAgY29sb3I6ICMwMDdiZmY7XHJcbiAgICBmb250LXNpemU6IDIxcHggIWltcG9ydGFudDtcclxufVxyXG46Om5nLWRlZXAgLm1hdC1zb3J0LWhlYWRlci1jb250YWluZXIge1xyXG4gIG1hcmdpbi1sZWZ0OiA0NyUgIWltcG9ydGFudDtcclxufVxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbi5zZWxlY3R7XHJcbiAgICB3aWR0aDoxMDAlIWltcG9ydGFudDtcclxufVxyXG4gIC5wdC0zIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgZm9udC1mYW1pbHk6IEludGVyLCBzYW5zLXNlcmlmO1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SiteInspectionTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-site-inspection-table',
                templateUrl: './site-inspection-table.component.html',
                styleUrls: ['./site-inspection-table.component.scss']
            }]
    }], function () { return [{ type: src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_5__["LogicalFormInfoService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"]]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=views-forms-forms-module-es2015.js.map