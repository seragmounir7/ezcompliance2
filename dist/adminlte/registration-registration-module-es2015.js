(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registration-registration-module"],{

/***/ "DNuw":
/*!*****************************************************!*\
  !*** ./src/app/registration/registration.module.ts ***!
  \*****************************************************/
/*! exports provided: RegistrationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationModule", function() { return RegistrationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _registration_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registration-routing.module */ "zF/k");
/* harmony import */ var _company_registration_company_registration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./company-registration/company-registration.component */ "cxNo");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _employee_registration_employee_registration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employee-registration/employee-registration.component */ "pYHN");







class RegistrationModule {
}
RegistrationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RegistrationModule });
RegistrationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RegistrationModule_Factory(t) { return new (t || RegistrationModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _registration_routing_module__WEBPACK_IMPORTED_MODULE_2__["RegistrationRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RegistrationModule, { declarations: [_company_registration_company_registration_component__WEBPACK_IMPORTED_MODULE_3__["CompanyRegistrationComponent"], _employee_registration_employee_registration_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeRegistrationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _registration_routing_module__WEBPACK_IMPORTED_MODULE_2__["RegistrationRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_company_registration_company_registration_component__WEBPACK_IMPORTED_MODULE_3__["CompanyRegistrationComponent"], _employee_registration_employee_registration_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeRegistrationComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _registration_routing_module__WEBPACK_IMPORTED_MODULE_2__["RegistrationRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "RS6y":
/*!*******************************************************!*\
  !*** ./src/app/utils/services/upload-file.service.ts ***!
  \*******************************************************/
/*! exports provided: UploadFileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFileService", function() { return UploadFileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class UploadFileService {
    constructor(https) {
        this.https = https;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
    }
    upload(files) {
        return this.https.post(this.apiUrl + 'upload', files).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            console.log('res.data=>', res.files);
            return res;
        }));
    }
}
UploadFileService.ɵfac = function UploadFileService_Factory(t) { return new (t || UploadFileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
UploadFileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UploadFileService, factory: UploadFileService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UploadFileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "cxNo":
/*!*************************************************************************************!*\
  !*** ./src/app/registration/company-registration/company-registration.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CompanyRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyRegistrationComponent", function() { return CompanyRegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_utils_services_company_registration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utils/services/company-registration.service */ "sBop");





class CompanyRegistrationComponent {
    constructor(fb, company) {
        this.fb = fb;
        this.company = company;
        this.companyInfo = fb.group({
            companyName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            ABN: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            ACN: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            website: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phone: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            customerType: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            businessLicense: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            streetAddress: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            suburb: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            state: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            postcode: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            sameAsStreet: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            PObox: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            postalSuburb: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            postalState: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            postalPostcode: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            file: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    ngOnInit() { }
    browser(event) {
        console.log('event=>', event);
        const files = event.target.files[0];
        console.log('event.target=>', event.target.files[0]);
        const formdata = new FormData();
        formdata.append('', files);
        console.log(files);
        this.company.upload(formdata).subscribe((res) => {
            console.log('AddProductComponent -> browser -> res', res);
            this.selectedImage = res.files;
            // this.HeaderInformation.get("uploadImage").patchValue(this.selectedImage)
            console.log('AddProductComponent -> browse -> this.selectedImage', this.selectedImage);
        });
    }
    onFormSubmit() {
        // this.companyInfo.controls["file"].setValue(this.selectedImage);
        console.log('this.companyInfo.value', this.companyInfo.value);
        this.company.addCompanyInfo(this.companyInfo.value).subscribe((data) => {
            console.log('data=>', data);
            this.browser(event);
        });
    }
}
CompanyRegistrationComponent.ɵfac = function CompanyRegistrationComponent_Factory(t) { return new (t || CompanyRegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_company_registration_service__WEBPACK_IMPORTED_MODULE_2__["CompanyRegistrationService"])); };
CompanyRegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompanyRegistrationComponent, selectors: [["app-company-registration"]], decls: 123, vars: 1, consts: [[1, "container", "card", "p-5"], [1, "px-4", "py-4", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-12"], [1, "text-center"], [1, "title"], [1, "col-md-4"], [1, "mb-3"], ["for", "exampleInputFullname", 1, "form-Label"], ["type", "text", "formControlName", "companyName", "id", "exampleInputFullname", "aria-describedby", "emailHelp", 1, "form-control", "outline"], ["for", "exampleInputSurname", 1, "form-Label"], ["type", "text", "formControlName", "ABN", "id", "exampleInputSurname", "aria-describedby", "emailHelp", 1, "form-control", "outline"], ["for", "exampleInputEmail1", 1, "form-Label"], ["type", "text", "formControlName", "ACN", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", 1, "form-control", "outline"], ["for", "exampleInputPhone", 1, "form-Label"], ["type", "email", "formControlName", "website", "id", "exampleInputPhone", "aria-describedby", "emailHelp", 1, "form-control", "outline"], ["for", "exampleInputDepartment", 1, "form-Label"], ["type", "department", "formControlName", "email", "id", "exampleInputDepartment", "aria-describedby", "emailHelp", 1, "form-control", "outline"], ["for", "exampleInputPosition", 1, "form-Label"], ["type", "text", "formControlName", "phone", "id", "exampleInputPosition", "aria-describedby", "emailHelp", 1, "form-control", "outline"], ["for", "exampleInputProjectNumber", 1, "form-Label"], ["type", "text", "formControlName", "customerType", "id", "exampleInputProjectNumber", "aria-describedby", "emailHelp", 1, "form-control", "outline"], ["type", "text", "formControlName", "businessLicense", "id", "exampleInputProjectNumber", "aria-describedby", "emailHelp", 1, "form-control", "outline"], [1, "subtitel"], ["type", "text", "formControlName", "streetAddress", "id", "exampleInputStreetAddress", "aria-describedby", "emailHelp", 1, "form-control", "outline"], ["type", "text", "formControlName", "suburb", "id", "exampleInputProjectNumber", "aria-describedby", "emailHelp", 1, "form-control", "outline"], [1, "col-md-2"], ["type", "text", "formControlName", "state", "id", "exampleInputProjectNumber", "aria-describedby", "emailHelp", 1, "form-control", "outline"], ["type", "text", "formControlName", "postcode", "id", "exampleInputProjectNumber", "aria-describedby", "emailHelp", 1, "form-control", "outline"], [1, "mt-2", "col-4"], ["type", "checkbox", "value", "no", "formControlName", "sameAsStreet", 1, "mr-1"], ["type", "email", "formControlName", "PObox", "id", "exampleInputStreetAddress", "aria-describedby", "emailHelp", 1, "form-control", "outline"], ["type", "text", "formControlName", "postalSuburb", "id", "exampleInputProjectNumber", "aria-describedby", "emailHelp", 1, "form-control", "outline"], ["type", "text", "formControlName", "postalState", "id", "exampleInputProjectNumber", "aria-describedby", "emailHelp", 1, "form-control", "outline"], ["type", "text", "formControlName", "postalPostcode", "id", "exampleInputProjectNumber", "aria-describedby", "emailHelp", 1, "form-control", "outline"], [1, "col-10", "offset-1", "col-3", "mt-1"], ["src", "../../../assets/img/whsLogo.png", "alt", "", "width", "100%"], [1, "my-3"], ["for", "formFile", 1, "form-Label"], ["formControlName", "file", "type", "file", "id", "formFile", 1, "form-control", 3, "change"], [1, "offset-10", "col-2"], ["type", "submit", 1, "btn", "btn-primary", "mb-3"]], template: function CompanyRegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CompanyRegistrationComponent_Template_form_ngSubmit_1_listener() { return ctx.onFormSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Company Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Company Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "ABN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "ACN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Customer Type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Business license ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Company Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Street Address ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Suburb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Postcode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Street Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Same as Street ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "PO Box");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " Postal Suburb ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " Postal State ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " Postal Postcode ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Logo and Print Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "p", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Upload Logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CompanyRegistrationComponent_Template_input_change_118_listener($event) { return ctx.browser($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.companyInfo);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"]], styles: ["input[type=file][_ngcontent-%COMP%] {\n  height: 10%;\n  padding: 0%;\n}\n\n.outline[_ngcontent-%COMP%]:hover {\n  border: 1px solid;\n  border-color: #2e69ff40;\n  box-shadow: 0 0 0 3px rgba(46, 105, 255, 0.25);\n}\n\n.outline[_ngcontent-%COMP%]:focus {\n  border: 1px solid;\n  border-color: #2e69ff40;\n  box-shadow: 0 0 0 3px rgba(46, 105, 255, 0.25);\n}\n\n.title[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 32px;\n  font-weight: 700;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n}\n\n.subtitel[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 16px;\n  font-weight: 600;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n}\n\n.form-Label[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 500;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n  width: 100%;\n  margin-left: 2px;\n  margin-bottom: 14px;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%] {\n  height: 15px;\n  width: 15px;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%]:hover {\n  border: 1px solid;\n  border-color: #2e69ff40;\n  box-shadow: 0 0 0 3px rgba(46, 105, 255, 0.25);\n  height: 15px;\n  width: 15px;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%]:focus {\n  border: 1px solid;\n  border-color: #2e69ff40;\n  box-shadow: 0 0 0 3px rgba(46, 105, 255, 0.25);\n  height: 15px;\n  width: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjb21wYW55LXJlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsOENBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSw4Q0FBQTtBQUNGOztBQUNBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBRUY7O0FBQUE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFHRjs7QUFEQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBSUY7O0FBREE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQUlGOztBQUZBO0VBQ0UsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLDhDQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFLRjs7QUFGQTtFQUNFLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSw4Q0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBS0YiLCJmaWxlIjoiY29tcGFueS1yZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPSdmaWxlJ10ge1xyXG4gIGhlaWdodDogMTAlO1xyXG4gIHBhZGRpbmc6IDAlO1xyXG59XHJcblxyXG4ub3V0bGluZTpob3ZlciB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMmU2OWZmNDA7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYig0NiwgMTA1LCAyNTUsIDAuMjUpO1xyXG59XHJcblxyXG4ub3V0bGluZTpmb2N1cyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMmU2OWZmNDA7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYig0NiwgMTA1LCAyNTUsIDAuMjUpO1xyXG59XHJcbi50aXRsZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgZm9udC1mYW1pbHk6IEludGVyLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5zdWJ0aXRlbCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgZm9udC1mYW1pbHk6IEludGVyLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5mb3JtLUxhYmVsIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICBmb250LWZhbWlseTogSW50ZXIsIHNhbnMtc2VyaWY7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPSdjaGVja2JveCddIHtcclxuICBoZWlnaHQ6IDE1cHg7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbn1cclxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXTpob3ZlciB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMmU2OWZmNDA7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYig0NiwgMTA1LCAyNTUsIDAuMjUpO1xyXG4gIGhlaWdodDogMTVweDtcclxuICB3aWR0aDogMTVweDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXTpmb2N1cyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMmU2OWZmNDA7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYig0NiwgMTA1LCAyNTUsIDAuMjUpO1xyXG4gIGhlaWdodDogMTVweDtcclxuICB3aWR0aDogMTVweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompanyRegistrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-company-registration',
                templateUrl: './company-registration.component.html',
                styleUrls: ['./company-registration.component.scss'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_utils_services_company_registration_service__WEBPACK_IMPORTED_MODULE_2__["CompanyRegistrationService"] }]; }, null); })();


/***/ }),

/***/ "k2mP":
/*!*****************************************************************!*\
  !*** ./src/app/utils/services/employee-registration.service.ts ***!
  \*****************************************************************/
/*! exports provided: EmployeeRegistrationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeRegistrationService", function() { return EmployeeRegistrationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class EmployeeRegistrationService {
    constructor(https) {
        this.https = https;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
    }
    addEmployeeInfo(data) {
        return this.https.post(this.apiUrl + 'employee/add', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            console.log('res.data=>', res.data);
            return res;
        }));
    }
}
EmployeeRegistrationService.ɵfac = function EmployeeRegistrationService_Factory(t) { return new (t || EmployeeRegistrationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
EmployeeRegistrationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EmployeeRegistrationService, factory: EmployeeRegistrationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeRegistrationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "pYHN":
/*!***************************************************************************************!*\
  !*** ./src/app/registration/employee-registration/employee-registration.component.ts ***!
  \***************************************************************************************/
/*! exports provided: EmployeeRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeRegistrationComponent", function() { return EmployeeRegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-signaturepad */ "HnZm");
/* harmony import */ var src_app_utils_services_employee_registration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utils/services/employee-registration.service */ "k2mP");
/* harmony import */ var _utils_services_upload_file_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../utils/services/upload-file.service */ "RS6y");








class EmployeeRegistrationComponent {
    constructor(fb, employee, upload) {
        this.fb = fb;
        this.employee = employee;
        this.upload = upload;
        this.PPERegister = false;
        this.LicenceInfo = false;
        this.profile = true;
        this.signaturePadOptions = {
            // passed through to szimek/signature_pad constructor
            minWidth: 1,
            canvasWidth: 500,
            canvasHeight: 100,
        };
        this.empDetails = this.fb.group({
            profTitie: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            profFirst: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            porfListName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            porfEmail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            porfPosition: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            porfDepartment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            porfPhone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            porfMobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            porfEmployee: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            porfManager: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            porfAdministrater: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            porfStreetAddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            porfCityTown: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            porfState: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            porfPostalCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            porfUploadImage: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            EmpFirst: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            empLastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            empRelationship: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            empEmail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            empPhone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            empMobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            LicenceName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            LicenceNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            TrainingQrginisation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            ExpiryDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            UploadLicenceArr: this.fb.array([]),
            PPESupplied: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            BrandOrType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            IssueDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            ReplacementDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Sign: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    ngOnInit() {
        this.addFiled();
    }
    drawComplete() {
        // will be notified of szimek/signature_pad's onEnd event
        console.log(this.signaturePad.toDataURL());
    }
    clear() {
        this.signaturePad.clear();
    }
    drawStart() {
        // will be notified of szimek/signature_pad's onBegin event
        console.log('begin drawing');
    }
    browser(event) {
        const files = event.target.files[0];
        const formdata = new FormData();
        formdata.append('', files);
        console.log(files);
        this.upload.upload(formdata).subscribe((res) => {
            console.log('AddProductComponent -> browser -> res', res);
            this.selectedImage = res.files;
            // this.HeaderInformation.get("uploadImage").patchValue(this.selectedImage)
            console.log('AddProductComponent -> browse -> this.selectedImage', this.selectedImage);
        });
    }
    browser1(event) {
        const files = event.target.files[0];
        const formdata = new FormData();
        formdata.append('', files);
        console.log(files);
        this.upload.upload(formdata).subscribe((res) => {
            console.log('AddProductComponent -> browser -> res', res);
            this.selectedImage = res.files;
            // this.HeaderInformation.get("uploadImage").patchValue(this.selectedImage)
            console.log('AddProductComponent -> browse -> this.selectedImage', this.selectedImage);
        });
    }
    selectedImage(arg0, selectedImage) {
        throw new Error('Method not implemented.');
    }
    onFormSubmit() {
        const Sign = this.signaturePad.toDataURL();
        console.log('sign=>', this.signaturePad.toDataURL());
        console.log('this.EmployeeInfo.value', this.empDetails.value);
        const body = {
            email: this.empDetails.get('porfEmail').value,
            position: this.empDetails.get('porfPosition').value,
            mobileNumber: this.empDetails.get('porfMobile').value,
            designation: this.empDetails.get('porfEmployee').value,
            deviceToken: '',
            department: this.empDetails.get('porfDepartment').value,
            phone: this.empDetails.get('porfPhone').value,
            firstName: this.empDetails.get('profFirst').value,
            lastName: this.empDetails.get('porfListName').value,
            avatar: this.empDetails.get('porfUploadImage').value,
            emergencyContact: {
                firstName: this.empDetails.get('EmpFirst').value,
                lastName: this.empDetails.get('empLastName').value,
                email: this.empDetails.get('empEmail').value,
                phone: this.empDetails.get('empPhone').value,
                mobile: this.empDetails.get('empMobile').value,
                relationship: this.empDetails.get('empRelationship').value,
            },
            licence: {
                licenceName: this.empDetails.get('LicenceName').value,
                licenceNumber: this.empDetails.get('LicenceNumber').value,
                trainingOrganisation: this.empDetails.get('TrainingQrginisation').value,
                expiryDate: this.empDetails.get('ExpiryDate').value,
                uploadLicence: this.empDetails.get('UploadLicenceArr').value,
            },
            ppe: {
                ppeSupplied: this.empDetails.get('PPESupplied').value,
                licenceName: 'ghjhgjh',
                brand: this.empDetails.get('BrandOrType').value,
                issueDate: this.empDetails.get('IssueDate').value,
                replacementDate: this.empDetails.get('ReplacementDate').value,
                signature: Sign,
            },
            location: {
                address: this.empDetails.get('porfStreetAddress').value,
                landmark: 'Nagpur',
                state: this.empDetails.get('porfState').value,
                city: this.empDetails.get('porfCityTown').value,
                pincode: this.empDetails.get('porfPostalCode').value,
                country: 'India',
            },
        };
        // let body ={
        //   "email": "tkkkkg@gmail.com",
        //   "position": "11111",
        //   "mobileNumber": 7219090323,
        //   "designation": "Employee",
        //   "deviceToken": "qw",
        //   "department": "ab",
        //   "phone": 42424224,
        //   "firstName": "Abhishekh",
        //   "lastName": "kamble",
        //   "avatar": "image",
        //   "emergencyContact": {
        //       "firstName": "linkedin",
        //       "lastName": "ergdsf",
        //       "email": "twitter",
        //       "phone": "instagram",
        //       "mobile": "instagram"
        //   },
        //   "licence": {
        //       "licenceName": "linkedin",
        //       "licenceNumber": 125250,
        //       "trainingOrganisation": "twitter",
        //       "expiryDate": "instagram",
        //       "uploadLicence": "instagram"
        //   },
        //   "ppe": {
        //       "ppeSupplied": "linkedin",
        //       "licenceName": "sdfgdsfgdfb",
        //       "brand": "twitter",
        //       "issueDate": "instagram",
        //       "replacementDate": "instagram",
        //       "signature": "instagram"
        //   },
        //   "location": {
        //       "address": "Nagpur",
        //       "landmark": "Nagpur",
        //       "state": "Nagpur",
        //       "city": "Nagpur",
        //       "pincode": 25252,
        //       "country": "Nagpur"
        //   }
        // }
        console.log('body=>', body);
        this.employee.addEmployeeInfo(body).subscribe((data) => {
            console.log('data=>', data);
            this.signaturePad.toDataURL();
        });
    }
    sign(sign) {
        throw new Error('Method not implemented.');
    }
    addAcionTab(event) {
        let b = Object.keys(this.sidePreview.value);
        //   let index =this.add().length
        //   this.addAction()
        // this.add().controls[index].get("item").setValue(event.target.value)
        //  console.log(this.sidePreview.controls[b[0]].value);
    }
    profileshow() {
        this.PPERegister = false;
        this.LicenceInfo = false;
        this.profile = true;
    }
    LicenceInfoshow() {
        this.PPERegister = false;
        this.LicenceInfo = true;
        this.profile = false;
    }
    PPERegisteshow() {
        this.PPERegister = true;
        this.LicenceInfo = false;
        this.profile = false;
    }
    addLicence() {
        return this.empDetails.get('UploadLicenceArr');
    }
    newFiled() {
        return this.fb.group({
            file: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    addFiled() {
        this.addLicence().push(this.newFiled());
        console.log(this.empDetails.value);
    }
}
EmployeeRegistrationComponent.ɵfac = function EmployeeRegistrationComponent_Factory(t) { return new (t || EmployeeRegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_services_employee_registration_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeRegistrationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utils_services_upload_file_service__WEBPACK_IMPORTED_MODULE_4__["UploadFileService"])); };
EmployeeRegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmployeeRegistrationComponent, selectors: [["app-employee-registration"]], viewQuery: function EmployeeRegistrationComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](angular2_signaturepad__WEBPACK_IMPORTED_MODULE_2__["SignaturePad"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.signaturePad = _t.first);
    } }, decls: 0, vars: 0, template: function EmployeeRegistrationComponent_Template(rf, ctx) { }, styles: ["input[type=file][_ngcontent-%COMP%] {\n  height: 10%;\n  padding: 0%;\n}\n\ninput[type=file][_ngcontent-%COMP%] {\n  height: 10%;\n  padding: 0%;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background-color: transparent;\n  background-repeat: no-repeat;\n  border: none;\n  cursor: pointer;\n  overflow: hidden;\n  outline: none;\n}\n\n.outline[_ngcontent-%COMP%]:hover {\n  border: 1px solid;\n  border-color: #2e69ff40;\n  box-shadow: 0 0 0 3px rgba(46, 105, 255, 0.25);\n}\n\n.outline[_ngcontent-%COMP%]:focus {\n  border: 1px solid;\n  border-color: #2e69ff40;\n  box-shadow: 0 0 0 3px rgba(46, 105, 255, 0.25);\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n  word-break: break-word;\n  text-align: center;\n  font-family: Inter, sans-serif;\n}\n\n.form-check-input[_ngcontent-%COMP%]:hover {\n  border-color: rgba(46, 105, 255, 0.5);\n  box-shadow: 0 0 0 2px rgba(46, 105, 255, 0.25);\n}\n\n.form-control[_ngcontent-%COMP%]:hover {\n  border-color: rgba(46, 105, 255, 0.5);\n  box-shadow: 0 0 0 2px rgba(46, 105, 255, 0.25);\n}\n\n.form-check-input[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n}\n\n.label_2[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 500;\n  margin-left: 7px;\n  margin-top: 5px;\n}\n\n.emergrncy_1[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 16px !important;\n  font-weight: 500 !important;\n  word-break: break-word;\n  font-family: Inter, sans-serif !important;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 14px !important;\n  font-weight: 500 !important;\n  word-break: break-word;\n  font-family: Inter, sans-serif !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxlbXBsb3llZS1yZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7QUFFRjs7QUFBQTtFQUNFLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQUdGOztBQURBO0VBQ0UsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLDhDQUFBO0FBSUY7O0FBREE7RUFDRSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsOENBQUE7QUFJRjs7QUFGQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtBQUtGOztBQUhBO0VBQ0UscUNBQUE7RUFDQSw4Q0FBQTtBQU1GOztBQUpBO0VBQ0UscUNBQUE7RUFDQSw4Q0FBQTtBQU9GOztBQUxBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFRRjs7QUFOQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBU0Y7O0FBUEE7RUFDRSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLHlDQUFBO0FBVUY7O0FBUkE7RUFDRSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLHlDQUFBO0FBV0YiLCJmaWxlIjoiZW1wbG95ZWUtcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZT0nZmlsZSddIHtcclxuICBoZWlnaHQ6IDEwJTtcclxuICBwYWRkaW5nOiAwJTtcclxufVxyXG5pbnB1dFt0eXBlPSdmaWxlJ10ge1xyXG4gIGhlaWdodDogMTAlO1xyXG4gIHBhZGRpbmc6IDAlO1xyXG59XHJcbmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG4ub3V0bGluZTpob3ZlciB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMmU2OWZmNDA7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYig0NiwgMTA1LCAyNTUsIDAuMjUpO1xyXG59XHJcblxyXG4ub3V0bGluZTpmb2N1cyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMmU2OWZmNDA7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYig0NiwgMTA1LCAyNTUsIDAuMjUpO1xyXG59XHJcbi50aXRsZSB7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IEludGVyLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5mb3JtLWNoZWNrLWlucHV0OmhvdmVyIHtcclxuICBib3JkZXItY29sb3I6IHJnYmEoNDYsIDEwNSwgMjU1LCAwLjUpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCByZ2IoNDYgMTA1IDI1NSAvIDI1JSk7XHJcbn1cclxuLmZvcm0tY29udHJvbDpob3ZlciB7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDQ2LCAxMDUsIDI1NSwgMC41KTtcclxuICBib3gtc2hhZG93OiAwIDAgMCAycHggcmdiKDQ2IDEwNSAyNTUgLyAyNSUpO1xyXG59XHJcbi5mb3JtLWNoZWNrLWlucHV0IHtcclxuICB3aWR0aDogMTVweDtcclxuICBoZWlnaHQ6IDE1cHg7XHJcbn1cclxuLmxhYmVsXzIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBtYXJnaW4tbGVmdDogN3B4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4uZW1lcmdybmN5XzEge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICBmb250LWZhbWlseTogSW50ZXIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxufVxyXG5sYWJlbCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIGZvbnQtZmFtaWx5OiBJbnRlciwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeRegistrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-employee-registration',
                templateUrl: './employee-registration.component.html',
                styleUrls: ['./employee-registration.component.scss'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_utils_services_employee_registration_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeRegistrationService"] }, { type: _utils_services_upload_file_service__WEBPACK_IMPORTED_MODULE_4__["UploadFileService"] }]; }, { signaturePad: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [angular2_signaturepad__WEBPACK_IMPORTED_MODULE_2__["SignaturePad"]]
        }] }); })();
function empEmail(empEmail) {
    throw new Error('Function not implemented.');
}


/***/ }),

/***/ "sBop":
/*!****************************************************************!*\
  !*** ./src/app/utils/services/company-registration.service.ts ***!
  \****************************************************************/
/*! exports provided: CompanyRegistrationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyRegistrationService", function() { return CompanyRegistrationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class CompanyRegistrationService {
    constructor(https) {
        this.https = https;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
    }
    upload(files) {
        return this.https.post(this.apiUrl + 'upload', files).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            console.log('res.data=>', res.data);
            return res;
        }));
    }
    addCompanyInfo(data) {
        return this.https.post(this.apiUrl + 'company/add', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
            console.log('res.data=>', res.data);
            return res;
        }));
    }
}
CompanyRegistrationService.ɵfac = function CompanyRegistrationService_Factory(t) { return new (t || CompanyRegistrationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
CompanyRegistrationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CompanyRegistrationService, factory: CompanyRegistrationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompanyRegistrationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "zF/k":
/*!*************************************************************!*\
  !*** ./src/app/registration/registration-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: RegistrationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationRoutingModule", function() { return RegistrationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _company_registration_company_registration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./company-registration/company-registration.component */ "cxNo");
/* harmony import */ var _employee_registration_employee_registration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee-registration/employee-registration.component */ "pYHN");






const routes = [
    { path: "", component: _company_registration_company_registration_component__WEBPACK_IMPORTED_MODULE_2__["CompanyRegistrationComponent"] },
    { path: "employeeRegistration", component: _employee_registration_employee_registration_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeRegistrationComponent"] }
];
class RegistrationRoutingModule {
}
RegistrationRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RegistrationRoutingModule });
RegistrationRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RegistrationRoutingModule_Factory(t) { return new (t || RegistrationRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RegistrationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=registration-registration-module-es2015.js.map