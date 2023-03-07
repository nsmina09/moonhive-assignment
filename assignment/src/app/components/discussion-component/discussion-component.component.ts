import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-discussion-component',
  templateUrl: './discussion-component.component.html',
  styleUrls: ['./discussion-component.component.css']
})
export class DiscussionComponentComponent implements OnInit {

  @Input() name:any;
  @Input() date:any;
  @Input() description:any;
  @Input() numberOfAnswer:any;
  @Input() showButton=false;

   

  constructor() { }

  ngOnInit(): void {
  }

}
