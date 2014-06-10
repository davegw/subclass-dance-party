var PacmanDancer = function(top, left, setTimeout) {
  Dancer.apply(this, arguments);
  this.$node = $('<img src = "img/pac.gif" class="pacman dancer">');
  Dancer.prototype.setPosition.call(this, top, left);
};

PacmanDancer.prototype = Object.create(Dancer.prototype);
PacmanDancer.prototype.constructor = PacmanDancer;
