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
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
	declarations: [ClientAdminListComponent, EmpDataPipe],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		SuperAdminRoutingModule,
		MatTableModule,
		MatPaginatorModule,
		MatIconModule,
		MatTooltipModule,
		DirectivesModule,
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule
	]
})
export class SuperAdminModule {}
