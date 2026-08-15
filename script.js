let score = 0;

function checkAnswer(button, isCorrect) {
  
  let question = button.closest(".question");
  let buttons = question.querySelectorAll("button");
  let result = question.querySelector(".result");
  
  buttons.forEach(btn => btn.disabled = true);
  
  if (isCorrect) {
    button.classList.add("correct");
    result.innerHTML = "✅ Correct!";
    score++;
  } else {
    button.classList.add("wrong");
    result.innerHTML = "❌ Incorrect!";
  }
  
  result.style.display = "block";
  
  if (score === 3) {
    document.getElementById("quizComplete").style.display = "block";
  }
}
function checkAnswer(button,isCorrect){

let card = button.parentElement;

let buttons = card.querySelectorAll("button");

buttons.forEach(btn=>btn.disabled=true);

let result = card.querySelector(".result");

if(isCorrect){

button.classList.add("correct");

result.innerHTML="✅ Correct!";

}else{

button.classList.add("wrong");

result.innerHTML="❌ Incorrect!";

buttons.forEach(btn=>{

if(btn.getAttribute("onclick").includes("true")){

btn.classList.add("correct");

}

});

}

}
/* ================= CHAPTER 3 QUIZ ================= */

function checkAnswer(button, isCorrect) {

    const question = button.closest(".quiz-question");

    const buttons = question.querySelectorAll("button");

    const feedback = question.querySelector(".answer-feedback");

    if (isCorrect) {

        button.classList.add("correct");

        feedback.textContent = "✅ Correct! Great job.";

        feedback.style.color = "#4ade80";

        buttons.forEach(function(btn) {
            btn.disabled = true;
        });

    } else {

        button.classList.add("wrong");

        feedback.textContent = "❌ Not quite. Try again!";

        feedback.style.color = "#f87171";

    }

}