import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-dashboard',
  templateUrl: './card-dashboard.component.html',
  styleUrls: ['./card-dashboard.component.css']
})
export class CardDashboardComponent implements OnInit {

@Input() number:any;
@Input() topic:any;



  constructor() { }

  ngOnInit(): void {
  }

}
