import { ToolboxTalkComponent } from './views/forms/toolbox-talk/toolbox-talk.component';
import { SiteInspectionComponent } from './views/forms/site-inspection/site-inspection.component';

import { RiskAssessmentSWMSComponent } from './views/forms/risk-assessment-swms/risk-assessment-swms.component';
import { PrintLayoutComponent } from './print-layout/print-layout.component';
import { SavedFormsModule } from './views/saved-forms/saved-forms.module';
import { LogicalFormAccessGuard } from './RouteGuard/logical-form-access.guard';
import { DynamicFormAccessGuard } from './RouteGuard/dynamic-form-access.guard';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { BlankComponent } from './views/blank/blank.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './views/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { AuthGuard } from './utils/guards/auth.guard';
import { NonAuthGuard } from './utils/guards/non-auth.guard';
import { IncidentReportComponent } from './views/forms/incident-report/incident-report.component';
import { HazardReportComponent } from './views/forms/hazard-report/hazard-report.component';
import { FirstTimeLoginGuard } from './RouteGuard/first-time-login.guard';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';

const routes: Routes = [
	{ path: '', component: LoginComponent, canActivate: [NonAuthGuard] },
	{
		path: 'print',
		outlet: 'print',
		component: PrintLayoutComponent,
		children: [
			{
				path: 'riskAssessSWMS/:id',
				component: RiskAssessmentSWMSComponent
			},
			{ path: 'siteInspect/:id', component: SiteInspectionComponent },
			{ path: 'toolboxTalk/:id', component: ToolboxTalkComponent },
			{ path: 'incidentRep/:id', component: IncidentReportComponent },
			{ path: 'hazardRep/:id', component: HazardReportComponent }
		]
	},
	// {
	//   path:'', redirectTo:'setup', pathMatch:"`"
	// },
	{
		path: 'setup',
		canActivate: [FirstTimeLoginGuard],
		loadChildren: () =>
			import('./admin-setup/admin-setup.module').then(
				(m) => m.AdminSetupModule
			)
	},
	{
		path: 'admin',
		component: MainComponent,
		canActivate: [AuthGuard],
		canActivateChild: [AuthGuard],
		children: [
			// { path: '', component: LoginComponent },

			{ path: '', component: DashboardComponent },
			{ path: 'profile', component: ProfileComponent },
			{ path: 'blank', component: BlankComponent },
			{
				path: 'forms',
				loadChildren: () =>
					import('./views/forms/forms.module').then(
						(m) => m.FormsModule1
					),
				canActivate: [LogicalFormAccessGuard]
			},
			{
				path: 'dynamic',
				loadChildren: () =>
					import('./views/dynamic-form/dynamic-form.module').then(
						(m) => m.DynamicFormModule
					),
				canActivate: [LogicalFormAccessGuard]
			},
			{
				path: 'registration',
				loadChildren: () =>
					import('./registration/registration.module').then(
						(m) => m.RegistrationModule
					)
			},
			{
				path: 'landingPageInfo',
				loadChildren: () =>
					import('./landing-page-info/landing-page-info.module').then(
						(m) => m.LandingPageInfoModule
					)
			},
			{
				path: 'siteInfo',
				loadChildren: () =>
					import('./site-info/site-info.module').then(
						(m) => m.SiteInfoModule
					),
				canActivate: [DynamicFormAccessGuard]
			},
			{
				path: 'subscrpt',
				loadChildren: () =>
					import('./subscription/subscription.module').then(
						(m) => m.SubscriptionModule
					),
				canActivate: [DynamicFormAccessGuard]
			},
			{
				path: 'confiLogi',
				loadChildren: () =>
					import('./views/confi-logi/confi-logi.module').then(
						(m) => m.ConfiLogiModule
					),
				canActivate: [DynamicFormAccessGuard]
			},
			{
				path: 'stateRel',
				loadChildren: () =>
					import('./views/state-rel/state-rel.module').then(
						(m) => m.StateRelModule
					),
				canActivate: [DynamicFormAccessGuard]
			},
			{
				path: 'roleMangement',
				loadChildren: () =>
					import('./role-management/role-management.module').then(
						(m) => m.RoleManagementModule
					),
				canActivate: [DynamicFormAccessGuard]
			},
			{
				path: 'savedForms',
				loadChildren: () =>
					import('./views/saved-forms/saved-forms.module').then(
						(m) => m.SavedFormsModule
					),
				canActivate: [LogicalFormAccessGuard]
			}
		]
	},
	{ path: 'login', component: LoginComponent, canActivate: [NonAuthGuard] },
	{
		path: 'resetPassword',
		component: ResetPasswordComponent,
		canActivate: [NonAuthGuard]
	},
	{
		path: 'forgotPassword',
		component: ForgotPasswordComponent,
		canActivate: [NonAuthGuard]
	},
	{
		path: 'register',
		component: RegisterComponent,
		canActivate: [NonAuthGuard]
	},

	{
		path: '**',
		component: NotFoundPageComponent /* redirectTo: 'admin', pathMatch: 'full' */
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			relativeLinkResolution: 'legacy',
			useHash: true
		})
	],
	exports: [RouterModule]
})
export class AppRoutingModule {}
