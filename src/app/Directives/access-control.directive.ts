import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[accessControl]'
})
export class AccessControlDirective {

  @Input("moduleType") moduleType: string;
  @Input("accessType") accessType: string;
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    console.log('AccessControlDirective');
    
    this.elementRef.nativeElement.style.display = "none";
    this.checkAccess();
  }
   checkAccess() {
    const accessControls = [
    {
      "module_name": "users",
      "create_action": true,
      "read_action": true,
      "update_action": true,
      "delete_action": false
    },
    {
      "module_name": "articles",
      "create_action": true,
      "read_action": true,
      "update_action": false,
      "delete_action": false
    }
  ]

    const module: any = accessControls.find(access => access.module_name.toLowerCase() === this.moduleType.toLowerCase());
    this.elementRef.nativeElement.style.display = module[this.accessType] ? "block" : "none";
  }

}
