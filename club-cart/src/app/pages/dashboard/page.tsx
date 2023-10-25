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
                <div className={styles.filterLabel}>
                    Filter
                </div>
                <div className={styles.dashLabel}>
                    Shop
                </div>
            </div>

            <div className={styles.dashContentContainer}>
                <div className={styles.filter}>
                    {/* <MultiSelectDropdown /> */}
                    <div className={styles.filterCategoryLabel}>Areas of Interest</div>

                    <div className={styles.filterInputandDescriptionContainer}>
                        <input className={styles.filterInput} type="checkbox"></input>
                        <div className={styles.filterDescription}>Art</div>
                    </div>

                    <div className={styles.filterInputandDescriptionContainer}>
                        <input className={styles.filterInput} type="checkbox"></input>
                        <div className={styles.filterDescription}>Business</div>
                    </div>

                    <div className={styles.filterInputandDescriptionContainer}>
                        <input className={styles.filterInput} type="checkbox"></input>
                        <div className={styles.filterDescription}>Computer Science</div>
                    </div>

                    <div className={styles.filterInputandDescriptionContainer}>
                        <input className={styles.filterInput} type="checkbox"></input>
                        <div className={styles.filterDescription}>Cultural</div>
                    </div>

                    <div className={styles.filterInputandDescriptionContainer}>
                        <input className={styles.filterInput} type="checkbox"></input>
                        <div className={styles.filterDescription}>Environmental</div>
                    </div>

                    <div className={styles.filterInputandDescriptionContainer}>
                        <input className={styles.filterInput} type="checkbox"></input>
                        <div className={styles.filterDescription}>Forigen Language</div>
                    </div>

                    <div className={styles.filterInputandDescriptionContainer}>
                        <input className={styles.filterInput} type="checkbox"></input>
                        <div className={styles.filterDescription}>Honor Society</div>
                    </div>

                    <div className={styles.filterInputandDescriptionContainer}>
                        <input className={styles.filterInput} type="checkbox"></input>
                        <div className={styles.filterDescription}>Math and Science</div>
                    </div>

                    <div className={styles.filterInputandDescriptionContainer}>
                        <input className={styles.filterInput} type="checkbox"></input>
                        <div className={styles.filterDescription}>Medicine</div>
                    </div>

                    <div className={styles.filterInputandDescriptionContainer}>
                        <input className={styles.filterInput} type="checkbox"></input>
                        <div className={styles.filterDescription}>Public Speaking/Competative Events</div>
                    </div>

                    <div className={styles.filterInputandDescriptionContainer}>
                        <input className={styles.filterInput} type="checkbox"></input>
                        <div className={styles.filterDescription}>Service</div>
                    </div>

                    <div className={styles.filterInputandDescriptionContainer}>
                        <input className={styles.filterInput} type="checkbox"></input>
                        <div className={styles.filterDescription}>Other</div>
                    </div>

                    <div className={styles.filterCategoryLabel} style={{ marginTop: "1rem" }}>Amount of Dues</div>
                    <div className={styles.filterInputandDescriptionContainer}>
                        <input className={styles.filterInput} type="checkbox"></input>
                        <div className={styles.filterDescription}>Under $25</div>
                    </div>
                    <div className={styles.filterInputandDescriptionContainer}>
                        <input className={styles.filterInput} type="checkbox"></input>
                        <div className={styles.filterDescription}>$25 - $50</div>
                    </div>
                    <div className={styles.filterInputandDescriptionContainer}>
                        <input className={styles.filterInput} type="checkbox"></input>
                        <div className={styles.filterDescription}>$50 - $500</div>
                    </div>
                </div>

                <div className={styles.dashContent} style={{ minHeight: "35rem" }}>
                    <div className={styles.rowContainer}>
                        <div className={styles.clubContainer}>
                            <div className={styles.clubImagesContainer}>
                                <img src="/default-avatar.png" />
                            </div>
                            <div className={styles.clubName}>
                                PlaceHolder
                            </div>
                            <div className={styles.cost}>
                                $35.00
                            </div>
                            <button className={styles.clubExtra}>
                                <div className={styles.addToCartText}>Add to Cart</div>
                            </button>
                        </div>
                        {/* <div className={styles.clubContainer}>hi</div>
                        <div className={styles.clubContainer}>hi</div>
                        <div className={styles.clubContainer} style={{ marginRight: "0" }}>hi</div> */}
                    </div>
                </div>
            </div>
        </div>
    </main>;
}