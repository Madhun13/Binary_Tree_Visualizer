# 🌳 Binary Tree Visualizer

A lightweight and interactive **Binary Tree Visualizer** built using vanilla **JavaScript**,
**HTML**, and **Canvas API**. This tool provides an intuitive way to visualize the structure of binary trees by entering a comma-separated level-order input, 
including `null` for missing nodes.

---

## 🚀 Demo
  
**[Live Demo](https://binary-tree-visualizer-xi.vercel.app/)**

---

## ✨ Features

- 📥 Enter binary tree input as level-order array
- 🖌️ Automatically draws the tree using canvas
- 🧼 Clear button to reset the canvas
- 🔁 Responsive layout: resizes canvas on window resize
- 🧠 Visualizes parent-child relationships clearly using curved edges

---

## 🛠️ Built With

- HTML5
- CSS3
- JavaScript
- Canvas API

---

## 📂 File Structure

```
Binary_Tree_Visualizer/
├── index.html              # UI layout and structure
├── drawBinaryTree.js       # Canvas rendering logic
├── BinaryTreeNode.js       # Binary tree node class and utilities
├── treeUtils.js            # Utilities for building and measuring tree
└── README.md               # Project overview and guide
```

---

## 📋 How to Use

1. Clone this repository:

   ```bash
   git clone https://github.com/Madhun13/Binary_Tree_Visualizer.git
   cd Binary_Tree_Visualizer
   ```

2. Open `index.html` in your browser (no server setup needed).

3. Enter input in the format:

   ```
   1,2,3,4,5,null,6
   ```

   - This input is treated as a **level-order traversal**.
   - Use `null` to denote missing children.

4. Click **Apply** to visualize the tree.

5. Use **Clear** to remove the current tree.

---

## ⚙️ How It Works

- `treeConstructor()` parses the input and constructs the binary tree in level order.
- `drawBinaryTree()` calculates canvas dimensions and renders nodes and edges.
- Nodes are drawn using `drawNode()` and connected with bezier curves by `connectEdges()`.
- Tree height and width are computed to determine layout spacing.

---

## 🙌 Contribution

Pull requests and suggestions are welcome! If you find a bug or have ideas for new features, open an issue or submit a PR.

