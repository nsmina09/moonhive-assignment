import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent implements OnInit {

@Input() numberCourseTwo:any;
@Input() course2:any;
@Input() numberCourseOne:any;
@Input() course1:any;
@Input() imgaeUrl1:any;
@Input() imgaeUrl2:any;



  constructor() { }

  ngOnInit(): void {
  }

}
