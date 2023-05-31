 
// Javascript code for Max Area 
// Water Container
function maxArea(A, len)
{
	let l = 0;
	let r = len -1;
	let area = 0;

	while (l < r)
	{
		
		// Calculating the max area    height          width 
		area = Math.max(area, Math.min(A[l], A[r]) * (r - l));
		
		if (A[l] < A[r])
			l += 1;
		else
			r -= 1;
	}
	return area;
}

// Driver code
let a = [ 1, 5, 4, 3 ];
let b = [ 3, 1, 2, 4, 5 ];
 
let len1 = a.length;
console.log(maxArea(a, len1) + "</br>");

let len2 = b.length;
console.log(maxArea(b, len2));

// Count Units 
// Javascript program to find maximum amount of water that can
// be trapped within given set of bars.
	
	// let arr = [ 3, 0 , 2, 0 , 4];
	
	// Method for maximum amount of water
	function findWater(n)
	{
	
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
		for (let i = 1; i < n; i++)
			left[i] = Math.max(left[i - 1], arr[i]);
 
		// Fill right array
		right[n - 1] = arr[n - 1];
		for (let i = n - 2; i >= 0; i--)
			right[i] = Math.max(right[i + 1], arr[i]);
 
		// Calculate the accumulated water element by element
		// consider the amount of water on i'th bar, the
		// amount of water accumulated on this particular
		// bar will be equal to min(left[i], right[i]) - arr[i] .
		for (let i = 0; i < n; i++)
			water += Math.min(left[i], right[i]) - arr[i];
 
		return water;
	}
	
	// Driver method to test the above function
	 console.log(findWater(arr.length));