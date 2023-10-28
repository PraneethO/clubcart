import React, { ChangeEvent, useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";

export default function Payment() {
    return <main className={styles.main}>
<div className={styles.nav}>
            <Link href="/pages/dashboard" style={{ textDecoration: "none", color: "#044e8b" }}>
                <div className={styles.navLogo}>CLUBCART</div>
            </Link>
            <Link href="/pages/dashboard" className={styles.link} style={{ marginLeft: "auto"}}>
                <button className={styles.navButton}>
                    <img src="/home-icon.png" width={35} height={35} style={{ marginLeft: "auto", marginRight: "auto"}} />
                    Shop
                </button>
            </Link>
            <Link href="/pages/cart" className={styles.link} style={{ marginLeft: "1rem"}}>
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

        <div className={styles.paymentContainer}>
            <div className={styles.paymentLabelsContainer}>
                <div className={styles.paymentProcessContainer}>
                    <div className={styles.headerLabels}>
                        Contact Information
                        <div className={styles.infoContainer}>
                            <div className={styles.infoRow}>
                                <div className={styles.descriptionContainer}>
                                    <div className={styles.firstHalfDescription}>First Name</div>
                                    <div className={styles.lastHalfDescription}>Last Name</div>
                                </div>
                                <div className={styles.splitInputContainer}>
                                    <input className={styles.splitInput} placeholder="Enter Your First Name" />
                                    <input className={styles.splitInput} placeholder="Enter Your Last Name" />
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
                        <div className={styles.sameAddressContainer}>

                            {/* make it so a check mark appears */}
                            <input className={styles.sameAddressButton} type="checkbox"/>
                            My Billing and Shipping are the same
                        </div>
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
                            <button className={styles.continueButton}>Continue</button>
                        </div>
                    </div>

                    <div className={styles.headerLabels}>
                        Shipping Address
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
                            <button className={styles.continueButton}>Continue</button>
                        </div>
                    </div>

                    <div className={styles.headerLabels}>
                        Payment
                        <div className={styles.infoContainer}>
                            <div className={styles.infoRow}>
                                <div className={styles.descriptionContainer}>
                                    <div className={styles.description}>Credit/Debit Card Number</div>
                                </div>
                                <input
                                    className={styles.infoInput}
                                    placeholder="Enter Your Card Number"
                                />
                            </div>
                            <div className={styles.infoRow}>
                                <div className={styles.descriptionContainer}>
                                    <div className={styles.firstHalfDescription}>Expiration Date</div>
                                    <div className={styles.lastHalfDescription}>CVV</div>
                                </div>
                                <div className={styles.splitInputContainer}>
                                    <input
                                        className={styles.splitInput}
                                        placeholder="Exp. MM/YY"
                                    />
                                    <input
                                        className={styles.splitInput}
                                        placeholder="Enter Your CVV"
                                    />
                                </div>
                            </div>
                            <div className={styles.infoRow} style={{marginTop: "2rem"}}>
                                <div className={styles.descriptionContainer}>
                                    <div className={styles.description}>Alternative Method</div>
                                </div>
                            </div>
                            <button className={styles.continueButton} style={{backgroundColor: "#fff", border: "3px #000 solid", color: "#000", fontStyle: "italic", marginTop: "0"}}>PayPal</button>
                            <button className={styles.continueButton} style={{backgroundColor: "#044e8b", border: "3px #044e8b solid", color: "white", marginTop: "2.5rem"}}>Finish & Pay</button>
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