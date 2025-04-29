(() => {
	// Two sum
	function twoSum(numbers, target) {
		let left = 0;
		let right = numbers.length - 1;
		while (left < right) {
			const sum = numbers[left] + numbers[right];
			if (sum === target) {
				return [left + 1, right + 1]; // 1-based indices
			} else if (sum < target) {
				left++;
			} else {
				right--;
			}
		}
		return []; // No solution
	}

	console.log(twoSum([2, 7, 11, 15], 9)); // Output: [1, 2]\

	// Remove Duplicates
	function removeDuplicates(nums) {
		if (nums.length === 0) return 0;
		let slow = 0;
		for (let fast = 1; fast < nums.length; fast++) {
			if (nums[fast] !== nums[slow]) {
				slow++;
				nums[slow] = nums[fast];
			}
		}
		return slow + 1;
	}

	const nums = [1, 1, 2];
	console.log(removeDuplicates(nums)); // Output: 2 (nums becomes [1, 2, ...])

	// Palindrome Check
	function isPalindrome(s) {
		let left = 0,
			right = s.length - 1;
		while (left < right) {
			// Skip non-alphanumeric characters
			while (left < right && !isAlphanumeric(s[left])) left++;
			while (left < right && !isAlphanumeric(s[right])) right--;
			// Compare characters
			if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
			left++;
			right--;
		}
		return true;
	}

	function isAlphanumeric(c) {
		return /[a-zA-Z0-9]/.test(c);
	}

	console.log(isPalindrome('A man, a plan, a canal: Panama')); // Output: true
})();
