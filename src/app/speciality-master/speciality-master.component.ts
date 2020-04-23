import { Component, OnInit } from '@angular/core';
import sample from '../../assets/form2.json';

@Component({
  selector: 'app-speciality-master',
  templateUrl: './speciality-master.component.html',
  styleUrls: ['./speciality-master.component.scss']
})
export class SpecialityMasterComponent implements OnInit {
  public Form=sample

  constructor() { }

  ngOnInit(): void {
  }

}
