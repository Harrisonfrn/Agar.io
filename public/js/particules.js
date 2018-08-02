class Particules {
	constructor() {
		this.particules = [];

		const NB_PARTICLES = 500;

		// Générer des particules
		for (let i = 1; i <= NB_PARTICLES; i++) {
			this.add();
		}
	}

	add() {
		this.particules.push({
			x : Math.random() * MONDE_LARGEUR,
			y : Math.random() * MONDE_HAUTEUR,
			color : '#' + Math.round(Math.random() * (16777215 - 1048576) + 1048576).toString(16),
			radius : 10
		});
		/*
			0xffffff = 16777215
			(0xffffff).toString(10)  --> "16777215"
			Math.round(Math.random() * 16777215).toString(16)
		*/
	}

	supprimer(index) {
		this.particules.splice(index, 1);
		this.add();
	}

	dessinerParticules() {
		for (let i = 0; i < this.particules.length; i++) {
			context.fillStyle = this.particules[i].color;
			context.beginPath();
			context.arc(this.particules[i].x - camera.x, this.particules[i].y - camera.y, this.particules[i].radius, 0, Math.PI*2);
			context.fill();
			context.closePath();
		}
	}
}