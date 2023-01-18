import * as THREE from "./three.module.js";

//SCENE
const scene = new THREE.Scene()
//CAMERA
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
//RENDERER
const renderer = new THREE.WebGLRenderer({ antialias: true})
renderer.setSize( window.innerWidth, window.innerHeight )
renderer.setClearColor("grey")

document.body.appendChild( renderer.domElement )

//Setting up camera position
camera.position.z = 2


//CUBES
//main cube
var geometry = new THREE.BoxGeometry( 1, 1, 1)
var material = new THREE.MeshStandardMaterial( { color: 0xff0051, flatShading: true, metalness: 0, roughness: 1 })
var cube = new THREE.Mesh ( geometry, material )
scene.add( cube )

// skl_ cube
var geometry = new THREE.BoxGeometry( 3, 3, 3)
var material = new THREE.MeshBasicMaterial( {color: "white", wireframe: true, transparent: true})
var skl_Cube = new THREE.Mesh ( geometry, material )
scene.add( skl_Cube )

// lights
var ambientLight = new THREE.AmbientLight ( 0xffffff, 0.4)
scene.add( ambientLight )
var pointLight = new THREE.PointLight(0xfffff,0.6)
pointLight.position.set(25,20,25)
scene.add(pointLight)

function animate() {
	requestAnimationFrame( animate )
	cube.rotation.x += 0.02;
	cube.rotation.y += 0.02;
	skl_Cube.rotation.x -= 0.01;
	skl_Cube.rotation.y -= 0.01;
	renderer.render( scene, camera )
}

function WindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}

window.addEventListener('resize', WindowResize);
animate()