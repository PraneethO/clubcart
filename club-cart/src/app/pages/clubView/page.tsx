"use client"

import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

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
            <Link href="/pages/profile" className={styles.link} style={{ marginLeft: "1rem" }}>
                <button className={styles.navButton}>
                    <img src="/default-avatar.png" width={35} height={35} style={{ marginLeft: "auto", marginRight: "auto" }} />
                    profile
                </button>
            </Link>
        </div>

        <div className={styles.contentContainer}>
            <div className={styles.imageContainer}>
                hi
            </div>
            <div className={styles.clubContentContainer}>
                <div className={styles.clubName}>
                    PlaceHolder
                </div>
                <div className={styles.cost}>
                    $35.00
                </div>
                <div className={styles.clubDescriptionTitle}>
                    Description
                </div>
                <div className={styles.clubDescription}>
                    (Add Description)
                </div>
                <div className={styles.clubDescription}>
                    
                </div>
                <button className={styles.clubExtra}>
                    <div className={styles.addToCartText}>Add to Cart</div>
                </button>
            </div>
        </div>
    </main>
}