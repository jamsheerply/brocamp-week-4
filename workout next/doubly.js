class Node{
  constructor(val){
    this.prev=null
    this.value=val
    this.next=null
  }
}
class LinkedList{
  constructor(){
    this.head=null
    this.tail=null
    this.size=0;
  }
  prepend(val){
    const node=new Node(val);
    if(this.head==null){
      this.head=node
      this.tail=node
    }else{
      node.next=this.head
      this.head.prev=node
      this.head=node;
    }
    this.size++
  }
  print(){
    if(this.head==null){
      console.log("empty")
    }else{
      let curr=this.head
      let str=""
      while(curr!==null){
        str+=curr.value+"<->"
        curr=curr.next;
      }
      console.log(str)
    }
  }
}
const li =new LinkedList()
li.prepend(10)
li.print()