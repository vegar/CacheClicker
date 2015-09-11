class ScoreObject  {
  constructor(game) {
    
    this.game = game;

    this.cacheClicks = 0;
    this.caches = 0;
    this.cachesEarned = 0;

    this.game.events.cacheClick.add(this.countClick, this);
  }

  save() {


  }

  load() {

  }

  earn(caches) {
	this.caches++;
  	this.cachesEarned++;
  }

  spend(caches) {

  }

  countClick() {
  	this.cacheClicks++;
  	this.earn(1);
  }
}

export default ScoreObject;