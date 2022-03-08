import { Component, OnInit, Renderer2 } from '@angular/core';
import {
	FormGroup,
	FormBuilder,
	Validators,
	FormControl
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { CustomValidators } from 'src/app/custom-validators';
import { AuthService } from 'src/app/utils/services/auth.service';
import { SetTitleService } from 'src/app/utils/services/set-title.service';

import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-forgot-password',
	templateUrl: './forgot-password.component.html',
	styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
	public forgotPasswordForm: FormGroup;
	submitBtn = false;
	buttonData = false;
	email: string;
	showForgotPasswordForm: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
		sessionStorage.getItem('resetEmail') ? true : false
	);
	emailControl: FormControl = new FormControl('', [
		Validators.email,
		Validators.required
	]);
	constructor(
		private setTitle: SetTitleService,
		private renderer: Renderer2,
		private activatedRoute: ActivatedRoute,
		private authService: AuthService,
		private router: Router,
		private toast: ToastrService,
		private fb: FormBuilder
	) {
		this.forgotPasswordForm = this.fb.group(
			{
				oldPassword: ['', Validators.required],
				newPassword: [
					'',
					Validators.compose([
						// 1\. Password Field is Required
						Validators.required,
						// 2\. check whether the entered password has a number
						CustomValidators.patternValidator(/\d/, {
							hasNumber: true
						}),
						// 3\. check whether the entered password has upper case letter
						CustomValidators.patternValidator(/[A-Z]/, {
							hasCapitalCase: true
						}),
						// 4\. check whether the entered password has a lower-case letter
						CustomValidators.patternValidator(/[a-z]/, {
							hasSmallCase: true
						}),
						// 5\. check whether the entered password has a special character
						CustomValidators.patternValidator(
							/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
							{
								hasSpecialCharacters: true
							}
						),
						// 6\. Has a minimum length of 8 characters
						Validators.minLength(8)
					])
				],
				confirm_password: ['', Validators.required]
			},
			{
				validators: CustomValidators.passwordMatchValidator
			}
		);
	}

	ngOnInit(): void {
		this.emailControl.setValue(
			sessionStorage.getItem('resetEmail')
				? sessionStorage.getItem('resetEmail')
				: ''
		);
		this.activatedRoute.queryParams.subscribe(
			(res) => (this.email = res['email'])
		);
		this.renderer.addClass(
			document.querySelector('app-root'),
			'login-page'
		);
		this.setTitle.setTitle('WHS-resetPassword');
	}

	password(formGroup: FormGroup) {
		const { value: newPassword } = formGroup.get('newPassword');
		const { value: confirm_password } = formGroup.get('confirm_password');
		return newPassword === confirm_password
			? null
			: { passwordNotMatch: true };
	}

	changePassword() {
		this.submitBtn = true;
		if (this.forgotPasswordForm.invalid) {
			return;
		}

		this.authService
			.resetPassword(
				this.email,
				this.forgotPasswordForm.controls.oldPassword.value,
				this.forgotPasswordForm.controls.newPassword.value
			)
			.subscribe(
				(res) => {
					this.toast.success('Password Successfully Changed!', '', {
						timeOut: 3000
					});
					this.router.navigate(['/']);
				},
				(err) => this.toast.error('Something Went Wrong!')
			);
	}

	sendEmail() {
		if (this.emailControl.invalid) {
			return;
		}
		const email = Object.assign(
			{},
			{ email: this.emailControl.value as string }
		);

		this.authService.sendForgotMail(this.emailControl.value).subscribe(
			(res) => {
				this.toast.success('OTP sent To the Email.');
				this.showForgotPasswordForm.next(true);
				sessionStorage.setItem('resetEmail', this.emailControl.value);
			},
			(err) => {
				this.toast.error('Something Went Wrong');
				this.showForgotPasswordForm.next(false);
			}
		);
	}

	forgotPassword() {
		this.authService
			.forgotPassword(
				this.emailControl.value,
				this.forgotPasswordForm.get('oldPassword').value,
				{ password: this.forgotPasswordForm.get('newPassword').value }
			)
			.subscribe(
				(res) => {
					this.toast.success('Password Changed SuccessFully!');
					sessionStorage.removeItem('resetEmail');
					this.router.navigate(['']);
				},
				(err) => this.toast.error('Some Error Occured!')
			);
	}

	ngOnDestroy() {
		sessionStorage.removeItem('resetEmail');
		this.renderer.removeClass(
			document.querySelector('app-root'),
			'login-page'
		);
	}
}
