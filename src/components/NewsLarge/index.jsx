import style from './index.module.css'
import { getImageUrl } from '../../utils/functions.js'

const NewsLarge = ({image, headline, deck, category}) => {

  return (
    <article className={style.newsLarge}>
      <div className={style.image}>
       <img src={getImageUrl(image)} height="100px" width="auto"/>
      </div>
      <h4 className={style.heading}>{headline}</h4>
      <div className={style.deck}>{deck}</div>
      <div className={style.category}>{category}</div>
    </article>
  )
}

export default NewsLarge