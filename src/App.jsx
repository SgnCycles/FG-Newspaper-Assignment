import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import { articles } from './data/data.js'
import randomArticle from './utils/shuffle.js'
import removeUsedArticles from './utils/removeArticle.js'

function App() {
  
  const newsCategories = ['Sport', 'Sweden', 'Crime', 'World', 'Entertainment'];

  let newsArray = Array.from(articles);
  const mainArticle = randomArticle(newsArray);

  const noSportsArticles = newsArray.filter(article => article.category !== 'sport');

  const recentNews = [randomArticle(noSportsArticles), randomArticle(noSportsArticles), randomArticle(noSportsArticles), randomArticle(noSportsArticles)];

  newsArray = removeUsedArticles(newsArray, recentNews);
  
  const sportsArticles = newsArray.filter(article => article.category === 'sport');
  const heroSportNews = [randomArticle(sportsArticles), randomArticle(sportsArticles)];

  newsArray = removeUsedArticles(newsArray, heroSportNews);

  const normalizedCategories = newsCategories.map(category => category.toLowerCase());
  
  const categorySection = normalizedCategories.map(category => {
    const categoryArticles = newsArray.filter(article => article.category === category);
    const categorySectionArticles = categoryArticles.slice(0, 3);
    newsArray = removeUsedArticles(newsArray, categorySectionArticles)
    return {category, articles: categorySectionArticles};
  });

  const breakingNewsSection = newsArray.splice(0, 3);

  newsArray = removeUsedArticles(newsArray, breakingNewsSection);

  return (
    <>
    <Header articles={newsArray} breakingNewsSection={breakingNewsSection}/>
    <Main articles={newsArray} mainNewsArticle={mainArticle} recentNews={recentNews} heroSportNews={heroSportNews}newsCategories={newsCategories} categorySection={categorySection}/>
    <Footer />
    </>
  )
}

export default App