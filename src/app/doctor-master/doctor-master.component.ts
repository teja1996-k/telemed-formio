import { Component, OnInit } from '@angular/core';
import sample from '../../assets/form5.json';

@Component({
  selector: 'app-doctor-master',
  templateUrl: './doctor-master.component.html',
  styleUrls: ['./doctor-master.component.scss']
})
export class DoctorMasterComponent implements OnInit {
  public Form=sample

  constructor() { }

  ngOnInit(): void {
  }

}
