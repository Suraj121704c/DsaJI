// Sports programming
// Ended
// Description
// Ansh adores sport programming. He can't write programs but he loves to watch the contests' progress. Ansh even has a favorite coder and Ankush pays special attention to him.
// One day Ansh decided to collect the results of all contests where his favorite coder participated and track the progress of his coolness. For each contest where this coder participate d, he wrote out a single non-negative number - the number of points his favorite coder earned in the contest. Ansh wrote out the points for the contest in the order, in which the con tests run (naturally, no two contests ran simultaneously).
// Ansh considers a coder's performance in a contest amazing in two situations: he can break either his best or his worst performance record. First, it is amazing if during the contest t he coder earns strictly more points that he earned on each past contest. Second, it is amazing if during the contest the coder earns strictly less points that he earned on each past c ontest. A coder's first contest isn't considered amazing. Now he wants to count the number of amazing performances the coder had throughout his whole history of participating in c ontests. But the list of earned points turned out long and Ansh can't code... That's why he asks you to help him. 
 
function runProgram(input) {
    input=input.trim().split("\n");
    let tc=+input[0];
    let l=1;
    for(let i=0; i<tc; i++){
        let N=+input[l++];
        let arr=input[l++].split(" ").map(Number);
        SportsProgramming(N,arr);
    }
  }
  
  function SportsProgramming(N,arr){
      let count=0,best=arr[0],worst=arr[0];
      
      for(let i=0; i<N; i++){
          if(arr[i]>best){
              best=arr[i];
              count++;
          }
          if(arr[i]<worst){
              worst=arr[i];
              count++;
          }
      }
      console.log(count);
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
   