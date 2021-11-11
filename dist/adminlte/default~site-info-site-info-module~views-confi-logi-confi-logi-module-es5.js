(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~site-info-site-info-module~views-confi-logi-confi-logi-module"], {
    /***/
    "2X0P": function X0P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditSiteComponent", function () {
        return EditSiteComponent;
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

      var EditSiteComponent = /*#__PURE__*/function () {
        function EditSiteComponent(dialogRef, data, fb, logicalFormInfoService) {
          _classCallCheck(this, EditSiteComponent);

          this.dialogRef = dialogRef;
          this.data = data;
          this.fb = fb;
          this.logicalFormInfoService = logicalFormInfoService;
        }

        _createClass(EditSiteComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.editSitesForm = this.fb.group({
              siteName: [this.data.siteName],
              streetNumber: [this.data.streetNumber],
              streetAddress: [this.data.streetAddress],
              suburb: [this.data.suburb],
              state: [this.data.state]
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this = this;

            console.log(this.editSitesForm.value);
            this.logicalFormInfoService.updateSite(this.data._id, this.editSitesForm.value).subscribe(function (res) {
              console.log(res);

              _this.dialogRef.close('ok');
            });
          }
        }]);

        return EditSiteComponent;
      }();

      EditSiteComponent.ɵfac = function EditSiteComponent_Factory(t) {
        return new (t || EditSiteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_logical_form_info_service__WEBPACK_IMPORTED_MODULE_3__["LogicalFormInfoService"]));
      };

      EditSiteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EditSiteComponent,
        selectors: [["app-edit-site"]],
        decls: 49,
        vars: 1,
        consts: [[1, "content", 3, "formGroup"], [1, "container", "px-4", "py-4", "bg-white"], [1, "row"], [1, "my-3", "col-6"], ["for", "exampleFormControlInput1", 1, "form-Label"], ["type", "text", "formControlName", "siteName", "id", "siteName", 1, "form-control"], [1, "my-3", "col-3"], ["type", "text", "formControlName", "streetNumber", "id", "siteName", 1, "form-control"], ["type", "text", "formControlName", "streetAddress", "id", "siteName", 1, "form-control"], [1, "my-3", "col-2"], ["type", "text", "formControlName", "suburb", "id", "siteName", 1, "form-control"], [1, "my-3", "col-4"], ["for", "exampleFormControlInput1", 1, "form-label"], ["id", "siteName", "aria-label", "Default select example", "formControlName", "state", 1, "form-select", "form-control", "col"], ["selected", "", "hidden", ""], ["value", "NSW"], ["value", "ACT"], ["value", "QLD"], ["value", "NT"], ["value", "SA"], ["value", "NZ"], ["value", "TAS"], ["value", "VIC"], ["value", "WA"], [1, "btn", "btn-primary", 3, "click"]],
        template: function EditSiteComponent_Template(rf, ctx) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Street Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Street Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Suburb");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 12);

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditSiteComponent_Template_button_click_47_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Submit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.editSitesForm);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"]],
        styles: ["input[_ngcontent-%COMP%]:focus {\n  border: 2px solid dodgerblue;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 500;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n}\n\n.form-control[_ngcontent-%COMP%]:hover {\n  border-color: rgba(46, 105, 255, 0.5);\n  box-shadow: 0 0 0 2px rgba(46, 105, 255, 0.25);\n}\n\nabel[_ngcontent-%COMP%]:not(.form-check-label):not(.custom-file-label) {\n  font-weight: 500;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  border: 2px solid dodgerblue;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 500;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n}\n\n.form-control[_ngcontent-%COMP%]:hover {\n  border-color: rgba(46, 105, 255, 0.5);\n  box-shadow: 0 0 0 2px rgba(46, 105, 255, 0.25);\n}\n\n.pt-3[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 32px;\n  font-weight: 700;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n}\n\n.container[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.form-Label[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 500;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n  width: 100%;\n  margin-left: 2px;\n  margin-bottom: 14px;\n}\n\n.sign[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid rgba(46, 105, 255, 0.5);\n  width: 500px;\n  border-radius: 5px;\n}\n\n.sign[_ngcontent-%COMP%]:hover {\n  border: 1px solid;\n  border-color: #2e69ff40;\n  box-shadow: 0 0 0 3px rgba(46, 105, 255, 0.25);\n}\n\n.imgStyle[_ngcontent-%COMP%] {\n  border: 2px solid #2e69ff40;\n  border-radius: 10px;\n}\n\n.example-additional-selection[_ngcontent-%COMP%] {\n  opacity: 0.75;\n  font-size: 0.75em;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZWRpdC1zaXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7QUFDSjs7QUFDRTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQUVKOztBQUFFO0VBQ0UscUNBQUE7RUFDQSw4Q0FBQTtBQUdKOztBQURFO0VBQ0UsZ0JBQUE7QUFJSjs7QUFGRTtFQUNFLDRCQUFBO0FBS0o7O0FBSEU7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFNSjs7QUFKRTtFQUNFLHFDQUFBO0VBQ0EsOENBQUE7QUFPSjs7QUFMRTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQVFKOztBQU5FO0VBQ0UsdUJBQUE7QUFTSjs7QUFQRTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBVUo7O0FBUkU7RUFDRSxhQUFBO0VBQ0EseUNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFXSjs7QUFURTtFQUNFLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSw4Q0FBQTtBQVlKOztBQVRFO0VBQ0UsMkJBQUE7RUFDQSxtQkFBQTtBQVlKOztBQVZFO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0FBYUo7O0FBWEU7RUFDRSxXQUFBO0FBY0oiLCJmaWxlIjoiZWRpdC1zaXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQ6Zm9jdXMge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgZG9kZ2VyYmx1ZTtcclxuICB9XHJcbiAgbGFiZWwge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgICBmb250LWZhbWlseTogSW50ZXIsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIC5mb3JtLWNvbnRyb2w6aG92ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDQ2LCAxMDUsIDI1NSwgMC41KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCByZ2IoNDYgMTA1IDI1NSAvIDI1JSk7XHJcbiAgfVxyXG4gIGFiZWw6bm90KC5mb3JtLWNoZWNrLWxhYmVsKTpub3QoLmN1c3RvbS1maWxlLWxhYmVsKSB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuICBpbnB1dDpmb2N1cyB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBkb2RnZXJibHVlO1xyXG4gIH1cclxuICBsYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICAgIGZvbnQtZmFtaWx5OiBJbnRlciwgc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgLmZvcm0tY29udHJvbDpob3ZlciB7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoNDYsIDEwNSwgMjU1LCAwLjUpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHJnYig0NiAxMDUgMjU1IC8gMjUlKTtcclxuICB9XHJcbiAgLnB0LTMge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgICBmb250LWZhbWlseTogSW50ZXIsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIC5jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC5mb3JtLUxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgZm9udC1mYW1pbHk6IEludGVyLCBzYW5zLXNlcmlmO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTRweDtcclxuICB9XHJcbiAgLnNpZ24ge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNDYsIDEwNSwgMjU1LCAwLjUpO1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIH1cclxuICAuc2lnbjpob3ZlciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogIzJlNjlmZjQwO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYig0NiwgMTA1LCAyNTUsIDAuMjUpO1xyXG4gIH1cclxuICBcclxuICAuaW1nU3R5bGUge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzJlNjlmZjQwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcbiAgLmV4YW1wbGUtYWRkaXRpb25hbC1zZWxlY3Rpb24ge1xyXG4gICAgb3BhY2l0eTogMC43NTtcclxuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xyXG4gIH1cclxuICB0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditSiteComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-edit-site',
            templateUrl: './edit-site.component.html',
            styleUrls: ['./edit-site.component.scss']
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
//# sourceMappingURL=default~site-info-site-info-module~views-confi-logi-confi-logi-module-es5.js.map