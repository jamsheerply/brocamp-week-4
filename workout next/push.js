class Node{
  constructor(val){
    this.value=val;
    this.next=null;
  }
}
class LinkedList{
  constructor(){
    this.head=null;
    this.size=0;
  }
  push(val){
    let curr=this.head;
    const node=new Node(val);
    if(this.head==null){
      this.head=node;
    }else{
      while(curr.next!==null){
        curr=curr.next
      }
      curr.next=node
    }
    this.size++
  }
  display(){
    let curr=this.head;
    let str="";
    while(curr!==null){
      str+=curr.value+"->"
      curr=curr.next;
    }
    console.log(str)
  }
  getSize(){
    console.log(this.size)
  }
}
const li =new LinkedList()
li.push(10);
li.push(20)
li.display()
li.getSize()

