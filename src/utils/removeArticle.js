const removeUsedArticles = (newsArray, articleInQuestion) => {
  return newsArray.filter(article => !articleInQuestion.includes(article));
}

export default removeUsedArticles