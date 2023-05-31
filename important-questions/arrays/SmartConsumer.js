 
function runProgram(input) {
    input=input.split("\n");
    let tc=+input[0];
    let l=1;
    for(let i=0; i<tc; i++){
        let [N,coupon,discount]=input[l++].split(" ").map(Number);
        let costs=input[l++].split(" ").map(Number);
        SmartConsumer(N,coupon,discount,costs);
    }
 }
 
 function SmartConsumer(N,coupon,discount,costs){
     // console.log(N,coupon,discount,costs);
     let total_costs=costs.reduce((acc,current)=> {
         acc+=current;
         return  acc;
     })
     
     let costs_coupon=costs.map((el,index)=>{
         cost= el-discount;
         if(cost<0){
             cost=0;
         }
         return cost;
     })
     let coupon_costs=costs_coupon.reduce((acc,current)=>{
         acc+=current;
         return acc;
     })
     
     let cost_after_coupon=coupon_costs+coupon;
     // console.log(cost_after_coupon);
     if(cost_after_coupon<total_costs){
         console.log("YES");
     }else{
         console.log("NO");
     }
     // console.log(cost_after_coupon);
     // console.log(total_costs);
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
  