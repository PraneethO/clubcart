"use client";

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
        <div className={styles.leftPartition}>CLUBCART</div>
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
              Authorization
            </button>
          </div>
          {studentForm ? (
            <div className={styles.loginForm}>
              <div className={styles.twoWayInput}>
                <div className={styles.inputContainer}>
                  <div className={styles.inputDesc}>First Name</div>
                  <input
                    className={styles.inputField}
                    placeholder="Enter your first name"
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  ></input>
                </div>
                <div className={styles.inputContainer}>
                  <div className={styles.inputDesc}>Last Name</div>
                  <input
                    className={styles.inputField}
                    placeholder="Enter your last name"
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  ></input>
                </div>
              </div>
              <div className={styles.inputContainer}>
                <div className={styles.inputDesc}>Personal Email</div>
                <input
                  className={styles.inputField}
                  placeholder="Enter your personal email"
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
              <div className={styles.inputContainer}>
                <div className={styles.inputDesc}>School Code</div>
                <input
                  className={styles.inputField}
                  placeholder="Enter your school code"
                  value={school}
                  onChange={(e) => {
                    setSchool(e.target.value);
                  }}
                ></input>
              </div>
              <button className={styles.buttonSubmit}>Join</button>
            </div>
          ) : (
            <div className={styles.loginForm}>
              <div className={styles.inputContainer}>
                <div className={styles.inputDesc}>School</div>
                <input
                  className={styles.inputField}
                  placeholder="Enter your school"
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
                  placeholder="Enter your email"
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
              <div className={styles.inputContainer}>
                <div className={styles.inputDesc}>Confirm Password</div>
                <input
                  className={styles.inputField}
                  placeholder="Confirm Your Password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                ></input>
              </div>
              <button className={styles.buttonSubmit}>Join</button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
