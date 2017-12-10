/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
 
// solution 1
function treeToList(node, depth, list) {
  if (list.length < depth) {
    list.push([]);
  }

  list[depth-1].push(node.val);
  
  if (node.left !== null) {
    treeToList(node.left, depth + 1, list);
  }
  
  if (node.right !== null) {
    treeToList(node.right, depth + 1, list);
  }
  
  return list;
}