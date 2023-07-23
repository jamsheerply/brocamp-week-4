var removeElement = function(nums, val) {
  let k=0;
  for(i=0;i<nums.lenth;i++){
      if(nums[i]!==val){
          nums[k]=nums[i];
          k++;
      }
  }
  nums.length=k;
  return nums;
}
let nums = [3, 2, 2, 3];
let val = 3;
let result = removeElement(nums, val);
console.log("Modified array:", result);