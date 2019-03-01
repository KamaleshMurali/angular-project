import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WomensComponent } from './womens.component';

const womensRoutes: Routes = [
    { path: '', component: WomensComponent }
];
@NgModule({
    imports: [RouterModule.forChild(womensRoutes)],
    exports: [RouterModule]
})
export class WomensRoutingModule {}
