function tack() {
    console.log('tick');

    this.tack = function() {
        console.log('tack');
    };

    this.tick = function() {
        this.tack();
    };
}

var tick = new tack(); // tick
setTimeout(tick.tick, 10); // TypeError tack() of function - undefiend
