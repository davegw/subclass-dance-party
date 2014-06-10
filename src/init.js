$(document).ready(function(){
  //test
  window.dancers = [];
  window.blinkies = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var DancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new DancerMakerFunction(
      $( window ).height() * Math.random(),
      $( window ).width() * Math.random(),
      Math.random() * 1000
    );
    $("body").append(dancer.$node);

    if (dancerMakerFunctionName === "BlinkyDancer") {
      window.blinkies.push(dancer);
    }

    if (dancerMakerFunctionName === "PacmanDancer") {
      for (var i = 0; i < window.blinkies.length; i++) {
        if (closeBlinkies(dancer.getPosition(), window.blinkies[i].getPosition())) {
          window.blinkies[i].$node.addClass("close");
        }
      }
    }
  });


  $("#disperseButton").hide();
  $(".controls").on("click", function(event){
    $(".dancer").toggleClass("alignment");
    $(".controls").toggle();
  });

  function closeBlinkies(pacCoords, blinkyCoords) {
    var dist = Math.pow(
      (Math.pow((pacCoords.top+35-blinkyCoords.top), 2) +
      Math.pow((pacCoords.left+35-blinkyCoords.left), 2)),
      0.5);
    console.log(dist);
    if (dist < 50) {
      return true;
    }
    return false;
  }

  $("body").on("mouseover", ".zangief", function(event) {
    $(this).css({"background-image": "url('http://fc01.deviantart.net/fs71/f/2012/140/1/9/zangief_yes_gif_by_jayfordgraphics-d50i3a6.gif')"});
  });
});

