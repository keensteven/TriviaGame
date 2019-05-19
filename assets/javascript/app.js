console.log("works")

$(document).ready(function () {

  $("#startbutton").on("click", function () {
    var targetDiv = document.getElementById("visibility");
    targetDiv.setAttribute("class", "visible");

    setTimeout(sixtySeconds, 1000 * 10);

    function sixtySeconds() {
      // in the element with an id of time-left add an h2 saying Time's Up!
      // console log done
      var targetDiv = document.getElementById("visibility");
      targetDiv.setAttribute("class", "invisible");
      console.log("done");

      var scoreDiv = document.getElementById("scorevisible");
      scoreDiv.setAttribute("class", "visible");

      var buttonDiv = document.getElementById("buttonvisible");
      buttonDiv.setAttribute("class", "invisible");
      alert("Time is up")
      $('html, body').animate({ scrollTop: 0 }, 'fast');
      console.log("time is up");
    }
  });

});




/* 
        $(".answer").on("click",function(){
            alert($(this).val())

        }) */