import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
@Component({
  selector: 'app-telehealthservice',
  templateUrl: './telehealthservice.component.html',
  styleUrls: ['./telehealthservice.component.scss']
})
export class TelehealthserviceComponent implements OnInit {

  telehealth = ['tele consulting services','mecine home delivery','lab sample collections'];
  locationList:string[] = ['Location1', 'Location2', 'Location3', 'Location4', 'Location5', 'Location6'];
  facilityList:string[] = ['Faciltity1', 'Faciltity2', 'Faciltity3', 'Faciltity4', 'Faciltity5', 'Faciltity6'];

  health: string;
  location:any;
  facility:any;
  checked1 = false;
  checked2=false;


  constructor( public dialogRef: MatDialogRef<TelehealthserviceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: object) { }

  ngOnInit(): void {
  }

  confirmSelection() {
    this.dialogRef.close();
    console.log(this.health,this.location,this.facility,this.checked1,this.checked2);
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

}
