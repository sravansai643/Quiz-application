const quizData = [
    {
      question: "What is the capital of France?",   
      options: ["Berlin", "Madrid", "Paris", "Rome"], 
      answer: 2 
    },
    {
      question: "Which planet is known as the Red Planet?",  
      options: ["Earth", "Mars", "Jupiter", "Saturn"],  
      answer: 1  
    },
    {
      question: "What is the largest animal in the world?",  
      options: ["Elephant", "Shark", "Blue Whale", "Giraffe"],  
      answer: 2  
    },
    {
      question: "Which is the longest river in the world?",  
      options: ["Amazon", "Nile", "Yangtze", "Mississippi"],  
      answer: 1  
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
  