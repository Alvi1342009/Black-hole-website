let score = 0;

function checkAnswer(button, isCorrect) {

    // Works with both .question and .quiz-question
    const question = button.closest(".question, .quiz-question");

    if (!question) return;

    // Works with both .result and .answer-feedback
    const result = question.querySelector(".result, .answer-feedback");

    const buttons = question.querySelectorAll("button");

    // Disable all buttons after an answer
    buttons.forEach(btn => {
        btn.disabled = true;
    });

    if (isCorrect) {

        button.classList.add("correct");

        if (result) {
            result.textContent = "✅ Correct! Great job.";
            result.style.display = "block";
        }

        score++;

    } else {

        button.classList.add("wrong");

        if (result) {
            result.textContent = "❌ Incorrect!";
            result.style.display = "block";
        }

        // Highlight the correct answer
        buttons.forEach(btn => {
            if (btn.getAttribute("onclick")?.includes("true")) {
                btn.classList.add("correct");
            }
        });
    }

    // Show completion message
    const quizComplete = document.getElementById("quizComplete");

    if (quizComplete && score >= 3) {
        quizComplete.style.display = "block";
    }
}
