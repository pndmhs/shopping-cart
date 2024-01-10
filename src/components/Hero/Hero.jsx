import styles from './Hero.module.css'
import HeroImage from '../../assets/hero-image.svg?react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles['hero-text']}>
        <h1>Everything you need, made easy.</h1>
        <p>Simple Shop offers a wide variety of goods, from everyday essentials to exciting electronics, all at competitive prices</p>
        <Link to='shop'>
          <button>SHOP NOW</button>
        </Link>
      </div>
      <div className={styles['hero-image']}>
        <HeroImage className={styles['hero-svg']}/>
      </div>
    </div>
  )
}

export default Hero