import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

export default function Payment() {
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

        <div className={styles.paymentContainer}>
            <div className={styles.paymentLabelsContainer}>
                <div className={styles.paymentProcessContainer}>
                    <div className={styles.headerLabels}>
                        Contact Information
                        <div className={styles.infoContainer}>
                            <div className={styles.infoRow}>
                                <div className={styles.descriptionContainer}>
                                    <div className={styles.firstNameDescription}>First Name</div>
                                    <div className={styles.lastNameDescription}>Last Name</div>
                                </div>
                                <div className={styles.nameInputContainer}>
                                    <input className={styles.nameInput} placeholder="Enter Your First Name" />
                                    <input className={styles.nameInput} placeholder="Enter Your Last Name" />
                                </div>
                            </div>
                            <div className={styles.infoRow}>
                                <div className={styles.descriptionContainer}>
                                    <div className={styles.description}>Email</div>
                                </div>
                                <input className={styles.infoInput} placeholder="Enter Your Email"></input>
                            </div>
                            <button className={styles.continueButton}>Continue</button>
                        </div>
                    </div>

                    <div className={styles.headerLabels}>
                        Billing Address
                        <div className={styles.infoRow}>
                            <div className={styles.infoContainer}>
                                <div className={styles.infoRow}>
                                    <div className={styles.descriptionContainer}>
                                        <div className={styles.description}>Address Line 1</div>
                                    </div>
                                    <input className={styles.infoInput} placeholder="Enter Your Street Address" />
                                </div>

                                <div className={styles.infoRow}>
                                    <div className={styles.descriptionContainer}>
                                        <div className={styles.description}>Address Line 2</div>
                                    </div>
                                    <input className={styles.infoInput} placeholder="Enter Your Apt, Suite, etc. (optional)" />
                                </div>

                                <div className={styles.infoRow}>
                                    <div className={styles.descriptionContainer}>
                                        <div className={styles.description}>ZIP Code Only (EX: 12345)</div>
                                    </div>
                                    <input className={styles.infoInput} placeholder="Enter Your ZIP Code" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.headerLabels}>
                        Payment
                        <div className={styles.infoContainer}>

                        </div>
                    </div>
                </div>

                <div className={styles.rightContainer}>
                    <div className={styles.orderTotalLabel}>
                        <div className={styles.feeContainer}>
                            <div className={styles.feeText}>
                                Order Total
                            </div>
                            <div className={styles.feePrice}>
                                $90.50
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </main>;
}