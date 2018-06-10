function Node(val) {
	this.val = val;
	this.left = this.right = null;
}

// solution 1
function arrayToTree(arr) {
	var len = arr.length;

	if (len === 0) return false;

	return createNode(arr, 0, len - 1);
}

function createNode(arr, startIndex, endIndex) {
	if (startIndex > endIndex) return null;

	var midIndex = Math.floor((startIndex + endIndex) / 2),
		newNode = new Node(arr[midIndex]);

	newNode.left = createNode(arr, startIndex, midIndex - 1);
	newNode.right = createNode(arr, midIndex + 1, endIndex);

	return newNode;
}


