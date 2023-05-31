// Valid Palindrome 2   Question 
function runProgram(input) {
    input=input.split("\n");
    let l=1;
    let tc=+input[0];
    for(let i=0; i<tc; i++){
        let str=input[l++];
        let ans=isPalindrome(str);
      ans ?  console.log("YES") :  console.log("NO")
    }
  }
  
  function isPalindrome(s) {
    let i = 0;
    let j = s.length - 1;
  
    while (i < j) {
      if (s[i] !== s[j]) {
        return isSubPalindrome(s, i + 1, j) || isSubPalindrome(s, i, j - 1);
      }
      i++;
      j--;
    }
  
    return true;
  }
  
  function isSubPalindrome(s, i, j) {
    while (i < j) {
      if (s[i] !== s[j]) {
        return false;
      }
      i++;
      j--;
    }
  
    return true;
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
   