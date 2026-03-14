import style from './hero.module.css'
import NewsLarge from '../NewsLarge'
import NewsMedium from '../NewsMedium'
import NewsSmall from '../NewsSmall'

const Hero = ({mainNewsArticle, recentNews, heroSportNews, updateArticle2}) => {
  return (
    <div className={style.heroSection}>
      <div className={style.heroGrid}>
        <div className={style.leftColumn}>
          <div className={style.heroGridHeader}>Recent News</div>
          {recentNews.map((article, index) => <NewsSmall key={index} article={article} updateArticle3={updateArticle2}/>)}
        </div>
        <div className={style.middleColumn}>
          <NewsLarge article={mainNewsArticle} updateArticle3={updateArticle2}/>
        </div>
        <div className={style.rightColumn}>
          {heroSportNews.map((article, index) => <NewsMedium key={index} article={article} updateArticle3={updateArticle2} />)}
        </div>
      </div>
    </div>
  )
}

export default Hero