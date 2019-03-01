import { NgModule } from '@angular/core';
import { WomensComponent } from './womens.component';
import { CommonModule} from '@angular/common';
import { WomensRoutingModule } from './womes-routing.module';

@NgModule({
    declarations: [
        WomensComponent
    ],
    imports: [
        CommonModule,
        WomensRoutingModule
    ]
})
export class WomensModule {}
