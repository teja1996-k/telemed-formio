import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import sample from '../../assets/form6.json';

@Component({
  selector: 'app-marketing-link',
  templateUrl: './marketing-link.component.html',
  styleUrls: ['./marketing-link.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class MarketingLinkComponent implements OnInit {
  public Form=sample

  constructor() { }

  ngOnInit(): void {
  }

}
