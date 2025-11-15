# Knights Travails

Given enough turns, a knight on a standard 8x8 chess board can move from any square to any other square. Its basic move is two steps forward and one step to the side or one step forward and two steps to the side. It can face any direction.

In this problem, the chessboard can be represented as a graph:

Each square on the board is a node (or vertex). A knight’s valid moves from any square represent the edges (or connections) between the vertices. Thus, the problem of finding the shortest path for the knight’s movement becomes a graph traversal problem. The goal is to traverse the graph (the chessboard) to find the shortest route between two nodes (the start and end positions).

## Vertices and Edges

The vertices in this graph are each of the possible positions on the chessboard, represented by a pair of coordinates like [x, y], where x and y are between 0 and 7. The edges are the valid knight moves between vertices. For example, from [0,0], a knight can move to [2,1], [1,2], and so on. Each of these moves represents a connection between the vertex [0,0] and the other reachable vertices.

## Output what that full path looks like, e.g.:

> knightMoves([3,3],[4,3])
> => You made it in 3 moves! Here's your path:

    [3,3]
    [4,5]
    [2,4]
    [4,3]
