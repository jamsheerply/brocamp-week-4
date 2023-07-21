let num=1
function show(){
  console.log('hai '+ num)
  num++
  show();
  
}
show();