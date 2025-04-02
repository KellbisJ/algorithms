(() => {
	const gridBinaryMap = [
		[1, 1, 0, 0, 0],
		[1, 1, 0, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 0, 1, 1],
	];

	const dfs = (binaryMap, row, col) => {
		if (
			row < 0 ||
			row >= binaryMap.length ||
			col < 0 ||
			col >= binaryMap[0].length ||
			binaryMap[row][col] !== 1
		) {
			return;
		}
		binaryMap[row][col] = 0;
		dfs(binaryMap, row, col + 1);
		dfs(binaryMap, row + 1, col);
		dfs(binaryMap, row, col - 1);
		dfs(binaryMap, row - 1, col);
	};

	const islandDetecter = (binaryMap) => {
		let connectedIslands = 0;

		binaryMap.forEach((row, rowIndex) => {
			row.forEach((value, valueIndex) => {
				if (value === 1) {
					connectedIslands++;
					dfs(binaryMap, rowIndex, valueIndex);
				}
			});
		});

		console.log('CONECTED ISLANDS', connectedIslands); // Output is : CONECTED ISLANDS 3
	};

	islandDetecter(gridBinaryMap);
})();
