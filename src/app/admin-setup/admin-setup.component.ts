import {
	AfterViewInit,
	ChangeDetectorRef,
	Component,
	OnInit,
	ViewChild
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatHorizontalStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { AddTermsAndConditionsComponent } from '../site-info/terms-and-conditions/add-terms-and-conditions/add-terms-and-conditions.component';
import {
	AuthService,
	FirstLogin,
	UserData
} from '../utils/services/auth.service';
import { Designation } from '../utils/types/Designation.enum';

import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-admin-setup',
	templateUrl: './admin-setup.component.html',
	styleUrls: ['./admin-setup.component.scss']
})
export class AdminSetupComponent implements OnInit, AfterViewInit {
	@ViewChild('stepper') stepper: MatHorizontalStepper;
	firstFormGroup: FormGroup;
	secondFormGroup: FormGroup;
	isEditable = false;
	userData: UserData;
	companyInfoValid: boolean;
	updatedSuccessFull: boolean;
	isRoleInvaid: boolean;
	isEmpRegInvalid: boolean;
	closed: boolean = false;

	constructor(
		private _formBuilder: FormBuilder,
		private router: Router,
		private authService: AuthService,
		private changeDetectorRef: ChangeDetectorRef,
		private dialog: MatDialog
	) {}
	ngAfterViewInit(): void {
		this.authService.loginData$.subscribe((res) => {
			if (res?.designation !== Designation.clientAdmin) return;
			this.changeDetectorRef.detectChanges();

			if (res?.FirstLogin.step1 === false) {
				this.stepper.selected.completed = true;
				this.stepper.next();
				// this.stepper.selectedIndex = 0;
			}
			if (res?.FirstLogin.step2 === false) {
				this.stepper.selected.completed = true;
				this.stepper.next();
			}
			if (res?.FirstLogin.step3 === false) {
				this.stepper.selected.completed = true;
				this.stepper.next();
			}
			if (res?.FirstLogin.step4 === false) {
				this.stepper.selected.completed = true;
				this.stepper.next();
			}
			if (res?.FirstLogin.step5 === false) {
				this.stepper.selected.completed = true;
				this.stepper.next();
			} else {
				// this.stepper.selectedIndex = 4;
			}
		});
	}

	ngOnInit() {
		this.authService.loginData$.subscribe((res) => {
			if (res?.designation === Designation.clientAdmin)
				if (res?.FirstLogin.step1 && !this.closed) this.openDialog();

			this.userData = res;
		});
		this.firstFormGroup = this._formBuilder.group({
			firstCtrl: ['', Validators.required]
		});
		this.secondFormGroup = this._formBuilder.group({
			secondCtrl: ['', Validators.required]
		});
	}

	updateFirstLogin(step: string) {
		this.userData.FirstLogin[step] = false;
		this.authService
			.updateFirstLogin(this.userData.FirstLogin)
			.subscribe((res) => {
				if (step === 'step4') this.setupComplete();

				this.authService.nextLoginData(this.userData);
				sessionStorage.setItem(
					'userData',
					JSON.stringify(this.userData)
				);
				sessionStorage.setItem(
					'firstLogin',
					JSON.stringify(this.userData.FirstLogin)
				);
			});
	}

	setupComplete() {
		this.userData.FirstLogin.firstLogin = false;
		this.authService
			.updateFirstLogin(this.userData.FirstLogin)
			.subscribe((res) => {
				sessionStorage.setItem(
					'firstLogin',
					JSON.stringify(this.userData.FirstLogin)
				);
				sessionStorage.setItem(
					'userData',
					JSON.stringify(this.userData)
				);
				this.authService.nextLoginData(this.userData);
			});
		this.router.navigate(['/admin']);
	}
	openDialog() {
		try {
			const dbModal = this.dialog.open(AddTermsAndConditionsComponent, {
				disableClose: true
			});
			dbModal.afterClosed().subscribe((res) => {
				this.closed = res;
			});
		} catch (error) {
			console.error(error);
		}
	}
}
