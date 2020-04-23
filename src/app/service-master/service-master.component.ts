import { Component, OnInit } from '@angular/core';
import sample from '../../assets/form3.json';

@Component({
  selector: 'app-service-master',
  templateUrl: './service-master.component.html',
  styleUrls: ['./service-master.component.scss']
})
export class ServiceMasterComponent implements OnInit {
  public Form=sample

  constructor() { }

  ngOnInit(): void {
  }

}
