import { root } from './index.js';

(() => {
	const preOrderDFS = (branch) => {
		if (branch === null) {
			return null;
		}

		console.log(`Preorder: ${branch.value}`);
		preOrderDFS(branch.left);
		preOrderDFS(branch.right);
	};

	const preOrderDFSResult = preOrderDFS(root);
	console.log(preOrderDFSResult);
})();
