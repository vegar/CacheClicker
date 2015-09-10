import RainbowText from '../objects/RainbowText';
import ContainerSprite from '../objects/ContainerSprite';
import ClickEmitter from '../objects/ClickEmitter';

class GameState extends Phaser.State {

	create() {
		this.game.physics.startSystem(Phaser.Physics.ARCADE);

		this.scoreText = new RainbowText(this.game, this.game.world.centerX, 25);

		this.container = new ContainerSprite(this.game);
		
		this.game.clickEmitter = new ClickEmitter(this.game);


		this.stage.disableVisibilityChange = true;

		this.game.clicks = 0;
	}

	preload() {
		this.game.load.image('container', 'images/container.png');
		this.game.load.image('containerParticle', 'images/containerParticle.png');
	}
	
	update() {
		
	}
}

export default GameState;