 function fibno(n){
  if(n<2){
    return n
  }
  return fibno(n-1)+fibno(n-2);
 }
 console.log(fibno(7));