"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { signOut, useSession } from "next-auth/react";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

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

  return (
    <main className={styles.main}>
      <div className={styles.nav}>
        <Link
          href="/pages/shop"
          style={{ textDecoration: "none", color: "#044e8b" }}
        >
          <div className={styles.navLogo}>CLUBCART</div>
        </Link>
        <button
          onClick={() => {
            signOut({ redirect: true, callbackUrl: "http://localhost:3000" });
          }}
          className={styles.link}
          style={{
            marginLeft: "auto",
            height: "250%",
            fontSize: "1.5rem",
            backgroundColor: "red",
            border: "none",
            cursor: "pointer",
          }}
        >
          Log Out
        </button>
        <Link
          href="/pages/shop"
          className={styles.link}
          style={{ marginLeft: "1rem" }}
        >
          <button className={styles.navButton}>
            <img
              src="/home-icon.png"
              width={35}
              height={35}
              style={{ marginLeft: "auto", marginRight: "auto" }}
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
          style={{ marginLeft: "1rem" }}
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
      </div>

      <div className={styles.dashContainer}>
        <div className={styles.dashLabelContainer}>
          <div className={styles.filterLabel}>Filter</div>
          <div className={styles.dashLabel}>Shop</div>
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
              <div className={styles.filterDescription}>
                Public Speaking/Competative Events
              </div>
            </div>

            <div className={styles.filterInputandDescriptionContainer}>
              <input className={styles.filterInput} type="checkbox"></input>
              <div className={styles.filterDescription}>Service</div>
            </div>

            <div className={styles.filterInputandDescriptionContainer}>
              <input className={styles.filterInput} type="checkbox"></input>
              <div className={styles.filterDescription}>Other</div>
            </div>

            <div
              className={styles.filterCategoryLabel}
              style={{ marginTop: "1rem" }}
            >
              Amount of Dues
            </div>
            <div className={styles.filterInputandDescriptionContainer}>
              <input className={styles.filterInput} type="checkbox"></input>
              <div className={styles.filterDescription}>Free</div>
            </div>
            <div className={styles.filterInputandDescriptionContainer}>
              <input className={styles.filterInput} type="checkbox"></input>
              <div className={styles.filterDescription}>$1 - $25</div>
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
              <Link href="/pages/club-view" className={styles.clubContainer}>
                <div className={styles.clubImagesContainer}>
                  <img src="/default-avatar.png" />
                </div>
                <div className={styles.clubName}>PlaceHolder</div>
                <div className={styles.cost}>$35.00</div>
                <button className={styles.clubExtra}>
                  <div className={styles.addToCartText}>Add to Cart</div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
