"use client"

import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

export default function Cart() {
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
                                <img src="/default-avatar.png" />
                            </div>
                            <div className={styles.attributes}>
                                <div className={styles.attributesContainer}>
                                    <div className={styles.attributesClubName}>Club Name
                                        <div className={styles.attributesClubPrice}>$45.00</div></div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.itemBorder}></div>
                        <div className={styles.clubForms}>
                            <div className={styles.clubFormsText}>
                                - Registration Form
                            </div>
                            <div className={styles.clubFormsText}>
                                - Health Form
                            </div>
                            <div className={styles.clubFormsText} style={{ paddingBottom: "0" }}>
                                - Registration Form
                            </div>
                        </div>
                    </div>

                    <div className={styles.clubItem}>
                        <div className={styles.clubAttributes}>
                            <div className={styles.clubImage}>
                                <img src="/default-avatar.png" />
                            </div>
                            <div className={styles.attributes}>
                                <div className={styles.attributesContainer}>
                                    <div className={styles.attributesClubName}>Club Name
                                        <div className={styles.attributesClubPrice}>$45.00</div></div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.itemBorder}></div>
                        <div className={styles.clubForms}>
                            <div className={styles.clubFormsText}>
                                - Registration Form
                            </div>
                            <div className={styles.clubFormsText}>
                                - Health Form
                            </div>
                            <div className={styles.clubFormsText} style={{ paddingBottom: "0" }}>
                                - Registration Form
                            </div>
                        </div>
                    </div>
                    
                </div>

                <div className={styles.everythingOrderContainer}>
                    <div className={styles.orderContent}>
                        <div className={styles.feeContainer}>
                            <div className={styles.feeText}>
                                Speech and Debate
                            </div>
                            <div className={styles.feePrice}>
                                $90.50
                            </div>
                        </div>

                        <div className={styles.feeContainer}>
                            <div className={styles.feeText}>
                                Processing Fee
                            </div>
                            <div className={styles.feePrice}>
                                $4.95
                            </div>
                        </div>
                        <div className={styles.orderBorder}></div>

                        <div className={styles.feeContainer}>
                            <div className={styles.feeText}>
                                Total
                            </div>
                            <div className={styles.feePrice}>
                                $94.95
                            </div>
                        </div>
                    </div>
                    <div className={styles.payNowButtonContainer}>
                        <Link href="/pages/payment" style={{ textDecoration: "none" }}>
                            <div className={styles.payNowButton}>
                                Pay Now
                            </div>
                        </Link>
                        {/* <div className={styles.payNowText}>
                            OR
                        </div>
                        <Link href="/pages/forms" style={{ textDecoration: "none" }}>
                            <div className={styles.payLaterButton}>
                                Continue To Forms
                            </div>
                        </Link> */}
                    </div>

                    <div className={styles.itemsLabel} style={{ width: "100%", marginLeft: "0", marginRight: "0", marginTop: "5rem"}}>
                        Forms to Complete
                    </div>
                    <div className={styles.formsContainer}>
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
        </div>
    </main>;
}