const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.on("line", (line) => {
  input = Number(line);
  readline.close();
});
readline.on("close", () => {
  solution(input);
  process.exit();
});

class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  push(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }
    this.tail = newNode;
    this._size++;
  }

  front() {
    return this.head.data;
  }

  pop() {
    this.head = this.head.next;
    this.head.prev = null;
    this._size--;
  }

  size() {
    return this._size;
  }
}

const solution = (n) => {
  const list = new LinkedList();

  for (let i = 1; i <= n; i++) {
    list.push(i);
  }
  while (list.size() !== 1) {
    list.pop();
    list.push(list.front());
    list.pop();
  }
  console.log(list.front());
};
