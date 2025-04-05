(() => {
	function orangesRotting(grid) {
		const queue = [];
		let fresh = 0;
		const rows = grid.length;
		const cols = grid[0].length;

		// Initialize queue with rotten oranges and count fresh ones
		for (let r = 0; r < rows; r++) {
			for (let c = 0; c < cols; c++) {
				if (grid[r][c] === 2) {
					queue.push([r, c, 0]); // [row, col, time]
				} else if (grid[r][c] === 1) {
					fresh++;
				}
			}
		}

		if (fresh === 0) return 0; // No fresh oranges to rot

		const directions = [
			[-1, 0],
			[1, 0],
			[0, -1],
			[0, 1],
		]; // 4-directional
		let time = 0;

		while (queue.length > 0) {
			const [r, c, t] = queue.shift();
			for (const [dr, dc] of directions) {
				const nr = r + dr;
				const nc = c + dc;
				if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === 1) {
					grid[nr][nc] = 2; // Mark as rotten
					fresh--;
					queue.push([nr, nc, t + 1]);
					time = Math.max(time, t + 1);
				}
			}
		}

		return fresh === 0 ? time : -1;
	}

	const grid = [
		[2, 1, 1],
		[1, 1, 0],
		[0, 1, 1],
	];
	console.log(orangesRotting(grid)); // Output: 4
	console.log(
		orangesRotting([
			[0, 2],
			[2, 0],
		])
	); // Output: 0
	console.log(
		orangesRotting([
			[1, 1],
			[1, 0],
		])
	); // Output: -1
})();
