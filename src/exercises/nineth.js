(() => {
	function exist(board, word) {
		if (!board || board.length === 0 || word.length === 0) return false;

		const rows = board.length;
		const cols = board[0].length;

		const dfs = (i, j, index) => {
			if (index === word.length) return true;
			if (i < 0 || i >= rows || j < 0 || j >= cols || board[i][j] !== word[index]) return false;

			const temp = board[i][j];
			board[i][j] = '#'; // Mark as visited

			// Explore all 4 directions
			const found =
				dfs(i + 1, j, index + 1) ||
				dfs(i - 1, j, index + 1) ||
				dfs(i, j + 1, index + 1) ||
				dfs(i, j - 1, index + 1);

			board[i][j] = temp; // Backtrack
			return found;
		};

		for (let i = 0; i < rows; i++) {
			for (let j = 0; j < cols; j++) {
				if (board[i][j] === word[0] && dfs(i, j, 0)) {
					return true;
				}
			}
		}
		return false;
	}
	const board = [
		['A', 'B', 'C', 'E'],
		['S', 'F', 'C', 'S'],
		['A', 'D', 'E', 'E'],
	];

	console.log(exist(board, 'ABCCED')); // Expected output: true
	console.log(exist(board, 'SEE')); // Expected output: true
	console.log(exist(board, 'ABCB')); // Expected output: false
})();
