import { Component, OnInit, Inject } from '@angular/core';
import * as jsPDF from 'jspdf';
import 'DataTables.net';
import * as html2canvas from 'html2canvas';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddPersonDialogComponent } from 'src/app/mens/add-person-dialog/add-person-dialog.component';

@Component({
  selector: 'app-onsite-survey-table',
  templateUrl: './onsite-survey-table.component.html',
  styleUrls: ['./onsite-survey-table.component.scss']
})
export class OnsiteSurveyTableComponent implements OnInit {

    displayedColumns: string[] = [  'PriorityProcess',
                                    'Standards',
                                    'CriteriaNumber',
                                    'Criteria',
                                    'Met',
                                    'Unmet',
                                    'NotApplicable',
                                    'Comments',
                                ];
    onsiteSurveyTableDetails: string[];

    constructor(@Inject(MAT_DIALOG_DATA) public onsiteSurveyTable,
                private dialogRef: MatDialogRef<AddPersonDialogComponent>) { }

    ngOnInit() {
        console.log(this.onsiteSurveyTable);
        this.onsiteSurveyTableDetails = this.onsiteSurveyTable.onsiteDetails;
        console.log(this.onsiteSurveyTableDetails);
        // console.log(this.onSiteSurveyTable.onSiteSurveyDetails);
        // console.log(this.onSiteSurveyTable.onSiteSurveyDetails.criteria);
        // console.log(this.tableDetails);
        // this.generatePdf();

    }

    // generatePdf() {
    //     let data = document.getElementById('onsite-survey-table');
    //     console.log(data);
    //     html2canvas(document.getElementById('onsite-survey-table')).then(canvas => {
    //         const contentDataURL = canvas.toDataURL('application/pdf');
    //         const imgWidth = 500;
    //         const pageHeight = 295;
    //         let imgHeight = canvas.height * imgWidth / canvas.width;
    //         let pdf = new jspdf('p', 'pt', 'a4');
    //         pdf.addImage(contentDataURL, 'PDF', 35, 50, imgWidth, imgHeight);
    //         pdf.save('pdfTable.pdf');
    //     });
    // }

    closeDialog() {
        this.dialogRef.close();
    }

    generatePdf() {
        // var doc = new jspdf('p', 'pt', 'a4');
        // // doc.text(35, 50, document.getElementById('onsite-survey-table'));
        // // doc.save('sample.pdf');
        // doc.html(document.getElementById('onsite-survey-table'), {
        //       doc.save('sample.pdf');
        // });
        // var doc = document.getElementsByClassName('onsite-survey-table') as HTMLCollectionOf<HTMLElement>;
        // doc.style = 'onsite-survey';
        // let data = document.getElementById('onsite-survey-table');
        // console.log(data);
        this.fullhtml2canvas().then(canvas => {
            const imgWidth = 500;
            const pageHeight = 295;
            // let imgHeight = canvas.height * imgWidth / canvas.width;
            let pdf = new jsPDF('p', 'pt', 'a4');
            pdf.addImage(canvas, 'PDF', 35, 50, imgWidth, 242);
            pdf.save('pdfTable.pdf');
            console.log(this.fullhtml2canvas());
        });
        // html2canvas(document.getElementById('onsite-survey-table')).then(canvas => {
        // });
    }
    fullhtml2canvas() {
        var doc = document.getElementById('table-container');
        return new Promise(resolve => {
            html2canvas(doc, {
                width: doc.scrollWidth,
                height: doc.scrollHeight,
            }).then(canvas => {
                resolve(canvas);
            });
        });
    }

    exportPdf() {
        // const doc1 = document.getElementById('attestation-details');
        // const doc3 = document.getElementById('onsite-survey-table')
        // const doc2 = document.getElementById('table-container');
        // html2canvas(doc2, { width: doc2.scrollWidth + doc1.scrollWidth, height: 578 + 131 }).then(canvas => {
        //     let pdf = new jsPDF('p', 'pt', 'a4');
        //     pdf.addImage(canvas, 'PDF', 50, 50, 750, 242);
        //     pdf.save('sample.pdf');
        // });
        const doc = new jsPDF();
        const doc1 = document.getElementsByClassName('mat-elevation-z8');
        doc.autoTable({html: doc1,
                        tableWidth: 'wrap',
                        styles: {cellPadding: 0.5, fontSize: 8},
                    });
        doc.save('table.pdf');
    }

    exportTable() {

        const doc = document.getElementById('onsite-survey-table');
        doc.DataTable( {
            dom: 'Bfrtip',
            buttons: [
                {
                    extend: 'pdfHtml5',
                    orientation: 'landscape',
                    pageSize: 'LEGAL'
                }
            ]
        } );
    }

}
