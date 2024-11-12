function checkAnswers() {
    const form = document.getElementById("quizForm");
    const answers = ["certa", "certa", "certa", "certa", "certa"]; // Respostas corretas
    let score = 0;
  
    // Verificar respostas do usuário
    answers.forEach((answer, index) => {
      const question = form[`q${index + 1}`];
      const selectedAnswer = [...question].find(input => input.checked); // Encontrar a resposta selecionada
      if (selectedAnswer && selectedAnswer.value === answer) {
        score++;
      }
    });
  
    // Exibir mensagem e imagem de acordo com o número de acertos
    const resultMessage = document.getElementById("resultMessage");
    const correctImg = document.getElementById("correctImg");
    const wrongImg = document.getElementById("wrongImg");
  
    if (score === answers.length) {
      resultMessage.textContent = "Parabéns, você está bem informado e conseguiu proteger o seu precioso.";
      correctImg.style.display = "block";
      wrongImg.style.display = "none";
    } else {
      resultMessage.textContent = `Você acertou ${score} de ${answers.length} questões. Foi quase, fique atento às informações e proteja o seu precioso.`;
      correctImg.style.display = "none";
      wrongImg.style.display = "block";
    }
  }
  