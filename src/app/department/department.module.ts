import { NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentComponent } from './department.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [DepartmentComponent, AddDepartmentComponent],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		DepartmentRoutingModule,
		MatTableModule,
		MatButtonModule,
		MatIconModule,
		MatPaginatorModule,
		MatSortModule,
		MatFormFieldModule,
		MatInputModule
	]
})
export class DepartmentModule {}
