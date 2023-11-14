AFRAME.registerComponent('geojson', {
    schema: {
        src: { type: 'asset' }
    },

    init: function () {
        const el = this.el;

        // Load GeoJSON data from the specified source
        const src = this.data.src;
        fetch(src)
            .then(response => response.json())
            .then(geojsonData => {
                // Create A-Frame entities for each feature in the GeoJSON
                geojsonData.features.forEach(feature => {
                    if (feature.geometry.type === 'LineString') {
                        this.createPolyline(feature.geometry.coordinates);
                    }
                });
            })
            .catch(error => {
                console.error('Error loading GeoJSON:', error);
            });
    },

    createPolyline: function (coordinates) {
        // Create an A-Frame entity for the polyline
        const polylineEntity = document.createElement('a-entity');
        polylineEntity.setAttribute('line', {
            path: coordinates.map(coord => `${coord[0]} 0 ${coord[1]}`).join(','),
            color: 'blue', // Set color to blue
            opacity: 0.8,   // Set opacity (adjust as needed)
            lineWidth: 10   // Set line thickness (adjust as needed)
        });

        // Add the polyline entity to the scene
        this.el.appendChild(polylineEntity);
    }
});
