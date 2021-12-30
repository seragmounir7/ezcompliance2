import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SavedFormsRoutingModule } from './saved-forms-routing.module';
import { SavedFormsComponent } from './saved-forms.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [SavedFormsComponent],
  imports: [
    CommonModule,
    SharedModule,
    SavedFormsRoutingModule
  ]
})
export class SavedFormsModule { }
