// Pasta Man Ended
// Description

// There is a pasta man who likes to eat a single noodle of spaghetti of some length everday.

// He currently has n noodles of some lenght. He has made a eating schedule for m days, where on the ith day ( 1 <= i <= m ) he eats a noodle of lenght len[i] if it is available, if it is not available he gets Angry but if he completes his m day schedule he is happy.

// Find out if he will be happy or angry.


// Input
// Input Format
// The first line contains the number of testcases t.

// Next 3*t lines we have the description of the t testcases.

// For each testcase there is 3 lines of input.

// The first line of input contains n, the number of noodles he has and m, the number of days of his noodle eating he has planned out.

// The second line contains n space separated integers the ith of which [ 1 <= i <= n ] represents the length of ith noodle he has.

// The third line contains m space separated integers, the ith of which [ 1 <= i <= m ] represents the length of the noodle he wishes to have on the ith day.

// Constraints
// 1 <= t <=1000

// 1 <= m <= n <= 1000

// 1 <= lenght of noodle <= 10


// Output
// Output Format
// For each testcase output ANGRY if he gets angry or HAPPY if he stays happy.


// Sample Input 1 

// 2
// 3 2
// 1 1 3
// 3 1
// 1 1
// 10
// 1
// Sample Output 1

// HAPPY
// ANGRY
// Hint

// In the first test case he can eat the 3-rd noodle on the 1-st day and the 1-st noodle on the 2-nd day, so his meal plan is feasible.

// In the second test case a noodle of length exactly 1 is needed which is not available hence he gets ANGRY.

function runProgram(input){
    input=input.split('\n');
    let tc=+input[0];
    let l=1;
    for(let i=0; i<tc; i++){
        let [n,m]=input[l++].split(" ").map(Number);
        let arr1=input[l++].split(" ").map(Number);
        let arr2=input[l++].split(' ').map(Number);
        PastaMan(n,m,arr1,arr2);
    }
}
function PastaMan(n,m,noodles, schedule) {
 let noodlesAvailable = noodles.slice();
 console.log(noodlesAvailable)
 let angry = false;

 for (let i = 0; i < schedule.length; i++) {
   let index = noodlesAvailable.indexOf(schedule[i]);
   if (index === -1) {
     angry = true;
     break;
   } else {
     noodlesAvailable.splice(index, 1);
   }
 }

 if (angry) {
   console.log("ANGRY");
 } else {
   console.log("HAPPY");
 }
}
if (process.env.USERNAME === "") {
    runProgram(``);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input; });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);});
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0); }); }