import { Injectable } from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Designation } from 'src/app/utils/types/Designation.enum';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	intercept(
		request: HttpRequest<unknown>,
		next: HttpHandler
	): Observable<HttpEvent<unknown>> {
		let role: string;
		const id: string = sessionStorage.getItem('id');
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
			console.log(request);
		if (request.url.includes('upload')) return next.handle(request);
		let body = {
			...(request.body as Record<string, unknown>)
		};
		if (!request.url.includes('login')) {
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
