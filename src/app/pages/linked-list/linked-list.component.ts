import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from "@angular/animations";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LinkedList } from '../../dataStructures/linkedList';

@Component({
  selector: 'app-linked-list',
  templateUrl: './linked-list.component.html',
  styles: [`
    #allContainer{
      height: 100vh;
    }
  `
  ],
  //Este es del argentino, este es el codigo base con el que comparar
  /* animations: [
    trigger('buton', [
      state('amarillo', style({
        backgroundColor: '#ffff00',
      })),
      state('rojo', style({
        backgroundColor: '#ff0000',
      })),
      transition('amarillo => rojo', animate('500ms linear')),
      transition('rojo => amarillo', animate('500ms linear'))
    ])
  ] */

  //Este es de mosh
  animations: [
    trigger('fade', [
      state('void', style({opacity: 0})),
      transition(':enter, :leave', [
        animate(1000)
      ])
    ])
  ]
})
export class LinkedListComponent implements OnInit {

  ll!: LinkedList;
  llArray: any[] = [];

  value!: number;
  index!: number;

  values!: string;


  constructor() { }

  ngOnInit(): void {
    this.ll = LinkedList.prototype.fromValues(10, 20, 30);
    this.updateLL();
  }

  createNewLinkedList(){
    if(this.values){
      const valuesArray = this.values.match(/(\d+(,)?)+/)?.input?.split(',').map(Number);
      for(let item of valuesArray!){
        if(Number.isNaN(item)) return;
      }
      this.ll = LinkedList.prototype.fromValues(...valuesArray!);
      this.updateLL();
    }
  }

  //INSERTIONS
  insertHead(){
    if(this.checkForm()){
      this.ll.insertAtHead(this.value);
      this.updateLL();
    }
  }
  insertIndex(){
    if(this.checkForm(false)){
      this.ll.insertAtIndex(this.index, this.value);
      this.updateLL();
    }
  }
  insertLast(){
    if(this.checkForm()){
      this.ll.insertAtLast(this.value);
      this.updateLL();
    }
  }

  //DELETIONS
  deleteHead(){
    this.ll.removeHead();
    this.updateLL();
  }
  deleteIndex(){
    if(this.index >= 0 && this.index < this.llArray.length){
      this.ll.removeAtIndex(this.index);
      this.updateLL();
    }
  }
  deleteLast(){
    this.ll.removeAtLast();
    this.updateLL();
  }

  



  //HELPERS
  updateLL(){
    this.llArray = this.ll.getArrayOfValues();
  }

  //checkForm() returns true if form pass, else false
  checkForm(justValue: boolean = true):boolean{//if true, just value is required, else value and index are required (default true)
    //check for index if justValue false
    if(!justValue){
      if(this.index === null || this.index < 0 || this.index > this.llArray!.length || this.index === undefined){
        //error msg
        return false;
      }
    }

    if(this.value === null || this.value === undefined){
      //error msg
      return false;
    }

    return true;
  }

}
