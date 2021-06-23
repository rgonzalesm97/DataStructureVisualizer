import { Component, Input, OnInit } from '@angular/core';
import { arrowAnims } from '../node-box/ll-animations';

@Component({
  selector: 'app-arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.css'],
  animations: [
    arrowAnims
  ]
})
export class ArrowComponent implements OnInit {

  @Input() arrowStates: string[] = [];

  @Input() arrowIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
  }


}
