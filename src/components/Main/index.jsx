import styles from './index.module.css';
import Hero from '../Hero';
import Category from '../Category';

const Main = ({articles, mainNewsArticle, recentNews, heroSportNews, newsCategories, categorySection}) => {

  return(
    <div className={styles.mainSection}>
      <Hero newsArticles={articles} mainNewsArticle={mainNewsArticle} recentNews={recentNews} heroSportNews={heroSportNews}/>
      {newsCategories.map((newsCategory, index) => {
        const newsSection = categorySection.find(section => section.category === newsCategory.toLowerCase());

        if (!newsSection || newsSection.articles.length === 0) return null;
          return (
            <Category key={index} category={newsCategory} articles={newsSection.articles}/>
          )   
        })}
    </div>
  )
}

export default Main