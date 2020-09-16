import React from 'react'
import PropTypes from 'prop-types'
import getAnswers from '../utilities/getAnswers'
import styles from '../assets/styles/OptionsContainer.module.css'

const OptionsContainer = (props) => {
  const {
    userAnswer,
    handleNextQuestionClick,
    handleOptionClick,
    questionDetails
  } = props
  const {
    questionId,
    questionTotal,
    questions,
    correctAnswer
  } = questionDetails

  return (
    <div className={styles.optionsContainer}>
      {getAnswers(
        questions[questionId].correct_answer,
        questions[questionId].incorrect_answers
      ).map((answer) => (
        <button
          key={answer}
          value={answer}
          disabled={!!userAnswer}
          onClick={handleOptionClick}
          className={`${styles.option} ${
            answer === correctAnswer && styles.correct
          } ${
            userAnswer !== correctAnswer &&
            answer === userAnswer &&
            styles.wrong
          }`}
        >
          {answer}
        </button>
      ))}
      {!!userAnswer && (
        <div className={styles.continueBox}>
          <h1>{userAnswer === correctAnswer ? 'Correct' : ' Sorry'}!</h1>
          <button onClick={handleNextQuestionClick} className={styles.button}>
            {questionId + 1 === questionTotal
              ? 'Check Final Scores'
              : 'Next Question'}
          </button>
        </div>
      )}
    </div>
  )
}

OptionsContainer.propTypes = {
  userAnswer: PropTypes.string.isRequired,
  questionDetails: PropTypes.shape({
    questionTotal: PropTypes.number.isRequired,
    questionId: PropTypes.number.isRequired,
    questions: PropTypes.array.isRequired
  }).isRequired,
  handleNextQuestionClick: PropTypes.func.isRequired,
  handleOptionClick: PropTypes.func.isRequired
}

export default OptionsContainer
