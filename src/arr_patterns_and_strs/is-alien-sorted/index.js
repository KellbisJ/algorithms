(() => {
	function isAlienSorted(words, order) {
		const orderMap = {};
		for (let i = 0; i < order.length; i++) {
			orderMap[order[i]] = i;
		}

		for (let i = 0; i < words.length - 1; i++) {
			const word1 = words[i];
			const word2 = words[i + 1];
			let minLen = Math.min(word1.length, word2.length);
			let compare = 0;

			for (let j = 0; j < minLen; j++) {
				const char1 = word1[j];
				const char2 = word2[j];
				if (orderMap[char1] < orderMap[char2]) {
					compare = -1;
					break;
				} else if (orderMap[char1] > orderMap[char2]) {
					return false;
				}
			}

			if (compare === 0 && word1.length > word2.length) {
				return false;
			}
		}

		return true;
	}
	const words = ['hello', 'leetcode'];
	const order = 'hlabcdefgijkmnopqrstuvwxyz';
	console.log(isAlienSorted(words, order)); // Output: true
})();
