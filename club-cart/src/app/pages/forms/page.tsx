"use client"

import Link from "next/link";
import styles from "./page.module.css";

export default function Forms() {
    return <main className={styles.main}>
        <div className={styles.nav}>
            <Link href="/pages/shop" style={{ textDecoration: "none", color: "#044e8b" }}>
                <div className={styles.navLogo}>CLUBCART</div>
            </Link>
            <Link href="/pages/shop" className={styles.link} style={{ marginLeft: "auto" }}>
                <button className={styles.navButton}>
                    <img src="/home-icon.png" width={35} height={35} style={{ marginLeft: "auto", marginRight: "auto" }} />
                    Shop
                </button>
            </Link>
            <Link href="/pages/cart" className={styles.link} style={{ marginLeft: "1rem" }}>
                <button className={styles.navButton}>
                    <img src="/shopping-cart.png" width={35} height={35} style={{ marginLeft: "auto", marginRight: "auto", transform: "translateX(-2px)" }} />
                    cart
                </button>
            </Link>

            <Link href="/pages/user-profile" className={styles.link} style={{ marginLeft: "1rem" }}>
                <button className={styles.navButton}>
                    <img src="/default-avatar.png" width={35} height={35} style={{ marginLeft: "auto", marginRight: "auto" }} />
                    profile
                </button>
            </Link>
        </div>

        <div className={styles.dashContainer}>

            <div className={styles.dashLabelContainer}>
                <div className={styles.greetingLabel}>
                    Forms to Complete
                </div>
                <div className={styles.dashLabel}>
                    External Forms
                </div>
            </div>
        </div>

        <div className={styles.dashContainerContent}>
            <div className={styles.right}>
                <div className={styles.actionItemsContainer}>
                    <Link href="" style={{ color: "#044e8b" }}>
                        <div className={styles.actionItem}>DECA Sign Up Form</div>
                    </Link>
                    <Link href="" style={{ color: "#044e8b" }}>
                        <div className={styles.actionItem}>Speech and Debate Registration Form</div>
                    </Link>
                    <Link href="" style={{ color: "#044e8b" }}>
                        <div className={styles.actionItem}>Forms</div>
                    </Link>
                </div>
            </div>

        </div>


    </main>
}