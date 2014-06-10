var SquareDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.$node.addClass("jumper");
};

SquareDancer.prototype = Object.create(Dancer.prototype);
SquareDancer.prototype.constructor = SquareDancer;
SquareDancer.prototype.step = function() {
  var square = function(context) {
    context.animate({left: "+=100px"}, function() {
      context.animate({top: "+=100px"}, function() {
        context.animate({left: "-=100px"}, function() {
          context.animate({top: "-=100px"}, function() {
            square(context);
          });
        });
      });
    });
  };
  square.call(null, this.$node);
};
