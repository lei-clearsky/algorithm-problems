## Print a Tree
* `breadthFirst`
* `depthFirstPreOrder`
* `depthFirstPostOrder`

A tree is represented by its root node, which is what your function will receive.

You can assume that each node in the tree contains the following properties:
* `.value` — the content (data) of the node, what you should print out
* `.children` — an ordered array of child nodes for that node

Traversing over the tree with each function would produce the following results:

| Algorithm             | Order                       | Explanation                                                |
|-----------------------|-----------------------------|------------------------------------------------------------|
| `breadthFirst`        | `A B C D E F G H I J K L M` | Each "level" of the tree is printed in order               |
| `depthFirstPreOrder`  | `A B E K L C F G H M D I J` | Children nodes are visited before sibling nodes            |
| `depthFirstPostOrder` | `K L E B M F G H C I J D A` | A node is not traversed until all its children are reached |

From: https://github.com/FullstackAcademy/reacto/tree/master/tree-traversals