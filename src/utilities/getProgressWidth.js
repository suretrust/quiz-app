const getProgressWidth = (questionId, questionTotal) => {
  if (questionId === 0) return '0%'
  if (questionId > questionTotal) return '100%'
  return `${Math.ceil((questionId / questionTotal) * 100)}%`
}

export default getProgressWidth
