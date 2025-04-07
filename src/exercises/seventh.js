(() => {
	function letterCombinations(digits) {
		if (digits.length === 0) return [];

		// Digit-to-letters mapping (index 0 and 1 are empty)
		const digitMap = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];

		const result = [];

		// Backtracking helper function
		function backtrack(current, index) {
			// Base case: combination is complete
			if (index === digits.length) {
				result.push(current);
				return;
			}

			// Get letters for the current digit (e.g., '2' → 'abc')
			const digit = digits[index];
			const letters = digitMap[digit];

			// Try each letter for the current digit
			for (const letter of letters) {
				backtrack(current + letter, index + 1); // Recurse for next digit
			}
		}

		backtrack('', 0); // Start with empty string and first digit
		return result;
	}

	// Example usage
	console.log(letterCombinations('23'));
	// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
})();
