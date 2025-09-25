export function formatQuestion(apiQuestion) {
  const questionText = decode(apiQuestion.question);
  const answers = apiQuestion.incorrect_answers.map((a) => ({
    text: decode(a),
    isCorrect: false,
  }));
  answers.push({
    text: decode(apiQuestion.correct_answer),
    isCorrect: true,
  });

  return {
    question: questionText,
    answers: shuffle(answers),
    userResponse: null,
  };
}

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function decode(text) {
  const parser = new DOMParser();
  const decoded = parser.parseFromString(text, 'text/html').body.textContent;
  return decoded;
}
