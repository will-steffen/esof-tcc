import './utils/string';
import './utils/array';
import './utils/date';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BlockUIModule } from 'ng-block-ui';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { ConfirmationService } from 'primeng/api';
import { CalendarModule } from 'primeng/calendar';

import { AppComponent } from './app.component';

import { AppRouting } from './app-routing';
import { HomePage } from './pages/home/home.page';
import { LoginPage } from './pages/login/login.page';
import { LayoutPage } from './pages/layout/layout.page';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { ServiceHandler } from './handlers/service.handler';
import { AlertHandler } from './handlers/alert.handler';
import { FormInputComponent } from './components/form-input/form-input.component';
import { TableComponent } from './components/table/table.component';
import { UserPage } from './pages/user/user.page';
import { LogHandler } from './handlers/log.handler';
import { BlockHandler } from './handlers/block.handler';
import { I18n } from './i18n';
import { FilterComponent } from './components/filter/filter.component';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { InstructorPage } from './pages/instructor/instructor.page';
import { CustomerPage } from './pages/customer/customer.page';
import { GroupClassPage } from './pages/group-class/group-class.page';
import { PageRouteService } from './services/page-route.service';
import { BasePageDeps } from './pages/base-page-deps';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { FormDialogComponent } from './components/form-dialog/form-dialog.component';
import { InstructorService } from './services/instructor.service';



@NgModule({
  declarations: [
    AppComponent,
    FormInputComponent,
    TableComponent,
    FilterComponent,
    PageTitleComponent,
    FormDialogComponent,
    
    HomePage,
    LoginPage,
    LayoutPage,
    UserPage,
    CustomerPage,
    InstructorPage,
    GroupClassPage
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(AppRouting),
    BlockUIModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),  
    FontAwesomeModule,
    ConfirmDialogModule,
    DialogModule,
    TableModule,
    PaginatorModule,
    CalendarModule
  ],
  providers: [
    ConfirmationService,
    BasePageDeps,
    
    AuthService,
    UserService,
    PageRouteService,
    InstructorService,

    I18n,
    ServiceHandler,
    AlertHandler,
    LogHandler,
    BlockHandler
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
