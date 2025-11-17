const getValidMoves = (pos) => {
  const [x, y] = pos;

  const possibleMoves = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  const validMoves = [];

  // Store valid knight moves
  for (const move of possibleMoves) {
    const newX = move[0] + x;
    const newY = move[1] + y;

    const isValidX = newX >= 0 && newX <= 7;
    const isValidY = newY >= 0 && newY <= 7;
    if (isValidX && isValidY) {
      validMoves.push([newX, newY]);
    }
  }

  return validMoves;
};

export const knightMoves = (s, d) => {
  // Ensures nodes are explored FIFO
  const queue = [s];

  // Ensures each node is processed only once
  const visited = new Set([s.toString()]);

  // Tracks how to reach a node
  const parent = new Map();
  parent.set(s.toString(), null);

  while (queue.length !== 0) {
    const current = queue.shift();

    if (current === d) {
      break; // shortest path found
    }

    const neighbors = getValidMoves(current);

    for (const vertex of neighbors) {
      if (!visited.has(vertex.toString())) {
        queue.push(vertex);
        visited.add(vertex.toString());

        // Record path to current vertex
        parent.set(vertex.toString(), current);
      }
    }
  }

  // Reconstruct path
  const path = [];
  let vertex = d;

  while (vertex !== null) {
    path.unshift(vertex); // Insert at front to reverse
    vertex = parent.get(vertex.toString()); // Move to parent
  }

  console.log(`You made it in ${path.length} moves!  Here's your path:`);
  path.forEach((v) => console.log(v));
};
