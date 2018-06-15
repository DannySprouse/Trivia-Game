$(document).ready(function () {
  // Create an object that will hold multiple properties

  var capitalGame = {

    openingPage: "",
    correctChoices: 0,
    incorrectChoices: 0,
    noChoices: 0,
    gameHTML: "",

    questionNumberArrayCentral: [
      "Question #1 of 14:",
      "Question #2 of 14:",
      "Question #3 of 14:",
      "Question #4 of 14:",
      "Question #5 of 14:",
      "Question #6 of 14:",
      "Question #7 of 14:",
      "Question #8 of 14:",
      "Question #9 of 14:",
      "Question #10 of 14:",
      "Question #11 of 14",
      "Question #12 of 14",
      "Question #13 of 14",
      "Question #14 of 14"
    ],

    questionsArrayCentral: [
      "What is the state capital of Michigan?",
      "What is the state capital of Ohio?",
      "What is the state capital of Indiana?",
      "What is the state capital of Wisconsin?",
      "What is the state capital of Illinois?",
      "What is the state capital of Minnesota?",
      "What is the state capital of Iowa?",
      "What is the state capital of Missouri?",
      "What is the state capital of Nebraska?",
      "What is the state capital of Kansas?",
      "What is the state capital of Oklahoma?",
      "What is the state capital of Texas?",
      "What is the state capital of North Dakota?",
      "What is the state capital of South Dakota?"
    ],

    answerOptionsArrayCentral: [
      ["Grand Rapids", "Lansing", "Detroit", "Ann Arbor"],
      ["Cleveland", "Cincinnati", "Columbus", "Dayton"],
      ["Fort Wayne", "Indianapolis", "Bloomington", "South Bend"],
      ["Madison", "Milwaukee", "Green Bay", "Eau Claire"],
      ["Chicago", "Joilet", "Springfield", "Peoria"],
      ["St. Cloud", "Bloomington", "Minneapolis", "St. Paul"],
      ["Dubuque", "Des Moines", "Cedar Rapids", "Sioux City"],
      ["Jefferson City", "Kansas City", "St. Louis", "Joplin"],
      ["Omaha", "Kearney", "Hastings", "Lincoln"],
      ["Wichita", "Topeka", "Kansas City", "Lawrence"],
      ["Tulsa", "Lawton", "Oklahoma City", "Norman"],
      ["Houston", "Dallas", "Austin", "San Antonio"],
      ["Fargo", "Grand Forks", "Bismarck", "Dickinson"],
      ["Sious Falls", "Pierre", "Rapid City", "Aberdeen"]
    ],

    correctAnswersArrayCentral: [
      "Lansing",
      "Columbus",
      "Indianapolis",
      "Madison",
      "Springfield",
      "St. Paul",
      "Des Moines",
      "Jefferson City",
      "Lincoln",
      "Topeka",
      "Oklahoma City",
      "Austin",
      "Bismarck",
      "Pierre"
    ],

    imagesArrayCentral: [
      "<img class='img-capitol' src='assets/images/central/mi.jpg' alt='State Capitol Building in Lansing, Michigan'>",
      "<img class='img-capitol' src='assets/images/central/oh.jpg' alt='State Capitol Building in Columbus, Ohio'>",
      "<img class='img-capitol' src='assets/images/central/in.jpg' alt='State Capitol Building in Indianapolis, Indiana'>",
      "<img class='img-capitol' src='assets/images/central/wi.jpg' alt='State Capitol Building in Madison, Wisconsin'>",
      "<img class='img-capitol' src='assets/images/central/il.jpg' alt='State Capitol Building in Springfield, Illinois'>",
      "<img class='img-capitol' src='assets/images/central/mn.jpg' alt='State Capitol Building in St. Paul, Minnesota'>",
      "<img class='img-capitol' src='assets/images/central/ia.jpg' alt='State Capitol Building in Des Moines, Iowa'>",
      "<img class='img-capitol' src='assets/images/central/mo.jpg' alt='State Capitol Building in Jefferson City, Missouri'>",
      "<img class='img-capitol' src='assets/images/central/ne.jpg' alt='State Capitol Building in Lincoln, Nebraska'>",
      "<img class='img-capitol' src='assets/images/central/ks.jpg' alt='State Capitol Building in Topeka, Kansas'>",
      "<img class='img-capitol' src='assets/images/central/ok.jpg' alt='State Capitol Building in Oklahoma City, Oklahoma'>",
      "<img class='img-capitol' src='assets/images/central/tx.jpg' alt='State Capitol Building in Austin, Texas'>",
      "<img class='img-capitol' src='assets/images/central/nd.jpg' alt='State Capitol Building in Bismarck, North Dakota'>",
      "<img class='img-capitol' src='assets/images/central/sd.jpg' alt='State Capitol Building in Pierre, South Dakota'>"
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
    if (capitalGame.questionCounter < 13) {
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
    capitalGame.gameHTML = "<p class='text-center right-response'>You're right! The answer is " + capitalGame.correctAnswersArrayCentral[capitalGame.questionCounter] + ".</p>" + "<br />" + capitalGame.imagesArrayCentral[capitalGame.questionCounter];

    $(".main-content").html(capitalGame.gameHTML);

    setTimeout(pause, 5000);
  };

  function incorrect() {
    capitalGame.incorrectChoices++;
    capitalGame.gameHTML = "<p class='text-center wrong-response'>No, sorry. The correct answer is " + capitalGame.correctAnswersArrayCentral[capitalGame.questionCounter] + ".</p>" + "<br />" + capitalGame.imagesArrayCentral[capitalGame.questionCounter];

    $(".main-content").html(capitalGame.gameHTML);

    setTimeout(pause, 5000);
  };

  $("body").on("click", ".answer", function (event) {

    userChoice = $(this).text();

    if (userChoice === capitalGame.correctAnswersArrayCentral[capitalGame.questionCounter]) {

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
    capitalGame.gameHTML = "<p class='text-center no-response'>Time is up!  The correct answer was " + capitalGame.correctAnswersArrayCentral[capitalGame.questionCounter] + ".</p>" + "<br />" + capitalGame.imagesArrayCentral[capitalGame.questionCounter];

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
      "<p class='text-center main-button'><a class='btn btn-primary btn-lg next-button text-center' target='_blank' href='west.html'>Play The Next Quiz!</a></p>" +
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
    capitalGame.gameHTML = "<p class='text-center clock'>Time Remaining: <span class='timer'>20</span></p>" + "<br />" + "<p class='question-number'>" + capitalGame.questionNumberArrayCentral[capitalGame.questionCounter] + "</p>" + "<p class='question'>" + capitalGame.questionsArrayCentral[capitalGame.questionCounter] + "</p>" + "<div class='answer-block'>" + "<button class='answer'>" + capitalGame.answerOptionsArrayCentral[capitalGame.questionCounter][0] + "</button><br /><button class='answer'>" + capitalGame.answerOptionsArrayCentral[capitalGame.questionCounter][1] + "</button><br /><button class='answer'>" + capitalGame.answerOptionsArrayCentral[capitalGame.questionCounter][2] + "</button><br /><button class='answer'>" + capitalGame.answerOptionsArrayCentral[capitalGame.questionCounter][3] + "</button>" + "</div>";

    $(".main-content").html(capitalGame.gameHTML);
  }

}); // ends JQuery doc ready