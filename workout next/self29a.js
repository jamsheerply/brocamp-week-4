class Node{
  constructor(val){
    this.value=val
    this.next=null
  }
}
class LinkedList{
  constructor(val){
    this.head=null
    this.size=0
  }
  prepend(val){
    const node=new Node(val)
    if(this.head==null){
      this.head=node;
    }else{
      node.next=this.head;
      this.head=node;
    }
    this.size++
  }
  print(){
    let curr=this.head;
    let str=""
    while(curr!==null){
      str+=curr.value+"->"
      curr=curr.next
    }
    console.log(str)
  }
  remove(index){
    if(index<0||index>this.size)
    return undefined
    if(index===0){
      this.head.next=this.head;
    }else{
      let curr=this.head
      let prev;
      for(let i=0;i<index;i++){
        prev=curr;
        curr=curr.next;
      }
      prev.next=curr.next;
    }
    this.size--
  }
}
const li=new LinkedList()
li.prepend(10)
li.prepend(20)
li.prepend(30)
li.print()
li.remove(2)