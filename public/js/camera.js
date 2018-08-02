class Camera {
	constructor() {
		this.x = MONDE_LARGEUR/2;
		this.y = MONDE_HAUTEUR/2;
		this.width = canvas.width;
		this.height = canvas.height;
	}

	suivre(obj) {
		this.x = obj.x - (this.width/2);
		this.y = obj.y - (this.height/2);

		// Vérification si la caméra dépasse les limites du monde
		if (this.x + this.width > MONDE_LARGEUR) { // trop à droite
			this.x = MONDE_LARGEUR - this.width;
		}
		else if (this.x < 0) { // trop à gauche
			this.x = 0;
		}
		if (this.y + this.height > MONDE_HAUTEUR) { // trop en bas
			this.y = MONDE_HAUTEUR - this.height;
		}
		else if (this.y < 0) { // trop en haut
			this.y = 0;
		}
	}
}
