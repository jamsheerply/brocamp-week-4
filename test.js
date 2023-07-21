// common element on two arry
let arr1 = [1, 1, 2, 2, 3];
let arr2 = [1, 2, 4, 4, 5];
let arr3 = [];

for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < arr2.length; j++) {
    if (arr1[i] === arr2[j]) {
      let values = arr1[i];
      let flag = 0;
      for (let k = 0; k < arr3.length; k++) {
        if (values === arr3[k]) {
          flag = 1;
          break;
        }
      }
      if (flag === 0) {
        arr3.push(values);
      }
    }
  }
}

console.log(arr3);
