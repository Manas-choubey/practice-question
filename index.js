//Q3. Add/Delete items from an array using the index [1,2,3,4,6,8,9] // add/delete an item from any index (excluding first and last)

let arr = [1,2,3,4,6,8,9];
console.log(arr);

let indexposition = 3;
let valueadd = 10;

if(indexposition > 0 && indexposition < arr.length - 1){
  arr.splice(indexposition,0,valueadd);
}
console.log("After Add:",arr)

let indexdelete = 3;

if(indexposition > 0 && indexposition < arr.length - 1){
  arr.splice(indexdelete,1);
}
console.log("After Delete:",arr);