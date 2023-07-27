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
  prepend(val){
    const node=new Node(val)
    if(this.head==null){
      this.head=node
    }else{
      node.next=this.head;
      this.head=node;
    }
  }
  print(){
    let curr=this.head;
    let str=""
    while(curr!==null){
      str+=curr.value+"->";
      curr=curr.next;
    }
    console.log(str)
  }
}
const li=new LinkedList()
li.prepend(10)
li.prepend(200)
li.prepend(30)
li.print()