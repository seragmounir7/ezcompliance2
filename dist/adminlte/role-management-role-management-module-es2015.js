(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["role-management-role-management-module"],{

/***/ "9NQz":
/*!**************************************************************!*\
  !*** ./src/app/role-management/role-management.component.ts ***!
  \**************************************************************/
/*! exports provided: RoleManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleManagementComponent", function() { return RoleManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _add_role_add_role_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-role/add-role.component */ "acSN");
/* harmony import */ var src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utils/services/set-title.service */ "yZxC");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checkbox/checkbox.component */ "rh9J");






class RoleManagementComponent {
    constructor(setTitle, dialog) {
        this.setTitle = setTitle;
        this.dialog = dialog;
    }
    ngOnInit() {
        this.setTitle.setTitle('WHS-Role Management');
    }
    openDialog(id) {
        let dialogRef = this.dialog.open(_add_role_add_role_component__WEBPACK_IMPORTED_MODULE_1__["AddRoleComponent"], {
            height: '50%',
            width: '500px',
            data: {
                action: "new",
                userId: id,
            },
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result === 'true') {
            }
            console.log("AddRoleComponent -> openDialog -> result", result);
            console.log("The dialog was closed");
        });
    }
}
RoleManagementComponent.ɵfac = function RoleManagementComponent_Factory(t) { return new (t || RoleManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_2__["SetTitleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"])); };
RoleManagementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RoleManagementComponent, selectors: [["app-role-management"]], decls: 6, vars: 0, consts: [[1, "row"], [1, "col", "mt-2", "mb-2"], ["_ngcontent-hqi-c400", "", "type", "button", 1, "btn", "btn-outline-primary", "mt-1", "mr-2", "float-right", 3, "click"], ["_ngcontent-hqi-c400", "", 1, "fas", "fa-plus"]], template: function RoleManagementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoleManagementComponent_Template_button_click_2_listener() { return ctx.openDialog(""); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Add Role ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-checkbox");
    } }, directives: [_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_4__["CheckboxComponent"]], styles: ["label[_ngcontent-%COMP%]:not(.form-check-label):not(.custom-file-label) {\n  font-weight: 500;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  border: 2px solid dodgerblue;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 500;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n}\n\n.form-control[_ngcontent-%COMP%]:hover {\n  border-color: rgba(46, 105, 255, 0.5);\n  box-shadow: 0 0 0 2px rgba(46, 105, 255, 0.25);\n}\n\n.pt-3[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 32px;\n  font-weight: 700;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n}\n\n.container[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.form-Label[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 500;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n  width: 100%;\n  margin-left: 2px;\n  margin-bottom: 14px;\n}\n\n.sign[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid rgba(46, 105, 255, 0.5);\n  width: 500px;\n  border-radius: 5px;\n}\n\n.sign[_ngcontent-%COMP%]:hover {\n  border: 1px solid;\n  border-color: #2e69ff40;\n  box-shadow: 0 0 0 3px rgba(46, 105, 255, 0.25);\n}\n\n.imgStyle[_ngcontent-%COMP%] {\n  border: 2px solid #2e69ff40;\n  border-radius: 10px;\n}\n\n.dialog-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHJvbGUtbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBQ0U7RUFDRSw0QkFBQTtBQUVKOztBQUFFO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBR0o7O0FBREU7RUFDRSxxQ0FBQTtFQUNBLDhDQUFBO0FBSUo7O0FBRkU7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFLSjs7QUFIRTtFQUNFLHVCQUFBO0FBTUo7O0FBSkU7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQU9KOztBQUxFO0VBQ0UsYUFBQTtFQUNBLHlDQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBUUo7O0FBTkU7RUFDRSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsOENBQUE7QUFTSjs7QUFORTtFQUNFLDJCQUFBO0VBQ0EsbUJBQUE7QUFTSjs7QUFQRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBVUoiLCJmaWxlIjoicm9sZS1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWw6bm90KC5mb3JtLWNoZWNrLWxhYmVsKTpub3QoLmN1c3RvbS1maWxlLWxhYmVsKSB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuICBpbnB1dDpmb2N1cyB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBkb2RnZXJibHVlO1xyXG4gIH1cclxuICBsYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICAgIGZvbnQtZmFtaWx5OiBJbnRlciwgc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgLmZvcm0tY29udHJvbDpob3ZlciB7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoNDYsIDEwNSwgMjU1LCAwLjUpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHJnYig0NiAxMDUgMjU1IC8gMjUlKTtcclxuICB9XHJcbiAgLnB0LTMge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgICBmb250LWZhbWlseTogSW50ZXIsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIC5jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC5mb3JtLUxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgZm9udC1mYW1pbHk6IEludGVyLCBzYW5zLXNlcmlmO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTRweDtcclxuICB9XHJcbiAgLnNpZ24ge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNDYsIDEwNSwgMjU1LCAwLjUpO1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIH1cclxuICAuc2lnbjpob3ZlciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogIzJlNjlmZjQwO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYig0NiwgMTA1LCAyNTUsIDAuMjUpO1xyXG4gIH1cclxuICBcclxuICAuaW1nU3R5bGUge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzJlNjlmZjQwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcbiAgLmRpYWxvZy10aXRsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoleManagementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-role-management',
                templateUrl: './role-management.component.html',
                styleUrls: ['./role-management.component.scss']
            }]
    }], function () { return [{ type: src_app_utils_services_set_title_service__WEBPACK_IMPORTED_MODULE_2__["SetTitleService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "Gwzy":
/*!*******************************************************************!*\
  !*** ./src/app/role-management/role-management-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: RoleManagementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleManagementRoutingModule", function() { return RoleManagementRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _role_management_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./role-management.component */ "9NQz");





const routes = [
    { path: '', component: _role_management_component__WEBPACK_IMPORTED_MODULE_2__["RoleManagementComponent"] }
];
class RoleManagementRoutingModule {
}
RoleManagementRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RoleManagementRoutingModule });
RoleManagementRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RoleManagementRoutingModule_Factory(t) { return new (t || RoleManagementRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RoleManagementRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoleManagementRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "LefN":
/*!***********************************************************!*\
  !*** ./src/app/utils/services/role-management.service.ts ***!
  \***********************************************************/
/*! exports provided: RoleManagementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleManagementService", function() { return RoleManagementService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");




class RoleManagementService {
    constructor(https) {
        this.https = https;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
    }
    ///role management///
    addRole(data) {
        return this.https.post(this.apiUrl + 'role/add', data);
    }
    // addMultipleRisk(data) {
    //   return this.https.post(this.apiUrl + 'risk/add/multiple', data);
    // }
    updateRole(id, data) {
        return this.https.put(this.apiUrl + 'role/update/' + id, data);
    }
    // deleteRisk(id) {
    //   return this.https.delete(this.apiUrl + 'risk/delete/' + id)
    // }
    getAllRole() {
        return this.https.get(this.apiUrl + 'role/getAll');
    }
}
RoleManagementService.ɵfac = function RoleManagementService_Factory(t) { return new (t || RoleManagementService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
RoleManagementService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RoleManagementService, factory: RoleManagementService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoleManagementService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "acSN":
/*!****************************************************************!*\
  !*** ./src/app/role-management/add-role/add-role.component.ts ***!
  \****************************************************************/
/*! exports provided: AddRoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRoleComponent", function() { return AddRoleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _utils_services_role_management_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/services/role-management.service */ "LefN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");









function AddRoleComponent_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Add Role Management");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddRoleComponent_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Update Role Management");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddRoleComponent_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddRoleComponent_button_20_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.addRole.invalid);
} }
function AddRoleComponent_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddRoleComponent_button_21_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Update ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r3.addRole.invalid);
} }
class AddRoleComponent {
    constructor(fb, roleService, dialogRef, data) {
        this.fb = fb;
        this.roleService = roleService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.addRole = this.fb.group({
            role: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        console.log('', data);
    }
    ngOnInit() {
        if (this.data.action === "edit") {
            this.addRole.get("role").patchValue(this.data.role.role);
        }
    }
    onSubmit() {
        if (this.data.action === "new") {
            console.log(this.addRole.value);
            this.roleService.addRole(this.addRole.value).subscribe((res) => {
                console.log("res", res);
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Added Successfully');
                this.dialogRef.close();
            });
        }
        if (this.data.action === "edit") {
            this.roleService.updateRole(this.data.role._id, this.addRole.value).subscribe((res) => {
                console.log("res", res);
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Update Successfully');
                this.dialogRef.close("true");
            });
        }
        // Swal.fire('Added Successfully')
        // this.dialogRef.close();
    }
    close() {
        this.dialogRef.close();
    }
}
AddRoleComponent.ɵfac = function AddRoleComponent_Factory(t) { return new (t || AddRoleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utils_services_role_management_service__WEBPACK_IMPORTED_MODULE_4__["RoleManagementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
AddRoleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddRoleComponent, selectors: [["app-add-role"]], decls: 22, vars: 5, consts: [[3, "formGroup"], ["mat-dialog-title", "", 1, "dialog-title"], [1, "text-center", "pt-2"], ["style", "text-align: center", 4, "ngIf"], ["type", "button", "aria-label", "Close", 1, "close", 2, "font-size", "30px", 3, "click"], ["aria-hidden", "true"], [1, "row"], [1, "col-12", "mt-2", "mb-2"], ["for", "exampleFormControlInput1", 1, "form-Label"], ["type", "text", "formControlName", "role", "id", "heading", 1, "form-control", 2, "height", "50px"], [1, "col", "d-flex", "justify-content-center"], ["class", "btn btn-primary ", 3, "disabled", "click", 4, "ngIf"], [2, "text-align", "center"], [1, "btn", "btn-primary", 3, "disabled", "click"]], template: function AddRoleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AddRoleComponent_p_4_Template, 2, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AddRoleComponent_p_5_Template, 2, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddRoleComponent_Template_button_click_6_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AddRoleComponent_button_20_Template, 2, 1, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AddRoleComponent_button_21_Template, 2, 1, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addRole);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.action === "new");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.action === "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.action === "new");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.action === "edit");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]], styles: [".dialog-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhZGQtcm9sZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQ0oiLCJmaWxlIjoiYWRkLXJvbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlhbG9nLXRpdGxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddRoleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-role',
                templateUrl: './add-role.component.html',
                styleUrls: ['./add-role.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _utils_services_role_management_service__WEBPACK_IMPORTED_MODULE_4__["RoleManagementService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "rh9J":
/*!****************************************************************!*\
  !*** ./src/app/role-management/checkbox/checkbox.component.ts ***!
  \****************************************************************/
/*! exports provided: CheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxComponent", function() { return CheckboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sort */ "LUZP");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "OaSA");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _add_role_add_role_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../add-role/add-role.component */ "acSN");
/* harmony import */ var _utils_services_role_management_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/services/role-management.service */ "LefN");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ "ZFy/");












const _c0 = function () { return { "display": "none" }; };
function CheckboxComponent_ng_container_8_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Role ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("rowspan", 2);
} }
function CheckboxComponent_ng_container_8_td_4_Template(rf, ctx) { if (rf & 1) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckboxComponent_ng_container_8_td_4_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91); const element_r89 = ctx.$implicit; const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r90.openDialog(element_r89); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r89 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", element_r89.role, " ");
} }
function CheckboxComponent_ng_container_8_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Access ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckboxComponent_ng_container_8_td_7_Template(rf, ctx) { if (rf & 1) {
    const _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckboxComponent_ng_container_8_td_7_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r95); const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r94.doCheckboxCheck($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r93 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", "dashboard_Access_" + (ctx_r4.roleArr[i_r93] == null ? null : ctx_r4.roleArr[i_r93].role));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true);
} }
function CheckboxComponent_ng_container_8_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckboxComponent_ng_container_8_td_10_Template(rf, ctx) { if (rf & 1) {
    const _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckboxComponent_ng_container_8_td_10_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99); const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r98.doCheckboxCheck($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r97 = ctx.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", "dashboard_View_" + (ctx_r6.roleArr[i_r97] == null ? null : ctx_r6.roleArr[i_r97].role));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true);
} }
function CheckboxComponent_ng_container_8_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Access ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckboxComponent_ng_container_8_td_13_Template(rf, ctx) { if (rf & 1) {
    const _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckboxComponent_ng_container_8_td_13_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r103); const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r102.doCheckboxCheck($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r101 = ctx.index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", "dynamicForm_Access_" + (ctx_r8.roleArr[i_r101] == null ? null : ctx_r8.roleArr[i_r101].role));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true);
} }
function CheckboxComponent_ng_container_8_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckboxComponent_ng_container_8_td_16_Template(rf, ctx) { if (rf & 1) {
    const _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckboxComponent_ng_container_8_td_16_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r107); const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r106.doCheckboxCheck($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r105 = ctx.index;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", "dynamicForm_View_" + (ctx_r10.roleArr[i_r105] == null ? null : ctx_r10.roleArr[i_r105].role));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true);
} }
function CheckboxComponent_ng_container_8_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckboxComponent_ng_container_8_td_19_Template(rf, ctx) { if (rf & 1) {
    const _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckboxComponent_ng_container_8_td_19_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r110.doCheckboxCheck($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r109 = ctx.index;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", "dynamicForm_Delete_" + (ctx_r12.roleArr[i_r109] == null ? null : ctx_r12.roleArr[i_r109].role));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true);
} }
function CheckboxComponent_ng_container_8_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Update ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckboxComponent_ng_container_8_td_22_Template(rf, ctx) { if (rf & 1) {
    const _r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckboxComponent_ng_container_8_td_22_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r115); const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r114.doCheckboxCheck($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r113 = ctx.index;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", "dynamicForm_Update_" + (ctx_r14.roleArr[i_r113] == null ? null : ctx_r14.roleArr[i_r113].role));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true);
} }
function CheckboxComponent_ng_container_8_th_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckboxComponent_ng_container_8_td_25_Template(rf, ctx) { if (rf & 1) {
    const _r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckboxComponent_ng_container_8_td_25_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r119); const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r118.doCheckboxCheck($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r117 = ctx.index;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", "dynamicForm_Add_" + (ctx_r16.roleArr[i_r117] == null ? null : ctx_r16.roleArr[i_r117].role));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true);
} }
function CheckboxComponent_ng_container_8_th_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Access ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckboxComponent_ng_container_8_td_28_Template(rf, ctx) { if (rf & 1) {
    const _r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckboxComponent_ng_container_8_td_28_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r123); const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r122.doCheckboxCheck($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r121 = ctx.index;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", "Logicalforms_Access_" + (ctx_r18.roleArr[i_r121] == null ? null : ctx_r18.roleArr[i_r121].role));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true);
} }
function CheckboxComponent_ng_container_8_th_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckboxComponent_ng_container_8_td_31_Template(rf, ctx) { if (rf & 1) {
    const _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckboxComponent_ng_container_8_td_31_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r127); const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r126.doCheckboxCheck($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r125 = ctx.index;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", "Logicalforms_View_" + (ctx_r20.roleArr[i_r125] == null ? null : ctx_r20.roleArr[i_r125].role));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true);
} }
function CheckboxComponent_ng_container_8_th_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckboxComponent_ng_container_8_td_34_Template(rf, ctx) { if (rf & 1) {
    const _r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckboxComponent_ng_container_8_td_34_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r131); const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r130.doCheckboxCheck($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r129 = ctx.index;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", "Logicalforms_Delete_" + (ctx_r22.roleArr[i_r129] == null ? null : ctx_r22.roleArr[i_r129].role));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true);
} }
function CheckboxComponent_ng_container_8_th_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Update ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckboxComponent_ng_container_8_td_37_Template(rf, ctx) { if (rf & 1) {
    const _r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckboxComponent_ng_container_8_td_37_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r135); const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r134.doCheckboxCheck($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r133 = ctx.index;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", "Logicalforms_Update_" + (ctx_r24.roleArr[i_r133] == null ? null : ctx_r24.roleArr[i_r133].role));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true);
} }
function CheckboxComponent_ng_container_8_th_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckboxComponent_ng_container_8_td_40_Template(rf, ctx) { if (rf & 1) {
    const _r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckboxComponent_ng_container_8_td_40_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r139); const ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r138.doCheckboxCheck($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r137 = ctx.index;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", "Logicalforms_Add_" + (ctx_r26.roleArr[i_r137] == null ? null : ctx_r26.roleArr[i_r137].role));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true);
} }
function CheckboxComponent_ng_container_8_th_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Access ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckboxComponent_ng_container_8_td_43_Template(rf, ctx) { if (rf & 1) {
    const _r143 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckboxComponent_ng_container_8_td_43_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r143); const ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r142.doCheckboxCheck($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r141 = ctx.index;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", "FormConfigure_Access_" + (ctx_r28.roleArr[i_r141] == null ? null : ctx_r28.roleArr[i_r141].role));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true);
} }
function CheckboxComponent_ng_container_8_th_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckboxComponent_ng_container_8_td_46_Template(rf, ctx) { if (rf & 1) {
    const _r147 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckboxComponent_ng_container_8_td_46_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r147); const ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r146.doCheckboxCheck($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r145 = ctx.index;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", "FormConfigure_View_" + (ctx_r30.roleArr[i_r145] == null ? null : ctx_r30.roleArr[i_r145].role));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true);
} }
function CheckboxComponent_ng_container_8_th_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckboxComponent_ng_container_8_td_49_Template(rf, ctx) { if (rf & 1) {
    const _r151 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckboxComponent_ng_container_8_td_49_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r151); const ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r150.doCheckboxCheck($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r149 = ctx.index;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", "FormConfigure_Delete_" + (ctx_r32.roleArr[i_r149] == null ? null : ctx_r32.roleArr[i_r149].role));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true);
} }
function CheckboxComponent_ng_container_8_th_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Update ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckboxComponent_ng_container_8_td_52_Template(rf, ctx) { if (rf & 1) {
    const _r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckboxComponent_ng_container_8_td_52_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r155); const ctx_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r154.doCheckboxCheck($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r153 = ctx.index;
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", "FormConfigure_Update_" + (ctx_r34.roleArr[i_r153] == null ? null : ctx_r34.roleArr[i_r153].role));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true);
} }
function CheckboxComponent_ng_container_8_th_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckboxComponent_ng_container_8_td_55_Template(rf, ctx) { if (rf & 1) {
    const _r159 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckboxComponent_ng_container_8_td_55_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r159); const ctx_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r158.doCheckboxCheck($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r157 = ctx.index;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", "FormConfigure_Add_" + (ctx_r36.roleArr[i_r157] == null ? null : ctx_r36.roleArr[i_r157].role));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true);
} }
function CheckboxComponent_ng_container_8_th_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Access ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckboxComponent_ng_container_8_td_58_Template(rf, ctx) { if (rf & 1) {
    const _r163 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckboxComponent_ng_container_8_td_58_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r163); const ctx_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r162.doCheckboxCheck($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r161 = ctx.index;
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", "SubscriptionRates_Access_" + (ctx_r38.roleArr[i_r161] == null ? null : ctx_r38.roleArr[i_r161].role));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true);
} }
function CheckboxComponent_ng_container_8_th_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckboxComponent_ng_container_8_td_61_Template(rf, ctx) { if (rf & 1) {
    const _r167 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckboxComponent_ng_container_8_td_61_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r167); const ctx_r166 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r166.doCheckboxCheck($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r165 = ctx.index;
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", "SubscriptionRates_View_" + (ctx_r40.roleArr[i_r165] == null ? null : ctx_r40.roleArr[i_r165].role));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true);
} }
function CheckboxComponent_ng_container_8_th_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckboxComponent_ng_container_8_td_64_Template(rf, ctx) { if (rf & 1) {
    const _r171 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckboxComponent_ng_container_8_td_64_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r171); const ctx_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r170.doCheckboxCheck($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r169 = ctx.index;
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", "SubscriptionRates_Delete_" + (ctx_r42.roleArr[i_r169] == null ? null : ctx_r42.roleArr[i_r169].role));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true);
} }
function CheckboxComponent_ng_container_8_th_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Update ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckboxComponent_ng_container_8_td_67_Template(rf, ctx) { if (rf & 1) {
    const _r175 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckboxComponent_ng_container_8_td_67_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r175); const ctx_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r174.doCheckboxCheck($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r173 = ctx.index;
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", "SubscriptionRates_Update_" + (ctx_r44.roleArr[i_r173] == null ? null : ctx_r44.roleArr[i_r173].role));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true);
} }
function CheckboxComponent_ng_container_8_th_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckboxComponent_ng_container_8_td_70_Template(rf, ctx) { if (rf & 1) {
    const _r179 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckboxComponent_ng_container_8_td_70_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r179); const ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r178.doCheckboxCheck($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r177 = ctx.index;
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", "SubscriptionRates_Add_" + (ctx_r46.roleArr[i_r177] == null ? null : ctx_r46.roleArr[i_r177].role));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true);
} }
function CheckboxComponent_ng_container_8_th_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Access ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckboxComponent_ng_container_8_td_73_Template(rf, ctx) { if (rf & 1) {
    const _r183 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckboxComponent_ng_container_8_td_73_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r183); const ctx_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r182.doCheckboxCheck($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r181 = ctx.index;
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", "LogicalFormData_Access_" + (ctx_r48.roleArr[i_r181] == null ? null : ctx_r48.roleArr[i_r181].role));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true);
} }
function CheckboxComponent_ng_container_8_th_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckboxComponent_ng_container_8_td_76_Template(rf, ctx) { if (rf & 1) {
    const _r187 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckboxComponent_ng_container_8_td_76_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r187); const ctx_r186 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r186.doCheckboxCheck($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r185 = ctx.index;
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", "LogicalFormData_View_" + (ctx_r50.roleArr[i_r185] == null ? null : ctx_r50.roleArr[i_r185].role));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true);
} }
function CheckboxComponent_ng_container_8_th_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckboxComponent_ng_container_8_td_79_Template(rf, ctx) { if (rf & 1) {
    const _r191 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckboxComponent_ng_container_8_td_79_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r191); const ctx_r190 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r190.doCheckboxCheck($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r189 = ctx.index;
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", "LogicalFormData_Delete_" + (ctx_r52.roleArr[i_r189] == null ? null : ctx_r52.roleArr[i_r189].role));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true);
} }
function CheckboxComponent_ng_container_8_th_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Update ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckboxComponent_ng_container_8_td_82_Template(rf, ctx) { if (rf & 1) {
    const _r195 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckboxComponent_ng_container_8_td_82_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r195); const ctx_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r194.doCheckboxCheck($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r193 = ctx.index;
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", "LogicalFormData_Update_" + (ctx_r54.roleArr[i_r193] == null ? null : ctx_r54.roleArr[i_r193].role));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true);
} }
function CheckboxComponent_ng_container_8_th_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckboxComponent_ng_container_8_td_85_Template(rf, ctx) { if (rf & 1) {
    const _r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckboxComponent_ng_container_8_td_85_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r199); const ctx_r198 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r198.doCheckboxCheck($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r197 = ctx.index;
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", "LogicalFormData_Add_" + (ctx_r56.roleArr[i_r197] == null ? null : ctx_r56.roleArr[i_r197].role));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true);
} }
function CheckboxComponent_ng_container_8_th_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Access ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckboxComponent_ng_container_8_td_88_Template(rf, ctx) { if (rf & 1) {
    const _r203 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckboxComponent_ng_container_8_td_88_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r203); const ctx_r202 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r202.doCheckboxCheck($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r201 = ctx.index;
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", "CMS_Access_" + (ctx_r58.roleArr[i_r201] == null ? null : ctx_r58.roleArr[i_r201].role));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true);
} }
function CheckboxComponent_ng_container_8_th_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckboxComponent_ng_container_8_td_91_Template(rf, ctx) { if (rf & 1) {
    const _r207 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckboxComponent_ng_container_8_td_91_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r207); const ctx_r206 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r206.doCheckboxCheck($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r205 = ctx.index;
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", "CMS_View_" + (ctx_r60.roleArr[i_r205] == null ? null : ctx_r60.roleArr[i_r205].role));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true);
} }
function CheckboxComponent_ng_container_8_th_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckboxComponent_ng_container_8_td_94_Template(rf, ctx) { if (rf & 1) {
    const _r211 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckboxComponent_ng_container_8_td_94_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r211); const ctx_r210 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r210.doCheckboxCheck($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r209 = ctx.index;
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", "CMS_Delete_" + (ctx_r62.roleArr[i_r209] == null ? null : ctx_r62.roleArr[i_r209].role));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true);
} }
function CheckboxComponent_ng_container_8_th_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Update ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckboxComponent_ng_container_8_td_97_Template(rf, ctx) { if (rf & 1) {
    const _r215 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckboxComponent_ng_container_8_td_97_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r215); const ctx_r214 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r214.doCheckboxCheck($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r213 = ctx.index;
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", "CMS_Update_" + (ctx_r64.roleArr[i_r213] == null ? null : ctx_r64.roleArr[i_r213].role));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true);
} }
function CheckboxComponent_ng_container_8_th_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckboxComponent_ng_container_8_td_100_Template(rf, ctx) { if (rf & 1) {
    const _r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckboxComponent_ng_container_8_td_100_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r219); const ctx_r218 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r218.doCheckboxCheck($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r217 = ctx.index;
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", "CMS_Add_" + (ctx_r66.roleArr[i_r217] == null ? null : ctx_r66.roleArr[i_r217].role));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true);
} }
function CheckboxComponent_ng_container_8_th_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Access ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckboxComponent_ng_container_8_td_103_Template(rf, ctx) { if (rf & 1) {
    const _r223 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckboxComponent_ng_container_8_td_103_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r223); const ctx_r222 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r222.doCheckboxCheck($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r221 = ctx.index;
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", "StateRelation_Access_" + (ctx_r68.roleArr[i_r221] == null ? null : ctx_r68.roleArr[i_r221].role));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true);
} }
function CheckboxComponent_ng_container_8_th_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckboxComponent_ng_container_8_td_106_Template(rf, ctx) { if (rf & 1) {
    const _r227 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckboxComponent_ng_container_8_td_106_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r227); const ctx_r226 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r226.doCheckboxCheck($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r225 = ctx.index;
    const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", "StateRelation_View_" + (ctx_r70.roleArr[i_r225] == null ? null : ctx_r70.roleArr[i_r225].role));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true);
} }
function CheckboxComponent_ng_container_8_th_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckboxComponent_ng_container_8_td_109_Template(rf, ctx) { if (rf & 1) {
    const _r231 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckboxComponent_ng_container_8_td_109_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r231); const ctx_r230 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r230.doCheckboxCheck($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r229 = ctx.index;
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", "StateRelation_Delete_" + (ctx_r72.roleArr[i_r229] == null ? null : ctx_r72.roleArr[i_r229].role));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true);
} }
function CheckboxComponent_ng_container_8_th_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Update ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckboxComponent_ng_container_8_td_112_Template(rf, ctx) { if (rf & 1) {
    const _r235 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckboxComponent_ng_container_8_td_112_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r235); const ctx_r234 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r234.doCheckboxCheck($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r233 = ctx.index;
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", "StateRelation_Update_" + (ctx_r74.roleArr[i_r233] == null ? null : ctx_r74.roleArr[i_r233].role));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true);
} }
function CheckboxComponent_ng_container_8_th_114_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckboxComponent_ng_container_8_td_115_Template(rf, ctx) { if (rf & 1) {
    const _r239 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckboxComponent_ng_container_8_td_115_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r239); const ctx_r238 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r238.doCheckboxCheck($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r237 = ctx.index;
    const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", "StateRelation_Add_" + (ctx_r76.roleArr[i_r237] == null ? null : ctx_r76.roleArr[i_r237].role));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true);
} }
function CheckboxComponent_ng_container_8_th_117_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Role ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("rowspan", 2);
} }
function CheckboxComponent_ng_container_8_th_119_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Dashboard ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("colspan", 2);
} }
function CheckboxComponent_ng_container_8_th_121_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Dynamic Form ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("colspan", 5);
} }
function CheckboxComponent_ng_container_8_th_123_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Logical Forms ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("colspan", 5);
} }
function CheckboxComponent_ng_container_8_th_125_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Form Configure ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("colspan", 5);
} }
function CheckboxComponent_ng_container_8_th_127_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Subscription Rates ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("colspan", 5);
} }
function CheckboxComponent_ng_container_8_th_129_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Logical Form Data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("colspan", 5);
} }
function CheckboxComponent_ng_container_8_th_131_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " CMS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("colspan", 5);
} }
function CheckboxComponent_ng_container_8_th_133_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " State Relation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("colspan", 5);
} }
function CheckboxComponent_ng_container_8_tr_134_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 72);
} }
function CheckboxComponent_ng_container_8_tr_135_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 72);
} }
function CheckboxComponent_ng_container_8_tr_136_Template(rf, ctx) { if (rf & 1) {
    const _r242 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckboxComponent_ng_container_8_tr_136_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r242); const row_r240 = ctx.$implicit; const ctx_r241 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r241.getdata(row_r240); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function () { return ["roleheader", "dashboard", "dynamicForm", "logicalForms", "formConfigure", "subscriptionRates", "logicalFormData", "cms", "stateRelation"]; };
function CheckboxComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CheckboxComponent_ng_container_8_th_3_Template, 2, 3, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CheckboxComponent_ng_container_8_td_4_Template, 5, 1, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CheckboxComponent_ng_container_8_th_6_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CheckboxComponent_ng_container_8_td_7_Template, 2, 2, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CheckboxComponent_ng_container_8_th_9_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CheckboxComponent_ng_container_8_td_10_Template, 2, 2, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CheckboxComponent_ng_container_8_th_12_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CheckboxComponent_ng_container_8_td_13_Template, 2, 2, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CheckboxComponent_ng_container_8_th_15_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CheckboxComponent_ng_container_8_td_16_Template, 2, 2, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CheckboxComponent_ng_container_8_th_18_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CheckboxComponent_ng_container_8_td_19_Template, 2, 2, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](20, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CheckboxComponent_ng_container_8_th_21_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CheckboxComponent_ng_container_8_td_22_Template, 2, 2, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](23, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, CheckboxComponent_ng_container_8_th_24_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, CheckboxComponent_ng_container_8_td_25_Template, 2, 2, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](26, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, CheckboxComponent_ng_container_8_th_27_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, CheckboxComponent_ng_container_8_td_28_Template, 2, 2, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](29, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, CheckboxComponent_ng_container_8_th_30_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, CheckboxComponent_ng_container_8_td_31_Template, 2, 2, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](32, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, CheckboxComponent_ng_container_8_th_33_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, CheckboxComponent_ng_container_8_td_34_Template, 2, 2, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](35, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, CheckboxComponent_ng_container_8_th_36_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, CheckboxComponent_ng_container_8_td_37_Template, 2, 2, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](38, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, CheckboxComponent_ng_container_8_th_39_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, CheckboxComponent_ng_container_8_td_40_Template, 2, 2, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](41, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, CheckboxComponent_ng_container_8_th_42_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, CheckboxComponent_ng_container_8_td_43_Template, 2, 2, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](44, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, CheckboxComponent_ng_container_8_th_45_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, CheckboxComponent_ng_container_8_td_46_Template, 2, 2, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](47, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, CheckboxComponent_ng_container_8_th_48_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, CheckboxComponent_ng_container_8_td_49_Template, 2, 2, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](50, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, CheckboxComponent_ng_container_8_th_51_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, CheckboxComponent_ng_container_8_td_52_Template, 2, 2, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](53, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, CheckboxComponent_ng_container_8_th_54_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, CheckboxComponent_ng_container_8_td_55_Template, 2, 2, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](56, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, CheckboxComponent_ng_container_8_th_57_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, CheckboxComponent_ng_container_8_td_58_Template, 2, 2, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](59, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, CheckboxComponent_ng_container_8_th_60_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, CheckboxComponent_ng_container_8_td_61_Template, 2, 2, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](62, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, CheckboxComponent_ng_container_8_th_63_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, CheckboxComponent_ng_container_8_td_64_Template, 2, 2, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](65, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, CheckboxComponent_ng_container_8_th_66_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, CheckboxComponent_ng_container_8_td_67_Template, 2, 2, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](68, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, CheckboxComponent_ng_container_8_th_69_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, CheckboxComponent_ng_container_8_td_70_Template, 2, 2, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](71, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, CheckboxComponent_ng_container_8_th_72_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, CheckboxComponent_ng_container_8_td_73_Template, 2, 2, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](74, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, CheckboxComponent_ng_container_8_th_75_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, CheckboxComponent_ng_container_8_td_76_Template, 2, 2, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](77, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, CheckboxComponent_ng_container_8_th_78_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, CheckboxComponent_ng_container_8_td_79_Template, 2, 2, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](80, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, CheckboxComponent_ng_container_8_th_81_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, CheckboxComponent_ng_container_8_td_82_Template, 2, 2, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](83, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, CheckboxComponent_ng_container_8_th_84_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, CheckboxComponent_ng_container_8_td_85_Template, 2, 2, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](86, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, CheckboxComponent_ng_container_8_th_87_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, CheckboxComponent_ng_container_8_td_88_Template, 2, 2, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](89, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, CheckboxComponent_ng_container_8_th_90_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, CheckboxComponent_ng_container_8_td_91_Template, 2, 2, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](92, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, CheckboxComponent_ng_container_8_th_93_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](94, CheckboxComponent_ng_container_8_td_94_Template, 2, 2, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](95, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](96, CheckboxComponent_ng_container_8_th_96_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](97, CheckboxComponent_ng_container_8_td_97_Template, 2, 2, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](98, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, CheckboxComponent_ng_container_8_th_99_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](100, CheckboxComponent_ng_container_8_td_100_Template, 2, 2, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](101, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](102, CheckboxComponent_ng_container_8_th_102_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](103, CheckboxComponent_ng_container_8_td_103_Template, 2, 2, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](104, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](105, CheckboxComponent_ng_container_8_th_105_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](106, CheckboxComponent_ng_container_8_td_106_Template, 2, 2, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](107, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](108, CheckboxComponent_ng_container_8_th_108_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](109, CheckboxComponent_ng_container_8_td_109_Template, 2, 2, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](110, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](111, CheckboxComponent_ng_container_8_th_111_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](112, CheckboxComponent_ng_container_8_td_112_Template, 2, 2, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](113, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](114, CheckboxComponent_ng_container_8_th_114_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](115, CheckboxComponent_ng_container_8_td_115_Template, 2, 2, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](116, 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](117, CheckboxComponent_ng_container_8_th_117_Template, 2, 1, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](118, 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](119, CheckboxComponent_ng_container_8_th_119_Template, 2, 1, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](120, 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](121, CheckboxComponent_ng_container_8_th_121_Template, 2, 1, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](122, 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](123, CheckboxComponent_ng_container_8_th_123_Template, 2, 1, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](124, 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](125, CheckboxComponent_ng_container_8_th_125_Template, 2, 1, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](126, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](127, CheckboxComponent_ng_container_8_th_127_Template, 2, 1, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](128, 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](129, CheckboxComponent_ng_container_8_th_129_Template, 2, 1, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](130, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](131, CheckboxComponent_ng_container_8_th_131_Template, 2, 1, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](132, 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](133, CheckboxComponent_ng_container_8_th_133_Template, 2, 1, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](134, CheckboxComponent_ng_container_8_tr_134_Template, 1, 0, "tr", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](135, CheckboxComponent_ng_container_8_tr_135_Template, 1, 0, "tr", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](136, CheckboxComponent_ng_container_8_tr_136_Template, 1, 0, "tr", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r0.tempArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.displayedColumns)("matHeaderRowDefSticky", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r0.displayedColumns);
} }
class CheckboxComponent {
    constructor(fb, roleService, dialog) {
        this.fb = fb;
        this.roleService = roleService;
        this.dialog = dialog;
        this.formArr = false;
        this.formNameArr = [
            "dashboard",
            "dynamicForm",
            "Logicalforms",
            "FormConfigure",
            "SubscriptionRates",
            "LogicalFormData",
            "CMS",
            "StateRelation"
        ];
        this.displayedColumns = [
            "role",
            "dashboard.Access",
            "dashboard.View",
            "dynamicForm.Access",
            "dynamicForm.Add",
            "dynamicForm.Delete",
            "dynamicForm.Update",
            "dynamicForm.View",
            "Logicalforms.Access",
            "Logicalforms.Add",
            "Logicalforms.Delete",
            "Logicalforms.Update",
            "Logicalforms.View",
            "FormConfigure.Access",
            "FormConfigure.Add",
            "FormConfigure.Delete",
            "FormConfigure.Update",
            "FormConfigure.View",
            "SubscriptionRates.Access",
            "SubscriptionRates.Add",
            "SubscriptionRates.Delete",
            "SubscriptionRates.Update",
            "SubscriptionRates.View",
            "LogicalFormData.Access",
            "LogicalFormData.Add",
            "LogicalFormData.Delete",
            "LogicalFormData.Update",
            "LogicalFormData.View",
            "CMS.Access",
            "CMS.Add",
            "CMS.Delete",
            "CMS.Update",
            "CMS.View",
            "StateRelation.Access",
            "StateRelation.Add",
            "StateRelation.Delete",
            "StateRelation.Update",
            "StateRelation.View",
        ];
        this.getAllRole();
        this.rolemanagment = this.fb.group({});
    }
    ngOnInit() {
        this.getAllRole();
        //     of(this.data).subscribe((res:any)=>{
        //       console.log("resdata",res);
        // this.roleData=res
        //       for (let index = 0; index < this.roleData.length; index++) {
        //         for (let x = 0; x < this.roleData[index].access.length; x++) {
        //         let key=Object.keys( this.roleData[index].access[x])
        //            key.splice(0,1)
        //         key.forEach((z:any,i)=>{
        //          setTimeout(() => {
        //           console.log("this.roleData[index].access[x]",);
        //          this.rolemanagment.get(this.roleData[index].access[x].form+`_${z}_`+this.roleData[index].role).setValue(this.roleData[index]?.access[x][z])
        //           // if(this.roleData[index]?.access[x]?.Add){
        //           //   this.rolemanagment.get(this.roleData[index].access[x].form+'_Add_'+this.roleData[index].role).setValue(this.roleData[index]?.access[x]?.Add)
        //           //   this.rolemanagment.get(this.roleData[index].access[x].form+'_Delete_'+this.roleData[index].role).setValue(this.roleData[index]?.access[x]?.Delete)
        //           //   this.rolemanagment.get(this.roleData[index].access[x].form+'_Update_'+this.roleData[index].role).setValue(this.roleData[index]?.access[x]?.Update)
        //           //   this.rolemanagment.get(this.roleData[index].access[x].form+'_Access_'+this.roleData[index].role).setValue(this.roleData[index]?.access[x]?.Access)
        //           // this.rolemanagment.get(this.roleData[index].access[x].form+'_View_'+this.roleData[index].role).setValue(this.roleData[index]?.access[x]?.View)
        //           // }
        //           // this.rolemanagment.get(this.roleData[index].access[x].form+'_Access_'+this.roleData[index].role).setValue(this.roleData[index]?.access[x]?.Access)
        //           // this.rolemanagment.get(this.roleData[index].access[x].form+'_View_'+this.roleData[index].role).setValue(this.roleData[index]?.access[x]?.View)
        //          }, 2000);
        //         })
        //         }
        //       }
        //     })
    }
    doCheckboxCheck(e) {
        // this.roles[index].checked = !this.roles[index].checked;
        console.log("event", e);
        //console.log("aaaa",this.rolemanagment.get('Access').value);
    }
    applyFilter($event) {
    }
    ngOnChanges(changes) {
    }
    getdata(row) {
        console.log("row", row);
    }
    getAllRole() {
        this.roleService.getAllRole().subscribe((res) => {
            this.roleArr = res.data;
            console.log("res", this.roleArr);
            this.tempArray = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.roleArr);
            this.tempArray.sort = this.sort;
            for (let index = 0; index < this.roleArr.length; index++) {
                for (let i = 1; i < this.formNameArr.length; i++) {
                    this.rolemanagment.addControl('dashboard_Access_' + this.roleArr[index].role, new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required));
                    this.rolemanagment.addControl('dashboard_View_' + this.roleArr[index].role, new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required));
                    this.rolemanagment.addControl(this.formNameArr[i] + '_Access_' + this.roleArr[index].role, new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required));
                    this.rolemanagment.addControl(this.formNameArr[i] + '_View_' + this.roleArr[index].role, new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required));
                    this.rolemanagment.addControl(this.formNameArr[i] + '_Delete_' + this.roleArr[index].role, new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required));
                    this.rolemanagment.addControl(this.formNameArr[i] + '_Update_' + this.roleArr[index].role, new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required));
                    this.rolemanagment.addControl(this.formNameArr[i] + '_Add_' + this.roleArr[index].role, new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required));
                }
            }
            this.setValue();
        });
    }
    add2() {
        return this.rolemanagment.get("attendees");
    }
    newAction2(index) {
        return this.fb.group({
            ["dashboard_Access_" + this.roleArr[index].role]: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    onSubmit() {
        console.log("submit", this.rolemanagment.value);
        let key = Object.keys(this.rolemanagment.value);
        let checkeBox = key.map((x) => {
            let arr = x.split("_");
            let obj;
            obj = {
                form: arr[0],
                role: arr[2],
            };
            obj[arr[1]] = this.rolemanagment.get(x).value == "" ? false : this.rolemanagment.get(x).value;
            return obj;
        });
        console.log("form", checkeBox);
        let filterArr;
        let obj3;
        let access = [];
        for (let index = 0; index < this.roleArr.length; index++) {
            for (let i = 0; i < this.formNameArr.length; i++) {
                obj3 = checkeBox.filter((x) => {
                    return x.form === this.formNameArr[i] && x.role === this.roleArr[index].role;
                }).reduce(((r, c) => Object.assign(r, c)), {});
                access.push(obj3);
            }
        }
        let objArr = [];
        for (let index = 0; index < this.roleArr.length; index++) {
            let arr = [];
            arr = access.filter((x => x.role === this.roleArr[index].role));
            arr.forEach((x => {
                delete x.role;
            }));
            let obj = {
                access: arr,
                role: this.roleArr[index].role,
                _id: this.roleArr[index]._id
            };
            objArr.push(obj);
        }
        // let obj2=filterArr.reduce(((r, c) => Object.assign(r, c)), {});
        // console.log("filterArr",obj2);
        // for (let index = 0; index < checkeBox.length; index++) {
        //   let accessObj={
        //     form:checkeBox[index].form,
        //     view:checkeBox[index].View,
        //     add:checkeBox[index].Add,
        //     update:checkeBox[index].Update,
        //     delete:checkeBox[index].Delete,
        //   }
        //   access.push(accessObj)
        // }
        console.log("acess", objArr);
    }
    setValue() {
        for (let index = 0; index < this.roleArr.length; index++) {
            for (let x = 0; x < this.roleArr[index].access.length; x++) {
                let key = Object.keys(this.roleArr[index].access[x]);
                key.splice(0, 1);
                key.forEach((z, i) => {
                    var _a;
                    console.log("this.roleArr[index].access[x]");
                    this.rolemanagment.get(this.roleArr[index].access[x].form + `_${z}_` + this.roleArr[index].role).setValue((_a = this.roleArr[index]) === null || _a === void 0 ? void 0 : _a.access[x][z]);
                    // if(this.roleArr[index]?.access[x]?.Add){
                    //   this.rolemanagment.get(this.roleArr[index].access[x].form+'_Add_'+this.roleArr[index].role).setValue(this.roleArr[index]?.access[x]?.Add)
                    //   this.rolemanagment.get(this.roleArr[index].access[x].form+'_Delete_'+this.roleArr[index].role).setValue(this.roleArr[index]?.access[x]?.Delete)
                    //   this.rolemanagment.get(this.roleArr[index].access[x].form+'_Update_'+this.roleArr[index].role).setValue(this.roleArr[index]?.access[x]?.Update)
                    //   this.rolemanagment.get(this.roleArr[index].access[x].form+'_Access_'+this.roleArr[index].role).setValue(this.roleArr[index]?.access[x]?.Access)
                    // this.rolemanagment.get(this.roleArr[index].access[x].form+'_View_'+this.roleArr[index].role).setValue(this.roleArr[index]?.access[x]?.View)
                    // }
                    // this.rolemanagment.get(this.roleArr[index].access[x].form+'_Access_'+this.roleArr[index].role).setValue(this.roleArr[index]?.access[x]?.Access)
                    // this.rolemanagment.get(this.roleArr[index].access[x].form+'_View_'+this.roleArr[index].role).setValue(this.roleArr[index]?.access[x]?.View)
                });
            }
        }
        this.formArr = true;
    }
    openDialog(role) {
        let dialogRef = this.dialog.open(_add_role_add_role_component__WEBPACK_IMPORTED_MODULE_4__["AddRoleComponent"], {
            height: '50%',
            width: '500px',
            data: {
                action: "edit",
                role: role,
            },
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result === 'true') {
                this.ngOnInit();
            }
            console.log("AddRoleComponent -> openDialog -> result", result);
            console.log("The dialog was closed");
        });
    }
}
CheckboxComponent.ɵfac = function CheckboxComponent_Factory(t) { return new (t || CheckboxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utils_services_role_management_service__WEBPACK_IMPORTED_MODULE_5__["RoleManagementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"])); };
CheckboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckboxComponent, selectors: [["app-checkbox"]], viewQuery: function CheckboxComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, inputs: { Arry: "Arry" }, outputs: { Arry1: "Arry1" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 9, vars: 2, consts: [[1, "row"], [1, "col", "ml-2", "pt-3"], [1, "col", "mt-2", "mb-2"], ["_ngcontent-hqi-c400", "", "type", "button", 1, "btn", "btn-primary", "mt-1", "mr-5", "float-md-right", 3, "click"], [1, "example-container", "mat-elevation-z8", "overflow-auto", 3, "formGroup"], [4, "ngIf"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "role", "sticky", ""], ["mat-header-cell", "", 3, "ngStyle", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "dashboard.Access"], ["mat-header-cell", "", "class", "p-2", 4, "matHeaderCellDef"], ["matColumnDef", "dashboard.View"], ["mat-cell", "", "class", "similar-cell-width", 4, "matCellDef"], ["matColumnDef", "dynamicForm.Access"], ["matColumnDef", "dynamicForm.View"], ["matColumnDef", "dynamicForm.Delete"], ["matColumnDef", "dynamicForm.Update"], ["matColumnDef", "dynamicForm.Add"], ["matColumnDef", "Logicalforms.Access"], ["matColumnDef", "Logicalforms.View"], ["matColumnDef", "Logicalforms.Delete"], ["matColumnDef", "Logicalforms.Update"], ["matColumnDef", "Logicalforms.Add"], ["matColumnDef", "FormConfigure.Access"], ["matColumnDef", "FormConfigure.View"], ["matColumnDef", "FormConfigure.Delete"], ["matColumnDef", "FormConfigure.Update"], ["matColumnDef", "FormConfigure.Add"], ["matColumnDef", "SubscriptionRates.Access"], ["matColumnDef", "SubscriptionRates.View"], ["matColumnDef", "SubscriptionRates.Delete"], ["matColumnDef", "SubscriptionRates.Update"], ["matColumnDef", "SubscriptionRates.Add"], ["matColumnDef", "LogicalFormData.Access"], ["matColumnDef", "LogicalFormData.View"], ["matColumnDef", "LogicalFormData.Delete"], ["matColumnDef", "LogicalFormData.Update"], ["matColumnDef", "LogicalFormData.Add"], ["matColumnDef", "CMS.Access"], ["matColumnDef", "CMS.View"], ["matColumnDef", "CMS.Delete"], ["matColumnDef", "CMS.Update"], ["matColumnDef", "CMS.Add"], ["matColumnDef", "StateRelation.Access"], ["matColumnDef", "StateRelation.View"], ["matColumnDef", "StateRelation.Delete"], ["matColumnDef", "StateRelation.Update"], ["matColumnDef", "StateRelation.Add"], ["matColumnDef", "roleheader", "sticky", ""], ["mat-header-cell", "", "class", "roleZIndex", 4, "matHeaderCellDef"], ["matColumnDef", "dashboard"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "dynamicForm"], ["matColumnDef", "logicalForms"], ["matColumnDef", "formConfigure"], ["matColumnDef", "subscriptionRates"], ["matColumnDef", "logicalFormData"], ["matColumnDef", "cms"], ["matColumnDef", "stateRelation"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", 3, "ngStyle"], ["mat-cell", ""], [1, "d-flex"], ["matTooltip", "Edit", 1, "material-icons", "ml-2", "col", 3, "click"], ["mat-header-cell", "", 1, "p-2"], ["type", "checkbox", 3, "value", "formControlName", "change"], ["mat-cell", "", 1, "similar-cell-width"], ["mat-header-cell", "", 1, "roleZIndex"], ["mat-header-cell", ""], ["mat-header-row", ""], ["mat-row", "", 3, "click"]], template: function CheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Role Management List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckboxComponent_Template_button_click_5_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CheckboxComponent_ng_container_8_Template, 137, 6, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.rolemanagment);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formArr);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltip"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], styles: [".viewBtn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #007bff;\n  font-size: 21px !important;\n}\n\n  .mat-sort-header-container {\n  margin-left: 47% !important;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.select[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n\n.pt-3[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 32px;\n  font-weight: 700;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n}\n\nth.mat-header-cell[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%], td.mat-footer-cell[_ngcontent-%COMP%] {\n  border: solid 2px #eaeaea;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #888;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #7a7a7a;\n}\n\n.roleZIndex[_ngcontent-%COMP%] {\n  z-index: 200 !important;\n}\n\nbutton.link[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n}\n\nbutton.link[_ngcontent-%COMP%]:hover {\n  color: #007bff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjaGVja2JveC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGNBQUE7RUFDQSwwQkFBQTtBQURKOztBQUdBO0VBQ0UsMkJBQUE7QUFBRjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFDQTtFQUNJLHNCQUFBO0FBRUo7O0FBQUU7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFHSjs7QUFERTtFQUVFLHlCQUFBO0FBR0o7O0FBREE7RUFDRSxXQUFBO0FBSUY7O0FBREEsVUFBQTs7QUFDQTtFQUNFLG1CQUFBO0FBSUY7O0FBREEsV0FBQTs7QUFDQTtFQUNFLGdCQUFBO0FBSUY7O0FBREEsb0JBQUE7O0FBQ0E7RUFDRSxtQkFBQTtBQUlGOztBQUZBO0VBQ0EsdUJBQUE7QUFLQTs7QUFIQTtFQUFjLGdCQUFBO0VBQWlCLFlBQUE7QUFRL0I7O0FBTEE7RUFBb0IsY0FBQTtBQVNwQiIsImZpbGUiOiJjaGVja2JveC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLnZpZXdCdG4gaSB7XHJcbiAgICBjb2xvcjogIzAwN2JmZjtcclxuICAgIGZvbnQtc2l6ZTogMjFweCAhaW1wb3J0YW50O1xyXG59XHJcbjo6bmctZGVlcCAubWF0LXNvcnQtaGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLWxlZnQ6IDQ3JSAhaW1wb3J0YW50O1xyXG59XHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuLnNlbGVjdHtcclxuICAgIHdpZHRoOjEwMCUhaW1wb3J0YW50O1xyXG59XHJcbiAgLnB0LTMge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgICBmb250LWZhbWlseTogSW50ZXIsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIHRoLm1hdC1oZWFkZXItY2VsbCwgdGQubWF0LWNlbGwsIHRkLm1hdC1mb290ZXItY2VsbCB7XHJcblxyXG4gICAgYm9yZGVyOiBzb2xpZCAycHggI2VhZWFlYVxyXG59XHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiAxMHB4O1xyXG59XHJcblxyXG4vKiBUcmFjayAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxOyBcclxufVxyXG4gXHJcbi8qIEhhbmRsZSAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kOiAjODg4OyBcclxufVxyXG5cclxuLyogSGFuZGxlIG9uIGhvdmVyICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYigxMjIsIDEyMiwgMTIyKTsgXHJcbn1cclxuLnJvbGVaSW5kZXh7XHJcbnotaW5kZXg6IDIwMCAhaW1wb3J0YW50O1xyXG59XHJcbmJ1dHRvbi5saW5rIHsgYmFja2dyb3VuZDpub25lOyBib3JkZXI6bm9uZTtcclxuIFxyXG4gIH1cclxuYnV0dG9uLmxpbms6aG92ZXIgeyBjb2xvcjogIzAwN2JmZjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckboxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-checkbox',
                templateUrl: './checkbox.component.html',
                styleUrls: ['./checkbox.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _utils_services_role_management_service__WEBPACK_IMPORTED_MODULE_5__["RoleManagementService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }]; }, { sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"]]
        }], Arry: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], Arry1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "xd2E":
/*!***********************************************************!*\
  !*** ./src/app/role-management/role-management.module.ts ***!
  \***********************************************************/
/*! exports provided: RoleManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleManagementModule", function() { return RoleManagementModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _role_management_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./role-management-routing.module */ "Gwzy");
/* harmony import */ var _role_management_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./role-management.component */ "9NQz");
/* harmony import */ var _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkbox/checkbox.component */ "rh9J");
/* harmony import */ var _add_role_add_role_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-role/add-role.component */ "acSN");










class RoleManagementModule {
}
RoleManagementModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RoleManagementModule });
RoleManagementModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RoleManagementModule_Factory(t) { return new (t || RoleManagementModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _role_management_routing_module__WEBPACK_IMPORTED_MODULE_4__["RoleManagementRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RoleManagementModule, { declarations: [_role_management_component__WEBPACK_IMPORTED_MODULE_5__["RoleManagementComponent"], _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_6__["CheckboxComponent"], _add_role_add_role_component__WEBPACK_IMPORTED_MODULE_7__["AddRoleComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _role_management_routing_module__WEBPACK_IMPORTED_MODULE_4__["RoleManagementRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoleManagementModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_role_management_component__WEBPACK_IMPORTED_MODULE_5__["RoleManagementComponent"], _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_6__["CheckboxComponent"], _add_role_add_role_component__WEBPACK_IMPORTED_MODULE_7__["AddRoleComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _role_management_routing_module__WEBPACK_IMPORTED_MODULE_4__["RoleManagementRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=role-management-role-management-module-es2015.js.map