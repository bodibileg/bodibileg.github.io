$(document).ready(function() {
  var currentStatus = "start"; 

  function updateStatus(status) {
    currentStatus = status;
    if (status === "lost") {
        $(".boundary").addClass("lostBoundary");
        $("#status").html("You lost! :( <br> Click the \"S\" to try again.");
    } else if (status === "won") {
        $("#status").html("You win! :) <br> Click the \"S\" to try again.");
    }
}

  $(".boundary").mouseover(function() {
      if (currentStatus === "playing") {
          updateStatus("lost");
      }
  });

  $("#end").mouseover(function() {
      if (currentStatus === "playing") {
          updateStatus("won");
      }
  });

  $("#start").click(function() {
      currentStatus = "playing";
      $(".boundary").removeClass("lostBoundary");
      $("#status").text("Go to \"E\".");
  });

  $("#maze").mouseleave(function() {
      if (currentStatus === "playing") {
          updateStatus("lost");
      }
  });
});
