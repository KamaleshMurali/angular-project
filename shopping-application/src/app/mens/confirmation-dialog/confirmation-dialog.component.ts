import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {

    confirmDelete = false;

    constructor(private confirmationDialogRef: MatDialogRef<ConfirmationDialogComponent>) { }

    ngOnInit() {
    }

    delete() {
        this.confirmDelete = true;
        this.confirmationDialogRef.close(this.confirmDelete);
    }
}
