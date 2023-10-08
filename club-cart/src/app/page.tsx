import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <nav className={styles.nav}>CLUBCART</nav>
      <div className={styles.firstContainer}>
        <div className={styles.loginForm}>
          <div className={styles.inputContainer}>
            <div className={styles.inputDesc}>Username or email</div>
            <input
              className={styles.inputField}
              placeholder="Enter your username or email"
            ></input>
          </div>
          <div className={styles.inputContainer}>
            <div className={styles.inputDesc}>Password</div>
            <input
              className={styles.inputField}
              placeholder="Enter your password"
            ></input>
          </div>
          <button className={styles.inputButton}>Login</button>
          <a href="/sign-up" className={styles.inputExtra}>
            Don&rsquo;t have an account? Sign Up
          </a>
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
