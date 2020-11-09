import * as THREE from "three"
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const topLathePoints = [];
for ( let i = 0; i < 10; i ++ ) {
    topLathePoints.push( new THREE.Vector2( Math.sin( i * 0.22 ) * 10 + 5, ( i - 5 ) * 2 ) );
}
const bottomLathePoints = [];
for ( let i = -10; i < 0; i ++ ) {
    bottomLathePoints.push( new THREE.Vector2( Math.sin( i * 0.22 ) * -10 + 5, ( i - 5 ) * 2 ) );
}

const topCylinderGeometry = new THREE.CylinderGeometry( 20, 20, 5, 64 );
const topCylinderMaterial = new THREE.MeshPhysicalMaterial( {color: new THREE.Color(`white`)} );
const topCylinder = new THREE.Mesh( topCylinderGeometry, topCylinderMaterial );

topCylinder.position.y += 10

scene.add( topCylinder );

const bottomCylinderGeometry = new THREE.CylinderGeometry( 20, 20, 5, 64 );
const bottomCylinderMaterial = new THREE.MeshPhysicalMaterial( {color: new THREE.Color(`white`)} );
const bottomCylinder = new THREE.Mesh( bottomCylinderGeometry, bottomCylinderMaterial );

bottomCylinder.position.y -= 30
scene.add( bottomCylinder );

const latheGeometry = new THREE.LatheGeometry( topLathePoints );
const bottomLatheGeometry = new THREE.LatheGeometry( bottomLathePoints );

const latheMaterial = new THREE.MeshPhysicalMaterial( { specular: 0x111111, shininess: 500 } );

const topLathe = new THREE.Mesh( latheGeometry, latheMaterial );
const bottomLathe = new THREE.Mesh( bottomLatheGeometry, latheMaterial );

scene.add( topLathe );
scene.add( bottomLathe );

const color = new THREE.Color(`white`);
const intensity = 1;

const light = new THREE.DirectionalLight(color, intensity);
light.position.set(-1, 4, 50);

scene.add(light);



camera.position.z = 60;
camera.position.y -= 10;

function animate() {
    requestAnimationFrame( animate );
    topLathe.rotation.y += 0.01;
    bottomLathe.rotation.y += 0.01;
    topCylinder.rotation.y += 0.01;
    bottomCylinder.rotation.y += 0.01;
	renderer.render( scene, camera );
}
animate();