export class LinkedList {    
    head: LinkListNode | null;
    length: number;

    constructor() {
        this.head = null
        this.length = 0
    }
    
    getByIndex(index: number){
        if(index < 0 || index >= this.length) return null;

        let current = this.head;
        for(let i = 0; i < index; i++){
            current = current!.next;
        }
        return current
    }

    insertAtHead(data: any){
        const newNode = new LinkListNode(data, this.head);
        this.head = newNode;
        this.length++;
    }

    insertAtIndex(index: number, data: any){
        if(index === 0) return this.insertAtHead(data);

        let prev = this.getByIndex(index - 1);
        if(prev === null) return;

        prev.next = new LinkListNode(data, prev.next);
        this.length++;
    }

    insertAtLast(data: any){
        if(this.head === null) return this.insertAtHead(data);

        const newNode = new LinkListNode(data, null);

        let current = this.head;
        while(current!.next){
            current = current!.next;
        }
        current.next = newNode;
        this.length++;
    }

    removeHead(){
        if(this.length === 0) return;

        this.head = this.head!.next;
        this.length--;
    }

    removeAtIndex(index: number){
        if(index === 0) return this.removeHead();

        let prev = this.getByIndex(index - 1);
        if(prev === null) return;
        
        prev.next = prev.next!.next;
        this.length--;
    }

    removeAtLast(){
        if(this.head === null) return;

        if(this.length === 1) return this.removeHead();

        let current = this.head;
        for(let i = 1; i < this.length - 1; i++){
            current = current.next!;
        }
        current.next = null;
        this.length--;
    }


    print(){
        let current = this.head;
        let output = '';
        while(current){
            output = `${output}${current.value} -> `;
            current = current.next;
        }
        console.log(`${output}null`);
    }

    fromValues(...values:any):LinkedList{
        const ll = new LinkedList();
        for(let i = values.length - 1; i >= 0; i--){
         ll.insertAtHead(values[i]);
        }
        return ll;
    }

    getArrayOfValues():any[]{
        if(this.length === 0) return [];

        let llArray = [];
        let current = this.head;
        while(current){
            llArray.push(current.value);
            current = current.next;
        }
        return llArray;
    }
}


class LinkListNode {
    value: any;
    next: LinkListNode | null;

    constructor(value: any, next: LinkListNode | null) {
        this.value = value
        this.next = next
    }
}


export default LinkedList;