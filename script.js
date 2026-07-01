// Compound Interest Calculator

let P = 40000;      
let r = 0.10;       
let n = 1;          
let t = 3;         


let A = P * Math.pow((1 + r / n), (n * t));

let CI = A - P;

console.log("Principal Amount: " + P);
console.log("Rate of Interest: " + (r * 100) + "%");
console.log("Time: " + t + " years");
console.log("Total Amount: " + A.toFixed(2));
console.log("Compound Interest: " + CI.toFixed(2));