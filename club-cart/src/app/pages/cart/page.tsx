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
            <Link href="/pages/userProfile" className={styles.link} style={{ marginLeft: "1rem" }}>
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
                    Order Totals
                </div>
            </div>

            <div className={styles.cartContentContainer}>
                <div className={styles.itemsContent}>
                    <div className={styles.clubItem}>
                        <div className={styles.clubAttributes}>
                            <div className={styles.clubImage}>
                                hi
                            </div>
                            <div className={styles.attributes}>
                                hi
                            </div>
                        </div>
                        <div className={styles.clubForms}>
                            hi
                        </div>
                    </div>
                </div>
                <div className={styles.orderContent}>
                    hi
                </div>
            </div>
        </div>
    </main>;
}