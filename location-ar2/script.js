// window.onload = () => {
//   var pipes = loadpipes();

//   renderPipes(pipes);
// };

AFRAME.registerComponent("some-line", {
  init: function() {
    // create an array of points. 
    const points = [];
    alert("i");
    // points.push(new THREE.Vector3(78.34378680652242,17.464037137429827, 3));
    // points.push(new THREE.Vector3(78.34376676531338,17.46392396973065, 3));
    // points.push(new THREE.Vector3(78.34379828127052,17.463886870382268, 3));
    // points.push(new THREE.Vector3(78.34383382054133,17.463898383973955, 3));
    // points.push(new THREE.Vector3(78.34384924324377,17.46386640177301, 0));
   

    // create the line material
    const material = new THREE.LineBasicMaterial({color: 0x0000ff});
    // create the geometry from points
    //const geometry = new THREE.BufferGeometry().setFromPoints(points);

    var pipes = loadpipes();

    alert(pipes[0].features[0].geometry.coordinates);


    const geometry = new THREE.BufferGeometry();
const vertices = new Float32Array(pipes.flat());
geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));




    // create a THREE.Line from the geometry and material
    const line = new THREE.Line(geometry, material);
    // add it to this entity
    this.el.object3D.add(line);
  }
})

function loadpipes() {
  return [
    {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [78.34376676531338, 17.46392396973065,1],
              [78.34379828127052, 17.463886870382268,1],
              [78.34383382054133, 17.463898383973955,1],
              [78.34384924324377, 17.46386640177301,1]
            ]
          },
          "properties": {}
        }
      ]
    }
  ];
}


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

