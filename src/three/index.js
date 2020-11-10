import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

scene.background = new THREE.Color('rgb(259, 250, 250)');

const topLathePoints = [];

for ( let i = 0; i < 10; i ++ ) {
    topLathePoints.push( new THREE.Vector2( Math.sin( i * 0.20 ) * 10 + 5, ( i - 5 ) * 2 ) );
}
const bottomLathePoints = [];

for ( let i = -10; i <= 0; i ++ ) {
    bottomLathePoints.push( new THREE.Vector2( Math.sin( i * 0.20 ) * -10 + 5, ( i - 5 ) * 2 ) );
}
const bottomWaterPoints = [], topWaterPoints = [];

for ( let i = 0; i < 5; i ++ ) {
topWaterPoints.push( new THREE.Vector2( Math.sin( i * 0.20 ) * 9 + 5, ( i - 5 ) * 2 ) );
}
for ( let i = -10; i <= 0; i ++ ) {
    bottomWaterPoints.push( new THREE.Vector2( Math.sin( i * 0.20 ) * -9 + 5, ( i - 5 ) * 2 ) );
}

const topCylinderGeometry = new THREE.CylinderGeometry( 20, 20, 4, 64 );
const topCylinderMaterial = new THREE.MeshStandardMaterial( {color: new THREE.Color(`rgb(50, 50, 70)`)} );
const topCylinder = new THREE.Mesh( topCylinderGeometry, topCylinderMaterial );

topCylinder.position.y += 10

scene.add( topCylinder );

const bottomCylinderGeometry = new THREE.CylinderGeometry( 20, 20, 3, 64 );
const bottomCylinderMaterial = new THREE.MeshStandardMaterial( {color: new THREE.Color(`rgb(50, 50, 70)`)} );
const bottomCylinder = new THREE.Mesh( bottomCylinderGeometry, bottomCylinderMaterial );

bottomCylinder.position.y -= 30
scene.add( bottomCylinder );

const topLatheGeometry = new THREE.LatheGeometry( topLathePoints, 30 );
const bottomLatheGeometry = new THREE.LatheGeometry( bottomLathePoints, 30 );
const topWaterGeometry = new THREE.LatheGeometry( topWaterPoints, 30 );
const bottomWaterGeometry = new THREE.LatheGeometry( bottomWaterPoints, 30 );
const fullLatheGeometry = new THREE.Geometry()

const latheMaterial =  new THREE.MeshPhongMaterial({
    color: new THREE.Color(`rgb(220, 220, 250)`),
    opacity: 0.3,
    transparent: true,
  });

const waterColor = new THREE.Color(`rgb(50, 50, 150)`)
const waterMaterial =  new THREE.MeshPhongMaterial({
    color: waterColor,
    opacity: 0.8,
    transparent: true,
  });

const topLatheMesh = new THREE.Mesh( topLatheGeometry );
const bottomLatheMesh = new THREE.Mesh( bottomLatheGeometry );
const topWaterMesh = new THREE.Mesh( topWaterGeometry,  waterMaterial);
const bottomWaterMesh = new THREE.Mesh( bottomWaterGeometry,  waterMaterial);

topLatheMesh.updateMatrix()
fullLatheGeometry.merge(topLatheMesh.geometry, topLatheMesh.matrix)
bottomLatheMesh.updateMatrix()
fullLatheGeometry.merge(bottomLatheMesh.geometry, bottomLatheMesh.matrix)
const fullLatheMesh = new THREE.Mesh(fullLatheGeometry, latheMaterial)
fullLatheMesh.castShadow = true
scene.add(topWaterMesh)
scene.add(bottomWaterMesh)
scene.add(fullLatheMesh)
const blue = new THREE.Color(`blue`);
const geometry = new THREE.CircleGeometry( 11.2, 42 );
const material = new THREE.MeshBasicMaterial( {color: waterColor, transparent: true, opacity: 0.8, side: THREE.DoubleSide} );
const plane = new THREE.Mesh( geometry, material );
plane.rotation.x = Math.PI / 2;
plane.position.y -= 2
scene.add( plane );

const white = new THREE.Color(`white`);
const intensity = 1;

const light = new THREE.PointLight(white, intensity);
const light2 = new THREE.PointLight(white, 0.6);
light.position.set(-1, 4, 30);
light2.position.set(-1, 2, -30);

scene.add(light);
scene.add(light2);
// Load envMap.


// instantiate a loader
const loader = new THREE.TextureLoader();

// load a resource
loader.load(
    // resource URL
    '/src/fluencyBg.jpg',
    // Function when resource is loaded
    function ( texture ) {
        // do something with the texture
        var material = new THREE.MeshBasicMaterial( {
            map: texture
         } );
         console.log(material )
    },
    // Function called when download progresses
    function ( xhr ) {
        console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
    },
    // Function called when download errors
    function ( xhr ) {
        console.log( 'An error happened' );
        console.log(xhr)
    }
);


camera.position.z = 60;
camera.position.y -= 10;

const controls = new OrbitControls( camera, renderer.domElement );
controls.autoRotate = true
controls.autoRotateSpeed = 10
controls.update()

function animate() {
    requestAnimationFrame( animate );
    controls.update();
	renderer.render( scene, camera );
}
animate();