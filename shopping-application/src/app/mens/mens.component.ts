import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddPersonDialogComponent } from './add-person-dialog/add-person-dialog.component';
import { filter } from 'rxjs/operators';
import { ToastrManager } from 'ng6-toastr-notifications';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { StepperDialogComponent } from './stepper-dialog/stepper-dialog.component';
import { Person } from '../person.model';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-mens',
  templateUrl: './mens.component.html',
  styleUrls: ['./mens.component.scss']
})

export class MensComponent implements OnInit {

    person: Person;
    persons: Person[];
    displayedColumns: string[] = ['Select',
                                  'Id',
                                  'FirstName',
                                  'LastName',
                                  'Email',
                                  'BirthDate',
                                  'InfoRecord',
                                  'UpdateRecord',
                                  'DeleteRecord'
                                ];
    createDialogRef: MatDialogRef<AddPersonDialogComponent>;
    deleteDialogRef: MatDialogRef<ConfirmationDialogComponent>;
    infoDialogRef: MatDialogRef<StepperDialogComponent>;
    checkedPersons: string[] = [];
    index: number;

    constructor(private personService: PersonService,
                private dialog: MatDialog,
                private toaster: ToastrManager) {}

    ngOnInit() {
        this.loadTable();
    }

    loadTable() {
        this.personService.getPerson().subscribe((data) => {
            this.persons = data;
            console.log(typeof(data));
            console.log(data);
        });
    }

    onCreate() {
        this.createDialogRef = this.dialog.open(AddPersonDialogComponent);
        this.createDialogRef.afterClosed().pipe(filter(data => data)).subscribe((data) => {
            console.log(data);
            this.persons.push(data);
            console.log(...this.persons);
            this.personService.createPerson(data).subscribe(() => {
                console.log('post request has been send');
            });
            this.persons = [...this.persons];
            this.toaster.successToastr('Record Added!');
        });
    }

    onDelete(id: string, index: number) {
        this.deleteDialogRef = this.dialog.open(ConfirmationDialogComponent);
        this.deleteDialogRef.afterClosed().pipe(filter(data => data)).subscribe((data) => {
            if (data) {
                console.log(id);
                this.persons.splice(index, 1);
                this.persons = [...this.persons];
                this.toaster.successToastr('Record is deleted !');
            }
        });
    }

    onUpdate(persons: Person, index: number) {
        console.log(persons);
        this.createDialogRef = this.dialog.open(AddPersonDialogComponent, {
            data: {
               persons
            }
        });
        this.createDialogRef.afterClosed().pipe(filter(data => data)).subscribe((data) => {
            this.person = this.persons[index];
            this.person = data;
            this.persons[index] = this.person;
            this.persons = [...this.persons];
        });
    }

    selectedRecords(id: string) {
        this.checkedPersons.push(id);
    }


    deleteAll() {
        let checkedPerson: any;
        for (checkedPerson of this.checkedPersons) {
            this.index = this.persons.findIndex(persons => persons.id === checkedPerson);
            this.persons.splice(this.index, 1);
        }
        this.checkedPersons = [];
        this.persons = [...this.persons];
    }

    infoDialog(persons) {
        this.infoDialogRef = this.dialog.open(StepperDialogComponent, {
            data: {
                persons
            }
        });
    }
}
