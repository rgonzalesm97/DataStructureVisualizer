import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styles: [],
})
export class HeaderMenuComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: '<h2>Data Structure<br>Visualizer</h2>',
        escape: false,
      },
      {
        label: '<div></div>',
        escape: false,
        style: {
          height: '100%',
          width: '2px',
          background: 'grey',
          margin: '0px 10px'
        }
      },
      {
        label: 'Select Data Structure',
        icon: 'pi pi-sitemap',
        items: [
          {
            label: 'Linked List',
            routerLink: ['/linkedList']
          }
        ]
      }
    ];
  }
}
