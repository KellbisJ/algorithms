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

export { BinaryTreeNode, root };
