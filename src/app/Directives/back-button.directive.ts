import { Directive, ElementRef, HostListener } from '@angular/core';
import { NavigationService } from '../services/navigation.service';

@Directive({
	selector: '[backbutton]'
})
export class BackButtonDirective {
	constructor(
		private navigationService: NavigationService,
		private el: ElementRef
	) {}

	@HostListener('click') onClick() {
		this.navigationService.goBack();
	}
}
