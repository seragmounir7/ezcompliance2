import { Injectable } from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor,
	HttpResponse,
	HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
	constructor(private spinner: NgxSpinnerService) {}

	intercept(
		request: HttpRequest<unknown>,
		next: HttpHandler
	): Observable<HttpEvent<unknown>> {
		//console.log('spinner====================>', request.url);

		void this.spinner.show();
		return next.handle(request).pipe(
			map((event: HttpEvent<unknown>) => {
				if (event instanceof HttpResponse) {
					// console.log('spinnerhide====================>', request.url);
					void this.spinner.hide();
				}
				return event;
			}),
			catchError((err: HttpErrorResponse) => {
				if (err) {
					void this.spinner.hide();
				}
				return throwError(err);
			})
		);
	}
}
