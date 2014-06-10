var ZangiefDancer = function(top, left, setTimeout) {
  Dancer.apply(this, arguments);
}

ZangiefDancer.prototype = Object.create(Dancer.prototype);
ZangiefDancer.prototype.constructor = ZangiefDancer;
ZangiefDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);

  this.$node.addClass("zangief");
}
