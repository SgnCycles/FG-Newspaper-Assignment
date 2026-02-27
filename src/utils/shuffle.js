const randomArticle = (articleArray) => {
  const randomIndex = Math.floor(Math.random() * articleArray.length);
  let article = articleArray[randomIndex];
  articleArray.splice(randomIndex, 1);
  return article;
};

export default randomArticle