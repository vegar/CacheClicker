class ContainerSprite extends Phaser.Sprite {

	constructor(game) {
		super(game, game.world.centerX, game.world.centerY, 'container', 1);
		this.anchor.set(0.5);

		this.setupClickEvent();  

		this.game.stage.addChild(this);  
	}

	setupClickEvent() {
		this.inputEnabled = true;
        this.input.pixelPerfectClick = true;
		this.events.onInputDown.add(this.clickHandler, this);
	}

	clickHandler(sender, pointer) {
		this.game.clicks++;
		this.game.clickEmitter.emitParticle(pointer.x, pointer.y);
	}
}

export default ContainerSprite;