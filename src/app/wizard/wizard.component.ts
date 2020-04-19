import { Component, OnInit, ViewEncapsulation, Renderer2, AfterViewChecked } from '@angular/core';
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
export class WizardComponent implements OnInit,AfterViewChecked {
  public wizardForm:any=wizard
  public renderOptions = {
    buttonSettings: {
      showCancel: false,
      showNext: false,
      showPrevious: false,
      showSubmit: false
    },
    noAlerts: true
  };
  public options={
    options : {
    noAlerts: true
    }
  }
  public paging:any;
  public count:number=0;

  constructor(
    private renderer : Renderer2,
  ) { }
  ngAfterViewChecked(){
    if(this.count<1){
      this.count=this.count+1;
      
    this.paging = document.getElementsByClassName('pagination')
    console.log(this.paging);
    const span=this.renderer.createElement('span')
    var img=this.renderer.createElement('img')
    img.src="../../assets/thumbay-logo.jpg"
    img.height=55
    this.renderer.setStyle(img,'margin-top','-10px')
    this.renderer.appendChild(span,img);
    this.renderer.appendChild(this.paging[0],span);
    this.renderer.insertBefore(this.paging[0],span,this.paging[0].firstChild);
    // this.renderer.appendChild(document.body,this.paging);
    }
    else{
      console.log(this.count)
    }
  

  }

  ngOnInit(): void {
    this.wizardForm['components'][0]['components']=form1['components'];
    this.wizardForm['components'][1]['components']=form2['components'];
  }
  displayDialog(){
    console.log("method called")
  }

}
