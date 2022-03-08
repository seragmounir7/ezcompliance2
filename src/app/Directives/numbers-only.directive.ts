import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
	selector: 'input[numbersOnly]'
})
export class NumberDirective {
	UserSummaryTaskCreator;
	constructor(private _el: ElementRef) {}

	@HostListener('input', ['$event']) onInputChange(event) {
		if (
			['porfPostalCode', 'postcode'].includes(
				this._el.nativeElement.formcontrolname
			)
		) {
			this._el.nativeElement.maxlength = 4;
		}
		const initalValue = this._el.nativeElement.value;
		this._el.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
		if (initalValue !== this._el.nativeElement.value) {
			event.stopPropagation();
		}
	}
}
