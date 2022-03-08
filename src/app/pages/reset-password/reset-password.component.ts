import { Component, OnInit, Renderer2 } from '@angular/core';
import {
	FormBuilder,
	FormControl,
	FormGroup,
	Validators
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CustomValidators } from 'src/app/custom-validators';
import { AuthService } from 'src/app/utils/services/auth.service';
import { SetTitleService } from 'src/app/utils/services/set-title.service';

import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-reset-password',
	templateUrl: './reset-password.component.html',
	styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
	public resetForm: FormGroup;
	submitBtn = false;
	buttonData = false;
	email: string;
	constructor(
		private setTitle: SetTitleService,
		private renderer: Renderer2,
		private activatedRoute: ActivatedRoute,
		private authService: AuthService,
		private router: Router,
		private toast: ToastrService,
		private fb: FormBuilder
	) {
		this.resetForm = this.fb.group(
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
		this.activatedRoute.queryParams.subscribe(
			(res) => (this.email = res['email'])
		);
		this.renderer.addClass(
			document.querySelector('app-root'),
			'login-page'
		);
		this.setTitle.setTitle('WHS-resetPassword');
	}

	changePassword() {
		this.submitBtn = true;
		if (this.resetForm.invalid) {
			return;
		}

		this.authService
			.resetPassword(
				this.email,
				this.resetForm.controls.oldPassword.value,
				this.resetForm.controls.newPassword.value
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
	ngOnDestroy() {
		this.renderer.removeClass(
			document.querySelector('app-root'),
			'login-page'
		);
	}
}
