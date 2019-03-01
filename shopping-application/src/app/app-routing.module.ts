import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    // { path: 'home', component: HomeComponent, children: [
        //     { path: 'offers', component: OffersComponent },
        //     { path: 'mens', component: MensComponent},
        //     { path: 'womens', component: WomensComponent}
        // ]}
        { path: '', redirectTo: 'login', pathMatch: 'full'},
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
