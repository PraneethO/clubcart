"use client";

import React, { useEffect } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function UserProfile() {
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

      <div className={styles.contentContainer}>
        <div className={styles.profileContainer}>
          <div className={styles.left}>
            <img
              src="/default-avatar.png"
              width={400}
              height={400}
              style={{ marginLeft: "0", marginRight: "auto" }}
            />
          </div>
          <div className={styles.right}>
            <div className={styles.nameContainer}>
              <div className={styles.bigName}>Neil Porwal</div>
              <div className={styles.schoolName}>
                North Allgheny Senior High School
              </div>
            </div>
            <div className={styles.contactInfoContainer}>
              <div className={styles.contactInfo}>
                Email: nporwal2@nastudents.org
              </div>
              <div className={styles.contactInfo}>Phone: (206) 486-4672</div>
            </div>
            <div className={styles.roleText}>Role(s): Student</div>
          </div>
        </div>

        {/* most of this should auto fill with info from google/the school */}
        <div className={styles.fieldChangeContainer}>
          <div className={styles.fieldChangeTitle}>School Information</div>
          <div className={styles.infoContainer}>
            <div className={styles.infoRow}>
              <div className={styles.descriptionContainer}>
                <div className={styles.firstHalfDescription}>State</div>
                <div className={styles.lastHalfDescription}>County</div>
              </div>
              <div className={styles.splitInputContainer}>
                <input className={styles.splitInput} />
                <input className={styles.splitInput} />
              </div>
            </div>
            <div className={styles.infoRow}>
              <div className={styles.descriptionContainer}>
                <div className={styles.description}>School</div>
              </div>
              <input className={styles.infoInput} />
            </div>
          </div>
        </div>

        <div className={styles.fieldChangeContainer}>
          <div className={styles.fieldChangeTitle}>Student Information</div>
          <div className={styles.infoContainer}>
            <div className={styles.infoRow}>
              <div className={styles.descriptionContainer}>
                <div className={styles.description}>First Name</div>
              </div>
              <input className={styles.infoInput} />
            </div>
            <div className={styles.infoRow}>
              <div className={styles.descriptionContainer}>
                <div className={styles.description}>Last Name</div>
              </div>
              <input className={styles.infoInput} />
            </div>
            <div className={styles.infoRow}>
              <div className={styles.descriptionContainer}>
                <div className={styles.description}>Email</div>
              </div>
              <input className={styles.infoInput} />
            </div>
            <div className={styles.infoRow}>
              <div className={styles.descriptionContainer}>
                <div className={styles.description}>Phone Number</div>
              </div>
              <input className={styles.infoInput} />
            </div>
            <div className={styles.infoRow}>
              <div className={styles.descriptionContainer}>
                <div className={styles.description}>Grade</div>
              </div>
              <input className={styles.infoInput} />
            </div>
            <div className={styles.infoRow}>
              <div className={styles.descriptionContainer}>
                <div className={styles.description}>Student ID</div>
              </div>
              <input className={styles.infoInput} />
            </div>

            <div className={styles.infoRow}>
              <div className={styles.descriptionContainer}>
                <div className={styles.description}>Birth Date</div>
              </div>
              <input className={styles.infoInput} type="date" />
            </div>
          </div>
        </div>

        <div className={styles.fieldChangeContainer}>
          <div className={styles.fieldChangeTitle}>Address</div>
          <div className={styles.infoContainer}>
            <div className={styles.infoRow}>
              <div className={styles.descriptionContainer}>
                <div className={styles.description}>Address Line 1</div>
              </div>
              <input className={styles.infoInput} />
            </div>
            <div className={styles.infoRow}>
              <div className={styles.descriptionContainer}>
                <div className={styles.description}>Address Line 2</div>
              </div>
              <input className={styles.infoInput} />
            </div>
            <div className={styles.infoRow}>
              <div className={styles.descriptionContainer}>
                <div className={styles.description}>City</div>
              </div>
              <input className={styles.infoInput} />
            </div>
            <div className={styles.infoRow}>
              <div className={styles.descriptionContainer}>
                <div className={styles.description}>State</div>
              </div>
              <input className={styles.infoInput} />
            </div>
            <div className={styles.infoRow}>
              <div className={styles.descriptionContainer}>
                <div className={styles.description}>Zip Code</div>
              </div>
              <input className={styles.infoInput} />
            </div>
          </div>
        </div>
        <button className={styles.updateButton}>Update Changes</button>
      </div>
    </main>
  );
}
