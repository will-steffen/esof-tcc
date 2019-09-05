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



@NgModule({
  declarations: [
    AppComponent,
    FormInputComponent,
    TableComponent,
    FilterComponent,
    
    HomePage,
    LoginPage,
    LayoutPage,
    UserPage
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
  ],
  providers: [
    ConfirmationService,
    
    AuthService,
    UserService,

    I18n,
    ServiceHandler,
    AlertHandler,
    LogHandler,
    BlockHandler
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
