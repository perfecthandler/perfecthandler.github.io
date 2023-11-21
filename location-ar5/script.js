// window.onload = () => {
//     alert("1");
// AFRAME.registerComponent("some-line", {
//     init: function() {
//       // create an array of points. 
//       const points = [];
//       // points.push(new THREE.Vector3(-1.25, -0.35, 0));
//       points.push(new THREE.Vector3(1, 1, 0));
//       points.push(new THREE.Vector3(-1, -1, 0));
//        alert("pushed");
//       // points.push(new THREE.Vector3(-1, 0.15, 0));
//       // points.push(new THREE.Vector3(-0.5, 0.25, 0));
//       // points.push(new THREE.Vector3(0, 1, 0));
//       // points.push(new THREE.Vector3(0.5, 0.25, 0));
//       // points.push(new THREE.Vector3(1, 0.15, 0));
//       // points.push(new THREE.Vector3(1.25, -0.35, 0));

//       // create the line material
//       const material = new THREE.LineBasicMaterial({color: 0x0000ff});
//       // create the geometry from points
//       const geometry = new THREE.BufferGeometry().setFromPoints(points);
//       // create a THREE.Line from the geometry and material
//       const line = new THREE.Line(geometry, material);
//       // add it to this entity
//       //this.el.object3D.add(line);
//       this.el.object3D.add('mesh',line);
//     }
//   });
// }

//   const scene = document.querySelector("a-scene");
// // when the scene is loaded
// scene.addEventListener("loaded", () => {
//   // create an entity
//   const el = document.createElement("a-entity");
//   // append it to the scene
//   scene.appendChild(el);
//   // set the position and line component
//   el.setAttribute("position", "0 1.6 -2")
//   el.setAttribute("some-line", "")
// })

// AFRAME.registerComponent('gps-camera', {
//   init: function () {
//     const scene = this.el.sceneEl;
//     const camera = this.el;

//     // Set up GPS tracking
//     navigator.geolocation.watchPosition(
//       (position) => {
//         const { latitude, longitude } = position.coords;
//         camera.setAttribute('gps-projected-camera', { position: { latitude, longitude } });
//       },
//       (error) => {
//         console.error('Error getting GPS coordinates:', error);
//       }
//     );
//   }
// });

// AFRAME.registerComponent('gps-projected-camera', {
//   schema: {
//     position: { type: 'vec2', default: { latitude: 0, longitude: 0 } }
//   },

//   update: function () {
//     const { latitude, longitude } = this.data.position;
//     const coords = AFRAME.utils.coordinates.stringify(this.data.position);

//     this.el.setAttribute('position', coords);
//     this.el.sceneEl.setAttribute('gps-projected-camera', { position: { latitude, longitude } });
//   }
// });

// AFRAME.registerComponent('rotation-reader', {
//   tick: function () {
//     const rotation = this.el.getAttribute('rotation');
//     document.getElementById('line').setAttribute('rotation', rotation);
//   }
// });


// Create transform with a predefined position
// let box = new Entity()
// box.addComponent(new BoxShape())
// box.addComponent(
//   new Transform({
//     position: new Vector3(5, 1, 5),
//   })
// )
// box.addComponent(new Billboard())
// engine.addEntity(box)