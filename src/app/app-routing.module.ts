import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {MyAccountComponent} from './component/my-account/my-account.component';
import {AuthGuard} from './guard/auth.guard';
import {LoginComponent} from './component/login/login.component';
import {RegisterComponent} from './component/register/register.component';
import {ListeArtisteComponent} from './component/liste-artiste/liste-artiste.component';
import {AddArtisteComponent} from './component/add-artiste/add-artiste.component';
import {EditArtisteComponent} from './component/edit-artiste/edit-artiste.component';
import {ListeConcertComponent} from './component/liste-concert/liste-concert.component';
import {AddConcertComponent} from './component/add-concert/add-concert.component';
import {EditConcertComponent} from './component/edit-concert/edit-concert.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'my-account', component: MyAccountComponent, canActivate: [AuthGuard]},
  {path: 'listeArtiste', component: ListeArtisteComponent},
  {path: 'addArtiste', component: AddArtisteComponent, canActivate: [AuthGuard]},
  {path: 'editArtiste/:id', component: EditArtisteComponent},
  {path: 'listeConcert', component: ListeConcertComponent},
  {path: 'addConcert', component: AddConcertComponent, canActivate: [AuthGuard]},
  {path: 'editConcert/:id', component: EditConcertComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
