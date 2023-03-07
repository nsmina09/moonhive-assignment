import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-iq-dashboard',
  templateUrl: './iq-dashboard.component.html',
  styleUrls: ['./iq-dashboard.component.css']
})
export class IqDashboardComponent implements OnInit {

  @Input() number:any;
  @Input() topic:any;
  @Input()  details:any;
  

  constructor() { }

  ngOnInit(): void {
  }

}
