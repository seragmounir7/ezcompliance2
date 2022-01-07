import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicFormAccessGuard } from 'src/app/RouteGuard/dynamic-form-access.guard';
import { DynamicFormComponent } from './dynamic-form.component';
import { FormsComponent } from './forms/forms.component';
import { SavedDynamicFormDataComponent } from './saved-dynamic-form-data/saved-dynamic-form-data.component';
import { SavedDynamicFormTableComponent } from './saved-dynamic-form-data/saved-dynamic-form-table/saved-dynamic-form-table.component';

const routes: Routes = [
  { path: 'dynamicFormsList', component: FormsComponent },
  { path: 'savedDynamicForm', component: SavedDynamicFormDataComponent },
  { path: 'savedDynamicFormTable/:id', component: SavedDynamicFormTableComponent },
  { path: 'dynamicForm', component: DynamicFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicFormRoutingModule { }
