import {
	AfterViewInit,
	InjectableType,
	Injector,
	ɵComponentType,
	ɵDirectiveType
} from '@angular/core';
import { PipeType } from '@ngneat/until-destroy/lib/ivy';
import { NgxSpinnerService } from 'ngx-spinner';
import { ComponentType } from 'ngx-toastr';
import { AppInjector } from './app-injector';

export function StopSpinner(): ClassDecorator {
	return (type: any) => {
		decorateProviderDirectiveOrComponent(type);

		markAsDecorated(type);
	};
}

function decorateProviderDirectiveOrComponent<T>(
	type: InjectableType<T> | ɵDirectiveType<T> | ComponentType<T>
): void {
	type.prototype.ngAfterViewInit = decorateNgAfterViewInit(
		type.prototype.ngAfterViewInit
	);
}

export const DECORATOR_APPLIED: unique symbol = Symbol('__decoratorApplied');

export function markAsDecorated<T>(
	type:
		| InjectableType<T>
		| PipeType<T>
		| ɵDirectiveType<T>
		| ɵComponentType<T>
): void {
	// Store this property on the prototype if it's an injectable class, component or directive.
	// We will be able to handle class extension this way.
	type.prototype[DECORATOR_APPLIED] = true;
}

function decorateNgAfterViewInit(
	ngAfterViewInit: (() => void) | null | undefined
) {
	return function (this: any) {
		// Invoke the original `ngOnDestroy` if it exists
		ngAfterViewInit && ngAfterViewInit.call(this);
		const spinner = AppInjector.get(NgxSpinnerService);
		spinner.hide('primary', 2000);
	};
}
