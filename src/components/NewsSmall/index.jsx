import style from './index.module.css'

const NewsSmall = ({headline, deck, category}) => {
  return (
    <article className={style.newsSmall}>
      <h4 className={style.heading}>{headline}</h4>
      <div className={style.deck}>{deck}</div>
      <div className={style.category}>{category}</div>
    </article>
  )
}

export default NewsSmall