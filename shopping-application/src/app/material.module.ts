import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule, MatCard} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  imports: [
        MatButtonModule,
        MatInputModule,
        MatToolbarModule,
        MatButtonToggleModule,
        MatCheckboxModule,
        MatTabsModule,
        MatIconModule,
        MatTableModule,
        MatDialogModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatStepperModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatCardModule,
        MatTooltipModule
    ],
  exports: [
        MatButtonModule,
        MatInputModule,
        MatToolbarModule,
        MatButtonToggleModule,
        MatCheckboxModule,
        MatTabsModule,
        MatIconModule,
        MatTableModule,
        MatDialogModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatStepperModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatCardModule,
        MatTooltipModule
    ]
})

export class MaterialModule { }
