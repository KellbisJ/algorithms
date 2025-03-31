import { root } from './index.js';

(() => {
	const inorderDFS = (branch) => {
		if (branch === null) {
			return null;
		}

		inorderDFS(branch.left);
		console.log(`Inorder: ${branch.value}`);
		inorderDFS(branch.right);
	};

	const inorderDFSResult = inorderDFS(root, 6);

	console.log(inorderDFSResult);
})();
