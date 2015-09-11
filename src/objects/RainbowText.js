class RainbowText extends Phaser.Text {

	constructor(game) {

		super(game, 0, 0, "", { font: "22px Arial", fill: "#ffffff", align: "center", boundsAlignH: "center", 
        boundsAlignV: "top" });
		this.setTextBounds(16, 16, 200, 100);
		this.game.stage.addChild(this);
	}
	
	update() {
		this.text = `${this.game.score.caches} Caches`;
	}
}

export default RainbowText;