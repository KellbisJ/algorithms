(() => {
	function maxArea(height) {
		let left = 0;
		let right = height.length - 1;
		let max = 0;

		while (left < right) {
			const currentWidth = right - left;
			const currentHeight = Math.min(height[left], height[right]);
			const currentArea = currentWidth * currentHeight;

			max = Math.max(max, currentArea);

			if (height[left] < height[right]) {
				left++;
			} else {
				right--;
			}
		}

		return max;
	}

	// Example 1
	const heights1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
	console.log('Max Area (Example 1):', maxArea(heights1)); // Output: 49

	// Example 2
	const heights2 = [4, 3, 2, 1, 4];
	console.log('Max Area (Example 2):', maxArea(heights2)); // Output: 16

	// Example 3 (Single element - edge case)
	const heights3 = [5];
	console.log('Max Area (Example 3):', maxArea(heights3)); // Output: 0 (No container can be formed)
})();
