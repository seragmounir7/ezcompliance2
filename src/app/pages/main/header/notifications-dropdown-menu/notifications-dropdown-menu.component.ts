import {
	Component,
	OnInit,
	ViewChild,
	HostListener,
	ElementRef,
	Renderer2
} from '@angular/core';

import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-notifications-dropdown-menu',
	templateUrl: './notifications-dropdown-menu.component.html',
	styleUrls: ['./notifications-dropdown-menu.component.scss']
})
export class NotificationsDropdownMenuComponent implements OnInit {
	// @ViewChild('dropdownMenu', { static: false }) dropdownMenu;

	// @HostListener('document:click', ['$event'])
	// clickout(event) {
	//   if (!this.elementRef.nativeElement.contains(event.target)) {
	//     this.hideDropdownMenu();
	//   }
	// }

	constructor() {}
	// constructor(private elementRef: ElementRef, private renderer: Rende/rer2) {}

	ngOnInit() {}

	// toggleDropdownMenu() {
	//   if (this.dropdownMenu.nativeElement.classList.contains('show')) {
	//     this.hideDropdownMenu();
	//   } else {
	//     this.showDropdownMenu();
	//   }
	// }

	// showDropdownMenu() {
	//   this.renderer.addClass(this.dropdownMenu.nativeElement, 'show');
	// }

	// hideDropdownMenu() {
	//   this.renderer.removeClass(this.dropdownMenu.nativeElement, 'show');
	// }
}
