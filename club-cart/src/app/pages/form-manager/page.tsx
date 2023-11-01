"use client";

import React, { useEffect } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const router = useRouter();

  const { data: session, status } = useSession();

  useEffect(() => {
    if (status == "unauthenticated") {
      return router.push("/");
    }
    if (session?.user?.name == "student") {
      return router.push("/");
    }
  }, [status]);

  return (
    <main className={styles.main}>
      <div className={styles.nav}>
        <Link
          href="/pages/admin-dashboard"
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
          href="/pages/admin-dashboard"
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
            Home
          </button>
        </Link>
        <Link
          href="/pages/form-manager"
          className={styles.link}
          style={{ marginLeft: "1rem" }}
        >
          <button className={styles.navButton}>
            <img
              src="/forms-icon.png"
              width={35}
              height={35}
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                transform: "translateX(-2px)",
              }}
            />
            forms
          </button>
        </Link>
        <Link
          href="/pages/admin-profile"
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
          <div className={styles.greetingLabel}>Form Manager</div>
        </div>

        <div className={styles.dashContainerContent}>
          <div className={styles.headerLabels}>
            <div className={styles.dashboardButton}>Create Club</div>
            <div className={styles.infoContainer}>
              <div className={styles.infoRow}>
                <div className={styles.descriptionContainer}>
                  <div className={styles.firstHalfDescription}>Club Name</div>
                  <div className={styles.lastHalfDescription}>Dues</div>
                </div>
                <div className={styles.splitInputContainer}>
                  <input
                    className={styles.splitInput}
                    placeholder="Enter the Club's Name"
                    // make it numbers only
                  />
                  <input
                    className={styles.splitInput}
                    placeholder="Enter the Number of External Forms You Would Like Include"
                    type="number"
                    min={0}
                  />
                </div>

                <div className={styles.infoRow}>
                  <div className={styles.descriptionContainer}>
                    <div className={styles.description}>Description</div>
                  </div>
                  {/* <input className={styles.tallInput} placeholder="Enter a Description" type="text"></input> */}
                  <textarea
                    className={styles.tallInput}
                    placeholder="Enter a Description"
                    rows={6}
                  ></textarea>
                </div>

                <div className={styles.infoRow}>
                  <div className={styles.descriptionContainer}>
                    <div className={styles.description}>Pictures</div>
                  </div>
                  <input
                    className={styles.tallInput}
                    placeholder="Upload Images"
                    type="file"
                  ></input>
                </div>

                <button className={styles.continueButton}>Create Club</button>
              </div>
            </div>
          </div>

          <div className={styles.headerLabels}>
            <Link href="/pages/form-manager">
              <button className={styles.dashboardButton}>
                External Form Upload
              </button>
            </Link>
            <div className={styles.infoContainer}>
              <div className={styles.infoRow}>
                <div className={styles.descriptionContainer}>
                  <div className={styles.description}>
                    Number of External Forms
                  </div>
                </div>
                <input
                  className={styles.infoInput}
                  placeholder="Enter the Number of External Forms To Be Included"
                  type="number"
                  min={0}
                ></input>
              </div>

              <div className={styles.infoRow}>
                <div className={styles.descriptionContainer}>
                  <div className={styles.firstHalfDescription}>
                    Form Name (Please include Your Club's Name)
                  </div>
                  <div className={styles.lastHalfDescription}>Link to Form</div>
                </div>
                <div className={styles.splitInputContainer}>
                  <input
                    className={styles.splitInput}
                    placeholder="Enter the Name of Your Form"
                  />
                  <input
                    className={styles.splitInput}
                    placeholder="Enter the Number of External Forms You Would Like Include"
                    type="number"
                    min={0}
                  />
                </div>
                <div
                  className={styles.lastHalfDescription}
                  style={{ marginLeft: "auto", marginTop: "1rem" }}
                >
                  PDF Upload
                </div>
                <input
                  className={styles.splitInput}
                  style={{ marginLeft: "auto" }}
                  type="file"
                />
              </div>

              <Link
                href="/pages/form-manager"
                style={{ textDecoration: "none" }}
              >
                <button className={styles.continueButton}>Upload Forms</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
