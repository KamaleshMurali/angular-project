import { NgModule } from '@angular/core';
import { OffersComponent } from './offers.component';
import { CommonModule} from '@angular/common';
import { OffersRoutingModule } from './offers-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { OnsiteSurveyTableComponent } from './onsite-survey-table/onsite-survey-table.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
    declarations: [
        OffersComponent,
        OnsiteSurveyTableComponent
    ],
    imports: [
        CommonModule,
        OffersRoutingModule,
        MatButtonModule,
        MatExpansionModule,
        MatFormFieldModule,
        MaterialModule,
        ReactiveFormsModule,
        MatTooltipModule
    ],
    entryComponents: [ OnsiteSurveyTableComponent ]
})
export class OffersModule {}
