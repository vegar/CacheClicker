class ClickEmitter extends Phaser.Particles.Arcade.Emitter {

  constructor(game) {
  	super(game);

    this.emitter = game.add.emitter(game.world.centerX, game.world.centerY);

    this.emitter.makeParticles('containerParticle');
    this.emitter.setAlpha(1, 0, 5000);
    this.emitter.gravity = 200;
    this.emitter.lifespan = 5000;
    this.emitter.setYSpeed(-50, -200);

	this.game.stage.addChild(this);  
  }

  // methods
  emitParticle(x, y){
  	this.emitter.emitX = x;
  	this.emitter.emitY = y;
  	this.emitter.emitParticle();
  }
}

export default ClickEmitter;