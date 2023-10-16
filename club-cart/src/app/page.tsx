import React from "react";
import styles from "./page.module.css";
import { useState } from "react";
import { useClient } from 'react-server-components';

export default function Home() {
  useClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    setError("Test");
  };

  return (
    <main className={styles.main}>
      <nav className={styles.nav}>CLUBCART</nav>
      <div className={styles.firstContainer}>
        <div className={styles.loginForm}>
          <div className={styles.inputContainer} style={{ marginTop: "1rem" }}>
            <div className={styles.inputDesc}>Username or email</div>
            <input
              className={styles.inputField}
              placeholder="Enter your username or email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              style={{ marginBottom: "0.5rem" }}
            ></input>
          </div>
          <div className={styles.inputContainer}>
            <div className={styles.inputDesc} style={{ marginTop: "0.25rem" }}>
              Password
            </div>
            <input
              className={styles.inputField}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
            ></input>
          </div>
          <button className={styles.inputButton} onClick={handleSubmit}>
            Login
          </button>
          <a href="/sign-up" className={styles.inputExtra}>
            Don&rsquo;t have an account? Sign Up
          </a>
          {error ? <div className={styles.errorContainer}>ERROR</div> : ""}
        </div>
        <div className={styles.rightText}>
          <ReactTyped
            strings={["your one-stop", "shop for all things", "clubs."]}
            typeSpeed={50}
            backSpeed={30}
            backDelay={1000}
            loop
          />
        </div>
      </div>
    </main>
  );
}
