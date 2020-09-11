import React from 'react'
import PropTypes from 'prop-types'
import { FaStar, FaRegStar } from 'react-icons/fa'
import styles from '../assets/styles/QuestionCard.module.css'
import DIFFICULTY from '../utilities/difficulty'

const QuestionCard = ({ questionDetails }) => {
  const { questionId, questionTotal, questions } = questionDetails
  const difficulty = DIFFICULTY[questions[questionId].difficulty]

  return (
    <>
      <header className={styles.header}>
        <h2 className={styles.h2}>
          Question {questionId + 1} of {questionTotal}
        </h2>
        <small>{decodeURIComponent(questions[questionId].category)}</small>
        <div className={styles.ratings}>
          {Array.from(Array(difficulty).keys()).map((i) => (
            <FaStar key={i} />
          ))}
          {Array.from(Array(5 - difficulty).keys()).map((i) => (
            <FaRegStar key={i} />
          ))}
        </div>
      </header>
      <h4 className={styles.question}>
        {decodeURIComponent(questions[questionId].question)}
      </h4>
    </>
  )
}

QuestionCard.propTypes = {
  questionDetails: PropTypes.shape({
    questionTotal: PropTypes.number.isRequired,
    questionId: PropTypes.number.isRequired,
    questions: PropTypes.array.isRequired
  }).isRequired
}

export default QuestionCard
