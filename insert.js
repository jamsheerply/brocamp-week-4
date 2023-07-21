class Node{
  constructor(value){
    this.value=value;
    this.next=null
  }
}
class LinkedList{
  constructor(){
    this.head=null
    this.size=0
  }
  isEmpty(){
    return this.size===0
  }
  getSize(){
    return this.size
  }
  // insert
  insert(value,index){
    if(index<0 || index>this.size){
      return;
    }
    if(index===0){
      this.perpend(value);
    }else{
      const node=new Node(value)
      let prev =this
      for(i=0;i<index-1;i++){
        prev =prev.next
      }
      node.next=prev.next;
      prev.next=node
      this.size++
    }
  }
}