import { root } from './index.js';

(() => {
	const postOrderDFS = (branch) => {
		if (branch === null) {
			return null;
		}

		postOrderDFS(branch.left);
		postOrderDFS(branch.right);
		console.log(`Postorder: ${branch.value}`);
	};

	const postDFSResult = postOrderDFS(root);

	console.log(postDFSResult);
})();
