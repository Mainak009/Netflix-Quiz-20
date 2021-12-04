var readlineSync = require('readline-sync');
var chalk = require('chalk');

var questionOne = 'May I have your name?\n';
var point = 0;

var userName = readlineSync.question(chalk.keyword('orange')(questionOne));

if (userName === '') {
  console.log(chalk.magenta('Hello ') + chalk.rgb(0, 255, 255)('Guest') + chalk.magenta(', Welcome to THE:'));
} else if (userName === 'No' | userName === 'no' | userName === 'NO') {
  console.log(chalk.magenta('\nSorry for asking name 😔') + chalk.rgb(0, 255, 255)('\nAnyway, Welcome to THE:'));
} else if (userName === 'Yes' | userName === 'yes' | userName === 'YES') {
  console.log(chalk.magenta('\nI asked Your Name 😒') + chalk.rgb(0, 255, 255)('\nAnyway, Welcome to THE:'));
} else {
  console.log(chalk.magenta('\nHello ') + chalk.rgb(0, 255, 255)(userName) + chalk.magenta(', Welcome to THE:'));
}

console.log(chalk.rgb(255, 0, 0)('                                                      '));
console.log(chalk.rgb(255, 0, 0)('███╗   ██╗███████╗████████╗███████╗██╗     ██╗██╗  ██╗'));
console.log(chalk.rgb(255, 0, 0)('████╗  ██║██╔════╝╚══██╔══╝██╔════╝██║     ██║╚██╗██╔╝'));
console.log(chalk.rgb(255, 0, 0)('██╔██╗ ██║█████╗     ██║   █████╗  ██║     ██║ ╚███╔╝ '));
console.log(chalk.rgb(255, 0, 0)('██║╚██╗██║██╔══╝     ██║   ██╔══╝  ██║     ██║ ██╔██╗ '));
console.log(chalk.rgb(255, 0, 0)('██║ ╚████║███████╗   ██║   ██║     ███████╗██║██╔╝ ██╗'));
console.log(chalk.rgb(255, 0, 0)('╚═╝  ╚═══╝╚══════╝   ╚═╝   ╚═╝     ╚══════╝╚═╝╚═╝  ╚═╝'));
console.log(chalk.rgb(255, 0, 0)('        ██████╗ ██╗   ██╗██╗███████╗                  '));
console.log(chalk.rgb(255, 0, 0)('       ██╔═══██╗██║   ██║██║╚══███╔╝                  '));
console.log(chalk.rgb(255, 0, 0)('       ██║   ██║██║   ██║██║  ███╔╝                   '));
console.log(chalk.rgb(255, 0, 0)('       ██║▄▄ ██║██║   ██║██║ ███╔╝                    '));
console.log(chalk.rgb(255, 0, 0)('       ╚██████╔╝╚██████╔╝██║███████╗                  '));
console.log(chalk.rgb(255, 0, 0)('        ╚══▀▀═╝  ╚═════╝ ╚═╝╚══════╝     v2.0         '));
console.log(chalk.rgb(255, 0, 0)('                                                      '));

function quiz(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green('Great!🤩'));
    point = point+1;
  } else {
    console.log(chalk.red('Wrong!!😥'));
    // point = point-1;
  }
  console.log('Current Score: ' + chalk.keyword('orange')(point));
  console.log(chalk.rgb(0, 255, 255)('\n------------------\n'));
}


var questions = [
  {
    question:"1. In the show 'Locke & Key', What is the name of Kinsey's little brother? \nA: Tyler \nB: Bode \nC: Gabe \nD: Logan \nYour Answer: ", answer:"B"
  },{
    question:"2. In the show 'Chilling Adventures of Sabrina', what is the name of Sabrina's familiar? \nA: Salem \nB: Ambrose \nC: Prudence \nD: Luke \nYour Answer: ", answer:"A"
  },{
    question:"3. In the show 'Lucifer', Who blased the birth of detective 'Chloe Decker'? \nA: Lucifer \nB: God \nC: Amenadiel \nD: Eve \nYour Answer: ", answer: "C"
  },{
    question: "4. According to the show Lucifer, what was the Celestial name of Lucifer ? \nA: Samael \nB: Atlas \nC: Nova \nD: Orion \nYour Answer: ",
    answer: "A"
  },{
    question:"5. What was the Professor's Full name in the show 'Money Heist' aka 'La Casa de Papel'?(not actor name) \nA: Arturo Román \nB: Luis Tamayo \nC: Ángel Rubio \nD: Sergio Marquina \nYour Answer: ", answer:"D"
  },{
    question:"6. In the show 'Locke & Key', what kind of sacrifice required from Locke family to make keys from whispering irons? \nA: sacrifice of their close people \nB: sacrifice of some precious thing \nC: sacrifice of blood \nD: All of these \nYour Answer: ", answer:"C"
  },{
    question:"7. In the show 'Sweet Tooth', where Gus was going to find his mother? \nA: Colorado \nB: California \nC: New York \nD: Texas \nYour Answer: ", answer:"A"
  },{
    question:"8. In which year Netflix was founded? \nA: 1993 \nB: 1997 \nC: 1995 \nD: 1975 \nYour Answer: ", answer:"B"
  },{
    question:"9. In the show 'Fate: The Winx Saga', what kind of fairy Bloom was? \nA: Water Fairy \nB: Mind Fairy \nC: Earth Fairy \nD: Fire Fairy \nYour Answer: ", answer:"D"
  },{
    question: "10. What type of drugs Walter & Jesse were producing in the series of Breaking Bad ? \nA: Cocaine \nB: Marijuana \nC: Crystal Meth \nD: Heroin \nYour Answer: ",
    answer: "C"
  }
];

for(i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  quiz(currentQuestion.question, currentQuestion.answer);
}


console.log(chalk.keyword('purple')('You Scored: ') + chalk.rgb(0, 255, 255)(point) + '\n');

if(point>='7') {
  console.log('Your Netflix Subscription is total WORTH IT!😍');
} else if(point<'7' && point>'4') {
  console.log('You better share your Netflix with someone else🙄');
} else {
  console.log('Your Netflix Subscription is total WASTE of Money!!😑');
}

var highScore = [
  {
    name:'Mainak',
    point: 10
  }
]

console.log(chalk.keyword('gold').underline('\nHighest Scorers:-'));
for(i=0; i<highScore.length; i++) {
  var highScorer = highScore[i];
  console.log(highScorer.name + ', Scored: ' + chalk.keyword('lime')(highScorer.point))
}