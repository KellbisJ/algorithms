(() => {
	function lengthOfLongestSubstring(s) {
		const charMap = new Map(); // Stores the last index of each character
		let maxLength = 0;
		let start = 0;

		for (let end = 0; end < s.length; end++) {
			const currentChar = s[end];

			// If the character is in the map and within the current window
			if (charMap.has(currentChar) && charMap.get(currentChar) >= start) {
				start = charMap.get(currentChar) + 1; // Move start past the last occurrence
			}

			charMap.set(currentChar, end); // Update the last index of the character
			const currentLength = end - start + 1;
			maxLength = Math.max(maxLength, currentLength);
		}

		return maxLength;
	}

	// Example 1: Basic Case
	console.log(lengthOfLongestSubstring('abcabcbb')); // Output: 3 ("abc")

	// Example 2: All Repeating Characters
	console.log(lengthOfLongestSubstring('bbbbb')); // Output: 1 ("b")

	// Example 3: Substring Not at Start
	console.log(lengthOfLongestSubstring('pwwkew')); // Output: 3 ("wke" or "kew")

	// Example 4: Empty String
	console.log(lengthOfLongestSubstring('')); // Output: 0

	// Example 5: Overlapping Case
	console.log(lengthOfLongestSubstring('abba')); // Output: 2 ("ab" or "ba")
})();
