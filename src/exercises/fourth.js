(() => {
	function minKnightMoves(x, y) {
		const moves = [
			[2, 1],
			[1, 2],
			[-1, 2],
			[-2, 1],
			[-2, -1],
			[-1, -2],
			[1, -2],
			[2, -1],
		];
		const queue = [[0, 0, 0]];
		const visited = new Set();
		visited.add('0,0');

		while (queue.length > 0) {
			const [currentX, currentY, steps] = queue.shift();

			if (currentX === x && currentY === y) {
				return steps;
			}

			for (const [dx, dy] of moves) {
				const newX = currentX + dx;
				const newY = currentY + dy;
				const key = `${newX},${newY}`;

				if (!visited.has(key)) {
					visited.add(key);
					queue.push([newX, newY, steps + 1]);
				}
			}
		}
		return -1;
	}
	console.log(minKnightMoves(2, 1)); // Output: 1 (A single move)
	console.log(minKnightMoves(5, 5)); // Output: 4
	console.log(minKnightMoves(0, 0)); // Output: 0
})();
