import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperAdminRoutingModule } from './super-admin-routing.module';

import {
	ClientAdminListComponent,
	EmpDataPipe
} from './client-admin-list/client-admin-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DirectivesModule } from '../Directives/directives.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	declarations: [ClientAdminListComponent, EmpDataPipe],
	imports: [
		CommonModule,
		SuperAdminRoutingModule,
		MatTableModule,
		MatPaginatorModule,
		MatIconModule,
		MatTooltipModule,
		DirectivesModule,
		MatButtonModule
	]
})
export class SuperAdminModule {}
