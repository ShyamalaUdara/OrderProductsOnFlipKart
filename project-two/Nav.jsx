import React from "react";
import {NavLink}from "react-router-dom"
import Styles from './app.module.css';
import { SiFlipkart } from "react-icons/si";
let Nav=()=>
{
    return(
         <section className={Styles.nav}>
          <article className={Styles.leftnav}>
              <SiFlipkart/>
            </article>
           <article className={Styles.rightnav}>
        <NavLink className={Styles.Links} to="/" >Home</NavLink>
        <NavLink className={Styles.Links}  to="/products">Products</NavLink>
        <NavLink className={Styles.Links}  to="/cart">Cart</NavLink>
        <NavLink className={Styles.Links} to="/order">Order</NavLink>
        <NavLink className={Styles.Links}  to="/profile">Profile</NavLink>
        <NavLink className={Styles.Links}  to="/portal"></NavLink>
       
        </article>
        </section>
      )}
      export default Nav;