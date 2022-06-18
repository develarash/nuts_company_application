import styles from "../styles/Home.module.scss"
import Navbar from "./Navbar"
import {BsArrowRight} from "react-icons/bs"
import bgpic from "../assets/dry-fruits.jpg"
const Home = () => {
  return (
    <div className={styles.home}>
      {/* navbar */}
      <div className={styles.nav}>
        <Navbar/>
        </div>
        {/* BG1 */}
        <div className={styles.bg1}>
          <div className={styles.photo1}>
            <div className={styles.photoContainer}>
              <img src={bgpic} alt="nuts picture" />
            </div>
          </div>
        </div>
        {/* Slogan */}
        <div className={styles.slogan}>
          <h1>{`Feel The Authentic & Original Taste From Us`}</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum nisi dignissimos consectetur quae quidem voluptate quibusdam veniam accusamus repellendus dolorem neque odio et facilis esse nihil nobis, atque eveniet sunt?</p>
          <button className={styles.btn}>
          <span>See more</span>
          <BsArrowRight />
        </button>
        </div> 
    
      </div>
  )
}

export default Home;