function runProgram(input){
    input=input.split("\n")
    let n=+input[0]
    
    let batsman1Scores=input[1].trim(" ").split(" ").map(Number)
    let batsman2Scores=input[2].trim(" ").split(" ").map(Number)
    
    let avg1=batsman1Scores.reduce((sum,score)=>sum+score,0)/ batsman1Scores.length;
    let avg2=batsman2Scores.reduce((sum,score)=>sum+score,0)/ batsman2Scores.length;
    
    let max;
    if(avg1>avg2){
        max=avg1
    }
    else if(avg2>avg1){
        max=avg2
    }else{
        max=0
    }
    
    
    if(max%2===0){
       console.log(Math.ceil(max))
    }
    
    else{
        console.log(-1)
    }
}
if (process.env.USERNAME === "") {
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