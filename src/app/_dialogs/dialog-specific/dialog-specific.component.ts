import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-specific',
  templateUrl: './dialog-specific.component.html',
  styleUrls: ['./dialog-specific.component.css']
})
export class DialogSpecificComponent implements OnInit {

  public post: any;
  constructor(public dialogRef: MatDialogRef<DialogSpecificComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { this.post = data}

  ngOnInit() {
  }

  onNoClick() {
    this.dialogRef.close();
  }

}
