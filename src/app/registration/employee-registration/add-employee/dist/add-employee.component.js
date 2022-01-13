"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.AddEmployeeComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var operators_1 = require("rxjs/operators");
var sweetalert2_1 = require("sweetalert2");
var AddEmployeeComponent = /** @class */ (function () {
    function AddEmployeeComponent(fb, role, employee, licenceInfo, upload, activatedRoute, router) {
        this.fb = fb;
        this.role = role;
        this.employee = employee;
        this.licenceInfo = licenceInfo;
        this.upload = upload;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.PPERegister = false;
        this.LicenceInfo = false;
        this.EquipmentInfo = false;
        this.submitted = false;
        this.profile = true;
        this.roleData = [''];
        this.signaturePadOptions = {
            // passed through to szimek/signature_pad constructor
            minWidth: 1,
            canvasWidth: 500,
            canvasHeight: 100
        };
        this.empDetails = this.fb.group({
            profTitie: ['', forms_1.Validators.required],
            profFirst: ['', forms_1.Validators.required],
            porfListName: ['', forms_1.Validators.required],
            porfEmail: ['', forms_1.Validators.required],
            porfPosition: ['', forms_1.Validators.required],
            porfDepartment: ['', forms_1.Validators.required],
            porfPhone: ['', forms_1.Validators.required],
            porfMobile: ['', forms_1.Validators.required],
            porfEmployee: ['', forms_1.Validators.required],
            porfManager: ['', forms_1.Validators.required],
            porfAdministrater: ['', forms_1.Validators.required],
            file: [''],
            reportingTo: [''],
            roleId: ['', forms_1.Validators.required],
            porfStreetAddress: ['', forms_1.Validators.required],
            porfCityTown: ['', forms_1.Validators.required],
            porfState: ['', forms_1.Validators.required],
            porfPostalCode: ['', forms_1.Validators.required],
            porfUploadImage: [''],
            EmpFirst: ['', forms_1.Validators.required],
            empLastName: ['', forms_1.Validators.required],
            empRelationship: ['', forms_1.Validators.required],
            empEmail: ['', forms_1.Validators.required],
            empPhone: ['', forms_1.Validators.required],
            empMobile: ['', forms_1.Validators.required],
            LicenceName: [''],
            LicenceNumber: [''],
            TrainingQrginisation: [''],
            ExpiryDate: [''],
            UploadLicenceArr: this.fb.array([]),
            PPESupplied: [''],
            BrandOrType: [''],
            IssueDate: [''],
            PPEArr: this.fb.array([]),
            ReplacementDate: [''],
            Sign: [''],
            plantArr: this.fb.array([]),
            plantSignature: [''],
            modelNumber: [''],
            serialNumber: [''],
            plantType: [''],
            serviceRenewDate: ['']
        });
    }
    AddEmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getAllRoles();
        this.id = this.activatedRoute.snapshot.params.id;
        if (this.id !== "form") {
            this.dataEmp = true;
            this.patchData();
        }
        else {
            this.dataEmp = false;
            this.addFiled();
            this.addFiled2();
            this.addEquipFiled2();
        }
        this.filteredOptions2 = this.empDetails.controls.LicenceName.valueChanges.pipe(operators_1.startWith(''), operators_1.debounceTime(800), operators_1.distinctUntilChanged(), operators_1.switchMap(function (val) {
            console.log("myControl22..", val, _this.filteredOptions2);
            return _this.filter2(val || '');
        }));
        this.filteredOptions1 = this.empDetails.controls.PPESupplied.valueChanges.pipe(operators_1.startWith(''), operators_1.debounceTime(800), operators_1.distinctUntilChanged(), operators_1.switchMap(function (val) {
            console.log("myControl..", val, _this.filteredOptions1);
            return _this.filter1(val || '');
        }));
    };
    AddEmployeeComponent.prototype.getAllRoles = function () {
        var _this = this;
        this.role.getAllRole().subscribe(function (res) {
            console.log("role..", res);
            _this.roleData = res.data;
        });
    };
    //   ngAfterViewInit() {
    //     console.log("after..",this.signaturePad,this.dataUrl)
    //     // this.signaturePad.set('minWidth', 1); // set szimek/signature_pad options at runtime
    //     // this.signaturePad.clear();
    //     // this.signaturePad.fromDataURL(this.dataUrl);
    //    setTimeout(() => {
    //     console.log("after10s..",this.signaturePad,this.dataUrl)
    //    }, 10000);
    //  }
    AddEmployeeComponent.prototype.patchData = function () {
        var _this = this;
        this.employee.getEmployeeInfoById(this.id).subscribe(function (data) {
            console.log('data=>', data);
            // this.signaturePad.toDataURL();
            data.data.licence.forEach(function (element) {
                element.uploadLicence.forEach(function (ele) {
                    _this.addFiled1(ele);
                });
            });
            data.data.ppe.PPEArr.forEach(function (ele) {
                _this.addFiled3(ele);
            });
            data.data.plant.plantArr.forEach(function (ele) {
                _this.addEquipFiled3(ele);
            });
            _this.empDetails.patchValue({
                profTitie: data.data.title,
                profFirst: data.data.firstName,
                porfListName: data.data.lastName,
                porfEmail: data.data.email,
                porfPosition: data.data.position,
                porfDepartment: data.data.department,
                porfPhone: data.data.phone,
                porfMobile: data.data.mobile,
                roleId: data.data.roleId,
                porfStreetAddress: data.data.location.address,
                porfCityTown: data.data.location.city,
                porfState: data.data.location.state,
                porfPostalCode: data.data.location.pincode,
                porfUploadImage: data.data.uploadImage,
                EmpFirst: data.data.emergencyContact.firstName,
                empLastName: data.data.emergencyContact.lastName,
                empRelationship: data.data.emergencyContact.relationship,
                empEmail: data.data.emergencyContact.email,
                empPhone: data.data.emergencyContact.phone,
                empMobile: data.data.emergencyContact.mobile,
                PPESupplied: data.data.ppe.ppeSupplied,
                BrandOrType: data.data.ppe.brand,
                IssueDate: data.data.ppe.issueDate,
                ReplacementDate: data.data.ppe.replacementDate,
                Sign: data.data.ppe.signature,
                plantType: data.data.plant.plantType,
                modelNumber: data.data.plant.modelNumber,
                serialNumber: data.data.plant.serialNumber,
                serviceRenewDate: data.data.plant.serviceRenewDate
            });
            _this.dataUrl = data.data.ppe.signature;
            _this.dataUrl2 = data.data.plant.plantSignature;
            console.log("data.data.ppe.signature;", data.data.ppe.signature);
            var check = function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                this.signaturePad != null;
                return [2 /*return*/];
            }); }); };
            check().then(function (res) {
                console.log("this.signaturePad", _this.signaturePad, res);
                _this.signaturePad.fromDataURL(data.data.ppe.signature);
            });
            var check2 = function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                this.signaturePad2 != null;
                return [2 /*return*/];
            }); }); };
            check2().then(function (res) {
                console.log("this.signaturePad", _this.signaturePad2, res);
                _this.signaturePad2.fromDataURL(data.data.plant.plantSignature);
            });
        });
    };
    AddEmployeeComponent.prototype.drawComplete2 = function () {
        // will be notified of szimek/signature_pad's onEnd event
        this.empDetails.controls["plantSignature"].setValue(this.signaturePad2.toDataURL());
        console.log(this.signaturePad2.toDataURL());
    };
    AddEmployeeComponent.prototype.clear2 = function () {
        this.signaturePad2.clear();
    };
    AddEmployeeComponent.prototype.drawStart2 = function () {
        // will be notified of szimek/signature_pad's onBegin event
        console.log('begin drawing');
    };
    AddEmployeeComponent.prototype.drawComplete = function () {
        // will be notified of szimek/signature_pad's onEnd event
        this.empDetails.controls["Sign"].setValue(this.signaturePad.toDataURL());
        console.log(this.signaturePad.toDataURL());
    };
    AddEmployeeComponent.prototype.clear = function () {
        this.signaturePad.clear();
    };
    AddEmployeeComponent.prototype.drawStart = function () {
        // will be notified of szimek/signature_pad's onBegin event
        console.log('begin drawing');
    };
    AddEmployeeComponent.prototype.browser = function (event, index) {
        var _this = this;
        var files = event.target.files[0];
        var formdata = new FormData();
        formdata.append('', files);
        console.log(files);
        this.upload.upload(formdata).subscribe(function (res) {
            console.log('AddProductComponent -> browser -> res', res);
            _this.selectedImage = res.files;
            _this.addLicence().at(index).get("file").patchValue(_this.selectedImage);
            console.log('AddProductComponent -> browse -> this.selectedImage', _this.selectedImage);
        });
    };
    AddEmployeeComponent.prototype.browser1 = function (event) {
        var _this = this;
        var files = event.target.files[0];
        var formdata = new FormData();
        formdata.append('', files);
        console.log(files);
        this.upload.upload(formdata).subscribe(function (res) {
            console.log('AddProductComponent -> browser -> res', res);
            _this.file1 = res.files[0];
            console.log('file', _this.file1);
            _this.empDetails.get("porfUploadImage").patchValue(_this.file1);
        });
    };
    AddEmployeeComponent.prototype.selectedImage = function (arg0, selectedImage) {
        throw new Error('Method not implemented.');
    };
    AddEmployeeComponent.prototype.onFormUpdate = function (id) {
        var _this = this;
        var Sign = this.signaturePad.toDataURL();
        var plantSignature = this.signaturePad2.toDataURL();
        var ppeArr = function () {
            _this.addPPE().length;
            var arr = [];
            _this.addPPE().controls.forEach(function (item) {
                console.log("item", item);
                arr.push({
                    ppeSupplied: item.controls.PPESupplied.value,
                    brand: item.controls.BrandOrType.value,
                    issueDate: item.controls.IssueDate.value,
                    replacementDate: item.controls.ReplacementDate.value
                });
            });
            return arr;
        };
        var equipArr = function () {
            _this.addPPE().length;
            var arr = [];
            _this.addEquip().controls.forEach(function (item) {
                console.log("item", item);
                arr.push({
                    plantType: item.controls.plantType.value,
                    modelNumber: item.controls.modelNumber.value,
                    serialNumber: item.controls.serialNumber.value,
                    serviceRenewDate: item.controls.serviceRenewDate.value
                });
            });
            return arr;
        };
        var data = {
            title: this.empDetails.get('profTitie').value,
            email: this.empDetails.get('porfEmail').value,
            position: this.empDetails.get('porfPosition').value,
            mobile: this.empDetails.get('porfMobile').value,
            roleId: this.empDetails.get('roleId').value,
            // designation: this.empDetails.get('porfEmployee').value,
            // deviceToken: '',
            department: this.empDetails.get('porfDepartment').value,
            phone: this.empDetails.get('porfPhone').value,
            firstName: this.empDetails.get('profFirst').value,
            lastName: this.empDetails.get('porfListName').value,
            uploadImage: this.empDetails.get('porfUploadImage').value,
            emergencyContact: {
                firstName: this.empDetails.get('EmpFirst').value,
                lastName: this.empDetails.get('empLastName').value,
                email: this.empDetails.get('empEmail').value,
                phone: this.empDetails.get('empPhone').value,
                mobile: this.empDetails.get('empMobile').value,
                relationship: this.empDetails.get('empRelationship').value
            },
            licence: {
                licenceName: this.empDetails.get('LicenceName').value,
                licenceNumber: this.empDetails.get('LicenceNumber').value,
                trainingOrganisation: this.empDetails.get('TrainingQrginisation').value,
                expiryDate: this.empDetails.get('ExpiryDate').value,
                uploadLicence: this.empDetails.get('UploadLicenceArr').value
            },
            ppe: {
                PPEArr: ppeArr(),
                signature: Sign
            },
            plant: {
                plantArr: equipArr(),
                plantSignature: plantSignature
            },
            location: {
                address: this.empDetails.get('porfStreetAddress').value,
                landmark: 'Nagpur',
                state: this.empDetails.get('porfState').value,
                city: this.empDetails.get('porfCityTown').value,
                pincode: this.empDetails.get('porfPostalCode').value,
                country: 'India'
            }
        };
        this.employee
            .updateEmployeeInfo(this.id, data)
            .subscribe(function (resData) {
            console.log('updateData', resData);
            sweetalert2_1["default"].fire({
                title: 'Employee Updated successfully',
                showConfirmButton: false,
                timer: 1200
            });
            _this.router.navigate(["/admin/registration/employeeRegistration"]);
        }, function (err) {
            console.error(err);
        });
    };
    AddEmployeeComponent.prototype.onFormSubmit = function () {
        var _this = this;
        this.submitted = true;
        // if (!this.empDetails.controls.valid) {
        //   this.formData='formfield'
        // }
        var Sign = this.signaturePad.toDataURL();
        console.log('sign=>', this.signaturePad.toDataURL());
        var plantSignature = this.signaturePad2.toDataURL();
        console.log('this.EmployeeInfo.value', this.empDetails.value);
        var ppeArr = function () {
            _this.addPPE().length;
            var arr = [];
            _this.addPPE().controls.forEach(function (item) {
                console.log("item", item);
                arr.push({
                    ppeSupplied: item.controls.PPESupplied.value,
                    brand: item.controls.BrandOrType.value,
                    issueDate: item.controls.IssueDate.value,
                    replacementDate: item.controls.ReplacementDate.value
                });
            });
            return arr;
        };
        var equipArr = function () {
            _this.addEquip().length;
            var arr = [];
            _this.addEquip().controls.forEach(function (item) {
                console.log("item", item);
                arr.push({
                    plantType: item.controls.plantType.value,
                    modelNumber: item.controls.modelNumber.value,
                    serialNumber: item.controls.serialNumber.value,
                    serviceRenewDate: item.controls.serviceRenewDate.value
                });
            });
            return arr;
        };
        var body = {
            title: this.empDetails.get('profTitie').value,
            email: this.empDetails.get('porfEmail').value,
            position: this.empDetails.get('porfPosition').value,
            mobile: this.empDetails.get('porfMobile').value,
            roleId: this.empDetails.get('roleId').value,
            // designation: this.empDetails.get('porfEmployee').value,
            // deviceToken: '',
            department: this.empDetails.get('porfDepartment').value,
            phone: this.empDetails.get('porfPhone').value,
            firstName: this.empDetails.get('profFirst').value,
            lastName: this.empDetails.get('porfListName').value,
            uploadImage: this.empDetails.get('porfUploadImage').value,
            emergencyContact: {
                firstName: this.empDetails.get('EmpFirst').value,
                lastName: this.empDetails.get('empLastName').value,
                email: this.empDetails.get('empEmail').value,
                phone: this.empDetails.get('empPhone').value,
                mobile: this.empDetails.get('empMobile').value,
                relationship: this.empDetails.get('empRelationship').value
            },
            licence: {
                licenceName: this.empDetails.get('LicenceName').value,
                licenceNumber: this.empDetails.get('LicenceNumber').value,
                trainingOrganisation: this.empDetails.get('TrainingQrginisation').value,
                expiryDate: this.empDetails.get('ExpiryDate').value,
                uploadLicence: this.empDetails.get('UploadLicenceArr').value
            },
            ppe: {
                PPEArr: ppeArr(),
                signature: Sign
            },
            plant: {
                plantArr: equipArr(),
                plantSignature: plantSignature
            },
            location: {
                address: this.empDetails.get('porfStreetAddress').value,
                landmark: 'Nagpur',
                state: this.empDetails.get('porfState').value,
                city: this.empDetails.get('porfCityTown').value,
                pincode: this.empDetails.get('porfPostalCode').value,
                country: 'India'
            }
        };
        console.log('body=>', body);
        this.employee.addEmployeeInfo(body).subscribe(function (data) {
            console.log('data=>', data);
            _this.signaturePad.toDataURL();
            sweetalert2_1["default"].fire({
                title: 'Employee Added successfully',
                showConfirmButton: false,
                timer: 1200
            });
            _this.router.navigate(["/admin/registration/employeeRegistration"]);
        }, function (err) {
            console.error(err);
        });
    };
    AddEmployeeComponent.prototype.sign = function (sign) {
        throw new Error('Method not implemented.');
    };
    AddEmployeeComponent.prototype.addAcionTab = function (event) {
        var b = Object.keys(this.sidePreview.value);
        //   let index =this.add().length
        //   this.addAction()
        // this.add().controls[index].get("item").setValue(event.target.value)
        //  console.log(this.sidePreview.controls[b[0]].value);
    };
    AddEmployeeComponent.prototype.profileshow = function () {
        this.PPERegister = false;
        this.LicenceInfo = false;
        this.profile = true;
        this.EquipmentInfo = false;
    };
    AddEmployeeComponent.prototype.LicenceInfoshow = function () {
        this.PPERegister = false;
        this.LicenceInfo = true;
        this.profile = false;
        this.EquipmentInfo = false;
    };
    AddEmployeeComponent.prototype.PPERegisteshow = function () {
        this.PPERegister = true;
        this.LicenceInfo = false;
        this.profile = false;
        this.EquipmentInfo = false;
    };
    AddEmployeeComponent.prototype.addPlantshow = function () {
        this.PPERegister = false;
        this.LicenceInfo = false;
        this.profile = false;
        this.EquipmentInfo = true;
    };
    AddEmployeeComponent.prototype.addLicence = function () {
        return this.empDetails.get('UploadLicenceArr');
    };
    AddEmployeeComponent.prototype.addEquip = function () {
        return this.empDetails.get('plantArr');
    };
    AddEmployeeComponent.prototype.newEquipFiled2 = function () {
        return this.fb.group({
            modelNumber: [''],
            serialNumber: [''],
            plantType: [''],
            serviceRenewDate: ['']
        });
    };
    AddEmployeeComponent.prototype.addEquipFiled2 = function () {
        this.addEquip().push(this.newEquipFiled2());
        console.log(this.empDetails.value);
    };
    AddEmployeeComponent.prototype.newEquipFiled3 = function (data) {
        console.log("newData", data);
        return this.fb.group({
            plantType: [data.plantType],
            modelNumber: [data.modelNumber],
            serialNumber: [data.serialNumber],
            serviceRenewDate: [data.serviceRenewDate]
        });
    };
    AddEmployeeComponent.prototype.addEquipFiled3 = function (data) {
        console.log("data", data);
        this.addEquip().push(this.newEquipFiled3(data));
        console.log("addPPEFiled1", this.empDetails.value);
    };
    AddEmployeeComponent.prototype.removeEquipFiled1 = function (i) {
        var item = this.empDetails.controls['plantArr'];
        if (item.length > 1) {
            item.removeAt(i);
        }
    };
    AddEmployeeComponent.prototype.addPPE = function () {
        return this.empDetails.get('PPEArr');
    };
    AddEmployeeComponent.prototype.newFiled2 = function () {
        return this.fb.group({
            PPESupplied: [''],
            BrandOrType: [''],
            IssueDate: [''],
            ReplacementDate: ['']
        });
    };
    AddEmployeeComponent.prototype.addFiled2 = function () {
        this.addPPE().push(this.newFiled2());
        console.log(this.empDetails.value);
    };
    AddEmployeeComponent.prototype.removeFiled1 = function (i) {
        var item = this.empDetails.controls['PPEArr'];
        if (item.length > 1) {
            item.removeAt(i);
        }
    };
    AddEmployeeComponent.prototype.newFiled3 = function (data) {
        console.log("newData", data);
        return this.fb.group({
            PPESupplied: [data.ppeSupplied],
            BrandOrType: [data.brand],
            IssueDate: [data.issueDate],
            ReplacementDate: [data.replacementDate]
        });
    };
    AddEmployeeComponent.prototype.addFiled3 = function (data) {
        console.log("data", data);
        this.addPPE().push(this.newFiled3(data));
        console.log("addPPEFiled1", this.empDetails.value);
    };
    AddEmployeeComponent.prototype.newFiled = function () {
        return this.fb.group({
            file: [''],
            LicenceName: [''],
            LicenceNumber: [''],
            TrainingQrginisation: [''],
            ExpiryDate: ['']
        });
    };
    AddEmployeeComponent.prototype.newFiled1 = function (data) {
        return this.fb.group({
            file: [data.file],
            LicenceName: [data.LicenceName],
            LicenceNumber: [data.LicenceNumber],
            TrainingQrginisation: [data.TrainingQrginisation],
            ExpiryDate: [data.ExpiryDate]
        });
    };
    AddEmployeeComponent.prototype.addFiled1 = function (data) {
        this.addLicence().push(this.newFiled1(data));
    };
    AddEmployeeComponent.prototype.addFiled = function () {
        this.addLicence().push(this.newFiled());
    };
    AddEmployeeComponent.prototype.removeFiled = function (i) {
        var item = this.empDetails.controls['UploadLicenceArr'];
        if (item.length > 1) {
            item.removeAt(i);
        }
    };
    Object.defineProperty(AddEmployeeComponent.prototype, "registerFormControl", {
        get: function () {
            return this.empDetails.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddEmployeeComponent.prototype.filter2 = function (val) {
        return this.licenceInfo.getAllLicence()
            .pipe(operators_1.map(function (res) {
            res.data = res.data.map(function (item) {
                item.LicenceName = "" + item.title;
                return item;
            });
            return res;
        }), operators_1.map(function (response) {
            response.data = response.data.filter(function (option) {
                return option.LicenceName.toLowerCase().indexOf(val.toLowerCase()) === 0;
            });
            return response.data;
        }));
    };
    AddEmployeeComponent.prototype.filter1 = function (val) {
        return this.licenceInfo.getAllPPE()
            .pipe(operators_1.map(function (res) {
            res.data = res.data.map(function (item) {
                item.PPESupplied = "" + item.title;
                return item;
            });
            return res;
        }), operators_1.map(function (response) {
            response.data = response.data.filter(function (option) {
                console.log("11option>>", val);
                return option.PPESupplied.toLowerCase().indexOf(val.toLowerCase()) === 0;
            });
            console.log("response.data>>", response.data);
            return response.data;
        }));
    };
    __decorate([
        core_1.ViewChild('signature1')
    ], AddEmployeeComponent.prototype, "signaturePad");
    __decorate([
        core_1.ViewChild('signature2')
    ], AddEmployeeComponent.prototype, "signaturePad2");
    AddEmployeeComponent = __decorate([
        core_1.Component({
            selector: 'app-add-employee',
            templateUrl: './add-employee.component.html',
            styleUrls: ['./add-employee.component.scss']
        })
    ], AddEmployeeComponent);
    return AddEmployeeComponent;
}());
exports.AddEmployeeComponent = AddEmployeeComponent;
