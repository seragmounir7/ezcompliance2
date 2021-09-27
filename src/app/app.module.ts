import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData, CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeEn from '@angular/common/locales/en';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainComponent } from './pages/main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './pages/main/header/header.component';
import { FooterComponent } from './pages/main/footer/footer.component';
import { MenuSidebarComponent } from './pages/main/menu-sidebar/menu-sidebar.component';
import { RegisterComponent } from './pages/register/register.component';
import { MessagesDropdownMenuComponent } from './pages/main/header/messages-dropdown-menu/messages-dropdown-menu.component';
import { NotificationsDropdownMenuComponent } from './pages/main/header/notifications-dropdown-menu/notifications-dropdown-menu.component';
import { UserDropdownMenuComponent } from './pages/main/header/user-dropdown-menu/user-dropdown-menu.component';

import { BlankComponent } from './views/blank/blank.component';
import { ProfileComponent } from './views/profile/profile.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';

import { AppButtonComponent } from './components/app-button/app-button.component';

import { ProjectsComponent } from './project/projects/projects.component';
import { ProjectAddComponent } from './project/project-add/project-add.component';
import { ProjectEditComponent } from './project/project-edit/project-edit.component';
import { ProjectDetailComponent } from './project/project-detail/project-detail.component';
import { SortableDirective } from './project/sortable.directive';

import { TutorialsAddComponent } from './components/tutorials-add/tutorials-add.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialsDetailsComponent } from './components/tutorials-details/tutorials-details.component';
import { TutorialsEditComponent } from './components/tutorials-edit/tutorials-edit.component';
import { DndModule } from 'ngx-drag-drop';
import { DynamicFormComponent } from './views/dynamic-form/dynamic-form.component';
import { DxButtonModule } from 'devextreme-angular';
import { ChartsModule } from 'ng2-charts';
import { AgmCoreModule } from '@agm/core';
import { Dynamic1Component } from './dynamic1/dynamic1.component';
import { SignaturePadModule } from 'angular2-signaturepad';

registerLocaleData(localeEn, 'en-EN');

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    MenuSidebarComponent,
    BlankComponent,
    ProfileComponent,
    RegisterComponent,
    DashboardComponent,
    MessagesDropdownMenuComponent,
    NotificationsDropdownMenuComponent,
    AppButtonComponent,
    UserDropdownMenuComponent,
    ProjectsComponent,
    ProjectAddComponent,
    ProjectEditComponent,
    ProjectDetailComponent,
    TutorialsAddComponent,
    TutorialsListComponent,
    TutorialsDetailsComponent,
    TutorialsEditComponent,
    SortableDirective,
    DynamicFormComponent,
    Dynamic1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CommonModule,SignaturePadModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    NgbModule,
    HttpClientModule,
    DndModule,
    DxButtonModule,
    ChartsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAjf0hShAAp6Na6Cd9YJ600hc17DqjS-hM'
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
