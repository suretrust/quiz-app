const sort = (array) => {
  return array.sort((a, b) => {
    if (a < b) return -1
    if (a > b) return 1

    return 0
  })
}

const getAnswers = (correctAnswer, incorrectAnswers) => {
  const answers = [decodeURIComponent(correctAnswer)]

  incorrectAnswers.forEach((ans) => {
    answers.push(decodeURIComponent(ans))
  })

  return sort(answers)
}

export default getAnswers
