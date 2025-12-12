//Find missing values [1,2,5,7,9,23,45] // Print all the missing numbers using array method


const arr = [1, 2, 5, 7, 9, 23, 45];
let missingvalue = [];

let min = Math.min(...arr);
let max = Math.max(...arr);

for (let i = min; i <= max; i++) {
  if (!arr.includes(i)) {
    missingvalue.push(i);
  }
}

console.log("Missing numbers:", missingvalue);
