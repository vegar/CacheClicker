class ScoreObject  {
  constructor(game) {
    
    this.game = game;

    this.cacheClicks = 0;
    this.caches = 0;
    this.cachesEarned = 0;

    this.computedMouseCps = 1;

    this.game.events.cacheClick.add(this.countClick, this);
  }

  save() {


  }

  load() {

  }

  earn(caches) {
	this.caches+=caches;
  	this.cachesEarned+=caches;
  }

  spend(caches) {
  	this.caches-=caches;
  }

  countClick() {
  	this.cacheClicks++;
  	this.earn(this.computedMouseCps);
  }
}

export default ScoreObject;