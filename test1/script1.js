// Initialisation de la scène, de la caméra et du rendu
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Création d'une boîte (RectangleGeometry n'existe pas, on utilise BoxGeometry)
const geometry = new THREE.BoxGeometry(2, 1, 1); // Une boîte plate peut simuler un rectangle
const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const pad1 = new THREE.Mesh(geometry, material);
const pad2 = new THREE.Mesh(geometry, material);
scene.add(pad1);
scene.add(pad2);

pad1.position.x = 10;
pad2.position.x = -10;

camera.position.z = 10;
camera.position.y = 3;
let dir = true; // Utiliser `let` au lieu de `const` pour modifier la variable

// Fonction d'animation
function animate() {
    requestAnimationFrame(animate);

    if (dir && camera.position.z < 20) {
        camera.position.z += 0.1;
    } 
	else if (dir && camera.position.z >= 20) {
        dir = false;
    } 
	else if (!dir && camera.position.z > 10) {
        camera.position.z -= 0.1;
    } 
	else {
        dir = true;
    }

    renderer.render(scene, camera);
}

animate();
