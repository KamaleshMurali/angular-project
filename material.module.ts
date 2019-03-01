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
        MatStepperModule
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
        MatStepperModule
    ]
})

export class MaterialModule { }
