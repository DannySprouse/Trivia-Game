$(document).ready(function () {

  // Create an object that will hold multiple properties

  var capitalGame = {

    openingPage: "",
    correctChoices: 0,
    incorrectChoices: 0,
    noChoices: 0,
    gameHTML: "",

    questionNumberArraySouth: [
      "Question #1 of 12:",
      "Question #2 of 12:",
      "Question #3 of 12:",
      "Question #4 of 12:",
      "Question #5 of 12:",
      "Question #6 of 12:",
      "Question #7 of 12:",
      "Question #8 of 12:",
      "Question #9 of 12:",
      "Question #10 of 12:",
      "Question #11 of 12",
      "Question #12 of 12"
    ],

    questionsArraySouth: [
      "What is the state capital of Florida?",
      "What is the state capital of Georgia?",
      "What is the state capital of Alabama?",
      "What is the state capital of Mississippi?",
      "What is the state capital of Louisiana?",
      "What is the state capital of Arkansas?",
      "What is the state capital of Tennessee?",
      "What is the state capital of South Carolina?",
      "What is the state capital of North Carolina?",
      "What is the state capital of Kentucky?",
      "What is the state capital of Virginia?",
      "What is the state capital of West Virginia?"
    ],

    answerOptionsArraySouth: [
      ["Miami", "Orlando", "Tallahassee", "Fort Lauderdale"],
      ["Augusta", "Athens", "Macon", "Atlanta"],
      ["Birmingham", "Montgomery", "Mobile", "Auburn"],
      ["Jackson", "Biloxi", "Tupelo", "Hattiesburg"],
      ["Shreveport", "New Orleans", "Baton Rouge", "Lafayette"],
      ["Conway", "Fayetteville", "Hot Springs", "Little Rock"],
      ["Nashville", "Memphis", "Chattanooga", "Knoxville"],
      ["Greenville", "Columbia", "Spartanburg", "Charleston"],
      ["Raleigh", "Durham", "Charlotte", "Winston-Salem"],
      ["Lexington", "Louisville", "Frankfort", "Bowling Green"],
      ["Roanoke", "Williamsburg", "Richmond", "Arlington"],
      ["Charleston", "Beckley", "Wheeling", "Huntington"]
    ],

    correctAnswersArraySouth: [
      "Tallahassee",
      "Atlanta",
      "Montgomery",
      "Jackson",
      "Baton Rouge",
      "Little Rock",
      "Nashville",
      "Columbia",
      "Raleigh",
      "Frankfort",
      "Richmond",
      "Charleston"
    ],

    imagesArraySouth: [
      "<img class='img-capitol' src='assets/images/Southeast/fl.jpg' alt='State Capitol Building in Tallahassee, Florida'>",
      "<img class='img-capitol' src='assets/images/Southeast/ga.jpg' alt='State Capitol Building in Atlanta, Georgia'>",
      "<img class='img-capitol' src='assets/images/Southeast/al.jpg' alt='State Capitol Building in Montgomery, Alabama'>",
      "<img class='img-capitol' src='assets/images/Southeast/ms.jpg' alt='State Capitol Building in Jackson, Mississippi'>",
      "<img class='img-capitol' src='assets/images/Southeast/la.jpg' alt='State Capitol Building in Baton Rouge, Louisiana'>",
      "<img class='img-capitol' src='assets/images/Southeast/ar.jpg' alt='State Capitol Building in Little Rock, Arkansas'>",
      "<img class='img-capitol' src='assets/images/Southeast/tn.jpg' alt='State Capitol Building in Nashville, Tennessee'>",
      "<img class='img-capitol' src='assets/images/Southeast/sc.jpg' alt='State Capitol Building in Columbia, South Carolina'>",
      "<img class='img-capitol' src='assets/images/Southeast/nc.jpg' alt='State Capitol Building in Raleigh, North Carolina'>",
      "<img class='img-capitol' src='assets/images/Southeast/ky.jpg' alt='State Capitol Building in Frankfort, Kentucky'>",
      "<img class='img-capitol' src='assets/images/Southeast/va.jpg' alt='State Capitol Building in Richmond, Virginia'>",
      "<img class='img-capitol' src='assets/images/Southeast/wv.jpg' alt='State Capitol Building in Charleston, West Virginia'>"
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
    if (capitalGame.questionCounter < 11) {
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
    capitalGame.gameHTML = "<p class='text-center right-response'>You're right! The answer is " + capitalGame.correctAnswersArraySouth[capitalGame.questionCounter] + ".</p>" + "<br />" + capitalGame.imagesArraySouth[capitalGame.questionCounter];

    $(".main-content").html(capitalGame.gameHTML);

    setTimeout(pause, 5000);
  };

  function incorrect() {
    capitalGame.incorrectChoices++;
    capitalGame.gameHTML = "<p class='text-center wrong-response'>No, sorry. The correct answer is " + capitalGame.correctAnswersArraySouth[capitalGame.questionCounter] + ".</p>" + "<br />" + capitalGame.imagesArraySouth[capitalGame.questionCounter];

    $(".main-content").html(capitalGame.gameHTML);

    setTimeout(pause, 5000);
  };

  $("body").on("click", ".answer", function (event) {

    userChoice = $(this).text();

    if (userChoice === capitalGame.correctAnswersArraySouth[capitalGame.questionCounter]) {

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
    capitalGame.gameHTML = "<p class='text-center no-response'>Time is up!  The correct answer was " + capitalGame.correctAnswersArraySouth[capitalGame.questionCounter] + ".</p>" + "<br />" + capitalGame.imagesArraySouth[capitalGame.questionCounter];

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
      "<p class='text-center main-button'><a class='btn btn-primary btn-lg next-button text-center' target='_blank' href='central.html'>Play The Next Quiz!</a></p>" +
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
    capitalGame.gameHTML = "<p class='text-center clock'>Time Remaining: <span class='timer'>20</span></p>" + "<br />" + "<p class='question-number'>" + capitalGame.questionNumberArraySouth[capitalGame.questionCounter] + "</p>" + "<p class='question'>" + capitalGame.questionsArraySouth[capitalGame.questionCounter] + "</p>" + "<div class='answer-block'>" + "<button class='answer'>" + capitalGame.answerOptionsArraySouth[capitalGame.questionCounter][0] + "</button><br /><button class='answer'>" + capitalGame.answerOptionsArraySouth[capitalGame.questionCounter][1] + "</button><br /><button class='answer'>" + capitalGame.answerOptionsArraySouth[capitalGame.questionCounter][2] + "</button><br /><button class='answer'>" + capitalGame.answerOptionsArraySouth[capitalGame.questionCounter][3] + "</button>" + "</div>";

    $(".main-content").html(capitalGame.gameHTML);
  }

}); // ends JQuery doc ready