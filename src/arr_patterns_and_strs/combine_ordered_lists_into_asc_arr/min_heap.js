(() => {
	// 3. Min-Heap Approach (Most Efficient)
	class MinHeap {
		constructor() {
			this.heap = [];
		}

		insert(value) {
			this.heap.push(value);
			this.bubbleUp();
		}

		bubbleUp() {
			let idx = this.heap.length - 1;
			while (idx > 0) {
				const parentIdx = Math.floor((idx - 1) / 2);
				if (this.heap[parentIdx].val <= this.heap[idx].val) break;
				[this.heap[parentIdx], this.heap[idx]] = [this.heap[idx], this.heap[parentIdx]];
				idx = parentIdx;
			}
		}

		extractMin() {
			const min = this.heap[0];
			const end = this.heap.pop();
			if (this.heap.length > 0) {
				this.heap[0] = end;
				this.sinkDown();
			}
			return min;
		}

		sinkDown() {
			let idx = 0;
			const length = this.heap.length;
			while (true) {
				const leftChildIdx = 2 * idx + 1;
				const rightChildIdx = 2 * idx + 2;
				let swapIdx = null;

				if (leftChildIdx < length && this.heap[leftChildIdx].val < this.heap[idx].val) {
					swapIdx = leftChildIdx;
				}
				if (
					rightChildIdx < length &&
					this.heap[rightChildIdx].val <
						(swapIdx === null ? this.heap[idx].val : this.heap[leftChildIdx].val)
				) {
					swapIdx = rightChildIdx;
				}

				if (swapIdx === null) break;
				[this.heap[idx], this.heap[swapIdx]] = [this.heap[swapIdx], this.heap[idx]];
				idx = swapIdx;
			}
		}

		size() {
			return this.heap.length;
		}
	}

	// Main function using MinHeap
	function mergeKSortedArrays(arrays) {
		const heap = new MinHeap();
		arrays.forEach((arr, arrIdx) => {
			if (arr.length > 0) {
				heap.insert({ val: arr[0], arrIdx, elementIdx: 0 });
			}
		});

		const result = [];
		while (heap.size() > 0) {
			const { val, arrIdx, elementIdx } = heap.extractMin();
			result.push(val);
			const nextElementIdx = elementIdx + 1;
			if (nextElementIdx < arrays[arrIdx].length) {
				heap.insert({ val: arrays[arrIdx][nextElementIdx], arrIdx, elementIdx: nextElementIdx });
			}
		}
		return result;
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
