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
    addDialogRef: MatDialogRef<AddPersonDialogComponent>;
    deleteDialogRef: MatDialogRef<ConfirmationDialogComponent>;
    infoDialogRef: MatDialogRef<StepperDialogComponent>;
    checkedPersons: string[] = [];
    index: number;

    constructor(private personService: PersonService,
                private dialog: MatDialog,
                private toaster: ToastrManager) {}

    ngOnInit() {
        this.personService.getPerson().subscribe((data) => {
            this.persons = data;
            // this.persons.push(data);
            // this.persons = JSON.parse(JSON.stringify(data));
            console.log(typeof(data));
            console.log(data);
        });
    }

    addDialog() {
        this.addDialogRef = this.dialog.open(AddPersonDialogComponent);
        this.addDialogRef.afterClosed().pipe(filter(data => data)).subscribe((data) => {
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

    onDelete(id: any, index: any) {
        this.deleteDialogRef = this.dialog.open(ConfirmationDialogComponent);
        this.deleteDialogRef.afterClosed().pipe(filter(data => data)).subscribe((data) => {
            if (data) {
                console.log(id);
                console.log('index' + index);
                this.persons.splice(index, 1);
                this.persons = [...this.persons];
                this.toaster.successToastr('Record is deleted !');
            }
        });
    }

    updateDialog(persons, index) {
        console.log(persons);
        this.addDialogRef = this.dialog.open(AddPersonDialogComponent, {
            data: {
               persons
            }
        });
        this.addDialogRef.afterClosed().pipe(filter(data => data)).subscribe((data) => {
            console.log(data);
            console.log(index);
            this.person = this.persons[index];
            console.log(this.person);
            this.person = data;
            this.persons[index] = this.person;
            this.persons = [...this.persons];
        });
    }

    selectedRecord($event, index) {
        this.checkedPersons.push(index);
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
