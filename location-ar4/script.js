// fetch('data.json')

//     .then(response => response.json())
//     .then(data => {
//         // Process the data and add 3D models to the scene
//         data.features.forEach(feature => {
//             alert(feature.model);
         
//             const modelEntity = document.createElement('a-entity');
//             modelEntity.setAttribute('position', `${feature.longitude} ${feature.elevation} ${-feature.latitude}`);
//             modelEntity.setAttribute('scale', '0.5 0.5 0.5');
//             modelEntity.setAttribute('gltf-model', 'assets/Car_1.glb');
    
//             modelEntity.addEventListener('loaded', () => {
//                 window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
//             });
    
            
//             // // Choose the appropriate model based on the 'model' attribute
//             // switch (feature.model) {
//             //     case 'car_1.glb':
//             //         modelEntity.setAttribute('gltf-model', 'models/car_1.glb');
//             //         break;
//             //     case 'tree_1.obj':
//             //         modelEntity.setAttribute('obj-model', 'obj: url(models/tree_1.obj)');
//             //         break;
//             //     case 'tree_2.fbx':
//             //         modelEntity.setAttribute('fbx-model', 'src: url(models/tree_2.fbx)');
//             //         break;
//             //     // Add more cases for other models as needed
//             // }

//             // Add the entity to the scene
//             document.querySelector('a-scene').appendChild(modelEntity);
//         });
//     })
//     .catch(error => console.error(error));

    // window.onload = () => {
    //     fetch('data.json')

    //     .then(response => response.json())
    //     .then(data => {
    //         // Process the data and add 3D models to the scene
    //         data.features.forEach(feature => {

    //             const d = new Date();
    //             alert(d);
             
    //             const modelEntity = document.createElement('a-entity');
    //            // modelEntity.setAttribute('gps-entity-place', `latitude: ${feature.latitude}; longitude: ${feature.longitude};`);

    //             modelEntity.setAttribute('position', `${feature.longitude} ${feature.elevation} ${feature.latitude}`);
    //             modelEntity.setAttribute('scale', '0.5 0.5 0.5');
    //             modelEntity.setAttribute('gltf-model', 'assets/asset.glb');
        
    //             modelEntity.addEventListener('loaded', () => {
    //                 window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
    //             });
        
                
    //             // // Choose the appropriate model based on the 'model' attribute
    //             // switch (feature.model) {
    //             //     case 'car_1.glb':
    //             //         modelEntity.setAttribute('gltf-model', 'models/car_1.glb');
    //             //         break;
    //             //     case 'tree_1.obj':
    //             //         modelEntity.setAttribute('obj-model', 'obj: url(models/tree_1.obj)');
    //             //         break;
    //             //     case 'tree_2.fbx':
    //             //         modelEntity.setAttribute('fbx-model', 'src: url(models/tree_2.fbx)');
    //             //         break;
    //             //     // Add more cases for other models as needed
    //             // }
    
    //             // Add the entity to the scene
    //             document.querySelector('a-scene').appendChild(modelEntity);
    //         });
    //     })
    //     .catch(error => console.error(error));
    // };

    window.onload = () => {
    AFRAME.registerComponent('polyline', {
        init: function () {
          // Create a polyline.
          var polyline = document.createElement('polyline');
          polyline.setAttribute('points', '17.464037137429827 78.34378680652242, 17.46392396973065 78.34376676531338, 17.463886870382268 78.34379828127052, 17.463898383973955 78.34383382054133');
          polyline.setAttribute('fill', 'none');
          polyline.setAttribute('stroke', 'red');
          polyline.setAttribute('stroke-width', '2');
      
          // Add the polyline to the scene.
          var scene = document.querySelector('a-scene');
          scene.appendChild(polyline);
        }
      });
    };