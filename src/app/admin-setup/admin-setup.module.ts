import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminSetupRoutingModule } from './admin-setup-routing.module';
import { AdminSetupComponent } from './admin-setup.component';
import { MatStepperModule } from '@angular/material/stepper';
import { RegistrationModule } from '../registration/registration.module';
import { RoleManagementModule } from '../role-management/role-management.module';

@NgModule({
	declarations: [AdminSetupComponent],
	imports: [
		CommonModule,
		AdminSetupRoutingModule,
		MatStepperModule,
		RegistrationModule,
		RoleManagementModule
	]
})
export class AdminSetupModule {}
