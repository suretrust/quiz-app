import React from 'react'
import PropTypes from 'prop-types'
import styles from '../assets/styles/ScoreBar.module.css'
import getScorePercentage from '../utilities/getScorePercentage'

const ScoreBar = ({ score, questionDetails }) => {
  return (
    <div className={styles.scoreBox}>
      <div className={styles.scoreBarText}>
        <h3>
          Score:{' '}
          {getScorePercentage(score, questionDetails).currScorePercentage}
        </h3>
        <h3>
          Max Score: {getScorePercentage(score, questionDetails).maxScore}
        </h3>
      </div>
      <div className={styles.scoreBar}>
        <span
          className={styles.scoreCount}
          style={{
            width: getScorePercentage(score, questionDetails)
              .lowestPossibleScore,
            background: 'green',
            zIndex: 300
          }}
        />
        <span
          className={styles.scoreCount}
          style={{
            width: getScorePercentage(score, questionDetails)
              .currScorePercentage,
            background: 'orange',
            zIndex: 20
          }}
        />
        <span
          className={styles.scoreCount}
          style={{
            width: getScorePercentage(score, questionDetails).maxScore,
            background: 'yellow',
            zIndex: 1
          }}
        />
      </div>
    </div>
  )
}

ScoreBar.propTypes = {
  questionDetails: PropTypes.shape({
    questionTotal: PropTypes.number.isRequired,
    questionId: PropTypes.number.isRequired,
    questions: PropTypes.array.isRequired
  }).isRequired,
  score: PropTypes.number.isRequired
}

export default ScoreBar
