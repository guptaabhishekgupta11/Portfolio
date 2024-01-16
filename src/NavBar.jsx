import React from "react";
import { NavLink } from "react-router-dom";
import { ImLastfm2 } from "react-icons/im";
import style from "./NavBar.module.css";
import Spinner from "react-bootstrap/Spinner";

const NavBar = () => {
  return (
    <div className={style.navBar}>
      <section className={style.navContainer}>
        <article className={style.logo}>
          <ImLastfm2 />
          <>
            <Spinner animation="border" size="sm" />
            <Spinner animation="border" />
            <Spinner animation="grow" size="sm" />
            <Spinner animation="grow" />
          </>
        </article>
        <article className={style.navLinks}>
          <NavLink to="/" activeclassname={style.activeLink}>
            Home
          </NavLink>
          <NavLink to="/createData" activeclassname={style.activeLink}>
            Create
          </NavLink>
          <NavLink to="/Data" activeclassname={style.activeLink}>
            Data
          </NavLink>
          <NavLink to="/updateData" activeclassname={style.activeLink}>
            Update
          </NavLink>
          <NavLink to="/deleteUser" activeclassname={style.activeLink}>
            Delete
          </NavLink>
          <NavLink to="/view" activeclassname={style.activeLink}>
            View
          </NavLink>
        </article>
      </section>
    </div>
  );
};

export default NavBar;
