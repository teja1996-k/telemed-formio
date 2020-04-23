import { Component, OnInit, ViewEncapsulation, Renderer2, AfterViewChecked } from '@angular/core';
import wizard from '../../assets/wizard.json';
import form1 from '../../assets/form1.json';
import form2 from '../../assets/form2.json';
import { viewClassName } from '@angular/compiler';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { ActiveService } from '../active.service';
import { filter } from 'rxjs/operators';
import { Location } from "@angular/common";

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class WizardComponent implements OnInit{
  public wizardForm:any=wizard
  public logoFlag:boolean=true;
  public isClicked=[true,false,false,false,false,false,false];
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

  constructor(
    private renderer : Renderer2,
    public route:Router,
    public activatedRoute:ActivatedRoute,
    private activeService: ActiveService,
    public location:Location   
  ) {

    // this.activeService.emitRoute.subscribe(
    //   () => {
    //     this.paging = this.activeService.route;
    //     console.log( "inside constructor",this.paging)
    //   }    
    // );
    this.route.events.subscribe(val => {
      if (location.path() != "") {
        let paging;
       paging=location.path().split("/");
      //  this.paging=paging[2];
       for(let i=paging.length;i>0;i--){
         this.paging=paging[i]
         console.log(this.paging)
       if(this.paging=="admin"){
         let index=0;
         this.changeActive(index)
         break

       }else if(this.paging=="speciality"){
         let index=1;
         this.changeActive(index)
         break

       }else if(this.paging=="service"){
         let index=2;
         this.changeActive(index)
         break
       }else if(this.paging=="doctor"){
         let index=3
         this.changeActive(index)
         break
       }else if(this.paging=="user"){
        let index=4
        this.changeActive(index)
        break
      }else if(this.paging=="marketing"){ 
        let index=5
        this.changeActive(index)
        break
      }
      else if(this.paging=="router"){
        let index=5
        this.changeActive(index)
        break
      }
      
      }
    }
    });
   
   }
  // ngAfterViewChecked(){  
  //   if(!document.getElementById('customLogo')){ 
  //   this.paging = document.getElementsByClassName('pagination')
  //   console.log(this.paging);
  //   const span=this.renderer.createElement('li')
  //   this.renderer.setAttribute(span,'id','customLogo')
  //   var img=this.renderer.createElement('img')
  //   img.src="../../assets/thumbay-logo.jpg"
  //   img.height=55
  //   this.renderer.setStyle(img,'margin-top','-10px')
  //   this.renderer.appendChild(span,img);
  //   this.renderer.appendChild(this.paging[0],span);
  //   this.renderer.insertBefore(this.paging[0],span,this.paging[0].firstChild);
  //   // this.renderer.appendChild(document.body,this.paging);    
  //   }
  // }

  ngOnInit(): void {}
  changeActive(index){
    for(let i=0;i<this.isClicked.length;i++){
      if(index==i){
        this.isClicked[i]=true;
      }
      else{
        this.isClicked[i]=false;
      }
    }

  }

}
