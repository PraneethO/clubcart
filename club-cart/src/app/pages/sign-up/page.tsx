"use client";

import Link from "next/link";
import styles from "./page.module.css";

import { useState } from "react";

export default function SignUp() {
  const [studentForm, setStudentForm] = useState(true);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [school, setSchool] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <main className={styles.main}>
      <div className={styles.firstContainer}>
        <Link href="/" style={{textDecoration: "none"}}>
          <div className={styles.leftPartition}>CLUBCART</div>
        </Link>
        <div className={styles.rightPartition}>
          <div className={styles.buttonSwitch}>
            <button
              className={styles.switchButton}
              onClick={() => {
                setStudentForm(true);
              }}
              style={
                studentForm
                  ? { backgroundColor: "rgb(4, 78, 139)" }
                  : { background: "transparent" }
              }
            >
              Student
            </button>
            <button
              className={styles.switchButton}
              onClick={() => {
                setStudentForm(false);
              }}
              style={
                !studentForm
                  ? { backgroundColor: "rgb(4, 78, 139)" }
                  : { background: "transparent" }
              }
            >
              Administration
            </button>
          </div>
          {studentForm ? (
            <div className={styles.loginForm}>
              <div className={styles.twoWayInput}>
                <div className={styles.inputContainer}>
                  <div className={styles.inputDesc} style={{marginTop: "0"}}>First Name</div>
                  <input
                    className={styles.inputField}
                    style={{width: "95%"}}
                    placeholder="Enter Your First Name"
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  ></input>
                </div>
                <div className={styles.inputContainer}>
                  <div className={styles.inputDesc} style={{marginLeft: "5%", marginTop: "0"}}>Last Name</div>
                  <input
                    className={styles.inputField}
                    style={{width: "95%", marginLeft: "5%"}}
                    placeholder="Enter Your First Name"
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  ></input>
                </div>
              </div>
              <div className={styles.inputContainer}>
                <div className={styles.inputDesc}>School Email</div>
                <input
                  className={styles.inputField}
                  style={{width: "100%"}}
                  placeholder="Enter Your School Email"
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
                  style={{width: "100%"}}
                  placeholder="Enter Your password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                ></input>
              </div>
              <div className={styles.inputContainer}>
                <div className={styles.inputDesc}>School Code</div>
                <input
                  className={styles.inputField}
                  style={{width: "100%"}}
                  placeholder="Enter Your school code"
                  value={school}
                  onChange={(e) => {
                    setSchool(e.target.value);
                  }}
                ></input>
              </div>
              <button className={styles.buttonSubmit}>Agree & Join</button>
            </div>
          ) : (
            <div className={styles.loginForm}>
              <div className={styles.inputContainer}>
                <div className={styles.inputDesc} style={{marginTop: "0"}}>School</div>
                <input
                  className={styles.inputField}
                  style={{width: "100%"}}
                  placeholder="Enter Your school"
                  value={school}
                  onChange={(e) => {
                    setSchool(e.target.value);
                  }}
                ></input>
              </div>
              <div className={styles.inputContainer}>
                <div className={styles.inputDesc}>Email</div>
                <input
                  className={styles.inputField}
                  style={{width: "100%"}}
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                ></input>
              </div>
              <div className={styles.inputContainer}>
                <div className={styles.inputDesc}>Club Name</div>
                <input
                  className={styles.inputField}
                  style={{width: "100%"}}
                  placeholder="Enter Your Club's Name"
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
                  style={{width: "100%"}}
                  placeholder="Enter Your Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                ></input>
              </div>
              <div className={styles.inputContainer}>
                <div className={styles.inputDesc}>Confirm Password</div>
                <input
                  className={styles.inputField}
                  style={{width: "100%"}}
                  placeholder="Confirm Your Password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                ></input>
              </div>
              <button className={styles.buttonSubmit}>Agree & Join</button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
