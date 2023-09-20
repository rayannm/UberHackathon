// Define a data structure to represent road segments
class RoadSegment {
    constructor(startNode, endNode, velocity) {
        this.startNode = startNode;
        this.endNode = endNode;
        this.velocity = velocity;
    }
}

class MetroStation {
    constructor(stationName, routes) {
        this.stationName = stationName;
        this.routes = routes;
    }
}

// Function to calculate the heuristic (estimated) distance between two points (Euclidean distance)
function calculateHeuristic(point1, point2) {
    const dx = point1.x - point2.x;
    const dy = point1.y - point2.y;
    return Math.sqrt(dx * dx + dy * dy);
}

// Calculate closest points for each node
function calculateClosestPoints(nodes, roadSegments) {
    const closestPoints = {};

    for (const node of nodes) {
        closestPoints[node] = [];

        for (const segment of roadSegments) {
            if (segment.startNode === node && nodes.includes(segment.endNode)) {
                closestPoints[node].push(segment.endNode);
            } else if (segment.endNode === node && nodes.includes(segment.startNode)) {
                closestPoints[node].push(segment.startNode);
            }
        }
    }

    return closestPoints;
}

// Function to find the path using A* algorithm
function findPath(start, end, nodes, closestPoints, roadSegments) {
    const openSet = [start];
    const cameFrom = {};
    const gScore = {};
    const fScore = {};

    for (const point of nodes) {
        gScore[point] = Infinity;
        fScore[point] = Infinity;
    }

    gScore[start] = 0;
    fScore[start] = calculateHeuristic(start, end);

    while (openSet.length > 0) {
        openSet.sort((a, b) => fScore[a] - fScore[b]);
        const current = openSet.shift();

        if (current === end) {
            // Reconstruct the path
            const path = [current];
            let reconstructPoint = current;
            while (cameFrom[reconstructPoint]) {
                reconstructPoint = cameFrom[reconstructPoint];
                path.unshift(reconstructPoint);
            }
            return path;
        }

        for (const neighbor of closestPoints[current]) {
            const tentativeGScore = gScore[current] + calculateDistance(current, neighbor, roadSegments);
            if (tentativeGScore < gScore[neighbor]) {
                cameFrom[neighbor] = current;
                gScore[neighbor] = tentativeGScore;
                fScore[neighbor] = gScore[neighbor] + calculateHeuristic(neighbor, end);
                if (!openSet.includes(neighbor)) {
                    openSet.push(neighbor);
                }
            }
        }
    }

    return null; // No path found
}
// Function to calculate travel time based on distance and velocity
function calculateTravelTime(path, roadSegments) {
    let totalDistance = 0;
    
    for (let i = 0; i < path.length - 1; i++) {
        const point1 = path[i];
        const point2 = path[i + 1];
        
        // Find the road segment that connects point1 and point2
        const roadSegment = roadSegments.find(segment => (
            (segment.startNode === point1 && segment.endNode === point2) ||
            (segment.startNode === point2 && segment.endNode === point1)
        ));
        
        if (roadSegment) {
            // Calculate the time to traverse this segment (distance / velocity)
            totalDistance += calculateDistance(point1, point2, roadSegments);
        }
    }
    
    // Adjust this calculation based on your specific logic, considering traffic, time of day, etc.
    const averageVelocity = 30; // Example average velocity in mph
    const travelTime = totalDistance / averageVelocity; // Travel time in hours
    
    return travelTime;
}

// Function to generate a random velocity between 10 and 50 mph
function generateRandomVelocity() {
    return Math.floor(Math.random() * (50 - 10 + 1)) + 10;
}

// Function to calculate distance between two points based on road segments, considering velocity
function calculateDistance(point1, point2, roadSegments) {
    const roadSegment = roadSegments.find(segment => {
        return (
            (segment.startNode === point1 && segment.endNode === point2) ||
            (segment.startNode === point2 && segment.endNode === point1)
        );
    });

    if (roadSegment) {
        // Adjust the distance based on velocity (mph)
        const velocity = roadSegment.velocity;
        // Placeholder for a more complex calculation based on velocity and time of day
        const distance = 1; // Adjust this based on your logic
        return distance;
    } else {
        return Infinity; // Segment not found, indicating no connection
    }
}

// Define road segments, nodes, and metro stations
const roadSegments = [
    new RoadSegment("NodeA", "NodeB", generateRandomVelocity()),
    new RoadSegment("NodeB", "NodeC", generateRandomVelocity()),
    // Define more road segments with random velocities
];

const nodes = ["NodeA", "NodeB", "NodeC", /* Define more nodes */];

const metroStations = [
    new MetroStation("MetroStationA", ["Route1", "Route2"]),
    new MetroStation("MetroStationB", ["Route2", "Route3"]),
    // Define more metro stations and routes
];

// Find the path from a starting node to an ending node
const startNode = "NodeA";
const endNode = "NodeC";

// Calculate closestPoints
const closestPoints = calculateClosestPoints(nodes, roadSegments);

const path = findPath(startNode, endNode, nodes, closestPoints, roadSegments);

// time of day, and whether the route passes through downtown.

if (path) {
    const travelTime = calculateTravelTime(path, roadSegments);

    console.log("Shortest Path:", path);
    console.log("Estimated Travel Time:", travelTime);
} else {
    console.log("No path found.");
}
