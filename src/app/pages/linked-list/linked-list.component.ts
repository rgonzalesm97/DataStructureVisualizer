import { Component, OnInit, Optional } from '@angular/core';
import { LinkedList } from '../../dataStructures/linkedList';

@Component({
  selector: 'app-linked-list',
  templateUrl: './linked-list.component.html',
  styles: [`
    #allContainer{
      height: 100vh;
    }
  `],
  
})
export class LinkedListComponent implements OnInit {

  nodeStates: string[] = [];
  arrowStates: string[] = [];

  ll!: LinkedList;
  llArray: any[] = [];

  value!: number;
  index!: number;

  values!: string;

  isDisable: boolean = false;
  btnDis:boolean = false;


  constructor() { }

  ngOnInit(): void {
    this.ll = LinkedList.prototype.fromValues(10, 20, 30);
    this.updateLL();
    this.nodeStates = this.llArray.map(() => 'default');
    this.arrowStates = this.llArray.map(() => 'default');
  }

  createNewLinkedList(){
    if(this.values){
      const valuesArray = this.values.match(/(\d+(,)?)+/)?.input?.split(',').map(Number);
      for(let item of valuesArray!){
        if(Number.isNaN(item)) return;
      }
      this.ll = LinkedList.prototype.fromValues(...valuesArray!);
      this.updateLL();
      this.nodeStates = this.llArray.map(() => 'default');
    }
  }

  //INSERTIONS
  insertHead(){
    if(this.checkForm()){
      this.ll.insertAtHead(this.value);
      this.updateLL();
      this.nodeStates.unshift('in');
      this.arrowStates.unshift('in');
      //TODO animation for head title
      this.btnDis = true;
      setTimeout(() => {
        this.nodeStates[0] = 'default';
        this.arrowStates[0] = 'default';
        this.btnDis = false;
      }, 4000);
    }
  }
  insertIndex(){
    if(this.checkForm(false)){
      this.ll.insertAtIndex(this.index, this.value);
      this.updateLL();
      this.nodeStates.splice(this.index, 0, 'in');
      this.arrowStates.splice(this.index, 0, 'in');
      if(this.index - 1 >= 0) this.arrowStates[this.index - 1] = 'previousin';
      this.btnDis = true;
      setTimeout(() => {
        this.nodeStates[this.index] = 'default';
        this.arrowStates[this.index] = 'default';
        if(this.index - 1 >= 0) this.arrowStates[this.index - 1] = 'default';
        this.btnDis = false;
      }, 4000);
    }
  }
  insertLast(){
    if(this.checkForm()){
      this.ll.insertAtLast(this.value);
      this.updateLL();
      this.nodeStates.push('in');
      this.arrowStates.push('in');
      this.arrowStates[this.arrowStates.length - 2] = 'previousin';
      this.btnDis = true;
      setTimeout(() => {
        this.nodeStates[this.nodeStates.length - 1] = 'default';
        this.arrowStates[this.arrowStates.length - 1] = 'default';
        this.arrowStates[this.arrowStates.length - 2] = 'default';
        this.btnDis = false;
      }, 4000);
    }
  }

  //DELETIONS
  deleteHead(){
    this.ll.removeHead();
    this.nodeStates[0] = 'out';
    this.arrowStates[0] = 'out';
    this.btnDis = true;
    setTimeout(() => {
      this.updateLL();
      this.nodeStates.shift();
      this.arrowStates.shift();
      this.btnDis = false;
    }, 4000);
    
  }
  deleteIndex(){
    if(this.index >= 0 && this.index < this.llArray.length){
      this.ll.removeAtIndex(this.index);
      this.nodeStates[this.index] = 'out';
      this.arrowStates[this.index] = 'out';
      if(this.index - 1 >= 0) this.arrowStates[this.index - 1] = 'previousout';
      this.btnDis = true;
      setTimeout(() => {
        this.updateLL();
        this.nodeStates.splice(this.index, 1);
        this.arrowStates.splice(this.index, 1);
        if(this.index - 1 >= 0) this.arrowStates[this.index - 1] = 'default';
        this.btnDis = false;
      }, 4000);
    }
  }
  deleteLast(){
    this.ll.removeAtLast();
    this.nodeStates[this.nodeStates.length - 1] = 'out';
    this.arrowStates[this.nodeStates.length - 1] = 'out';
    this.arrowStates[this.nodeStates.length - 2] = 'previousout';
    this.btnDis = true;
    setTimeout(() => {
      this.updateLL();
      this.nodeStates.pop();
      this.arrowStates.pop();
      this.arrowStates[this.nodeStates.length - 1] = 'default';
      this.btnDis = false;
    }, 4000);
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
