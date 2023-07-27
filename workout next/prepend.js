class Node{
  constructor(valn){
    this.value=valn;
    this.next=null;
  }
}
class LinkedList{
  constructor(){
    this.head=null;
    this.size=0;
  }
  prepand(valp){
    const aNode=new Node(valp)
    if(this.head==null){
      this.head=aNode
    }else{
      aNode.next=this.head
      this.head=aNode;
    }
    this.size++
  }
  print(){
    let curr=this.head
    let str="";
    if(this.head==null){
      console.log('empty')
    }else{
      while(curr){
        str+=curr.value+" "
        curr=curr.next
      }
    }
    console.log(str)
  }
}
const li=new LinkedList();
li.prepand(10)
li.prepand(20)
li.prepand(30)
li.print()
