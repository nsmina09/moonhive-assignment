import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-discuss-dashboard',
  templateUrl: './discuss-dashboard.component.html',
  styleUrls: ['./discuss-dashboard.component.css']
})
export class DiscussDashboardComponent implements OnInit {

  @Input() name:any;
  @Input() date:any;
  @Input() description:any;
  @Input() numberOfAnswer:any;
  @Input() showButton=false;

  constructor() { }

  ngOnInit(): void {
  }

}
