(() => {
	function searchMatrix(matrix, target) {
		if (matrix.length === 0 || matrix[0].length === 0) return false;

		let row = 0;
		let col = matrix[0].length - 1; // Start from top-right corner

		while (row < matrix.length && col >= 0) {
			if (matrix[row][col] === target) {
				return true; // Target found
			} else if (matrix[row][col] > target) {
				col--; // Move left (eliminate column)
			} else {
				row++; // Move down (eliminate row)
			}
		}

		return false; // Target not found
	}

	// Test Case 1: Target exists
	console.log(
		searchMatrix(
			[
				[1, 4, 7, 11],
				[2, 5, 8, 12],
				[3, 6, 9, 16],
				[10, 13, 14, 17],
			],
			5
		)
	); // Output: true

	// Test Case 2: Target does NOT exist
	console.log(
		searchMatrix(
			[
				[1, 4, 7, 11],
				[2, 5, 8, 12],
				[3, 6, 9, 16],
				[10, 13, 14, 17],
			],
			20
		)
	); // Output: false

	// Test Case 3: Single-element matrix (target matches)
	console.log(searchMatrix([[1]], 1)); // Output: true

	// Test Case 4: Single-element matrix (target does NOT match)
	console.log(searchMatrix([[1]], 2)); // Output: false

	// Test Case 5: Single-row matrix
	console.log(searchMatrix([[1, 3, 5]], 3)); // Output: true

	// Test Case 6: Single-column matrix
	console.log(searchMatrix([[1], [2], [3]], 2)); // Output: true
})();
