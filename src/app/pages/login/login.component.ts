import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { AppService } from '../../utils/services/app.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../utils/services/auth.service';
import { SetTitleService } from 'src/app/utils/services/set-title.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
	public loginForm: FormGroup;
	public isAuthLoading = false;
	submitBtn = false;
	constructor(
		private renderer: Renderer2,
		private toastr: ToastrService,
		private appService: AppService,
		private router: Router,
		private AuthService: AuthService,
		private setTitle: SetTitleService
	) {
		this.loginForm = new FormGroup({
			email: new FormControl(null, [
				Validators.required,
				Validators.email
			]),
			password: new FormControl(null, Validators.required)
		});
	}

	ngOnInit() {
		this.renderer.addClass(
			document.querySelector('app-root'),
			'login-page'
		);
		this.setTitle.setTitle('WHS-Login');
	}

	login() {
		this.submitBtn = true;
		if (this.loginForm.invalid) {
			return;
		}
		const data = {
			...this.loginForm.value
		};
		console.log('data', data);
		if (this.loginForm.valid) {
			this.AuthService.login(data).subscribe(
				(resData: any) => {
					console.log('resData', resData);
					console.log('res', resData.status);
					if (resData.status == 'SUCCESS') {
						sessionStorage.setItem(
							'userName',
							resData.data.username
						);
						sessionStorage.setItem('phoneNo', resData.data.phone);
						this.router.navigate(['/setup']);
						this.toastr.success('Login Successful', '');
					}
				},
				(err) => {
					console.log(err, navigator.onLine);
					if (!navigator.onLine) {
						this.toastr.warning(
							'You Are Offline! Check Your Internet Connection.'
						);
						return;
					}
					this.toastr.error('Wrong credentials', '');
				}
			);
		} else {
			this.toastr.error('Enter valid username/password', '', {
				timeOut: 1500
			});
		}
	}

	ngOnDestroy() {
		this.renderer.removeClass(
			document.querySelector('app-root'),
			'login-page'
		);
	}
}
