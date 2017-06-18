function Node(value) {
    this.value = value;
    this.children = [];
}

// breath-first tree traversal
function breathFirst(node) {
	var queue = [node];

	while(queue.length > 0) {
		var current = queue.shift();
		console.log(current.value);

		// es6 queue.push(...current.children);
		Array.prototype.push.apply(queue, current.children);
	}
}

// depth-first tree traversal - pre order
function depthFirstPreOrderA(node) {
	console.log(node.value);

	node.children.forEach(function(child) {
		depthFirstInOrder(child);
	});
}

function depthFirstPreOrderB(node) {
	var stack = [node];

	while(stack.length) {
		var current = stack.shift();
		console.log(current.value);
		Array.prototype.unshift.apply(stack, current.children);
	}
}

// depth-first tree traversal - post order
function depthFirstPostOrder(node) {
	node.children.forEach(function(child) {
		depthFirstPostOrder(child);
	});

	console.log(node.value);
}