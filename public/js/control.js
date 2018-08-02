class Controls {
	constructor() {
		this.gauche = false;
		this.droite = false;
		this.haut   = false;
		this.bas    = false;

		// --> http://keycode.info
		document.addEventListener('keydown', (evt) => {
			if (evt.keyCode === 37) { this.gauche = true; }
			if (evt.keyCode === 38) { this.haut = true; }
			if (evt.keyCode === 39) { this.droite = true; }
			if (evt.keyCode === 40) { this.bas = true; }
		});
		document.addEventListener('keyup', (evt) => {
			if (evt.keyCode === 37) { this.gauche = false; }
			if (evt.keyCode === 38) { this.haut = false; }
			if (evt.keyCode === 39) { this.droite = false; }
			if (evt.keyCode === 40) { this.bas = false; }
		});
	}
}
