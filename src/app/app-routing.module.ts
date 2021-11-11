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
import { ProjectsComponent } from './project/projects/projects.component';
import { ProjectAddComponent } from './project/project-add/project-add.component';
import { ProjectEditComponent } from './project/project-edit/project-edit.component';
import { ProjectDetailComponent } from './project/project-detail/project-detail.component';

import { TutorialsAddComponent } from './components/tutorials-add/tutorials-add.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialsDetailsComponent } from './components/tutorials-details/tutorials-details.component';
import { TutorialsEditComponent } from './components/tutorials-edit/tutorials-edit.component';
import { DynamicFormComponent } from './views/dynamic-form/dynamic-form.component';
import { CategoriesComponent } from './views/dynamic-form/categories/categories.component';
import { FormsComponent } from './views/dynamic-form/forms/forms.component';

const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [NonAuthGuard] },
  // {
  //   path: 'landing',
  //   loadChildren: () =>
  //     import('./front/front.module').then((m) => m.FrontModule),
  // },

  {
    path: 'admin',
    component: MainComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      // { path: '', component: LoginComponent },
      { path: '', component: DashboardComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'dynamicForm', component: DynamicFormComponent },
      { path: 'blank', component: BlankComponent },
      { path: 'examples/projects', component: ProjectsComponent },
      { path: 'examples/project/add', component: ProjectAddComponent },
      { path: 'examples/project/edit', component: ProjectEditComponent },
      { path: 'examples/project/detail', component: ProjectDetailComponent },
      { path: 'tutorials/add', component: TutorialsAddComponent },
      { path: 'tutorials', component: TutorialsListComponent },
      { path: 'tutorials/details/:id', component: TutorialsDetailsComponent },
      { path: 'tutorials/edit/:id', component: TutorialsEditComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: 'dynamicFormsList', component: FormsComponent },
      {
        path: 'forms',
        loadChildren: () =>
          import('./views/forms/forms.module').then((m) => m.FormsModule1),
      },
      {
        path: 'registration',
        loadChildren: () =>
          import('./registration/registration.module').then(
            (m) => m.RegistrationModule
          ),
      },
      {
        path: 'landingPageInfo',
        loadChildren: () =>
          import('./landing-page-info/landing-page-info.module').then(
            (m) => m.LandingPageInfoModule
          ),
      },
      { path: 'siteInfo', loadChildren: () => import('./site-info/site-info.module').then(m => m.SiteInfoModule) },
      { path: 'subscrpt', loadChildren: () => import('./subscription/subscription.module').then(m => m.SubscriptionModule) },
      { path: 'confiLogi', loadChildren: () => import('./views/confi-logi/confi-logi.module').then(m => m.ConfiLogiModule) },

    ],
  },
  { path: 'login', component: LoginComponent, canActivate: [NonAuthGuard] },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [NonAuthGuard],
  },

  { path: '**',  redirectTo: 'admin', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
