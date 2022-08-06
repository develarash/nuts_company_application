import styles from "../styles/AboutUs.module.scss";
import bg1 from "../assets/bg1.jpg"
import nuts from "../assets/nuts/bgnuts2.jpg"
const AboutUs = () => {
  return (
    <div className={styles.container}>
        <div className={styles.bg1}>
            <img src={bg1} alt="bg1" />
        </div>
        <div className={styles.nuts}>
            <img src={nuts} alt="" />
            <div className={styles.aboutUs}>
                <h2>About Us</h2>
                <h3>We always Serve You Better</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, dicta aliquam. Dolor pariatur molestiae harum, maiores ducimus aliquid quos necessitatibus error assumenda recusandae quam ullam illo? Fugit beatae provident sed?</p>
            </div>
        </div>
    </div>
  )
}

export default AboutUs