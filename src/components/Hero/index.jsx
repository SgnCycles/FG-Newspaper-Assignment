import style from './index.module.css'
import NewsLarge from '../NewsLarge'
import NewsMedium from '../NewsMedium'
import NewsSmall from '../NewsSmall'

const Hero = ({mainNewsArticle, recentNews, heroSportNews}) => {
  return (
    <div className={style.heroSection}>
      <div className={style.heroGrid}>
        <div className={style.leftColumn}>
          <div className={style.heroGridHeader}>Recent News</div>
          {recentNews.map((article, index) => <NewsSmall key={index} {...article}/>)}
        </div>
        <div className={style.middleColumn}>
          <NewsLarge {...mainNewsArticle}/>
        </div>
        <div className={style.rightColumn}>
          {heroSportNews.map((article, index) => <NewsMedium key={index} {...article}/>)}
        </div>
      </div>
    </div>
  )
}

export default Hero