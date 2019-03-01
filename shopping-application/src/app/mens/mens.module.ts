import { NgModule } from '@angular/core';
import { MensComponent } from './mens.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { StepperDialogComponent } from './stepper-dialog/stepper-dialog.component';
import { AddPersonDialogComponent } from './add-person-dialog/add-person-dialog.component';
import { MensRoutingModule } from './mens-routing.module';
import { MaterialModule } from '../material.module';

@NgModule({
    declarations: [
        MensComponent,
        AddPersonDialogComponent,
        ConfirmationDialogComponent,
        StepperDialogComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MensRoutingModule,
        MaterialModule
    ],
    entryComponents: [
        AddPersonDialogComponent,
        ConfirmationDialogComponent,
        StepperDialogComponent
    ]
})
export class MensModule {}
