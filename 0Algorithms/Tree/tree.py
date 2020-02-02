class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


class Tree:
    def __init__(self):
        self.root = None
        self.size = 0

    def insert(self, value):
        node = Node(value)

        if not self.root:
            self.root = node
            self.size += 1
            return self
        else:
            current = self.root

            while(True):
                if value == current.value:
                    return 'No duplicates allowed'
                if value < current.value:
                    if current.left == None:
                        current.left = node
                        self.size += 1
                        return self
                    current = current.left
                else:
                    if current.right == None:
                        current.right = node
                        self.size += 1
                        return self
                    current = current.right


tree = Tree()
tree.insert(50)
tree.insert(49)
tree.insert(52)

test = tree.root

print(test.value, test.left.value, test.right.value)
