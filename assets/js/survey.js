
const questionContainer = document.getElementById('questionContainer');
const questions = [...questionContainer.getElementsByClassName('question')];
let currentQuestionIndex = 0;

function showQuestion(index) {
  questions.forEach((question, i) => {
    if (i === index) {
      question.classList.add('active');
    } else {
      question.classList.remove('active');
    }
  });
}

function nextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    showQuestion(currentQuestionIndex);
  }
}

function previousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showQuestion(currentQuestionIndex);
  }
}

function submitSurvey() {
    // Perform any necessary actions when the survey is submitted
    alert('Survey submitted!');
    window.location.href = 'activities.html'; // Redirect to another page
  }

const nextButtons = document.getElementsByClassName('nextBtn');
for (let i = 0; i < nextButtons.length; i++) {
  nextButtons[i].addEventListener('click', nextQuestion);
}

const prevButtons = document.getElementsByClassName('prevBtn');
for (let i = 0; i < prevButtons.length; i++) {
  prevButtons[i].addEventListener('click', previousQuestion);
}

document.getElementById('submitBtn').addEventListener('click', submitSurvey);

// Show the first question initially
showQuestion(currentQuestionIndex);