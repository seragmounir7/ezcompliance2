import { NumberDirective } from './numbers-only.directive';
import { AppNotDirective } from './app-not.directive';
import { AccessControlDirective } from './access-control.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HideForRoleDirective } from './hide-for-role.directive';
import { TextareaAutoresizeDirective } from './textarea-autoresize.directive';
import { TitleCaseDirective } from './title-case.directive';
import { ChangeTypePipe } from './change-type.pipe';
import { CheckImgExtPipe } from './check-img-ext.pipe';
import { BackButtonDirective } from './back-button.directive';

@NgModule({
	declarations: [
		TextareaAutoresizeDirective,
		HideForRoleDirective,
		AccessControlDirective,
		AppNotDirective,
		NumberDirective,
		TitleCaseDirective,
		ChangeTypePipe,
		CheckImgExtPipe,
		BackButtonDirective
	],
	imports: [CommonModule],
	exports: [
		TextareaAutoresizeDirective,
		HideForRoleDirective,
		AccessControlDirective,
		AppNotDirective,
		NumberDirective,
		TitleCaseDirective,
		ChangeTypePipe,
		CheckImgExtPipe,
		BackButtonDirective
	]
})
export class DirectivesModule {}
