// Distinct Subset 
 
// Description
// Given an integer array, find a distinct sum that can be generated from the subsets of the given array and print them in increasing order. It is given that sum of array elements is smal
// 1.
// Input
// Input Format
// The first line contains integer numbers N - the size of the array.
// The second-line contains N integer numbers a1, a2, ... aN- elements of the array.
// Constraints
// 1 <= N <= 20
// 1 <= a[i] <= 100

// Sample Input 1
// 2
// 1 2

// Sample Input 2
// 3
// 1 2 3 


// Sample Output 1
// 0 1 2 3

// Sample Output 2
// 0 1 2 3 4 5 6
// For the first sample,
// Distinct subsets of given set are {}, {1}, {2}, {1,2}. Sums of these subsets are 0, 1, 2, After removing duplicates, we get 0, 1, 2, 3. 3.
// For the second sample,
// Distinct subsets of given set are {}, {1}, {2}, {3}, {1,2}, {2,3}, {1,3} and {1,2,3}. Sums of these subsets are 0, 1, 2, 3, 3, 5, 4, 6 After removing duplicates, we get 0, 1, 2, 3, 4, 5, 6


function DistinctSubset(n,ar){
    // console.log(n,ar)
    
    let set = new Set();
    function fun(ar, i ,sum){
        
        if(i==ar.length){
            set.add(sum)
        }
        else{
            fun(ar, i+1, sum+ar[i])
            fun(ar, i+1, sum)
        }
        
    }
    
    fun(ar, 0, 0)
    
    let dist=Array.from(set)
    dist.sort((a,b)=>a-b)
    console.log(dist.join(" "))
 }
 
 
 
 function runProgram(input) {
   input=input.split("\n")
   let n=+input[0]
   let ar=input[1].trim("").split(" ").map(Number)
   
   DistinctSubset(n,ar)
 }
 
 if (process.env.USER === "") {
   runProgram(``);
 } else {
   process.stdin.resume();
   process.stdin.setEncoding("ascii");
   let read = "";
   process.stdin.on("data", function (input) {
     read += input;
   });
   process.stdin.on("end", function () {
     read = read.replace(/\n$/, "");
     read = read.replace(/\n$/, "");
     runProgram(read);
   });
   process.on("SIGINT", function () {
     read = read.replace(/\n$/, "");
     runProgram(read);
     process.exit(0);
   });
 }
  
 