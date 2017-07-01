function sortUniqueLists(list1, list2) {
	var hash = {};
	var result = [];

	var maxLen = list1.length > list2.length ? list1.length : list2.length;

	for (var i = 0; i < maxLen; i++) {
		if (list1[i] !== undefined) {
			hash[list1[i]] = 1;
		}

		if (list2[i] !== undefined) {
			hash[list2[i]] = 1;
		}
	}

	for (var key in hash) {
		result.push(parseInt(key));
	}

	return result;
}