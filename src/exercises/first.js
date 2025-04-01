import { BinaryTreeNode } from '../DFS/index.js';

(() => {
	// TREE
	const rootSumToLeafNumbers = BinaryTreeNode.create(1);
	rootSumToLeafNumbers.left = BinaryTreeNode.create(8);
	rootSumToLeafNumbers.right = BinaryTreeNode.create(4);
	rootSumToLeafNumbers.left.left = BinaryTreeNode.create(6);
	rootSumToLeafNumbers.left.right = BinaryTreeNode.create(7);
	rootSumToLeafNumbers.right.right = BinaryTreeNode.create(2);

	//All paths
	function dfsCollectPaths(node, path = [], allPaths = []) {
		if (node === null) {
			return;
		}
		path.push(node.value);

		if (node.left === null && node.right === null) {
			allPaths.push([...path]);
		} else {
			dfsCollectPaths(node.left, path, allPaths);

			dfsCollectPaths(node.right, path, allPaths);
		}

		path.pop();
	}

	function getAllPaths(root) {
		const allPaths = [];
		dfsCollectPaths(root, [], allPaths);
		return allPaths;
	}

	const exercise = (node) => {
		if (!node) return null;
		const results = [];

		getAllPaths(node).forEach((sumArr) => {
			const joinedString = sumArr.join('');
			results.push(Number(joinedString));
		});

		return results;
	};

	const resultExercise1 = exercise(rootSumToLeafNumbers);
	console.log(resultExercise1); // Ouput: [ 186, 187, 142 ]
})();
