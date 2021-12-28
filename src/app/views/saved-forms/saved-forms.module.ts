import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SavedFormsRoutingModule } from './saved-forms-routing.module';
import { SavedFormsComponent } from './saved-forms.component';


@NgModule({
  declarations: [SavedFormsComponent],
  imports: [
    CommonModule,
    SavedFormsRoutingModule
  ]
})
export class SavedFormsModule { }
