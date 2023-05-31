// Javascript implementation of the approach

// Function to return the maximum
// water that can be stored
function maxWater(arr, n) {
  // To store the maximum water
  // that can be stored
  let res = 0;

  // For every element of the array
  // except first and last element
  for (let i = 1; i < n - 1; i++) {
    // Find maximum element on its left
    let left = arr[i];
    for (let j = 0; j < i; j++) {
      left = Math.max(left, arr[j]);
    }
    // [3, 0, 2, 0 ,4]
    // [3]
    // Find maximum element on its right
    let right = arr[i];
    for (let j = i + 1; j < n; j++) {
      right = Math.max(right, arr[j]);
    }

    // Update maximum water value
    res += Math.min(left, right) - arr[i];
  }
  return res;
}

let arr = [3, 0, 2, 0, 4];
let n = arr.length;

document.write(maxWater(arr, n));

// Javascript program to find maximum amount of water that can
// be trapped within given set of bars.

// let arr = [ 3, 0 , 2, 0 , 4];

// Method for maximum amount of water
function findWater(n) {
  // left[i] contains height of tallest bar to the
  // left of i'th bar including itself
  let left = new Array(n);

  // Right [i] contains height of tallest bar to
  // the right of ith bar including itself
  let right = new Array(n);

  // Initialize result
  let water = 0;

  // Fill left array
  left[0] = arr[0];
  for (let i = 1; i < n; i++) left[i] = Math.max(left[i - 1], arr[i]);
  // [3, 0 , 2, 0 , 4]
  // left = [3, 3,  3,  3, 4]
  // Fill right array
  right[n - 1] = arr[n - 1];
  for (let i = n - 2; i >= 0; i--) right[i] = Math.max(right[i + 1], arr[i]);
  // [3, 0 , 2, 0 , 4]
  // right= [4,  4   4,  4  ,4]
  // Calculate the accumulated water element by element
  // consider the amount of water on i'th bar, the
  // amount of water accumulated on this particular
  // bar will be equal to min(left[i], right[i]) - arr[i] .
  for (let i = 0; i < n; i++) water += Math.min(left[i], right[i]) - arr[i];
  // [3, 0 , 2, 0 , 4]
  // left = [3, 3,  3,  3, 4]
  // right= [4,  4   4,  4  ,4]
  // water= 0+  3 +  1+ 3+  0 = 7
  return water;
}

// Driver method to test the above function
console.log(findWater(arr.length));

// This code is contributed by unknown2108
