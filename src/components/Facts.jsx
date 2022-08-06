import styles from "../styles/facts.module.scss";
const Facts = () => {
  return (
    <div className={styles.container}>
        <div className={styles.inner}>
            <div className={styles.facts}>
                <div className={styles.fact}>
                    <h2>20</h2>
                    <h3>Services</h3>
                </div>
                <div className={styles.fact}>
                    <h2>6</h2>
                    <h3>Years Exprience</h3>
                </div>
                <div className={styles.fact}>
                    <h2>20+</h2>
                    <h3>Products</h3>
                </div>
                <div className={styles.fact}>
                    <h2>250+</h2>
                    <h3>happy Customers</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Facts