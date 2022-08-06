import styles from "../styles/IntroProducts.module.scss"

const Product=({name, price, description})=>{
    return(
        <div className={styles.productContainer}>
            <div className={styles.product}>
                <span className={styles.name}>{name}</span>
                <span className={styles.price}>{price}</span>
                </div>
                <p>{description}</p>
        </div>
    )
}

const IntroProducts = () => {
  return (
        <div className={styles.container}>
            {/* title */}
            <div className={styles.title}>
                <h1>Our Products in</h1>
                <h2>Available products</h2>
            </div>
            {/* products */}
            <div className={styles.products}>
                <div className={styles.col1}>
                    <Product 
                        name='walnuts'
                        price="25$"
                        description=" Fisher's Freshness Seal Locks in Flavor and Re-Seals Our Signature Stand Up Resealable Bag to Keep Nuts Fresh Even After Opening"
                    />
                       <Product 
                        name='walnuts'
                        price="25$"
                        description=" Fisher's Freshness Seal Locks in Flavor and Re-Seals Our Signature Stand Up Resealable Bag to Keep Nuts Fresh Even After Opening"
                    />
                       <Product 
                        name='walnuts'
                        price="25$"
                        description=" Fisher's Freshness Seal Locks in Flavor and Re-Seals Our Signature Stand Up Resealable Bag to Keep Nuts Fresh Even After Opening"
                    />
                       <Product 
                        name='walnuts'
                        price="25$"
                        description=" Fisher's Freshness Seal Locks in Flavor and Re-Seals Our Signature Stand Up Resealable Bag to Keep Nuts Fresh Even After Opening"
                    />
                </div>
                <div className={styles.col2}>
                    <Product 
                        name='walnuts'
                        price="25$"
                        description=" Fisher's Freshness Seal Locks in Flavor and Re-Seals Our Signature Stand Up Resealable Bag to Keep Nuts Fresh Even After Opening"
                    />
                       <Product 
                        name='walnuts'
                        price="25$"
                        description=" Fisher's Freshness Seal Locks in Flavor and Re-Seals Our Signature Stand Up Resealable Bag to Keep Nuts Fresh Even After Opening"
                    />
                       <Product 
                        name='walnuts'
                        price="25$"
                        description=" Fisher's Freshness Seal Locks in Flavor and Re-Seals Our Signature Stand Up Resealable Bag to Keep Nuts Fresh Even After Opening"
                    />
                       <Product 
                        name='walnuts'
                        price="25$"
                        description=" Fisher's Freshness Seal Locks in Flavor and Re-Seals Our Signature Stand Up Resealable Bag to Keep Nuts Fresh Even After Opening"
                    />
                </div>
            </div>
        </div>

  )
}

export default IntroProducts