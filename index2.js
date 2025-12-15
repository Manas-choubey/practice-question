//Sorting [2,6,5,78,45,23,76,34] sort in ascending and descending in using the array method

let arr = [2,6,5,78,45,23,76,34];
arr.sort((a,b) => a-b);
console.log(arr); //Ascending order

arr.sort((a,b) => b-a);
console.log(arr);  //Descending order

//Ascending order Using Custom Function

let nums = [2,6,5,78,45,23,76,34];

for(let i = 0;i < nums.length;i++){
  for(let j = i+1;j<nums.length;j++){
    if(nums[i] > nums[j]){
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
    }
  }
}
console.log(nums);

//Descending order using Custom Function
let nums1 = [2,6,5,78,45,23,76,34];

for(let i = 0;i<nums1.length;i++){
  for(let j = i+1;j<nums1.length;j++){
    if(nums1[i] < nums1[j]){
      let temp = nums1[i];
      nums1[i] = nums1[j];
      nums1[j] = temp;
     }
  }
}
console.log(nums1)



