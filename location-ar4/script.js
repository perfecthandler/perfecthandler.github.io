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
      AFRAME.registerComponent("some-line", {
        init: function() {
          // create an array of points. 
          const points = [];
          points.push(new THREE.Vector3(-1.25, -0.35, 0));
          points.push(new THREE.Vector3(-1, 0.15, 0));
          points.push(new THREE.Vector3(-0.5, 0.25, 0));
          points.push(new THREE.Vector3(0, 1, 0));
          points.push(new THREE.Vector3(0.5, 0.25, 0));
          points.push(new THREE.Vector3(1, 0.15, 0));
          points.push(new THREE.Vector3(1.25, -0.35, 0));
    
          // create the line material
          const material = new THREE.LineBasicMaterial({color: 0x0000ff});
          // create the geometry from points
          const geometry = new THREE.BufferGeometry().setFromPoints(points);
          // create a THREE.Line from the geometry and material
          const line = new THREE.Line(geometry, material);
          // add it to this entity
          this.el.object3D.add(line);
        }
      });

      const scene = document.querySelector("a-scene");
// when the scene is loaded
scene.addEventListener("loaded", () => {
  // create an entity
  const el = document.createElement("a-entity");
  // append it to the scene
  scene.appendChild(el);
  // set the position and line component
  el.setAttribute("position", "0 1.6 -2")
  el.setAttribute("some-line", "")
})
    };