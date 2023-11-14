window.onload = () => {
    let places = staticLoadPlaces();
    renderPlaces(places);
};

function staticLoadPlaces() {
    return [
        {
            name: 'model1',
            location: {
                lat: 17.463884728671562,
                lng: 78.3437565978023,
            }
        },
        {
            name: 'model2',
            location: {
                lat: 17.463904,
                lng: 78.343745,
            }
        },
        {
            name: 'model3',
            location: {
                lat: 17.463884728671562,
                lng: 78.3437565978023,
            }
        },
        {
            name: 'model4',
            location: {
                lat: 17.4638796115194,
                lng: 78.34379146652084,
            }
        },
        {
            name: 'model5',
            location: {
                lat: 17.463894962975434,
                lng: 78.34381828861203,
            }
        },
        {
            name: 'model6',
            location: {
                lat: 17.46383291749935,
                lng: 78.34374318675668,
            }
        }
    ];
}

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;

        let model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
        model.setAttribute('gltf-model', 'assets/asset.glb');
        model.setAttribute('rotation', '0 180 0');
        //    model.setAttribute('animation-mixer', '');
        model.setAttribute('scale', '0.5 0.5 0.5');

        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

        scene.appendChild(model);
    });
}