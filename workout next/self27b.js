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
    this.size++
  }
  append(val){
    const node =new Node(val)
    if(this.head==null){
      this.head=node;
    }else{
      let curr=this.head;
      while(curr.next!==null){
        curr=curr.next;
      }
      curr.next=node;
    }
    this.size++;
  }
  insert(val,index){
    const node=new Node(val)
    if(index<0||index>this.size)
    return console.log("invalid entry")
    if(index==0){
    node.next=this.head;
    this.head=node
    }else{
      let curr=this.head;
      let prev;
      for(let i=0;i<index;i++){
        prev=curr;
        curr=curr.next;
      }
      node.next=curr;
      prev.next=node

    }
    this.size++
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
li.append(30)
li.print()
li.insert(100,3)
li.print()