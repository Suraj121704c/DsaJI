function countGoodSegments(arr, k) {
    let count = 0;
    let sum = 0;
    let start = 0;
    let end = 0;
    while (end < arr.length) {
      sum += arr[end];
      while (sum > k) {
        sum -= arr[start];
        start++;
      }
      count += end - start + 1;
      end++;
    }
    return count;
}

let arr = [1, 2, 3, 4, 5]
let k = 7
countGoodSegments(arr, k)

// Subarrays Having Sum Less Than M
function myfunction(arr, n, k) {
  let sum = arr[0];
  let high = 0;
  let low = 0;
  let count = 0;

  while (high < n && low < n) {
    if (sum < k) {
      high++;
      if (high > low) {
        count += high - low;
      }
      if (high < n) {
        sum += arr[high];
      }
    } else {
      sum -= arr[low];
      low++;
    }
  }

  console.log(count);
}

 
function runProgram(input) {
  // Write Code Here
  input = input.split("\n");
  tc = +input[0];
  line = 1;
  for (let i = 0; i < tc; i++) {
    size = input[line].split(" ").map(Number);
    line++;
    n = +size[0];
    k = +size[1];
    arr = input[line].split(" ").map(Number);
    myfunction(arr, n, k);
    line++;
  }
} 