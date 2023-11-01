"use client"

import React, { useEffect } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
    const router = useRouter();

    const { data: session, status } = useSession();
  
    useEffect(() => {
      if (status == "unauthenticated") {
        return router.push("/");
      }
      if (session?.user?.name == "club") {
        return router.push("/");
      }
    }, [status]);

    return <main className={styles.main}>
        <div className={styles.nav}>
            <Link
                href="/pages/shop"
                style={{ textDecoration: "none", color: "#044e8b" }}
            >
                <div className={styles.navLogo}>CLUBCART</div>
            </Link>
            <Link
                href="/pages/shop"
                className={styles.link}
                style={{ marginLeft: "auto" }}
            >
                <button className={styles.navButton}>
                    <img
                        src="/home-icon.png"
                        width={35}
                        height={35}
                        style={{ marginLeft: "auto", marginRight: "0" }}
                    />
                    Shop
                </button>
            </Link>
            <Link
                href="/pages/cart"
                className={styles.link}
                style={{ marginLeft: "1rem" }}
            >
                <button className={styles.navButton}>
                    <img
                        src="/shopping-cart.png"
                        width={35}
                        height={35}
                        style={{
                            marginLeft: "auto",
                            marginRight: "auto",
                            transform: "translateX(-2px)",
                        }}
                    />
                    cart
                </button>
            </Link>

            <Link
                href="/pages/user-profile"
                className={styles.link}
                style={{ marginLeft: "1rem", marginRight: "1rem" }}
            >
                <button className={styles.navButton}>
                    <img
                        src="/default-avatar.png"
                        width={35}
                        height={35}
                        style={{ marginLeft: "auto", marginRight: "auto" }}
                    />
                    profile
                </button>
            </Link>

            <div className={styles.link}>
                <button
                    onClick={() => {
                        signOut({ redirect: true, callbackUrl: "http://localhost:3000" });
                    }}
                    className={styles.navButton}
                >
                    <img
                        src="/logout-icon.png"
                        width={35}
                        height={35}
                        style={{ transform: "translateX(-4px)" }}
                    />
                    LogOut
                </button>
            </div>
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