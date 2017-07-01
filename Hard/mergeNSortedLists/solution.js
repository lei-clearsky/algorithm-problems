/**
 * This solution uses the concept of a Graph in order to divide and conquer.
 *
 * Illustration of a graph:
 * 1 |	|	|	|	|	*
 * 2  |		  |		  |		*
 * 3 	  |			     |
 * 4			  |
 *
 * Line 1 is an array, each element ("|") is a List Node. 
 * If the length of the current array is odd, add a null element ("*").
 * This allows us to compare the array two by two.
 * The result is then place into a new array (Line 2).
 * We keep doing this until the lengh of the array is 1, which means we merged all elements.
*/

function mergeTwoLists(list1, list2) {
	if (list1 === null) return lists2;
	if (list2 === null) return list1;

	if (list1.val < list2.val) {
		list1.next = mergeTwoLists(list1.next, list2)
		return list1;
	} else {
		list2.next = mergeTwoLists(list2.next, list1);
		return list2;
	}
}

function removeNullFromLists(lists) {
	for (var i = 0; i < lists.length; ) {
		if (lists[i]) {
			i++;
		} else {
			lists.splice(i, 1);
		}
	}

	return lists;
}

function mergeKLists(lists) {
	lists = removeNullFromLists(lists);

	if (lists.length === 0) return [];
	if (lists.length === 1) return lists[0];

	var tempArr = [];

	while (lists.length > 1) {
		var len = lists.length;

		if (len % 2 !== 0) {
			lists.push(null);
			len++;
		}

		for (var i = 0; i < len; i += 2) {
			tempArr.push(mergeTwoLists(lists[i], lists[i + 1]))
		}

		lists = tempArr;
		tempArr = [];
	}

	return lists[0];
}