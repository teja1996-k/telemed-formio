import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import sample from '../../assets/form1.json';
// import { Formio } from 'angular-formio/core';
// import { Formio } from 'angular-formio';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class AdminComponent implements OnInit {

  public Form=sample

  constructor() {
    // Formio.registerComponent('custom', CustomComponent);
    // Formio.registerComponent('question', QuestionnaireComponent);
    // Formio.registerComponent('autotext', AutoTextRendererComponent);
   }

  ngOnInit(): void {
  }

}
