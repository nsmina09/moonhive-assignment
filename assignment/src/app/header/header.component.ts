import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public name:any;

  constructor() { }

  ngOnInit(): void {
    this.name=JSON.parse(localStorage.getItem('CurrentUserName')||'')
    console.log(this.name);
    
  }

}
