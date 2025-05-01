(() => {
	function trap(height) {
		let left = 0,
			right = height.length - 1;
		let left_max = 0,
			right_max = 0;
		let water = 0;

		while (left < right) {
			if (height[left] < height[right]) {
				if (height[left] >= left_max) {
					left_max = height[left];
				} else {
					water += left_max - height[left];
				}
				left++;
			} else {
				if (height[right] >= right_max) {
					right_max = height[right];
				} else {
					water += right_max - height[right];
				}
				right--;
			}
		}

		return water;
	}

	// Example 1: Classic Case
	const height1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
	console.log('Example 1 Output:', trap(height1)); // Output: 6

	// Example 2: Deeper Trapping
	const height2 = [4, 2, 0, 3, 2, 5];
	console.log('Example 2 Output:', trap(height2)); // Output: 9

	// Example 3: Edge Case (No Trapping)
	const height3 = [1, 2, 3, 4];
	console.log('Example 3 Output:', trap(height3)); // Output: 0

	// Example 4: Single Bar
	const height4 = [5];
	console.log('Example 4 Output:', trap(height4)); // Output: 0
})();
