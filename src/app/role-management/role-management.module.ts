import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { RoleManagementRoutingModule } from './role-management-routing.module';
import { RoleManagementComponent } from './role-management.component';
import { CheckboxComponent } from './checkbox/checkbox.component';



@NgModule({
  declarations: [RoleManagementComponent, CheckboxComponent],
  imports: [
    CommonModule,
    RoleManagementRoutingModule,
    SharedModule
  ]
})
export class RoleManagementModule { }
