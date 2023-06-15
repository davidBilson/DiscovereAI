import React from 'react'
import style from './HeroSection.module.css'

const HeroContainerOne = () => {
  return (
    <section className={style.heroContainerOne}>
        <div 
          data-aos="zoom-in" 
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className={style.webStats}>
          A collection of 55 insane AI tools
        </div>

        <h1>Revolutionize Your Workflows. With DiscovereAI
            <span 
              data-aos="zoom-in"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className={style.headerAnchor}>
              chatGPT
            </span>
        </h1>


        <p className={style.heroOneText}>Streamline Processes and Amplify Productivity: Experience the Next Evolution in Workflows with DiscoveredAI's Revolutionary AI Solutions. A collection of next-gen AI tools. 
          <span 
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className={style.headerAnchor2}>
            MidJourney
          </span>
        </p>
    </section>
  )
}

export default HeroContainerOne