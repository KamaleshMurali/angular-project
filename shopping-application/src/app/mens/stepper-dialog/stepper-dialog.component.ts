import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Person } from 'src/app/person.model';

@Component({
  selector: 'app-stepper-dialog',
  templateUrl: './stepper-dialog.component.html',
  styleUrls: ['./stepper-dialog.component.scss']
})
export class StepperDialogComponent implements OnInit {

    personForm: FormGroup;
    addressForm: FormGroup;
    person: Person;

    constructor(private formBuilder: FormBuilder,
                private stepperDialogRef: MatDialogRef<StepperDialogComponent>,
                @Inject(MAT_DIALOG_DATA) private prePopulateData) { }

    ngOnInit() {
        this.populateDetails();
    }

    populateDetails() {
        this.personForm = this.formBuilder.group({});
        this.addressForm = this.formBuilder.group({});
        console.log(this.prePopulateData.persons);
        this.person = this.prePopulateData.persons;
    }
}
