let score = 0;

function checkAnswer(button, isCorrect) {

    const question = button.closest(".quiz-question, .question");

    if (!question) return;

    const buttons = question.querySelectorAll("button");
    const feedback = question.querySelector(".answer-feedback, .result");

    // Prevent answering the same question twice
    buttons.forEach(btn => {
        btn.disabled = true;
    });

    if (isCorrect) {

        button.classList.add("correct");

        if (feedback) {
            feedback.textContent = "✅ Correct! Great job.";
            feedback.style.display = "block";
        }

        score++;

    } else {

        button.classList.add("wrong");

        if (feedback) {
            feedback.textContent = "❌ Incorrect!";
            feedback.style.display = "block";
        }

        // Show the correct answer
        buttons.forEach(btn => {
            const onclick = btn.getAttribute("onclick");

            if (onclick && onclick.includes("true")) {
                btn.classList.add("correct");
            }
        });
    }

    // Show completion message after 5 correct answers
    if (score >= 5) {

        const complete = document.querySelector(".quiz-complete");

        if (complete) {
            complete.style.display = "block";
        }
    }
}
