(() => {
	function searchRotatedSortedArray(nums, target) {
		let low = 0,
			high = nums.length - 1;

		while (low <= high) {
			const mid = Math.floor((low + high) / 2);

			if (nums[mid] === target) {
				return mid; // Target found
			}

			// Check if the left half [low...mid] is sorted
			if (nums[low] <= nums[mid]) {
				// If target is in the left sorted half
				if (nums[low] <= target && target < nums[mid]) {
					high = mid - 1; // Search left
				} else {
					low = mid + 1; // Search right
				}
			}
			// Otherwise, the right half [mid...high] is sorted
			else {
				// If target is in the right sorted half
				if (nums[mid] < target && target <= nums[high]) {
					low = mid + 1; // Search right
				} else {
					high = mid - 1; // Search left
				}
			}
		}

		return -1; // Target not found
	}

	// Example 1: Target exists in the rotated part
	console.log(searchRotatedSortedArray([4, 5, 6, 7, 0, 1, 2], 0)); // Output: 4

	// Example 2: Target does not exist
	console.log(searchRotatedSortedArray([4, 5, 6, 7, 0, 1, 2], 3)); // Output: -1

	// Example 3: Single-element array (edge case)
	console.log(searchRotatedSortedArray([1], 0)); // Output: -1

	// Example 4: Target at pivot point
	console.log(searchRotatedSortedArray([5, 1, 3], 3)); // Output: 2
})();
