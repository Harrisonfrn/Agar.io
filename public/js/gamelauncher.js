let canvas = document.getElementById('game');
let context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const MONDE_LARGEUR = 4000;
const MONDE_HAUTEUR = 4000;

let controls = new Controls();
let joueur = new Joueur();
let particules = new Particules();
let camera = new Camera();

let fond = document.getElementById('fond');
// let fondPattern = context.createPattern(fond, 'repeat');

function gameloop() {
	// Vérification des collisions avec particules
	for (let i = 0; i < particules.particules.length; i++) {
		if (joueur.collisionAvec(particules.particules[i])) {
			// Collision !
			particules.supprimer(i);
			joueur.evolution();
			i--;
		}
	}

	joueur.deplacerJoueur(); // Fonction du fichier "joueur.js" qui gère le déplacement de notre joueur
	camera.suivre(joueur);

	// Effacement du canvas
	context.clearRect(0, 0, canvas.width, canvas.height);
	// Redessiner le pattern sur l'ensemble du canvas
	// context.fillStyle = fondPattern;
	context.drawImage(fond, 0 - camera.x, 0 - camera.y, MONDE_LARGEUR, MONDE_HAUTEUR);

	particules.dessinerParticules(); // Fonction du fichier "particules.js" qui dessine toutes les particules à manger à l'écran
	joueur.dessinerJoueur(); // Fonction du fichier "joueur.js" qui dessine le cercle du joueur à l'écran

	requestAnimationFrame(gameloop);
}

gameloop();