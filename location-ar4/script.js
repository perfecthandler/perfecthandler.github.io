fetch('data.json')

    .then(response => response.json())
    .then(data => {
        // Process the data and add 3D models to the scene
        data.features.forEach(feature => {
            alert(feature.model);
            const modelEntity = document.createElement('a-entity');
            modelEntity.setAttribute('position', `${feature.longitude} ${feature.elevation} ${-feature.latitude}`);
            modelEntity.setAttribute('scale', '0.1 0.1 0.1');

            // Choose the appropriate model based on the 'model' attribute
            switch (feature.model) {
                case 'car_1.glb':
                    modelEntity.setAttribute('gltf-model', 'url(models/car_1.glb)');
                    break;
                case 'tree_1.obj':
                    modelEntity.setAttribute('obj-model', 'obj: url(models/tree_1.obj)');
                    break;
                case 'tree_2.fbx':
                    modelEntity.setAttribute('fbx-model', 'src: url(models/tree_2.fbx)');
                    break;
                // Add more cases for other models as needed
            }

            // Add the entity to the scene
            document.querySelector('a-scene').appendChild(modelEntity);
        });
    })
    .catch(error => console.error(error));

