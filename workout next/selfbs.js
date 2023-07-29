function bs(arr,target){
  let leftI=0;
  let rightI=arr.length-1;
while(leftI<=rightI){
  let medI=Math.floor((leftI+rightI)/2)
  if(target===arr[medI])
  return medI;
  if(target<arr[medI]){
    rightI=medI-1
  }else{
    leftI=medI+1
  }
}
return -1
}
console.log(bs([2,3,4,5,6],5))