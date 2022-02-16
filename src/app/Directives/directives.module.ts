import { NumberDirective } from './numbers-only.directive';
import { AppNotDirective } from './app-not.directive';
import { AccessControlDirective } from './access-control.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HideForRoleDirective } from './hide-for-role.directive';
import { TextareaAutoresizeDirective } from './textarea-autoresize.directive';
import { TitleCaseDirective } from './title-case.directive';

@NgModule({
	declarations: [
		TextareaAutoresizeDirective,
		HideForRoleDirective,
		AccessControlDirective,
		AppNotDirective,
		NumberDirective,
		TitleCaseDirective
	],
	imports: [CommonModule],
	exports: [
		TextareaAutoresizeDirective,
		HideForRoleDirective,
		AccessControlDirective,
		AppNotDirective,
		NumberDirective,
		TitleCaseDirective
	]
})
export class DirectivesModule {}
