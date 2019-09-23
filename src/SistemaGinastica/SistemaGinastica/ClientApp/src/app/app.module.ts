import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { BlockUIModule } from 'ng-block-ui';
import { ToastrModule } from 'ngx-toastr';
import { ConfirmationService } from 'primeng/api';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { MultiSelectModule } from 'primeng/multiselect';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { AppRouting } from './app-routing';
import { AppComponent } from './app.component';
import { FilterComponent } from './components/filter/filter.component';
import { FormDialogComponent } from './components/form-dialog/form-dialog.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { TableComponent } from './components/table/table.component';
import { AlertHandler } from './handlers/alert.handler';
import { BlockHandler } from './handlers/block.handler';
import { LogHandler } from './handlers/log.handler';
import { ServiceHandler } from './handlers/service.handler';
import { I18n } from './i18n';
import { BasePageDeps } from './pages/base-page-deps';
import { CustomerDetailPage } from './pages/customer-detail/customer-detail.page';
import { CustomerPage } from './pages/customer/customer.page';
import { GroupClassPage } from './pages/group-class/group-class.page';
import { HomePage } from './pages/home/home.page';
import { InstructorPage } from './pages/instructor/instructor.page';
import { LayoutPage } from './pages/layout/layout.page';
import { LoginPage } from './pages/login/login.page';
import { UserPage } from './pages/user/user.page';
import { AuthService } from './services/auth.service';
import { CustomerService } from './services/customer.service';
import { InstructorService } from './services/instructor.service';
import { PageRouteService } from './services/page-route.service';
import { UserService } from './services/user.service';
import './utils/array';
import './utils/date';
import './utils/string';







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
    CustomerDetailPage,
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
    CalendarModule,
    MultiSelectModule
  ],
  providers: [
    ConfirmationService,
    BasePageDeps,

    AuthService,
    UserService,
    PageRouteService,
    InstructorService,
    CustomerService,

    I18n,
    ServiceHandler,
    AlertHandler,
    LogHandler,
    BlockHandler
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
