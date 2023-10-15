"use client";

import styles from "./page.module.css";
import { useState } from "react";

import Link from "next/link";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = () => {
    setError("Test");
  };

  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <div>CLUBCART</div>
        <Link href="/pages/sign-up">
          <button className={styles.navButton}>Join Us</button>
        </Link>
      </nav>
      <div className={styles.firstContainer}>
        <div className={styles.loginForm}>
          <div className={styles.inputContainer}>
            <div className={styles.inputDesc}>Username or email</div>
            <input
              className={styles.inputField}
              placeholder="Enter your username or email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
          </div>
          <div className={styles.inputContainer}>
            <div className={styles.inputDesc}>Password</div>
            <input
              className={styles.inputField}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
          </div>
          <button className={styles.inputButton} onClick={handleSubmit}>
            Login
          </button>
          <a href="/pages/sign-up" className={styles.inputExtra}>
            Don&rsquo;t have an account? Sign Up
          </a>
          {error ? <div className={styles.errorContainer}>error</div> : ""}
        </div>
        <div className={styles.rightText}>
          your one-stop <br />
          shop for all things <br />
          clubs.
        </div>
      </div>
    </main>
  );
}
