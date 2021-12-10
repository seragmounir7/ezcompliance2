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
/* harmony import */ var _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkbox/checkbox.component */ "rh9J");



class RoleManagementComponent {
    constructor() { }
    ngOnInit() {
    }
}
RoleManagementComponent.ɵfac = function RoleManagementComponent_Factory(t) { return new (t || RoleManagementComponent)(); };
RoleManagementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RoleManagementComponent, selectors: [["app-role-management"]], decls: 1, vars: 0, template: function RoleManagementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-checkbox");
    } }, directives: [_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_1__["CheckboxComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb2xlLW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoleManagementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-role-management',
                templateUrl: './role-management.component.html',
                styleUrls: ['./role-management.component.scss']
            }]
    }], function () { return []; }, null); })();


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


class CheckboxComponent {
    constructor() {
        this.roles = [
            { value: "SuperAdmin", name: "SuperAdmin", checked: false },
            { value: "Admin", name: "Admin", checked: false },
            { value: "Employee", name: "Employee", checked: false },
            { value: "Adminstration", name: "Adminstration", checked: false },
        ];
    }
    ngOnInit() {
    }
    doCheckboxCheck(index) {
        this.roles[index].checked = !this.roles[index].checked;
    }
}
CheckboxComponent.ɵfac = function CheckboxComponent_Factory(t) { return new (t || CheckboxComponent)(); };
CheckboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckboxComponent, selectors: [["app-checkbox"]], decls: 0, vars: 0, template: function CheckboxComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVja2JveC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckboxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-checkbox',
                templateUrl: './checkbox.component.html',
                styleUrls: ['./checkbox.component.scss']
            }]
    }], function () { return []; }, null); })();


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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RoleManagementModule, { declarations: [_role_management_component__WEBPACK_IMPORTED_MODULE_5__["RoleManagementComponent"], _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_6__["CheckboxComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _role_management_routing_module__WEBPACK_IMPORTED_MODULE_4__["RoleManagementRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoleManagementModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_role_management_component__WEBPACK_IMPORTED_MODULE_5__["RoleManagementComponent"], _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_6__["CheckboxComponent"]],
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