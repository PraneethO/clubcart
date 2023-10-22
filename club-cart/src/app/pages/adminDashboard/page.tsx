import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

export default function AdminDashboard() {
    return <main className={styles.main}>
        <div className={styles.nav}>
            <Link href="/pages/adminDashboard" style={{ textDecoration: "none", color: "#044e8b" }}>
                <div className={styles.navLogo}>CLUBCART</div>
            </Link>
            <Link href="/pages/adminDashboard" className={styles.link} style={{ marginLeft: "auto" }}>
                <button className={styles.navButton}>
                    <img src="/forms-icon.png" width={40} height={40} style={{ marginLeft: "auto", marginRight: "auto", transform: "translateX(-2px)" }} />
                    forms
                </button>
            </Link>
            <Link href="/pages/adminDashboard" className={styles.link} style={{ marginLeft: "1rem" }}>
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
                    <button className={styles.dashboardButton}>Form Manager</button>
                    <div className={styles.infoContainer}>

                        <div className={styles.infoRow}>
                            <div className={styles.descriptionContainer}>
                                <div className={styles.description}>Club Name</div>
                            </div>
                            <input className={styles.infoInput} placeholder="Enter Your Email"></input>
                        </div>

                        <button className={styles.continueButton}>Continue to Forms Manager</button>
                    </div>
                </div>
            </div>

            <div className={styles.right}>
                <div className={styles.actionItemsContainer}>i</div>
            </div>

        </div>

    </main>;
}