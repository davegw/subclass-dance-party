var SquareDancer = function(top, left, setTimeout) {
  Dancer.apply(this, arguments);
}

SquareDancer.prototype = Object.create(Dancer.prototype);
SquareDancer.prototype.constructor = SquareDancer;
SquareDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);

  // this.$node.();
}
