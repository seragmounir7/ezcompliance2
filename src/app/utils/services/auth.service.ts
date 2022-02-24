import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { distinctUntilChanged, map, share } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Designation } from '../types/Designation.enum';
@Injectable({
	providedIn: 'root'
})
export class AuthService {
	apiUrl = environment.apiUrl;
	private loginDataSubject: BehaviorSubject<UserData> = new BehaviorSubject<UserData>(
		null
	);
	private loginObs$: Observable<UserData> = this.loginDataSubject.asObservable();
	public loginData$: Observable<UserData> = this.loginObs$.pipe(
		distinctUntilChanged()
	);
	public isClient$: Observable<boolean> = this.loginObs$.pipe(
		distinctUntilChanged(),
		map((res) => res?.designation === Designation.clientAdmin)
	);
	public isAdmin$: Observable<boolean> = this.loginDataSubject
		.asObservable()
		.pipe(
			distinctUntilChanged(),
			map((res) => res?.designation === Designation.superAdmin)
		);
	public isUser$: Observable<boolean> = this.loginDataSubject
		.asObservable()
		.pipe(
			distinctUntilChanged(),
			map((res) => res?.designation === Designation.user)
		);
	nextLoginData(data: UserData) {
		sessionStorage.setItem('userData', JSON.stringify(data));
		this.loginDataSubject.next(data);
	}

	constructor(private http: HttpClient, private router: Router) {
		if (sessionStorage.getItem('accessToken')) {
			this.nextLoginData(JSON.parse(sessionStorage.getItem('userData')));
		}
	}

	resetPassword(email: string, oldPassword: string, newPassword: string) {
		return this.http.post(
			this.apiUrl +
				`authentication/mail/forget/password/${email}/${oldPassword}`,
			{ password: newPassword }
		);
	}

	login(data): Observable<ResponceBody> {
		return this.http
			.post<ResponceBody>(this.apiUrl + 'authentication/login', data)
			.pipe(
				map((res: ResponceBody) => {
					console.log('res.data.accessToken', res.data.accessToken);
					if (res.data.accessToken) {
						this.nextLoginData(res.data);
						sessionStorage.setItem(
							'accessToken',
							res.data.accessToken
						);
						sessionStorage.setItem('role', res.data.designation);
						sessionStorage.setItem('id', res.data.id);
						sessionStorage.setItem(
							'userData',
							JSON.stringify(res.data)
						);
						sessionStorage.setItem(
							'firstLogin',
							JSON.stringify(res.data.FirstLogin)
						);
					}
					return res;
				})
			);
	}
	logout() {
		this.pergeData() ? this.router.navigate(['/']) : '';
	}
	pergeData() {
		this.nextLoginData({} as UserData);
		sessionStorage.clear();
		return true;
	}
	updateFirstLogin(data: FirstLogin) {
		console.log(data);
		return this.http.put(this.apiUrl + 'authentication/update/firstLogin', {
			FirstLogin: data
		});
	}
}

export interface UserData {
	id: string;
	email: string;
	accessToken: string;
	designation: string;
	FirstLogin: FirstLogin;
	phone: string;
	companyLogo: string;
	employeePurchased: number;
	username: string;
}

export interface ResponceBody {
	status: string;
	code: number;
	data: UserData;
}

export interface FirstLogin {
	firstLogin: boolean;
	step1: boolean;
	step2: boolean;
	step3: boolean;
	step4: boolean;
}
