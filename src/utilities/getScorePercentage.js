const getScorePercentage = (score, questionDetails) => {
  const { questionId, questionTotal } = questionDetails;

  const lowestPossibleScore = `${Math.ceil((score * 100) / questionTotal)}%`;
  const currScorePercentage = `${
    isFinite(Math.ceil((score / questionId) * 100))
      ? Math.ceil((score / questionId) * 100)
      : 0
  }%`;
  const maxScore = `${Math.ceil(
    ((score + questionTotal - questionId) / questionTotal) * 100
  )}%`;

  return { currScorePercentage, lowestPossibleScore, maxScore };
};

export default getScorePercentage;
