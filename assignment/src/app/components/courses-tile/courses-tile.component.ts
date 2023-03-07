import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-tile',
  templateUrl: './courses-tile.component.html',
  styleUrls: ['./courses-tile.component.css']
})
export class CoursesTileComponent implements OnInit {

  @Input() title:any;
  @Input() url:any;
  constructor() { }

  ngOnInit(): void {
  }

}
