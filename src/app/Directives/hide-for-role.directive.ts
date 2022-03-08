import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
	selector: '[appHideForRole]'
})
export class HideForRoleDirective {
	constructor(
		private viewContainerRef: ViewContainerRef,
		private templateRef: TemplateRef<any>
	) {}

	@Input() set(hideForRoles: Array<string>) {
		const hideFor = hideForRoles || [];
		if (hideFor.length > 0) {
			this.roleChecker(hideFor);
		} else {
			this.viewContainerRef.createEmbeddedView(this.templateRef);
		}
	}
	roleChecker(hideFor: Array<string>) {
		const userRoles: Array<string> = ['admin', 'product owner'];

		if (userRoles.length === 0) {
			this.viewContainerRef.clear();
		} else {
			const index = userRoles.findIndex(
				(role) => hideFor.indexOf(role) !== -1
			);
			return index < 0
				? this.viewContainerRef.createEmbeddedView(this.templateRef)
				: this.viewContainerRef.clear();
		}
	}
}
