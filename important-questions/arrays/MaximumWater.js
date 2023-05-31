    // O(N)
 
	let array = [3,0,2,0,4 ];
 
	console.log(findWater(5, array))
	// Method for maximum amount of water
	function findWater(n ,arr)
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
			water += Math.min(left[i] , right[i]) - arr[i];
 
		return water;
	}
  