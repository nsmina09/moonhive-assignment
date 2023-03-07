import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public username: any;


  constructor() { }

  ngOnInit(): void {
    localStorage.setItem('CurrentUserName', JSON.stringify(this.username))
  }

}
