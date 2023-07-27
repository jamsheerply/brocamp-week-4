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
  index(val,index){
    const newNode=new Node(val)
    if(index<0||index>this.size){
      console.log('invalid')
    }else{
      if(index==0){
        newNode.next=this.head
        this.head=newNode;
      }else{
        let curr=this.head;
        let prev
        for(let i=0;i<index;i++){
          prev=curr;
          curr=curr.next
        }
        newNode.next=curr;
        prev.next=newNode;
        }
      }
      this.size++
    }
    removeByValue(val){
      let curr=this.head;
      let prev=null
      while(curr!==null &&this.head.value==val){
          if(prev==null){
            this.head=curr.next;
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
      let str=" "
      if(this.head==null){
        console.log("empty")
      }else{
        while(curr!==null){
          str+=curr.value+" "
          curr=curr.next
        }
      }
      console.log(str)

    }
}
const li=new LinkedList()
li.index(10,0)
li.index(20,1)
li.index(30,2)

li.removeByValue(30)
li.print()