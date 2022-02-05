import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RoleManagementComponent } from './role-management.component';

const routes: Routes = [{ path: '', component: RoleManagementComponent }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class RoleManagementRoutingModule {}
