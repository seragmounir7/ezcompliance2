import { ToastrService } from 'ngx-toastr';
import { catchError, tap } from 'rxjs/operators';
import { Inject, Injectable, Injector } from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor,
	HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { HttpError } from './http-error.enum';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
	constructor(
		private _injector: Injector,
		private router: Router,
		private toastrService: ToastrService
	) {}

	intercept(
		request: HttpRequest<unknown>,
		next: HttpHandler
	): Observable<HttpEvent<unknown>> {
		const logFormat = 'background: maroon; color: white';

		return next.handle(request).pipe(
			catchError((err) => {
				if (err instanceof HttpErrorResponse) {
					switch (err.status) {
						case HttpError.BadRequest:
							console.error('%c Bad Request 400', logFormat);
							break;

						case HttpError.Unauthorized:
							console.error('%c Unauthorized 401', logFormat);
							window.location.href =
								'/login' + window.location.hash;
							break;

						case HttpError.NotFound:
							//show error toast message
							console.error('%c Not Found 404', logFormat);
							// const _toaster = this._injector.get(Toaster),
							// _router = this._injector.get(Router);
							//     this.toastrService.show({
							//     message: err.error && err.error.message ? err.error.message :
							//         err.statusText,
							//     typeId: 'error',
							//     isDismissable: true
							// });
							this.router.navigate(['']);
							break;

						case HttpError.TimeOut:
							// Handled in AnalyticserrHandler
							console.error('%c TimeOut 408', logFormat);
							break;

						case HttpError.Forbidden:
							console.error('%c Forbidden 403', logFormat);
							// const _authService = this._injector.get(AuthorizationService);
							// _authService.showForbiddenModal();
							break;

						case HttpError.InternalServerError:
							console.error('%c big bad 500', logFormat);
							break;
					}
				}
				if (err.status === 401) {
					// auto logout if 401 response returned from api
					// this.auth.logout();
					// location.reload(true);
				}

				const error = err.error.message || err.statusText;
				return throwError(error);
			})
		);
	}
}
