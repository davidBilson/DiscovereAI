import HeroContainerOne from './HeroContainerOne'
import HeroContainerTwo from './HeroContainerTwo'
import style from './HeroSection.module.css'

const HeroContainer = () => {
  return (
    <section className={style.heroContainer}>
        <section>
            <HeroContainerOne />
            <HeroContainerTwo />
        </section>
    </section>
  )
}

export default HeroContainer