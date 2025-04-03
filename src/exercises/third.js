(() => {
	function floodFill(image, sr, sc, color) {
		const initialColor = image[sr][sc];
		if (initialColor === color) return image; // No change needed

		function dfs(x, y) {
			if (
				x < 0 ||
				y < 0 ||
				x >= image.length ||
				y >= image[0].length ||
				image[x][y] !== initialColor
			) {
				return;
			}

			image[x][y] = color;

			dfs(x - 1, y); // Up
			dfs(x + 1, y); // Down
			dfs(x, y - 1); // Left
			dfs(x, y + 1); // Right
		}

		dfs(sr, sc);
		return image;
	}

	// Example usage:
	console.log(
		floodFill(
			[
				[1, 1, 1],
				[1, 1, 0],
				[1, 0, 1],
			],
			1,
			1,
			2
		)
	);
})();
