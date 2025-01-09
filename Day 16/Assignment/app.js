// Question 1
// let arr = [1, 2, 3, 4, -10, 45]
// let val = prompt("Enter the value of n");

// console.log(arr.slice(0, val));

// // Question 2
// console.log(arr.slice(-val));

// Question 3
// let str = prompt("Enter a string");
// if(str.length === 0) {
//     console.log("String is empty")
// }
// else {
//     console.log("String is not empty")
// }

// Question 4 
// let str2 = "KrIsHmOdI";
// let idx = prompt("Enter char").slice(0,1);

// if(str2[idx] == str2[idx].toLowerCase()) {
//     console.log("Yes")
// }
// else {
//     console.log("No");
// }

// Question 5

let str = "     Kwity Modi     ";
console.log(`Original String : ${str}`);
console.log(`Trimmed String : ${str.trim()}`);

// Question 6
let arr = ['a', 'c', 10, 15, 25];
if(arr.includes('a')) {
    console.log("Element Exists in the array");
}
else {
    console.log("Element does not exists in the array");
}