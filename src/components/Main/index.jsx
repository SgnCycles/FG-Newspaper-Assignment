import styles from './main.module.css';
import Hero from '../Hero';
import Category from '../Category';

const Main = ({articles, mainNewsArticle, recentNews, heroSportNews, newsCategories, categorySection, updateArticle1}) => {

  return(
    <div className={styles.mainSection}>
      <Hero mainNewsArticle={mainNewsArticle} recentNews={recentNews} heroSportNews={heroSportNews} updateArticle2={updateArticle1}/>
      {newsCategories.map((newsCategory, index) => {
        const newsSection = categorySection.find(section => section.category === newsCategory.toLowerCase());

        if (!newsSection || newsSection.articles.length === 0) return null;
          return (
            <Category key={index} category={newsCategory} articles={newsSection.articles} updateArticle2={updateArticle1}/>
          )   
        })}
    </div>
  )
}

export default Main