const checkButton = document.querySelector("#check-button");
const tryAgainButton = document.querySelector("#try-again-button");
const feedback = document.querySelector("#feedback");
const options = document.querySelectorAll(".option");

function clearResultStyles() {
  options.forEach((option) => {
    option.classList.remove("selected-correct", "selected-incorrect", "correct-answer");
  });
  feedback.className = "feedback";
  feedback.textContent = "";
}

checkButton.addEventListener("click", () => {
  clearResultStyles();

  const selectedAnswer = document.querySelector(
    'input[name="mediation-answer"]:checked'
  );

  if (!selectedAnswer) {
    feedback.textContent = "Please select an answer before checking.";
    feedback.classList.add("warning");
    return;
  }

  const selectedOption = selectedAnswer.closest(".option");
  const correctOption = document.querySelector('[data-answer="correct"]');

  if (selectedAnswer.value === "correct") {
    selectedOption.classList.add("selected-correct");
    feedback.innerHTML =
      "<strong>Correct ✓</strong><br>This is the best mediation because it includes all five ideas and uses clear, natural English.";
    feedback.classList.add("success");
  } else {
    selectedOption.classList.add("selected-incorrect");
    correctOption.classList.add("correct-answer");

    const explanation =
      selectedAnswer.value === "incomplete"
        ? "Answer A leaves out water, sleep and breaks."
        : "Answer C is too vague and does not communicate the specific information in the poster.";

    feedback.innerHTML =
      `<strong>Incorrect ✗</strong><br>${explanation}<br><span class="correct-note">The correct answer is B because it selects and communicates every key idea clearly.</span>`;
    feedback.classList.add("error");
  }

  tryAgainButton.hidden = false;
});

tryAgainButton.addEventListener("click", () => {
  document.querySelectorAll('input[name="mediation-answer"]').forEach((input) => {
    input.checked = false;
  });
  clearResultStyles();
  tryAgainButton.hidden = true;
});
