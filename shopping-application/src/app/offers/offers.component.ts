import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PersonService } from '../person.service';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { OnsiteSurveyTableComponent } from './onsite-survey-table/onsite-survey-table.component';


@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

    firstName: string;
    form: FormGroup;
    age: number;
    collectedDetails: string[];
    tableDialogRef: MatDialogRef<OnsiteSurveyTableComponent>;
    onsiteSurveyDetails = {
        site: 'Aberhart Centre Care labs',
        assessmentName: 'Attestation',
        startDate: '22-03-2019',
        endDate: '21-05-2019',
        criteria: [
          {
            priorityProcess: 'governing standards',
            criteriaNumber: '1.1',
            criteria: 'Services are co-designed with clients and families, partners, and the community.'
          }, {
            priorityProcess: 'governing standards',
            criteriaNumber: '1.1',
            criteria: 'Services are co-designed with clients and families, partners, and the community.'
          }, {
            priorityProcess: 'governing standards',
            criteriaNumber: '1.1',
            criteria: 'Services are co-designed with clients and families, partners, and the community.'
          }, {
            priorityProcess: 'governing standards',
            criteriaNumber: '1.1',
            criteria: 'Services are co-designed with clients and families, partners, and the community.'
          }, {
            priorityProcess: 'governing standards',
            criteriaNumber: '1.1',
            criteria: 'Services are co-designed with clients and families, partners, and the community.'
          }, {
            priorityProcess: 'governing standards',
            criteriaNumber: '1.1',
            criteria: 'Services are co-designed with clients and families, partners, and the community.'
          }, {
            priorityProcess: 'governing standards',
            criteriaNumber: '1.1',
            criteria: 'Services are co-designed with clients and families, partners, and the community.'
          }, {
            priorityProcess: 'governing standards',
            criteriaNumber: '1.1',
            criteria: 'Services are co-designed with clients and families, partners, and the community.'
          }, {
            priorityProcess: 'governing standards',
            criteriaNumber: '1.1',
            criteria: 'Medication reconciliation is conducted in partnership with clients and families to communicate accurate and complete information about medications across care transitions.'
          }
        ]
      };

  constructor(private formBuilder: FormBuilder,
              private personService: PersonService,
              private dialog: MatDialog) { }

  ngOnInit() {
      this.startUp();
  }


    private startUp() {
        this.firstName = 'kamalesh';
        this.age = 21;
        this.form = this.formBuilder.group({
            firstName: this.firstName,
            age: this.age
        });
    }

    // private exportData() {
    //     this.collectedDetails = this.form.value;
    //     this.personService.onsiteSurvey().subscribe((onSiteSurveyDetails) => {
    //         this.tableDialogRef = this.dialog.open(OnsiteSurveyTableComponent, {
    //             data: { onSiteSurveyDetails }
    //         });
    //     });

    // }

    printOnsiteSurvey() {

        this.dialog.open(OnsiteSurveyTableComponent, {
            width: '95%',
            // height: '80%',
            data: { onsiteDetails: this.onsiteSurveyDetails }
        });

    }
}
