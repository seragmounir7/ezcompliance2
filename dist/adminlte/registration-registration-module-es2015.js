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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _registration_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registration-routing.module */ "zF/k");
/* harmony import */ var _company_registration_company_registration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./company-registration/company-registration.component */ "cxNo");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");





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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"]], styles: ["input[type=file][_ngcontent-%COMP%] {\n  height: 10%;\n  padding: 0%;\n}\n\n.outline[_ngcontent-%COMP%]:hover {\n  border: 1px solid;\n  border-color: #2e69ff40;\n  box-shadow: 0 0 0 3px rgba(46, 105, 255, 0.25);\n}\n\n.outline[_ngcontent-%COMP%]:focus {\n  border: 1px solid;\n  border-color: #2e69ff40;\n  box-shadow: 0 0 0 3px rgba(46, 105, 255, 0.25);\n}\n\n.title[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 32px;\n  font-weight: 700;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n}\n\n.subtitel[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 16px;\n  font-weight: 600;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n}\n\n.form-Label[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 500;\n  word-break: break-word;\n  font-family: Inter, sans-serif;\n  width: 100%;\n  margin-left: 2px;\n  margin-bottom: 14px;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%] {\n  height: 15px;\n  width: 15px;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%]:hover {\n  border: 1px solid;\n  border-color: #2e69ff40;\n  box-shadow: 0 0 0 3px rgba(46, 105, 255, 0.25);\n  height: 15px;\n  width: 15px;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%]:focus {\n  border: 1px solid;\n  border-color: #2e69ff40;\n  box-shadow: 0 0 0 3px rgba(46, 105, 255, 0.25);\n  height: 15px;\n  width: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvbXBhbnktcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSw4Q0FBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLDhDQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFFRjs7QUFBQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQUdGOztBQURBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFJRjs7QUFEQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBSUY7O0FBRkE7RUFDRSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsOENBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUtGOztBQUZBO0VBQ0UsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLDhDQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFLRiIsImZpbGUiOiJjb21wYW55LXJlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0W3R5cGU9J2ZpbGUnXSB7XG4gIGhlaWdodDogMTAlO1xuICBwYWRkaW5nOiAwJTtcbn1cblxuLm91dGxpbmU6aG92ZXIge1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiAjMmU2OWZmNDA7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2IoNDYsIDEwNSwgMjU1LCAwLjI1KTtcbn1cblxuLm91dGxpbmU6Zm9jdXMge1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiAjMmU2OWZmNDA7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2IoNDYsIDEwNSwgMjU1LCAwLjI1KTtcbn1cbi50aXRsZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICBmb250LWZhbWlseTogSW50ZXIsIHNhbnMtc2VyaWY7XG59XG4uc3VidGl0ZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgZm9udC1mYW1pbHk6IEludGVyLCBzYW5zLXNlcmlmO1xufVxuLmZvcm0tTGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgZm9udC1mYW1pbHk6IEludGVyLCBzYW5zLXNlcmlmO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbn1cblxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDE1cHg7XG59XG5pbnB1dFt0eXBlPSdjaGVja2JveCddOmhvdmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIGJvcmRlci1jb2xvcjogIzJlNjlmZjQwO1xuICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiKDQ2LCAxMDUsIDI1NSwgMC4yNSk7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDE1cHg7XG59XG5cbmlucHV0W3R5cGU9J2NoZWNrYm94J106Zm9jdXMge1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiAjMmU2OWZmNDA7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2IoNDYsIDEwNSwgMjU1LCAwLjI1KTtcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTVweDtcbn1cbiJdfQ== */"] });
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");





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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-signaturepad */ "r1zJ");
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
    } }, decls: 0, vars: 0, template: function EmployeeRegistrationComponent_Template(rf, ctx) { }, styles: ["input[type=file][_ngcontent-%COMP%] {\n  height: 10%;\n  padding: 0%;\n}\n\ninput[type=file][_ngcontent-%COMP%] {\n  height: 10%;\n  padding: 0%;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background-color: transparent;\n  background-repeat: no-repeat;\n  border: none;\n  cursor: pointer;\n  overflow: hidden;\n  outline: none;\n}\n\n.outline[_ngcontent-%COMP%]:hover {\n  border: 1px solid;\n  border-color: #2e69ff40;\n  box-shadow: 0 0 0 3px rgba(46, 105, 255, 0.25);\n}\n\n.outline[_ngcontent-%COMP%]:focus {\n  border: 1px solid;\n  border-color: #2e69ff40;\n  box-shadow: 0 0 0 3px rgba(46, 105, 255, 0.25);\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n  word-break: break-word;\n  text-align: center;\n  font-family: Inter, sans-serif;\n}\n\n.form-check-input[_ngcontent-%COMP%]:hover {\n  border-color: rgba(46, 105, 255, 0.5);\n  box-shadow: 0 0 0 2px rgba(46, 105, 255, 0.25);\n}\n\n.form-control[_ngcontent-%COMP%]:hover {\n  border-color: rgba(46, 105, 255, 0.5);\n  box-shadow: 0 0 0 2px rgba(46, 105, 255, 0.25);\n}\n\n.form-check-input[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n}\n\n.label_2[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 500;\n  margin-left: 7px;\n  margin-top: 5px;\n}\n\n.emergrncy_1[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 16px !important;\n  font-weight: 500 !important;\n  word-break: break-word;\n  font-family: Inter, sans-serif !important;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 14px !important;\n  font-weight: 500 !important;\n  word-break: break-word;\n  font-family: Inter, sans-serif !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VtcGxveWVlLXJlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsV0FBQTtBQUVGOztBQUFBO0VBQ0UsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBR0Y7O0FBREE7RUFDRSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsOENBQUE7QUFJRjs7QUFEQTtFQUNFLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSw4Q0FBQTtBQUlGOztBQUZBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0FBS0Y7O0FBSEE7RUFDRSxxQ0FBQTtFQUNBLDhDQUFBO0FBTUY7O0FBSkE7RUFDRSxxQ0FBQTtFQUNBLDhDQUFBO0FBT0Y7O0FBTEE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQVFGOztBQU5BO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFTRjs7QUFQQTtFQUNFLHFCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUNBQUE7QUFVRjs7QUFSQTtFQUNFLHFCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUNBQUE7QUFXRiIsImZpbGUiOiJlbXBsb3llZS1yZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPSdmaWxlJ10ge1xuICBoZWlnaHQ6IDEwJTtcbiAgcGFkZGluZzogMCU7XG59XG5pbnB1dFt0eXBlPSdmaWxlJ10ge1xuICBoZWlnaHQ6IDEwJTtcbiAgcGFkZGluZzogMCU7XG59XG5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG91dGxpbmU6IG5vbmU7XG59XG4ub3V0bGluZTpob3ZlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICMyZTY5ZmY0MDtcbiAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYig0NiwgMTA1LCAyNTUsIDAuMjUpO1xufVxuXG4ub3V0bGluZTpmb2N1cyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICMyZTY5ZmY0MDtcbiAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYig0NiwgMTA1LCAyNTUsIDAuMjUpO1xufVxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBJbnRlciwgc2Fucy1zZXJpZjtcbn1cbi5mb3JtLWNoZWNrLWlucHV0OmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDQ2LCAxMDUsIDI1NSwgMC41KTtcbiAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHJnYig0NiAxMDUgMjU1IC8gMjUlKTtcbn1cbi5mb3JtLWNvbnRyb2w6aG92ZXIge1xuICBib3JkZXItY29sb3I6IHJnYmEoNDYsIDEwNSwgMjU1LCAwLjUpO1xuICBib3gtc2hhZG93OiAwIDAgMCAycHggcmdiKDQ2IDEwNSAyNTUgLyAyNSUpO1xufVxuLmZvcm0tY2hlY2staW5wdXQge1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xufVxuLmxhYmVsXzIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWxlZnQ6IDdweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLmVtZXJncm5jeV8xIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICBmb250LWZhbWlseTogSW50ZXIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbn1cbmxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICBmb250LWZhbWlseTogSW50ZXIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbn1cbiJdfQ== */"] });
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");





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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
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