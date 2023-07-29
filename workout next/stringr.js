// var str="my name is jamsheer"
// const r=reverse(str)
// console.log(r)

// function reverse(str){
//  return str.split("").reverse().join("  ");
// }

var str="my name is jamsheer"
const re=reverse(str)
console.log(re)

function reverse(str){
 let rev=""
 for(const c of str)
 rev=c+rev
 return rev
}
