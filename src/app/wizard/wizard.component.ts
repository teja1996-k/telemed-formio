import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import wizard from '../../assets/wizard.json';
import form1 from '../../assets/form1.json';
import form2 from '../../assets/form2.json';
import { viewClassName } from '@angular/compiler';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class WizardComponent implements OnInit {
  public wizardForm:any=wizard
  public renderOptions = {
    buttonSettings: {
      showCancel: false,
      showNext: false,
      showPrevious: false,
      showSubmit: false
    }
  };

  constructor() { }

  ngOnInit(): void {
    this.wizardForm['components'][0]['components']=form1['components'];
    this.wizardForm['components'][1]['components']=form2['components'];
  }

}
