import { Injectable } from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Designation } from 'src/app/utils/types/Designation.enum';
import { AuthService } from '../utils/services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	constructor(private authService: AuthService) {}
	intercept(
		request: HttpRequest<unknown>,
		next: HttpHandler
	): Observable<HttpEvent<unknown>> {
		let role: string;
		const id: string = this.authService.loginData?.id
			? this.authService.loginData.id
			: null;
		switch (sessionStorage.getItem('role')) {
			case Designation.clientAdmin:
				role = 'clientAdminId';
				break;

			default:
				break;
		}
		if (
			request.method === 'POST' ||
			request.method === 'PUT' ||
			request.method === 'PATCH'
		)
			if (request.url.includes('upload')) return next.handle(request);
		let body = {
			...(request.body as Record<string, unknown>)
		};
		if (
			request.url.includes('authentication/register') ||
			!request.url.includes('authentication')
		) {
			if (!request.url.includes('firstLogin')) {
				body[role] = id;
			}
		}
		request = request.clone({
			setHeaders: {
				// eslint-disable-next-line @typescript-eslint/naming-convention
				Authorization: `${sessionStorage.getItem('accessToken')}`
			},
			body
		});
		return next.handle(request);
	}
}
