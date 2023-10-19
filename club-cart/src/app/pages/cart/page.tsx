"use client"

import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

export default function Cart() {
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
        
        <div className={styles.cartContainer}>

            <div className={styles.cartLabelContainer}>
                <div className={styles.itemsLabel}>
                    Items
                </div>
                <div className={styles.orderTotalLabel}>
                    Order Total: 
                </div>
            </div>
        </div>
    </main>;
}