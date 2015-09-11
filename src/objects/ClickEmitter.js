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

    this.game.events.cacheClick.add(this.emitParticle, this);
  }

  // methods
  emitParticle(point){
  	this.emitX = point.x;
  	this.emitY = point.y;
  	super.emitParticle();
  }
}

export default ClickEmitter;