import { NgModule } from '@angular/core';
import { OffersComponent } from './offers.component';
import { CommonModule} from '@angular/common';
import { OffersRoutingModule } from './offers-routing.module';

@NgModule({
    declarations: [
        OffersComponent
    ],
    imports: [
        CommonModule,
        OffersRoutingModule
    ]
})
export class OffersModule {}
