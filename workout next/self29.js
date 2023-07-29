class Node{
  constructor(val){
    this.value=val
    this.next=null
  }
}
class LinledList{
  constructor(val){
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
}
const li=new LinledList()
li.prepend(10)
li.prepend(20)
li.print()