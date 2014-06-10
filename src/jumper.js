var Jumper = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.$node.addClass("jumper");
  this.jump();
};

Jumper.prototype = Object.create(Dancer.prototype);
Jumper.prototype.constructor = Jumper;

Jumper.prototype.jump = function() {
  var jumper = function(context) {
    context.$node.animate({top: "-=50px"}, function() {
      context.$node.animate({top: "+=50px"}, function() {
        context.jump();
      });
    });
  };
  // setTimeout(this.jump.bind(this), (this._timeBetweenSteps*4));
  jumper(this);
};
