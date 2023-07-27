class Node{
  constructor(value){
    this.value=value;
    this.next=null;
  }
}
class LinkedList{
  constructor(){
    this.head=null;
    this.size=0;
  }
  isEmpty(){
    return this.size===0;
  }
  getSize(){
    return this.size;
  }
  prepand(value){
const node=new Node(value)
if(this.isEmpty()){
  this.head=node;
}else{
  node.next=this.head;
  this.head=node;
}
this.size++
  }
  print(){
    if(this.isEmpty()){
      console.log("empty");
    }else{
      let cur;
      cur=this.head;
      let list="";
      while(cur){
        list+=`${cur.value}`
        cur=cur.next;
      }

    }
    console.log(list)
  }
}
const li=new LinkedList()
li.print()
li.prepand(10);
li.prepand(20)
li.prepand(30)
li.print()