import { OrbitControls } from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/examples/jsm/controls/OrbitControls.js';

let scene, camera, renderer;
let rot = 0.01;
    
let object;
let createObject = function() {
    // let geometry = new THREE.BoxGeometry(0.3, 0.3, 0.3);
    // let material = new THREE.MeshBasicMaterial({color: 0x00a1cb});
    // cube = new THREE.Mesh( geometry, material );
    // scene.add(cube);
    
    let geometry = new THREE.BufferGeometry();

    let positions = [
        // Rear Side
        0.8, 0.0, 0.3,  0.8, 0.3, 0.3,  0.2, 0.0, 0.3,  
        0.2, 0.3, 0.3,  0.2, 0.0, 0.3,  0.8, 0.3, 0.3,
        // 0.8, 0.3, 0.3,  0.6, 0.4, 0,3,  0.2, 0.3, 0.3,
        
        //Front Side
        0.8, 0.3, 0.0,  0.8, 0.0, 0.0,     0.2, 0.0, 0.0,
        0.8, 0.3, 0.0,  0.2, 0.0, 0.0,      0.2, 0.3, 0.0,
        
        // // Left Side
        0.2, 0.3, 0.0,  0.2, 0.0, 0.0,    0.2, 0.0, 0.3,
        0.2, 0.3, 0.0,  0.2, 0.0, 0.3,      0.2, 0.3, 0.3,
        
        // // Right Side
        0.8, 0.0, 0.3,  0.8, 0.0, 0.0,  0.8, 0.3, 0.0,  
        0.8, 0.3, 0.3,  0.8, 0.0, 0.3,  0.8, 0.3, 0.0,
        
        // Bottom Side
        0.8, 0.0, 0.0,  0.8, 0.0, 0.3,    0.2, 0.0, 0.3,
        0.8, 0.0, 0.0,  0.2, 0.0, 0.3,      0.2, 0.0, 0.0,
        
        // // Top Side
        0.2, 0.3, 0.3,  0.8, 0.3, 0.3,  0.8, 0.3, 0.0,  
        0.2, 0.3, 0.0,  0.2, 0.3, 0.3,  0.8, 0.3, 0.0,
        
        // Top
        // Rear Side
        0.3, 0.3, 0.25,      0.6, 0.3, 0.25,      0.6, 0.325, 0.25,     
        0.3, 0.325, 0.25,    0.3, 0.3, 0.25,      0.6, 0.325, 0.25,
        
        // //Front Side
        0.6, 0.325, 0.1,      0.6, 0.3, 0.1,          0.3, 0.3, 0.1, 
        0.6, 0.325, 0.1,    0.3, 0.3, 0.1,          0.3, 0.325, 0.1,
        
        // // Left Side
        0.3, 0.325, 0.1,      0.3, 0.3, 0.1,          0.3, 0.3, 0.25, 
        0.3, 0.325, 0.1,    0.3, 0.3, 0.25,          0.3, 0.325, 0.25,
        
        // // Right Side
        0.6, 0.3, 0.25,      0.6, 0.3, 0.1,      0.6, 0.325, 0.1,     
        0.6, 0.325, 0.25,    0.6, 0.3, 0.25,      0.6, 0.325, 0.1,
        
        // // // Bottom Side
        0.3, 0.3, 0.25,      0.6, 0.3, 0.25,      0.6, 0.3, 0.1,      
        0.3, 0.3, 0.1,      0.3, 0.3, 0.25,      0.6, 0.3, 0.1,
        
        // // Top Side
        0.3, 0.325, 0.25,     0.6, 0.325, 0.25,     0.6, 0.325, 0.1,     
        0.3, 0.325, 0.1,    0.3, 0.325, 0.25,      0.6, 0.325, 0.1,
    ];

    geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( positions, 3 ) );
    geometry.computeVertexNormals();
    
    
   
    object = new THREE.Mesh( geometry, new THREE.MeshPhysicalMaterial({
        roughness: 0,
        metalness: 0,
    }) );
    scene.add(object);
};

let object2;
let createObject2 = function() {
    let geometry = new THREE.BufferGeometry();

    let positions = [
        // Rear Side
        0.8, 0.0, 0.3,  0.8, 0.3, 0.3,  0.2, 0.0, 0.3,  
        0.2, 0.3, 0.3,  0.2, 0.0, 0.3,  0.8, 0.3, 0.3,
        // 0.8, 0.3, 0.3,  0.6, 0.4, 0,3,  0.2, 0.3, 0.3,
        
        //Front Side
        0.8, 0.3, 0.0,  0.8, 0.0, 0.0,     0.2, 0.0, 0.0,
        0.8, 0.3, 0.0,  0.2, 0.0, 0.0,      0.2, 0.3, 0.0,
        
        // // Left Side
        0.2, 0.3, 0.0,  0.2, 0.0, 0.0,    0.2, 0.0, 0.3,
        0.2, 0.3, 0.0,  0.2, 0.0, 0.3,      0.2, 0.3, 0.3,
        
        // // Right Side
        0.8, 0.0, 0.3,  0.8, 0.0, 0.0,  0.8, 0.3, 0.0,  
        0.8, 0.3, 0.3,  0.8, 0.0, 0.3,  0.8, 0.3, 0.0,
        
        // Bottom Side
        0.8, 0.0, 0.0,  0.8, 0.0, 0.3,    0.2, 0.0, 0.3,
        0.8, 0.0, 0.0,  0.2, 0.0, 0.3,      0.2, 0.0, 0.0,
        
        // // Top Side
        0.2, 0.3, 0.3,  0.8, 0.3, 0.3,  0.8, 0.3, 0.0,  
        0.2, 0.3, 0.0,  0.2, 0.3, 0.3,  0.8, 0.3, 0.0,
        
        // Top
        // Rear Side
        0.3, 0.3, 0.25,      0.6, 0.3, 0.25,      0.6, 0.325, 0.25,     
        0.3, 0.325, 0.25,    0.3, 0.3, 0.25,      0.6, 0.325, 0.25,
        
        // //Front Side
        0.6, 0.325, 0.1,      0.6, 0.3, 0.1,          0.3, 0.3, 0.1, 
        0.6, 0.325, 0.1,    0.3, 0.3, 0.1,          0.3, 0.325, 0.1,
        
        // // Left Side
        0.3, 0.325, 0.1,      0.3, 0.3, 0.1,          0.3, 0.3, 0.25, 
        0.3, 0.325, 0.1,    0.3, 0.3, 0.25,          0.3, 0.325, 0.25,
        
        // // Right Side
        0.6, 0.3, 0.25,      0.6, 0.3, 0.1,      0.6, 0.325, 0.1,     
        0.6, 0.325, 0.25,    0.6, 0.3, 0.25,      0.6, 0.325, 0.1,
        
        // // // Bottom Side
        0.3, 0.3, 0.25,      0.6, 0.3, 0.25,      0.6, 0.3, 0.1,      
        0.3, 0.3, 0.1,      0.3, 0.3, 0.25,      0.6, 0.3, 0.1,
        
        // // Top Side
        0.3, 0.325, 0.25,     0.6, 0.325, 0.25,     0.6, 0.325, 0.1,     
        0.3, 0.325, 0.1,    0.3, 0.325, 0.25,      0.6, 0.325, 0.1,

    ];

    const newObject = new THREE.PlaneGeometry( 20, 20 );
    const newMaterial = new THREE.MeshBasicMaterial( {color: 0x204204, side: THREE.DoubleSide} );
    const plane = new THREE.Mesh( newObject, newMaterial );
    plane.rotation.x = Math.PI / -2.2;
    plane.position.set(2, 0, 0);
    scene.add( plane );


    geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( positions, 3 ) );
    geometry.computeVertexNormals();

    object2 = new THREE.Mesh( geometry, new THREE.MeshPhysicalMaterial({
        roughness: 0.1,
        metalness: 0.5,
        reflectivity: 1,
    }) );
    scene.add(object2);
};

let lightsource;
let light;
let createLight = function() {
    const geometry = new THREE.BoxGeometry( 0.1, 0.1, 0.1 );
    const material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
    lightsource = new THREE.Mesh( geometry, material );
    

    light = new THREE.PointLight( 0xffffff, 1, 404 );
    light.position.set( lightsource.position.x, lightsource.position.y, lightsource.position.z );
    lightsource.add( light );
    scene.add( lightsource );
}

let lights = function() {
    const ambientLight = new THREE.AmbientLight( 0xffffff, 0.404 );
    scene.add(ambientLight);
};


var xSpeed = 0.05;
var zSpeed = 0.05;

function onDocumentKeyDown(event) {
    var keyCode = event.which;
    if (keyCode == 87) {
        lightsource.position.z += zSpeed;
    } else if (keyCode == 83) {
        lightsource.position.z -= zSpeed;
    } 
    else if (keyCode == 65) {
        lightsource.position.x -= xSpeed;
    } 
    else if (keyCode == 68) {
        lightsource.position.x += xSpeed;
    }
    else if (keyCode == 38) {
        camera.position.z -= zSpeed;
    }
    else if (keyCode == 40) {
        camera.position.z += zSpeed;
    }
    else if (keyCode == 37) {
        camera.position.x += xSpeed;
       
    }
    else if (keyCode == 39) {
        camera.position.x -= xSpeed;
    }
    else if (keyCode == 32){
        if(light.intensity != 0){
            light.intensity=0;
        }
        else{
            light.intensity=1;
        }
    }
};



var controls;

    // set up the environment - 
    // initiallize scene, camera, objects and renderer
    let init = function() {
    // 1. create the scene
        scene = new THREE.Scene();
    scene.background = new THREE.Color('orange');
          renderer = new THREE.WebGLRenderer();   
    renderer.setSize(window.innerWidth, window.innerHeight);    
        // 2. create an locate the camera       
        camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 1000);
    controls = new OrbitControls(camera, renderer.domElement);
    camera.position.set(0,0,5);
    controls.update;

        
        // 3. create an locate the object on the scene           
        createObject();
        createObject2();
    createLight();
    // createText();
    lights();
    
    
    document.body.appendChild(renderer.domElement);
    // container.appendChild(renderer.domElement);

    document.addEventListener("keydown", onDocumentKeyDown, false);
//       
    };

function objectLoop() {
    object.position.x = -1.5
    object.position.y = 0
    object2.position.x = 1.2
    object2.position.y = 0
  
}


    // main animation loop - calls 50-60 in a second.
    let mainLoop = function() {
    objectLoop();
    renderer.render(scene, camera);
        requestAnimationFrame(mainLoop);
    };
    init();
    mainLoop();
