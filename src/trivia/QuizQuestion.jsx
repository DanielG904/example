import { useState, useEffect } from "react";
import Answer from "./Answer.jsx";
import { motion } from "motion/react";

export default function QuizQuestion({ question, onSubmit, index }) {
  const [correct, setCorrect] = useState(null);

  function handleFormSubmit(e) {
    e.preventDefault();
    onSubmit(index, correct);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <form onSubmit={handleFormSubmit}>
        <p>{question.question}</p>
        <div className="flex flex-col gap-3">
          {question.answers.map((answer, index) => (
            <Answer
              id={index}
              name="question"
              onSelect={() => {
                setCorrect(answer.isCorrect);
              }}
            >
              {answer.text}
            </Answer>
          ))}
        </div>
        <input type="submit" className="btn-primary" />
      </form>
    </motion.div>
  );
}
