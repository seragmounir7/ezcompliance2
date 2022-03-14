import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientAdminListComponent } from './client-admin-list/client-admin-list.component';
import { TableDetails } from './table-details.enum';

const routes: Routes = [
	{
		path: `${TableDetails.clientList}`,
		component: ClientAdminListComponent
	},
	{
		path: `${TableDetails.clientList}/:value/:id`,
		component: ClientAdminListComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class SuperAdminRoutingModule {}
