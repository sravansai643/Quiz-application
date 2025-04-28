const quizData = [
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: 1  // Correct answer is "4" (index 1)
    },
    {
      question: "What is the capital of the USA?",
      options: ["New York", "Washington, D.C.", "Los Angeles", "Chicago"],
      answer: 1  // Correct answer is "Washington, D.C." (index 1)
    },
    {
      question: "Which color is the sky on a clear day?",
      options: ["Red", "Blue", "Green", "Yellow"],
      answer: 1  // Correct answer is "Blue" (index 1)
    },
    {
      question: "How many continents are there?",
      options: ["5", "6", "7", "8"],
      answer: 2  // Correct answer is "7" (index 2)
    }
  ];
  
  let currentQuestion = 0;  // Tracks the current question number
  let score = 0;  // Tracks user's score
  
  // Function to load the current question
  function loadQuestion() {
    const q = quizData[currentQuestion];
    
    // Display the question and options
    document.getElementById('question').textContent = q.question;
    document.getElementById('option0-label').textContent = q.options[0];
    document.getElementById('option1-label').textContent = q.options[1];
    document.getElementById('option2-label').textContent = q.options[2];
    document.getElementById('option3-label').textContent = q.options[3];
  
    // Clear the previous selection
    const options = document.getElementsByName('option');
    options.forEach(option => option.checked = false);
  }
  
  // Function to submit the answer
  function submitAnswer() {
    const options = document.getElementsByName('option');
    let selected = -1;
  
    // Loop through radio buttons to get selected answer
    options.forEach((option) => {
      if (option.checked) {
        selected = parseInt(option.value);
      }
    });
  
    // If no option is selected, alert the user
    if (selected === -1) {
      alert("Please select an answer!");
      return;
    }
  
    // Compare the selected answer with the correct one
    if (selected === quizData[currentQuestion].answer) {
      score++;  // If the answer is correct, increment the score
    }
  
    currentQuestion++;  // Move to the next question
  
    // Check if there are more questions
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      // Hide the options and submit button, show the score
      document.querySelector('.options').classList.add('hidden');
      document.querySelector('button').classList.add('hidden');
      document.getElementById('score').classList.remove('hidden');
      document.getElementById('score').innerHTML = `You scored ${score} out of ${quizData.length}! 🎯`;
    }
  }
  
  // Initialize the first question when the page loads
  window.onload = loadQuestion;
  