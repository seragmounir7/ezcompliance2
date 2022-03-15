import {
	Directive,
	ElementRef,
	Input,
	TemplateRef,
	ViewContainerRef
} from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../utils/services/auth.service';
import { RoleManagementService } from '../utils/services/role-management.service';
import {
	AccessArr,
	AccessControlInput
} from '../utils/types/AccessResponceTypes';
import { Designation } from '../utils/types/Designation.enum';

@Directive({
	selector: '[accessControl]'
})
export class AccessControlDirective {
	@Input() set accessControl(accessControl: AccessControlInput) {
		this.formName = accessControl.formName;
		this.accessType = accessControl.accessType;
	}
	getAccessByUserId$: Observable<AccessArr[]>;
	@Input('moduleType') formName: string;
	@Input('accessType') accessType: string;
	constructor(
		private templateRef: TemplateRef<any>,
		private viewContainer: ViewContainerRef,
		private elementRef: ElementRef,
		private role: RoleManagementService,
		private authService: AuthService
	) {}

	ngOnInit() {
		this.authService.loginData$.subscribe((res) => {
			if (res?.designation === Designation.user) {
				this.viewContainer.clear();
				this.role.accessArrObs$.subscribe((accessArr) => {
					if (accessArr.length > 0) this.checkAccess(accessArr);
				});
			} else {
				this.viewContainer.createEmbeddedView(this.templateRef);
			}
			// if (res.designation === Designation.superAdmin || res.designation === Designation.clientAdmin) {
			//   this.viewContainer.createEmbeddedView(this.templateRef)
			// }
		});

		// this.elementRef.nativeElement.style.display = 'none';
	}
	checkAccess(access: AccessArr[]) {
		const accessControls = access;
		// const accessControls = [
		// 	{
		// 		module_name: 'users',
		// 		create_action: true,
		// 		read_action: true,
		// 		update_action: true,
		// 		delete_action: false
		// 	},
		// 	{
		// 		module_name: 'articles',
		// 		create_action: true,
		// 		read_action: true,
		// 		update_action: false,
		// 		delete_action: false
		// 	}
		// ];

		const module: any = accessControls.find(
			(access) =>
				access.formName.toLowerCase() === this.formName.toLowerCase()
		);
		// this.elementRef.nativeElement.style.display = module[this.accessType]
		// 	? 'block'
		// 	: 'none';
		module[this.accessType]
			? this.viewContainer.createEmbeddedView(this.templateRef)
			: this.viewContainer.clear();
	}
}
