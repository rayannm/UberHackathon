import concurrent.futures
import heapq

def process_vertex(graph, distances, queue, seen, current_vertex):
    for neighbor, weight in graph[current_vertex].items():
        distance = distances[current_vertex] + weight
        if distance < distances[neighbor]:
            distances[neighbor] = distance
            heapq.heappush(queue, (distance, neighbor))
            seen.add(neighbor)

def dijkstra(graph, start_vertex, end_vertex):
    distances = {vertex: float('infinity') for vertex in graph}
    distances[start_vertex] = 0

    queue = [(0, start_vertex)]
    seen = set()

    while queue:
        current_distance, current_vertex = heapq.heappop(queue)

        if current_distance > distances[current_vertex]:
            continue

        process_vertex(graph, distances, queue, seen, current_vertex)

    path = []
    current_vertex = end_vertex
    while current_vertex != start_vertex:
        path.append(current_vertex)
        current_vertex = min(
            graph[current_vertex].items(),
            key=lambda x: distances[x[0]] + x[1]
        )[0]

    path.append(start_vertex)
    path.reverse()

    return path

if __name__ == "__main__":
    graph = {
        "A": {"B": 1, "C": 3},
        "B": {"A": 1, "C": 1, "D": 4},
        "C": {"A": 3, "B": 1, "D": 1},
        "D": {"B": 4, "C": 1},
    }

    path_dijkstra = dijkstra(graph, "A", "D")
    print("Shortest path using Dijkstra:", path_dijkstra)
