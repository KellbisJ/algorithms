(() => {
	//1. Concatenate and Sort (Simplest, Not Optimal)

	function mergeSortedArrays(...arrays) {
		return [].concat(...arrays).sort((a, b) => a - b);
	}

	// Example:
	const arr1 = [1, 3, 5];
	const arr2 = [2, 4, 6];
	const arr3 = [0, 7];
	console.log(mergeSortedArrays(arr1, arr2, arr3));
	// Output: [0, 1, 2, 3, 4, 5, 6, 7]

	//2. Divide and Conquer with Pairwise Merging (Efficient)

	// Helper: Merge two sorted arrays
	function mergeTwo(arr1, arr2) {
		const merged = [];
		let i = 0,
			j = 0;
		while (i < arr1.length && j < arr2.length) {
			if (arr1[i] < arr2[j]) {
				merged.push(arr1[i]);
				i++;
			} else {
				merged.push(arr2[j]);
				j++;
			}
		}
		return [...merged, ...arr1.slice(i), ...arr2.slice(j)];
	}

	// Main function: Merge all arrays pairwise
	function mergeKSortedArrays(arrays) {
		if (arrays.length === 0) return [];
		while (arrays.length > 1) {
			const merged = [];
			for (let i = 0; i < arrays.length; i += 2) {
				const arr1 = arrays[i];
				const arr2 = i + 1 < arrays.length ? arrays[i + 1] : [];
				merged.push(mergeTwo(arr1, arr2));
			}
			arrays = merged;
		}
		return arrays[0];
	}

	// Example:
	const arrays = [
		[1, 3, 5],
		[2, 4, 6],
		[0, 7],
	];
	console.log(mergeKSortedArrays(arrays));
	// Output: [0, 1, 2, 3, 4, 5, 6, 7]
})();
