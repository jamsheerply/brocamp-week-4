function primenumber(n){
  if (n<2){
    return false
  }
  for (let i=2;i<n;i++){
    if(n%2===0){
      return false
    }
  }
  return true
}
console.log(primenumber(5))
// Big-o=o(n)
