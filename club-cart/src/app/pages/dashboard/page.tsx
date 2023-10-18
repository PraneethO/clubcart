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
                    <img src="/shopping-cart.png" width={35} height={35} style={{ marginLeft: "auto", marginRight: "auto", transform: "translateX(-2px)"}} />
                    cart
                </button>
            </Link>
            <Link href="/pages/profile" className={styles.link} style={{ marginLeft: "1rem" }}>
                <button className={styles.navButton}>
                    <img src="/default-avatar.png" width={35} height={35} style={{ marginLeft: "auto", marginRight: "auto"}} />
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
                <div className={styles.filter} style={{height: "10rem"}}>

                    <MultiSelectDropdown/>

                </div>
                <div className={styles.dashContent} style={{height: "100rem"}}>
                    GG
                </div>
            </div>
        </div>
    </main>;
}