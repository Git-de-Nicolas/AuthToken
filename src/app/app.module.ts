import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RegisterComponent} from './component/register/register.component';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from './component/login/login.component';
import {HomeComponent} from './component/home/home.component';
import {MyAccountComponent} from './component/my-account/my-account.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HttpTokenInterceptor} from './interceptor/http-token.interceptor';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ListeArtisteComponent} from './component/liste-artiste/liste-artiste.component';
import {AddArtisteComponent} from './component/add-artiste/add-artiste.component';
import {NgxUiLoaderModule} from 'ngx-ui-loader';
import {EditArtisteComponent} from './component/edit-artiste/edit-artiste.component';
import {ListeConcertComponent} from './component/liste-concert/liste-concert.component';
import {AddConcertComponent} from './component/add-concert/add-concert.component';
import {EditConcertComponent} from './component/edit-concert/edit-concert.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    MyAccountComponent,
    ListeArtisteComponent,
    AddArtisteComponent,
    EditArtisteComponent,
    ListeConcertComponent,
    AddConcertComponent,
    EditConcertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgxUiLoaderModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpTokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
