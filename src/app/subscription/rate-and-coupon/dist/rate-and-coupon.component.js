"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RateAndCouponComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var table_1 = require("@angular/material/table");
var edit_rate_and_coupon_component_1 = require("./edit-rate-and-coupon/edit-rate-and-coupon.component");
var sort_1 = require("@angular/material/sort");
var RateAndCouponComponent = /** @class */ (function () {
    function RateAndCouponComponent(subscript, fb, setTitle, dialog) {
        this.subscript = subscript;
        this.fb = fb;
        this.setTitle = setTitle;
        this.dialog = dialog;
        this.dataPlan = [''];
        this.isValid = false;
        this.ELEMENT_DATA = [];
        this.displayedColumns = ['index', 'monthly', 'defaultMonthly', 'defaultEmp', 'yearlyDiscount', 'coupon', 'action'];
        this.dataSource = new table_1.MatTableDataSource(this.ELEMENT_DATA);
        this.addPlan = false;
        this.rateAndCoupon = this.fb.group({
            monthly: ['', forms_1.Validators.required],
            yearly: ['', forms_1.Validators.required]
        });
    }
    RateAndCouponComponent.prototype.ngOnInit = function () {
        this.getPlan();
        this.getPlanById();
        this.setTitle.setTitle('WHS-Subscription Details');
    };
    RateAndCouponComponent.prototype.getPlan = function () {
        var _this = this;
        this.myId = '6177e0b96d0cc515a04870a2';
        this.subscript.getAllPlan().subscribe(function (data) {
            var dataPlan = data.data;
            if (dataPlan.length == 0) {
                _this.addPlan = true;
            }
            else {
                _this.addPlan = false;
                _this.ELEMENT_DATA = dataPlan;
                _this.dataSource = new table_1.MatTableDataSource(_this.ELEMENT_DATA);
                _this.dataSource.sort = _this.sort;
            }
            // console.log('mode=>', data);
            // this.dataSource.data = data.data;
            console.log("dataPlan=>", dataPlan);
            // this.dataPlan = data.data;
        });
    };
    RateAndCouponComponent.prototype.editPlan = function () {
        this.isValid = true;
    };
    // editPlanInfo(element) {
    //   console.log('id=>', element);
    //   this.myId = element._id;
    //   console.log('form', this.rateAndCoupon.value);
    //   // this.isEdit = true;
    //   this.subscript
    //     .editPlan(this.myId, this.rateAndCoupon.value)
    //     .subscribe((res) => {
    //       console.log('Data Set response' + res);
    //       this.data = res.data;
    //       console.log('new response' + this.data);
    //       // this.dialogRef.close('true');
    //     });
    // }
    RateAndCouponComponent.prototype.edit = function (element) {
        var _this = this;
        var dialogRef = this.dialog.open(edit_rate_and_coupon_component_1.EditRateAndCouponComponent, {
            width: "550px",
            height: "440px",
            data: element
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if ((result == "true")) {
                _this.getPlan();
            }
            console.log("The dialog was closed");
        });
    };
    RateAndCouponComponent.prototype.getPlanById = function () {
        var _this = this;
        var id = '61b70b0c7f7aba4a9f8684d4';
        this.subscript.getPlan(id).subscribe(function (res) {
            console.log("getId", res);
            _this.coupon = res.data;
            // couponData.forEach((element, index) => {
            //   element.index = index + 1; //adding index
            // });
        });
    };
    __decorate([
        core_1.ViewChild(sort_1.MatSort)
    ], RateAndCouponComponent.prototype, "sort");
    RateAndCouponComponent = __decorate([
        core_1.Component({
            selector: 'app-rate-and-coupon',
            templateUrl: './rate-and-coupon.component.html',
            styleUrls: ['./rate-and-coupon.component.scss']
        })
    ], RateAndCouponComponent);
    return RateAndCouponComponent;
}());
exports.RateAndCouponComponent = RateAndCouponComponent;
