// Problem 1: Reverse a String
// function stringReverse(str){
//     let reverse="";
//     for(let i=str.length-1;i>=0;i--){
//         reverse+=str[i];
//     }
//     return reverse;
// }
// console.log(stringReverse("hello")); 


// Problem 2: Count Vowels in a String
// function vowelCount(str){
//     let count=0;
//     for(let i=0; i<str.length; i++){
//         if(str[i]== 'a' || str[i]== 'e' || str[i]== 'i' || str[i]== 'o' || str[i]== 'u' ||
//            str[i]== 'A' || str[i]== 'E' || str[i]== 'I' || str[i]== 'O' || str[i]== 'U'){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(vowelCount("programming"));

// Problem 3: Check for Palindrome
// function isPalindrome(str){
//     let left=0;
//     let right=str.length-1;
//     while(left < right){
//         if(str[left] !== str[right]){
//             return false;
//         }
//         left++;
//         right--;
//     }
//     return true;
// }
// console.log(isPalindrome("madam")); 
// console.log(isPalindrome("hello")); 

// Problem 4: Find the Maximum Number
// function maxFinder(arr){
//     let max=arr[0];
//     for(let i=1; i<arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i];
//         }
//     }
//     return max;
// }
// console.log(maxFinder([5, 1, 9, 3])); 

// Problem 5: Remove Duplicates from an Array
// function removeDuplicates(arr) {
//   let unique = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!unique.includes(arr[i])) {
//       unique.push(arr[i]);
//     }
//   }
//   return unique;
// }

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));

// Problem 6: Sum of All Numbers in an Array
// function add(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }
// console.log(add([1, 2, 3, 4]));

// Problem 7: Find Even Numbers in an Array
// function evenFinder(arr) {
//   let evens = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       evens.push(arr[i]);
//     }
//   }
//   return evens;
// }
// console.log(evenFinder([1, 2, 3, 4, 5, 6]));

// Problem 8: Capitalize First Letter of Each Word
// function Capitalize(str) {
//   let words = str.split(" ");
//   let result = [];
//   for (let i = 0; i < words.length; i++) {
//     let word = words[i];
//     if (word.length > 0) {
//       result.push(word[0].toUpperCase() + word.slice(1));
//     } else {
//       result.push(word); 
//     }
//   }

//   return result.join(" ");
// }
// console.log(Capitalize("hello world")); 
    
// Problem 9: Find the Factorial of a Number
// function Factorial(n) {
//   if (n === 0) {
//     return 1;
//   }
//   return n * Factorial(n - 1);
// }
// console.log(Factorial(5)); 

// Problem 10: PingPong Challenge
// function pingPongGame() {
//   for (let i = 1; i <= 20; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("PingPong");
//     } else if (i % 3 === 0) {
//       console.log("Ping");
//     } else if (i % 5 === 0) {
//       console.log("Pong");
//     } else {
//       console.log(i);
//     }
//   }
// }

// pingPongGame();

