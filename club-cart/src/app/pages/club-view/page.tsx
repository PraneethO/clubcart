"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

import { useRouter, useSearchParams } from "next/navigation";

import axios from "axios";

export default function Dashboard() {
  const router = useRouter(); // fix duplicate identifier issue

  const { data: session, status } = useSession();

  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [picture, setPicture] = useState("");
  const [dues, setDues] = useState(0);
  const [email, setEmail] = useState("");
  const [meetingDay, setMeetingDay] = useState("");

  useEffect(() => {
    if (status == "unauthenticated") {
      return router.push("/");
    }
    if (session?.user?.name == "club") {
      return router.push("/");
    }
  }, [status]);

  useEffect(() => {
    axios
      .post("http://localhost:3000/api/getClubInfo", { id })
      .then((response) => {
        setName(response.data.body.name);
        setDescription(response.data.body.description);
        setPicture(response.data.body.picture);
        setDues(response.data.body.dues);
        setEmail(response.data.body.email);
        setMeetingDay(response.data.body.meetingDay);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

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
          <img src={picture} alt={name} style={{ height: "100%" }} />
        </div>
        <div className={styles.clubContentContainer}>
          <div className={styles.clubName}>{name}</div>
          <div className={styles.cost}>{"$" + dues + ".00"}</div>
          <div className={styles.clubDescriptionTitle}>Email</div>
          <div className={styles.clubDescription}>{email}</div>
          <div className={styles.clubDescriptionTitle}>Meeting Day</div>
          <div className={styles.clubDescription}>{meetingDay}</div>
          <div className={styles.clubDescriptionTitle}>Description</div>
          <div className={styles.clubDescription}>{description}</div>
          <div className={styles.clubDescription}></div>
          <button className={styles.clubExtra}>
            <div className={styles.addToCartText}>Add to Cart</div>
          </button>
        </div>
      </div>
    </main>
  );
}
