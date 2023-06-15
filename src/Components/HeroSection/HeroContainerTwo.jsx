import ToolContainer from '../AllToolsContainer/ToolContainer'
import Categories from '../CategoriesTab/Categories'
import Search from '../Search/Search'
import style from './HeroSection.module.css'

const HeroContainerTwo = () => {
  return (
    <section className={style.heroContainerTwo}>
      <div>
        <Search />
      </div>
      <section>
        <Categories styleCategory={`${style.styleCategory}`} />
        <ToolContainer />
      </section>
    </section>
  )
}

export default HeroContainerTwo