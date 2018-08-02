class Joueur {
	constructor() {
		this.x      = MONDE_LARGEUR/2;
		this.y      = MONDE_HAUTEUR/2;
		this.radius = 50;
		this.speed  = 5;
		this.color  = '#ccc';
	}

	deplacerJoueur() {
		// Mouvement du joueur
		if (controls.gauche === true) {
			this.x -= this.speed;
		}
		if (controls.droite === true) {
			this.x += this.speed;
		}
		if (controls.haut === true) {
			this.y -= this.speed;
		}
		if (controls.bas === true) {
			this.y += this.speed;
		}

		// Vérification des coordonnées
		if (this.x + this.radius > MONDE_LARGEUR) { // trop à droite
			this.x = MONDE_LARGEUR - this.radius;
		}
		else if (this.x - this.radius < 0) { // trop à gauche
			this.x = this.radius;
		}
		if (this.y + this.radius > MONDE_HAUTEUR) { // trop en bas
			this.y = MONDE_HAUTEUR - this.radius;
		}
		else if (this.y - this.radius < 0) { // trop en haut
			this.y = this.radius;
		}
	}

	evolution() {
		// Vérification si on a atteint la vitesse minimale
		if (this.speed > Joueur.JOUEUR_VITESSE_MIN) {
			this.speed -= 0.01;
		} else {
			this.speed = Joueur.JOUEUR_VITESSE_MIN;
		}

		// Vérification si on a atteint la taille maximale
		if (this.radius < Joueur.TAILLE_MAX) {
			this.radius += 1;
		} else {
			this.color = '#f00';
			this.radius = Joueur.TAILLE_MAX;
		}
	}

	dessinerJoueur() {
		// Dessiner un cercle
		context.fillStyle = this.color;
		context.beginPath();
		context.arc(this.x - camera.x, this.y - camera.y, this.radius, 0, Math.PI*2);
		context.fill();
		context.closePath();
	}

	collisionAvec(obj, tolerance = 5) {
		// Vérifier si this.x, this.y this.radius sont en collision avec obj.x obj.y obj.radius
		let a = Math.abs(this.x - obj.x);
		let b = Math.abs(this.y - obj.y);

		let c = Math.sqrt( a*a + b*b, 2 );

		if (c > this.radius + obj.radius - tolerance) {
			return false;
		} else {
			return true;
		}
	}
}

Joueur.JOUEUR_VITESSE_MIN = 0.5;
Joueur.TAILLE_MAX = 300;
