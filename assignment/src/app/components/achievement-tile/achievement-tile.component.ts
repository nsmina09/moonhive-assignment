import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-achievement-tile',
  templateUrl: './achievement-tile.component.html',
  styleUrls: ['./achievement-tile.component.css']
})
export class AchievementTileComponent implements OnInit {

@Input() domain:any;
@Input() description:any;

  constructor() { }

  ngOnInit(): void {
  }

}
