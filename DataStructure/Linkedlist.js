

function LinkNode (value, next=null) {
    this.value = value;
    this.next = next;

}


let node1 = new LinkNode(1000);

let node2 = new LinkNode({name: 'Binh', age: 30});


let head = new LinkNode(0);
node2.next = node1;
head.next = node2;

console.log(head);

let nodeArray = new LinkNode(1, [2,4])
console.log(nodeArray);

function DoublyLinkedNode(value, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
}

let nodeDouble = new DoublyLinkedNode(1); 
console.log(nodeDouble);