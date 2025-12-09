class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    } 
}

class Tree {
    constructor(array) {
        this.array = array;
        this.root = this.buildTree(this.array);
    }

    buildTree(array) {
        // Base case
        if (array.length === 0) return null;

        // Remove duplicate values from array
        const unique_arr = [...new Set(array)]

        // Sort array
        const sorted_arr = unique_arr.sort((a, b) => a - b);

        // Find the middle number
        const start = 0;
        const end = sorted_arr.length - 1;
        const mid_index = Math.floor((end - start) / 2);
        const mid = sorted_arr[mid_index];

        // Create starting node
        const node = new Node(mid);

        // Create left subtree
        const left_array = sorted_arr.slice(0, mid_index);
        node.left = this.buildTree(left_array);

        // Create right subtree
        const right_arr = sorted_arr.slice(mid_index + 1);
        node.right = this.buildTree(right_arr);

        return node;
    }

    // Insert value into BST
    insert(value, current_node = this.root) {
        if (this.root === null ) {
            this.root = new Node(value);
            return;
        }

        if (current_node.data === value) {
            return;
        }

        if (value > current_node.data) {
            if (current_node.right === null) {
                current_node.right = new Node(value);
            } else {
                this.insert(value, current_node.right);
            }
        } else {
            if (current_node.left === null) {
                current_node.left = new Node(value);
            } else {
                this.insert(value, current_node.left);
            }
        }

        return;
    }

    // TODO: Delete value from BST
    deleteItem(value) {
        return
    }

    // TODO: Find node in BST
    find(value) {
        return
    }



}

export { Tree }