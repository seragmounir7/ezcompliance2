import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHideForRole]'
})
export class HideForRoleDirective {

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {
    console.log('appHideForRole called');
    
   }

  @Input() set(hideForRoles: Array<string>) {
    console.log('appHideForRole called');
    const hideFor = hideForRoles || [];
    if (hideFor.length > 0) {
      this.roleChecker(hideFor);
    } else {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }
  roleChecker(hideFor: Array<string>) {
    const userRoles: Array<string> = ['admin', 'product owner'];
    console.log('directive',hideFor,userRoles)
    if (userRoles.length === 0) {
      this.viewContainerRef.clear();
    } else {
      const index = userRoles.findIndex((role) => hideFor.indexOf(role) !== -1);
      return index < 0
        ? this.viewContainerRef.createEmbeddedView(this.templateRef)
        : this.viewContainerRef.clear();
    }
  }

}
