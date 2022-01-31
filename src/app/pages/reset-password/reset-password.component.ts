import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
	constructor(
		private setTitle: SetTitleService,
		private renderer: Renderer2
	) {
		this.resetForm = new FormGroup(
			{
				otp: new FormControl(null, [
					Validators.required,
					Validators.email
				]),
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
		this.renderer.addClass(
			document.querySelector('app-root'),
			'login-page'
		);
		this.setTitle.setTitle('WHS-resetPassword');
	}

	password(formGroup: FormGroup) {
		const { value: newPassword } = formGroup.get('newPassword');
		const { value: confirm_password } = formGroup.get('confirm_password');
		console.log('fb-->', formGroup, newPassword, confirm_password);
		return newPassword === confirm_password
			? null
			: { passwordNotMatch: true };
	}

	login() {
		this.submitBtn = true;
	}
	ngOnDestroy() {
		this.renderer.removeClass(
			document.querySelector('app-root'),
			'login-page'
		);
	}
}
