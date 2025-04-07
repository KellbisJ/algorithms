(() => {
	// Sorry I don't understand this shit.
	function shortestBridge(grid) {
		const n = grid.length;
		const m = grid[0].length;
		let found = false;

		// This queue will hold the border cells of the first island to begin BFS later.
		const queue = [];

		// Helper DFS function to mark the entire first island.
		// It changes island cells (1) to 2 and collects their coordinates.
		function dfs(i, j) {
			// Check out-of-bound indices and ensure the cell is part of the island (== 1).
			if (i < 0 || i >= n || j < 0 || j >= m || grid[i][j] !== 1) {
				return;
			}
			// Mark the cell as visited (using 2) so that it isn’t processed again.
			grid[i][j] = 2;

			// Add this cell to the BFS queue.
			queue.push([i, j]);

			// Recursively explore all four directions.
			dfs(i - 1, j); // Up
			dfs(i + 1, j); // Down
			dfs(i, j - 1); // Left
			dfs(i, j + 1); // Right
		}

		// Identify the first island by scanning the grid.
		// Once we find a cell that is part of the first island (grid value 1),
		// we run DFS to mark the whole island.
		for (let i = 0; i < n && !found; i++) {
			for (let j = 0; j < m && !found; j++) {
				if (grid[i][j] === 1) {
					dfs(i, j);
					found = true; // Stop after marking the first island.
				}
			}
		}

		// Set up for BFS.
		// 'steps' represents the number of levels, which are the number of water cells flipped.
		let steps = 0;
		// Define four directions: right, left, down, up.
		const directions = [
			[0, 1],
			[0, -1],
			[1, 0],
			[-1, 0],
		];

		// Perform BFS from all cells of the first island simultaneously.
		while (queue.length) {
			const size = queue.length;
			// Process each level entirely.
			for (let i = 0; i < size; i++) {
				const [x, y] = queue.shift();
				// Check each of the four neighbors.
				for (const [dx, dy] of directions) {
					const newX = x + dx;
					const newY = y + dy;
					// Skip if the neighbor is out of bounds.
					if (newX < 0 || newX >= n || newY < 0 || newY >= m) continue;

					// If we find a cell with value "1", this is the second island.
					// Since BFS guarantees the shortest path, 'steps' is our answer.
					if (grid[newX][newY] === 1) {
						return steps;
					}

					// If the neighbor is water (0) and unvisited, mark it as visited (e.g., -1)
					// and add it to the BFS queue.
					if (grid[newX][newY] === 0) {
						grid[newX][newY] = -1;
						queue.push([newX, newY]);
					}
				}
			}
			// Increase the step count as we move one layer further.
			steps++;
		}

		// Return -1 if no bridge is found (this should not happen as per the problem constraints).

		return -1;
	}
	const gridExample = [
		[1, 1, 0, 0, 0],
		[1, 0, 0, 0, 0],
		[0, 0, 0, 0, 1],
		[0, 0, 0, 1, 1],
	];
	console.log('Minimum water cells to flip:', shortestBridge(gridExample));
})();
