class Graph {
	constructor() {
		this.adjacencyList = new Map();
	}

	addNode(node) {
		if (!this.adjacencyList.has(node)) {
			this.adjacencyList.set(node, []);
		}
	}

	addEdge(node1, node2) {
		this.adjacencyList.get(node1).push(node2);
		this.adjacencyList.get(node2).push(node1); // For undirected graph
	}

	bfs(startNode, targetNode = null) {
		const visited = new Set();
		const queue = [{ node: startNode, path: [startNode] }];
		const result = [];

		visited.add(startNode);

		while (queue.length > 0) {
			const { node, path } = queue.shift();
			result.push(node);

			// If we're searching for a target and found it, return the path
			if (targetNode && node === targetNode) {
				return { path, visitedNodes: result };
			}

			const neighbors = this.adjacencyList.get(node);

			for (const neighbor of neighbors) {
				if (!visited.has(neighbor)) {
					visited.add(neighbor);
					queue.push({
						node: neighbor,
						path: [...path, neighbor],
					});
				}
			}
		}

		// If we were searching for a target but didn't find it
		if (targetNode) {
			return { path: null, visitedNodes: result };
		}

		return result; // Return all nodes in BFS order
	}
}

// Example usage:
const graph = new Graph();

// Add nodes
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');
graph.addNode('E');
graph.addNode('F');

// Add edges
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

// Traverse the graph from 'A'
console.log('BFS Traversal:', graph.bfs('A'));
// Output: ["A", "B", "C", "D", "E", "F"]

// Find shortest path from 'A' to 'F'
const { path, visitedNodes } = graph.bfs('A', 'F');
console.log('Shortest path from A to F:', path);
// Output: ["A", "B", "D", "F"] or ["A", "C", "E", "F"] (both are valid shortest paths)
console.log('Nodes visited in order:', visitedNodes);
