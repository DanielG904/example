import { formatQuestion } from "./trivia/utils.js";
import { useState, useEffect } from "react";
import QuizQuestion from "./trivia/QuizQuestion.jsx";
import Results from "./trivia/Results.jsx";
import { motion } from "motion/react";

export default function TriviaPage() {
  const [questions, setQuestions] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [index, setIndex] = useState(0);
  const [step, setStep] = useState("questions");

  let totalQuestions = questions.length;
  let questionsCorrect = questions.filter((q) => q.userResponse).length;

  function completeQuestion(index, isCorrect) {
    const updatedQuestions = questions.map((q, i) => {
      if (index === i) return { ...q, userResponse: isCorrect };
      return q;
    });
    setQuestions(updatedQuestions);
  }

  useEffect(() => {
    async function getQuestions() {
      let questions;
      try {
        const result = await fetch(
          "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy"
        );
        const data = await result.json();
        if (!result.ok) {
          throw new Error(`HTTP error! Status: ${result.status}`);
        }
        questions = data.results;
        setQuestions(questions.map(formatQuestion));
      } catch (e) {
        setFetchError(e.message);
      }
    }

    getQuestions();
  }, []);

  if (fetchError) return <p>Error fetching: {fetchError}</p>;

  if (questions.length === 0)
    return (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        Loading...
      </motion.div>
    );

  function handleSubmitQuestion(i, isCorrect) {
    completeQuestion(i, isCorrect);
    if (index === questions.length - 1) {
      setStep("results");
      setIndex(0); //in case we want to reset the quiz later
    } else {
      setIndex(index + 1);
    }
  }

  if (step === "questions") {
    return (
      <QuizQuestion
        key={index}
        question={questions[index]}
        onSubmit={handleSubmitQuestion}
        index={index}
      />
    );
  }

  if (step === "results") {
    return <Results result={questionsCorrect} total={totalQuestions} />;
  }
}
