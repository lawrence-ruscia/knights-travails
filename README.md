# Knights Travails

Find the shortest path a knight can take on a standard 8×8 chessboard using **Breadth-First Search (BFS)**.
Each square is treated as a node, and every valid knight move creates an edge between nodes—turning the board into a graph.

## How It Works

- The board consists of coordinates `[x, y]` where `0 ≤ x, y ≤ 7`.

- For any square, the knight has up to 8 possible moves (L-shaped offsets).

- Using BFS ensures that the first time we reach the target square, we've taken the minimum number of moves.

## Example

```js
knightMoves([3, 3], [4, 3]);
```

**Output:**

```js
=> You made it in 3 moves! Here's your path:

    [3,3]
    [4,5]
    [2,4]
    [4,3]
```
