import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-item',
  templateUrl: './footer-item.component.html',
  styleUrls: ['./footer-item.component.css']
})
export class FooterItemComponent implements OnInit {

  @Input() footerHeading:any;
  @Input() footerbody1:any;
  @Input() footerbody2:any;
  @Input() footerbody3:any;
  @Input() footerbody4:any;

  constructor() { }

  ngOnInit(): void {
  }

}
