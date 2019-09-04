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



@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    LoginPage,
    LayoutPage
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
    DialogModule
  ],
  providers: [
    ConfirmationService,
    
    AuthService,
    UserService,

    ServiceHandler,
    AlertHandler
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
