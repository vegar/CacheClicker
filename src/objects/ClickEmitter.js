class ClickEmitter extends Phaser.Particles.Arcade.Emitter {

  constructor(game) {
  	super(game);

    //this.emitter = game.add.emitter(game.world.centerX, game.world.centerY);

    this.makeParticles('containerParticle');
    this.setAlpha(1, 0, 5000);
    this.gravity = 200;
    this.lifespan = 5000;
    this.setYSpeed(-50, -200);

	this.game.stage.addChild(this);  
  }

  // methods
  emitParticle(x, y){
  	this.emitX = x;
  	this.emitY = y;
  	super.emitParticle();
  }
}

export default ClickEmitter;