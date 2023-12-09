const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
const polylines = [];

// Load GeoJSON data
fetch("data.geojson")
.then(response => response.json())
.then(data => {
    // Extract polylines from GeoJSON
    const features = data.features;
    for (const feature of features) {
        if (feature.geometry.type === "LineString") {
            const coordinates = feature.geometry.coordinates;
            const lineGeometry = new THREE.LineGeometry();
            for (const point of coordinates) {
                const worldPosition = convertGeoToWorld(point);
                lineGeometry.vertices.push(new THREE.Vector3(worldPosition.x, worldPosition.y, worldPosition.z));
            }
            const material = new THREE.LineBasicMaterial({ color: 0x00ff00, linewidth: 2 });
            const polyline = new THREE.Line(lineGeometry, material);
            scene.add(polyline);
            polylines.push(polyline);
        }
    }
});

// Convert Geo coordinates to Three.js world coordinates
function convertGeoToWorld(coordinates) {
    // Use Geolocation API to get user's position
    navigator.geolocation.getCurrentPosition(position => {
        // const latitude = position.coords.latitude;
        // const longitude = position.coords.longitude;
        const latitude = 17.463933;
        const longitude = 78.343751;
        // Implement conversion logic using your chosen library
        // (e.g., GeoJSON.js or custom function)
        // This is a simplified example
        const worldPosition = {
            x: coordinates[0] - longitude,
            y: coordinates[1] - latitude,
            z: 0 // Adjust based on your elevation data, if available
        };
        return worldPosition;
    });
}

// Render loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

// Initialize renderer and start animation loop
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
animate();