var shown = false;

function showhideEmail() {
  if (shown) {
    document.getElementById("email").innerHTML = "Show my email";
    shown = false;
  } else {
    var myemail =
      "<a href='mailto:jastere1" +
      "@" +
      "udayton.edu'>jastere1" +
      "@" +
      "udayton.edu</a>";
    document.getElementById("email").innerHTML = myemail;
    shown = true;
  }
}

let correctAnswer = "";
let answers = [];
async function triviaAPIfetch() {
  const triviaAPI_res = await fetch(
    "https://opentdb.com/api.php?amount=1&difficulty=easy"
  );
  const result = await triviaAPI_res.json();
  $("#trivia").html(result.results[0].question);
  //Get correct answers and wrong answers put into array, mix then print
  correctAnswer = result.results[0].correct_answer;
  incorrectAnswers = result.results[0].incorrect_answers;
  answers = [correctAnswer].concat(incorrectAnswers);
  shuffleArray(answers);
  $("#trivia").html(result.results[0].question);
  $("#triviaAnswers").html("");
  answers.forEach((answer) => {
    $("#triviaAnswers").append(`<div style="margin: 10px 0;">${answer}</div>`);
  });
  document.getElementById("guessContainer").style.display = "block";
}
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
}
function triviaGuess() {
  var input = document.getElementById("guess").value;
  if (input.toLowerCase() === correctAnswer.toLowerCase()) {
    $("#triviaAnswer").html("Correct!");
  } else {
    $("#triviaAnswer").html("Sorry, The correct answer was: " + correctAnswer);
  }
}

async function catAPIfetch() {
  const catAPI_res = await fetch(
    "https://api.thecatapi.com/v1/images/search?api_key=live_oHh2GI6I4zpgQfYxxHLSmnIlde13K2opgrDTx0UxLOP9BoC9mCueV57PCKc32gum"
  );
  const result = await catAPI_res.json();
  const catUrl = result[0].url;
  const catWidth = result[0].width;
  const catHeight = result[0].height;
  $("#cat").html(
    `<img src="${catUrl}" class="photo" style="display:inline" alt="Cat" width="${catWidth}" height="${catHeight}">`
  );
}
