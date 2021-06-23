import { Component, Input, OnInit } from '@angular/core';
import { trigger, transition, group, animate, keyframes, style } from '@angular/animations';
import { nodeAnims } from './ll-animations';


@Component({
  selector: 'app-node-box',
  templateUrl: './node-box.component.html',
  styleUrls: [ './node-box.component.css' ],
  animations: [
    nodeAnims
  ]
})
export class NodeBoxComponent implements OnInit {

  @Input() nodeValue!: number;
  @Input() nodeIndex!: number;

  @Input() nodeStates!: string[];

  constructor() { }

  ngOnInit(): void {
  }


}
