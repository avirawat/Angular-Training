import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-directives',
  templateUrl: './custom-directives.component.html',
  styleUrls: ['./custom-directives.component.css']
})
export class CustomDirectivesComponent implements OnInit {

  username=''
  mycolor=''
  numbers=[1,2,3,4,5]
  constructor() { }

  ngOnInit(): void {
  }

}
