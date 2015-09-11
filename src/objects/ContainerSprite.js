class ContainerSprite extends Phaser.Sprite {

	constructor(game) {
		super(game, 120, game.world.centerY, 'container', 1);
		this.anchor.set(0.5);

		this.inputEnabled = true;

		this.events.onInputOver.add(this.mouseOver, this);	
		this.events.onInputOut.add(this.mouseOut, this);	
		this.events.onInputDown.add(this.mouseDown, this);	
		this.events.onInputUp.add(this.mouseUp, this);	

		this.game.stage.addChild(this);  
	}

	mouseOver(s, p) {
		this.game.add.tween(this.scale).to({x: 1.05, y: 1.05}, 100, Phaser.Easing.Cubic.Out, true);
	}

	mouseOut(s, p) {
		this.game.add.tween(this.scale).to({x: 1, y: 1}, 100, Phaser.Easing.Cubic.Out, true);
	}

	mouseDown(s, p) { 
		this.game.add.tween(this.scale).to({x: 0.96, y: 0.96}, 100, Phaser.Easing.Cubic.Out, true);
	}

	mouseUp(s, p) {
		this.game.add.tween(this.scale).to({x: 1., y: 1}, 100, Phaser.Easing.Cubic.Out, true);
			
		this.game.events.cacheClick.dispatch(p);
	}
}

export default ContainerSprite;