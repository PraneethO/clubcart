"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

import axios from "axios";

export default function SchoolCodes() {
  const [name, setName] = useState("");
  const [zip, setZip] = useState("");
  const [schoolList, setSchoolList] = useState([{ name: "", code: "" }]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/schools")
      .then((response) => {
        console.log(response.data.body);
        setSchoolList(response.data.body);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = () => {
    axios
      .post("http://localhost:3000/api/schools", { name, zip })
      .then((response) => {
        location.reload();
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <main className={styles.main}>
      <nav className={styles.nav}>CLUBCART</nav>
      <div className={styles.mainContainer}>
        If you want to add a school, use this form, but make sure your school is
        not mentioned below (There might be alternate names).
        <div className={styles.threeWay}>
          <div className={styles.inputContainer}>
            <div className={styles.inputDesc}>School Name</div>
            <input
              className={styles.inputField}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={styles.inputContainer}>
            <div className={styles.inputDesc}>Zip Code</div>
            <input
              className={styles.inputField}
              type="number"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            Add School
          </button>
        </div>
        <div className={styles.schoolListContainer}>
          <div className={styles.schoolInfo}>
            <div>School Name:</div>
            <div>School Code:</div>
          </div>
          {schoolList.map((school, index) => (
            <div key={index} className={styles.schoolInfo}>
              <div>{school.name}</div>
              <div>{school.code}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
