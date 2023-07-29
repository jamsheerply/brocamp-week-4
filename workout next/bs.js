function bs(arr,target){
  let leftI=0
  let rightI=arr.length-1
  while(leftI<=rightI){
    let midI=Math.floor((leftI+rightI)/2)
    if(target===arr[midI])
      return midI
      if(target<arr[midI]){
        rightI=midI-1;
      }else{
        leftI=midI+1;
      }
    } 
    return -1
  }
  console.log(bs([1,2,4,6,7],7))
