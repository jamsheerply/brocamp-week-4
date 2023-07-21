class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.size++;
  }
  print() {
    if (this.isEmpty()) {
      console.log('list is empty')
    } else {
      let curr = this.head;
      let listvalue = '';
      while (curr) {
        listvalue += `${curr.value}->`;
        curr = curr.next
      }
      console.log(listvalue)
    }
  }
}
const list=new LinkedList()
list.append(10);
list.append(20);
list.append(30);
list.print();