import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData, CommonModule ,HashLocationStrategy, LocationStrategy, DatePipe} from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';
import { DndModule } from 'ngx-drag-drop';
import { DynamicFormComponent } from './views/dynamic-form/dynamic-form.component';
import { ChartsModule } from 'ng2-charts';
import { AgmCoreModule } from '@agm/core';
import { SignaturePadModule } from 'angular2-signaturepad';
import { FormsComponent } from './views/dynamic-form/forms/forms.component';
import { AddFormComponent } from './views/dynamic-form/forms/add-form/add-form.component';
// import { ViewFormsComponent } from './views/dynamic-form/categories/view-forms/view-forms.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { TextareaAutoresizeDirective } from './Directives/textarea-autoresize.directive';
import { SpinnerInterceptor } from './interceptor/spinner.interceptor';
import {NgxMatTimepickerModule} from 'ngx-mat-timepicker';

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
    UserDropdownMenuComponent,
    DynamicFormComponent,
    FormsComponent,
    AddFormComponent,
    // ViewFormsComponent,
    NotFoundPageComponent,
    TextareaAutoresizeDirective,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    FormsModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CommonModule,
    SignaturePadModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    NgbModule,
    NgxMatTimepickerModule,
    HttpClientModule,
    DndModule,
    //   DxButtonModule,
    ChartsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAjf0hShAAp6Na6Cd9YJ600hc17DqjS-hM',
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    TextareaAutoresizeDirective,
     { provide: LocationStrategy, 
      useClass: HashLocationStrategy },
      {
        provide:HTTP_INTERCEPTORS,
        useClass:SpinnerInterceptor,
        multi:true
      },
      DatePipe
    ],
  bootstrap: [AppComponent],
})
export class AppModule { }
