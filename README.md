# TriviaGame
TRIVIA GAME

Tools: HTML5, CSS3, Bootstrap4, JavaScript, jQuery, Google Fonts

Responsiveness:  Game is completely responsive and can be played on a desktop, laptop, tablet/pad or smartphone

Summary: This is a U.S. State Capitals trivia game that consists of a home page with links to four regions of the U.S. with a subset of U.S. states representing that region. The game has a countdown timer where the user has to select their answer within a matter of seconds, and provides a summary score at the end of each round, or region played. The player can receive one of three messages during play: either time is up, their response is correct, or their response is incorrect.

Problem: The task was to create a trivia game with a timer using JavaScript for the logic and jQuery to manipulate the HTML. The goal was to display one question per page, have the time count down, and show a results screen informing the user of the outcome, and then automatically displaying the next question for the user without any user input, until the final scoreboard is reached.

Solution: Create a large object with multiple properties, set up the page for player interactions including start button and ability to select an answer to the question, set up a timer for the questions, and conclude each section with a final scoreboard that shows the total score. Then give the player the option to replay that same game again, to play the next regional game in the series, or to return to the home page. Each answer page following the user response will display an image of that state’s capitol building and the correct response to the question.

My Technical Approach: I divided this project into three primary sections. HTML: I created an index (home) page where the user can begin to play. This page provides the option to select from any one of four U.S. regions to begin play. A few simple, basic rules are offered on the home page to get the player started. The regions were simply divided up in such a way that each of the four had about the same number of states, ranging from 11 to 14 in each. I then created four region pages (north, south, central and west) that were very similar except for different states. Each question has the countdown timer from 20 seconds, the question number out of the total question, the question itself, and the four options to select from. Once either an option is selected or the timer is up, the results page for that state shows with the correct answer and an image of the state capitol building. After briefly displaying the answer, the next question loads until the final question at which point the scoreboard loads. The scoreboard shows number correct, incorrect and not answered (because time ran out). Then options to continue playing are offered.

CSS: Because this was a trivia/quiz game about U.S. state capital cities, I wanted to give the page a U.S. patriotic feel. There is a red-white-blue theme throughout, and I utilized Alex Brush Google font to approximate a U.S. Constitution script (without having to purchase a more authentic font).

JavaScript/jQuery: Set document.ready as usual for jQuery. Created a large object to contain many properties. Within this object, I included all the various choice options, nested several arrays that included the question numbers, questions, possible responses, correct responses and images, ensuring that each item in the various arrays rested at the appropriate index within the array. Finally the clock and counter were included in the object. Start screen was set so that once the user clicked the begin game button, the first question was displayed and the timer started the 20 seconds countdown. A function was set to run all questions from the array, and get the player to the end screen. Functions tracking correct, incorrect and timeout were created, and the results of the calculated scores displayed on the end screen. A game reset was added at the end as well as the option to move on to the next set of questions.

Licenses, Credits & Attributions: The banner image of the U.S. flag and capitol was purchased as a license from iStockPhoto in June 2018. All map images on this page were provided free from One Stop Map: https://www.onestopmap.com/.

Link to Deployed Game: https://dannysprouse.github.io/Trivia-Game/

Copyright ©2018 Danny S. Sprouse All Rights Reserved