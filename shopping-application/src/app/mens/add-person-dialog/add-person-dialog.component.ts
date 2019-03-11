import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-person-dialog',
  templateUrl: './add-person-dialog.component.html',
  styleUrls: ['./add-person-dialog.component.scss']
})
export class AddPersonDialogComponent implements OnInit {

    form: FormGroup;
    formName: string;
    action: string;

    constructor(private formBuilder: FormBuilder,
                private dialogRef: MatDialogRef<AddPersonDialogComponent>,
                @Inject(MAT_DIALOG_DATA) private prePopulateData) { }

    ngOnInit() {
        this.formData();
    }

    submit(form) {
        console.log(this.form.value);
        this.dialogRef.close(form.value);
    }

    formData() {
        if (this.prePopulateData) {
            this.formName = 'Update Person';
            this.action = 'Update';
            this.form = this.formBuilder.group({
                id: this.prePopulateData.persons.id ? this.prePopulateData.persons.id : '',
                firstName: this.prePopulateData.persons.firstName ? this.prePopulateData.persons.firstName : '',
                lastName: this.prePopulateData.persons.lastName ? this.prePopulateData.persons.lastName : '',
                email: this.prePopulateData.persons.email ? this.prePopulateData.persons.email : '',
                birthDate: this.prePopulateData.persons.birthDate ? this.prePopulateData.persons.birthDate : ''
            });
            console.log(this.prePopulateData.persons.birthDate);
            // this.form.controls.id.disable();
        } else {
            this.formName = 'Add Person';
            this.action = 'Add';
            this.form = this.formBuilder.group({
                id: ['', Validators.required],
                firstName: ['', Validators.required],
                lastName: ['', Validators.required],
                email: ['', Validators.required],
                birthDate: ['', Validators.required]
            });
        }
    }
}
