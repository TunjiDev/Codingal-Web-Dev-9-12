// INTERVIEW PROBLEM 1 - Rest operator
// var a = [10, 11, 12, 13, 14];
// function print(b, ...a) {
//   console.log("b", b);
//   console.log("a", a);
// }

// print(8, 9, 10, 11, 12);

// // INTERVIEW PROBLEM 2 - Map function
// const arr = [1, 2, 3, 4, 5];
// const newarr = arr.map((item, index) => {
//   //   return item * 2;
//   return (item = 5);
// });

// console.log(newarr);

// INTERVIEW PROBLEM 3 - Convert Object to an array
// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4,
// };

// const arr = Object.entries(obj);
// console.log(arr);

// INTERVIEW PROBLEM 4 - separate array elements into their respective data types
// const arr = [100, "q", "Tunji", 10, 8, "C"];
// const strings = [];
// const numbers = [];
// const chars = [];

// // console.log(typeof 100, typeof "q", typeof "Tunji")

// arr.forEach((item) => {
//   if (typeof item == "string" && item.length == 1) chars.push(item);
//   if (typeof item == "string" && item.length != 1) strings.push(item);
//   if (typeof item == "number") numbers.push(item);
// });

// console.log("strings", strings, "numbers", numbers, "chars", chars);

// INTERVIEW PROBLEM 5 - Difference between slice and splice
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const newarr = arr.slice(2, 5); // does not modify the original array
// console.log("slice", newarr);
// console.log("original array after slice", arr);
// const splicedarr = arr.splice(2, 5); // modifies the original array
// console.log("splice", splicedarr);
// console.log("original array after splice", arr);

// INTERVIEW PROBLEM 6 - Difference between find and filter
// const arr = [5, 12, 8, 130, 44];
// const found = arr.find((item) => item > 10); // returns the first element that satisfies the condition
// console.log("find", found);
// const filtered = arr.filter((item) => item > 10); // returns all elements that satisfy the condition
// console.log("filter", filtered);

// INTERVIEW PROBLEM 7 - merge two objects
// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };
// const mergedObj = { ...obj1, ...obj2 }; // using spread operator
// console.log("merged object", mergedObj);

// INTERVIEW PROBLEM 8 - Js object behaviours
// const obj1 = {};
// const obj2 = {
//   name: "Adetunji Igbatayo",
// };
// const obj3 = {
//   name: "Shiki Granbell",
// };
// obj1[obj2] = {
//   name: "Rebecca Bluegarden",
// };
// obj1[obj3] = {
//   name: "Homura Kogetsu",
// };
// console.log(obj1[obj2]); // What will be the output here?
// Output: { name: 'Homura Kogetsu' }
// Explanation: In JavaScript, when using an object as a key in another object, it is coerced to a string.
// Both obj2 and obj3 are converted to the same string "[object Object]", so the second assignment overwrites the first one.
// Hence, obj1[obj2] and obj1[obj3] refer to the same property in obj1.

// INTERVIEW PROBLEM 9 - Currying function to add two numbers
// function sum(a, b) {
//   if (a && b) return a + b;

//   return function (b) {
//     return a + b;
//   };
// }

// console.log(sum(2, 3)); // Output: 5
// console.log(sum(2)(3)); // Output: 5
// Explanation: The sum function checks if both arguments a and b are provided.
// If both are provided, it returns their sum directly.
// If only one argument is provided, it returns a new function that takes the second argument and returns the sum of both.
// This allows the function to be called in two different ways: sum(2, 3) and sum(2)(3).
// In both cases, the output is 5.
// This technique is known as function currying.
// It allows functions to be called with a variable number of arguments in a flexible manner.

// INTERVIEW PROBLEM 10 - Comparison of two arrays
// console.log([] === []); // false
// console.log([] == []); // false
// Explanation: In JavaScript, both the strict equality operator (===) and the loose equality operator (==) compare object
// references when used with objects (including arrays).
// In this case, both [] create new array instances in memory.
// Since they are different instances, their references are not the same.
// Therefore, both comparisons return false.

// INTERVIEW PROBLEM 11 - What is an image map in HTML?
// An image map in HTML is a feature that allows you to define clickable areas on an image.
// These areas can be linked to different URLs or actions, enabling users to interact with specific parts of the image.
// Image maps are created using the <map> element in conjunction with the <area> element.
// The <map> element defines the image map, while the <area> elements define the clickable areas within the map.
// Each <area> element specifies the shape, coordinates, and link for the clickable region.
// Image maps are useful for creating interactive images, such as diagrams, charts, or navigation menus,
// where different parts of the image need to link to different destinations.
// Example:
// <img src="example.jpg" usemap="#examplemap" alt="Example Image">
// <map name="examplemap">
//   <area shape="rect" coords="34,44,270,350" href="link1.html" alt="Link 1">
//   <area shape="circle" coords="337,300,44" href="link2.html" alt="Link 2">
// </map>
// In this example, the image "example.jpg" has an associated image map named "examplemap".
// Two clickable areas are defined: a rectangular area linking to "link1.html" and a circular area linking to "link2.html".
// Users can click on these areas to navigate to the specified links.
