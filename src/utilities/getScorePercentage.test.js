/* global expect, test */
import getScorePercentage from './getScorePercentage'

const score = 10
const questionDetails = { questionId: 15, questionTotal: 20 }

test('returns the percentage score', () => {
  expect(getScorePercentage(score, questionDetails).currScorePercentage).toBe(
    '67%'
  )
  expect(
    getScorePercentage(0, { questionId: 0, questionTotal: 20 })
      .currScorePercentage
  ).toBe('100%')
  expect(getScorePercentage(score, questionDetails).lowestPossibleScore).toBe(
    '50%'
  )
  expect(getScorePercentage(score, questionDetails).maxScore).toBe('75%')
})
