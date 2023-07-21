class Node{
  constructor(value){
    this.value=value;
    this.value=null;
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
  removeFrom(index){
    if(index<0||index>=this.size){
      return null;
    }
    let removedNode;
    if(index===0){
      removedNode=this.head;
      this.head=this.head.next;
    }else{
      let prev=this.head;
      for(i=0;i<index-1;i++){
        prev=prev.next;
      }
      removedNode=prev.next;
      prev.next=removedNode.next;
    }
    this.size--;
    return removedNode.value;
  }
  print(){
    if(this.isEmpty()){
      console.log('list is empty');
    }else{
      let curr =this.head;
      let list ='';
      while(curr){
        list+=`${curr.vale}->`;
        curr=curr.next;
      }
      console.log(list)
    }
  }
}