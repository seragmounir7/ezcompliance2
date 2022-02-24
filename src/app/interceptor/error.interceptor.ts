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
import { AuthService } from '../utils/services/auth.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
	constructor(
		private _injector: Injector,
		private router: Router,
		private toastrService: ToastrService,
		private authService: AuthService,
		private toast: ToastrService
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
							this.toast.error('400 Bad Request');
							console.error('%c Bad Request 400', logFormat);
							break;

						case HttpError.Unauthorized:
							console.error('%c Unauthorized 401', logFormat);
							this.toast.error('401 Unauthorized');
							this.authService.logout();
							break;

						case HttpError.NotFound:
							//show error toast message
							console.error('%c Not Found 404', logFormat);
							this.toast.error('404 Not Found');
							// const _toaster = this._injector.get(Toaster),
							// _router = this._injector.get(Router);
							//     this.toastrService.show({
							//     message: err.error && err.error.message ? err.error.message :
							//         err.statusText,
							//     typeId: 'error',
							//     isDismissable: true
							// });
							// this.router.navigate(['']);
							break;

						case HttpError.TimeOut:
							// Handled in AnalyticserrHandler
							console.error('%c TimeOut 408', logFormat);
							break;

						case HttpError.Forbidden:
							console.error('%c Forbidden 403', logFormat);
							this.toast.error('403 Forbidden');
							// const _authService = this._injector.get(AuthorizationService);
							// _authService.showForbiddenModal();
							break;

						case HttpError.InternalServerError:
							console.error('%c big bad 500', logFormat);
							break;

						case HttpError.MovedPermanently:
							console.error(
								'%c Moved Permanently 301',
								logFormat
							);
							this.toast.error(err.error.message);
							console.log(err.message, err.error.message);
							break;
					}
				}

				const error = err.error.message || err.statusText;
				return throwError(error);
			})
		);
	}
}
