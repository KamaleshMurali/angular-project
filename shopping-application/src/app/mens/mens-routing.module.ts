import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MensComponent } from './mens.component';

const mensRoutes: Routes = [
    { path: '', component: MensComponent }
];
@NgModule({
    imports: [RouterModule.forChild(mensRoutes)],
    exports: [RouterModule]
})
export class MensRoutingModule {}
