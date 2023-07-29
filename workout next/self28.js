class Node{
  constructor(val){
    this.value=val;
    this.next=null;
  }
}
class LinkedList{
  constructor(){
    this.head=null
    this.size=0
  }
  prepend(val){
    const node =new Node(val)
    if(this.head==null){
      this.head=node
    }else{
      node.next=this.head;
      this.head=node;
    }
    this.size++
  }
  append(val){
    const node=new Node(val)
    if(this.head==null){
      this.head=node;
    }else{
      let curr=this.head;
      while(curr.next!==null){
        curr=curr.next
      }
      curr.next=node
    }
    this.size++
  }
  insert(val,index){
    const node=new Node(val);
    if(index<0||index>this.size)
    return console.log("invalid entry")
    if(index==0){
      node.next=this.head;
      this.head=node; 
    }else{
      let curr=this.head,prev;
      for(let i=0;i<index;i++){
        prev=curr;
        curr=curr.next
      }
      node.next=curr;
      prev.next=node
    }
    this.size++
  }
  remove(index){
    if(index<0||index>this.size)
    return console.log("invalid")
    if(index==0){
      this.head=this.head.next;
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
  print(){
    let curr=this.head;
    let str=""
    while(curr!==null){
      str+=curr.value+"->"
      curr=curr.next;
    }
    console.log(str)
  }
}
const li=new LinkedList();
li.prepend(10)
li.prepend(20)
li.prepend(30)
li.append(40)
li.append(50)
li.insert(100,1)
li.print()
li.remove(6)
li.print();
