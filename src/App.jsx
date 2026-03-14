import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import SelectedArticle from './components/SelectedArticle'
import SelectedCategory from './components/SelectedCategory'
import { newsArray, mainArticle, recentNews, heroSportNews, newsCategories, categorySection, breakingNewsSection} from './data/data.js'

function App() {

  const [selectedArticle, setSelectedArticle] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState(null)

  return (
    <>
    <Header articles={newsArray} breakingNewsSection={breakingNewsSection} selectedCategory={selectedCategory} updateCategory1={setSelectedCategory} updateArticle1={setSelectedArticle}/>

    {!selectedArticle && !selectedCategory &&
    <Main articles={newsArray} mainNewsArticle={mainArticle} recentNews={recentNews} heroSportNews={heroSportNews} newsCategories={newsCategories} categorySection={categorySection} updateArticle1={setSelectedArticle}/>
    }

    {selectedArticle && <SelectedArticle article={selectedArticle} updateArticle1={setSelectedArticle}/>}
    
    {selectedCategory && !selectedArticle && <SelectedCategory category={selectedCategory} updateCategory1={setSelectedCategory} article={selectedArticle} updateArticle1={setSelectedArticle}/>}
    <Footer />
    </>
  )
}

export default App