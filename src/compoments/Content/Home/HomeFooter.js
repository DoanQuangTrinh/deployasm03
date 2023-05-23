import React from "react";
import styles from './HomeFooter.module.css'

const HomeFooter = () => {
    return(
        <div className={styles.homeFooter}>
            <div className={styles.homeFooterFree}>
                <div>
                    <h6 className={styles.titleFreeOffer}>FREE SHIPPING</h6>
                    <p className={styles.freeShipping}>Free shipping wollwide</p>
                </div>
                <div>
                    <h6 className={styles.titleFreeOffer}>27 X 7 SERVICE</h6>
                    <p className={styles.freeShipping}>Free shipping wollwide</p>
                </div>
                <div>
                    <h6 className={styles.titleFreeOffer}>FESTIVAL OFFER</h6>
                    <p className={styles.freeShipping}>Free shipping wollwide</p>
                </div>
            </div>
            <div className={styles.footerNisinisi}>
                <div>
                    <h6 className={styles.titleFreeOffer}>LET'S BE FRIENDS!</h6>
                    <p className={styles.freeShipping}>Nisi nisi tempar consetquat laboris nisi.</p>
                </div>
                <div>
                    <form>
                        <input className={styles.inputHomeFooter} value={'Enter your email address'} />
                        <button className={styles.buttonHomeFooter}>Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default HomeFooter;