var readlineSync= require("readline-sync");

var score=0;
var userName= readlineSync.question("what is your name? ")

console.log("welcome "+userName+" to DO YOY KNOW YASHASVI")

function play(question,answer){
  var userAnswer= readlineSync.question(question);

  if (userAnswer===answer){
    console.log("right!");
    score= score+1;
  }
  else{
    console.log("wrong!")
  }

  
  console.log("---------")

}

var questions=[{
  question:"what i am persuing? ",
  answer: "IT engg"
},{
  question:"where do i live? ",
  answer:"nagpur"
},{
  question:"what do like to eat? ",
  answer:"panipuri"
}]

for (var i=0; i<questions.length;i++){
  var currentQuestion = questions[i]
  play(currentQuestion.question,currentQuestion.answer)
}

console.log("current score is ",score)