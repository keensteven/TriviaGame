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
  // $("#time-left").append("<h2>Time's Up!</h2>");
  console.log("time is up");
}
  });

});

// var audio = new Audio("raven.mp3");

// //  after 60 seconds, execute the tenSeconds function
// //  after 15 seconds, execute the timeUp function

// setTimeout(timeUp, 1000 * 15);

// function sixtySeconds() {
//   // in the element with an id of time-left add an h2 saying About 5 Seconds Left!
//   // console log 5 seconds left
//   $("#time-left").append("<h2>About 5 Seconds Left!</h2>");
//   console.log("5 seconds left");
// }

//   //  The following line will play the audio file we linked to above:
//   audio.play();


/* 
        $(".answer").on("click",function(){
            alert($(this).val())

        }) */