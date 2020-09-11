import React, { useState } from 'react'
import questionsData from '../questions.json'
import styles from '../assets/styles/App.module.css'
import ProgressBar from './ProgressBar'
import QuestionCard from './QuestionCard'
import OptionsContainer from './OptionsContainer'
import ScoreBar from './ScoreBar'

const App = () => {
  const [quizHasStarted, setQuizHasStarted] = useState(false)
  const [quizIsCompleted, setQuizIsCompleted] = useState(false)
  const [userAnswer, setUserAnswer] = useState('')
  const [score, setScore] = useState(0)
  const [questionDetails, setQuestionDetails] = useState({
    questionId: 0,
    questionTotal: questionsData.length,
    questions: questionsData,
    correctAnswer: ''
  })

  const handleOptionClick = (e) => {
    e.preventDefault()
    setUserAnswer(e.target.value)
    const { questions, questionId } = questionDetails
    const correctAnswer = decodeURIComponent(
      questions[questionId].correct_answer
    )
    setQuestionDetails({ ...questionDetails, correctAnswer })
  }

  const handleNextQuestionClick = (e) => {
    e.preventDefault()
    if (userAnswer === questionDetails.correctAnswer) {
      setScore((prevScore) => prevScore + 1)
    }

    const nextQuestionId = questionDetails.questionId + 1
    if (questionDetails.questionId + 1 === questionDetails.questionTotal) {
      setQuizIsCompleted(true)
      setQuizHasStarted(false)
    } else {
      setQuestionDetails({ ...questionDetails, questionId: nextQuestionId })
    }
    setUserAnswer('')
  }

  const handleStartQuizClick = () => {
    setQuizHasStarted(true)
  }

  return (
    <div className={styles.app}>
      <>
        {quizHasStarted && !quizIsCompleted && (
          <ProgressBar questionDetails={questionDetails} />
        )}
        <main className={styles.container}>
          {!quizHasStarted && !quizIsCompleted && (
            <div className={styles.landing}>
              <h1>Welcome to Quizio.</h1>
              <h3>
                You have {questionDetails.questionTotal} questions to answer.
                Click on the "Start Quiz" button to begin
              </h3>
              <button
                onClick={handleStartQuizClick}
                className={`${styles.button}`}
              >
                Start Quiz
              </button>
            </div>
          )}
          {quizHasStarted && !quizIsCompleted && (
            <>
              <QuestionCard questionDetails={questionDetails} />
              <OptionsContainer
                userAnswer={userAnswer}
                questionDetails={questionDetails}
                handleNextQuestionClick={handleNextQuestionClick}
                handleOptionClick={handleOptionClick}
              />
            </>
          )}
          {quizIsCompleted && (
            <div className={styles.scoreCard}>
              <h2>You have completed the Quiz, your score:</h2>
              <h3 className={styles.score}>{`${
                (score / questionDetails.questionTotal) * 100
              }%`}</h3>
            </div>
          )}
        </main>
        {quizHasStarted && !quizIsCompleted && (
          <footer className={styles.footer}>
            <ScoreBar score={score} questionDetails={questionDetails} />
          </footer>
        )}
      </>
    </div>
  )
}

export default App
