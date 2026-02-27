import style from './index.module.css'
import { getImageUrl } from '../../utils/functions.js'

const NewsMedium = ({image, headline, deck, className}) => {
  return (
    <article className={`${style.newsMedium} ${className || ''}`}>
      <div className={style.image}>
        <img src={getImageUrl(image)} height="100px" width="auto"/>
      </div>
      <h4 className={style.heading}>{headline}</h4>
      <div className={style.deck}>{deck}</div>
    </article>
  )
}

export default NewsMedium