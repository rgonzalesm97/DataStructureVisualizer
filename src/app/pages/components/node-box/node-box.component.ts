import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-node-box',
  templateUrl: './node-box.component.html',
  styles: [
  ]
})
export class NodeBoxComponent implements OnInit {

  @Input() nodeValue!: number; 

  constructor() { }

  ngOnInit(): void {
  }

}
