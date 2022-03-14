import { Component, OnInit, Injectable } from '@angular/core';
import {
	MatSnackBar,
	MatSnackBarRef,
	TextOnlySnackBar
} from '@angular/material/snack-bar';

@Injectable({
	providedIn: 'root'
})
export class SnackbarService {
	constructor(private snackbar: MatSnackBar) {}

	openSnackBar(
		msg: string,
		action = 'close'
	): MatSnackBarRef<TextOnlySnackBar> {
		return this.snackbar.open(msg, action, {
			duration: 3000,
			horizontalPosition: 'right'
			// verticalPosition:'top'
		});
	}
}

import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'selector-name',
	template: `<span class="example-pizza-party"> test </span> `,
	styles: ['']
})
export class NameComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}
