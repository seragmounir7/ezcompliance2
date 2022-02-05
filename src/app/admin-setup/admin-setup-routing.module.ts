import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminSetupComponent } from './admin-setup.component';

const routes: Routes = [
	{
		path: '',
		component: AdminSetupComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AdminSetupRoutingModule {}
