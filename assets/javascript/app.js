var correct = 0;
var incorrect = 0;
var unanswered = 5;

$("#unanswered-score").text(unanswered);


$("#q1").on("click", function () {
  correct++
  unanswered--
  $("#correct-score").text(correct);
  $("#incorrect-score").text(incorrect);
  $("#unanswered-score").text(unanswered);
})

$("#q2").on("click", function () {
  unanswered--
  incorrect++
  $("#correct-score").text(correct);
  $("#incorrect-score").text(incorrect);
  $("#unanswered-score").text(unanswered);
})

$("#q3").on("click", function () {
  unanswered--
  incorrect++
  $("#correct-score").text(correct);
  $("#incorrect-score").text(incorrect);
  $("#unanswered-score").text(unanswered);
})

$("#q4").on("click", function () {
  unanswered--
  incorrect++
  $("#correct-score").text(correct);
  $("#incorrect-score").text(incorrect);
  $("#unanswered-score").text(unanswered);
})

$("#q5").on("click", function () {
  unanswered--
  incorrect++
  $("#correct-score").text(correct);
  $("#incorrect-score").text(incorrect);
  $("#unanswered-score").text(unanswered);
})

$("#q6").on("click", function () {
  correct++
  unanswered--
  $("#correct-score").text(correct);
  $("#incorrect-score").text(incorrect);
  $("#unanswered-score").text(unanswered);
})

$("#q7").on("click", function () {
  incorrect++
  unanswered--
  $("#correct-score").text(correct);
  $("#incorrect-score").text(incorrect);
  $("#unanswered-score").text(unanswered);
})

$("#q8").on("click", function () {
  correct++
  unanswered--
  $("#correct-score").text(correct);
  $("#incorrect-score").text(incorrect);
  $("#unanswered-score").text(unanswered);
})

$("#q9").on("click", function () {
  incorrect++
  unanswered--
  $("#correct-score").text(correct);
  $("#incorrect-score").text(incorrect);
  $("#unanswered-score").text(unanswered);
})

$("#q10").on("click", function () {
  incorrect++
  unanswered--
  $("#correct-score").text(correct);
  $("#incorrect-score").text(incorrect);
  $("#unanswered-score").text(unanswered);
})

$("#q11").on("click", function () {
  correct++
  unanswered--
  $("#correct-score").text(correct);
  $("#incorrect-score").text(incorrect);
  $("#unanswered-score").text(unanswered);
})

$("#q12").on("click", function () {
  incorrect++
  unanswered--
  $("#correct-score").text(correct);
  $("#incorrect-score").text(incorrect);
  $("#unanswered-score").text(unanswered);
})

$("#q13").on("click", function () {
  correct++
  unanswered--
  $("#correct-score").text(correct);
  $("#incorrect-score").text(incorrect);
  $("#unanswered-score").text(unanswered);
})

$("#q14").on("click", function () {
  incorrect++
  unanswered--
  $("#correct-score").text(correct);
  $("#incorrect-score").text(incorrect);
  $("#unanswered-score").text(unanswered);
})

$("#q15").on("click", function () {
  incorrect++
  unanswered--
  $("#correct-score").text(correct);
  $("#incorrect-score").text(incorrect);
  $("#unanswered-score").text(unanswered);
})

$(document).ready(function () {

  $("#startbutton").on("click", function () {
    var targetDiv = document.getElementById("visibility");
    targetDiv.setAttribute("class", "visible");



    setTimeout(sixtySeconds, 1000 * 60);

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
      $('html, body').animate({
        scrollTop: 0
      }, 'fast');
    }
  });




});

