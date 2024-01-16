import React, { useState, useEffect } from "react";
import styles from "./CreateData.module.css";
import Axios from "axios";

const CreateData = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Submitted Data:", state);

    Axios.post("http://localhost:3000/user", state)
      .then((response) => {
        console.log("Server response:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleInputChange = (field, value) => {
    setState((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  return (
    <>
      <div className={styles.container}>
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="name">
              Name :
            </label>
            <input
              className={styles.input}
              type="text"
              autoComplete="off"
              id="name"
              value={state.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="email">
              Email :
            </label>
            <input
              className={styles.input}
              type="email"
              id="email"
              autoComplete="off"
              value={state.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="phone">
              Phone :
            </label>
            <input
              className={styles.input}
              type="number"
              id="phone"
              autoComplete="off"
              value={state.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="data4">
              Password :
            </label>
            <input
              className={styles.input}
              type="password"
              id="password"
              autoComplete="off"
              value={state.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
            />
          </div>

          <button className={styles.button} type="submit">
            Submit
          </button>
        </form>
      </div>
     
    </>
  );
};

export default CreateData;
