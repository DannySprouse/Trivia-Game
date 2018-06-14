$(document).ready(function () {

  // Create an object that will hold multiple properties

  var capitalGame = {

    openingPage: "",
    correctChoices: 0,
    incorrectChoices: 0,
    noChoices: 0,
    gameHTML: "",

    questionNumberArrayWest: [
      "Question #1 of 13:",
      "Question #2 of 13:",
      "Question #3 of 13:",
      "Question #4 of 13:",
      "Question #5 of 13:",
      "Question #6 of 13:",
      "Question #7 of 13:",
      "Question #8 of 13:",
      "Question #9 of 13:",
      "Question #10 of 13:",
      "Question #11 of 13",
      "Question #12 of 13",
      "Question #13 of 13"
    ],

    questionsArrayWest: [
      "What is the state capital of Washington?",
      "What is the state capital of Oregon?",
      "What is the state capital of California?",
      "What is the state capital of Montana?",
      "What is the state capital of Idaho?",
      "What is the state capital of Wyoming?",
      "What is the state capital of Nevada?",
      "What is the state capital of Utah?",
      "What is the state capital of Arizona?",
      "What is the state capital of Colorado?",
      "What is the state capital of New Mexico?",
      "What is the state capital of Alaska?",
      "What is the state capital of Hawaii?"
    ],

    answerOptionsArrayWest: [
      ["Seattle", "Tacoma", "Spokane", "Olympia"],
      ["Salem", "Portland", "Eugene", "Medford"],
      ["Los Angeles", "Sacramento", "San Diego", "San Francisco"],
      ["Billings", "Helena", "Bozeman", "Great Falls"],
      ["Boise", "Twin Falls", "Idaho Falls", "Meridian"],
      ["Casper", "Jackson", "Laramie", "Cheyenne"],
      ["Las Vegas", "Carson City", "Reno", "Henderson"],
      ["Provo", "Salt Lake City", "Moab", "Ogden"],
      ["Tucson", "Sedona", "Flagstaff", "Phoenix"],
      ["Denver", "Boulder", "Pueblo", "Colorado Springs"],
      ["Albuquerque", "Las Cruces", "Santa Fe", "Taos"],
      ["Anchorage", "Juneau", "Fairbanks", "Ketchikan"],
      ["Hilo", "Kailua", "Honolulu", "Mililani"]
    ],

    correctAnswersArrayWest: [
      "Olympia",
      "Salem",
      "Sacramento",
      "Helena",
      "Boise",
      "Cheyenne",
      "Carson City",
      "Salt Lake City",
      "Phoenix",
      "Denver",
      "Santa Fe",
      "Juneau",
      "Honolulu"
    ],

    imagesArrayWest: [
      "<img class='img-capitol' src='assets/images/west/wa.jpg' alt='State Capitol Building in Olympia, Washington'>",
      "<img class='img-capitol' src='assets/images/west/or.jpg' alt='State Capitol Building in Salem, Oregon'>",
      "<img class='img-capitol' src='assets/images/west/ca.jpg' alt='State Capitol Building in Sacramento, California'>",
      "<img class='img-capitol' src='assets/images/west/mt.jpg' alt='State Capitol Building in Helena, Montana'>",
      "<img class='img-capitol' src='assets/images/west/id.jpg' alt='State Capitol Building in Boise, Idaho'>",
      "<img class='img-capitol' src='assets/images/west/wy.jpg' alt='State Capitol Building in Cheyenne, Wyoming'>",
      "<img class='img-capitol' src='assets/images/west/nv.jpg' alt='State Capitol Building in Carson City, Nevada'>",
      "<img class='img-capitol' src='assets/images/west/ut.JPG' alt='State Capitol Building in Salt Lake City, Utah'>",
      "<img class='img-capitol' src='assets/images/west/az.jpg' alt='State Capitol Building in Phoenix, Arizona'>",
      "<img class='img-capitol' src='assets/images/west/co.jpg' alt='State Capitol Building in Denver, Colorado'>",
      "<img class='img-capitol' src='assets/images/west/nm.jpg' alt='State Capitol Building in Santa Fe, New Mexico'>",
      "<img class='img-capitol' src='assets/images/west/ak.jpg' alt='State Capitol Building in Juneau, Alaska'>",
      "<img class='img-capitol' src='assets/images/west/hi.jpg' alt='State Capitol Building in Honolulu, Hawaii'>"
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
    if (capitalGame.questionCounter < 12) {
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
    capitalGame.gameHTML = "<p class='text-center right-response'>You're right! The answer is " + capitalGame.correctAnswersArrayWest[capitalGame.questionCounter] + ".</p>" + "<br />" + capitalGame.imagesArrayWest[capitalGame.questionCounter];

    $(".main-content").html(capitalGame.gameHTML);

    setTimeout(pause, 5000);
  };

  function incorrect() {
    capitalGame.incorrectChoices++;
    capitalGame.gameHTML = "<p class='text-center wrong-response'>No, sorry. The correct answer is " + capitalGame.correctAnswersArrayWest[capitalGame.questionCounter] + ".</p>" + "<br />" + capitalGame.imagesArrayWest[capitalGame.questionCounter];

    $(".main-content").html(capitalGame.gameHTML);

    setTimeout(pause, 5000);
  };

  $("body").on("click", ".answer", function (event) {

    userChoice = $(this).text();

    if (userChoice === capitalGame.correctAnswersArrayWest[capitalGame.questionCounter]) {

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
    capitalGame.gameHTML = "<p class='text-center no-response'>Time is up!  The correct answer was " + capitalGame.correctAnswersArrayWest[capitalGame.questionCounter] + ".</p>" + "<br />" + capitalGame.imagesArrayWest[capitalGame.questionCounter];

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
      "<p class='text-center main-button'><a class='btn btn-primary btn-lg next-button text-center' target='_blank' href='north.html'>Play The Next Quiz!</a></p>" +
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
    capitalGame.gameHTML = "<p class='text-center clock'>Time Remaining: <span class='timer'>20</span></p>" + "<br />" + "<p class='question-number'>" + capitalGame.questionNumberArrayWest[capitalGame.questionCounter] + "</p>" + "<p class='question'>" + capitalGame.questionsArrayWest[capitalGame.questionCounter] + "</p>" + "<div class='answer-block'>" + "<button class='answer'>" + capitalGame.answerOptionsArrayWest[capitalGame.questionCounter][0] + "</button><br /><button class='answer'>" + capitalGame.answerOptionsArrayWest[capitalGame.questionCounter][1] + "</button><br /><button class='answer'>" + capitalGame.answerOptionsArrayWest[capitalGame.questionCounter][2] + "</button><br /><button class='answer'>" + capitalGame.answerOptionsArrayWest[capitalGame.questionCounter][3] + "</button>" + "</div>";

    $(".main-content").html(capitalGame.gameHTML);
  }

}); // ends JQuery doc ready