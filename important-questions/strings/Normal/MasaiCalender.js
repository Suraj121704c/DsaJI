// Masal calendar
// Description
// Here at Masai, the calendar system is unique.
// It shows only number of days, rather than month, year and days.
// So your task is to convert a given number into x Year y Month z Day.
// Consider a date system where there is no leap year.
// And note that the number of days per month can be represented as: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31].

function runProgram(input) {
    input=input.trim().split("\n");
    let tc=+input[0];
    let l=1;
    for(let i=0; i<tc; i++){
        let N=+input[l++];
        Calender(N);
    }
}
function Calender(N){
    let year=0;
    let month=0;
    let days=0;
     
    let months=[31,28,31,30,31,30,31,31,30,31,30,31];
    
    if(N>=365){
        year=Math.floor(N/365);
        N=N-(365*year);
    }
    if(N>=31){
        for(let i=0; i<months.length; i++){
            if(N>=months[i]){
                month++;
                N=N-months[i];
            }else{
                break;
            }
        }
    } 
    days=N;
    
     console.log(year+" Year"+" "+month+" Month "+days+" Day");
    // console.log(year);
    // console.log(month);
    // console.log(days);
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
 