(() => {
	class BinaryTreeNode {
		constructor(value) {
			this.value = value;
			this.left = null;
			this.right = null;
		}
		static create(value) {
			return new BinaryTreeNode(value);
		}
	}

	// console.log(BinaryTreeNode.create);

	const root = BinaryTreeNode.create(1);
	root.left = BinaryTreeNode.create(2);
	root.right = BinaryTreeNode.create(3);
	root.left.left = BinaryTreeNode.create(4);
	root.left.right = BinaryTreeNode.create(5);
	root.right.left = BinaryTreeNode.create(6);
	root.right.right = BinaryTreeNode.create(7);

	const DFS = (branch, valueToSearch) => {
		if (branch === null) {
			return null;
		}

		console.log(`Situated on node with value: ${branch.value}`);

		if (branch.value === valueToSearch) {
			console.log(`Value found ${branch.value}`);
			return branch;
		}

		let left = DFS(branch.left, valueToSearch);
		let right = DFS(branch.right, valueToSearch);

		if (left != null) {
			return left;
		}
		if (right != null) {
			return right;
		}

		return null;
	};

	const DFSResult = DFS(root, 6);
	console.log(DFSResult);
})();
