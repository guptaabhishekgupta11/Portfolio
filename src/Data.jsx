/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Axios from "axios";
import stylish from "./Data.module.css";
import { Link, useNavigate } from "react-router-dom";
import View from "./View";
import UpdataData from "./UpdataData";

const Data = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  
  const deleteUser = async (userId) => {
    try {
      await Axios.delete(`http://localhost:3000/user/${userId}`);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await Axios.get("http://localhost:3000/user");
        setUsers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = (userId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirmDelete) {
      deleteUser(userId);
    }
  };

  return (
    <div>
      <div className={stylish.container}>
        {loading ? (
          <p className={stylish.loading}>Loading...</p>
        ) : users.length === 0 ? (
          <p>No data available</p>
        ) : (
          <table className={stylish.table}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name:</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Password</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.password}</td>
                  <td>
                   
                    <Link to={`/view/${user.id}`} className={stylish.viewButton}>View</Link>
                    <Link to={`/updateData/${user.id}`} className={stylish.viewButton}>update</Link>
                  </td>
                  <td>
                    <button
                      className={stylish.deleteButton}
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};
export default Data;
