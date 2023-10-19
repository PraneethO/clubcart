"use client"

import Link from "next/link";
import styles from "./page.module.css";
import MultiSelectDropdown from "./MultiSelectDropdown";

export default function Dashboard() {
    return <main className={styles.main}>
        <div className={styles.nav}>
            <Link href="/pages/dashboard" style={{ textDecoration: "none", color: "#044e8b" }}>
                <div className={styles.navLogo}>CLUBCART</div>
            </Link>
            <Link href="/pages/cart" className={styles.link} style={{ marginLeft: "auto" }}>
                <button className={styles.navButton}>
                    <img src="/shopping-cart.png" width={35} height={35} style={{ marginLeft: "auto", marginRight: "auto", transform: "translateX(-2px)" }} />
                    cart
                </button>
            </Link>
            <Link href="/pages/userProfile" className={styles.link} style={{ marginLeft: "1rem" }}>
                <button className={styles.navButton}>
                    <img src="/default-avatar.png" width={35} height={35} style={{ marginLeft: "auto", marginRight: "auto" }} />
                    profile
                </button>
            </Link>
        </div>
        <div className={styles.dashContainer}>

            <div className={styles.dashLabelContainer}>
                <div className={styles.filterLabel}>
                    Filter
                </div>
                <div className={styles.dashLabel}>
                    Shop
                </div>
            </div>

            <div className={styles.dashContentContainer}>
                <div className={styles.filter} style={{ height: "fit-content" }}>

                    <MultiSelectDropdown />

                </div>
                <div className={styles.dashContent} style={{ minHeight: "35rem" }}>
                    <div className={styles.rowContainer}>
                        <div className={styles.clubContainer}>
                            <div className={styles.clubImagesContainer}>
                                <img src="/default-avatar.png"/>
                            </div>
                            <div className={styles.clubName}>
                                PlaceHolder
                            </div>
                            <div className={styles.cost}>
                                $35.00
                            </div>
                            <button className={styles.clubExtra}>
                                <div className={styles.addToCartText}>Add to Cart</div>
                            </button>
                        </div>
                        {/* <div className={styles.clubContainer}>hi</div>
                        <div className={styles.clubContainer}>hi</div>
                        <div className={styles.clubContainer} style={{ marginRight: "0" }}>hi</div> */}
                    </div>
                </div>
            </div>
        </div>
    </main>;
}