import styles from './selectedCategory.module.css'
import { getCategoryArticles } from '../../data/data.js'
import NewsLarge from '../NewsLarge/index.jsx'

const SelectedCategory = ({category, updateArticle1}) => {

  const articles = getCategoryArticles(category)

  const handleClick = (article) => {// receives the article FROM NewsLarge
    updateArticle1(article)
  }

  return (
      <div className={styles.newsCategory}>
        {articles && <NewsLarge article={articles[0]} updateArticle3={handleClick}/>}
        {articles && articles.map((article, index) => index > 0 ? <NewsLarge key={index} article={article} updateArticle3={handleClick}/> : '')}
      </div>
  )
}

export default SelectedCategory