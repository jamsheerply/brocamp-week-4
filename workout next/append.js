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
  append(val){
    const newwNode=new Node(val);
    let curr=this.head;
    if(this.head==null){
      this.head=newwNode
    }else{
      while(curr.next){

        curr=curr.next
      }
      curr.next=newwNode;
    }
    this.size++;
  }
  removeByValue(val){
    let curr=this.head;
    let prev=null
    while(curr!==null){
      if(this.head.value=val){
        if(prev==null){
          this.head=this.head.next;
        }else{
          prev.next=curr.next
        }
        this.size--
      }
      prev=curr;
      curr=curr.next;
    }
  }
  print(){
    let curr=this.head;
     let str=""
    if(this.head==null){
      console.log('empty')
    }else{
      while(curr){
        str+=curr.value+"->"
      curr=curr.next
      }
      console.log(str)
    }
  }
}
const li=new LinkedList()
li.append(10)
li.append(20)
li.append(30);
// li.removeByValue(20)
li.print()