(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-forms-forms-module"], {
    /***/
    "4psL": function psL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IncidentReportComponent", function () {
        return IncidentReportComponent;
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


      var src_app_utils_services_dynamic_forms_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/utils/services/dynamic-forms.service */
      "+3ge");
      /* harmony import */


      var src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/utils/services/set-title.service */
      "yZxC");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! angular2-signaturepad */
      "HnZm");

      var _c0 = ["signature1"];
      var _c1 = ["signature2"];

      function IncidentReportComponent_div_75_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function IncidentReportComponent_div_75_Template_input_change_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.onChangeIncident($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var incident_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", incident_r7.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](incident_r7.name);
        }
      }

      function IncidentReportComponent_div_111_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function IncidentReportComponent_div_111_Template_input_change_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.onNatureOFIncidents($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var nature_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", nature_r10.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](nature_r10.name);
        }
      }

      function IncidentReportComponent_div_171_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function IncidentReportComponent_div_171_Template_input_change_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.onPPE($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var PPES_r13 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", PPES_r13.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](PPES_r13.name);
        }
      }

      function IncidentReportComponent_div_178_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function IncidentReportComponent_div_178_Template_input_change_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r17.onRootCauseIncident($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var rootCause_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", rootCause_r16.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rootCause_r16.name);
        }
      }

      function IncidentReportComponent_div_215_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function IncidentReportComponent_div_215_Template_input_change_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r20.onChanges($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var change_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", change_r19.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](change_r19.name);
        }
      }

      var _c2 = function _c2() {
        return ["/admin/forms"];
      };

      var IncidentReportComponent = /*#__PURE__*/function () {
        function IncidentReportComponent(fb, dynamicFormsService, setTitle) {
          _classCallCheck(this, IncidentReportComponent);

          this.fb = fb;
          this.dynamicFormsService = dynamicFormsService;
          this.setTitle = setTitle;
          this.fileArr = [];
          this.imgArr = [];
          this.fileObj = [];
          this.signaturePadOptions = {
            // passed through to szimek/signature_pad constructor
            minWidth: 1,
            canvasWidth: 480,
            canvasHeight: 100
          };
          this.signaturePadOptions1 = {
            // passed through to szimek/signature_pad constructor
            minWidth: 1,
            canvasWidth: 480,
            canvasHeight: 100
          };
          this.incidents = [{
            name: 'NearMiss',
            value: 'nearMiss'
          }, {
            name: 'LossInjuiry',
            value: 'lossInjuiry'
          }, {
            name: 'PropertyDamage',
            value: 'propertyDamage'
          }, {
            name: 'FirstAidTreatment',
            value: 'firstAidTreatment'
          }, {
            name: 'MedicalTreatment',
            value: 'medicalTreatment'
          }, {
            name: 'AbestosDetection',
            value: 'abestosDetection'
          }, {
            name: 'Death',
            value: 'death'
          }];
          this.natureOFIncidents = [{
            name: 'Abrasion',
            value: 'abrasion'
          }, {
            name: 'Bruise',
            value: 'bruise'
          }, {
            name: 'Cuts',
            value: 'cuts'
          }, {
            name: 'Illness',
            value: 'illness'
          }, {
            name: 'Amputation',
            value: 'amputation'
          }, {
            name: 'Burn',
            value: 'burn'
          }, {
            name: 'Hernia',
            value: 'Hernia'
          }, {
            name: 'BrokenBone',
            value: 'brokenBone'
          }, {
            name: 'Other',
            value: 'other'
          }, {
            name: 'CrushingInjuiry',
            value: 'crushingInjuiry'
          }, {
            name: 'Headinjury',
            value: 'headinjury'
          }];
          this.PPE = [{
            name: 'DisposalDustMask',
            value: 'disposalDustMask'
          }, {
            name: 'HalfFaceRespirator',
            value: 'halfFaceRespirator'
          }, {
            name: 'Longsleeve/Long pants',
            value: 'longSLeeve'
          }, {
            name: 'SafetyGlasses',
            value: 'safetyGlasses'
          }, {
            name: 'DustMask',
            value: 'dustMask'
          }, {
            name: 'Hard Hat',
            value: 'hardHat'
          }, {
            name: 'OutOfService',
            value: 'outOfService'
          }, {
            name: 'SunScreen',
            value: 'sun'
          }, {
            name: 'FaceShield',
            value: 'faceShield'
          }, {
            name: 'HearingProtection',
            value: 'hearing'
          }, {
            name: 'ProtectiveGloves',
            value: 'protectiveGloves'
          }, {
            name: 'Torch',
            value: 'torch'
          }, {
            name: 'FullFaceRespirator',
            value: 'fullFaceRespirator'
          }, {
            name: 'HighVisClothing',
            value: 'highVisClothing'
          }, {
            name: 'RescueKit',
            value: 'rescueKit'
          }, {
            name: 'Gattors',
            value: 'gattors'
          }, {
            name: 'LockOutTags',
            value: 'lockOutTags'
          }, {
            name: 'safetyBoots',
            value: 'safetyBoots'
          }];
          this.rootCauseIncident = [{
            name: 'InsufficentGuard',
            value: 'insufficentGuard'
          }, {
            name: 'FualtyPPE',
            value: 'fualtyPPE'
          }, {
            name: 'DefectiveSafety',
            value: 'defectiveSafety'
          }, {
            name: 'NotWearingCorrectPPE',
            value: 'notWearingCorrectPPE'
          }, {
            name: 'PoorLiftingtechnic',
            value: 'poorLiftingtechnic'
          }, {
            name: 'DefectiveEquipment',
            value: 'defectiveEquipment'
          }, {
            name: 'IncorrectTools',
            value: 'incorrectTools'
          }, {
            name: 'HorsePlay',
            value: 'horsePlay'
          }, {
            name: 'PoorLighting',
            value: 'poorLighting'
          }, {
            name: 'LackOfTraining',
            value: 'lackOfTraining'
          }, {
            name: 'Other',
            value: 'rootCauseOther'
          }, {
            name: 'LackOfVentilation',
            value: 'lack'
          }, {
            name: 'Unauthorised operation',
            value: 'unauthorisedOperation'
          }, // { name: 'IncorrectOperationOfPlantorEqiupment', value: 'incorrectOperation' },
          {
            name: 'IncorrectOperationPlantorEqiupment',
            value: 'incorrectOperation'
          }];
          this.changes = [{
            name: 'StopTheActivity',
            value: 'stopTheActivity'
          }, {
            name: 'WriteTheNewSOPorProcess',
            value: 'SOP'
          }, {
            name: 'SupervisorTraining',
            value: 'supervisorTraining'
          }, {
            name: 'EnforceCurrentPolicy',
            value: 'enforceCurrentPolicy'
          }, {
            name: 'WearPPE',
            value: 'wearPPE'
          }, {
            name: 'ChangesOther',
            value: 'changesOther'
          }, {
            name: 'ReassessTheTasks',
            value: 'reassessTheTasks'
          }, {
            name: 'EmployeeTraining',
            value: 'employeeTraining'
          }, {
            name: 'LackOfVentilation',
            value: 'lack'
          }, {
            name: 'LackOfVentilation',
            value: 'lack'
          }];
          this.SiteIncident = this.fb.group({
            incidents: this.fb.array([]),
            natureOFIncidents: this.fb.array([]),
            PPE: this.fb.array([]),
            rootCauseIncident: this.fb.array([]),
            changes: this.fb.array([]),
            projectNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            projectName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            siteName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            customerName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            siteAddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            customerContact: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            projectManager: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            personCompletingForm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            customerContactPhone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            customerContactEmail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dateOfFormCompletion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            department: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            position: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            locationOfTheIncident: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dateOfTheIncident: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            timeOfTheIncident: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            whyDidtheUnsafeConditonExist: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            CompletedName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            CompletedPosition: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            CompletedDepartment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            CompletedDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            reviewedName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            reviewedPosition: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            reviewedDepartment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            reviewedDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            typeofIncident: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            file: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }

        _createClass(IncidentReportComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.dynamicFormsService.homebarTitle.next('Incident Report Form');
            this.setTitle.setTitle('WHS-Hazard Report Form');
          }
        }, {
          key: "selectFile",
          value: function selectFile(event) {
            this.fileData = event.target.files[0];

            if (this.fileData.type == 'image/jpeg' || this.fileData.type == 'application/pdf') {} else {
              alert('file type should be image of pdf');
              return;
            }
          }
        }, {
          key: "submit",
          value: function submit() {
            console.log(this.SiteIncident.value);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            // this.signaturePad is now available
            this.signaturePad.set('minWidth', 1); // set szimek/signature_pad options at runtime

            this.signaturePad.set('dotSize', 1); // set szimek/signature_pad options at runtime

            this.signaturePad.clear(); // invoke functions from szimek/signature_pad API

            this.signaturePad1.clear(); // invoke functions from szimek/signature_pad API
          }
        }, {
          key: "drawComplete",
          value: function drawComplete() {
            // will be notified of szimek/signature_pad's onEnd event
            console.log(this.signaturePad.toDataURL());
          }
        }, {
          key: "drawComplete1",
          value: function drawComplete1() {
            // will be notified of szimek/signature_pad's onEnd event
            console.log(this.signaturePad1.toDataURL());
          }
        }, {
          key: "clear",
          value: function clear() {
            this.signaturePad.clear();
          }
        }, {
          key: "clear1",
          value: function clear1() {
            console.log('cl1');
            this.signaturePad1.clear();
          }
        }, {
          key: "drawStart",
          value: function drawStart() {
            // will be notified of szimek/signature_pad's onBegin event
            console.log('begin drawing');
          }
        }, {
          key: "drawStart1",
          value: function drawStart1() {
            // will be notified of szimek/signature_pad's onBegin event
            console.log('begin drawing');
          }
        }, {
          key: "onChangeIncident",
          value: function onChangeIncident(e) {
            var checkArray = this.SiteIncident.get('incidents');
            var item = e.target.value;

            if (e.target.checked) {
              checkArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item));
              console.log(item);
            } else {
              var i = 0;
              checkArray.controls.forEach(function (item) {
                if (item.value == e.target.value) {
                  checkArray.removeAt(i);
                }
              });
            }
          }
        }, {
          key: "onNatureOFIncidents",
          value: function onNatureOFIncidents(e) {
            var NatureArray = this.SiteIncident.get('natureOFIncidents');
            var item = e.target.value;

            if (e.target.checked) {
              NatureArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item));
              console.log(item);
            } else {
              var i = 0;
              NatureArray.controls.forEach(function (item) {
                if (item.value == e.target.value) {
                  NatureArray.removeAt(i);
                }
              });
            }
          }
        }, {
          key: "onPPE",
          value: function onPPE(e) {
            var PPEArray = this.SiteIncident.get('PPE');
            var item = e.target.value;

            if (e.target.checked) {
              PPEArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item));
              console.log(item);
            } else {
              var i = 0;
              PPEArray.controls.forEach(function (item) {
                if (item.value == e.target.value) {
                  PPEArray.removeAt(i);
                }
              });
            }
          }
        }, {
          key: "onRootCauseIncident",
          value: function onRootCauseIncident(e) {
            var IncidentArray = this.SiteIncident.get('rootCauseIncident');
            var item = e.target.value;

            if (e.target.checked) {
              IncidentArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item));
              console.log(item);
            } else {
              var i = 0;
              IncidentArray.controls.forEach(function (item) {
                if (item.value == e.target.value) {
                  IncidentArray.removeAt(i);
                }
              });
            }
          }
        }, {
          key: "onChanges",
          value: function onChanges(e) {
            var ChangeArray = this.SiteIncident.get('changes');
            var item = e.target.value;

            if (e.target.checked) {
              ChangeArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item));
              console.log(item);
            } else {
              var i = 0;
              ChangeArray.controls.forEach(function (item) {
                if (item.value == e.target.value) {
                  ChangeArray.removeAt(i);
                }
              });
            }
          }
        }]);

        return IncidentReportComponent;
      }();

      IncidentReportComponent.ɵfac = function IncidentReportComponent_Factory(t) {
        return new (t || IncidentReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_dynamic_forms_service__WEBPACK_IMPORTED_MODULE_2__["DynamicFormsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_3__["SetTitleService"]));
      };

      IncidentReportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: IncidentReportComponent,
        selectors: [["app-incident-report"]],
        viewQuery: function IncidentReportComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.signaturePad = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.signaturePad1 = _t.first);
          }
        },
        decls: 341,
        vars: 10,
        consts: [[1, "btn", "btn-outline-primary", 3, "routerLink"], ["aria-hidden", "true", 1, "fa", "fa-arrow-left"], [1, "container", "card", "px-4", "py-4", 3, "formGroup"], [1, "text-center", "pt-3"], [1, "title"], [1, "box"], [1, "row"], [1, "col-md-6"], ["for", "project Number", "for", "exampleFormControlInput1", 1, "form-Label"], ["type", "number", "formControlName", "projectNumber", "id", "projectNumber", 1, "form-control"], ["for", "project name", "for", "exampleFormControlInput1", 1, "form-Label"], ["type", "text", "formControlName", "projectName", "id", "projectName", 1, "form-control"], [1, "col-sm-6"], ["for", "site Name", "for", "exampleFormControlInput1", 1, "form-Label"], ["type", "text", "formControlName", "siteName", "id", "siteName", 1, "form-control"], ["for", "customerName", "for", "exampleFormControlInput1", 1, "form-Label"], ["type", "text", "formControlName", "customerName", "id", "customerName", 1, "form-control"], ["for", "siteAddress", "for", "exampleFormControlInput1", 1, "form-Label"], ["type", "text", "formControlName", "siteAddress", "id", "siteAddress", 1, "form-control"], ["for", "customerContact", "for", "exampleFormControlInput1", 1, "form-Label"], ["placeholder", "(000) 000-0000", "type", "text", "formControlName", "customerContact", "id", "customerContact", 1, "form-control"], ["for", "projectManager", "for", "exampleFormControlInput1", 1, "form-Label"], ["type", "text", "formControlName", "projectManager", "id", "projectManager", 1, "form-control"], ["for", "personCompletingForm", "for", "exampleFormControlInput1", 1, "form-Label"], ["type", "text", "formControlName", "personCompletingForm", "id", "personCompletingForm", 1, "form-control"], ["for", "customerContactPhone", "for", "exampleFormControlInput1", 1, "form-Label"], ["placeholder", "(000) 000-0000", "type", "text", "formControlName", "customerContactPhone", "id", "customerContactPhone", 1, "form-control"], ["for", "customerContactEmail", "for", "exampleFormControlInput1", 1, "form-Label"], ["placeholder", "ex: email@yahoo.com", "type", "text", "formControlName", "customerContactEmail", "id", "customerContactEmail", 1, "form-control"], ["for", "dateOfFormCompletion", 1, "form-Label"], ["type", "date", "formControlName", "dateOfFormCompletion", "id", "dateOfFormCompletion", 1, "form-control"], [1, "mt-3"], ["class", "mt-2 col-4", 4, "ngFor", "ngForOf"], [1, "col-12"], [1, "mt-3", "text-center"], [1, "form-Label"], ["for", "name", 1, "form-Label"], ["type", "text", "formControlName", "name", "id", "", "id", "name", 1, "form-control"], ["for", "department", 1, "form-Label"], ["type", "text", "formControlName", "department", "id", "department", 1, "form-control"], ["for", "position", 1, "form-Label"], ["type", "text", "formControlName", "position", "id", "position", 1, "form-control"], ["class", "mt-3 col-4", 4, "ngFor", "ngForOf"], ["for", "locationOfTheIncident", 1, "form-Label"], ["type", "text", "formControlName", "locationOfTheIncident", "id", "locationOfTheIncident", 1, "form-control"], [1, "col-md-3"], ["for", "dateOfTheIncident", 1, "form-Label"], ["type", "date", "formControlName", "dateOfTheIncident", "id", "dateOfTheIncident", 1, "form-control"], ["for", "timeOfTheIncident", 1, "form-Label"], ["type", "number", "formControlName", "timeOfTheIncident", "id", "timeOfTheIncident", 1, "form-control"], ["for", "exampleFormControlInput1", 1, "form-Label"], ["aria-label", "Default select example", 1, "form-select", "form-control", "col", "form-dropdown"], ["selected", "", "hidden", ""], ["value", "1"], ["value", "2"], ["value", "3"], [1, "col-md-12"], ["for", "formFile", 1, "form-Label"], ["formControlName", "file", "type", "file", "id", "formFile", 1, "form-control"], ["class", "mt-3 col-3", 4, "ngFor", "ngForOf"], ["for", "whyDidtheUnsafeConditonExist", 1, "form-Label"], ["type", "text", "formControlName", "whyDidtheUnsafeConditonExist", "id", "whyDidtheUnsafeConditonExist", 1, "form-control"], ["value", "yes"], ["value", "no"], ["class", "mt-2 col-4 mb-0", 4, "ngFor", "ngForOf"], [1, "col-6", "mb-4"], ["value", "ProjectManager"], ["value", "SiteSupervisor"], ["value", "WHSManager"], ["value", "WorkGroup"], ["value", "ComplianceManager"], ["value", "OperatonsManager"], ["type", "text", "id", "CompletedName", "formControlName", "CompletedName", 1, "form-control"], ["type", "text", "formControlName", "CompletedPosition", "id", "CompletedPosition", 1, "form-control"], ["type", "text", "formControlName", "CompletedDepartment", "id", "CompletedDepartment", 1, "form-control"], ["for", "date", 1, "form-Label"], ["type", "date", "formControlName", "CompletedDate", "id", "CompletedDate", 1, "form-control"], [1, "sign"], [3, "options", "onBeginEvent", "onEndEvent"], ["signature1", ""], [1, "btn", "btn-outline-primary", "mt-1", 3, "click"], ["for", "Name", 1, "form-Label"], ["type", "text", "id", "reviewedName", "formControlName", "reviewedName", 1, "form-control"], ["type", "text", "formControlName", "reviewedPosition", "id", "reviewedPosition", 1, "form-control"], ["type", "text", "formControlName", "reviewedDepartment", "id", "reviewedDepartment", 1, "form-control"], ["type", "date", "formControlName", "reviewedDate", "id", "reviewedDate", 1, "form-control"], ["signature2", ""], [1, "col-md-2"], ["type", "submit", 1, "btn", "btn-primary", "btn-block"], [1, "mt-2", "col-4"], [1, "checkrdobtn"], ["type", "checkbox", 1, "mr-1", 3, "value", "change"], [1, "txtdefault", "fs-16", "weight500", "text-center"], [1, "mt-3", "col-4"], [1, "mt-3", "col-3"], [1, "mt-2", "col-4", "mb-0"]],
        template: function IncidentReportComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Incident Report Form Preview");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Site Information");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Project Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Project Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Site Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Customer Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Site Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Customer Contact");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Project Manager");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Person Completing Form ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Customer Contact Phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "input", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Customer Contact Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "input", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "label", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Date of Form Completion");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "input", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Type of Incident");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, IncidentReportComponent_div_75_Template, 5, 2, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Instructions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " Complete this form as soon as possible after an incident that results in serious inquiry or illness or death. Use to investigate a minor injuiry or near-miss that could have resulted in a serious injury or illness. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Injuired or Affected Person");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "label", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "input", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "label", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Department");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "input", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "label", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "position");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "input", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Nature of Incident");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](111, IncidentReportComponent_div_111_Template, 5, 2, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "label", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Location of the incident");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "input", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "label", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Date of the incident");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "input", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "label", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Time of the incident");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "input", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Incident Information");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "label", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, " Name of Witness");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "select", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "option", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Select");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "option", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Option1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "option", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Option2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "option", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Option3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "label", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Witness Statement");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "select", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "option", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Select");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "option", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Option1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "option", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Option2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "option", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Option3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "label", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Attachments ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "input", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "What PPE was in Use ?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](171, IncidentReportComponent_div_171_Template, 5, 2, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "What was the rootcause of incident happen?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](178, IncidentReportComponent_div_178_Template, 5, 2, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "label", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "Why did the unsafe conditon exist");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "textarea", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "label", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Was the unsafe act or hazard reported prior to the incident?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "select", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "option", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Select");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "option", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "yes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "option", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "No");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "label", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "Has a similar incident Occured");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "select", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "option", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "Select");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "option", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "yes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "option", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "No");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "What changes can be made ?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](215, IncidentReportComponent_div_215_Template, 5, 2, "div", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "label", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "CorrectiveAction");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "select", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "option", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "Select....");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "Update Hazaord Signage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "Update Site Documentation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "Induct Workers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "Induct Workers into SWWS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "label", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "Person Responsible");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "select", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "option", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "Select...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "option", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "Project Manager");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "option", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "Site Supervisor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "option", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "WHS Manager");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "option", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "Work Group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "option", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "Compliance Manager");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "option", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "Operatons Manager");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "label", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "Complete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "select", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "option", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "Select");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "option", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "yes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "option", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "No");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](263, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "The Form was Completed by:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "label", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](273, "input", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "label", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "Position ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](278, "input", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "label", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, "Department");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](284, "input", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "label", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "Date ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](289, "input", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "label", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "Signature");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "div", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "signature-pad", 78, 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onBeginEvent", function IncidentReportComponent_Template_signature_pad_onBeginEvent_296_listener() {
              return ctx.drawStart();
            })("onEndEvent", function IncidentReportComponent_Template_signature_pad_onEndEvent_296_listener() {
              return ctx.drawComplete();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "button", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IncidentReportComponent_Template_button_click_298_listener() {
              return ctx.clear();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, " Clear ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](300, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "The Form was Reviewed by:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "label", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](309, "input", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "label", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, "Position ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](314, "input", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "label", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, "Department");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](320, "input", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "label", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, "Date ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](325, "input", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "label", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, "Signature");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "div", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "signature-pad", 78, 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onBeginEvent", function IncidentReportComponent_Template_signature_pad_onBeginEvent_332_listener() {
              return ctx.drawStart1();
            })("onEndEvent", function IncidentReportComponent_Template_signature_pad_onEndEvent_332_listener() {
              return ctx.drawComplete1();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "button", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IncidentReportComponent_Template_button_click_334_listener() {
              return ctx.clear1();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, " Clear ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](336, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](337, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "div", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "button", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](340, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.SiteIncident);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.incidents);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.natureOFIncidents);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.PPE);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.rootCauseIncident);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.changes);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](81);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.signaturePadOptions);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.signaturePadOptions1);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], angular2_signaturepad__WEBPACK_IMPORTED_MODULE_6__["SignaturePad"]],
        styles: [".container[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\nlabel[_ngcontent-%COMP%]:not(.form-check-label):not(.custom-file-label) {\n  font-weight: 500;\n}\n\nlabel[_ngcontent-%COMP%] {\n  margin-bottom: 4%;\n  margin-top: 2%;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 500;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n}\n\n  .mat-checkbox .mat-checkbox-inner-container {\n  width: 30px;\n  height: 30px;\n}\n\n.form-check-input[_ngcontent-%COMP%]:hover {\n  border-color: rgba(46, 105, 255, 0.5);\n  box-shadow: 0 0 0 2px rgba(46, 105, 255, 0.25);\n}\n\n.form-check-input[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n}\n\ninput[type=file][_ngcontent-%COMP%] {\n  height: 10%;\n  padding: 0%;\n}\n\n.pt-3[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 32px;\n  font-weight: 700;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n}\n\n.h5[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 20px;\n}\n\nbody[_ngcontent-%COMP%] {\n  background-color: #eee;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%] {\n  border: 5px solid #00d9ff;\n  box-shadow: 10px solid #00d9ff;\n  position: relative;\n  border-radius: 2px;\n  height: 15px;\n  width: 15px;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%]:hover {\n  border: 1px solid;\n  border-color: #2e69ff40;\n  box-shadow: 0 0 0 3px rgba(46, 105, 255, 0.25);\n  height: 15px;\n  width: 15px;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%]:focus {\n  border: 1px solid;\n  border-color: #2e69ff40;\n  box-shadow: 0 0 0 3px rgba(46, 105, 255, 0.25);\n  height: 15px;\n  width: 15px;\n}\n\n.box[_ngcontent-%COMP%] {\n  padding: 1px 9px;\n  box-shadow: 10px solid #00b7ff;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  box-shadow: 3px solid dodgerblue;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  padding: 10px;\n  max-width: 100%;\n  line-height: 1.5;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  box-shadow: 1px 1px 1px #999;\n}\n\n.sign[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid rgba(46, 105, 255, 0.5);\n  width: 500px;\n  border-radius: 5px;\n}\n\n.sign[_ngcontent-%COMP%]:hover {\n  border: 1px solid;\n  border-color: #2e69ff40;\n  box-shadow: 0 0 0 3px rgba(46, 105, 255, 0.25);\n}\n\n.form-control[_ngcontent-%COMP%]:hover {\n  border-color: rgba(46, 105, 255, 0.5);\n  box-shadow: 0 0 0 2px rgba(46, 105, 255, 0.25);\n}\n\nselect[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\n.form-dropdown[_ngcontent-%COMP%] {\n  padding: 0 1.875em 0 0.625em;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='240' height='240'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z'/%3E%3C/svg%3E\");\n  background-position: right 10px bottom 50%;\n  background-size: 0.925em;\n  background-repeat: no-repeat;\n}\n\n.title[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 16px;\n  font-weight: 600;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n}\n\n.form-Label[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 500;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n  width: 100%;\n  margin-left: 2px;\n  margin-bottom: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaW5jaWRlbnQtcmVwb3J0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBO0VBQ0UsdUJBQUE7QUFQRjs7QUFVQTtFQUNFLGdCQUFBO0FBUEY7O0FBU0E7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUFORjs7QUFTQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQU5GOztBQVNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFORjs7QUFRQTtFQUNFLHFDQUFBO0VBQ0EsOENBQUE7QUFMRjs7QUFPQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBSkY7O0FBT0E7RUFDRSxXQUFBO0VBQ0EsV0FBQTtBQUpGOztBQU1BO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBSEY7O0FBTUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFIRjs7QUFNQTtFQUNFLHNCQUFBO0FBSEY7O0FBS0E7RUFDRSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBRkY7O0FBaUJBO0VBQ0UsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLDhDQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFkRjs7QUFrQkE7RUFDRSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsOENBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQWZGOztBQWlCQTtFQUNFLGdCQUFBO0VBQ0EsOEJBQUE7QUFkRjs7QUFnQkE7RUFFRSxnQ0FBQTtBQWRGOztBQWlCQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUFkRjs7QUFpQkE7RUFDRSxhQUFBO0VBQ0EseUNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFkRjs7QUFnQkE7RUFDRSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsOENBQUE7QUFiRjs7QUFnQkE7RUFDRSxxQ0FBQTtFQUNBLDhDQUFBO0FBYkY7O0FBZUE7RUFDRSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFaRjs7QUFlQTtFQUNFLDRCQUFBO0VBQ0Esc1FBQUE7RUFDQSwwQ0FBQTtFQUNBLHdCQUFBO0VBRUEsNEJBQUE7QUFiRjs7QUFnQkE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFiRjs7QUFlQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBWkYiLCJmaWxlIjoiaW5jaWRlbnQtcmVwb3J0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbGFiZWw6bm90KC5mb3JtLWNoZWNrLWxhYmVsKTpub3QoLmN1c3RvbS1maWxlLWxhYmVsKSB7XHJcbi8vICAgICBmb250LXdlaWdodDogNTAwO1xyXG4vLyB9XHJcbi8vIGxhYmVsIHtcclxuLy8gICAgIG1hcmdpbi1ib3R0b206IDQlO1xyXG4vLyAgICAgbWFyZ2luLXRvcDogMiU7XHJcbi8vIH1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5sYWJlbDpub3QoLmZvcm0tY2hlY2stbGFiZWwpOm5vdCguY3VzdG9tLWZpbGUtbGFiZWwpIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbmxhYmVsIHtcclxuICBtYXJnaW4tYm90dG9tOiA0JTtcclxuICBtYXJnaW4tdG9wOiAyJTtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIGZvbnQtZmFtaWx5OiBJbnRlciwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtY2hlY2tib3ggLm1hdC1jaGVja2JveC1pbm5lci1jb250YWluZXIge1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxufVxyXG4uZm9ybS1jaGVjay1pbnB1dDpob3ZlciB7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDQ2LCAxMDUsIDI1NSwgMC41KTtcclxuICBib3gtc2hhZG93OiAwIDAgMCAycHggcmdiKDQ2IDEwNSAyNTUgLyAyNSUpO1xyXG59XHJcbi5mb3JtLWNoZWNrLWlucHV0IHtcclxuICB3aWR0aDogMjVweDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9J2ZpbGUnXSB7XHJcbiAgaGVpZ2h0OiAxMCU7XHJcbiAgcGFkZGluZzogMCU7XHJcbn1cclxuLnB0LTMge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIGZvbnQtZmFtaWx5OiBJbnRlciwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmg1IHtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxufVxyXG5pbnB1dFt0eXBlPSdjaGVja2JveCddIHtcclxuICBib3JkZXI6IDVweCBzb2xpZCByZ2IoMCwgMjE3LCAyNTUpO1xyXG4gIGJveC1zaGFkb3c6IDEwcHggc29saWQgcmdiKDAsIDIxNywgMjU1KTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGhlaWdodDogMTVweDtcclxuICB3aWR0aDogMTVweDtcclxuICAvLyBtYXJnaW4tdG9wOiAxcHg7XHJcbn1cclxuXHJcbi8vIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkK3NwYW46OmFmdGVyXHJcbi8vIHtcclxuLy8gICAgIGJveC1zaGFkb3c6MTBweCBzb2xpZCByZ2IoMCwgMjE3LCAyNTUpO1xyXG4vLyAgICAgYm9yZGVyOjVweCBzb2xpZCByZ2IoMCwgMjE3LCAyNTUpO1xyXG4vLyAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbi8vICAgICBoZWlnaHQ6MjBweDtcclxuLy8gICAgIHdpZHRoOjIwcHg7XHJcblxyXG4vLyB9XHJcblxyXG5pbnB1dFt0eXBlPSdjaGVja2JveCddOmhvdmVyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZDtcclxuICBib3JkZXItY29sb3I6ICMyZTY5ZmY0MDtcclxuICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiKDQ2LCAxMDUsIDI1NSwgMC4yNSk7XHJcbiAgaGVpZ2h0OiAxNXB4O1xyXG4gIHdpZHRoOiAxNXB4O1xyXG4gIC8vICBtYXJnaW4tdG9wOiAxcHg7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9J2NoZWNrYm94J106Zm9jdXMge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gIGJvcmRlci1jb2xvcjogIzJlNjlmZjQwO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2IoNDYsIDEwNSwgMjU1LCAwLjI1KTtcclxuICBoZWlnaHQ6IDE1cHg7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbn1cclxuLmJveCB7XHJcbiAgcGFkZGluZzogMXB4IDlweDtcclxuICBib3gtc2hhZG93OiAxMHB4IHNvbGlkIHJnYigwLCAxODMsIDI1NSk7XHJcbn1cclxuaW5wdXQ6Zm9jdXMge1xyXG4gIC8vIGJvcmRlcjogIDJweCBzb2xpZCBkb2RnZXJibHVlO1xyXG4gIGJveC1zaGFkb3c6IDNweCBzb2xpZCBkb2RnZXJibHVlO1xyXG59XHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAjOTk5O1xyXG59XHJcblxyXG4uc2lnbiB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDQ2LCAxMDUsIDI1NSwgMC41KTtcclxuICB3aWR0aDogNTAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi5zaWduOmhvdmVyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZDtcclxuICBib3JkZXItY29sb3I6ICMyZTY5ZmY0MDtcclxuICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiKDQ2LCAxMDUsIDI1NSwgMC4yNSk7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2w6aG92ZXIge1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSg0NiwgMTA1LCAyNTUsIDAuNSk7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHJnYig0NiAxMDUgMjU1IC8gMjUlKTtcclxufVxyXG5zZWxlY3Qge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgYXBwZWFyYW5jZTogbm9uZTtcclxufVxyXG5cclxuLmZvcm0tZHJvcGRvd24ge1xyXG4gIHBhZGRpbmc6IDAgMS44NzVlbSAwIDAuNjI1ZW07XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgd2lkdGg9JzI0MCcgaGVpZ2h0PScyNDAnJTNFJTNDcGF0aCBmaWxsPSdub25lJyBkPSdNMCAwaDI0djI0SDB6Jy8lM0UlM0NwYXRoIGQ9J00xMiAxMy4xNzJsNC45NS00Ljk1IDEuNDE0IDEuNDE0TDEyIDE2IDUuNjM2IDkuNjM2IDcuMDUgOC4yMjJ6Jy8lM0UlM0Mvc3ZnJTNFXCIpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDEwcHggYm90dG9tIDUwJTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDAuOTI1ZW07XHJcblxyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgZm9udC1mYW1pbHk6IEludGVyLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5mb3JtLUxhYmVsIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICBmb250LWZhbWlseTogSW50ZXIsIHNhbnMtc2VyaWY7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IncidentReportComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-incident-report',
            templateUrl: './incident-report.component.html',
            styleUrls: ['./incident-report.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: src_app_utils_services_dynamic_forms_service__WEBPACK_IMPORTED_MODULE_2__["DynamicFormsService"]
          }, {
            type: src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_3__["SetTitleService"]
          }];
        }, {
          signaturePad: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['signature1']
          }],
          signaturePad1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['signature2']
          }]
        });
      })();
      /***/

    },

    /***/
    "9Ohn": function Ohn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HazardReportComponent", function () {
        return HazardReportComponent;
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


      var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! angular2-signaturepad */
      "HnZm");
      /* harmony import */


      var src_app_utils_services_dynamic_forms_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/utils/services/dynamic-forms.service */
      "+3ge");
      /* harmony import */


      var src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/utils/services/set-title.service */
      "yZxC");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      var _c0 = function _c0() {
        return ["/admin/forms"];
      };

      var HazardReportComponent = /*#__PURE__*/function () {
        function HazardReportComponent(fb, dynamicFormsService, setTitle) {
          _classCallCheck(this, HazardReportComponent);

          this.fb = fb;
          this.dynamicFormsService = dynamicFormsService;
          this.setTitle = setTitle;
          this.title = 'hazardReport';
          this.signaturePadOptions = {
            // passed through to szimek/signature_pad constructor
            minWidth: 1,
            canvasWidth: 500,
            canvasHeight: 100
          };
          this.hazardReport = this.fb.group({
            siteAction: this.fb.array([]),
            employeeFulltime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            employeeParttime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            employeeCasual: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            employeeContractor: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            surname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            department: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            position: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            projectName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            managerSupervisor: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            managerSupervisorEmail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            whsManager: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            whsManagerEmail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            describeHazard: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dateHazardReport: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            locationHazard: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dateHazardIdentify: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            jobNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            actionimmediate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            actionToday: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            actionweek: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            actionMonth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            eliminateHazard: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            eliminateCorrect: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            elliminateAction: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            eliminateWhen: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            substitute: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            substituteCorrect: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            substituteAction: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            substituteWhen: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            isolated: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            isolatedCorrect: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            isolatedAction: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            isolatedWhen: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            solution: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            solutionCorrect: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            solutionAction: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            solutionWhen: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            procedureRemove: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            procedureRemoveCorrect: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            procedureRemoveAction: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            procedureRemoveWhen: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            PPE: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            PPEcorrect: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            PPEaction: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            PPEwhen: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            compilePosition: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            compileDepartment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            fileUpload: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            signature: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }

        _createClass(HazardReportComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.dynamicFormsService.homebarTitle.next('Hazard Report Form');
            this.setTitle.setTitle('WHS-Hazard Report Form');
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            // this.signaturePad is now available
            this.signaturePad.set('minWidth', 1); // set szimek/signature_pad options at runtime

            this.signaturePad.set('dotSize', 1); // set szimek/signature_pad options at runtime

            this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
          }
        }, {
          key: "drawComplete",
          value: function drawComplete() {
            // will be notified of szimek/signature_pad's onEnd event
            console.log(this.signaturePad.toDataURL());
          }
        }, {
          key: "clear",
          value: function clear() {
            this.signaturePad.clear();
          }
        }, {
          key: "drawStart",
          value: function drawStart() {
            // will be notified of szimek/signature_pad's onBegin event
            console.log('begin drawing');
          }
        }]);

        return HazardReportComponent;
      }();

      HazardReportComponent.ɵfac = function HazardReportComponent_Factory(t) {
        return new (t || HazardReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_dynamic_forms_service__WEBPACK_IMPORTED_MODULE_3__["DynamicFormsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_4__["SetTitleService"]));
      };

      HazardReportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HazardReportComponent,
        selectors: [["app-hazard-report"]],
        viewQuery: function HazardReportComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](angular2_signaturepad__WEBPACK_IMPORTED_MODULE_2__["SignaturePad"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.signaturePad = _t.first);
          }
        },
        decls: 488,
        vars: 4,
        consts: [[1, "btn", "btn-outline-primary", 3, "routerLink"], ["aria-hidden", "true", 1, "fa", "fa-arrow-left"], [1, "container", "card", "px-4", "py-4", "content-center"], [1, "px-4", "py-4", 3, "formGroup"], [1, "mb-3"], [1, "text-center", "title"], [1, "mt-5"], [1, "row", "py-4"], [1, "col-md-12"], [1, "col-md-6", 2, "padding", "0px"], [1, "mb-3", "text_1"], [1, "text_2"], [1, "col-md-12", 2, "padding", "0px"], [1, "form-check", "form-check-inline"], ["type", "radio", "name", "postionRep", "formControlName", "employeeFulltime", "id", "inlineCheckbox1", "value", "option1", 1, "form-check-input"], ["for", "inlineCheckbox1", 1, "form-check-label", "ml-1"], [1, "form-check", "form-check-inline", "ml-4"], ["type", "radio", "name", "postionRep", "formControlName", "employeeParttime", "id", "inlineCheckbox2", "value", "option1", 1, "form-check-input", "checkbox-lg"], ["for", "inlineCheckbox2", 1, "form-check-label", "ml-1"], ["type", "radio", "name", "postionRep", "formControlName", "employeeParttime", "id", "inlineCheckbox2", "value", "option2", 1, "form-check-input"], [1, "row"], [1, "col-md-6"], ["for", "exampleInputFullname", 1, "form-label"], ["type", "fullname", "formControlName", "fullName", "id", "exampleInputFullname", "aria-describedby", "emailHelp", 1, "form-control"], ["for", "exampleInputSurname", 1, "form-label"], ["type", "surname", "formControlName", "surname", "id", "exampleInputSurname", "aria-describedby", "emailHelp", 1, "form-control"], ["for", "exampleInputEmail1", 1, "form-label"], ["type", "email", "formControlName", "email", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", 1, "form-control"], ["for", "exampleInputPhone", 1, "form-label"], ["type", "email", "formControlName", "phone", "id", "exampleInputPhone", "aria-describedby", "emailHelp", 1, "form-control"], ["for", "exampleInputDepartment", 1, "form-label"], ["type", "department", "formControlName", "department", "id", "exampleInputDepartment", "aria-describedby", "emailHelp", 1, "form-control"], ["for", "exampleInputPosition", 1, "form-label"], ["type", "position", "formControlName", "position", "id", "exampleInputPosition", "aria-describedby", "emailHelp", 1, "form-control"], ["for", "exampleInputProjectNumber", 1, "form-label"], ["type", "Projectnumber", "formControlName", "projectName", "id", "exampleInputProjectNumber", "aria-describedby", "emailHelp", 1, "form-control"], [1, "col-md-12", "report_1"], [2, "margin-top", "1.5%"], [1, "form-label"], ["type", "text", "formControlName", "managerSupervisor", "aria-describedby", "emailHelp", 1, "form-control"], ["for", "email", 1, "form-label"], ["type", "email", "formControlName", "managerSupervisorEmail", "id", "exampleInputProjectNumber", "aria-describedby", "emailHelp", 1, "form-control"], ["type", "Projectnumber", "formControlName", "whsManager", "id", "exampleInputProjectNumber", "aria-describedby", "emailHelp", 1, "form-control"], ["type", "email", "formControlName", "whsManagerEmail", "id", "exampleInputProjectNumber", "aria-describedby", "emailHelp", 1, "form-control"], [1, "text_3"], [1, "col-md-12", "py-4"], [1, "form-floating"], ["formControlName", "describeHazard", "placeholder", "Leave a comment here", "id", "floatingTextarea2", 1, "form-control", 2, "height", "120px"], [1, "col-md-3"], ["type", "text", "formControlName", "dateHazardReport", "id", "exampleInputProjectNumber", "aria-describedby", "emailHelp", 1, "form-control"], ["type", "text", "formControlName", "locationHazard", "id", "exampleInputProjectNumber", "aria-describedby", "emailHelp", 1, "form-control"], ["type", "text", "formControlName", "dateHazardIdentify", "id", "exampleInputProjectNumber", "aria-describedby", "emailHelp", 1, "form-control"], ["type", "number", "formControlName", "jobNumber", "id", "exampleInputProjectNumber", "aria-describedby", "emailHelp", 1, "form-control"], [1, "table", "table-bordered", "text-center"], ["colspan", "7", 1, "L_1"], ["colspan", "8", 1, "L_1"], ["colspan", "2", "rowspan", "2"], ["colspan", "5"], ["colspan", "4", "rowspan", "2"], [1, "like_2"], ["rowspan", "5"], [1, "like_1"], [1, "M_1"], [1, "H_1"], ["colspan", "2"], [1, "space_1"], [1, "L_1"], ["scope", "col"], ["colspan", "2", 1, "mr-2", "ml-2"], [1, "mb-3", "col"], ["for", "exampleFormControlInput1", 1, "form-label"], ["aria-label", "Default select example", 1, "form-select", "form-control", "col"], ["selected", "", "hidden", ""], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], [1, "col-md"], ["type", "radio", "name", "action", "id", "inlineCheckbox1", "value", "option1", 1, "form-check-input"], ["type", "radio", "name", "action", "id", "inlineCheckbox2", "value", "option2", 1, "form-check-input"], [1, "mt-3"], [1, "col-md-4"], ["type", "fullname", "formControlName", "eliminateHazard", "id", "exampleInputFullname", "aria-describedby", "emailHelp", 1, "form-control"], ["type", "surname", "formControlName", "eliminateCorrect", "id", "exampleInputSurname", "aria-describedby", "emailHelp", 1, "form-control"], [1, "col-md-2"], ["for", "exampleInputEmail1", 1, "form-label", "label_1"], ["type", "email", "formControlName", "elliminateAction", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", 1, "form-control"], ["for", "exampleInputPhone", 1, "form-label", "label_1"], ["type", "date", "formControlName", "eliminateWhen", "id", "exampleInputPhone", "aria-describedby", "emailHelp", 1, "form-control"], ["type", "fullname", "formControlName", "substitute", "id", "exampleInputFullname", "aria-describedby", "emailHelp", 1, "form-control"], ["type", "surname", "formControlName", "substituteCorrect", "id", "exampleInputSurname", "aria-describedby", "emailHelp", 1, "form-control"], ["type", "email", "formControlName", "substituteAction", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", 1, "form-control"], ["type", "date", "formControlName", "substituteWhen", "id", "exampleInputPhone", "aria-describedby", "emailHelp", 1, "form-control"], ["type", "fullname", "formControlName", "isolated", "id", "exampleInputFullname", "aria-describedby", "emailHelp", 1, "form-control"], ["type", "surname", "formControlName", "isolatedCorrect", "id", "exampleInputSurname", "aria-describedby", "emailHelp", 1, "form-control"], ["type", "email", "formControlName", "isolatedAction", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", 1, "form-control"], ["type", "date", "formControlName", "isolatedWhen", "id", "exampleInputPhone", "aria-describedby", "emailHelp", 1, "form-control"], ["type", "fullname", "formControlName", "solution", "id", "exampleInputFullname", "aria-describedby", "emailHelp", 1, "form-control"], ["type", "surname", "formControlName", "solutionCorrect", "id", "exampleInputSurname", "aria-describedby", "emailHelp", 1, "form-control"], ["type", "email", "formControlName", "solutionAction", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", 1, "form-control"], ["type", "date", "formControlName", "solutionWhen", "id", "exampleInputPhone", "aria-describedby", "emailHelp", 1, "form-control"], ["type", "fullname", "formControlName", "procedureRemove", "id", "exampleInputFullname", "aria-describedby", "emailHelp", 1, "form-control"], ["type", "surname", "formControlName", "procedureRemoveCorrect", "id", "exampleInputSurname", "aria-describedby", "emailHelp", 1, "form-control"], ["type", "email", "formControlName", "procedureRemoveAction", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", 1, "form-control"], ["type", "date", "formControlName", "procedureRemoveWhen", "id", "exampleInputPhone", "aria-describedby", "emailHelp", 1, "form-control"], ["type", "fullname", "formControlName", "PPE", "id", "exampleInputFullname", "aria-describedby", "emailHelp", 1, "form-control"], ["type", "surname", "formControlName", "PPEcorrect", "id", "exampleInputSurname", "aria-describedby", "emailHelp", 1, "form-control"], ["type", "email", "formControlName", "PPEaction", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", 1, "form-control"], ["type", "date", "formControlName", "PPEwhen", "id", "exampleInputPhone", "aria-describedby", "emailHelp", 1, "form-control"], ["type", "fullname", "formControlName", "name", "id", "exampleInputFullname", "aria-describedby", "emailHelp", 1, "form-control"], ["type", "surname", "formControlName", "compilePosition", "id", "exampleInputSurname", "aria-describedby", "emailHelp", 1, "form-control"], ["type", "surname", "formControlName", "compileDepartment", "id", "exampleInputSurname", "aria-describedby", "emailHelp", 1, "form-control"], [1, "mb-3", "col-md-6"], ["formControlName", "fileUpload", "type", "file", "id", "formFile", 1, "form-control"], ["type", "date", "value", "", "formControlName", "date", "id", "exampleInputSurname", "aria-describedby", "emailHelp", 1, "form-control"], [1, "sign"], [3, "options", "onBeginEvent", "onEndEvent"], [1, "btn", "btn-outline-primary", "my-3", 3, "click"]],
        template: function HazardReportComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Hazard Report Form Preview");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Part A - Form Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Position Reporting The Hazard");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Fulltime Employee");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Part-time Employee");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Casual");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Contractor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Full Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Surname");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Email address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Department");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Position");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "input", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "label", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Project Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "input", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h3", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Report to be sent to the following");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "label", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Manager/Supervisor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "input", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "label", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Email Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "input", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "label", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "WHS Manager");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "input", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "label", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Email Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "input", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h2", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Hazard Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Describe the Hazard");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "textarea", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "label", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Date Hazard Reported");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "input", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "label", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Location of Hazard");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "input", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "label", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Date Hazard Identified");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "input", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "label", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Job Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "input", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Hazard Treatment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "table", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "th", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Risk Level Matrix");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "th", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Risk Analysis");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "th", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "td", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Consequence");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "td", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Likelihood");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "td", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Consequence");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "th", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Likelihood");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "td", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "M");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "td", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "H");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "td", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "H");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "td", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "H");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "td", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "H");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "td", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "td", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Rare");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "td", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "td", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "Insignificant");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "td", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "M");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "td", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "M");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "td", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "M");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "td", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "H");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "td", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "H");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "td", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "td", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "Unlikely");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "td", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "td", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "Minor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "td", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "L");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "td", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "M");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "td", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "M");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "td", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "H");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "td", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "H");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "td", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "td", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "Moderate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "td", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "td", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "Moderate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "th", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "td", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "L");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "td", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "L");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "td", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "M");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "td", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "M");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "td", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "H");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "td", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "td", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "Likely");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "td", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "td", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "Major");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "th", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "td", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "L");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "td", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "L");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "td", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "L");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "td", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "M");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "td", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "M");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "td", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "td", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "Almost Certain");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "td", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "td", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "Catastrophic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "label", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "Consequence");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "select", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "option", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "Select");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "option", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "1-Insignificant");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "option", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, "2-Minor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "option", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "3-Moderate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "option", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, "4-Major");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "option", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "5-Catastrophic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "label", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "Likelihood");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "select", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "option", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "Select");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "option", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, "1-Insignificant");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "option", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "2-Minor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "option", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "3-Moderate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "option", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, "4-Major");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "option", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "5-Catastrophic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "label", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "Risk Rating");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "select", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "option", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "Select");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "option", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "Low");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "option", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, "Medium");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "option", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, "High");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "div", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "Action Required");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](316, "input", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, "Immediately");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](320, "input", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "label", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "Today");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](324, "input", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "label", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, "This week");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](328, "input", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "label", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, "This Month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "h2", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, "Corrective Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "div", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "label", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, "Can you eliminate the hazard");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](338, "input", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "div", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "Corrective Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](343, "input", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "div", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "label", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](347, "Actioned by");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](348, "input", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "div", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "label", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, "By when");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](353, "input", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "div", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "label", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, "Can you substitute a safe process");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](358, "input", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "div", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](362, "Corrective Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](363, "input", 91);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "div", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "label", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, "Actioned by");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](368, "input", 92);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "div", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "label", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](372, "By when");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](373, "input", 93);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "div", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "label", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, "Can the hazard be isolated");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](378, "input", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "div", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](382, "Corrective Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](383, "input", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "div", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "label", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](387, "Actioned by");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](388, "input", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "div", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "label", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](392, "By when");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](393, "input", 97);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "div", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "label", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](397, "Can a solution be engreed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](398, "input", 98);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "div", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](402, "Corrective Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](403, "input", 99);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "div", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "label", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](407, "Actioned by");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](408, "input", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "div", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "label", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](412, "By when");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](413, "input", 101);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "div", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "label", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](417, "Can procedures remove or reduce the risk");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](418, "input", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "div", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](422, "Corrective Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](423, "input", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "div", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](425, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "label", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](427, "Actioned by");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](428, "input", 104);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](429, "div", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "label", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](432, "By when");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](433, "input", 105);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "div", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](436, "label", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](437, "Can the use PPE reduce the risk");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](438, "input", 106);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](439, "div", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](441, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](442, "Corrective Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](443, "input", 107);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](444, "div", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](445, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](446, "label", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](447, "Actioned by");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](448, "input", 108);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](449, "div", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](450, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](451, "label", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](452, "By when");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](453, "input", 109);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](455, "The form was compiled by:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](456, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](457, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](458, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](459, "label", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](460, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](461, "input", 110);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](462, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](463, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](464, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](465, "Position");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](466, "input", 111);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](467, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](468, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](469, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](470, "Department");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](471, "input", 112);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](472, "div", 113);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](473, "label", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](474, "File Upload");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](475, "input", 114);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](476, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](477, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](478, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](479, "Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](480, "input", 115);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](481, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](482, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](483, "Signature");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](484, "div", 116);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](485, "signature-pad", 117);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onBeginEvent", function HazardReportComponent_Template_signature_pad_onBeginEvent_485_listener() {
              return ctx.drawStart();
            })("onEndEvent", function HazardReportComponent_Template_signature_pad_onEndEvent_485_listener() {
              return ctx.drawComplete();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](486, "button", 118);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HazardReportComponent_Template_button_click_486_listener() {
              return ctx.clear();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](487, " Clear ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.hazardReport);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](482);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.signaturePadOptions);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], angular2_signaturepad__WEBPACK_IMPORTED_MODULE_2__["SignaturePad"]],
        styles: [".report_1[_ngcontent-%COMP%] {\n  background-color: #f1f7f7;\n  border-left: 4px solid blue;\n}\n\ndiv.like_1[_ngcontent-%COMP%] {\n  transform: rotate(-90deg);\n  margin-top: 92px;\n  margin-left: -37px;\n  margin-right: -35px;\n}\n\n.M_1[_ngcontent-%COMP%] {\n  background-color: yellow;\n}\n\n.H_1[_ngcontent-%COMP%] {\n  background-color: orangered;\n}\n\n.L_1[_ngcontent-%COMP%] {\n  background-color: #5fdf5f;\n}\n\ndiv.space_1[_ngcontent-%COMP%] {\n  margin: 0px 37px 0px 37px;\n}\n\ndiv.like_2[_ngcontent-%COMP%] {\n  margin: 22px 0 0 0;\n}\n\nlabel[_ngcontent-%COMP%]:not(.form-check-label):not(.custom-file-label) {\n  font-weight: 500;\n}\n\nlabel[_ngcontent-%COMP%] {\n  margin-bottom: 4%;\n  margin-top: 2%;\n}\n\n  .mat-checkbox .mat-checkbox-inner-container {\n  width: 30px;\n  height: 30px;\n}\n\n.label_1[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n}\n\n.form-check-input[_ngcontent-%COMP%]:hover {\n  border-color: rgba(46, 105, 255, 0.5);\n  box-shadow: 0 0 0 2px rgba(46, 105, 255, 0.25);\n}\n\n.form-check-input[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 16px;\n  font-weight: 500;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n}\n\n.form-control[_ngcontent-%COMP%]:hover {\n  border-color: rgba(46, 105, 255, 0.5);\n  box-shadow: 0 0 0 2px rgba(46, 105, 255, 0.25);\n}\n\n.text_1[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.text_2[_ngcontent-%COMP%] {\n  font-size: 15px;\n  margin-top: -13px;\n  margin-bottom: 25px;\n}\n\n.sign[_ngcontent-%COMP%] {\n  border: 1px solid lightgray;\n  width: 500px;\n}\n\n.sign[_ngcontent-%COMP%]:hover {\n  border-color: rgba(46, 105, 255, 0.5);\n  box-shadow: 0 0 0 2px rgba(46, 105, 255, 0.25);\n}\n\n.text_3[_ngcontent-%COMP%] {\n  margin-bottom: -15px;\n}\n\ntr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n}\n\ntr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background-color: transparent;\n  background-repeat: no-repeat;\n  border: none;\n  cursor: pointer;\n  overflow: hidden;\n  outline: none;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n  word-break: break-word;\n  text-align: center;\n  font-family: Inter, sans-serif;\n}\n\ninput[type=file][_ngcontent-%COMP%] {\n  height: 36%;\n  padding: 0%;\n}\n\n.pt-3[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 32px;\n  font-weight: 700;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaGF6YXJkLXJlcG9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsMkJBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0E7RUFDRSx3QkFBQTtBQUVGOztBQUFBO0VBQ0UsMkJBQUE7QUFHRjs7QUFEQTtFQUNFLHlCQUFBO0FBSUY7O0FBRkE7RUFDRSx5QkFBQTtBQUtGOztBQUhBO0VBQ0Usa0JBQUE7QUFNRjs7QUFKQTtFQUNFLGdCQUFBO0FBT0Y7O0FBSkE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUFPRjs7QUFMQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBUUY7O0FBTkE7RUFDRSxtQkFBQTtBQVNGOztBQUpBO0VBQ0UscUNBQUE7RUFDQSw4Q0FBQTtBQU9GOztBQUxBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFRRjs7QUFOQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQVNGOztBQVBBO0VBQ0UscUNBQUE7RUFDQSw4Q0FBQTtBQVVGOztBQVJBO0VBQ0UsZUFBQTtBQVdGOztBQVRBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFZRjs7QUFWQTtFQUNFLDJCQUFBO0VBQ0EsWUFBQTtBQWFGOztBQVhBO0VBQ0UscUNBQUE7RUFDQSw4Q0FBQTtBQWNGOztBQVpBO0VBQ0Usb0JBQUE7QUFlRjs7QUFiQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFnQkY7O0FBZEE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBaUJGOztBQWZBO0VBQ0UsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBa0JGOztBQWhCQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtBQW1CRjs7QUFqQkE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtBQW9CRjs7QUFsQkE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFxQkYiLCJmaWxlIjoiaGF6YXJkLXJlcG9ydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXBvcnRfMSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjdmNztcclxuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIGJsdWU7XHJcbn1cclxuXHJcbmRpdi5saWtlXzEge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbiAgbWFyZ2luLXRvcDogOTJweDtcclxuICBtYXJnaW4tbGVmdDogLTM3cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMzVweDtcclxufVxyXG4uTV8xIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbn1cclxuLkhfMSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlcmVkO1xyXG59XHJcbi5MXzEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5NSwgMjIzLCA5NSk7XHJcbn1cclxuZGl2LnNwYWNlXzEge1xyXG4gIG1hcmdpbjogMHB4IDM3cHggMHB4IDM3cHg7XHJcbn1cclxuZGl2Lmxpa2VfMiB7XHJcbiAgbWFyZ2luOiAyMnB4IDAgMCAwO1xyXG59XHJcbmxhYmVsOm5vdCguZm9ybS1jaGVjay1sYWJlbCk6bm90KC5jdXN0b20tZmlsZS1sYWJlbCkge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBtYXJnaW4tYm90dG9tOiA0JTtcclxuICBtYXJnaW4tdG9wOiAyJTtcclxufVxyXG46Om5nLWRlZXAgLm1hdC1jaGVja2JveCAubWF0LWNoZWNrYm94LWlubmVyLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcbi5sYWJlbF8xIHtcclxuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG59XHJcbi8vIC5zZWxlY3Rvcjpob3ZlciB7XHJcbi8vIFx0YmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuLy8gfVxyXG4uZm9ybS1jaGVjay1pbnB1dDpob3ZlciB7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDQ2LCAxMDUsIDI1NSwgMC41KTtcclxuICBib3gtc2hhZG93OiAwIDAgMCAycHggcmdiKDQ2IDEwNSAyNTUgLyAyNSUpO1xyXG59XHJcbi5mb3JtLWNoZWNrLWlucHV0IHtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxubGFiZWwge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIGZvbnQtZmFtaWx5OiBJbnRlciwgc2Fucy1zZXJpZjtcclxufVxyXG4uZm9ybS1jb250cm9sOmhvdmVyIHtcclxuICBib3JkZXItY29sb3I6IHJnYmEoNDYsIDEwNSwgMjU1LCAwLjUpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCByZ2IoNDYgMTA1IDI1NSAvIDI1JSk7XHJcbn1cclxuLnRleHRfMSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi50ZXh0XzIge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBtYXJnaW4tdG9wOiAtMTNweDtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcbi5zaWduIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG59XHJcbi5zaWduOmhvdmVyIHtcclxuICBib3JkZXItY29sb3I6IHJnYmEoNDYsIDEwNSwgMjU1LCAwLjUpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCByZ2IoNDYgMTA1IDI1NSAvIDI1JSk7XHJcbn1cclxuLnRleHRfMyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTE1cHg7XHJcbn1cclxudHIgdGQge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgZm9udC1mYW1pbHk6IEludGVyLCBzYW5zLXNlcmlmO1xyXG59XHJcbnRyIHRoIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIGZvbnQtZmFtaWx5OiBJbnRlciwgc2Fucy1zZXJpZjtcclxufVxyXG5idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLnRpdGxlIHtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogSW50ZXIsIHNhbnMtc2VyaWY7XHJcbn1cclxuaW5wdXRbdHlwZT0nZmlsZSddIHtcclxuICBoZWlnaHQ6IDM2JTtcclxuICBwYWRkaW5nOiAwJTtcclxufVxyXG4ucHQtMyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgZm9udC1mYW1pbHk6IEludGVyLCBzYW5zLXNlcmlmO1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HazardReportComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-hazard-report',
            templateUrl: './hazard-report.component.html',
            styleUrls: ['./hazard-report.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: src_app_utils_services_dynamic_forms_service__WEBPACK_IMPORTED_MODULE_3__["DynamicFormsService"]
          }, {
            type: src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_4__["SetTitleService"]
          }];
        }, {
          signaturePad: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [angular2_signaturepad__WEBPACK_IMPORTED_MODULE_2__["SignaturePad"]]
          }]
        });
      })();
      /***/

    },

    /***/
    "h5Ns": function h5Ns(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToolboxTalkComponent", function () {
        return ToolboxTalkComponent;
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


      var src_app_utils_services_dynamic_forms_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/utils/services/dynamic-forms.service */
      "+3ge");
      /* harmony import */


      var src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/utils/services/set-title.service */
      "yZxC");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! angular2-signaturepad */
      "HnZm");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "SVse");

      var _c0 = ["Signature1"];
      var _c1 = ["Signature2"];

      function ToolboxTalkComponent_ng_container_80_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Issue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Topic of discussion ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Topic Resolution ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "select", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Yes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolboxTalkComponent_ng_container_80_Template_span_click_22_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.addIssues();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "add_circle_outline ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolboxTalkComponent_ng_container_80_Template_span_click_25_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var i_r5 = ctx.index;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.removeIssues(i_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " remove_circle_outline ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r5 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r5);
        }
      }

      function ToolboxTalkComponent_ng_container_84_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Yes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Person Responsible ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "select", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "John");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Micheal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Complete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "select", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Yes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolboxTalkComponent_ng_container_84_Template_span_click_33_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.addCorrectAct();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "add_circle_outline ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolboxTalkComponent_ng_container_84_Template_span_click_36_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var i_r10 = ctx.index;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.removeCorrectAct(i_r10);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " remove_circle_outline ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r10 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r10);
        }
      }

      function ToolboxTalkComponent_ng_container_88_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Signature");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "signature-pad", 16, 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onBeginEvent", function ToolboxTalkComponent_ng_container_88_Template_signature_pad_onBeginEvent_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r17.drawStart2();
          })("onEndEvent", function ToolboxTalkComponent_ng_container_88_Template_signature_pad_onEndEvent_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r19.drawComplete2();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolboxTalkComponent_ng_container_88_Template_button_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r20.clear2();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Clear ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolboxTalkComponent_ng_container_88_Template_span_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r21.addAttendee();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "add_circle_outline ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolboxTalkComponent_ng_container_88_Template_span_click_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var i_r15 = ctx.index;

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r22.removeAttendee(i_r15);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " remove_circle_outline ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r15 = ctx.index;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Employee ", i_r15 + 1, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r3.signaturePadOptions2);
        }
      }

      var _c2 = function _c2() {
        return ["/admin/forms"];
      };

      var ToolboxTalkComponent = /*#__PURE__*/function () {
        function ToolboxTalkComponent(fb, dynamicFormsService, setTitle) {
          _classCallCheck(this, ToolboxTalkComponent);

          this.fb = fb;
          this.dynamicFormsService = dynamicFormsService;
          this.setTitle = setTitle;
          this.signaturePadOptions1 = {
            // passed through to szimek/signature_pad constructor
            minWidth: 1,
            canvasWidth: 550,
            canvasHeight: 100
          };
          this.signaturePadOptions2 = {
            // passed through to szimek/signature_pad constructor
            minWidth: 1,
            canvasWidth: 450,
            canvasHeight: 100
          };
          this.toolBox = this.fb.group({
            issues: this.fb.array([]),
            corrAction: this.fb.array([]),
            attendees: this.fb.array([])
          });
        }

        _createClass(ToolboxTalkComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.addIssues();
            this.addCorrectAct();
            this.addAttendee();
            this.dynamicFormsService.homebarTitle.next('ToolBox Talk Form');
            this.setTitle.setTitle('WHS-ToolBox Talk Form');
          }
        }, {
          key: "addIssues",
          value: function addIssues() {
            this.issues().push(this.issuesForm());
          }
        }, {
          key: "issues",
          value: function issues() {
            return this.toolBox.get('issues');
          }
        }, {
          key: "issuesForm",
          value: function issuesForm() {
            return this.fb.group({
              index: [],
              topicDisc: [],
              topicRes: []
            });
          }
        }, {
          key: "removeIssues",
          value: function removeIssues(i) {
            var item = this.toolBox.controls['issues'];
            if (item.length > 1) item.removeAt(i);
          }
        }, {
          key: "addCorrectAct",
          value: function addCorrectAct() {
            this.correctAct().push(this.correctActForm());
          }
        }, {
          key: "correctAct",
          value: function correctAct() {
            return this.toolBox.get('corrAction');
          }
        }, {
          key: "correctActForm",
          value: function correctActForm() {
            return this.fb.group({
              action: [],
              personRes: [],
              complete: []
            });
          }
        }, {
          key: "removeCorrectAct",
          value: function removeCorrectAct(i) {
            var item = this.toolBox.controls['corrAction'];
            if (item.length > 1) item.removeAt(i);
          }
        }, {
          key: "addAttendee",
          value: function addAttendee() {
            this.attendee().push(this.attendeeForm());
          }
        }, {
          key: "attendee",
          value: function attendee() {
            return this.toolBox.get('attendees');
          }
        }, {
          key: "attendeeForm",
          value: function attendeeForm() {
            return this.fb.group({
              employee: [],
              signature: []
            });
          }
        }, {
          key: "removeAttendee",
          value: function removeAttendee(i) {
            var item = this.toolBox.controls['attendees'];
            if (item.length > 1) item.removeAt(i);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            // this.signaturePad is now available
            this.signaturePad1.set('minWidth', 1); // set szimek/signature_pad options at runtime

            this.signaturePad2.set('minWidth', 1); // set szimek/signature_pad options at runtime

            this.signaturePad1.clear(); // invoke functions from szimek/signature_pad API

            this.signaturePad2.clear(); // invoke functions from szimek/signature_pad API
          }
        }, {
          key: "drawComplete1",
          value: function drawComplete1() {
            // will be notified of szimek/signature_pad's onEnd event
            console.log(this.signaturePad1.toDataURL());
          }
        }, {
          key: "clear1",
          value: function clear1() {
            this.signaturePad1.clear();
          }
        }, {
          key: "drawStart1",
          value: function drawStart1() {
            // will be notified of szimek/signature_pad's onBegin event
            console.log('begin drawing');
          }
        }, {
          key: "drawComplete2",
          value: function drawComplete2() {
            // will be notified of szimek/signature_pad's onEnd event
            console.log(this.signaturePad2.toDataURL());
          }
        }, {
          key: "clear2",
          value: function clear2() {
            console.log('ggg');
            this.signaturePad2.clear();
          }
        }, {
          key: "drawStart2",
          value: function drawStart2() {
            // will be notified of szimek/signature_pad's onBegin event
            console.log('begin drawing');
          }
        }]);

        return ToolboxTalkComponent;
      }();

      ToolboxTalkComponent.ɵfac = function ToolboxTalkComponent_Factory(t) {
        return new (t || ToolboxTalkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_dynamic_forms_service__WEBPACK_IMPORTED_MODULE_2__["DynamicFormsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_3__["SetTitleService"]));
      };

      ToolboxTalkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ToolboxTalkComponent,
        selectors: [["app-toolbox-talk"]],
        viewQuery: function ToolboxTalkComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.signaturePad1 = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.signaturePad2 = _t.first);
          }
        },
        decls: 89,
        vars: 7,
        consts: [[1, "btn", "btn-outline-primary", 3, "routerLink"], ["aria-hidden", "true", 1, "fa", "fa-arrow-left"], [1, "container", "px-4", "py-4", "card", 3, "formGroup"], [1, "text-center", "pt-3"], [1, "title"], [1, "row"], [1, "my-3", "col"], ["for", "exampleFormControlInput1", 1, "form-Label"], ["type", "text", "id", "siteName", 1, "form-control"], ["type", "text", 1, "form-control"], ["aria-label", "Default select example", 1, "form-select", "form-control", "col", "form-dropdown"], ["selected", "", "hidden", ""], ["value", "1"], ["value", "2"], ["value", "3"], [1, "sign", 2, "border", "1px solid rgb(149 162 173)"], [3, "options", "onBeginEvent", "onEndEvent"], ["Signature1", ""], [1, "btn", "btn-outline-primary", "mt-1", 3, "click"], ["formArrayName", "issues"], [3, "formGroupName", 4, "ngFor", "ngForOf"], ["formArrayName", "corrAction"], ["formArrayName", "attendees"], [3, "formGroupName"], [1, "my-3", "col-2"], ["type", "text", "formControlName", "index", 1, "form-control"], [1, "my-3", "col-6"], ["type", "text", "formControlName", "topicDisc", 1, "form-control"], ["aria-label", "Default select example", "formControlName", "topicRes", 1, "form-select", "form-control", "col", "form-dropdown"], ["value", "Yes"], ["value", "No"], [1, "my-3", "col-1", "my-auto"], [1, "material-icons", 2, "margin-top", "35%", 3, "click"], ["aria-label", "Default select example", "formControlName", "action", 1, "form-select", "form-control", "col", "form-dropdown"], ["aria-label", "Default select example", "formControlName", "personRes", 1, "form-select", "form-control", "col", "form-dropdown"], ["value", "John"], ["value", "Micheal"], ["aria-label", "Default select example", "formControlName", "complete", 1, "form-select", "form-control", "col", "form-dropdown"], [1, "my-3", "col-5"], ["type", "text", "formControlName", "employee", 1, "form-control"], ["Signature2", ""], [1, "material-icons", 3, "click"]],
        template: function ToolboxTalkComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Toolbox Talk Preview");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Site Information");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Site Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Customer Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Site Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Customer Contact ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Customer Contact Phone ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Customer Contact Email ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Job Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "select", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Select");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "option", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "1000");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "1001");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "1002");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Meeting Conducted By ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "select", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Select");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "option", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "John");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Akash");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Rahul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Signature*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "signature-pad", 16, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onBeginEvent", function ToolboxTalkComponent_Template_signature_pad_onBeginEvent_72_listener() {
              return ctx.drawStart1();
            })("onEndEvent", function ToolboxTalkComponent_Template_signature_pad_onEndEvent_72_listener() {
              return ctx.drawComplete1();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolboxTalkComponent_Template_button_click_74_listener() {
              return ctx.clear1();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Clear ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Issues/Topics to be covered:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](79, 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, ToolboxTalkComponent_ng_container_80_Template, 27, 1, "ng-container", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Corrective Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, ToolboxTalkComponent_ng_container_84_Template, 38, 1, "ng-container", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Attendee (Print and Sign)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, ToolboxTalkComponent_ng_container_88_Template, 20, 3, "ng-container", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.toolBox);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.signaturePadOptions1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.issues().controls);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.correctAct().controls);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.attendee().controls);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], angular2_signaturepad__WEBPACK_IMPORTED_MODULE_5__["SignaturePad"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"]],
        styles: ["label[_ngcontent-%COMP%]:not(.form-check-label):not(.custom-file-label) {\n  font-weight: 500;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  border: 2px solid dodgerblue;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 500;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n}\n\n.form-control[_ngcontent-%COMP%]:hover {\n  border-color: rgba(46, 105, 255, 0.5);\n  box-shadow: 0 0 0 2px rgba(46, 105, 255, 0.25);\n}\n\n.pt-3[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 32px;\n  font-weight: 700;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n}\n\n.container[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.sign[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid rgba(46, 105, 255, 0.5);\n  border-radius: 5px;\n}\n\nselect[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\n.form-dropdown[_ngcontent-%COMP%] {\n  padding: 0 1.875em 0 0.625em;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='240' height='240'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z'/%3E%3C/svg%3E\");\n  background-position: right 10px bottom 50%;\n  background-size: 0.925em;\n  background-repeat: no-repeat;\n}\n\n.title[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 16px;\n  font-weight: 600;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n}\n\n.sign[_ngcontent-%COMP%]:hover {\n  border: 1px solid;\n  border-color: #2e69ff40;\n  box-shadow: 0 0 0 3px rgba(46, 105, 255, 0.25);\n}\n\n.form-Label[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 500;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n  width: 100%;\n  margin-left: 2px;\n  margin-bottom: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdG9vbGJveC10YWxrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFXQTtFQUNFLDRCQUFBO0FBUkY7O0FBVUE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFQRjs7QUFTQTtFQUNFLHFDQUFBO0VBQ0EsOENBQUE7QUFORjs7QUFTQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQU5GOztBQVFBO0VBQ0UsdUJBQUE7QUFMRjs7QUFPQTtFQUNFLGFBQUE7RUFDQSx5Q0FBQTtFQUVBLGtCQUFBO0FBTEY7O0FBT0E7RUFDRSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFKRjs7QUFPQTtFQUNFLDRCQUFBO0VBQ0Esc1FBQUE7RUFDQSwwQ0FBQTtFQUNBLHdCQUFBO0VBRUEsNEJBQUE7QUFMRjs7QUFPQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQUpGOztBQU1BO0VBQ0UsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLDhDQUFBO0FBSEY7O0FBS0E7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUZGIiwiZmlsZSI6InRvb2xib3gtdGFsay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsOm5vdCguZm9ybS1jaGVjay1sYWJlbCk6bm90KC5jdXN0b20tZmlsZS1sYWJlbCkge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi8vIGxhYmVsIHtcclxuLy8gICAgIG1hcmdpbi1ib3R0b206IDQlO1xyXG4vLyAgICAgbWFyZ2luLXRvcDogMiU7XHJcbi8vIH1cclxuXHJcbi8vIGxhYmVsIHtcclxuLy8gICAgIG1hcmdpbi1ib3R0b206IDQlO1xyXG4vLyAgICAgbWFyZ2luLXRvcDogMiU7XHJcbi8vIH1cclxuaW5wdXQ6Zm9jdXMge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGRvZGdlcmJsdWU7XHJcbn1cclxubGFiZWwge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIGZvbnQtZmFtaWx5OiBJbnRlciwgc2Fucy1zZXJpZjtcclxufVxyXG4uZm9ybS1jb250cm9sOmhvdmVyIHtcclxuICBib3JkZXItY29sb3I6IHJnYmEoNDYsIDEwNSwgMjU1LCAwLjUpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCByZ2IoNDYgMTA1IDI1NSAvIDI1JSk7XHJcbn1cclxuXHJcbi5wdC0zIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICBmb250LWZhbWlseTogSW50ZXIsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLnNpZ24ge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg0NiwgMTA1LCAyNTUsIDAuNSk7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5zZWxlY3Qge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgYXBwZWFyYW5jZTogbm9uZTtcclxufVxyXG5cclxuLmZvcm0tZHJvcGRvd24ge1xyXG4gIHBhZGRpbmc6IDAgMS44NzVlbSAwIDAuNjI1ZW07XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgd2lkdGg9JzI0MCcgaGVpZ2h0PScyNDAnJTNFJTNDcGF0aCBmaWxsPSdub25lJyBkPSdNMCAwaDI0djI0SDB6Jy8lM0UlM0NwYXRoIGQ9J00xMiAxMy4xNzJsNC45NS00Ljk1IDEuNDE0IDEuNDE0TDEyIDE2IDUuNjM2IDkuNjM2IDcuMDUgOC4yMjJ6Jy8lM0UlM0Mvc3ZnJTNFXCIpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDEwcHggYm90dG9tIDUwJTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDAuOTI1ZW07XHJcblxyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuLnRpdGxlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICBmb250LWZhbWlseTogSW50ZXIsIHNhbnMtc2VyaWY7XHJcbn1cclxuLnNpZ246aG92ZXIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gIGJvcmRlci1jb2xvcjogIzJlNjlmZjQwO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2IoNDYsIDEwNSwgMjU1LCAwLjI1KTtcclxufVxyXG4uZm9ybS1MYWJlbCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgZm9udC1mYW1pbHk6IEludGVyLCBzYW5zLXNlcmlmO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolboxTalkComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-toolbox-talk',
            templateUrl: './toolbox-talk.component.html',
            styleUrls: ['./toolbox-talk.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: src_app_utils_services_dynamic_forms_service__WEBPACK_IMPORTED_MODULE_2__["DynamicFormsService"]
          }, {
            type: src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_3__["SetTitleService"]
          }];
        }, {
          signaturePad1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['Signature1']
          }],
          signaturePad2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['Signature2']
          }]
        });
      })();
      /***/

    },

    /***/
    "jASi": function jASi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormsModule1", function () {
        return FormsModule1;
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


      var _forms_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./forms-routing.module */
      "kWw+");
      /* harmony import */


      var _forms_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./forms.component */
      "naXW");
      /* harmony import */


      var _site_inspection_site_inspection_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./site-inspection/site-inspection.component */
      "lJ0R");
      /* harmony import */


      var _toolbox_talk_toolbox_talk_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./toolbox-talk/toolbox-talk.component */
      "h5Ns");
      /* harmony import */


      var _hazard_report_hazard_report_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./hazard-report/hazard-report.component */
      "9Ohn");
      /* harmony import */


      var _incident_report_incident_report_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./incident-report/incident-report.component */
      "4psL");
      /* harmony import */


      var _risk_assessment_swms_risk_assessment_swms_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./risk-assessment-swms/risk-assessment-swms.component */
      "woRl");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! angular2-signaturepad */
      "HnZm");
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "PCNd");

      var FormsModule1 = function FormsModule1() {
        _classCallCheck(this, FormsModule1);
      };

      FormsModule1.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: FormsModule1
      });
      FormsModule1.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function FormsModule1_Factory(t) {
          return new (t || FormsModule1)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _forms_routing_module__WEBPACK_IMPORTED_MODULE_2__["FormsRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], angular2_signaturepad__WEBPACK_IMPORTED_MODULE_10__["SignaturePadModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FormsModule1, {
          declarations: [_forms_component__WEBPACK_IMPORTED_MODULE_3__["FormsComponent"], _site_inspection_site_inspection_component__WEBPACK_IMPORTED_MODULE_4__["SiteInspectionComponent"], _toolbox_talk_toolbox_talk_component__WEBPACK_IMPORTED_MODULE_5__["ToolboxTalkComponent"], _hazard_report_hazard_report_component__WEBPACK_IMPORTED_MODULE_6__["HazardReportComponent"], _incident_report_incident_report_component__WEBPACK_IMPORTED_MODULE_7__["IncidentReportComponent"], _risk_assessment_swms_risk_assessment_swms_component__WEBPACK_IMPORTED_MODULE_8__["RiskAssessmentSWMSComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _forms_routing_module__WEBPACK_IMPORTED_MODULE_2__["FormsRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], angular2_signaturepad__WEBPACK_IMPORTED_MODULE_10__["SignaturePadModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormsModule1, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_forms_component__WEBPACK_IMPORTED_MODULE_3__["FormsComponent"], _site_inspection_site_inspection_component__WEBPACK_IMPORTED_MODULE_4__["SiteInspectionComponent"], _toolbox_talk_toolbox_talk_component__WEBPACK_IMPORTED_MODULE_5__["ToolboxTalkComponent"], _hazard_report_hazard_report_component__WEBPACK_IMPORTED_MODULE_6__["HazardReportComponent"], _incident_report_incident_report_component__WEBPACK_IMPORTED_MODULE_7__["IncidentReportComponent"], _risk_assessment_swms_risk_assessment_swms_component__WEBPACK_IMPORTED_MODULE_8__["RiskAssessmentSWMSComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _forms_routing_module__WEBPACK_IMPORTED_MODULE_2__["FormsRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], angular2_signaturepad__WEBPACK_IMPORTED_MODULE_10__["SignaturePadModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "kWw+": function kWw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormsRoutingModule", function () {
        return FormsRoutingModule;
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


      var _forms_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./forms.component */
      "naXW");
      /* harmony import */


      var _hazard_report_hazard_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./hazard-report/hazard-report.component */
      "9Ohn");
      /* harmony import */


      var _incident_report_incident_report_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./incident-report/incident-report.component */
      "4psL");
      /* harmony import */


      var _risk_assessment_swms_risk_assessment_swms_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./risk-assessment-swms/risk-assessment-swms.component */
      "woRl");
      /* harmony import */


      var _site_inspection_site_inspection_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./site-inspection/site-inspection.component */
      "lJ0R");
      /* harmony import */


      var _toolbox_talk_toolbox_talk_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./toolbox-talk/toolbox-talk.component */
      "h5Ns");

      var routes = [{
        path: '',
        component: _forms_component__WEBPACK_IMPORTED_MODULE_2__["FormsComponent"]
      }, {
        path: 'forms',
        component: _forms_component__WEBPACK_IMPORTED_MODULE_2__["FormsComponent"]
      }, {
        path: 'siteInspect',
        component: _site_inspection_site_inspection_component__WEBPACK_IMPORTED_MODULE_6__["SiteInspectionComponent"]
      }, {
        path: 'toolboxTalk',
        component: _toolbox_talk_toolbox_talk_component__WEBPACK_IMPORTED_MODULE_7__["ToolboxTalkComponent"]
      }, {
        path: 'hazardRep',
        component: _hazard_report_hazard_report_component__WEBPACK_IMPORTED_MODULE_3__["HazardReportComponent"]
      }, {
        path: 'incidentRep',
        component: _incident_report_incident_report_component__WEBPACK_IMPORTED_MODULE_4__["IncidentReportComponent"]
      }, {
        path: 'riskAssessSWMS',
        component: _risk_assessment_swms_risk_assessment_swms_component__WEBPACK_IMPORTED_MODULE_5__["RiskAssessmentSWMSComponent"]
      }];

      var FormsRoutingModule = function FormsRoutingModule() {
        _classCallCheck(this, FormsRoutingModule);
      };

      FormsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: FormsRoutingModule
      });
      FormsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function FormsRoutingModule_Factory(t) {
          return new (t || FormsRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FormsRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormsRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "lJ0R": function lJ0R(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SiteInspectionComponent", function () {
        return SiteInspectionComponent;
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


      var src_app_utils_services_dynamic_forms_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/utils/services/dynamic-forms.service */
      "+3ge");
      /* harmony import */


      var src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/utils/services/set-title.service */
      "yZxC");
      /* harmony import */


      var src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/utils/services/logical-form-info.service */
      "wbBK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/tabs */
      "M9ds");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "SVse");

      function SiteInspectionComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Site Information");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Site Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Customer Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Site Address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Customer Contact ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Customer Contact Phone ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Customer Contact Email ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Job Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "select", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "1000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "1001");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "1002");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Project Manager ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "select", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "John");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Akash");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Rahul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Site Control");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Is the Hazard Signage up to date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Yes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_Template_input_change_73_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.addAcionTab($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Is the documentation up to date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Yes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_Template_input_change_82_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.addAcionTab($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " Have all workers been inducted onsite ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Yes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_Template_input_change_91_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.addAcionTab($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " Have all workers been inducted into the SWMS ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "input", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Yes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_Template_input_change_100_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.addAcionTab($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " Are regular toobox talks taking place ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Yes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_Template_input_change_109_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.addAcionTab($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " Date of last toolbox talk ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "WHS Documentation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " WHS Manual is avaiable to all workers ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "input", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Yes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "input", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_Template_input_change_126_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.addAcionTab($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, " Incident Report form available ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "input", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Yes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "input", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_Template_input_change_135_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.addAcionTab($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, " Hazard Report form available ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "input", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Yes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "input", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_Template_input_change_144_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.addAcionTab($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, " Emergrncy Evacuation plan displayed ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "input", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Yes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_Template_input_change_153_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.addAcionTab($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, " Training Records are up tp date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "input", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Yes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "input", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_Template_input_change_162_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12.addAcionTab($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Display Material");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, " WHS Policy Displayed on notice board ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "input", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Yes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "input", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_Template_input_change_175_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.addAcionTab($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, " Return to Work Form avaliable ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "input", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Yes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "input", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_Template_input_change_184_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.addAcionTab($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, " Hazard Report form avaliable ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "input", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Yes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "input", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_Template_input_change_193_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r15.addAcionTab($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, " Emergrncy Evacuation plan displayed ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "input", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "Yes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "input", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_Template_input_change_202_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r16.addAcionTab($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, " No Smoking signs displayed ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "input", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "Yes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "input", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_Template_input_change_211_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r17.addAcionTab($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, " PPE Signage displayed ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "input", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "Yes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "input", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_Template_input_change_220_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r18.addAcionTab($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, " Report the Hazard signs displayed ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](226, "input", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "Yes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "input", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_Template_input_change_229_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r19.addAcionTab($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, " Manual Handling Signs Displayed ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](235, "input", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "Yes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "input", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_Template_input_change_238_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r20.addAcionTab($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, " Notice Board is up to date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](244, "input", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "Yes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "input", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_Template_input_change_247_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r21.addAcionTab($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "Access And Egrass");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, " No oil, grease or other slip hazard ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](257, "input", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "Yes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "input", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_Template_input_change_260_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r22.addAcionTab($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, " Walkways clearly marked ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](266, "input", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "Yes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "input", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_Template_input_change_269_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r23.addAcionTab($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, " Walkways are free of clutter or obstructions ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](275, "input", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, "Yes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "input", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_Template_input_change_278_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r24.addAcionTab($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, " Stairs are not blocked and good condition ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](284, "input", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "Yes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "input", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_Template_input_change_287_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r25.addAcionTab($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, " Hoardings/fence and getes secure ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](293, "input", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "Yes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "input", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_Template_input_change_296_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r26.addAcionTab($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, " Loose matrials secure from wind ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](302, "input", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "Yes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "input", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_Template_input_change_305_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r27.addAcionTab($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, " Bins/Skips located suitable areas ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](311, "input", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, "Yes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "input", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_Template_input_change_314_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r28.addAcionTab($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, "No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, " Bins/Skips are not overflowing ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](320, "input", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, "Yes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "input", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_Template_input_change_323_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r29.addAcionTab($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, "No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, " Notice Board is up to date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](329, "input", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, "Yes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "input", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_Template_input_change_332_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r30.addAcionTab($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, "No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](336, "Electrical Equipment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](340, " Mainboard lockable ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](342, "input", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](343, "Yes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "input", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_Template_input_change_345_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r31.addAcionTab($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, "No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](349, " Powerleads tested and tagged ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](351, "input", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, "Yes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "input", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_Template_input_change_354_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r32.addAcionTab($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](355, "No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](358, " Appropriate giards on equipment ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](360, "input", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](361, "Yes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "input", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_Template_input_change_363_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r33.addAcionTab($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](364, "No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, " Equipment in good condition ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](369, "input", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370, "Yes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "input", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_Template_input_change_372_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r34.addAcionTab($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](373, "No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](376, " Leads safety placed ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](378, "input", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](379, "Yes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "input", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_Template_input_change_381_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r35.addAcionTab($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](382, "No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](385, "Chemicals");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](389, " Safey Data Sheet(SDS) available ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](391, "input", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](392, "Yes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "input", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_Template_input_change_394_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r36.addAcionTab($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](395, "No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](398, " All Chemicals Are stored as per the SDS ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](400, "input", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](401, "Yes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "input", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_Template_input_change_403_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r37.addAcionTab($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](404, "No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](407, " SDS Register is availables and up to date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](409, "input", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](410, "Yes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "input", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_Template_input_change_412_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r38.addAcionTab($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](413, "No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](416, " Correct PPE on hand and in use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](418, "input", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](419, "Yes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "input", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_Template_input_change_421_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r39.addAcionTab($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](422, "No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](425, "First Aid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](427, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](429, " First Aid Kit available ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](431, "input", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](432, "Yes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](433, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "input", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_Template_input_change_434_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r40.addAcionTab($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](435, "No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](436, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](437, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](438, " First Kit stocked as per contents list ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](439, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](440, "input", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](441, "Yes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](443, "input", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_Template_input_change_443_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r41.addAcionTab($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](444, "No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](445, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](446, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](447, " First Aid Kit accessable to all workers ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](448, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](449, "input", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](450, "Yes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](451, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](452, "input", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_Template_input_change_452_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r42.addAcionTab($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](453, "No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](455, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](456, " All workers aware of the first Aid kit location ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](457, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](458, "input", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](459, "Yes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](460, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](461, "input", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_Template_input_change_461_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r43.addAcionTab($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](462, "No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](463, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](464, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](465, "Fire and Evacuation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](466, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](467, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](468, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](469, " Extinguishers are in place ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](470, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](471, "input", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](472, "Yes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](473, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](474, "input", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_Template_input_change_474_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r44.addAcionTab($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](475, "No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](476, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](477, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](478, " Extinguishers are clearly maked ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](479, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](480, "input", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](481, "Yes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](482, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](483, "input", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_Template_input_change_483_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r45.addAcionTab($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](484, "No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](485, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](486, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](487, " Extinguishers seviced and up to date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](488, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](489, "input", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](490, "Yes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](491, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](492, "input", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_Template_input_change_492_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r46.addAcionTab($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](493, "No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](494, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](495, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](496, " Exit Sings are in Working condition ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](497, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](498, "input", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](499, "Yes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](500, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](501, "input", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_Template_input_change_501_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r47.addAcionTab($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](502, "No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](503, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](504, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](505, " Exit Doors not blocked ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](506, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](507, "input", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](508, "Yes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](509, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](510, "input", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_Template_input_change_510_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r48.addAcionTab($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](511, "No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](512, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](513, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](514, " Exit Doors can be easily opened ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](515, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](516, "input", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](517, "Yes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](518, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](519, "input", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_Template_input_change_519_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r49.addAcionTab($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](520, "No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](521, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](522, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](523, " Fire Alarm tested and inspected up to date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](524, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](525, "input", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](526, "Yes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](527, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](528, "input", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_Template_input_change_528_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r50.addAcionTab($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](529, "No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](530, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](531, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](532, " Evacuation Plans displayed ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](533, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](534, "input", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](535, "Yes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](536, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](537, "input", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_Template_input_change_537_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r51.addAcionTab($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](538, "No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](539, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](540, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](541, " Emergency Drill conduct within the last year ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](542, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](543, "input", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](544, "Yes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](545, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](546, "input", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_Template_input_change_546_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r52.addAcionTab($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](547, "No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](548, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](549, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](550, "Plant Equipment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](551, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](552, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](553, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](554, " Risk Assessment and SWMS completed ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](555, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](556, "input", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](557, "Yes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](558, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](559, "input", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_Template_input_change_559_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r53.addAcionTab($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](560, "No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](561, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](562, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](563, " Plant is within valid service/inspection period ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](564, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](565, "input", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](566, "Yes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](567, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](568, "input", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_Template_input_change_568_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r54.addAcionTab($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](569, "No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](570, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](571, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](572, " Opertion procedures and SOP's in place ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](573, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](574, "input", 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](575, "Yes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](576, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](577, "input", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_Template_input_change_577_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r55.addAcionTab($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](578, "No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](579, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](580, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](581, "PPE available");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](582, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](583, "input", 131);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](584, "Yes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](585, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](586, "input", 132);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_Template_input_change_586_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r56.addAcionTab($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](587, "No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](588, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](589, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](590, " Emergency Plan in place ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](591, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](592, "input", 133);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](593, "Yes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](594, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](595, "input", 134);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_Template_input_change_595_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r57.addAcionTab($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](596, "No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](597, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](598, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](599, " Plant is in good Condition ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](600, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](601, "input", 135);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](602, "Yes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](603, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](604, "input", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_Template_input_change_604_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r58.addAcionTab($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](605, "No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](606, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](607, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](608, " Appropriate guards fitted ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](609, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](610, "input", 137);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](611, "Yes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](612, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](613, "input", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SiteInspectionComponent_div_8_Template_input_change_613_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r59.addAcionTab($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](614, "No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SiteInspectionComponent_div_10_div_2_option_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r64 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r64);
        }
      }

      function SiteInspectionComponent_div_10_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 144);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 145);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 146);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Item ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 147);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 148);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SiteInspectionComponent_div_10_div_2_option_9_Template, 2, 1, "option", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 145);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 146);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Action ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "select", 149);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 150);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Yes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 148);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 145);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 146);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Person Responsible ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "select", 151);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option", 150);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Yes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option", 148);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 152);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 146);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Complete ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "select", 153);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 150);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Yes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option", 148);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var filed_r62 = ctx.index;

          var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", filed_r62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r60.add().controls[filed_r62].get("item").value, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r60.item_values);
        }
      }

      function SiteInspectionComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 139);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SiteInspectionComponent_div_10_div_2_Template, 40, 3, "div", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 142);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SiteInspectionComponent_div_10_Template_span_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66);

            var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r65.addAction();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "add_circle_outline ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 142);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SiteInspectionComponent_div_10_Template_span_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66);

            var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r67.removeAction();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " remove_circle_outline ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 143);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " keyboard_arrow_up ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 143);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " keyboard_arrow_down ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.add().controls);
        }
      }

      var _c0 = function _c0() {
        return ["/admin/forms"];
      };

      var SiteInspectionComponent = /*#__PURE__*/function () {
        function SiteInspectionComponent(fb, dynamicFormsService, setTitle, logicalFormInfo) {
          _classCallCheck(this, SiteInspectionComponent);

          this.fb = fb;
          this.dynamicFormsService = dynamicFormsService;
          this.setTitle = setTitle;
          this.logicalFormInfo = logicalFormInfo;
          this.siteshow = true;
          this.siteAction = false;
          this.item_values = ['In Progress', 'Completed', 'Closed'];
          this.sidePreview = this.fb.group({
            Hazard: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            documentation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            workeronsite: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            SWMS: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            tooboxtalk: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            WHSManual: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            IncidentReport: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            HazardReport: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            EmergrncyEvacuation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            TrainingRecords: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            WHSPolicy: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            ReturnToWork: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            DisplayHazardReport: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            DisplayEmergrncyEvacuation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            NoSmoking: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            PPESignage: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            ReportHazardsigns: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            ManualHandlingSigns: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            NoticeBoard: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            AccessEgrassHazards: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Walkways: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Walkwaysfree: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            StairsConditionGood: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            HoardingsFenceGates: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            LosseMatrialSecure: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            BinsSkipsLocated: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            BinsSkipsOverflowing: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            ElectricalMainboardLock: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            PowerleadsTested: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            EquipmentGiards: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            EquipmentCondition: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            LeadsSafety: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            SDSavailable: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            ChemicalsStoredSDS: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            SDSRegisterAvailables: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            CorrectPPHand: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            FirstAidavailable: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            FirstKitContentsList: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            KitAccessableWorkers: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            AwarefirstKitLocation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Extinguishers: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            ExtinguishersClearlyMaked: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            ExtinguishersSevicedUpdate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            ExitSingsCondition: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            ExitDoorsBlocked: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            ExitDoorsOpened: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            FireAlarmTested: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            EvacuationPlans: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            EmergencyDrillConduct: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            RiskAssessmentSWMS: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            PlantValidService: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            OpertionProceduresSOPs: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            PPEAvailable: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            EmergencyPlan: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            PlantGoodCondition: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            AppropriateGuards: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            siteAction: this.fb.array([])
          });
        }

        _createClass(SiteInspectionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.dynamicFormsService.homebarTitle.next('Site Inspection Form');
            this.setTitle.setTitle('WHS-Site Inspection Form');
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
            return this.sidePreview.get('siteAction');
          }
        }, {
          key: "newAction",
          value: function newAction() {
            return this.fb.group({
              item: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              action: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              PersonResponsible: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              complete: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
          }
        }, {
          key: "showsite",
          value: function showsite() {
            this.siteshow = true;
            this.siteAction = false;
            console.log(this.sidePreview);
          }
        }, {
          key: "showAction",
          value: function showAction() {
            this.siteAction = true;
            this.siteshow = false;
            this.add().clear();
            var key = Object.keys(this.sidePreview.value);

            for (var i = 0; i < key.length - 2; i++) {
              var tempValue = this.sidePreview.controls[key[i]].value;

              if (tempValue != '') {
                if (tempValue != 'yes') {
                  var index = this.add().length;
                  this.addAction();
                  this.add().controls[index].get('item').setValue(tempValue);
                }
              }
            }
          }
        }, {
          key: "removeAction",
          value: function removeAction() {
            var index = this.add().length;
            this.add().removeAt(index - 1);
          }
        }, {
          key: "addAcionTab",
          value: function addAcionTab(event) {
            var b = Object.keys(this.sidePreview.value); //   let index =this.add().length
            //   this.addAction()
            // this.add().controls[index].get("item").setValue(event.target.value)
            //  console.log(this.sidePreview.controls[b[0]].value);
          }
        }, {
          key: "getAllJobTask",
          value: function getAllJobTask() {
            var _this = this;

            this.logicalFormInfo.getAllJobtask().subscribe(function (res) {
              _this.jobTaskData = res.data;
              console.log('jobTaskDetails=>', _this.jobTaskData);
            });
          }
        }]);

        return SiteInspectionComponent;
      }();

      SiteInspectionComponent.ɵfac = function SiteInspectionComponent_Factory(t) {
        return new (t || SiteInspectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_dynamic_forms_service__WEBPACK_IMPORTED_MODULE_2__["DynamicFormsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_3__["SetTitleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__["LogicalFormInfoService"]));
      };

      SiteInspectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SiteInspectionComponent,
        selectors: [["app-site-inspection"]],
        decls: 11,
        vars: 5,
        consts: [[1, "btn", "btn-outline-primary", 3, "routerLink"], ["aria-hidden", "true", 1, "fa", "fa-arrow-left"], [1, "container", "card", "px-4", "py-4", 3, "formGroup"], [1, "text-center", "pt-3"], [1, "title"], ["label", "Site Inspection"], ["class", "tab-pane fade show active", "id", "siteInspection", "role", "tabpanel", "aria-labelledby", "siteInspection-tab", 4, "ngIf"], ["label", "Site Inspection Corrective Action"], ["class", "tab-pane fade show active", "id", "siteAction", "role", "tabpanel", "aria-labelledby", "siteAction-tab", 4, "ngIf"], ["id", "siteInspection", "role", "tabpanel", "aria-labelledby", "siteInspection-tab", 1, "tab-pane", "fade", "show", "active"], [1, "pt-3"], [1, "subtitel"], [1, "row"], [1, "mb-3", "col"], ["for", "exampleFormControlInput1", 1, "form-Label"], ["type", "text", "id", "siteName", 1, "form-control", "outline"], ["type", "text", 1, "form-control", "outline"], ["aria-label", "Default select example", 1, "form-select", "form-control", "col", "outline", "form-dropdown"], ["selected", "", "hidden", ""], ["value", "1"], ["value", "2"], ["value", "3"], [1, "mb-3", "col-6"], ["type", "date", 1, "form-control", "outline"], [1, "mt-4"], [1, "mt-2", "col-4"], ["for", "exampleFormControlInput1", 1, ""], ["type", "radio", "formControlName", "Hazard", "value", "yes", 1, "form-radio", "mr-1"], ["type", "radio", "formControlName", "Hazard", "value", " Hazard Signage not up to date", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "documentation", 1, "mr-1"], ["type", "radio", "value", " documentation not up to date", "formControlName", "documentation", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "workeronsite", 1, "mr-1"], ["type", "radio", "value", " workers not  inducted into onsite", "formControlName", "workeronsite", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "SWMS", 1, "mr-1"], ["type", "radio", "value", "workers not inducted into  SWMS", "formControlName", "SWMS", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "tooboxtalk", 1, "mr-1"], ["type", "radio", "value", "toobox talks not taking place", "formControlName", "tooboxtalk", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "WHSManual", 1, "mr-1"], ["type", "radio", "value", "WHS Manual is not avaiable all workers", "formControlName", "WHSManual", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "IncidentReport", 1, "mr-1"], ["type", "radio", "value", "Incident Report not available", "formControlName", "IncidentReport", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "HazardReport", 1, "mr-1"], ["type", "radio", "value", "Hazard Report not available", "formControlName", "HazardReport", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "EmergrncyEvacuation", 1, "mr-1"], ["type", "radio", "value", "Emergrncy Evacuation plan not displayed", "formControlName", "EmergrncyEvacuation", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "TrainingRecords", 1, "mr-1"], ["type", "radio", "value", "Training Records not up tp date", "formControlName", "TrainingRecords", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "WHSPolicy", 1, "mr-1"], ["type", "radio", "value", "HS Policy not  Displayed on notice board", "formControlName", "WHSPolicy", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "ReturnToWork", 1, "mr-1"], ["type", "radio", "value", "Return to Work Form not avaliable", "formControlName", "ReturnToWork", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "DisplayHazardReport", 1, "mr-1"], ["type", "radio", "value", "Hazard Report form not avaliable", "formControlName", "DisplayHazardReport", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "DisplayEmergrncyEvacuation", 1, "mr-1"], ["type", "radio", "value", "Emergrncy Evacuation plan not displayed", "formControlName", "DisplayEmergrncyEvacuation", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "NoSmoking", 1, "mr-1"], ["type", "radio", "value", "No Smoking signs not displayed", "formControlName", "NoSmoking", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "PPESignage", 1, "mr-1"], ["type", "radio", "value", "PPE Signage not displayed", "formControlName", "PPESignage", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "ReportHazardsigns", 1, "mr-1"], ["type", "radio", "value", "Report the Hazard signs not displayed", "formControlName", "ReportHazardsigns", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "ManualHandlingSigns", 1, "mr-1"], ["type", "radio", "value", "Manual Handling Signs not Displayed", "formControlName", "ManualHandlingSigns", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "NoticeBoard", 1, "mr-1"], ["type", "radio", "value", "Notice Board not up to date", "formControlName", "NoticeBoard", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "AccessEgrassHazards", 1, "mr-1"], ["type", "radio", "value", "oil, grease or other slip hazard", "formControlName", "AccessEgrassHazards", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "Walkways", 1, "mr-1"], ["type", "radio", "value", "Walkways not clearly marked", "formControlName", "Walkways", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "Walkwaysfree", 1, "mr-1"], ["type", "radio", "value", "Walkways not free of clutter or obstructions", "formControlName", "Walkwaysfree", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "StairsConditionGood", 1, "mr-1"], ["type", "radio", "value", "Stairs are  blocked and not  good condition", "formControlName", "StairsConditionGood", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "HoardingsFenceGates", 1, "mr-1"], ["type", "radio", "value", "Hoardings/fence and getes not secure", "formControlName", "HoardingsFenceGates", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "LosseMatrialSecure", 1, "mr-1"], ["type", "radio", "value", "Loose matrials not secure from wind", "formControlName", "LosseMatrialSecure", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "BinsSkipsLocated", 1, "mr-1"], ["type", "radio", "value", "Bins/Skips not located suitable areas", "formControlName", "BinsSkipsLocated", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "BinsSkipsOverflowing", 1, "mr-1"], ["type", "radio", "value", "Bins/Skips are overflowing", "formControlName", "BinsSkipsOverflowing", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "ElectricalMainboardLock", 1, "mr-1"], ["type", "radio", "value", "Mainboard not lockable", "formControlName", "ElectricalMainboardLock", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "PowerleadsTested", 1, "mr-1"], ["type", "radio", "value", "Powerleads not tested and tagged", "formControlName", "PowerleadsTested", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "EquipmentGiards", 1, "mr-1"], ["type", "radio", "value", "Not Appropriate giards on equipment", "formControlName", "EquipmentGiards", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "EquipmentCondition", 1, "mr-1"], ["type", "radio", "value", "Equipment not good condition", "formControlName", "EquipmentCondition", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "LeadsSafety", 1, "mr-1"], ["type", "radio", "value", "Leads not safety placed", "formControlName", "LeadsSafety", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "SDSavailable", 1, "mr-1"], ["type", "radio", "value", "Safey Data Sheet(SDS) not available", "formControlName", "SDSavailable", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "ChemicalsStoredSDS", 1, "mr-1"], ["type", "radio", "value", "All Chemicals Are not stored as per the SDS", "formControlName", "ChemicalsStoredSDS", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "SDSRegisterAvailables", 1, "mr-1"], ["type", "radio", "value", "SDS Register not availables and not  up to date", "formControlName", "SDSRegisterAvailables", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "CorrectPPHand", 1, "mr-1"], ["type", "radio", "value", "Incorrect PPE on hand and in use", "formControlName", "CorrectPPHand", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "FirstAidavailable", 1, "mr-1"], ["type", "radio", "value", "First Aid Kit not available", "formControlName", "FirstAidavailable", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "FirstKitContentsList", 1, "mr-1"], ["type", "radio", "value", "First Kit not  stocked as per contents list", "formControlName", "FirstKitContentsList", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "KitAccessableWorkers", 1, "mr-1"], ["type", "radio", "value", "First Aid Kit not  accessable to all workers", "formControlName", "KitAccessableWorkers", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "AwarefirstKitLocation", 1, "mr-1"], ["type", "radio", "value", "All workers not aware first Aid kit location", "formControlName", "AwarefirstKitLocation", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "Extinguishers", 1, "mr-1"], ["type", "radio", "value", "Extinguishers not in place", "formControlName", "Extinguishers", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "ExtinguishersClearlyMaked", 1, "mr-1"], ["type", "radio", "value", "Extinguishers not clearly maked", "formControlName", "ExtinguishersClearlyMaked", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "ExtinguishersSevicedUpdate", 1, "mr-1"], ["type", "radio", "value", "Extinguishers seviced not up to date", "formControlName", "ExtinguishersSevicedUpdate", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "ExitSingsCondition", 1, "mr-1"], ["type", "radio", "value", "Exit Sings not in a Working condition", "formControlName", "ExitSingsCondition", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "ExitDoorsBlocked", 1, "mr-1"], ["type", "radio", "value", "Exit Doors blocked ", "formControlName", "ExitDoorsBlocked", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "ExitDoorsOpened", 1, "mr-1"], ["type", "radio", "value", "Exit Doors cannot be easily opened", "formControlName", "ExitDoorsOpened", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "FireAlarmTested", 1, "mr-1"], ["type", "radio", "value", "Fire Alarm not tested and inspected not  up to date", "formControlName", "FireAlarmTested", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "EvacuationPlans", 1, "mr-1"], ["type", "radio", "value", "Evacuation Plans not displayed", "formControlName", "EvacuationPlans", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "EmergencyDrillConduct", 1, "mr-1"], ["type", "radio", "value", "Emergency Drill not conduct within the last year", "formControlName", "EmergencyDrillConduct", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "RiskAssessmentSWMS", 1, "mr-1"], ["type", "radio", "value", "Risk Assessment and SWMS not completed", "formControlName", "RiskAssessmentSWMS", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "PlantValidService", 1, "mr-1"], ["type", "radio", "value", "Plant is within valid service/inspection not in  period", "formControlName", "PlantValidService", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "OpertionProceduresSOPs", 1, "mr-1"], ["type", "radio", "value", "Opertion procedures and SOP's not in place", "formControlName", "OpertionProceduresSOPs", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "PPEAvailable", 1, "mr-1"], ["type", "radio", "value", "PPE not available", "formControlName", "PPEAvailable", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "EmergencyPlan", 1, "mr-1"], ["type", "radio", "value", "Emergency Plan not an in place", "formControlName", "EmergencyPlan", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "PlantGoodCondition", 1, "mr-1"], ["type", "radio", "value", "Plant is not  good Condition", "formControlName", "PlantGoodCondition", 1, "mr-1", 3, "change"], ["type", "radio", "value", "yes", "formControlName", "AppropriateGuards", 1, "mr-1"], ["type", "radio", "value", "Appropriate guards not fitted", "formControlName", "AppropriateGuards", 1, "mr-1", 3, "change"], ["id", "siteAction", "role", "tabpanel", "aria-labelledby", "siteAction-tab", 1, "tab-pane", "fade", "show", "active"], ["formArrayName", "SiteControl"], [4, "ngFor", "ngForOf"], [1, "material-icons", 3, "click"], [1, "material-icons"], [3, "formGroupName"], [1, "mb-3", "col-3"], ["for", "exampleFormControlInput1", 1, "form-Label", "mt-2"], ["aria-label", "Default select example", "formControlName", "item", 1, "form-select", "form-control", "col", "outline", "form-dropdown"], ["value", "no", 1, "mr-1"], ["aria-label", "Default select example", "formControlName", "action", 1, "form-select", "form-control", "col", "outline", "form-dropdown"], ["value", "yes", 1, "mr-1"], ["aria-label", "Default select example", "formControlName", "PersonResponsible", 1, "form-select", "form-control", "col", "outline", "form-dropdown"], [1, "mb-3", "col-2"], ["aria-label", "Default select example", "formControlName", "complete", 1, "form-select", "form-control", "col", "outline", "form-dropdown"]],
        template: function SiteInspectionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Site Inspection Preview");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-tab-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-tab", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SiteInspectionComponent_div_8_Template, 615, 0, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-tab", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SiteInspectionComponent_div_10_Template, 11, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.sidePreview);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.siteshow);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.siteAction);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTab"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"]],
        styles: ["input[type=radio][_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 17px;\n  width: 17px;\n  border: 1px solid #6107d6;\n  border-color: blue;\n  position: relative;\n  border-radius: 3px;\n  color: blue;\n  padding: 0 6px;\n  top: 2px;\n}\n\ninput[type=radio][_ngcontent-%COMP%] {\n  color: #666;\n  font-weight: normal;\n}\n\ninput[type=radio][_ngcontent-%COMP%]:hover::before {\n  content: \" \";\n  display: inline-block;\n  position: relative;\n  top: -2px;\n  right: 2px;\n  bottom: 1px;\n  width: 20px;\n  height: 20px;\n  border-radius: 11px;\n  border: 3px solid #2e69ff40;\n  background-color: transparent;\n}\n\ninput[type=radio][_ngcontent-%COMP%]    + p[_ngcontent-%COMP%]:checked::after {\n  border-radius: 11px;\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  border: 2px solid #2e69ff40;\n  content: \" \";\n  display: block;\n  background: #2e69ff40;\n}\n\n.outline[_ngcontent-%COMP%]:hover {\n  border: 1px solid;\n  border-color: #2e69ff40;\n  box-shadow: 0 0 0 3px rgba(46, 105, 255, 0.25);\n}\n\n.outline[_ngcontent-%COMP%]:focus {\n  border: 1px solid;\n  border-color: #2e69ff40;\n  box-shadow: 0 0 0 3px rgba(46, 105, 255, 0.25);\n}\n\n.form-Label[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 500;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n  width: 100%;\n  margin-left: 2px;\n  margin-bottom: 14px;\n}\n\n.subtitel[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 16px;\n  font-weight: 600;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n}\n\n.nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  border: 3px solid;\n  color: #495057;\n  background-color: #fff;\n  border-color: #2e69ff40 #2e69ff40 #fff;\n  border-radius: 1px;\n  font-family: Inter, sans-serif;\n}\n\n.title[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 32px;\n  font-weight: 700;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background-color: #eeeeee;\n  border: none;\n  outline: none;\n  height: 40px;\n}\n\nselect[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\n.form-dropdown[_ngcontent-%COMP%] {\n  padding: 0 1.875em 0 0.625em;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z'/%3E%3C/svg%3E\");\n  background-position: right 10px bottom 50%;\n  background-size: 0.925em;\n  background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2l0ZS1pbnNwZWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFFQSxRQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7QUFERjs7QUFJQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBR0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQUhGOztBQU1BO0VBQ0UsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLDhDQUFBO0FBSEY7O0FBTUE7RUFDRSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsOENBQUE7QUFIRjs7QUFRQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBTEY7O0FBV0E7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFSRjs7QUFXQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0FBUkY7O0FBVUE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFQRjs7QUFTQTtFQUtFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBVkY7O0FBYUE7RUFDRSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFWRjs7QUFhQTtFQUNFLDRCQUFBO0VBQ0Esb1FBQUE7RUFDQSwwQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7QUFWRiIsImZpbGUiOiJzaXRlLWluc3BlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPSdyYWRpbyddIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgaGVpZ2h0OiAxN3B4O1xyXG4gIHdpZHRoOiAxN3B4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYig5NywgNywgMjE0KTtcclxuICBib3JkZXItY29sb3I6IGJsdWU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBjb2xvcjogYmx1ZTtcclxuICBwYWRkaW5nOiAwIDZweDtcclxuICAvLyAgbWFyZ2luOiAxMHB4IDAgMDtcclxuICB0b3A6IDJweDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT0ncmFkaW8nXSB7XHJcbiAgY29sb3I6ICM2NjY7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT0ncmFkaW8nXTpob3Zlcjo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnICc7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IC0ycHg7XHJcbiAgcmlnaHQ6IDJweDtcclxuICBib3R0b206IDFweDtcclxuICAvL21hcmdpbjogMCAxMDBweCAxMHB4IDA7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDExcHg7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgIzJlNjlmZjQwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPSdyYWRpbyddICsgcDpjaGVja2VkOjphZnRlciB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTFweDtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMyZTY5ZmY0MDtcclxuICAvLyB0b3A6IDlweDtcclxuICAvLyBsZWZ0OiAxMHB4O1xyXG4gIGNvbnRlbnQ6ICcgJztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBiYWNrZ3JvdW5kOiAjMmU2OWZmNDA7XHJcbn1cclxuXHJcbi5vdXRsaW5lOmhvdmVyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZDtcclxuICBib3JkZXItY29sb3I6ICMyZTY5ZmY0MDtcclxuICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiKDQ2LCAxMDUsIDI1NSwgMC4yNSk7XHJcbn1cclxuXHJcbi5vdXRsaW5lOmZvY3VzIHtcclxuICBib3JkZXI6IDFweCBzb2xpZDtcclxuICBib3JkZXItY29sb3I6ICMyZTY5ZmY0MDtcclxuICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiKDQ2LCAxMDUsIDI1NSwgMC4yNSk7XHJcbn1cclxuLy8gICAuZm9ybS1saW5lLWFjdGl2ZXtcclxuLy8gICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MiwgMjQzLCA0MiwgMC44OSk7XHJcbi8vICAgfVxyXG4uZm9ybS1MYWJlbCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgZm9udC1mYW1pbHk6IEludGVyLCBzYW5zLXNlcmlmO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcclxufVxyXG5cclxuLy8gICBib2R5e1xyXG4vLyBcdGZvbnQtZmFtaWx5OiBJbnRlcixzYW5zLXNlcmlmXHJcbi8vICAgfVxyXG4uc3VidGl0ZWwge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIGZvbnQtZmFtaWx5OiBJbnRlciwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLm5hdi10YWJzIC5uYXYtbGluay5hY3RpdmUge1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkO1xyXG4gIGNvbG9yOiAjNDk1MDU3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMmU2OWZmNDAgIzJlNjlmZjQwICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gIGZvbnQtZmFtaWx5OiBJbnRlciwgc2Fucy1zZXJpZjtcclxufVxyXG4udGl0bGUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIGZvbnQtZmFtaWx5OiBJbnRlciwgc2Fucy1zZXJpZjtcclxufVxyXG5idXR0b24ge1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIC8vIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgLy8gY3Vyc29yOiBwb2ludGVyO1xyXG4gIC8vIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbnNlbGVjdCB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICBhcHBlYXJhbmNlOiBub25lO1xyXG59XHJcblxyXG4uZm9ybS1kcm9wZG93biB7XHJcbiAgcGFkZGluZzogMCAxLjg3NWVtIDAgMC42MjVlbTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnJTNFJTNDcGF0aCBmaWxsPSdub25lJyBkPSdNMCAwaDI0djI0SDB6Jy8lM0UlM0NwYXRoIGQ9J00xMiAxMy4xNzJsNC45NS00Ljk1IDEuNDE0IDEuNDE0TDEyIDE2IDUuNjM2IDkuNjM2IDcuMDUgOC4yMjJ6Jy8lM0UlM0Mvc3ZnJTNFXCIpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDEwcHggYm90dG9tIDUwJTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDAuOTI1ZW07XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SiteInspectionComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-site-inspection',
            templateUrl: './site-inspection.component.html',
            styleUrls: ['./site-inspection.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: src_app_utils_services_dynamic_forms_service__WEBPACK_IMPORTED_MODULE_2__["DynamicFormsService"]
          }, {
            type: src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_3__["SetTitleService"]
          }, {
            type: src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__["LogicalFormInfoService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "naXW": function naXW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormsComponent", function () {
        return FormsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/paginator */
      "5QHs");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/table */
      "OaSA");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-spinner */
      "7g+E");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/utils/services/set-title.service */
      "yZxC");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "jMqV");

      function FormsComponent_th_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormsComponent_td_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r12.index);
        }
      }

      function FormsComponent_th_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Form Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormsComponent_td_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r13 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r13.title, " ");
        }
      }

      function FormsComponent_th_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Form Frequency ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormsComponent_td_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "select", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Daily");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Weekly");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Monthly");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Quaterly");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Half yearly");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Yearly");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Once Off");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormsComponent_th_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Disable/Enable ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormsComponent_td_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-slide-toggle", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormsComponent_th_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Action ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FormsComponent_td_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", element_r16.link);
        }
      }

      function FormsComponent_tr_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 26);
        }
      }

      function FormsComponent_tr_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 27);
        }
      }

      var _c0 = function _c0() {
        return [5, 10, 20];
      };

      var FormsComponent = /*#__PURE__*/function () {
        function FormsComponent(dialog, spinner, router, setTitle) {
          _classCallCheck(this, FormsComponent);

          this.dialog = dialog;
          this.spinner = spinner;
          this.router = router;
          this.setTitle = setTitle;
          this.page = 1;
          this.pageSize = 10;
          this.collectionSize = 10;
          this.ELEMENT_DATA = [{
            index: 1,
            title: 'Hazards Reported',
            link: ['/admin/forms/hazardRep']
          }, {
            index: 2,
            title: 'Notifiable Incidents',
            link: ['/admin/forms/incidentRep']
          }, {
            index: 3,
            title: 'Toolbox Talk',
            link: ['/admin/forms/toolboxTalk']
          }, {
            index: 4,
            title: 'Site Inspection',
            link: ['/admin/forms/siteInspect']
          }, {
            index: 5,
            title: 'Risk Assessment',
            link: ['/admin/forms/riskAssessSWMS']
          }];
          this.formName = ''; // formName =[] ;

          this.displayedColumns = ['index', 'formName', 'formFrequency', 'Disable/Enable', 'edit'];
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.ELEMENT_DATA);
        }

        _createClass(FormsComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.dataSource.paginator = this.paginator;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setTitle.setTitle('WHS-All Form');
          }
        }]);

        return FormsComponent;
      }();

      FormsComponent.ɵfac = function FormsComponent_Factory(t) {
        return new (t || FormsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_6__["SetTitleService"]));
      };

      FormsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FormsComponent,
        selectors: [["app-forms"]],
        viewQuery: function FormsComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          }
        },
        decls: 23,
        vars: 5,
        consts: [[1, "col", "ml-2", "pt-3"], [1, ""], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "index"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "formName"], ["matColumnDef", "formFrequency"], ["matColumnDef", "Disable/Enable"], ["matColumnDef", "edit"], ["mat-cell", "", 3, "routerLink", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", "aria-label", "Select page of periodic elements", 3, "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", ""], ["aria-label", "Default select example", 1, "form-select", "form-control", "select"], ["value", "daily"], ["value", "weekly"], ["value", "quaterly"], ["value", "halfYearly"], ["value", "yearly"], ["value", "onceOff"], ["color", "primary", "checked", ""], ["mat-cell", "", 3, "routerLink"], ["aria-hidden", "true", "title", "view", 1, "fa", "fa-eye"], ["mat-header-row", ""], ["mat-row", ""]],
        template: function FormsComponent_Template(rf, ctx) {
          if (rf & 1) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FormsComponent_td_10_Template, 2, 1, "td", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FormsComponent_th_12_Template, 2, 0, "th", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, FormsComponent_td_13_Template, 16, 0, "td", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, FormsComponent_th_15_Template, 2, 0, "th", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, FormsComponent_td_16_Template, 2, 0, "td", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, FormsComponent_th_18_Template, 2, 0, "th", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, FormsComponent_td_19_Template, 2, 1, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, FormsComponent_tr_20_Template, 1, 0, "tr", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, FormsComponent_tr_21_Template, 1, 0, "tr", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "mat-paginator", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
          }
        },
        directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_x"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggle"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]],
        styles: [".viewBtn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #007bff;\n  font-size: 21px !important;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.select[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.pt-3[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 32px;\n  font-weight: 700;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmb3Jtcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSwwQkFBQTtBQUNKOztBQUNBO0VBQ0ksV0FBQTtBQUVKOztBQUFFO0VBQ0ksVUFBQTtBQUdOOztBQURFO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBSUoiLCJmaWxlIjoiZm9ybXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlld0J0biBpIHtcclxuICAgIGNvbG9yOiAjMDA3YmZmO1xyXG4gICAgZm9udC1zaXplOiAyMXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxudGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5zZWxlY3R7XHJcbiAgICAgIHdpZHRoOjUwJTtcclxuICB9XHJcbiAgLnB0LTMge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgICBmb250LWZhbWlseTogSW50ZXIsIHNhbnMtc2VyaWY7XHJcbiAgfSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-forms',
            templateUrl: './forms.component.html',
            styleUrls: ['./forms.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
          }, {
            type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }, {
            type: src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_6__["SetTitleService"]
          }];
        }, {
          paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]]
          }]
        });
      })();
      /***/

    },

    /***/
    "woRl": function woRl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RiskAssessmentSWMSComponent", function () {
        return RiskAssessmentSWMSComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "ltgo");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var src_app_utils_services_dynamic_forms_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/utils/services/dynamic-forms.service */
      "+3ge");
      /* harmony import */


      var src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/utils/services/logical-form-info.service */
      "wbBK");
      /* harmony import */


      var src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/utils/services/set-title.service */
      "yZxC");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/tabs */
      "M9ds");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! angular2-signaturepad */
      "HnZm");

      var _c0 = ["Signature1"];
      var _c1 = ["Signature2"];

      function RiskAssessmentSWMSComponent_option_79_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var jobNo_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", jobNo_r15._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](jobNo_r15.jobNumber);
        }
      }

      function RiskAssessmentSWMSComponent_option_86_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var mang_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", mang_r16._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](mang_r16.title);
        }
      }

      function RiskAssessmentSWMSComponent_div_97_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RiskAssessmentSWMSComponent_div_97_Template_input_change_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var item_r17 = ctx.$implicit;

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r19.onJobtaskSelect($event, item_r17);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r17._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r17.title);
        }
      }

      function RiskAssessmentSWMSComponent_div_244_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r21 = ctx.$implicit;
          var i_r22 = ctx.index;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r3.riskArr[i_r22]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r21.title);
        }
      }

      function RiskAssessmentSWMSComponent_div_250_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r23 = ctx.$implicit;
          var i_r24 = ctx.index;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r4.ppeArr[i_r24]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r23.title);
        }
      }

      function RiskAssessmentSWMSComponent_div_256_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r25 = ctx.$implicit;
          var i_r26 = ctx.index;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r5.licenceArr[i_r26]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r25.title);
        }
      }

      function RiskAssessmentSWMSComponent_option_354_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var jobNo_r27 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", jobNo_r27._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](jobNo_r27.jobNumber);
        }
      }

      function RiskAssessmentSWMSComponent_option_362_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var mang_r28 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", mang_r28._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](mang_r28.title);
        }
      }

      function RiskAssessmentSWMSComponent_h2_441_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Code Of Practices");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RiskAssessmentSWMSComponent_div_448_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r29 = ctx.$implicit;
          var i_r30 = ctx.index;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r10.riskArr[i_r30]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r29.title);
        }
      }

      function RiskAssessmentSWMSComponent_div_594_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r31 = ctx.$implicit;
          var i_r32 = ctx.index;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r11.ppeArr[i_r32]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r31.title);
        }
      }

      function RiskAssessmentSWMSComponent_ng_container_596_div_4_option_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r37 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r37.title, " ");
        }
      }

      function RiskAssessmentSWMSComponent_ng_container_596_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Name of Chemical");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RiskAssessmentSWMSComponent_ng_container_596_div_4_option_8_Template, 2, 1, "option", 131);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Location");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 132);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Hazardous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "select", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 133);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Yes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option", 134);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Qty");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 135);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Expiry Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 137);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Attach SDS Sheet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 139);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RiskAssessmentSWMSComponent_ng_container_596_div_4_Template_span_click_41_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r38.addActionSDSRegister();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "add_circle_outline ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RiskAssessmentSWMSComponent_ng_container_596_div_4_Template_span_click_43_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

            var i_r35 = ctx.index;

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r40.removeSDSRegister(i_r35);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " remove_circle_outline ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r35 = ctx.index;

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r33.allChemicals);
        }
      }

      function RiskAssessmentSWMSComponent_ng_container_596_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "SDS Registor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](3, 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RiskAssessmentSWMSComponent_ng_container_596_div_4_Template, 45, 2, "div", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.sdsRegisterFA().controls);
        }
      }

      function RiskAssessmentSWMSComponent_div_599_option_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var hazard_r48 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", hazard_r48.title, " ");
        }
      }

      function RiskAssessmentSWMSComponent_div_599_option_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r49 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r49._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r49.title);
        }
      }

      function RiskAssessmentSWMSComponent_div_599_option_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var contrlActReq_r50 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", contrlActReq_r50.title, " ");
        }
      }

      function RiskAssessmentSWMSComponent_div_599_option_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r51 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r51._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r51.title);
        }
      }

      function RiskAssessmentSWMSComponent_div_599_option_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r52 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r52._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r52.title);
        }
      }

      function RiskAssessmentSWMSComponent_div_599_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 142);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 143);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 144);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Identity Hazards");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "select", 145);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RiskAssessmentSWMSComponent_div_599_option_10_Template, 2, 1, "option", 131);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 146);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 147);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 148);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Risk");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "select", 149);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, RiskAssessmentSWMSComponent_div_599_option_16_Template, 2, 2, "option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 143);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 144);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Control and Action Required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "select", 145);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, RiskAssessmentSWMSComponent_div_599_option_22_Template, 2, 1, "option", 131);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](23, 150);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 151);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 148);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Residual Risk");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "select", 152);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, RiskAssessmentSWMSComponent_div_599_option_28_Template, 2, 2, "option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](29, 153);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 154);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 148);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Person Responsible");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "select", 155);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, RiskAssessmentSWMSComponent_div_599_option_34_Template, 2, 2, "option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r41 = ctx.$implicit;
          var i_r42 = ctx.index;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Step:", i_r42 + 1, " ", item_r41.title, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r41.identifyHazard);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r13.riskLevel);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r41.controlActionRequired);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r13.resiRiskLevel);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r13.staff);
        }
      }

      var _c2 = function _c2() {
        return ["/admin/forms"];
      };

      var RiskAssessmentSWMSComponent = /*#__PURE__*/function () {
        function RiskAssessmentSWMSComponent(fb, dynamicFormsService, logicalFormInfo, setTitle) {
          _classCallCheck(this, RiskAssessmentSWMSComponent);

          this.fb = fb;
          this.dynamicFormsService = dynamicFormsService;
          this.logicalFormInfo = logicalFormInfo;
          this.setTitle = setTitle;
          this.RiskAssessment = true;
          this.SWMSShow = false;
          this.chemicalTask = false; //checkboxes array

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
          this.allContrlActReq = []; // riskLevel = [];
          // resdRiskLevel = [];

          this.statesData = [{
            states: 'NSW',
            juridiction: {
              act: 'Act: Work Health and Safety Act 2011 (NSW)',
              regulation: 'Regulation: Work Health and Safety Regulation 2017 (NSW)'
            },
            safetyLegislation: {
              regulator: 'Regulator: SafeWork NSW',
              codes: 'Codes: NSW Codes of Practice'
            }
          }, {
            states: 'ACT',
            juridiction: {
              act: 'Act: Work Health and Safety Act 2011 (ACT)',
              regulation: 'Regulation: Work Health and Safety Regulation 2011 (ACT)'
            },
            safetyLegislation: {
              regulator: 'Regulator: WorkSafe ACT',
              codes: 'Codes: ACT Codes of Practice'
            }
          }, {
            states: 'QLD',
            juridiction: {
              act: 'Act: Work Health and Safety Act 2011 (Qld)',
              regulation: 'Regulation: Work Health and Safety Regulation 2011 (Qld)'
            },
            safetyLegislation: {
              regulator: 'Regulator: Workplace Health and Safety Queensland',
              codes: 'Codes: Qld Codes of Practice '
            }
          }, {
            states: 'NT',
            juridiction: {
              act: 'Act: Work Health and Safety (National Uniform Legislation) Act 2011 (NT) ',
              regulation: 'Regulation: Work Health and Safety (National Uniform Legislation) Regulations (NT)'
            },
            safetyLegislation: {
              regulator: 'Regulator: NT WorkSafe',
              codes: 'Codes: NT Codes of Practice'
            }
          }, {
            states: 'SA',
            juridiction: {
              act: 'Act: Work Health and Safety Act 2012 (SA)',
              regulation: 'Regulation: Work Health and Safety Regulation 2012 (SA) '
            },
            safetyLegislation: {
              regulator: 'Regulator: SafeWork SA',
              codes: 'Codes: SA Codes of Practice'
            }
          }, {
            states: 'TAS',
            juridiction: {
              act: 'Act: Work Health and Safety Act 2012 (Tas) ',
              regulation: 'Regulation: Work Health and Safety Regulation 2012 (Tas) '
            },
            safetyLegislation: {
              regulator: 'Regulator: WorkSafe Tasmania',
              codes: 'Codes: Tas Codes of Practice'
            }
          }, {
            states: 'NZ',
            juridiction: {
              act: 'Act: Health and Safety at Work Act 2015 (NZ)',
              regulation: ''
            },
            safetyLegislation: {
              regulator: 'Regulator: WorkSafe New Zealand',
              codes: 'Codes: NZ Codes of Practice'
            }
          }, {
            states: 'VIC',
            juridiction: {
              act: 'Act: Occupational Health and Safety Act 2004 (Vic) ',
              regulation: 'Regulation: Occupational Health and Safety Regulations 2017 (Vic)'
            },
            safetyLegislation: {
              regulator: 'Regulator: WorkSafe Victoria',
              codes: 'Codes: Vic Compliance Codes'
            }
          }, {
            states: 'WA',
            juridiction: {
              act: 'Act: Occupational Safety and Health Act 1984 (WA)',
              regulation: 'Regulation: Occupational Safety and Health Regulations 1996 (WA)'
            },
            safetyLegislation: {
              regulator: 'Regulator: WorkSafe WA',
              codes: 'Codes: WA Codes of Practice'
            }
          }]; // jobTask = [
          //   { label: 'Activities Involving chemicals', value: '' },
          //   { label: 'Assess Hazards', value: '' },
          //   { label: 'Cable installation into cables tray', value: '' },
          //   { label: 'Cable Support installation', value: '' },
          //   { label: 'Camera Installation', value: '' },
          //   { label: 'conduit Installation in ceiling or walls', value: '' },
          //   { label: 'Conduit installation in trench', value: '' },
          //   { label: 'conduit installation prior to concreate Pour', value: '' },
          //   { label: 'Control Panel Installation', value: '' },
          //   { label: 'Heat Shrinking cable joints', value: '' },
          //   { label: 'Hot Works', value: '' },
          //   { label: 'Installation of cables', value: '' },
          //   { label: 'Leaving Site', value: '' },
          //   { label: 'Maual Handling', value: '' },
          //   { label: 'Site establishment', value: '' },
          //   { label: 'Terminination of fibre optic cables', value: '' },
          //   { label: 'Use of Elevated Work Platform', value: '' },
          //   { label: 'Use of EWP', value: '' },
          //   { label: 'Use of Ladders', value: '' },
          //   { label: 'Use of Plant & Equipment', value: '' },
          //   { label: 'Use of plant Equipment', value: '' },
          //   { label: 'Working false ceilings', value: '' },
          //   { label: 'Working in communication pits less than 1.5m deep', value: '' },
          //   { label: 'Working near around Pedistrians', value: '' },
          //   { label: 'Working near Asbestos', value: '' },
          //   { label: 'Working near Lead containing materials', value: '' },
          //   { label: 'Working outdoors', value: '' },
          //   { label: 'Working with hand and power tools', value: '' },
          // ];
          // highRiskConstruction = [
          //   {
          //     label: 'Working in or near trenches or shafts deeper than 1.5metres',
          //     value: '',
          //   },
          //   { label: 'Work in or near a confined space', value: '' },
          //   {
          //     label:
          //       'Work in an area that may have a contaminated or flammable atmosphere',
          //     value: '',
          //   },
          //   { label: 'Working around or near mobile plant', value: '' },
          //   { label: 'Work with near or near asbestos', value: '' },
          //   { label: 'Working with hazardous substances', value: '' },
          //   { label: 'Working with or near tilt-up/precast concrete', value: '' },
          //   { label: 'Risk of falls higher than 2 metres', value: '' },
          //   {
          //     label: 'Working near on or adjacent to a road or rail corridor',
          //     value: '',
          //   },
          //   { label: 'Working on or near telecommunication tower', value: '' },
          //   { label: 'Working on or near telecommunication tower', value: '' },
          //   { label: 'Work near explosives', value: '' },
          //   {
          //     label:
          //       'Work in or near water or other liquid that involves a risk of drowning',
          //     value: '',
          //   },
          //   { label: 'Demolition of load-bearing structure', value: '' },
          //   { label: 'Diving work', value: '' },
          // ];
          // PPEselection = [
          //   { label: 'Disposable dust mask', value: '' },
          //   { label: 'Dust Mas', value: '' },
          //   { label: 'Face shield', value: '' },
          //   { label: 'Full face respirator', value: '' },
          //   { label: 'Gttors', value: '' },
          //   { label: 'Half face respirator', value: '' },
          //   { label: 'Hard Hat', value: '' },
          //   { label: 'Hearing protection', value: '' },
          //   { label: 'High-Vis Clothing', value: '' },
          //   { label: 'Lock Out Tags', value: '' },
          //   { label: 'Long sleeve/Long pants', value: '' },
          //   { label: 'Out of Service Tags', value: '' },
          //   { label: 'Protective gloves', value: '' },
          //   { label: 'Rescue kit', value: '' },
          //   { label: 'Safety boots', value: '' },
          //   { label: 'Safety glasses', value: '' },
          //   { label: 'Sun Screen', value: '' },
          //   { label: 'torch', value: '' },
          //   { label: 'Wide Brim Hat', value: '' },
          // ];
          // licenseAndQualification = [
          //   { label: 'Open Cable Licence', value: '' },
          //   { label: 'White Card', value: '' },
          //   { label: 'EWP Licence', value: '' },
          //   { label: 'Working At Heights', value: '' },
          //   { label: 'Security Licence', value: '' },
          //   { label: 'Asbestos Awarness', value: '' },
          //   { label: 'Working In Confined Space', value: '' },
          // ];

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
          this.riskArr = [];
          this.ppeArr = [];
          this.licenceArr = [];
          this.jobTaskData = [];
          this.jobTaskSelected = [];
          this.projectMang = [];
          this.allChemicals = [];
          this.allCOPSelected = [];
          this.signaturePadOptions1 = {
            // passed through to szimek/signature_pad constructor
            minWidth: 1,
            canvasWidth: 450,
            canvasHeight: 100
          };
          this.signaturePadOptions2 = {
            // passed through to szimek/signature_pad constructor
            minWidth: 1,
            canvasWidth: 430,
            canvasHeight: 100
          };
          this.riskAssessmentFb = this.fb.group({
            SWMSTab: this.fb.array([]),
            jobNumber: [''],
            // jobNumberDupl: [''],
            siteName: [''],
            customerName: [''],
            streetNo: [''],
            streetAddr: [''],
            subUrb: [''],
            custConct: [''],
            custConctPh: [''],
            custEmail: [''],
            Employee1: [''],
            dateTime: [''],
            statesSWMS: [''],
            jurisdiction: [''],
            safetyLeg: [''],
            regulator: [''],
            CodeOfPract: [''],
            SDSRegister: this.fb.array([]),
            riskLevel: this.fb.array([]),
            residualRisk: this.fb.array([]),
            persResp: this.fb.array([])
          });
        }

        _createClass(RiskAssessmentSWMSComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

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
            this.setTitle.setTitle('WHS-Risk Assesment Form'); // this.riskAssessmentFb.get('jobNumber').valueChanges.subscribe((res) => {
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

            this.riskAssessmentFb.get('statesSWMS').valueChanges.subscribe(function (res) {
              if (res) {
                console.log(res);

                switch (res) {
                  case 'NSW':
                    _this2.riskAssessmentFb.get('jurisdiction').setValue('NSW');

                    _this2.riskAssessmentFb.get('safetyLeg').setValue('NSW_Act');

                    _this2.riskAssessmentFb.get('regulator').setValue('Reg_NSW');

                    _this2.riskAssessmentFb.get('CodeOfPract').setValue('code_NSW');

                    break;

                  case 'ACT':
                    _this2.riskAssessmentFb.get('jurisdiction').setValue('ACT');

                    _this2.riskAssessmentFb.get('safetyLeg').setValue('ACT_Act');

                    _this2.riskAssessmentFb.get('regulator').setValue('Reg_ACT');

                    _this2.riskAssessmentFb.get('CodeOfPract').setValue('code_ACT');

                    break;

                  case 'QLD':
                    _this2.riskAssessmentFb.get('jurisdiction').setValue('QLD');

                    _this2.riskAssessmentFb.get('safetyLeg').setValue('QLD_Act');

                    _this2.riskAssessmentFb.get('regulator').setValue('Reg_QLD');

                    _this2.riskAssessmentFb.get('CodeOfPract').setValue('code_QLD');

                    break;

                  case 'NT':
                    _this2.riskAssessmentFb.get('jurisdiction').setValue('NT');

                    _this2.riskAssessmentFb.get('safetyLeg').setValue('NT_Act');

                    _this2.riskAssessmentFb.get('regulator').setValue('Reg_NT');

                    _this2.riskAssessmentFb.get('CodeOfPract').setValue('code_NT');

                    break;

                  case 'SA':
                    _this2.riskAssessmentFb.get('jurisdiction').setValue('SA');

                    _this2.riskAssessmentFb.get('safetyLeg').setValue('SA_Act');

                    _this2.riskAssessmentFb.get('regulator').setValue('Reg_SA');

                    _this2.riskAssessmentFb.get('CodeOfPract').setValue('code_SA');

                    break;

                  case 'NZ':
                    _this2.riskAssessmentFb.get('jurisdiction').setValue('NZ');

                    _this2.riskAssessmentFb.get('safetyLeg').setValue('NZ_Act');

                    _this2.riskAssessmentFb.get('regulator').setValue('Reg_NZ');

                    _this2.riskAssessmentFb.get('CodeOfPract').setValue('code_NZ');

                    break;

                  case 'TAS':
                    _this2.riskAssessmentFb.get('jurisdiction').setValue('TAS');

                    _this2.riskAssessmentFb.get('safetyLeg').setValue('TAS_Act');

                    _this2.riskAssessmentFb.get('regulator').setValue('Reg_TAS');

                    _this2.riskAssessmentFb.get('CodeOfPract').setValue('code_TAS');

                    break;

                  case 'VIC':
                    _this2.riskAssessmentFb.get('jurisdiction').setValue('VIC');

                    _this2.riskAssessmentFb.get('safetyLeg').setValue('VIC_Act');

                    _this2.riskAssessmentFb.get('regulator').setValue('Reg_VIC');

                    _this2.riskAssessmentFb.get('CodeOfPract').setValue('code_VIC');

                    break;

                  case 'WA':
                    _this2.riskAssessmentFb.get('jurisdiction').setValue('WA');

                    _this2.riskAssessmentFb.get('safetyLeg').setValue('WA_Act');

                    _this2.riskAssessmentFb.get('regulator').setValue('Reg_WA');

                    _this2.riskAssessmentFb.get('CodeOfPract').setValue('code_WA');

                    break;
                }
              }
            });
          }
        }, {
          key: "jobNoSel",
          value: function jobNoSel() {
            var _this3 = this;

            this.allJobNumbers.forEach(function (item) {
              if (_this3.riskAssessmentFb.get('jobNumber').value === item._id) {
                console.log('Id found', item);

                _this3.riskAssessmentFb.patchValue({
                  siteName: item.siteName,
                  customerName: item.customerName,
                  streetNo: item.streetNumber,
                  streetAddr: item.streetAddress,
                  subUrb: item.suburb,
                  statesSWMS: item.state,
                  custConct: item.customerContact,
                  custConctPh: item.customerContactPhone,
                  custEmail: item.customerEmail,
                  jobNumber: _this3.riskAssessmentFb.get('jobNumber').value
                });
              }
            });
            this.riskAssessmentFb.get('jobNumber').updateValueAndValidity();
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
          key: "addActionPersonRes",
          value: function addActionPersonRes() {
            {
              this.personResFA().push(this.personResFG());
            }
          }
        }, {
          key: "addActionSDSRegister",
          value: function addActionSDSRegister() {
            {
              this.sdsRegisterFA().push(this.sdsRegisterFG());
            }
          }
        }, {
          key: "riskLevelFA",
          value: function riskLevelFA() {
            return this.riskAssessmentFb.get('riskLevel');
          }
        }, {
          key: "residlRiskLevelFA",
          value: function residlRiskLevelFA() {
            return this.riskAssessmentFb.get('residualRisk');
          }
        }, {
          key: "sdsRegisterFA",
          value: function sdsRegisterFA() {
            return this.riskAssessmentFb.get('SDSRegister');
          }
        }, {
          key: "personResFA",
          value: function personResFA() {
            return this.riskAssessmentFb.get('persResp');
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
          key: "personResFG",
          value: function personResFG() {
            return this.fb.group({
              personRes: ['']
            });
          }
        }, {
          key: "sdsRegisterFG",
          value: function sdsRegisterFG() {
            return this.fb.group({
              chemicalName: [''],
              location: [''],
              hazardous: [''],
              quantity: [''],
              expDate: ['']
            });
          }
        }, {
          key: "removeSDSRegister",
          value: function removeSDSRegister(i) {
            var item = this.riskAssessmentFb.controls['SDSRegister'];

            if (item.length > 1) {
              item.removeAt(i);
            }
          }
        }, {
          key: "showsite",
          value: function showsite() {
            this.RiskAssessment = true;
            this.SWMSShow = false;
          }
        }, {
          key: "showAction",
          value: function showAction() {
            this.SWMSShow = true;
            this.RiskAssessment = false;
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            // this.signaturePad is now available
            //this.signaturePad1.set('minWidth', 1); // set szimek/signature_pad options at runtime
            // this.signaturePad2.set('minWidth', 1); // set szimek/signature_pad options at runtime
            //this.signaturePad1.clear(); // invoke functions from szimek/signature_pad API
            // this.signaturePad2.clear(); // invoke functions from szimek/signature_pad API
            console.log('clear1 &2');
          }
        }, {
          key: "drawComplete1",
          value: function drawComplete1() {
            // will be notified of szimek/signature_pad's onEnd event
            console.log(this.signaturePad1.toDataURL());
          }
        }, {
          key: "clear1",
          value: function clear1() {
            console.log('clear1');
            this.signaturePad1.clear();
          }
        }, {
          key: "drawStart1",
          value: function drawStart1() {
            // will be notified of szimek/signature_pad's onBegin event
            console.log('begin drawing');
          }
        }, {
          key: "drawComplete2",
          value: function drawComplete2() {
            // will be notified of szimek/signature_pad's onEnd event
            console.log(this.signaturePad2.toDataURL());
          }
        }, {
          key: "clear2",
          value: function clear2() {
            console.log('clear2');
            this.signaturePad2.clear();
          }
        }, {
          key: "drawStart2",
          value: function drawStart2() {
            // will be notified of szimek/signature_pad's onBegin event
            console.log('begin drawing');
          }
        }, {
          key: "getAllJobTask",
          value: function getAllJobTask() {
            var _this4 = this;

            this.logicalFormInfo.getAllJobtask().subscribe(function (res) {
              _this4.jobTaskData = res.data;
              console.log('jobTaskDetails=>', _this4.jobTaskData);
            });
          }
        }, {
          key: "getAllPPE",
          value: function getAllPPE() {
            var _this5 = this;

            this.logicalFormInfo.getAllPPE().subscribe(function (res) {
              console.log('PPE=>', res);
              _this5.PPEselection = res.data;

              for (var i = 0; i < _this5.PPEselection.length; i++) {
                _this5.ppeArr[i] = 0;
              }
            });
          }
        }, {
          key: "getAllProjectMang",
          value: function getAllProjectMang() {
            var _this6 = this;

            this.logicalFormInfo.getAllProjectMang().subscribe(function (res) {
              _this6.projectMang = res.data;
              console.log('getAllProjectMang=>', _this6.projectMang);
            });
          }
        }, {
          key: "getAllHighRisk",
          value: function getAllHighRisk() {
            var _this7 = this;

            this.logicalFormInfo.getAllRisk().subscribe(function (res) {
              console.log('Risk=>', res);
              _this7.highRiskConstruction = res.data;

              for (var i = 0; i < _this7.highRiskConstruction.length; i++) {
                _this7.riskArr[i] = 0;
              }
            });
          }
        }, {
          key: "getHighRiskById",
          value: function getHighRiskById() {
            var _this8 = this;

            var mode = 'Risk';
            this.logicalFormInfo.getFormDataById(mode).subscribe(function (res) {
              _this8.highRiskConstruction = res.data[0].subComponents;
              console.log(' this.highRiskConstruction=>', _this8.highRiskConstruction);

              for (var i = 0; i < _this8.highRiskConstruction.length; i++) {
                _this8.riskArr[i] = 0;
              }
            });
          }
        }, {
          key: "getAllLicence",
          value: function getAllLicence() {
            var _this9 = this;

            this.logicalFormInfo.getAllLicence().subscribe(function (res) {
              _this9.licenseAndQualification = res.data;
              console.log('this.licenseAndQualification=>', _this9.licenseAndQualification);

              for (var i = 0; i < _this9.licenseAndQualification.length; i++) {
                _this9.licenceArr[i] = 0;
              }
            });
          }
        }, {
          key: "getAllHazard",
          value: function getAllHazard() {
            var _this10 = this;

            this.logicalFormInfo.getAllHazards().subscribe(function (res) {
              console.log('getAllHazards=>', res);
              _this10.allHazards = res.data;
            });
          }
        }, {
          key: "getAllContrActReq",
          value: function getAllContrActReq() {
            var _this11 = this;

            this.logicalFormInfo.getAllContrlActReq().subscribe(function (res) {
              console.log('getAllHazards=>', res);
              _this11.allContrlActReq = res.data;
            });
          }
        }, {
          key: "onJobtaskSelect",
          value: function onJobtaskSelect(e, jobTaskRecd) {
            var _this12 = this;

            // this.jobTaskSelected=[];
            console.log('event', e.target.value, jobTaskRecd);
            var item = e.target.value;

            if (e.target.checked) {
              this.checkArray.push(item);
              console.log("jobTaskRecd", jobTaskRecd);
              this.jobTaskSelected.push(jobTaskRecd);
            } else {
              this.checkArray.forEach(function (item, j) {
                if (item == e.target.value) {
                  _this12.checkArray.splice(j, 1);

                  _this12.jobTaskSelected.splice(j, 1);

                  return;
                }
              });
            }

            for (var k = 0; k < this.riskArr.length; k++) {
              this.riskArr[k] = 0;
            }

            for (var _k = 0; _k < this.ppeArr.length; _k++) {
              this.ppeArr[_k] = 0;
            }

            for (var _k2 = 0; _k2 < this.licenceArr.length; _k2++) {
              this.licenceArr[_k2] = 0;
            }

            this.chemicalTask = false; // console.log(this.checkArray);

            this.checkArray.forEach(function (id) {
              _this12.jobTaskData.forEach(function (element) {
                //looking for chemical task
                if (element.chemical == "YES") {
                  _this12.chemicalTask = true;
                }

                if (id === element._id) {
                  element.risk.forEach(function (riskItem) {
                    _this12.highRiskConstruction.forEach(function (highRisk, riskIndex) {
                      if (highRisk._id === riskItem) {
                        _this12.riskArr[riskIndex] = 1;
                      }
                    });
                  });
                  element.PPE.forEach(function (riskItem) {
                    _this12.PPEselection.forEach(function (highRisk, index) {
                      if (highRisk._id === riskItem) {
                        _this12.ppeArr[index] = 1;
                      }
                    });
                  }); // element.tradeCategoryId.forEach((riskItem) => {
                  //   this.licenseAndQualification.forEach((highRisk, index) => {
                  //     if (highRisk.tradeCategoryId._id === riskItem) {
                  //       this.licenceArr[index] = 1;
                  //     }
                  //   });
                  // });

                  _this12.licenseAndQualification.forEach(function (highRisk, index) {
                    console.log("highRisk.tradeCategoryId._id", highRisk.tradeCategoryId._id);
                    console.log("element.tradeCategoryId._id", element.tradeCategoryId._id);

                    if (highRisk.tradeCategoryId._id === element.tradeCategoryId._id) {
                      _this12.licenceArr[index] = 1;
                    }
                  });
                }
              });
            });

            while (this.riskLevelFA().length) {
              this.riskLevelFA().removeAt(0);
            }

            while (this.residlRiskLevelFA().length) {
              this.residlRiskLevelFA().removeAt(0);
            }

            while (this.personResFA().length) {
              this.personResFA().removeAt(0);
            }

            this.jobTaskSelected.forEach(function (data, i) {
              var _a;

              _this12.addActionRiskLevel();

              _this12.addActionResiRiskLevel();

              _this12.addActionPersonRes();

              _this12.personResFA().controls[i].get('personRes').setValue((_a = data === null || data === void 0 ? void 0 : data.staffId) === null || _a === void 0 ? void 0 : _a._id);

              _this12.riskLevelFA().controls[i].get('riskLevel').setValue(data.riskLevel);

              _this12.residlRiskLevelFA().controls[i].get('resiRiskLevel').setValue(data.residualRisk);
            });
            console.log('jobTaskSelected', this.jobTaskSelected);
            console.log(this.residlRiskLevelFA().value);
          }
        }, {
          key: "getAllJobNumber",
          value: function getAllJobNumber() {
            var _this13 = this;

            this.logicalFormInfo.getAllJobNumber().subscribe(function (res) {
              console.log(res);
              console.log('getAllJobNumber', res.data);
              _this13.allJobNumbers = res.data;
            });
          }
        }, {
          key: "getAllStaff",
          value: function getAllStaff() {
            var _this14 = this;

            this.logicalFormInfo.getAllStaff().subscribe(function (res) {
              console.log(res);
              _this14.staff = res.data;
            });
          }
        }, {
          key: "getAllResidualRiskLevel",
          value: function getAllResidualRiskLevel() {
            var _this15 = this;

            this.logicalFormInfo.getAllResidual().subscribe(function (res) {
              console.log("this.resiRiskLevelData", res.data);
              _this15.resiRiskLevel = res.data;
            });
          }
        }, {
          key: "getAllRiskLevel",
          value: function getAllRiskLevel() {
            var _this16 = this;

            this.logicalFormInfo.getAllRiskLevel().subscribe(function (res) {
              console.log("this.riskLevelData", res.data);
              _this16.riskLevel = res.data;
            });
          }
        }, {
          key: "getAllChemical",
          value: function getAllChemical() {
            var _this17 = this;

            this.logicalFormInfo.getAllChemical().subscribe(function (res) {
              console.log(res);
              _this17.allChemicals = res.data;
            });
          }
        }, {
          key: "drop",
          value: function drop(event) {
            var _this18 = this;

            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(this.jobTaskSelected, event.previousIndex, event.currentIndex);

            while (this.riskLevelFA().length) {
              this.riskLevelFA().removeAt(0);
            }

            while (this.residlRiskLevelFA().length) {
              this.residlRiskLevelFA().removeAt(0);
            }

            while (this.personResFA().length) {
              this.personResFA().removeAt(0);
            }

            this.jobTaskSelected.forEach(function (data, i) {
              var _a;

              _this18.addActionRiskLevel();

              _this18.addActionResiRiskLevel();

              _this18.addActionPersonRes();

              _this18.personResFA().controls[i].get('personRes').setValue((_a = data === null || data === void 0 ? void 0 : data.staffId) === null || _a === void 0 ? void 0 : _a._id);

              _this18.riskLevelFA().controls[i].get('riskLevel').setValue(data.riskLevel);

              _this18.residlRiskLevelFA().controls[i].get('resiRiskLevel').setValue(data.residualRisk);
            });
            console.log(this.residlRiskLevelFA().value);
          }
        }]);

        return RiskAssessmentSWMSComponent;
      }();

      RiskAssessmentSWMSComponent.ɵfac = function RiskAssessmentSWMSComponent_Factory(t) {
        return new (t || RiskAssessmentSWMSComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_dynamic_forms_service__WEBPACK_IMPORTED_MODULE_3__["DynamicFormsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__["LogicalFormInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_5__["SetTitleService"]));
      };

      RiskAssessmentSWMSComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RiskAssessmentSWMSComponent,
        selectors: [["app-risk-assessment-swms"]],
        viewQuery: function RiskAssessmentSWMSComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.signaturePad1 = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.signaturePad2 = _t.first);
          }
        },
        decls: 651,
        vars: 18,
        consts: [[1, "btn", "btn-outline-primary", 3, "routerLink"], ["aria-hidden", "true", 1, "fa", "fa-arrow-left"], [1, "container", "card", "px-4", "py-4", 3, "formGroup"], [1, "text-center", "pt-3"], [1, "title"], ["label", "Risk Assessment"], ["id", "myTabContent", 1, "tab-content"], ["id", "RISKAssessment", "role", "tabpanel", "aria-labelledby", "RISKAssessment-tab", 1, "tab-pane", "fade", "show", "active", "px-4", "py-4"], [1, "row"], [1, "my-3", "col"], ["for", "exampleFormControlInput1", 1, "form-label"], ["type", "text", "formControlName", "siteName", 1, "form-control", "col"], ["type", "text", "formControlName", "customerName", 1, "form-control", "col"], [1, "my-3", "col-2"], ["type", "text", "formControlName", "streetNo", 1, "form-control", "col"], [1, "my-3", "col-4"], ["type", "text", "formControlName", "streetAddr", 1, "form-control", "col"], ["type", "text", "formControlName", "subUrb", 1, "form-control", "col"], ["id", "siteName", "aria-label", "Default select example", "formControlName", "statesSWMS", 1, "form-select", "form-control", "col"], ["selected", "", "hidden", ""], ["value", "NSW"], ["value", "ACT"], ["value", "QLD"], ["value", "NT"], ["value", "SA"], ["value", "NZ"], ["value", "TAS"], ["value", "VIC"], ["value", "WA"], ["type", "text", "formControlName", "custConct", 1, "form-control", "col"], ["type", "text", "formControlName", "custConctPh", 1, "form-control", "col"], ["type", "text", "formControlName", "custEmail", 1, "form-control", "col"], ["id", "ProjectManager", "aria-label", "Default select example", "formControlName", "jobNumber", 1, "form-select", "form-control", "col", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], [1, "my-3", "col-6"], ["id", "ProjectManager", "aria-label", "Default select example", 1, "form-select", "form-control", "col"], ["type", "date", "id", "date", 1, "form-control"], [1, "mt-4"], ["class", "mt-2 col-4", 4, "ngFor", "ngForOf"], [1, "row", "mt-4"], [1, "table", "table-bordered", "text-center"], ["colspan", "7", 1, "L_1"], ["colspan", "8", 1, "L_1"], ["colspan", "2", "rowspan", "2"], ["colspan", "5"], ["colspan", "4", "rowspan", "2"], [1, "like_2"], ["rowspan", "5"], [1, "like_1"], [1, "M_1"], [1, "H_1"], ["colspan", "2"], [1, "space_1"], [1, "L_1"], ["scope", "col"], ["colspan", "2", 1, "mr-2", "ml-2"], [1, "col-4"], ["type", "input", "value", "", "formControlName", "Employee1", 1, "mr-1", "form-control"], [1, "sign"], [3, "options", "onBeginEvent", "onEndEvent"], ["Signature1", ""], [1, "btn", "btn-outline-primary", "mt-1", 3, "click"], [1, "col-3"], ["type", "date", "value", "", "formControlName", "dateTime", 1, "mr-1", "form-control"], ["label", "SWMS"], ["id", "SWSS", "role", "tabpanel", "aria-labelledby", "SWSS-tab", 1, "tab-pane", "fade", "show", "active"], [1, "container", "content-center"], [1, "px-4", "py-4"], [1, "col-md-6"], [1, "my-3"], ["for", "exampleInputFullname", 1, "form-label"], ["type", "fullname", "id", "exampleInputFullname", "aria-describedby", "emailHelp", "formControlName", "siteName", 1, "form-control"], ["for", "exampleInputSurname", 1, "form-label"], ["type", "surname", "id", "exampleInputSurname", "aria-describedby", "emailHelp", "formControlName", "customerName", 1, "form-control"], [1, "col-md-2"], ["for", "exampleInputEmail1", 1, "form-label"], ["type", "number", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", "formControlName", "streetNo", 1, "form-control"], [1, "col-md-4"], ["for", "exampleInputPhone", 1, "form-label"], ["type", "email", "id", "exampleInputPhone", "aria-describedby", "emailHelp", "formControlName", "streetAddr", 1, "form-control"], ["for", "exampleInputDepartment", 1, "form-label"], ["type", "department", "id", "exampleInputDepartment", "aria-describedby", "emailHelp", "formControlName", "subUrb", 1, "form-control"], ["for", "exampleInputPosition", 1, "form-label"], ["for", "exampleInputProjectNumber", 1, "form-label"], ["type", "Projectnumber", "id", "exampleInputProjectNumber", "aria-describedby", "emailHelp", "formControlName", "custConct", 1, "form-control"], ["type", "tel", "id", "exampleInputProjectNumber", "aria-describedby", "emailHelp", "formControlName", "custConctPh", 1, "form-control"], ["type", "email", "id", "exampleInputProjectNumber", "aria-describedby", "emailHelp", "formControlName", "custEmail", 1, "form-control"], [1, "col-md-3"], ["aria-label", "Default select example", "formControlName", "jurisdiction", 1, "form-select", "form-control", "col"], [1, "col-md-5"], ["for", "sel2"], ["id", "sel2", "name", "sellist2", "formControlName", "safetyLeg", 1, "form-control"], ["value", "", "selected", "", "hidden", ""], ["value", "NSW_Act"], ["value", "ACT_Act"], ["value", "QLD_Act"], ["value", "NT_Act"], ["value", "SA_Act"], ["value", "TAS_Act"], ["value", "NZ_Act"], ["value", "VIC_Act"], ["value", "WA_Act"], ["id", "siteName", "aria-label", "Default select example", "formControlName", "regulator", 1, "form-select", "form-control", "col"], ["value", "Reg_NSW"], ["value", "Reg_ACT"], ["value", "Reg_QLD"], ["value", "Reg_NT"], ["value", "Reg_SA"], ["value", "Reg_TAS"], ["value", "Reg_NZ"], ["value", "Reg_VIC"], ["value", "Reg_WA"], [4, "ngIf"], ["cdkDropList", "", 1, "example-list", 3, "cdkDropListDropped"], ["class", "example-box", "cdkDrag", "", 4, "ngFor", "ngForOf"], [1, "txt_1"], [1, "col-md-7"], ["type", "text", "id", "exampleInputProjectNumber", "aria-describedby", "emailHelp", 1, "form-control"], [1, "form-floating"], ["Signature2", ""], [3, "value"], [1, "mt-2", "col-4"], ["type", "checkbox", 1, "form-check-input", 3, "value", "change"], ["for", "inlineCheckbox1", 1, "form-check-label", "label_2"], ["type", "checkbox", "value", "Working in or near trenches or shafts deeper than 1.5metres", 1, "form-check-input", 3, "checked"], ["type", "checkbox", "value", "Disposable dust mask", 1, "form-check-input", 3, "checked"], ["type", "checkbox", "value", "Open Cable Licence", 1, "form-check-input", 3, "checked"], ["formArrayName", "SDSRegister"], ["class", "row", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "row", 3, "formGroupName"], ["id", "sel2", "name", "sellist2", 1, "form-control"], [4, "ngFor", "ngForOf"], ["type", "tel", "id", "exampleInputProjectNumber", "aria-describedby", "emailHelp", 1, "form-control"], ["value", "YES"], ["value", "NO"], ["type", "number", "id", "exampleInputProjectNumber", "aria-describedby", "emailHelp", 1, "form-control"], ["type", "date", "id", "exampleInputProjectNumber", "aria-describedby", "emailHelp", 1, "form-control"], [1, "col-md-10"], ["for", "formFile", 1, "form-label"], ["type", "file", "id", "formFile", 1, "form-control"], [1, "material-icons", 2, "margin-top", "30%", 3, "click"], [1, "material-icons", 3, "click"], ["cdkDrag", "", 1, "example-box"], [1, "col-md-4", "my-3"], [1, ""], ["multiple", "", "id", "sel2", "name", "sellist2", 1, "form-control"], ["formArrayName", "riskLevel"], [1, "col-md-1", "my-3", 3, "formGroupName"], ["for", "sel1"], ["id", "sel1", "name", "sellist1", "formControlName", "riskLevel", 1, "form-control"], ["formArrayName", "residualRisk"], [1, "col-md-1", 3, "formGroupName"], ["id", "sel1", "name", "sellist1", "formControlName", "resiRiskLevel", 1, "form-control"], ["formArrayName", "persResp"], [1, "col-md-2", "my-3", 3, "formGroupName"], ["id", "sel1", "name", "sellist1", "formControlName", "personRes", 1, "form-control"]],
        template: function RiskAssessmentSWMSComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Risk Assessment Preview");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-tab-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-tab", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Site Information");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Site Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Customer Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Street Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Street Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Suburb");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "State");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "select", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Select");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "NSW");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "ACT");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "option", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "QLD");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "option", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "NT");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "SA");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "option", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "NZ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "option", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "TAS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "option", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "VIC");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "option", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "WA");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Customer Contact");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "input", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Customer Contact Phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "input", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Customer Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "input", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Job Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "select", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RiskAssessmentSWMSComponent_Template_select_change_76_listener() {
              return ctx.jobNoSel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Select");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, RiskAssessmentSWMSComponent_option_79_Template, 2, 2, "option", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Project Manager");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "select", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Select");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, RiskAssessmentSWMSComponent_option_86_Template, 2, 2, "option", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "input", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Job Tasks");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](97, RiskAssessmentSWMSComponent_div_97_Template, 4, 2, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "table", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "th", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Risk Level Matrix");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "th", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Risk Analysis");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "th", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "td", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Consequence");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "td", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Likelihood");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "td", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Consequence");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "th", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Likelihood");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "td", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "M");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "td", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "H");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "td", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "H");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "td", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "H");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "td", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "H");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "td", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "td", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Rare");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "td", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "td", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Insignificant");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "td", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "M");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "td", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "M");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "td", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "M");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "td", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "H");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "td", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "H");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "td", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "td", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Unlikely");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "td", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "td", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Minor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "td", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "L");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "td", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "M");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "td", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "M");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "td", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "H");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "td", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "H");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "td", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "td", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Moderate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "td", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "td", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "Moderate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "th", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "td", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "L");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "td", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "L");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "td", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "M");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "td", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "M");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "td", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "H");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "td", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "td", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "Likely");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "td", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "td", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "Major");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "th", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "td", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "L");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "td", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "L");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "td", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "L");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "td", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "M");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "td", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "M");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "td", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "td", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "Almost Certain");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "td", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "td", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "Catastrophic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](239, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "High Risk Construction");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](244, RiskAssessmentSWMSComponent_div_244_Template, 4, 2, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](245, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "PPE Selection");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](250, RiskAssessmentSWMSComponent_div_250_Template, 4, 2, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](251, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "Licence and Qualifications");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](256, RiskAssessmentSWMSComponent_div_256_Template, 4, 2, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](257, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, " Toolbox this document with all workers and contractors on sit & sign off ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "Employee 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](265, "input", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "Signature");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "signature-pad", 59, 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onBeginEvent", function RiskAssessmentSWMSComponent_Template_signature_pad_onBeginEvent_270_listener() {
              return ctx.drawStart1();
            })("onEndEvent", function RiskAssessmentSWMSComponent_Template_signature_pad_onEndEvent_270_listener() {
              return ctx.drawComplete1();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "button", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RiskAssessmentSWMSComponent_Template_button_click_272_listener() {
              return ctx.clear1();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, " Clear ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, "Date/Time");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](278, "input", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "mat-tab", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "div", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "label", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "Site Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](288, "input", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "label", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "Customer Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](293, "input", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "div", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "label", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "Street Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](298, "input", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "div", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "label", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "Street Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](303, "input", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "div", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "label", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, "Town/City");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](308, "input", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "div", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "label", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, "State");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "select", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, "Select");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "option", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, "NSW");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "option", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, "ACT");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "option", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, "QLD");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "option", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, "NT");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "option", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, "SA");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "option", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, "NZ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "option", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329, "TAS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "option", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, "VIC");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "option", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, "WA");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "label", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, "Customer Contact");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](338, "input", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "label", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "Customer Contact Phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](343, "input", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "label", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](347, "Customer Contact Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](348, "input", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "div", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "label", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, "Job Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "select", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RiskAssessmentSWMSComponent_Template_select_change_353_listener() {
              return ctx.jobNoSel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](354, RiskAssessmentSWMSComponent_option_354_Template, 2, 2, "option", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "div", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "label", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](358, "Project Manager");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "select", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](361, "Select");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](362, RiskAssessmentSWMSComponent_option_362_Template, 2, 2, "option", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](363, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "div", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "label", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](368, "Jurisdiction");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "select", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](371, "Select");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "option", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](373, "NSW");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "option", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](375, "ACT");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "option", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, "QLD");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "option", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](379, "NT");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "option", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](381, "SA");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "option", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, "NZ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "option", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](385, "TAS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "option", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](387, "VIC");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "option", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](389, "WA");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "div", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "label", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](393, "Safety Legislation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "select", 91);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "option", 92);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](396, "Select");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "option", 93);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](398, " Act: Work Health and Safety Act 2011 (NSW)\xA0 Regulation: Work Health and Safety Regulation 2017 (NSW) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "option", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](400, " Act: Work Health and Safety Act 2011 (ACT)\xA0 Regulation: Work Health and Safety Regulation 2011 (ACT) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "option", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](402, " Act: Work Health and Safety Act 2011 (Qld)\xA0 Regulation: Work Health and Safety Regulation 2011 (Qld) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "option", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](404, " Act: Work Health and Safety (National Uniform Legislation) Act 2011 (NT) \xA0 Regulation: Work Health and Safety (National Uniform Legislation) Regulations (NT) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "option", 97);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](406, " Act: Work Health and Safety Act 2012 (SA)\xA0 Regulation: Work Health and Safety Regulation 2012 (SA) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "option", 98);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](408, " Act: Work Health and Safety Act 2012 (Tas) \xA0 Regulation: Work Health and Safety Regulation 2012 (Tas) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "option", 99);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](410, " Act: Health and Safety at Work Act 2015 (NZ) \xA0 Regulation: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "option", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](412, " Act: Occupational Health and Safety Act 2004 (Vic) \xA0 Regulation: Occupational Health and Safety Regulations 2017 (Vic) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](413, "option", 101);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](414, " Act: Occupational Safety and Health Act 1984 (WA) Regulation: Occupational Safety and Health Regulations 1996 (WA) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "div", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "label", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](418, "Regulator & other Legislation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "select", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](421, "Select");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "option", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](423, "Regulator: SafeWork NSW");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "option", 104);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](425, "Regulator: WorkSafe ACT");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "option", 105);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](427, " Regulator: Workplace Health and Safety Queensland ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "option", 106);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](429, "Regulator: NT WorkSafe");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "option", 107);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](431, "Regulator: SafeWork SA");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](432, "option", 108);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](433, "Regulator: WorkSafe Tasmania");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "option", 109);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](435, "Regulator: WorkSafe New Zealand");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](436, "option", 110);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](437, "Regulator: WorkSafe Victoria");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](438, "option", 111);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](439, "Regulator: WorkSafe WA");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](440, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](441, RiskAssessmentSWMSComponent_h2_441_Template, 2, 0, "h2", 112);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](443, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](444, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](445, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](446, "High Risk Construction");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](447, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](448, RiskAssessmentSWMSComponent_div_448_Template, 4, 2, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](449, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](450, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](451, "table", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](452, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](453, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "th", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](455, "Risk Level Matrix");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](456, "th", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](457, "Risk Analysis");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](458, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](459, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](460, "th", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](461, "td", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](462, "Consequence");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](463, "td", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](464, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](465, "Likelihood");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](466, "td", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](467, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](468, "Consequence");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](469, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](470, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](471, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](472, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](473, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](474, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](475, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](476, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](477, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](478, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](479, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](480, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](481, "th", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](482, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](483, "Likelihood");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](484, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](485, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](486, "td", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](487, "M");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](488, "td", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](489, "H");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](490, "td", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](491, "H");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](492, "td", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](493, "H");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](494, "td", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](495, "H");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](496, "td", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](497, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](498, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](499, "td", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](500, "Rare");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](501, "td", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](502, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](503, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](504, "td", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](505, "Insignificant");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](506, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](507, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](508, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](509, "td", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](510, "M");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](511, "td", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](512, "M");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](513, "td", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](514, "M");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](515, "td", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](516, "H");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](517, "td", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](518, "H");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](519, "td", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](520, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](521, "td", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](522, "Unlikely");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](523, "td", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](524, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](525, "td", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](526, "Minor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](527, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](528, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](529, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](530, "td", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](531, "L");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](532, "td", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](533, "M");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](534, "td", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](535, "M");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](536, "td", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](537, "H");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](538, "td", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](539, "H");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](540, "td", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](541, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](542, "td", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](543, "Moderate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](544, "td", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](545, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](546, "td", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](547, "Moderate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](548, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](549, "th", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](550, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](551, "td", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](552, "L");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](553, "td", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](554, "L");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](555, "td", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](556, "M");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](557, "td", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](558, "M");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](559, "td", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](560, "H");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](561, "td", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](562, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](563, "td", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](564, "Likely");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](565, "td", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](566, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](567, "td", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](568, "Major");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](569, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](570, "th", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](571, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](572, "td", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](573, "L");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](574, "td", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](575, "L");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](576, "td", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](577, "L");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](578, "td", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](579, "M");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](580, "td", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](581, "M");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](582, "td", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](583, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](584, "td", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](585, "Almost Certain");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](586, "td", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](587, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](588, "td", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](589, "Catastrophic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](590, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](591, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](592, "PPE Selection");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](593, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](594, RiskAssessmentSWMSComponent_div_594_Template, 4, 2, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](595, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](596, RiskAssessmentSWMSComponent_ng_container_596_Template, 5, 1, "ng-container", 112);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](597, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](598, "div", 113);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function RiskAssessmentSWMSComponent_Template_div_cdkDropListDropped_598_listener($event) {
              return ctx.drop($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](599, RiskAssessmentSWMSComponent_div_599_Template, 36, 10, "div", 114);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](600, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](601, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](602, " Worker consultation, instruction, training, toolbox talks, review, acceptance record: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](603, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](604, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](605, "h3", 115);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](606, " Only persons who have completed the singoff are authorised to work on the relevent tasks covered by this document. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](607, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](608, " Note: Work must be performed in accordance with this SWMS, any Risk Assessment prepared in relation to this work and any ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](609, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](610, " relevent Safe WorkProcedures.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](611, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](612, " This SWMS must be accessible for inspection untill the energised electrical work to which this SWMS relates is completed. If the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](613, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](614, " SWMS is revised, all version should be kept.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](615, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](616, " If a Notifiable incident occurs in relation to the high-risk construction work in this SWMS, the SWMS must be kept for at least 2 years");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](617, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](618, " from the date of the Notifiable incident.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](619, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](620, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](621, " If Changes are made to the work practice and the content of the SWMS workers will need sign to confirm that they haverecieved an");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](622, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](623, " updated briefing, undestand the content and will comply with the requirements.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](624, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](625, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](626, " Where there are other parties working adjascent to the contractor and the work activity that could impact upon the safety and welfare");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](627, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](628, " of others not directly employed, SWMS will make references to how they will coordinate the work activity and where applicable");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](629, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](630, " communicate to the other parties.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](631, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](632, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](633, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](634, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](635, "Name of worker (Print and Sign)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](636, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](637, "div", 116);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](638, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](639, "label", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](640, "Employee 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](641, "input", 117);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](642, "div", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](643, "div", 118);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](644, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](645, "Signature*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](646, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](647, "signature-pad", 59, 119);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onBeginEvent", function RiskAssessmentSWMSComponent_Template_signature_pad_onBeginEvent_647_listener() {
              return ctx.drawStart2();
            })("onEndEvent", function RiskAssessmentSWMSComponent_Template_signature_pad_onEndEvent_647_listener() {
              return ctx.drawComplete2();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](649, "button", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RiskAssessmentSWMSComponent_Template_button_click_649_listener() {
              return ctx.clear2();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](650, " Clear ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.riskAssessmentFb);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allJobNumbers);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projectMang);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.jobTaskData);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](147);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.highRiskConstruction);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.PPEselection);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.licenseAndQualification);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.signaturePadOptions1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](84);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allJobNumbers);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projectMang);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.allCOPSelected.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.highRiskConstruction);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](146);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.PPEselection);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.chemicalTask);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.jobTaskSelected);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.signaturePadOptions2);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTab"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], angular2_signaturepad__WEBPACK_IMPORTED_MODULE_9__["SignaturePad"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropList"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDrag"]],
        styles: [".report_1[_ngcontent-%COMP%] {\n  background-color: aqua;\n  border-left: 4px solid blue;\n}\n\ndiv.like_1[_ngcontent-%COMP%] {\n  transform: rotate(-90deg);\n  margin-top: 92px;\n  margin-left: -37px;\n  margin-right: -35px;\n}\n\n.M_1[_ngcontent-%COMP%] {\n  background-color: yellow;\n}\n\n.H_1[_ngcontent-%COMP%] {\n  background-color: orangered;\n}\n\n.L_1[_ngcontent-%COMP%] {\n  background-color: #5fdf5f;\n}\n\ndiv.space_1[_ngcontent-%COMP%] {\n  margin: 0px 37px 0px 37px;\n}\n\ndiv.like_2[_ngcontent-%COMP%] {\n  margin: 22px 0 0 0;\n}\n\nlabel[_ngcontent-%COMP%]:not(.form-check-label):not(.custom-file-label) {\n  font-weight: 500;\n}\n\ntr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  word-break: break-word;\n}\n\ntr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  word-break: break-word;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 500;\n  word-break: break-word;\n}\n\n.form-control[_ngcontent-%COMP%]:hover {\n  border-color: rgba(46, 105, 255, 0.5);\n  box-shadow: 0 0 0 2px rgba(46, 105, 255, 0.25);\n}\n\n.form-check-input[_ngcontent-%COMP%]:hover {\n  border-color: rgba(46, 105, 255, 0.5);\n  box-shadow: 0 0 0 2px rgba(46, 105, 255, 0.25);\n}\n\n.form-check-input[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n}\n\n.sign[_ngcontent-%COMP%] {\n  border: 1px solid lightgray;\n}\n\n.sign[_ngcontent-%COMP%]:hover {\n  border-color: rgba(46, 105, 255, 0.5);\n  box-shadow: 0 0 0 2px rgba(46, 105, 255, 0.25);\n}\n\n.txt_1[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 16px;\n  font-weight: 500;\n  word-break: break-word;\n}\n\n.label_2[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 500;\n  margin-left: 7px;\n  margin-top: 5px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background-color: transparent;\n  background-repeat: no-repeat;\n  border: none;\n  cursor: pointer;\n  overflow: hidden;\n  outline: none;\n}\n\n.outline[_ngcontent-%COMP%]:hover {\n  border: 1px solid;\n  border-color: #2e69ff40;\n  box-shadow: 0 0 0 3px rgba(46, 105, 255, 0.25);\n}\n\n.outline[_ngcontent-%COMP%]:focus {\n  border: 1px solid;\n  border-color: #2e69ff40;\n  box-shadow: 0 0 0 3px rgba(46, 105, 255, 0.25);\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n  word-break: break-word;\n  text-align: center;\n  font-family: Inter, sans-serif;\n}\n\ninput[type=file][_ngcontent-%COMP%] {\n  height: 10%;\n  padding: 0%;\n}\n\n.myBtn[_ngcontent-%COMP%] {\n  background-color: #eeeeee;\n  border: none;\n  outline: none;\n  height: 40px;\n}\n\n.example-list[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n  display: block;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.example-box[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.example-box[_ngcontent-%COMP%]:hover {\n  background-color: #f1eded;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccmlzay1hc3Nlc3NtZW50LXN3bXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUhBO0VBQ0Usc0JBQUE7RUFDQSwyQkFBQTtBQWhIRjs7QUFtSEE7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQWhIRjs7QUFrSEE7RUFDRSx3QkFBQTtBQS9HRjs7QUFpSEE7RUFDRSwyQkFBQTtBQTlHRjs7QUFnSEE7RUFDRSx5QkFBQTtBQTdHRjs7QUErR0E7RUFDRSx5QkFBQTtBQTVHRjs7QUE4R0E7RUFDRSxrQkFBQTtBQTNHRjs7QUE2R0E7RUFDRSxnQkFBQTtBQTFHRjs7QUFpSEE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQTlHRjs7QUFpSEE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQTlHRjs7QUFnSEE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBN0dGOztBQStHQTtFQUNFLHFDQUFBO0VBQ0EsOENBQUE7QUE1R0Y7O0FBOEdBO0VBQ0UscUNBQUE7RUFDQSw4Q0FBQTtBQTNHRjs7QUE2R0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQTFHRjs7QUE0R0E7RUFDRSwyQkFBQTtBQXpHRjs7QUEyR0E7RUFDRSxxQ0FBQTtFQUNBLDhDQUFBO0FBeEdGOztBQTBHQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUF2R0Y7O0FBeUdBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUF0R0Y7O0FBd0dBO0VBQ0UsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBckdGOztBQXVHQTtFQUNFLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSw4Q0FBQTtBQXBHRjs7QUF1R0E7RUFDRSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsOENBQUE7QUFwR0Y7O0FBc0dBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0FBbkdGOztBQXFHQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FBbEdGOztBQW9HQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBakdGOztBQW1HQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBR0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQWxHRjs7QUFxR0E7RUFHRSwwQkFBQTtFQUtBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQXhHRjs7QUEwR0E7RUFDRSx5QkFBQTtBQXZHRjs7QUF5R0E7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUhBQUE7QUF0R0Y7O0FBMkdBO0VBQ0UsVUFBQTtBQXhHRjs7QUEyR0E7RUFDRSxzREFBQTtBQXhHRjs7QUEyR0E7RUFDRSxZQUFBO0FBeEdGOztBQTJHQTtFQUNFLHNEQUFBO0FBeEdGIiwiZmlsZSI6InJpc2stYXNzZXNzbWVudC1zd21zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLnJlcG9ydF8xIHtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xyXG4vLyAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgYmx1ZTtcclxuLy8gfVxyXG5cclxuLy8gZGl2Lmxpa2VfMSB7XHJcbi8vICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxuLy8gICBtYXJnaW4tdG9wOiA5MnB4O1xyXG4vLyAgIG1hcmdpbi1sZWZ0OiAtMzdweDtcclxuLy8gICBtYXJnaW4tcmlnaHQ6IC0zNXB4O1xyXG4vLyB9XHJcbi8vIC5NXzEge1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxuLy8gfVxyXG4vLyAuSF8xIHtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2VyZWQ7XHJcbi8vIH1cclxuLy8gLkxfMSB7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk1LCAyMjMsIDk1KTtcclxuLy8gfVxyXG4vLyBkaXYuc3BhY2VfMSB7XHJcbi8vICAgbWFyZ2luOiAwcHggMzdweCAwcHggMzdweDtcclxuLy8gfVxyXG4vLyBkaXYubGlrZV8yIHtcclxuLy8gICBtYXJnaW46IDIycHggMCAwIDA7XHJcbi8vIH1cclxuLy8gbGFiZWw6bm90KC5mb3JtLWNoZWNrLWxhYmVsKTpub3QoLmN1c3RvbS1maWxlLWxhYmVsKSB7XHJcbi8vICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuLy8gfVxyXG5cclxuLy8gLy8gbGFiZWwge1xyXG4vLyAvLyAgICAgbWFyZ2luLWJvdHRvbTogNCU7a3NcclxuLy8gLy8gICAgIG1hcmdpbi10b3A6IDIlO1xyXG4vLyAvLyB9XHJcbi8vIHRyIHRoIHtcclxuLy8gICBmb250LXNpemU6IDE2cHg7XHJcbi8vICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuLy8gICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4vLyB9XHJcblxyXG4vLyB0ciB0ZCB7XHJcbi8vICAgZm9udC1zaXplOiAxNnB4O1xyXG4vLyAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbi8vICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuLy8gfVxyXG4vLyBsYWJlbCB7XHJcbi8vICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4vLyAgIGZvbnQtc2l6ZTogMTRweDtcclxuLy8gICBmb250LXdlaWdodDogNTAwO1xyXG4vLyAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbi8vIH1cclxuLy8gLmZvcm0tY29udHJvbDpob3ZlciB7XHJcbi8vICAgYm9yZGVyLWNvbG9yOiByZ2JhKDQ2LCAxMDUsIDI1NSwgMC41KTtcclxuLy8gICBib3gtc2hhZG93OiAwIDAgMCAycHggcmdiKDQ2IDEwNSAyNTUgLyAyNSUpO1xyXG4vLyB9XHJcbi8vIC5mb3JtLWNoZWNrLWlucHV0OmhvdmVyIHtcclxuLy8gICBib3JkZXItY29sb3I6IHJnYmEoNDYsIDEwNSwgMjU1LCAwLjUpO1xyXG4vLyAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCByZ2IoNDYgMTA1IDI1NSAvIDI1JSk7XHJcbi8vIH1cclxuLy8gLmZvcm0tY2hlY2staW5wdXQge1xyXG4vLyAgIHdpZHRoOiAyMHB4O1xyXG4vLyAgIGhlaWdodDogMjBweDtcclxuLy8gfVxyXG4vLyAuc2lnbiB7XHJcbi8vICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4vLyB9XHJcbi8vIC5zaWduOmhvdmVyIHtcclxuLy8gICBib3JkZXItY29sb3I6IHJnYmEoNDYsIDEwNSwgMjU1LCAwLjUpO1xyXG4vLyAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCByZ2IoNDYgMTA1IDI1NSAvIDI1JSk7XHJcbi8vIH1cclxuLy8gLnR4dF8xIHtcclxuLy8gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbi8vICAgZm9udC1zaXplOiAxNnB4O1xyXG4vLyAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbi8vICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuLy8gfVxyXG4vLyAubGFiZWxfMiB7XHJcbi8vICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4vLyAgIGZvbnQtc2l6ZTogMTZweDtcclxuLy8gICBmb250LXdlaWdodDogNTAwO1xyXG4vLyAgIG1hcmdpbi1sZWZ0OiA3cHg7XHJcbi8vICAgbWFyZ2luLXRvcDogNXB4O1xyXG4vLyB9XHJcbi8vIGJ1dHRvbiB7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbi8vICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuLy8gICBib3JkZXI6IG5vbmU7XHJcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xyXG4vLyAgIG92ZXJmbG93OiBoaWRkZW47XHJcbi8vICAgb3V0bGluZTogbm9uZTtcclxuXHJcbi8vIH1cclxuXHJcbi8vIC5vdXRsaW5lOmhvdmVyIHtcclxuLy8gICBib3JkZXI6IDFweCBzb2xpZDtcclxuLy8gICBib3JkZXItY29sb3I6ICMyZTY5ZmY0MDtcclxuLy8gICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiKDQ2LCAxMDUsIDI1NSwgMC4yNSk7XHJcbi8vIH1cclxuXHJcbi8vIC5vdXRsaW5lOmZvY3VzIHtcclxuLy8gICBib3JkZXI6IDFweCBzb2xpZDtcclxuLy8gICBib3JkZXItY29sb3I6ICMyZTY5ZmY0MDtcclxuLy8gICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiKDQ2LCAxMDUsIDI1NSwgMC4yNSk7XHJcbi8vIH1cclxuLy8gLnRpdGxlIHtcclxuLy8gICBmb250LXNpemU6IDMycHg7XHJcbi8vICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuLy8gICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICBmb250LWZhbWlseTogSW50ZXIsIHNhbnMtc2VyaWY7XHJcbi8vIH1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vL1xyXG4ucmVwb3J0XzEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XHJcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCBibHVlO1xyXG59XHJcblxyXG5kaXYubGlrZV8xIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG4gIG1hcmdpbi10b3A6IDkycHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0zN3B4O1xyXG4gIG1hcmdpbi1yaWdodDogLTM1cHg7XHJcbn1cclxuLk1fMSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xyXG59XHJcbi5IXzEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZXJlZDtcclxufVxyXG4uTF8xIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTUsIDIyMywgOTUpO1xyXG59XHJcbmRpdi5zcGFjZV8xIHtcclxuICBtYXJnaW46IDBweCAzN3B4IDBweCAzN3B4O1xyXG59XHJcbmRpdi5saWtlXzIge1xyXG4gIG1hcmdpbjogMjJweCAwIDAgMDtcclxufVxyXG5sYWJlbDpub3QoLmZvcm0tY2hlY2stbGFiZWwpOm5vdCguY3VzdG9tLWZpbGUtbGFiZWwpIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4vLyBsYWJlbCB7XHJcbi8vICAgICBtYXJnaW4tYm90dG9tOiA0JTtrc1xyXG4vLyAgICAgbWFyZ2luLXRvcDogMiU7XHJcbi8vIH1cclxudHIgdGgge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbn1cclxuXHJcbnRyIHRkIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG59XHJcbmxhYmVsIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxufVxyXG4uZm9ybS1jb250cm9sOmhvdmVyIHtcclxuICBib3JkZXItY29sb3I6IHJnYmEoNDYsIDEwNSwgMjU1LCAwLjUpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCByZ2IoNDYgMTA1IDI1NSAvIDI1JSk7XHJcbn1cclxuLmZvcm0tY2hlY2staW5wdXQ6aG92ZXIge1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSg0NiwgMTA1LCAyNTUsIDAuNSk7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHJnYig0NiAxMDUgMjU1IC8gMjUlKTtcclxufVxyXG4uZm9ybS1jaGVjay1pbnB1dCB7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbiAgaGVpZ2h0OiAxNXB4O1xyXG59XHJcbi5zaWduIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbn1cclxuLnNpZ246aG92ZXIge1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSg0NiwgMTA1LCAyNTUsIDAuNSk7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHJnYig0NiAxMDUgMjU1IC8gMjUlKTtcclxufVxyXG4udHh0XzEge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG59XHJcbi5sYWJlbF8yIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luLWxlZnQ6IDdweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5vdXRsaW5lOmhvdmVyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZDtcclxuICBib3JkZXItY29sb3I6ICMyZTY5ZmY0MDtcclxuICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiKDQ2LCAxMDUsIDI1NSwgMC4yNSk7XHJcbn1cclxuXHJcbi5vdXRsaW5lOmZvY3VzIHtcclxuICBib3JkZXI6IDFweCBzb2xpZDtcclxuICBib3JkZXItY29sb3I6ICMyZTY5ZmY0MDtcclxuICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiKDQ2LCAxMDUsIDI1NSwgMC4yNSk7XHJcbn1cclxuLnRpdGxlIHtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogSW50ZXIsIHNhbnMtc2VyaWY7XHJcbn1cclxuaW5wdXRbdHlwZT0nZmlsZSddIHtcclxuICBoZWlnaHQ6IDEwJTtcclxuICBwYWRkaW5nOiAwJTtcclxufVxyXG4ubXlCdG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcbi5leGFtcGxlLWxpc3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICAvL2JvcmRlcjogc29saWQgMXB4ICNjY2M7XHJcbiAgLy9taW4taGVpZ2h0OiA2MHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uZXhhbXBsZS1ib3gge1xyXG4gIC8vcGFkZGluZzogMjBweCAxMHB4O1xyXG4gIC8vYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjY2M7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XHJcbiAgLy9kaXNwbGF5OiBmbGV4O1xyXG4gLy8gZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAvL2FsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLy9qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBjdXJzb3I6IG1vdmU7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5leGFtcGxlLWJveDpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxLCAyMzcsIDIzNyk7XHJcbn1cclxuLmNkay1kcmFnLXByZXZpZXcge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcclxuICAgICAgICAgICAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxyXG4gICAgICAgICAgICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbn1cclxuXHJcbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLmNkay1kcmFnLWFuaW1hdGluZyB7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG59XHJcblxyXG4uZXhhbXBsZS1ib3g6bGFzdC1jaGlsZCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uZXhhbXBsZS1saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmV4YW1wbGUtYm94Om5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RiskAssessmentSWMSComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-risk-assessment-swms',
            templateUrl: './risk-assessment-swms.component.html',
            styleUrls: ['./risk-assessment-swms.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: src_app_utils_services_dynamic_forms_service__WEBPACK_IMPORTED_MODULE_3__["DynamicFormsService"]
          }, {
            type: src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_4__["LogicalFormInfoService"]
          }, {
            type: src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_5__["SetTitleService"]
          }];
        }, {
          signaturePad1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['Signature1']
          }],
          signaturePad2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['Signature2']
          }]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=views-forms-forms-module-es5.js.map