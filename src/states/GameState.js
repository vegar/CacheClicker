import RainbowText from '../objects/RainbowText';
import ContainerSprite from '../objects/ContainerSprite';
import ClickEmitter from '../objects/ClickEmitter';
import ScoreObject from '../ScoreObject';

class GameState extends Phaser.State {

	create() {
		this.game.physics.startSystem(Phaser.Physics.ARCADE);


		this.game.events = this.game.events || {};
		this.game.events.cacheClick = new Phaser.Signal();


		this.scoreText = new RainbowText(this.game);

		this.container = new ContainerSprite(this.game);
		
		this.game.clickEmitter = new ClickEmitter(this.game);


		this.game.score = new ScoreObject(this.game);


		this.stage.disableVisibilityChange = true;
	}

	preload() {
		this.game.load.image('container', 'images/container.png');
		this.game.load.image('containerParticle', 'images/containerParticle.png');
	}
	
	update() {
		
	}
}

export default GameState;