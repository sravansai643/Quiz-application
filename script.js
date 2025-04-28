const quizData = [
    {
      question: "What is the capital of India?",
      options: ["Mumbai", "Delhi", "Chennai", "Kolkata"],
      answer: 1
    },
    {
      question: "Which language is used for web apps?",
      options: ["Python", "Java", "JavaScript", "C++"],
      answer: 2
    },
    {
      question: "Who wrote 'Harry Potter'?",
      options: ["J.R.R Tolkien", "J.K. Rowling", "Stephen King", "George R.R. Martin"],
      answer: 1
    },
    {
      question: "What does CSS stand for?",
      options: ["Colorful Style Sheets", "Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets"],
      answer: 2
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  function loadQuestion() {
    const q = quizData[currentQuestion];
    document.getElementById('question').textContent = q.question;
    document.getElementById('option0').textContent = q.options[0];
    document.getElementById('option1').textContent = q.options[1];
    document.getElementById('option2').textContent = q.options[2];
    document.getElementById('option3').textContent = q.options[3];
  }
  
  function submitAnswer() {
    const options = document.getElementsByName('option');
    let selected = -1;
  
    options.forEach((option) => {
      if (option.checked) {
        selected = parseInt(option.value);
      }
    });
  
    if (selected === -1) {
      alert("Please select an answer!");
      return;
    }
  
    if (selected === quizData[currentQuestion].answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      document.querySelector('.options').classList.add('hidden');
      document.querySelector('button').classList.add('hidden');
      document.getElementById('score').classList.remove('hidden');
      document.getElementById('score').innerHTML = `You scored ${score} out of ${quizData.length}! 🎯`;
    }
  }
  
  window.onload = loadQuestion;
  