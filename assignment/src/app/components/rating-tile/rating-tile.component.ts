import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating-tile',
  templateUrl: './rating-tile.component.html',
  styleUrls: ['./rating-tile.component.css']
})
export class RatingTileComponent implements OnInit {

@Input() imageUrl:any;
@Input() instructor:any;
@Input() course:any;

  constructor() { }

  ngOnInit(): void {
  }

}
