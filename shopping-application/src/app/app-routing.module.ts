import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './login/auth-guard.service';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full'},
    // { path: 'home', canActivate: [ AuthGuard ], component: HomeComponent, children: [
    { path: 'home', component: HomeComponent, children: [
        { path: 'offers', loadChildren: './offers/offers.module#OffersModule'},
        { path: 'mens', loadChildren: './mens/mens.module#MensModule'},
        { path: 'womens', loadChildren: './womens/womens.module#WomensModule'}
    ]},
    { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
