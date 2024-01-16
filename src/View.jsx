import React, { useState, useEffect } from "react";
import Axios from "axios";
import {useParams } from "react-router-dom";
import view from './View.module.css';

const View = () => {

  const [user, setUser] = useState(null);
  const {userId}=useParams();

  
  useEffect(() => {
    Axios.get("http://localhost:3000/user/" + userId).then((res)=>{
      setUser(res.data)
    }).catch((err)=>{
      console.log(err);
    })
    
  }, [userId]);

  

  return (
    <div className={view.container}>
      <h1>User Details</h1>
      {user ? (
        <>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Password: {user.password}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default View;
