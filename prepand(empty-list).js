class Node{
  constructor(){
    this.value=this.value
    this.next=this.next
  }
}
class LinkedList{
  constructor(){
    this.head=null
    this.size=0
  }
  isEmpty(){
    return this,size===0
  }
  getSize(){
    return this.size
  }
  prepend(value){
    const node=new node(value)
    if(this.isEmpty()){
      this.head=node
    }
    this.size++
  }
}
const list =new LinkedList()
console.log('list is empty?',list.isEmpty())
console.log('list size',list.getSize())
list.prepend(10)
console.log(list)
