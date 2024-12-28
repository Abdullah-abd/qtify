/*eslint-disable*/
import React from "react";
import Styles from "./Navbar.module.css"
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";

const Navbar = (searchData)=>{
    return (
        <nav className={Styles.navbar}>
        <Logo/>
        <Search/>
        <Button/>
       </nav>
      );
}

export default Navbar;