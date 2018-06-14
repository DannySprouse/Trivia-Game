$(document).ready(function () {

  // Create an object that will hold multiple properties

  var capitalGame = {

    openingPage: "",
    correctChoices: 0,
    incorrectChoices: 0,
    noChoices: 0,
    gameHTML: "",

    questionNumberArrayNorth: [
      "Question #1 of 11:",
      "Question #2 of 11:",
      "Question #3 of 11:",
      "Question #4 of 11:",
      "Question #5 of 11:",
      "Question #6 of 11:",
      "Question #7 of 11:",
      "Question #8 of 11:",
      "Question #9 of 11:",
      "Question #10 of 11:",
      "Question #11 of 11"
    ],

    questionsArrayNorth: [
      "What is the state capital of Maine?",
      "What is the state capital of Vermont?",
      "What is the state capital of New Hampshire?",
      "What is the state capital of New York?",
      "What is the state capital of New Jersey?",
      "What is the state capital of Massachusetts?",
      "What is the state capital of Connecticut?",
      "What is the state capital of Rhode Island?",
      "What is the state capital of Pennsylvania?",
      "What is the state capital of Maryland?",
      "What is the state capital of Delaware?"
    ],

    answerOptionsArrayNorth: [
      ["Bangor", "Portland", "Bar Harbor", "Augusta"],
      ["Burlington", "Manchester", "Montpelier", "Stowe"],
      ["Portsmouth", "Concord", "Keene", "Nashua"],
      ["Rochester", "New York City", "Albany", "Buffalo"],
      ["Trenton", "Newark", "Atlantic City", "Jersey City"],
      ["Cambridge", "Boston", "Worcester", "Salem"],
      ["Hartford", "New Haven", "Stamford", "Bridgeport"],
      ["Newport", "Warwick", "Cranston", "Providence"],
      ["Philadelphia", "Scranton", "Harrisburg", "Pittsburgh"],
      ["Baltimore", "Annapolis", "Ocean City", "Silver Spring"],
      ["Wilmington", "Dover", "Rehoboth Beach", "Newark"]
    ],

    correctAnswersArrayNorth: [
      "Augusta",
      "Montpelier",
      "Concord",
      "Albany",
      "Trenton",
      "Boston",
      "Hartford",
      "Providence",
      "Harrisburg",
      "Annapolis",
      "Dover"
    ],

    imagesArrayNorth: [
      "<img class='img-capitol' src='assets/images/Northeast/me.jpg' alt='State Capitol Building in Augusta, Maine'>",
      "<img class='img-capitol' src='assets/images/Northeast/vt.jpg' alt='State Capitol Building in Montpelier, Vermont'>",
      "<img class='img-capitol' src='assets/images/Northeast/nh.jpg' alt='State Capitol Building in Concord, New Hampshire'>",
      "<img class='img-capitol' src='assets/images/Northeast/ny.jpg' alt='State Capitol Building in Albany, New York'>",
      "<img class='img-capitol' src='assets/images/Northeast/nj.jpg' alt='State Capitol Building in Trenton, New Jersey'>",
      "<img class='img-capitol' src='assets/images/Northeast/ma.jpg' alt='State Capitol Building in Boston, Massachusetts'>",
      "<img class='img-capitol' src='assets/images/Northeast/ct.jpg' alt='State Capitol Building in Hartford, Connecticut'>",
      "<img class='img-capitol' src='assets/images/Northeast/ri.jpg' alt='State Capitol Building in Providence, Rhode Island'>",
      "<img class='img-capitol' src='assets/images/Northeast/pa.jpg' alt='State Capitol Building in Harrisburg, Pennsylvania'>",
      "<img class='img-capitol' src='assets/images/Northeast/md.jpg' alt='State Capitol Building in Annapolis, Maryland'>",
      "<img class='img-capitol' src='assets/images/Northeast/de.jpg' alt='State Capitol Building in Dover, Delaware'>"
    ],

    showClock: "",
    questionCounter: 0,
    timeClock: 20,
  }; // End Game Object

  // Start button and timer

  function startScreen() {
    capitalGame.openingPage = "<p class='text-center main-button'><a class='btn btn-primary btn-lg start-button text-center' href='#'>Let's Begin!</a></p>";

    $(".main-content").html(capitalGame.openingPage);
  };

  startScreen();

  function timer() {
    capitalGame.showClock = setInterval(twentySeconds, 1000);

    function twentySeconds() {
      if (capitalGame.timeClock === 0) {
        timeUp();
        clearInterval(capitalGame.showClock);
      }
      else if (capitalGame.timeClock > 0) {
        capitalGame.timeClock--;
      }

      $(".timer").html(capitalGame.timeClock);
    }
  };

  $("body").on("click", ".start-button", function (event) {
    event.preventDefault();

    generateHTML();

    timer();
  });

  // Run all the questions in the array, reset timer and delay between questions until done

  function pause() {
    if (capitalGame.questionCounter < 10) {
      capitalGame.questionCounter++;
      generateHTML();
      capitalGame.timeClock = 20;
      timer();
    }
    else {
      endScreen();
    }
  };

  // Functions to track correct responses, incorrect responses and time-outs

  function correct() {
    capitalGame.correctChoices++;
    capitalGame.gameHTML = "<p class='text-center right-response'>You're right! The answer is " + capitalGame.correctAnswersArrayNorth[capitalGame.questionCounter] + ".</p>" + "<br />" + capitalGame.imagesArrayNorth[capitalGame.questionCounter];

    $(".main-content").html(capitalGame.gameHTML);

    setTimeout(pause, 5000);
  };

  function incorrect() {
    capitalGame.incorrectChoices++;
    capitalGame.gameHTML = "<p class='text-center wrong-response'>No, sorry. The correct answer is " + capitalGame.correctAnswersArrayNorth[capitalGame.questionCounter] + ".</p>" + "<br />" + capitalGame.imagesArrayNorth[capitalGame.questionCounter];

    $(".main-content").html(capitalGame.gameHTML);

    setTimeout(pause, 5000);
  };

  $("body").on("click", ".answer", function (event) {

    userChoice = $(this).text();

    if (userChoice === capitalGame.correctAnswersArrayNorth[capitalGame.questionCounter]) {

      clearInterval(capitalGame.showClock);

      correct();
    }
    else {

      clearInterval(capitalGame.showClock);
      incorrect();
    }
  });

  function timeUp() {
    capitalGame.noChoices++;
    capitalGame.gameHTML = "<p class='text-center no-response'>Time is up!  The correct answer was " + capitalGame.correctAnswersArrayNorth[capitalGame.questionCounter] + ".</p>" + "<br />" + capitalGame.imagesArrayNorth[capitalGame.questionCounter];

    $(".main-content").html(capitalGame.gameHTML);

    setTimeout(pause, 5000);
  };

  // Set end screen to show scoreboard with results, and navigation options

  function endScreen() {
    capitalGame.gameHTML =
      "<p class='text-center scoreboard'>SCOREBOARD" + "</p>" +
      "<div class='scores'>" +
      "<p>Correct Answers: " + capitalGame.correctChoices + "</p>" +
      "<p>Incorrect Answers: " + capitalGame.incorrectChoices + "</p>" +
      "<p>Unanswered: " + capitalGame.noChoices + "</p>" + "</div>" +
      "<p class='text-center main-button'><a class='btn btn-primary btn-lg reset-button text-center' href='#'>Retry This Quiz!</a></p>" +
      "<p class='text-center main-button'><a class='btn btn-primary btn-lg next-button text-center' target='_blank' href='south.html'>Play The Next Quiz!</a></p>" +
      "<p class='text-center main-button'><a class='btn btn-primary btn-lg home-button text-center' target='_blank' href='index.html'>Return To Home Page!</a></p>";

    $(".main-content").html(capitalGame.gameHTML);
  };

  // Set function to restart the game

  function resetGame() {
    capitalGame.questionCounter = 0;
    capitalGame.correctChoices = 0;
    capitalGame.incorrectChoies = 0;
    capitalGame.noChoices = 0;
    capitalGame.timeClock = 20;

    generateHTML();
    timer();
  };

  $("body").on("click", ".reset-button", function (event) {
    event.preventDefault();

    resetGame();
  })

  // Set function for the html for questions and answers on the page: order as questionNumber, questionArray, answerOptions

  function generateHTML() {
    capitalGame.gameHTML = "<p class='text-center clock'>Time Remaining: <span class='timer'>20</span></p>" + "<br />" + "<p class='question-number'>" + capitalGame.questionNumberArrayNorth[capitalGame.questionCounter] + "</p>" + "<p class='question'>" + capitalGame.questionsArrayNorth[capitalGame.questionCounter] + "</p>" + "<div class='answer-block'>" + "<button class='answer'>" + capitalGame.answerOptionsArrayNorth[capitalGame.questionCounter][0] + "</button><br /><button class='answer'>" + capitalGame.answerOptionsArrayNorth[capitalGame.questionCounter][1] + "</button><br /><button class='answer'>" + capitalGame.answerOptionsArrayNorth[capitalGame.questionCounter][2] + "</button><br /><button class='answer'>" + capitalGame.answerOptionsArrayNorth[capitalGame.questionCounter][3] + "</button>" + "</div>";

    $(".main-content").html(capitalGame.gameHTML);
  }

}); // ends JQuery doc ready