import { Component, OnInit, ViewEncapsulation, Renderer2, AfterViewChecked, EventEmitter, Output } from '@angular/core';
import sample from '../../assets/form1.json';
import { Router } from '@angular/router';
import { ActiveService } from '../active.service';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { TelehealthserviceComponent } from '../telehealthservice/telehealthservice.component';

// import { Formio } from 'angular-formio/core';
// import { Formio } from 'angular-formio';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class AdminComponent implements OnInit,AfterViewChecked {
 
  public Form=sample
  public speciality:any;
  public user:any;
  public doctor:any;
  public services:any;
  public checkbox:any;
  public checkLabel:any;
  public healthservice:object

  constructor(
    private renderer: Renderer2,
    private router:Router,
    private activeService:ActiveService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
  }
  ngAfterViewChecked(){
    if(document.getElementsByClassName('slider round').length==0){
      this.checkLabel=document.getElementsByClassName('form-check-label')
      for(let i=0;i<this.checkLabel.length;i++){
        const span=this.renderer.createElement('span')
        this.renderer.setAttribute(span,'class','slider round')
        this.renderer.appendChild(this.checkLabel[i],span)

      }
    }

    this.speciality=document.getElementsByClassName('table-icons speciality')
    for(let i=0;i<this.speciality.length;i++){
      this.renderer.listen(this.speciality[i], 'click', (event) => {
        this.showSpeciality();
      })
    }
    this.user=document.getElementsByClassName('table-icons user')
    for(let i=0;i<this.user.length;i++){
      this.renderer.listen(this.user[i], 'click', (event) => {
        this.showUser();
      })
    }
    this.doctor=document.getElementsByClassName('table-icons doctor')
    for(let i=0;i<this.doctor.length;i++){
      this.renderer.listen(this.doctor[i], 'click', (event) => {
        this.showDoctor();
      })
    }
    this.services=document.getElementsByClassName('table-icons service')
    for(let i=0;i<this.services.length;i++){
      this.renderer.listen(this.services[i], 'click', (event) => {
        this.showService();
      })
    }


  }
  showSpeciality(){
    // console.log("button Clicked");
    this.activeService.updateNavig("speciality")
    this.router.navigate(['/home/speciality'])
    
  }
  showUser(){
    // console.log("button Clicked");
    this.router.navigate(['/home/user'])
    
  }
  showDoctor(){
    // console.log("button Clicked");
    this.router.navigate(['/home/doctor'])
    
  }
  showService(){
    this.router.navigate(['/home/service'])
    
  }

  getTeleHealthServices(): void {
    const dialogRef = this.dialog.open(TelehealthserviceComponent, {
      width: "700px",
      height: "400px",

      maxHeight: "400px",
      hasBackdrop: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.healthservice = result;
    });
  }

}
