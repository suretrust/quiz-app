import React from 'react'
import PropTypes from 'prop-types'
import styles from '../assets/styles/ProgressBar.module.css'
import getProgressWidth from '../utilities/getProgressWidth'

const ProgressBar = ({ questionDetails }) => {
  const { questionId, questionTotal } = questionDetails

  return (
    <div className={styles.progessBar}>
      <div
        className={styles.currentProgess}
        style={{
          width: getProgressWidth(questionId + 1, questionTotal)
        }}
      />
      <div />
    </div>
  )
}

ProgressBar.propType = {
  questionDetails: PropTypes.shape({
    questionTotal: PropTypes.number.isRequired,
    questionId: PropTypes.number.isRequired
  }).isRequired
}

export default ProgressBar
