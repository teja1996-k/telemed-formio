import { Component, OnInit } from '@angular/core';
import sample from '../../assets/form4.json';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public Form=sample

  constructor() { }

  ngOnInit(): void {
  }

}
