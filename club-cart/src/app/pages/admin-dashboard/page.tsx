import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

export default function AdminDashboard() {
    return <main className={styles.main}>
        <div className={styles.nav}>
            <Link href="/pages/admin-dashboard" style={{ textDecoration: "none", color: "#044e8b" }}>
                <div className={styles.navLogo}>CLUBCART</div>
            </Link>
            <Link href="/pages/form-manager" className={styles.link} style={{ marginLeft: "auto" }}>
                <button className={styles.navButton}>
                    <img src="/forms-icon.png" width={40} height={40} style={{ marginLeft: "auto", marginRight: "auto", transform: "translateX(-2px)" }} />
                    forms
                </button>
            </Link>
            <Link href="/pages/admin-dashboard" className={styles.link} style={{ marginLeft: "1rem" }}>
                <button className={styles.navButton}>
                    <img src="/default-avatar.png" width={40} height={40} style={{ marginLeft: "auto", marginRight: "auto" }} />
                    profile
                </button>
            </Link>
        </div>

        <div className={styles.dashContainer}>

            <div className={styles.dashLabelContainer}>
                <div className={styles.greetingLabel}>
                    Welcome!
                </div>
                <div className={styles.dashLabel}>
                    Action Items
                </div>
            </div>
        </div>

        <div className={styles.dashContainerContent}>
            <div className={styles.left}>
                <div className={styles.headerLabels}>
                    <Link href="/pages/formManager">
                        <button className={styles.dashboardButton}>Form Manager</button>
                    </Link>
                    <div className={styles.infoContainer}>

                        <div className={styles.infoRow}>
                            <div className={styles.descriptionContainer}>
                                <div className={styles.description}>Club Name</div>
                            </div>
                            <input className={styles.infoInput} placeholder="Enter Your Club's Name"></input>
                        </div>

                        <div className={styles.infoRow}>
                            <div className={styles.descriptionContainer}>
                                <div className={styles.firstHalfDescription}>DUES</div>
                                <div className={styles.lastHalfDescription}>Number of Additional Forms</div>
                            </div>
                            <div className={styles.splitInputContainer}>
                                <input
                                    className={styles.splitInput}
                                    placeholder="Enter The Amount of Dues (enter numbers only)"
                                />
                                <input
                                    className={styles.splitInput}
                                    placeholder="Enter the Number of External Forms You Would Like Include"
                                    type="number"
                                />
                            </div>
                        </div>

                        {/* <div className={styles.infoRow}>
                            <div className={styles.descriptionContainer}>
                                <div className={styles.description}>Additional Forms</div>
                            </div>
                            <input className={styles.infoInput} placeholder="Paste The Link to Any External Forms"></input>
                        </div> */}

                        <Link href="/pages/formManager" style={{ textDecoration: "none" }}>
                            <button className={styles.continueButton}>Continue to Form Manager</button>
                        </Link>
                    </div>
                </div>

                <div className={styles.headerLabels}>
                    <Link href="/pages/formManager">
                        <button className={styles.dashboardButton}>CHANGE</button>
                    </Link>
                    <div className={styles.infoContainer}>

                        <div className={styles.infoRow}>
                            <div className={styles.descriptionContainer}>
                                <div className={styles.description}>Club Name</div>
                            </div>
                            <input className={styles.infoInput} placeholder="Enter Your Club's Name"></input>
                        </div>

                        <Link href="/pages/formManager" style={{ textDecoration: "none" }}>
                            <button className={styles.continueButton}>Continue to (CHANGE)</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className={styles.right}>
                <div className={styles.actionItemsContainer}>
                    <div className={styles.actionItem}>- Forms</div>
                    <div className={styles.actionItem}>- Forms</div>
                    <div className={styles.actionItem}>- Forms</div>
                </div>
            </div>

        </div>

    </main>;
}