const checkButton = document.querySelector("#check-button");
const feedback = document.querySelector("#feedback");

checkButton.addEventListener("click", () => {
  const selectedAnswer = document.querySelector(
    'input[name="main-ideas"]:checked'
  );

  feedback.className = "feedback";

  if (!selectedAnswer) {
    feedback.textContent = "Please select an option first.";
    feedback.classList.add("warning");
    return;
  }

  if (selectedAnswer.value === "yes") {
    feedback.textContent =
      "Great! You included all the main ideas from the poster.";
    feedback.classList.add("success");
  } else {
    feedback.textContent =
      "Review the poster and try to mention food, water, exercise, sleep and breaks.";
    feedback.classList.add("review");
  }
});
