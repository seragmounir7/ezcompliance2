import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/utils/services/auth.service';
import { SetTitleService } from 'src/app/utils/services/set-title.service';

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
		private toast: ToastrService
	) {
		this.resetForm = new FormGroup(
			{
				oldPassword: new FormControl(null, Validators.required),
				newPassword: new FormControl(null, Validators.required),
				confirm_password: new FormControl(null, Validators.required)
			},
			{
				validators: this.password.bind(this)
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

	password(formGroup: FormGroup) {
		const { value: newPassword } = formGroup.get('newPassword');
		const { value: confirm_password } = formGroup.get('confirm_password');
		return newPassword === confirm_password
			? null
			: { passwordNotMatch: true };
	}

	changePassword() {
		this.submitBtn = true;
		if (this.resetForm.invalid) {
			console.log(this.resetForm.invalid);
			return;
		}
		console.log(this.resetForm.value);
		this.authService
			.resetPassword(
				this.email,
				this.resetForm.controls.oldPassword.value,
				this.resetForm.controls.newPassword.value
			)
			.subscribe(
				(res) => {
					console.log(res);
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
