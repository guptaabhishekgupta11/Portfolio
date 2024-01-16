import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import st from "./Update.module.css";
const UpdateData = () => {
  let { userId } = useParams();
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3000/user/${userId}`)
      .then((res) => {
        setFormData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userId]);

  let handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3000/user/${userId}`, formData)
      .then((res) => {
        console.log(res);
        navigate("/data");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={st.main}>
      <div className={st.container}>
        <form onSubmit={handleSubmit}>
          <div className={st.user}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className={st.email}>
            <label htmlFor="email">Email ID:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className={st.mobile}>
            <label htmlFor="mobileNumber">Mobile Number:</label>
            <input
              type="text"
              id="mobileNumber"
              name="mobileNumber"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className={st.password}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateData;
